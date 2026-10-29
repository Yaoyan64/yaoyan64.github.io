/* Local, offline 3D scenes.
 * The hero is an idealized mathematical helix: decorative art, not a measured structure.
 * AI, omics, causal, and terrain scenes are conceptual data visualizations.
 */
(() => {
  'use strict';
  const T = window.THREE;
  const $ = id => document.getElementById(id);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches || ['boot','open'].includes(document.documentElement.dataset.intro), last = 0, clock = 0, dirty = true;
  const scenes = [], semanticLabels = [], heroState = { yaw: 0, pitch: 0, baseYaw: 0, drag: false, zoom: 1, drawnYaw: 0, drawnPitch: 0, drawnZoom: 1 };
  let transitionUntil = 0;
  const ease = (current, target, dt, speed = 7) => current + (target - current) * (1 - Math.exp(-Math.max(0.001, dt) * speed));
  function wake() { dirty = true; transitionUntil = performance.now() + (reduced.matches ? 0 : 1200); }
  const palette = { teal: 0x149c9a, blue: 0x5266d4, purple: 0x9a72cf, coral: 0xe68d79, gold: 0xd2ac60, ink: 0x203e4a };
  const english = () => window.WX_I18N?.getLang() === 'en' || document.documentElement.lang === 'en';
  const tr = (zh, en) => english() ? en : zh;
  const seed = n => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const v = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
  const visible = el => { const r = el.getBoundingClientRect(); return r.bottom > -80 && r.top < innerHeight + 80 && r.width > 0 && r.height > 0; };
  function styleMotion() {
    document.documentElement.dataset.motion = paused ? 'paused' : 'running';
    const b = $('motion-toggle');
    if (b) {
      b.setAttribute('aria-pressed', String(paused));
      b.setAttribute('aria-label', paused ? tr('恢复动效', 'Resume motion') : tr('暂停动效', 'Pause motion'));
      const label = b.querySelector('[data-motion-label]') || b;
      label.textContent = paused ? tr('恢复动效', 'Resume motion') : tr('暂停动效', 'Pause motion');
    }
  }
  function setMotion(value) { paused = value === false || value === 'paused'; dirty = true; styleMotion(); }
  function material(color, options = {}) {
    return new T.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.21, ...options });
  }
  function meshSphere(radius, color, options = {}) {
    return new T.Mesh(new T.SphereGeometry(radius, 20, 14), material(color, options));
  }
  function line(points, color, opacity = 1, dashed = false) {
    const geometry = new T.BufferGeometry().setFromPoints(points);
    const mat = dashed ? new T.LineDashedMaterial({ color, transparent: true, opacity, dashSize: 0.12, gapSize: 0.1 }) : new T.LineBasicMaterial({ color, transparent: true, opacity });
    const result = new T.Line(geometry, mat);
    if (dashed) result.computeLineDistances();
    return result;
  }
  function label(zh, en, width = 2.4) {
    const c = document.createElement('canvas'); c.width = 512; c.height = 112;
    const texture = new T.CanvasTexture(c); texture.colorSpace = T.SRGBColorSpace;
    const sprite = new T.Sprite(new T.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
    sprite.scale.set(width, width * 112 / 512, 1);
    const refresh = () => {
      const ctx = c.getContext('2d'); ctx.clearRect(0, 0, c.width, c.height);
      ctx.font = '500 72px "Times New Roman", "Microsoft YaHei", serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = window.WX_VISUAL_PALETTE?.get().ink || '#385b67';
      ctx.fillText(tr(zh, en), 256, 56, 498); texture.needsUpdate = true;
    };
    semanticLabels.push(refresh); refresh(); return sprite;
  }
  function makeScene(id, distance, fov = 36) {
    const canvas = $(id); if (!canvas || !T) return null;
    try {
      const renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
      renderer.setClearColor(0xffffff, 0); renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.6));
      renderer.outputColorSpace = T.SRGBColorSpace;
      renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.03;
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(fov, 1, 0.1, 160); camera.position.z = distance;
      scene.add(new T.HemisphereLight(0xffffff, 0xa5bdc8, 1.65));
      const key = new T.DirectionalLight(0xffffff, 2.2); key.position.set(-5, 8, 12); scene.add(key);
      const fill = new T.DirectionalLight(0xb1dbe7, 0.8); fill.position.set(8, -1, 4); scene.add(fill);
      const rim = new T.DirectionalLight(0xdac8f0, 1.3); rim.position.set(3, 7, -9); scene.add(rim);
      const root = new T.Group(), orbitRoot = new T.Group(); scene.add(orbitRoot); orbitRoot.add(root);
      const state = { id, canvas, renderer, scene, camera, root, orbitRoot, width: 0, height: 0, frame: 0, tick: () => {}, dead: false };
      if (id !== 'hero-canvas') state.input = window.WX_RESEARCH_INPUTS?.attach(canvas, id === 'ai-canvas' ? 'llm' : id.split('-')[0], { onChange: wake });
      canvas.dataset.renderer = 'webgl'; canvas.dataset.frame = '0';
      canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); state.dead = true; canvas.dataset.renderer = 'context-lost'; });
      canvas.addEventListener('webglcontextrestored', () => { state.dead = false; dirty = true; });
      new ResizeObserver(() => { state.width = 0; dirty = true; }).observe(canvas);
      scenes.push(state); return state;
    } catch (error) {
      canvas.dataset.renderer = 'fallback';
      return null;
    }
  }
  function fit(state) {
    const width = Math.round(state.canvas.clientWidth), height = Math.round(state.canvas.clientHeight);
    if (!width || !height) return false;
    if (width !== state.width || height !== state.height) {
      state.width = width; state.height = height;
      state.renderer.setSize(width, height, false); state.camera.aspect = width / height;
      state.camera.updateProjectionMatrix();
    }
    return true;
  }
  function rigidCylinder(a, b, radius, color) {
    const delta = b.clone().sub(a);
    const result = new T.Mesh(new T.CylinderGeometry(radius, radius, delta.length(), 10), material(color));
    result.position.copy(a).add(b).multiplyScalar(0.5);
    result.quaternion.setFromUnitVectors(v(0, 1, 0), delta.normalize());
    return result;
  }
  let hero, llmState, causalState, omicsState;
  const LLM_INPUT={zh:['肠道','微生物','与','宿主','免疫'],en:['Gut','microbes','and','host','immunity']};
  const LLM_OUTPUT={zh:['连接','证据','与','严谨','问题'],en:['Connect','evidence','with','careful','questions']};
  const focusState = { basePairs: true, llmStep: 'attention', tokenFocus: 1, causalFocus: 'instrument', omicsLayer: 'all' };
  // Closed, lenticular ribbons keep their silhouette smooth at every angle.
  const heroLight = { started: -10, origin: .06, count: 0, next: 2.8, source: 'idle' };
  const HERO_TOPICS = ['scene', 'helix', 'ai', 'microbes', 'data'];
  const heroOrientations = Object.fromEntries(HERO_TOPICS.map(topic => [topic, [0, 0, 0, 1]]));
  const heroInputAngles = Object.fromEntries(HERO_TOPICS.map(topic => [topic, { x: 0, y: 0 }]));
  const heroInteraction = { dragging: false, dragTarget: null, revision: 0, pointerCount: 0 };
  const qMultiply = (a, b) => [a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1], a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0], a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3], a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2]];
  const qNormalize = q => { const length = Math.hypot(...q) || 1; return q.map(n => n / length); };
  const qEuler = (x, y, z = 0) => qMultiply(qMultiply([Math.sin(x / 2), 0, 0, Math.cos(x / 2)], [0, Math.sin(y / 2), 0, Math.cos(y / 2)]), [0, 0, Math.sin(z / 2), Math.cos(z / 2)]);
  const qPoint = (point, q) => {
    const x = point.x, y = point.y, z = point.z, tx = 2 * (q[1] * z - q[2] * y), ty = 2 * (q[2] * x - q[0] * z), tz = 2 * (q[0] * y - q[1] * x);
    return { x: x + q[3] * tx + q[1] * tz - q[2] * ty, y: y + q[3] * ty + q[2] * tx - q[0] * tz, z: z + q[3] * tz + q[0] * ty - q[1] * tx };
  };
  const orientationSnapshot = () => Object.fromEntries(HERO_TOPICS.map(topic => [topic, heroOrientations[topic].slice()]));
  function rotateHeroTarget(topic, yaw, pitch) {
    topic = HERO_TOPICS.includes(topic) ? topic : 'scene'; yaw = Number(yaw) || 0; pitch = Number(pitch) || 0;
    if (!yaw && !pitch) return;
    let delta = qEuler(pitch, yaw);
    // Input axes stay aligned with the screen after the whole universe turns.
    if (topic !== 'scene') { const scene = heroOrientations.scene, inverse = [-scene[0], -scene[1], -scene[2], scene[3]]; delta = qMultiply(qMultiply(inverse, delta), scene); }
    heroOrientations[topic] = qNormalize(qMultiply(delta, heroOrientations[topic]));
    heroInputAngles[topic].x += pitch; heroInputAngles[topic].y += yaw; heroInteraction.revision++;
    const canvas = $('hero-canvas'); if (canvas) { canvas.dataset.orientationRevision = String(heroInteraction.revision); canvas.dataset.rotationTarget = topic; }
    wake();
  }
  function heroFallbackOptions(width, height) {
    return { compact: width / height < .84, paused: paused || reduced.matches, zoom: heroState.zoom, time: clock, orientations: heroOrientations, selected: heroTopic };
  }
  function hitFallbackHero(x, y, width, height) {
    const options = heroFallbackOptions(width, height), target = window.WX_HERO_UNIVERSE?.hitTestFallback?.(x, y, width, height, options);
    if (target) return { topic: target };
    const ratio = Math.min(width / 10.5, height / 12.8) * heroState.zoom * (window.WX_HERO_UNIVERSE ? (options.compact ? .72 : .78) : 1);
    const q = qMultiply(qMultiply(heroOrientations.scene, heroOrientations.helix), qEuler(.13, heroState.baseYaw, -.29));
    const a = qPoint({ x: 0, y: -3.5, z: 0 }, q), b = qPoint({ x: 0, y: 3.5, z: 0 }, q);
    const ax = width / 2 + a.x * ratio, ay = height / 2 - a.y * ratio, bx = width / 2 + b.x * ratio, by = height / 2 - b.y * ratio;
    const dx = bx - ax, dy = by - ay, t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / Math.max(1, dx * dx + dy * dy)));
    return { topic: Math.hypot(x - ax - t * dx, y - ay - t * dy) < ratio * 1.85 ? 'helix' : 'scene' };
  }
  function fallbackHeroTargets() {
    const canvas = $('hero-canvas'), width = canvas?.clientWidth || 0, height = canvas?.clientHeight || 0;
    const targets = window.WX_HERO_UNIVERSE?.getFallbackTargets?.(width, height, heroFallbackOptions(width, height)) || [];
    targets.push({ topic: 'helix', x: width / 2, y: height / 2, visible: true });
    const empty = [[.07,.07],[.93,.07],[.07,.88],[.93,.88],[.5,.04]].find(([x,y]) => hitFallbackHero(x*width,y*height,width,height).topic === 'scene') || [.05,.05];
    targets.push({ topic: 'scene', x: empty[0] * width, y: empty[1] * height, visible: true }); return targets;
  }
  function attachHeroInteraction(canvas, hitAt, onTap) {
    const pointers = new Map(); let gesture = null, pinch = null;
    const sync = () => { heroState.drag = pointers.size > 0; heroInteraction.dragging = Boolean(gesture?.dragging || pinch); heroInteraction.dragTarget = gesture?.topic || null; heroInteraction.pointerCount = pointers.size; canvas.dataset.dragging = String(heroInteraction.dragging); canvas.dataset.dragTarget = heroInteraction.dragTarget || ''; canvas.style.cursor = pointers.size ? 'grabbing' : 'grab'; };
    const distance = () => { const [a, b] = [...pointers.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
    const clear = () => { const ids = [...pointers.keys()]; pointers.clear(); gesture = null; pinch = null; sync(); for (const id of ids) if (canvas.hasPointerCapture?.(id)) canvas.releasePointerCapture(id); wake(); };
    canvas.style.touchAction = 'none'; canvas.style.cursor = 'grab'; canvas.dataset.dragging = 'false';
    canvas.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'touch' && event.button !== 0) return;
      event.preventDefault(); canvas.focus({ preventScroll: true }); pointers.set(event.pointerId, { x: event.clientX, y: event.clientY }); canvas.setPointerCapture(event.pointerId);
      if (pointers.size > 1) { pinch = { distance: Math.max(1, distance()), zoom: heroState.zoom }; if (gesture) { gesture.hadPinch = true; gesture.moved = 20; } sync(); return; }
      const hit = hitAt(event.clientX, event.clientY), topic = hit?.topic || 'scene';
      gesture = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, lastX: event.clientX, lastY: event.clientY, moved: 0, dragging: false, hadPinch: false, topic, hit, source: event.pointerType === 'touch' ? 'touch' : 'pointer' };
      selectHeroTopic(topic, gesture.source); sync();
    });
    canvas.addEventListener('pointermove', event => {
      if (!pointers.has(event.pointerId)) return;
      event.preventDefault(); pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.size > 1 && pinch) { setZoom(pinch.zoom * distance() / pinch.distance); sync(); return; }
      if (!gesture || gesture.pointerId !== event.pointerId) return;
      const dx = event.clientX - gesture.lastX, dy = event.clientY - gesture.lastY;
      gesture.moved = Math.max(gesture.moved, Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y));
      if (gesture.moved > 3) gesture.dragging = true;
      if (gesture.dragging) { const sensitivity = Math.PI * 1.5 / Math.max(160, Math.min(canvas.clientWidth, canvas.clientHeight)); rotateHeroTarget(gesture.topic, dx * sensitivity, dy * sensitivity); }
      gesture.lastX = event.clientX; gesture.lastY = event.clientY; sync();
    });
    const end = event => {
      if (!pointers.has(event.pointerId)) return;
      const tap = gesture && !gesture.dragging && !gesture.hadPinch && gesture.moved < 6 && event.type === 'pointerup';
      if (tap) onTap?.(gesture.hit, gesture.source);
      pointers.delete(event.pointerId); pinch = null;
      if (pointers.size) { const [id, p] = [...pointers.entries()][0]; gesture = { ...(gesture || {}), pointerId: id, x: p.x, y: p.y, lastX: p.x, lastY: p.y, moved: 20, dragging: true, hadPinch: true, topic: gesture?.topic || 'scene' }; }
      else gesture = null;
      sync(); if (canvas.hasPointerCapture?.(event.pointerId)) canvas.releasePointerCapture(event.pointerId); wake();
    };
    canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end); canvas.addEventListener('lostpointercapture', end);
    canvas.addEventListener('wheel', event => {
      event.preventDefault(); const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? canvas.clientHeight : 1;
      const delta = Math.max(-600, Math.min(600, event.deltaY * unit)); setZoom(heroState.zoom * Math.exp(-delta * .0016));
    }, { passive: false });
    canvas.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', '+', '=', '-', '_', 'Enter', ' ', '0', '1', '2', '3', 'Escape'].includes(event.key)) return;
      event.preventDefault();
      if (['0', '1', '2', '3'].includes(event.key)) { if (!event.repeat) { selectHeroTopic({ 0: 'helix', 1: 'ai', 2: 'microbes', 3: 'data' }[event.key], 'keyboard'); pulseHero(.5, 'keyboard'); } }
      else if (event.key === 'Escape') selectHeroTopic('scene', 'keyboard');
      else if (event.key === 'Enter' || event.key === ' ') { if (!event.repeat) pulseHero(.5, 'keyboard'); }
      else if (event.key === 'Home') { clear(); reset(); }
      else if (['+', '=', '-', '_'].includes(event.key)) setZoom(heroState.zoom + (['+', '='].includes(event.key) ? .1 : -.1));
      else rotate(event.key === 'ArrowLeft' ? -.22 : event.key === 'ArrowRight' ? .22 : 0, event.key === 'ArrowUp' ? -.22 : event.key === 'ArrowDown' ? .22 : 0);
    });
    window.addEventListener('blur', clear); document.addEventListener('visibilitychange', () => { if (document.hidden) clear(); });
    canvas.addEventListener('hero-reset-input', clear);
  }

  let heroTopic = 'scene', heroSelectionCount = 0;
  function heroSelectionText() {
    const copy = {
      scene: ['整片星群 · 自由流转', 'The universe · Turn freely.'],
      ai: ['AI 语义星群 · 让线索彼此照见', 'AI · Where clues meet.'],
      microbes: ['微生物 · 小生命，大回声', 'Microbes · Small lives, vast worlds.'],
      data: ['数据流 · 向未知汇聚', 'Data · Toward the unknown.']
    };
    return copy[heroTopic] ? tr(...copy[heroTopic]) : '';
  }
  function renderHeroSelection() {
    const readout = $('molecule-readout');
    if (readout && heroSelectionCount > 0 && heroTopic !== 'helix') readout.textContent = heroSelectionText();
  }
  function selectHeroTopic(topic, source = 'pointer') {
    if (!HERO_TOPICS.includes(topic)) return;
    heroTopic = topic; heroSelectionCount++; hero?.clearSelection?.();
    if ($('molecule-readout')) $('molecule-readout').textContent = '';
    const canvas = $('hero-canvas');
    if (canvas) { canvas.dataset.selectedTopic = topic; canvas.dataset.selectionCount = String(heroSelectionCount); }
    renderHeroSelection();
    window.dispatchEvent(new CustomEvent('herotopicchange', { detail: { topic, source } }));
    wake();
  }
  semanticLabels.push(renderHeroSelection);
  function pulseHero(origin = .5, source = 'pointer') {
    heroLight.started = clock; heroLight.origin = Math.max(.02, Math.min(.98, origin));
    heroLight.count++; heroLight.next = clock + 7.4; heroLight.source = source;
    const canvas = $('hero-canvas');
    if (canvas) { canvas.dataset.pulseCount = String(heroLight.count); canvas.dataset.pulseSource = source; }
    wake();
  }
  function heroPulseState(time) {
    if (!paused && !reduced.matches && time >= heroLight.next) pulseHero(.055, 'auto');
    const age = Math.max(0, time - heroLight.started), frozen = paused || reduced.matches;
    return { age, frozen, active: age < 3.3, origin: heroLight.origin };
  }
  function helixPoint(t, phase = 0) {
    const angle = (t - .5) * Math.PI * 3.4 + phase;
    return v(Math.cos(angle) * 1.7, (t - .5) * 9.3, Math.sin(angle) * 1.7);
  }
  function helixCurve(phase = 0) {
    const curve = new T.Curve(); curve.getPoint = t => helixPoint(t, phase); return curve;
  }
  function heroRibbonFrame(t, phase = 0) {
    const angle = (t - .5) * Math.PI * 3.4 + phase, point = helixPoint(t, phase);
    const radial = v(Math.cos(angle), 0, Math.sin(angle));
    const tangent = v(-Math.sin(angle) * 1.7 * Math.PI * 3.4, 9.3, Math.cos(angle) * 1.7 * Math.PI * 3.4).normalize();
    const across = tangent.clone().cross(radial).normalize(), end = Math.min(1, t / .032, (1 - t) / .032);
    return { point, radial, across, taper: Math.sqrt(Math.max(.000015, 1 - Math.pow(1 - end, 2))) };
  }
  function ribbonGeometry(curve, halfWidth = .57, phase = 0, chain = 0) {
    const positions = [], colors = [], uvs = [], indices = [], left = [], right = [], segments = 384, around = 32;
    const stops = (chain ? [0x6b79b0, 0xa67aba, 0xb6b7db, 0xdaa0bc, 0x7b8bc3] : [0x176881, 0x52bbaa, 0x4c94bd, 0xb4e1d3, 0x388e9f]).map(c => new T.Color(c));
    for (let i = 0; i <= segments; i++) {
      const t = i / segments, { point, radial, across, taper } = heroRibbonFrame(t, phase);
      const colorT = t * (stops.length - 1), colorI = Math.min(stops.length - 2, Math.floor(colorT));
      const col = stops[colorI].clone().lerp(stops[colorI + 1], colorT - colorI);
      left.push(point.clone().addScaledVector(across, -halfWidth * taper));
      right.push(point.clone().addScaledVector(across, halfWidth * taper));
      for (let j = 0; j <= around; j++) {
        const angle = j / around * Math.PI * 2, u = Math.cos(angle), crown = .055 * (1 - u * u);
        const q = point.clone().addScaledVector(across, u * halfWidth * taper).addScaledVector(radial, (Math.sin(angle) * .105 + crown) * taper);
        positions.push(q.x, q.y, q.z); uvs.push(t, j / around);
        const c = col.clone().multiplyScalar(.91 + .09 * Math.max(0, Math.sin(angle)));
        colors.push(c.r, c.g, c.b);
        if (i < segments && j < around) { const k = i * (around + 1) + j, n = k + around + 1; indices.push(k, n, k + 1, n, n + 1, k + 1); }
      }
    }
    const geometry = new T.BufferGeometry(); geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3)); geometry.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices); geometry.computeVertexNormals();
    // Weld the shading at the closed cross-section seam without adding a ridge.
    const normals = geometry.getAttribute('normal');
    for (let i = 0; i <= segments; i++) {
      const a = i * (around + 1), b = a + around, n = v().fromBufferAttribute(normals, a).add(v().fromBufferAttribute(normals, b)).normalize();
      normals.setXYZ(a, n.x, n.y, n.z); normals.setXYZ(b, n.x, n.y, n.z);
    }
    return { geometry, left, right };
  }
  function molecularHero() {
    const s = makeScene('hero-canvas', 21, 37); if (!s) return null;
    // A local studio environment provides soft, separated reflections on pearl.
    s.scene.children.filter(o => o.isLight).forEach((light, i) => { light.intensity = [1.15, 2.1, .55, 1.4][i] ?? light.intensity; });
    try {
      const envCanvas = document.createElement('canvas'); envCanvas.width = 768; envCanvas.height = 384;
      const ec = envCanvas.getContext('2d'), wash = ec.createLinearGradient(0, 0, 0, 384);
      wash.addColorStop(0, '#f7ffff'); wash.addColorStop(.4, '#bacbd5'); wash.addColorStop(.7, '#536f89'); wash.addColorStop(1, '#adb8c9');
      ec.fillStyle = wash; ec.fillRect(0, 0, 768, 384);
      [[98, 35, '#edfff9'], [315, 90, '#ffffff'], [590, 28, '#f2e7ff']].forEach(([x, width, color]) => {
        const strip = ec.createLinearGradient(x - width, 0, x + width, 0);
        strip.addColorStop(0, 'rgba(255,255,255,0)'); strip.addColorStop(.4, color); strip.addColorStop(.6, color); strip.addColorStop(1, 'rgba(255,255,255,0)');
        ec.fillStyle = strip; ec.fillRect(x - width, 20, width * 2, 310);
      });
      const environment = new T.CanvasTexture(envCanvas); environment.colorSpace = T.SRGBColorSpace; environment.mapping = T.EquirectangularReflectionMapping;
      const pmrem = new T.PMREMGenerator(s.renderer), target = pmrem.fromEquirectangular(environment);
      s.scene.environment = target.texture; s.environmentTarget = target; environment.dispose(); pmrem.dispose();
    } catch {}
    const group = new T.Group(), pairGroup = new T.Group(), halo = new T.Group();
    s.root.add(group, halo); group.add(pairGroup);
    const universe = window.WX_HERO_UNIVERSE?.create(T);
    if (universe) s.root.add(universe.group);
    const packets = [], pairPick = [], ribbonPick = [], lightUniforms = [], pairMaterials = [];
    const chainColors = [0x3dada9, 0x9b96cc];
    for (let ci = 0; ci < 2; ci++) {
      const phase = ci * Math.PI, curve = helixCurve(phase), rib = ribbonGeometry(curve, .57, phase, ci);
      const uniforms = { heroTime: { value: 0 }, heroPulseAge: { value: 10 }, heroPulseOrigin: { value: .05 }, heroPhase: { value: ci * .31 } }; lightUniforms.push(uniforms);
      const mat = new T.MeshPhysicalMaterial({ color: 0xffffff, vertexColors: true, roughness: .255, metalness: .34, envMapIntensity: .72,
        clearcoat: .88, clearcoatRoughness: .2, iridescence: .3, iridescenceIOR: 1.34, iridescenceThicknessRange: [200, 360], emissive: chainColors[ci], emissiveIntensity: .012 });
      mat.onBeforeCompile = shader => {
        Object.assign(shader.uniforms, uniforms);
        shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vHeroUv;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvHeroUv = uv;');
        shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vHeroUv;\nuniform float heroTime;\nuniform float heroPulseAge;\nuniform float heroPulseOrigin;\nuniform float heroPhase;');
        shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          float flowDistance = abs(fract(vHeroUv.x - heroTime * .045 + heroPhase + .5) - .5);
          float flow = exp(-pow(flowDistance / .043, 2.0));
          float waveDistance = abs(vHeroUv.x - heroPulseOrigin) - heroPulseAge * .34;
          float wave = exp(-pow(waveDistance / .055, 2.0)) * exp(-heroPulseAge * .65) * step(heroPulseAge, 3.5);
          float edgeLight = .4 + .6 * pow(abs(cos(vHeroUv.y * 6.283185)), 8.0);
          totalEmissiveRadiance += vec3(.40, .66, .70) * (flow * .34 + wave * 1.35) * edgeLight;
        `);
      };
      mat.customProgramCacheKey = () => 'wx-lightwoven-7';
      const ribbon = new T.Mesh(rib.geometry, mat); group.add(ribbon); ribbonPick.push(ribbon);
      // Polished selvages and fine silk-like filaments follow the same surface.
      [rib.left, rib.right].forEach(edge => {
        const tube = new T.TubeGeometry(new T.CatmullRomCurve3(edge), 384, .019, 8, false);
        group.add(new T.Mesh(tube, material(ci ? 0xcac7e6 : 0xb8ded6, { roughness: .22, metalness: .36, emissive: chainColors[ci], emissiveIntensity: .07 })));
      });
      [-.55, -.27, .34].forEach((u, fi) => {
        const points = Array.from({ length: 321 }, (_, i) => {
          const { point, radial, across, taper } = heroRibbonFrame(.008 + i / 320 * .984, phase);
          return point.addScaledVector(across, u * .57 * taper).addScaledVector(radial, (Math.sqrt(1 - u * u) * .105 + .055 * (1 - u * u) + .006) * taper);
        });
        group.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points), 320, fi === 1 ? .009 : .012, 6, false),
          material(ci ? 0xc9cee9 : 0xb9e3dc, { roughness: .3, metalness: .2, transparent: true, opacity: fi === 1 ? .44 : .68 })));
      });
      for (let i = 0; i < 2; i++) {
        const path = new T.Curve(); path.getPoint = t => { const f = heroRibbonFrame(t, phase); return f.point.addScaledVector(f.across, (i ? -.57 : .57) * f.taper).addScaledVector(f.radial, .025); };
        const positions = new Float32Array(18 * 3), colors = new Float32Array(18 * 3), hue = new T.Color(ci ? 0xc2b9ef : 0xa0e6d8);
        for (let j = 0; j < 18; j++) { const shade = hue.clone().multiplyScalar(.18 + .82 * Math.pow(1 - j / 18, 2)); colors.set([shade.r, shade.g, shade.b], j * 3); }
        const geometry = new T.BufferGeometry(); geometry.setAttribute('position', new T.BufferAttribute(positions, 3)); geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
        const tail = new T.Line(geometry, new T.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: .82 })); tail.frustumCulled = false;
        const dot = meshSphere(.042, 0xf5ffff, { emissive: chainColors[ci], emissiveIntensity: .9, roughness: .17, metalness: .1 });
        group.add(tail, dot); packets.push({ dot, tail, path, phase: i * .5 + ci * .17 });
      }
    }
    const sequence = 'CGCGAATTCGCGCGATCGAT';
    for (let index = 0; index < 20; index++) {
      const t = .04 + index / 19 * .92, pa = helixPoint(t, 0), pb = helixPoint(t, Math.PI), direction = pb.clone().sub(pa), length = direction.length();
      const rung = new T.Group(); rung.position.copy(pa).add(pb).multiplyScalar(.5); rung.quaternion.setFromUnitVectors(v(1, 0, 0), direction.clone().normalize());
      const bases = sequence[index] + ({ A: 'T', T: 'A', C: 'G', G: 'C' }[sequence[index]]);
      [-1, 1].forEach(side => {
        const mat = new T.MeshPhysicalMaterial({ color: side < 0 ? 0x82c7c2 : 0xaaa6d0, roughness: .24, metalness: .19, clearcoat: .75, transparent: true, opacity: .48, depthWrite: false, emissive: side < 0 ? 0x69b6b7 : 0x9a9cce, emissiveIntensity: .015 });
        const plate = new T.Mesh(new T.CapsuleGeometry(.043, length * .42, 6, 12), mat);
        plate.rotation.z = Math.PI / 2; plate.position.x = side * length * .245; plate.userData.pair = { bases, index }; rung.add(plate); pairPick.push(plate); pairMaterials.push({ mat, t });
      }); pairGroup.add(rung);
    }
    const orbitCurves = [
      t => { const a = t * Math.PI * 2; return v(Math.cos(a) * 3.65, Math.sin(a) * 1.13, Math.sin(a) * 2.75); },
      t => { const a = t * Math.PI * 2; return v(Math.cos(a) * 2.8, Math.sin(a) * 3.9, Math.sin(a) * 1.8 - .8); }
    ];
    orbitCurves.forEach((fn, i) => { const ring = line(Array.from({ length: 201 }, (_, j) => fn(j / 200)), i ? 0xaaaaca : 0x6daab3, i ? .15 : .27); ring.rotation.z = i ? -.22 : -.28; halo.add(ring); });
    const motes = new T.InstancedMesh(new T.SphereGeometry(.028, 10, 8), material(0xffffff, { roughness: .25, metalness: .22, emissive: 0x719da9, emissiveIntensity: .15, transparent: true, opacity: .75 }), 20);
    const moteMatrix = new T.Object3D(), moteColor = new T.Color(); motes.instanceMatrix.setUsage(T.DynamicDrawUsage);
    for (let i = 0; i < 20; i++) { moteColor.set(i % 3 === 0 ? 0xa39dcf : i % 3 === 1 ? 0x73bab5 : 0xbdc9d3); motes.setColorAt(i, moteColor); }
    halo.add(motes); halo.rotation.set(.12, -.16, -.15);
    const raycaster = new T.Raycaster(), pointer = new T.Vector2(), manualQuaternion = new T.Quaternion(), autoEuler = new T.Euler();
    let selectedPair = null;
    const helixHit = new T.Mesh(new T.CapsuleGeometry(1.85, 6.0, 8, 20), new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false }));
    helixHit.userData.heroTopic = 'helix'; helixHit.userData.heroHitProxy = true; group.add(helixHit); ribbonPick.push(helixHit);
    const updateReadout = () => { const r = $('molecule-readout'); if (r && selectedPair && heroTopic === 'helix') r.textContent = tr('生命的一种写法 · ' + selectedPair.bases[0] + ' — ' + selectedPair.bases[1], 'A letter of life · ' + selectedPair.bases[0] + ' — ' + selectedPair.bases[1]); }; semanticLabels.push(updateReadout);
    const hitAt = (clientX, clientY) => {
      const rect = s.canvas.getBoundingClientRect(); pointer.set((clientX - rect.left) / rect.width * 2 - 1, -(clientY - rect.top) / rect.height * 2 + 1);
      s.scene.updateMatrixWorld(true); s.camera.updateMatrixWorld(); raycaster.setFromCamera(pointer, s.camera);
      const hits = raycaster.intersectObjects([...ribbonPick, ...(pairGroup.visible ? pairPick : []), ...(universe?.pickTargets || [])], false);
      let hit = hits[0]; const topic = hit ? hit.object.userData.heroTopic || 'helix' : 'scene';
      if (hit?.object.userData.heroHitProxy) hit = hits.find(item => !item.object.userData.heroHitProxy && (item.object.userData.heroTopic || 'helix') === topic) || hit;
      return { topic, hit };
    };
    attachHeroInteraction(s.canvas, hitAt, (result, source) => {
      const { topic, hit } = result || { topic: 'scene' }, pairHit = hit?.object.userData.pair ? hit : null;
      pulseHero(topic === 'helix' && !hit?.object.userData.heroHitProxy ? (hit?.uv?.x ?? (pairHit ? .04 + pairHit.object.userData.pair.index / 19 * .92 : .5)) : ({ ai: .2, microbes: .55, data: .85 }[topic] ?? .5), source);
      if (pairHit) { selectedPair = pairHit.object.userData.pair; updateReadout(); window.dispatchEvent(new CustomEvent('moleculepick', { detail: { ...selectedPair, structure: 'idealized', representation: 'silk-helix' } })); }
    });
    s.tick = (time, dt) => {
      const amount = reduced.matches ? 1 : 1 - Math.exp(-dt * 8), pulse = heroPulseState(time);
      const compact = s.width / s.height < .84;
      if (!heroState.drag && !paused) heroState.baseYaw += dt * .072;
      heroState.drawnZoom += (heroState.zoom - heroState.drawnZoom) * amount;
      group.quaternion.setFromEuler(autoEuler.set(.13, heroState.baseYaw, -.29)).premultiply(manualQuaternion.fromArray(heroOrientations.helix));
      s.root.quaternion.fromArray(heroOrientations.scene); group.position.y = Math.sin(time * .35) * .035;
      group.scale.setScalar(universe ? (compact ? .72 : .78) : 1);
      halo.scale.setScalar(universe ? .82 : 1);
      halo.rotation.y = -.16 + Math.sin(time * .08) * .08;
      if (universe) {
        universe.group.quaternion.identity();
        universe.update(time, dt, { compact, paused: paused || reduced.matches, pulseAge: pulse.age, pulseOrigin: pulse.origin, selected: heroTopic, orientations: heroOrientations });
      }
      lightUniforms.forEach(u => { u.heroTime.value = time; u.heroPulseAge.value = pulse.age; u.heroPulseOrigin.value = pulse.origin; });
      pairMaterials.forEach(({ mat, t }) => { const wave = Math.exp(-Math.pow((Math.abs(t - pulse.origin) - pulse.age * .34) / .075, 2)) * Math.exp(-pulse.age * .65); mat.emissiveIntensity = .015 + wave * .6; mat.opacity = .48 + wave * .21; });
      packets.forEach(p => {
        const q = (time * .039 + p.phase) % 1, fade = Math.min(1, q * 25, (1 - q) * 25); p.dot.position.copy(p.path.getPoint(q)); p.dot.scale.setScalar(fade);
        const a = p.tail.geometry.getAttribute('position');
        for (let j = 0; j < 18; j++) { const point = p.path.getPoint(Math.max(0, q - j * .0035)); a.setXYZ(j, point.x, point.y, point.z); } a.needsUpdate = true; p.tail.material.opacity = fade * .82;
      });
      for (let i = 0; i < 20; i++) {
        if (i < 6) { const p = orbitCurves[i % 2]((i / 6 + time * (i % 2 ? -.017 : .022) + 10) % 1); moteMatrix.position.copy(p); }
        else { const a = i * 2.39996 + time * .012, radius = 2.6 + seed(i + 63) * 1.2; moteMatrix.position.set(Math.cos(a) * radius, (seed(i + 91) - .5) * 8.6 + Math.sin(time * .22 + i) * .055, Math.sin(a) * radius * .5 - 1.5); }
        moteMatrix.scale.setScalar(i < 6 ? 1.8 : .6 + seed(i + 15) * .8); moteMatrix.updateMatrix(); motes.setMatrixAt(i, moteMatrix.matrix);
      } motes.instanceMatrix.needsUpdate = true;
      const base = s.width / s.height < .83 ? 20.8 : 21; s.camera.position.z = base / heroState.drawnZoom;
      s.canvas.dataset.zoom = heroState.zoom.toFixed(2); s.canvas.dataset.drawnZoom = heroState.drawnZoom.toFixed(3);
      s.canvas.dataset.pulseProgress = Math.min(1, pulse.age / 3.3).toFixed(3); s.canvas.dataset.pulseState = pulse.frozen ? 'still' : pulse.active ? 'flowing' : 'rest';
    };
    s.group = group; s.pairs = pairGroup; s.hydrogen = pairGroup;
    s.universe = universe;
    s.heroTargets = () => {
      s.scene.updateMatrixWorld(true); const targets = [], seen = new Set();
      for (const object of [helixHit, ...(universe?.pickTargets || [])]) {
        const topic = object.userData.heroTopic;
        if (!topic || seen.has(topic)) continue;
        const point = object.getWorldPosition(v()).project(s.camera);
        targets.push({ topic, x: (point.x + 1) * s.width / 2, y: (1 - point.y) * s.height / 2, visible: Math.abs(point.x) < 1 && Math.abs(point.y) < 1 && point.z > -1 && point.z < 1 }); seen.add(topic);
      }
      const rect = s.canvas.getBoundingClientRect();
      const empty = [[.07,.07],[.93,.07],[.07,.88],[.93,.88],[.5,.04]].find(([x,y]) => hitAt(rect.left+x*rect.width,rect.top+y*rect.height).topic === 'scene') || [.05,.05];
      targets.push({topic:'scene',x:empty[0]*s.width,y:empty[1]*s.height,visible:true}); return targets;
    };
    s.clearSelection = () => { selectedPair = null; const r = $('molecule-readout'); if (r) r.textContent = ''; };
    s.canvas.dataset.representation = 'silk-helix'; s.canvas.dataset.heroVersion = '10'; s.canvas.dataset.material = 'lightwoven-pearl'; s.canvas.dataset.pulseCount = '0';
    s.canvas.dataset.heroElements = universe ? 'helix ai microbes data' : 'helix'; s.canvas.dataset.selectedTopic = heroTopic;
    return s;
  }

  /* Each research phase owns a different composition. The page owns cycling. */
  function groupOpacity(group, amount) {
    group.traverse(object => {
      if (!object.material) return;
      for (const mat of Array.isArray(object.material) ? object.material : [object.material]) {
        if (mat.userData.originalOpacity === undefined) mat.userData.originalOpacity = mat.opacity;
        mat.transparent = true;
        mat.opacity = mat.userData.originalOpacity * amount * (mat.userData.modulation ?? 1);
      }
    });
  }
  function satin(color, opacity = 1) {
    return new T.MeshPhysicalMaterial({ color, roughness: .26, metalness: .17, clearcoat: .8, clearcoatRoughness: .25, transparent: opacity < 1, opacity, side: T.DoubleSide });
  }
  function roundCard(width, height, color, opacity = .9) {
    const r = Math.min(.14, height * .24), x = -width / 2, y = -height / 2, shape = new T.Shape();
    shape.moveTo(x+r,y);shape.lineTo(x+width-r,y);shape.quadraticCurveTo(x+width,y,x+width,y+r);
    shape.lineTo(x+width,y+height-r);shape.quadraticCurveTo(x+width,y+height,x+width-r,y+height);
    shape.lineTo(x+r,y+height);shape.quadraticCurveTo(x,y+height,x,y+height-r);
    shape.lineTo(x,y+r);shape.quadraticCurveTo(x,y,x+r,y);
    const geometry = new T.ExtrudeGeometry(shape,{depth:.075,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.025,bevelThickness:.025,curveSegments:6});
    return new T.Mesh(geometry,satin(color,opacity));
  }
  function textAt(group, zh, en, x, y, z = .15, width = 2.8) {
    const text = label(zh,en,width > 3 ? Math.min(2.6,width*.54) : width);text.userData.phaseCaption=width>3;text.position.set(x,y,z);group.add(text);return text;
  }
  function tube(curve, radius, color, opacity = 1, segments = 96) {
    return new T.Mesh(new T.TubeGeometry(curve,segments,radius,8,false),satin(color,opacity));
  }
  function pathCurve(points) { return new T.CatmullRomCurve3(points); }
  function parametric(fn) { const curve=new T.Curve();curve.getPoint=fn;return curve; }
  function silk(curve, width, color, segments = 200, endColor = color) {
    const frames=curve.computeFrenetFrames(segments,false), positions=[], colors=[], indices=[], shade=new T.Color(color), end=new T.Color(endColor);
    for(let i=0;i<=segments;i++){
      const t=i/segments,p=curve.getPoint(t),edge=frames.normals[i],normal=frames.binormals[i],col=shade.clone().lerp(end,t);
      const cap=Math.min(1,t/.035,(1-t)/.035),taper=Math.sqrt(Math.max(.0001,1-(1-cap)*(1-cap)));
      for(let j=0;j<7;j++){
        const u=j/6*2-1,q=p.clone().addScaledVector(edge,u*width*taper).addScaledVector(normal,(1-u*u)*width*.13);
        positions.push(q.x,q.y,q.z);colors.push(col.r,col.g,col.b);
        if(i<segments&&j<6){const a=i*7+j,b=a+7;indices.push(a,b,a+1,b,b+1,a+1);}
      }
    }
    const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));geometry.setIndex(indices);geometry.computeVertexNormals();
    const mat=satin(0xffffff);mat.vertexColors=true;return new T.Mesh(geometry,mat);
  }
  function orbit(group, radius, color, angle = .2, opacity = .23) {
    const ring=new T.Mesh(new T.TorusGeometry(radius,.012,6,96),satin(color,opacity));ring.rotation.set(angle,.12,0);group.add(ring);return ring;
  }
  function addFlow(group, curve, color, count=3, speed=.14, radius=.065) {
    group.add(line(curve.getPoints(64),color,.26));
    const beads=Array.from({length:count},(_,i)=>{const dot=meshSphere(radius,color,{emissive:color,emissiveIntensity:.24,transparent:true});group.add(dot);return {dot,phase:i/count};});
    return time=>beads.forEach(({dot,phase})=>{const p=(time*speed+phase)%1;dot.position.copy(curve.getPoint(p));dot.scale.setScalar(.35+Math.sin(Math.PI*p)*.8);dot.material.userData.modulation=Math.sin(Math.PI*p);});
  }
  function phaseController(s, names, initial, compositions, options={}) {
    let current=names.includes(initial)?initial:names[0], previous=current, progress=1, elapsed=0;
    const weights=names.map(name=>name===current?1:0);let from=weights.slice();
    const groups=names.map(name=>{const entry=compositions[name];s.root.add(entry.group);entry.group.userData.phase=name;return entry;});
    s.canvas.dataset.scene=current;s.canvas.dataset.sceneVersion='6';s.canvas.dataset.transitionProgress='1.000';
    function set(name) {
      if(!names.includes(name))return;
      if(name!==current){previous=current;current=name;from=weights.slice();progress=paused||reduced.matches?1:0;elapsed=0;s.canvas.dataset.previousScene=previous;}
      s.canvas.dataset.scene=current;wake();
    }
    s.tick=(time,dt,wallDt=dt)=>{
      if(paused||reduced.matches)progress=1;else progress=Math.min(1,progress+wallDt/.95);
      if(!paused)elapsed+=wallDt;
      const smooth=progress*progress*(3-2*progress);
      groups.forEach((entry,i)=>{
        const active=names[i]===current,target=active?1:0;
        weights[i]=from[i]+(target-from[i])*smooth;
        entry.group.visible=weights[i]>.002;
        if(!entry.group.visible)return;
        entry.group.position.y=(active?-.2:.16)*(1-weights[i]);
        entry.group.scale.setScalar((.92+.08*weights[i])*(options.artScale??1.04));
        entry.group.rotation.y=(active?-.12:.12)*(1-weights[i]);
        entry.tick?.(time,dt,active?elapsed:0,paused||reduced.matches);
        groupOpacity(entry.group,weights[i]);
        // Captions leave before the next caption arrives; pictures may crossfade.
        entry.group.traverse(object=>{if(!object.userData.phaseCaption||!object.material)return;
          const captionAlpha=active?Math.max(0,Math.min(1,(progress-.5)/.5)):Math.max(0,1-progress/.28);
          object.material.opacity*=captionAlpha;
        });
      });
      options.tick?.(time,dt,current);
      s.root.rotation.y=(options.yaw??-.11)+Math.sin(time*.12)*.035;s.root.rotation.x=options.pitch??.035;
      const ratio=s.width/s.height;s.camera.position.z=ratio<1.15?(options.mobileDistance??16.5):(options.distance??13.4);
      s.canvas.dataset.transitionProgress=progress.toFixed(3);s.canvas.dataset.renderedScene=current;
      s.canvas.dataset.visibleScenes=names.filter((_,i)=>weights[i]>.01).join('|');
    };
    return {set,info:()=>({scene:current,previous,progress,weights:weights.slice()})};
  }
  function miniDag(owner) {
    const group=new T.Group();group.position.set(0,-3.15,.15);owner.add(group);
    const positions=[v(-2.85,0,0),v(0,0,0),v(2.85,0,0),v(1.3,.88,-.12)], nodes=[];
    [[0,1],[1,2],[3,1],[3,2]].forEach(([a,b],i)=>{
      const start=positions[a],end=positions[b],direction=end.clone().sub(start).normalize(),p=start.clone().addScaledVector(direction,.2),q=end.clone().addScaledVector(direction,-.25);
      group.add(line([p,q],i<2?0x79aab5:0xaab7c2,i<2?.6:.3,i>1));
      if(i<2){const arrow=new T.Mesh(new T.ConeGeometry(.075,.18,10),satin(0x79aab5));arrow.position.copy(q);arrow.quaternion.setFromUnitVectors(v(0,1,0),direction);group.add(arrow);}
    });
    positions.forEach((p,i)=>{const ball=meshSphere(i===3?.095:.145,[palette.teal,palette.blue,palette.coral,0xaab7c2][i]);ball.position.copy(p);group.add(ball);nodes.push(ball);});
    [['遗传工具','Instrument'],['暴露','Exposure'],['结局','Outcome']].forEach(([zh,en],i)=>textAt(group,zh,en,positions[i].x,-.48,.1,1.9));
    textAt(group,'混杂','Confounder',1.3,1.2,-.1,1.6);
    return selected=>nodes.forEach((ball,i)=>{ball.scale.setScalar(i===selected?1.25:.82);ball.material.emissive.copy(ball.material.color);ball.material.emissiveIntensity=i===selected?.25:0;});
  }
  function causalScene() {
    const s=makeScene('causal-canvas',13.4,36);if(!s)return;
    const instrument={group:new T.Group()},exposure={group:new T.Group()},outcome={group:new T.Group()};
    const ig=instrument.group,locusHalos=[];
    const gene=phase=>parametric(t=>{const a=t*Math.PI*4+phase;return v((t-.5)*7.4,.7+Math.sin(a)*.7,Math.cos(a)*.7);});
    [0,Math.PI].forEach((phase,i)=>ig.add(silk(gene(phase),.16,i?0x9c8dd2:0x55b4ae,160,i?0xc1b6e2:0x8ad7ca)));
    for(let i=0;i<23;i++){const t=i/22,a=gene(0).getPoint(t),b=gene(Math.PI).getPoint(t);ig.add(rigidCylinder(a,b,.025,i%3===0?0x8e7ac6:0x8ebec5));}
    [3,11,19].forEach((idx,i)=>{
      const p=gene(0).getPoint(idx/22),ring=orbit(ig,.49,[palette.teal,palette.blue,palette.purple][i],0,.65);ring.position.copy(p);locusHalos.push(ring);
      textAt(ig,'Z'+['₁','₂','₃'][i],'Z'+['₁','₂','₃'][i],p.x,2.12,.5,1.05);
      ig.add(line([p,v(p.x,1.8,p.z)],0x9bb7c8,.35));
    });
    textAt(ig,'遗传变异 · 工具变量','Genetic variants · instruments',0,-.8,.1,4.4);
    instrument.tick=time=>{locusHalos.forEach((r,i)=>{r.rotation.y=Math.sin(time*.45+i)*.28;r.scale.setScalar(1+Math.sin(time*1.15+i)*.06);});};
    const eg=exposure.group,flows=[];
    for(let layer=0;layer<5;layer++){
      const curve=parametric(t=>{const x=(t-.5)*6.2;return v(x,-.7+Math.exp(-x*x/(1.5+layer*.08))*2.65,(layer-2)*.32);});
      eg.add(silk(curve,.085,layer%2?0xa8b5e5:0x6abbb8,100,0xaaa1de));
      if(layer===0||layer===4)flows.push(addFlow(eg,curve,layer?palette.purple:palette.teal,3,.11,.055));
    }
    eg.add(line([v(-3.7,-.86,.9),v(3.7,-.86,.9)],0x9db6c9,.5));
    for(let i=0;i<3;i++){
      const orb=meshSphere(.13,[palette.teal,palette.blue,palette.purple][i]);orb.position.set(-4.1,.5+i*.53,.3);eg.add(orb);
      flows.push(addFlow(eg,pathCurve([orb.position.clone(),v(-3.5,1.6+i*.2,.4),v(-1.5,1,.2),v(0,1.95,.3)]),0x7faec6,2,.14,.055));
    }
    textAt(eg,'暴露特征的分布','A distribution of exposure',0,-1.35,.2,4.1);
    exposure.tick=time=>flows.forEach(fn=>fn(time));
    const og=outcome.group,markers=[];
    og.add(line([v(-.9,-1.2,.1),v(-.9,2.0,.1)],0xadc0cd,.55,true));
    for(let i=0;i<5;i++){
      const y=1.65-i*.57,x=-1.35+Math.sin(i*1.6)*.8,half=.55+seed(i+72)*.7;
      og.add(line([v(x-half,y,.1),v(x+half,y,.1)],i%2?0x7a9bc4:0x68aea9,.8));
      [x-half,x+half].forEach(end=>og.add(line([v(end,y-.07,.1),v(end,y+.07,.1)],0x90acbf,.6)));
      const diamond=new T.Mesh(new T.OctahedronGeometry(.12,0),satin(i%2?0x7c8fc8:0x55aba7));diamond.position.set(x,y,.15);og.add(diamond);markers.push(diamond);
    }
    const effect=meshSphere(.65,0xb39bd5,{roughness:.2,metalness:.24});effect.position.set(2.7,.55,-.1);og.add(effect);
    const halo=orbit(og,1.05,0xa996cf,.45,.5);halo.position.copy(effect.position);
    for(let i=0;i<7;i++){
      const a=i/7*Math.PI*2,p=v(2.7+Math.cos(a)*1.44,.55+Math.sin(a)*1.44,-.15),orb=meshSphere(.07,i%2?palette.blue:palette.teal);orb.position.copy(p);og.add(orb);og.add(line([effect.position,p],0x9dafcf,.25));
    }
    textAt(og,'结局与效应 · 概念示意','Outcome & effect · schematic',0,-1.5,.2,4.55);
    outcome.tick=time=>{halo.rotation.y=time*.12;markers.forEach((m,i)=>m.scale.setScalar(.95+Math.sin(time*.8+i)*.07));};
    const dag=miniDag(s.root),phases=['instrument','exposure','outcome'];
    const controller=phaseController(s,phases,focusState.causalFocus,{instrument,exposure,outcome},{pitch:.02,distance:13.2,mobileDistance:16.4,tick:(time,dt,key)=>dag(phases.indexOf(key))});
    causalState={update:()=>{s.canvas.dataset.causalFocus=focusState.causalFocus;controller.set(focusState.causalFocus);},info:controller.info};causalState.update();
    s.canvas.dataset.representation='causal-story';
  }
  function omicsScene() {
    const s=makeScene('omics-canvas',13.3,36);if(!s)return;
    const all={group:new T.Group()},genome={group:new T.Group()},transcriptome={group:new T.Group()},proteome={group:new T.Group()};
    const shades=[0x45a9a4,0x6f86cd,0xa184c7],flows=[],platforms=[];
    for(let i=0;i<3;i++){
      const platter=new T.Group();platter.position.y=(i-1)*1.45;platter.rotation.x=Math.PI/2-.16;all.group.add(platter);platforms.push(platter);
      const disc=new T.Mesh(new T.CircleGeometry(2.7,80),satin(shades[i],.09));platter.add(disc);
      [2.72,2.45].forEach((radius,j)=>orbit(platter,radius,shades[i],0,j?.22:.55));
      for(let k=0;k<8;k++){
        const a=k/8*Math.PI*2,node=meshSphere(.06+(k%3)*.018,shades[i]);node.position.set(Math.cos(a)*2.45,Math.sin(a)*2.45,.035);platter.add(node);
      }
      textAt(all.group,['基因组','转录组','蛋白组'][i],['Genome','Transcriptome','Proteome'][i],3.7,(i-1)*1.45,.4,2.1);
    }
    for(let i=0;i<7;i++){
      const a=i/7*Math.PI*2,curve=pathCurve([v(Math.cos(a)*2.3,-1.5,Math.sin(a)*1.9),v(Math.cos(a+.55)*1.25,0,Math.sin(a+.55)*1.25),v(Math.cos(a+1.2)*2.1,1.5,Math.sin(a+1.2)*1.8)]);
      flows.push(addFlow(all.group,curve,shades[i%3],2,.1,.065));
    }
    const center=meshSphere(.28,0xb0d1d8,{emissive:0x548d9d,emissiveIntensity:.1});all.group.add(center);
    all.tick=time=>{platforms.forEach((p,i)=>p.rotation.z=time*.035*(i%2?-1:1));flows.forEach(fn=>fn(time));};
    const gg=genome.group,helix=new T.Group();gg.add(helix);helix.rotation.z=-.28;
    const DNA=phase=>parametric(t=>{const a=t*Math.PI*4+phase;return v(Math.cos(a)*1.0,(t-.5)*5.7,Math.sin(a)*1.0);});
    [0,Math.PI].forEach((phase,i)=>helix.add(silk(DNA(phase),.19,shades[i?2:0],180,i?0xc6b2e2:0x88d7c6)));
    for(let i=0;i<22;i++){
      const t=.02+i/21*.96,a=DNA(0).getPoint(t),b=DNA(Math.PI).getPoint(t);helix.add(rigidCylinder(a,b,.028,i%2?0xb0b8da:0x80c0bd));
    }
    const seq=['A','T','C','G','A','C'];seq.forEach((letter,i)=>{
      const tile=roundCard(.49,.48,shades[i%3],.6);tile.position.set(2.25+(i%2)*.68,1.5-Math.floor(i/2)*.73,.25);gg.add(tile);textAt(gg,letter,letter,tile.position.x,tile.position.y,.45,.7);
    });
    textAt(gg,'序列 · 遗传信息','Sequence · genetic information',0,-3.22,.2,4.3);
    genome.tick=time=>{helix.rotation.y=time*.09;};
    const tg=transcriptome.group,transcriptFlows=[],transcripts=[];
    const transcription=meshSphere(.48,0x8fadd6,{roughness:.24,metalness:.18,transparent:true,opacity:.8});transcription.position.set(-2.9,.25,0);tg.add(transcription);
    const hub=orbit(tg,.83,0x90b9d2,.4,.45);hub.position.copy(transcription.position);
    for(let i=0;i<5;i++){
      const y=(i-2)*.88,len=4.2+(i%3)*.45;
      const curve=pathCurve([v(-2.65,.25,.1),v(-1.7,y*.6,.6-i*.15),v(.2,y+.25,-.2),v(len-2.1,y,.2)]);
      const rib=silk(curve,.085,i%2?0x7a9ad2:0x7ebcb9,120,i%2?0xc0b1e3:0xa7d5cc);tg.add(rib);transcripts.push(rib);
      for(let k=0;k<9;k++){
        const p=curve.getPoint(.26+k*.077),base=roundCard(.17,.29,[0x7bbaad,0x9c9ed3,0x86b1d0,0xc0a2cc][k%4],.7);base.position.copy(p).add(v(0,.17,.06));base.rotation.z=Math.sin(k*.4+i)*.22;tg.add(base);
      }
      transcriptFlows.push(addFlow(tg,curve,i%2?palette.blue:palette.teal,2,.13,.05));
    }
    textAt(tg,'RNA','RNA',-2.95,-1.08,.1,1.4);textAt(tg,'转录 · 表达的多种可能','Transcripts · patterns of expression',.2,-2.75,.1,5.0);
    transcriptome.tick=time=>{hub.rotation.y=time*.12;transcriptFlows.forEach(fn=>fn(time));};
    const pg=proteome.group,fold=new T.Group();pg.add(fold);
    const foldPoints=[];
    // Two orderly helical segments connected by a broad, rounded turn.
    // This is a generic protein-inspired ribbon, not an experimental fold.
    for(let i=0;i<=50;i++){const t=i/50,a=t*Math.PI*3.5;foldPoints.push(v(-1.35+Math.cos(a)*.7,-1.6+t*3.2,Math.sin(a)*.7));}
    const lastPoint=foldPoints[foldPoints.length-1].clone();
    const turn=new T.CubicBezierCurve3(lastPoint,lastPoint.clone().add(v(.9,.6,0)),v(2.05,2.1,-.8),v(2.05,1.6,0));
    foldPoints.push(...turn.getPoints(26).slice(1));
    for(let i=1;i<=50;i++){const t=i/50,a=t*Math.PI*3.5;foldPoints.push(v(1.35+Math.cos(a)*.7,1.6-t*3.2,Math.sin(a)*.7));}
    const backbone=new T.CatmullRomCurve3(foldPoints,false,'centripetal');
    fold.add(silk(backbone,.25,0x65b6b7,440,0xa48bcf));
    const edge=tube(backbone,.018,0xdcecf2,.55,350);fold.add(edge);
    const glow=[];for(let i=0;i<7;i++){const ball=meshSphere(.045,0x9c89cb,{emissive:0x7d71bf,emissiveIntensity:.4});fold.add(ball);glow.push(ball);}
    const ring=orbit(pg,3.15,0xb3abd5,.45,.25);ring.position.z=-.9;
    textAt(pg,'折叠 · 结构与功能','Folding · structure and function',0,-2.6,.3,4.6);
    proteome.tick=time=>{fold.rotation.y=time*.07;fold.rotation.z=.22+Math.sin(time*.12)*.06;glow.forEach((b,i)=>b.position.copy(backbone.getPoint((time*.025+i/7)%1)));ring.rotation.z=time*.025;};
    const controller=phaseController(s,['all','genome','transcriptome','proteome'],focusState.omicsLayer,{all,genome,transcriptome,proteome},{pitch:.1,distance:13.3,mobileDistance:16.3});
    omicsState={update:()=>{s.canvas.dataset.omicsLayer=focusState.omicsLayer;controller.set(focusState.omicsLayer);},info:controller.info};omicsState.update();s.canvas.dataset.representation='omics-transformations';
  }
  function aiScene() {
    const s=makeScene('ai-canvas',13.1,36);if(!s)return;
    const tokens={group:new T.Group()},attention={group:new T.Group()},generation={group:new T.Group()},tokenTiles=[],tokenFlow=[];
    const positions=[[-3.8,.75,-.2],[-1.9,1.55,.2],[0,1.9,.45],[1.9,1.55,.2],[3.8,.75,-.2]];
    positions.forEach(([x,y,z],i)=>{
      const group=new T.Group();group.position.set(x,y,z);tokens.group.add(group);const tile=roundCard(1.54,.68,i%2?0xb6b6df:0x9cd7cf);group.add(tile);textAt(group,LLM_INPUT.zh[i],LLM_INPUT.en[i],0,0,.18,1.86);tokenTiles.push({group,tile,home:y});
      const vector=new T.Group();vector.position.set((i-2)*1.15,-1.2,.3);tokens.group.add(vector);
      for(let j=0;j<7;j++){
        const height=.17+seed(i*30+j)*.83,bar=new T.Mesh(new T.BoxGeometry(.11,height,.2),satin(i%2?0x9692d2:0x61afa9,.82));bar.position.set((j-3)*.15,height/2,0);vector.add(bar);
      }
      const route=pathCurve([v(x,y-.4,z),v(x*.92,.1,z+.5),v((i-2)*1.15,-.3,.4)]);tokenFlow.push(addFlow(tokens.group,route,i%2?palette.purple:palette.teal,2,.12,.055));
    });
    const tokOrbit=orbit(tokens.group,3.65,0x97b8cb,1.08,.24);tokOrbit.scale.y=.67;tokOrbit.position.set(0,-.1,-.65);
    textAt(tokens.group,'词元 → 向量','Tokens → embeddings',0,-2.2,.2,3.8);
    tokens.tick=time=>{tokenTiles.forEach(({group,tile,home},i)=>{group.position.y=home+Math.sin(time*.5+i*.8)*.045;group.scale.setScalar(i===focusState.tokenFocus?1.07:1);tile.material.emissive.setHex(0x478c92);tile.material.emissiveIntensity=i===focusState.tokenFocus?.23:0;});tokenFlow.forEach(fn=>fn(time));};
    const ag=attention.group,cells=[],panels=[],attentionFlow=[];
    for(let layer=0;layer<3;layer++){
      const panel=new T.Group();panel.position.set((layer-1)*.54,(layer-1)*.21,(layer-1)*.72);panel.rotation.y=-.26;panels.push(panel);ag.add(panel);
      const back=roundCard(3.2,3.2,[0xb0ded9,0xb9c6ed,0xd0bde7][layer],.24);back.material.depthWrite=false;panel.add(back);
      for(let row=0;row<5;row++)for(let col=0;col<5;col++){
        const masked=col>row,amount=masked?.04:.36+seed(layer*83+row*7+col)*.5,cell=roundCard(.43,.43,masked?0xdbe2ea:[0x63b3ad,0x7c8dcb,0xa28acb][layer],amount);
        cell.position.set((col-2)*.55,(2-row)*.55,.16);panel.add(cell);cells.push({cell,row,col,masked,amount});
      }
    }
    for(let i=0;i<5;i++){
      const p=v(-3.8,(2-i)*.64,.2),orb=meshSphere(.105,i%2?palette.blue:palette.teal);orb.position.copy(p);ag.add(orb);textAt(ag,LLM_INPUT.zh[i],LLM_INPUT.en[i],-4.25,p.y,.2,1.35);
      const curve=pathCurve([p,v(-2.9,p.y,.9),v(-1.6,(2-i)*.55,.9),v(.5,(2-i)*.55,.8)]);attentionFlow.push(addFlow(ag,curve,i%2?0x9496cf:0x7abcb7,2,.13,.045));
    }
    const aRing=orbit(ag,2.5,0xa99acb,.48,.2);aRing.position.z=-1.2;
    textAt(ag,'多头注意力 · 因果掩码','Multi-head attention · causal mask',.2,-2.25,.8,5.0);
    attention.tick=time=>{
      panels.forEach((p,i)=>p.position.y=(i-1)*.21+Math.sin(time*.4+i)*.025);
      cells.forEach(({cell,row,masked})=>{cell.material.userData.modulation=masked?.5:row===focusState.tokenFocus?1:.54;cell.material.emissive.copy(cell.material.color);cell.material.emissiveIntensity=!masked&&row===focusState.tokenFocus?.2:0;});attentionFlow.forEach(fn=>fn(time));
    };
    const gg=generation.group,outputTiles=[],path=parametric(t=>v((t-.5)*9.4,-1+Math.sin(t*Math.PI*1.65)*.46,Math.sin(t*Math.PI*1.9)*.62));
    const ribbon=silk(path,.35,0x83c7c1,220,0xb3a4d9);ribbon.rotation.x=.15;gg.add(ribbon);
    const genFlow=addFlow(gg,path,0x9183cb,5,.095,.065);
    for(let i=0;i<5;i++){
      const group=new T.Group(),x=(i-2)*1.83,y=.5+Math.sin(i/4*Math.PI)*.62;group.position.set(x,y,.15);gg.add(group);
      const tile=roundCard(1.54,.82,[0x9bd3cc,0xa4cbdc,0xb1bce4,0xbcb0dd,0xc7a9d6][i],.9);group.add(tile);textAt(group,LLM_OUTPUT.zh[i],LLM_OUTPUT.en[i],0,0,.16,1.8);outputTiles.push({group,tile});
      gg.add(line([v(x,y-.52,.1),v(x,-.5,.1)],0xa2b9cd,.28));
    }
    const cursor=new T.Mesh(new T.BoxGeometry(.035,.6,.05),satin(0x8d7bc6));gg.add(cursor);
    const ribbon2=silk(parametric(t=>v((t-.5)*8.8,-1.55+Math.sin(t*Math.PI*1.65+.5)*.34,Math.cos(t*Math.PI*2)*.4)),.14,0xb0cddc,160,0xcab8df);gg.add(ribbon2);
    textAt(gg,'逐词生成 · 一个新的表达','Token by token · a new expression',0,-2.35,.3,5.1);
    generation.tick=(time,dt,elapsed,still)=>{
      const count=still?5:Math.min(5,1+Math.floor(elapsed/.58));
      outputTiles.forEach(({group,tile},i)=>{group.visible=i<count;group.scale.setScalar(i===count-1?1.04:1);tile.material.emissive.setHex(0x9c83c6);tile.material.emissiveIntensity=i===count-1?.17:0;});
      cursor.position.set((Math.max(1,count)-3)*1.83+.88,.5+Math.sin((count-1)/4*Math.PI)*.62,.3);cursor.material.userData.modulation=still?.8:.45+.4*Math.sin(time*3);
      genFlow(time);
    };
    const controller=phaseController(s,['tokens','attention','generation'],focusState.llmStep,{tokens,attention,generation},{pitch:.045,distance:12.9,mobileDistance:16.2});
    llmState={update:()=>{controller.set(focusState.llmStep);s.canvas.dataset.llmStep=focusState.llmStep;s.canvas.dataset.tokenFocus=String(focusState.tokenFocus);s.canvas.dataset.inputTokens=(english()?LLM_INPUT.en:LLM_INPUT.zh).join('|');wake();},info:controller.info};
    llmState.update();s.canvas.dataset.representation='transformer-transformations';
  }

  // A perspective-projected height field: thousands of samples form moving
  // contours. It is decorative data topography, never a measured data claim.
  const field = $('data-field-canvas'); let fieldContext;
  try { fieldContext = field?.getContext('2d'); } catch {}
  function renderField(time) {
    if (!fieldContext || !visible(field)) return;
    const width = field.clientWidth, height = field.clientHeight, dpr = Math.min(devicePixelRatio || 1, 1.4);
    if (!width || !height) return;
    if (field.width !== Math.round(width * dpr) || field.height !== Math.round(height * dpr)) { field.width = Math.round(width * dpr); field.height = Math.round(height * dpr); }
    const ctx = fieldContext; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, width, height);
    const fieldPalette = window.WX_VISUAL_PALETTE?.get() || { primary: '#158f98', accent: '#4671bf', secondary: '#8269c2' };
    const fieldColors = [fieldPalette.primary, fieldPalette.accent, fieldPalette.secondary].map(hex => [1,3,5].map(offset => parseInt(hex.slice(offset,offset+2),16)).join(','));
    const mobile = width < 700, rows = mobile ? 31 : 48, cols = mobile ? 56 : 96, grid = [];
    for (let row = rows - 1; row >= 0; row--) {
      const z = row / rows, depth = 1 - z, perspective = 0.4 + depth * 0.8;
      const baseY = height * (0.31 + depth * 0.89), center = width * 0.53;
      const points = [];
      for (let col = 0; col <= cols; col++) {
        const x = col / cols * 2 - 1;
        const ridgeA = Math.exp(-Math.pow((x + 0.63 - z * 0.18) / 0.25, 2)) * 0.62;
        const ridgeB = Math.exp(-Math.pow((x + 0.01 + z * 0.06) / 0.19, 2)) * 0.43;
        const ridgeC = Math.exp(-Math.pow((x - 0.59 + z * 0.13) / 0.29, 2)) * 0.84;
        const wave = Math.sin(x * 8.3 + z * 7.1 + time * 0.28) * 0.075 + Math.cos(x * 15.2 - z * 4.5 - time * 0.18) * 0.025;
        const px = center + x * width * 0.82 * perspective;
        const py = baseY - (ridgeA + ridgeB + ridgeC + wave) * height * 0.63 * perspective;
        points.push([px, py]);
        const emphasis = Math.max(0, Math.sin(col * 0.18 + row * 0.24 - time * 1.05)) ** 16;
        const color = col < cols * 0.4 ? fieldColors[0] : col < cols * 0.72 ? fieldColors[1] : fieldColors[2];
        ctx.fillStyle = `rgba(${color},${(0.16 + depth * 0.12 + emphasis * 0.44) * perspective})`;
        ctx.beginPath(); ctx.arc(px, py, (0.69 + depth * 0.15 + emphasis * 0.75) * perspective, 0, Math.PI * 2); ctx.fill();
      }
      grid[row] = points;
      if (row % 2 === 0) { ctx.strokeStyle = `rgba(${fieldColors[0]},${0.065 + depth * 0.065})`; ctx.lineWidth = 0.65; ctx.beginPath(); points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke(); }
    }
    // Fine cross-contours expose the surface depth. Brighter packets move
    // along a few contour lines rather than filling the screen with noise.
    for (let col = 3; col < cols; col += mobile ? 6 : 5) {
      ctx.strokeStyle = `rgba(${fieldColors[0]},.067)`; ctx.lineWidth = 0.55; ctx.beginPath();
      for (let row = rows - 1; row >= 0; row--) { const p = grid[row][col]; row === rows - 1 ? ctx.moveTo(...p) : ctx.lineTo(...p); } ctx.stroke();
    }
    const streams = mobile ? 4 : 6;
    for (let flow = 0; flow < streams; flow++) {
      const row = Math.round(rows * (0.16 + flow / streams * 0.63));
      const progress = (time * 0.048 + flow * 0.167) % 1;
      const head = progress * (cols - 1), index = Math.floor(head), fraction = head - index;
      const points = grid[row], a = points[index], b = points[index + 1];
      const px = a[0] + (b[0] - a[0]) * fraction, py = a[1] + (b[1] - a[1]) * fraction;
      const color = fieldColors[flow % 3];
      for (let tail = 0; tail < 7 && index - tail > 0; tail++) {
        ctx.strokeStyle = `rgba(${color},${0.47 * (1 - tail / 7)})`; ctx.lineWidth = 1.15;
        ctx.beginPath(); ctx.moveTo(...points[index - tail]); ctx.lineTo(...points[index - tail - 1]); ctx.stroke();
      }
      ctx.fillStyle = `rgba(${color},.12)`; ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = `rgba(${color},.75)`; ctx.beginPath(); ctx.arc(px, py, 2.1, 0, Math.PI * 2); ctx.fill();
    }
    field.dataset.renderer = 'perspective-canvas'; field.dataset.frame = String(Number(field.dataset.frame || 0) + 1); field.dataset.palette = fieldColors.join('|');
  }
  // Canvas fallback keeps the same idealized ribbon art and conceptual scenes.
  const fallbackScenes = [];
  function drawHeroFallback(f, time, w, h) {
    const c = f.ctx, pulse = heroPulseState(time), compact = w / h < .84, universe = window.WX_HERO_UNIVERSE;
    if (!paused && !heroState.drag) heroState.baseYaw += Math.min(.05, Math.max(0, time - (f.heroTime ?? time))) * .072; f.heroTime = time;
    if (universe?.drawFallback) {
      c.save(); universe.drawFallback(c, time, w, h, { ...heroFallbackOptions(w, h), pulseAge: pulse.age }); c.restore();
    }
    const ratio = Math.min(w / 10.5, h / 12.8) * heroState.zoom * (universe ? (compact ? .72 : .78) : 1);
    const orientation = qMultiply(qMultiply(heroOrientations.scene, heroOrientations.helix), qEuler(.13, heroState.baseYaw, -.29));
    const transform = point => qPoint(point, orientation);
    const project = point => { const p = transform(point); return { x: w / 2 + p.x * ratio, y: h / 2 - p.y * ratio, z: p.z }; };
    const frame = (t, phase) => {
      const a = (t - .5) * Math.PI * 3.4 + phase, sa = Math.sin(a), ca = Math.cos(a), speed = 1.7 * Math.PI * 3.4, length = Math.hypot(speed, 9.3), end = Math.min(1, t / .032, (1 - t) / .032);
      return { p: { x: ca * 1.7, y: (t - .5) * 9.3, z: sa * 1.7 }, r: { x: ca, y: 0, z: sa }, b: { x: sa * 9.3 / length, y: speed / length, z: -ca * 9.3 / length }, taper: Math.sqrt(Math.max(.000015, 1 - (1 - end) * (1 - end))) };
    };
    const surface = (t, phase, theta) => {
      const q = frame(t, phase), u = Math.cos(theta), radial = (Math.sin(theta) * .105 + .055 * (1 - u * u)) * q.taper;
      return { x: q.p.x + q.b.x * u * .57 * q.taper + q.r.x * radial, y: q.p.y + q.b.y * u * .57 * q.taper, z: q.p.z + q.b.z * u * .57 * q.taper + q.r.z * radial };
    };
    const stroke = (points, color, width, opacity = 1) => { c.strokeStyle = color; c.lineWidth = width; c.globalAlpha = opacity; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); points.forEach((p, i) => i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)); c.stroke(); c.globalAlpha = 1; };
    const orbit = (t, i) => { const a = t * Math.PI * 2; return i ? { x: Math.cos(a) * 2.8, y: Math.sin(a) * 3.9, z: Math.sin(a) * 1.8 - .8 } : { x: Math.cos(a) * 3.65, y: Math.sin(a) * 1.13, z: Math.sin(a) * 2.75 }; };
    [0, 1].forEach(i => stroke(Array.from({ length: 161 }, (_, j) => project(orbit(j / 160, i))), i ? (window.WX_VISUAL_PALETTE?.css('#aaaaca')||'#aaaaca') : (window.WX_VISUAL_PALETTE?.css('#6daab3')||'#6daab3'), .7, i ? .2 : .32));
    const palettes = [[(window.WX_VISUAL_PALETTE?.css('#176881')||'#176881'), (window.WX_VISUAL_PALETTE?.css('#52bbaa')||'#52bbaa'), (window.WX_VISUAL_PALETTE?.css('#4c94bd')||'#4c94bd'), (window.WX_VISUAL_PALETTE?.css('#b4e1d3')||'#b4e1d3'), (window.WX_VISUAL_PALETTE?.css('#388e9f')||'#388e9f')], [(window.WX_VISUAL_PALETTE?.css('#6b79b0')||'#6b79b0'), (window.WX_VISUAL_PALETTE?.css('#a67aba')||'#a67aba'), (window.WX_VISUAL_PALETTE?.css('#b6b7db')||'#b6b7db'), (window.WX_VISUAL_PALETTE?.css('#daa0bc')||'#daa0bc'), (window.WX_VISUAL_PALETTE?.css('#7b8bc3')||'#7b8bc3')]].map(chain => chain.map(hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16))));
    const mixColor = (ci, t, light, shimmer) => {
      const ct = t * 4, i = Math.min(3, Math.floor(ct)), a = palettes[ci][i], b = palettes[ci][i + 1], blend = ct - i;
      return 'rgb(' + a.map((x, j) => Math.round(Math.max(0, Math.min(255, (x + (b[j] - x) * blend) * light + (255 - (x + (b[j] - x) * blend)) * shimmer)))).join(',') + ')';
    };
    const polygons = [], segments = 152, around = 16;
    for (let ci = 0; ci < 2; ci++) {
      const rows = Array.from({ length: segments + 1 }, (_, i) => Array.from({ length: around + 1 }, (_, j) => project(surface(i / segments, ci * Math.PI, j / around * Math.PI * 2))));
      for (let i = 0; i < segments; i++) for (let j = 0; j < around; j++) {
        const t = (i + .5) / segments, theta = (j + .5) / around * Math.PI * 2, f0 = frame(t, ci * Math.PI);
        const normal = transform({ x: f0.b.x * Math.cos(theta) * .105 + f0.r.x * Math.sin(theta) * .57, y: f0.b.y * Math.cos(theta) * .105, z: f0.b.z * Math.cos(theta) * .105 + f0.r.z * Math.sin(theta) * .57 });
        if (normal.z <= -.01) continue;
        const nLength = Math.hypot(normal.x, normal.y, normal.z), light = .63 + .37 * Math.max(0, (-normal.x * .4 + normal.y * .6 + normal.z * .8) / nLength);
        const flowD = Math.abs(((t - time * .045 + ci * .31 + 100.5) % 1) - .5), flow = Math.exp(-Math.pow(flowD / .043, 2)) * .19;
        const wave = Math.exp(-Math.pow((Math.abs(t - pulse.origin) - pulse.age * .34) / .055, 2)) * Math.exp(-pulse.age * .65) * .34;
        const specular = Math.pow(Math.max(0, normal.z / nLength), 14) * .22;
        const q = [rows[i][j], rows[i + 1][j], rows[i + 1][j + 1], rows[i][j + 1]];
        polygons.push({ q, color: mixColor(ci, t, light, specular + flow + wave), z: q.reduce((n, p) => n + p.z, 0) / 4 });
      }
      // Draw the selvedges and fine fibers with the same depth order as the body.
      [0, Math.PI, .99, 1.84, 2.2].forEach((theta, index) => {
        for (let i = 0; i < segments; i++) {
          const a = project(surface((i + .2) / segments, ci * Math.PI, theta)), b = project(surface((i + 1.2) / segments, ci * Math.PI, theta));
          polygons.push({ line: [a, b], z: (a.z + b.z) / 2 + .01, color: ci ? (window.WX_VISUAL_PALETTE?.css('#dfd9ef')||'#dfd9ef') : (window.WX_VISUAL_PALETTE?.css('#c0ece2')||'#c0ece2'), width: index < 2 ? .85 : .55, opacity: index < 2 ? .82 : .55 });
        }
      });
      for (let i = 0; i < 2; i++) {
        const q = (time * .039 + i * .5 + ci * .17) % 1, points = Array.from({ length: 14 }, (_, j) => project(surface(Math.max(0, q - j * .0035), ci * Math.PI, i ? Math.PI : 0)));
        polygons.push({ line: points, z: points[0].z + .04, color: ci ? (window.WX_VISUAL_PALETTE?.css('#e8defb')||'#e8defb') : (window.WX_VISUAL_PALETTE?.css('#d7fff0')||'#d7fff0'), width: 1.6, opacity: .9 });
      }
    }
    if (focusState.basePairs) for (let i = 0; i < 20; i++) {
      const t = .04 + i / 19 * .92, a = project(frame(t, 0).p), b = project(frame(t, Math.PI).p);
      polygons.push({ line: [a, b], z: (a.z + b.z) / 2, color: (window.WX_VISUAL_PALETTE?.css('#9cbfca')||'#9cbfca'), width: Math.max(1.1, ratio * .055), opacity: .5 });
    }
    polygons.sort((a, b) => a.z - b.z).forEach(item => {
      if (item.line) { stroke(item.line, item.color, item.width, item.opacity); return; }
      c.fillStyle = item.color; c.strokeStyle = item.color; c.lineWidth = .65; c.beginPath(); item.q.forEach((p, i) => i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)); c.closePath(); c.fill(); c.stroke();
    });
    for (let i = 0; i < 12; i++) { const p = project(orbit((i / 12 + time * .018) % 1, i % 2)); c.fillStyle = i % 2 ? (window.WX_VISUAL_PALETTE?.css('#bab4dc')||'#bab4dc') : (window.WX_VISUAL_PALETTE?.css('#99c4c5')||'#99c4c5'); c.globalAlpha = .6; c.beginPath(); c.arc(p.x, p.y, i < 4 ? 1.5 : .7, 0, Math.PI * 2); c.fill(); } c.globalAlpha = 1;
    f.canvas.dataset.representation = 'silk-helix'; f.canvas.dataset.heroVersion = '10'; f.canvas.dataset.material = 'lightwoven-pearl';
    f.canvas.dataset.heroElements = universe ? 'helix ai microbes data' : 'helix'; f.canvas.dataset.selectedTopic = heroTopic;
    f.canvas.dataset.zoom = heroState.zoom.toFixed(2); f.canvas.dataset.drawnZoom = heroState.zoom.toFixed(3);
    f.canvas.dataset.pulseCount = String(heroLight.count); f.canvas.dataset.pulseProgress = Math.min(1, pulse.age / 3.3).toFixed(3); f.canvas.dataset.pulseState = pulse.frozen ? 'still' : pulse.active ? 'flowing' : 'rest';
    heroState.drawnZoom = heroState.zoom;
  }

  function fallback(id, type) {
    let canvas = $(id); if (!canvas || canvas.dataset.renderer === 'webgl') return;
    let ctx; try { ctx = canvas.getContext('2d'); } catch {}
    if (!ctx) { const replacement = canvas.cloneNode(false); canvas.replaceWith(replacement); canvas = replacement; ctx = canvas.getContext('2d'); }
    if (!ctx) return;
    canvas.dataset.renderer = 'canvas-fallback'; const input=type==='hero'?null:window.WX_RESEARCH_INPUTS?.attach(canvas,type==='ai'?'llm':type,{onChange:wake});fallbackScenes.push({ canvas, ctx, type, input });
    if(type==='hero') {
      attachHeroInteraction(canvas, (clientX, clientY) => {
        const rect = canvas.getBoundingClientRect(); return hitFallbackHero(clientX - rect.left, clientY - rect.top, rect.width, rect.height);
      }, (result, source) => pulseHero(({ ai: .2, microbes: .55, data: .85 }[result?.topic] ?? .5), source));
    }
  }
  function drawResearchFallback(f,time,w,h) {
    const c=f.ctx,key=f.type==='ai'?focusState.llmStep:f.type==='causal'?focusState.causalFocus:focusState.omicsLayer;
    if(f.lastPhase!==key){f.canvas.dataset.previousScene=f.lastPhase||key;f.lastPhase=key;f.phaseTime=time;}
    f.canvas.dataset.scene=key;f.canvas.dataset.renderedScene=key;f.canvas.dataset.visibleScenes=key;f.canvas.dataset.sceneVersion='6';f.canvas.dataset.transitionProgress='1.000';
    c.save();if(f.input){const a=f.input.project(1,0),b=f.input.project(0,1),z=f.input.state.zoom;c.translate(w/2,h/2);c.transform(a[0]*z,-a[1]*z,-b[0]*z,b[1]*z,0,0);c.translate(-w/2,-h/2);}const scale=Math.min(w/590,h/340);c.translate((w-590*scale)/2,(h-340*scale)/2);c.scale(scale,scale);
    const colors=[(window.WX_VISUAL_PALETTE?.css('#58aaa7')||'#58aaa7'),(window.WX_VISUAL_PALETTE?.css('#7e8eca')||'#7e8eca'),(window.WX_VISUAL_PALETTE?.css('#a18bc9')||'#a18bc9')], points=(fn,n=100)=>Array.from({length:n+1},(_,i)=>fn(i/n));
    const path=(list,color,width=1,alpha=1)=>{c.save();c.globalAlpha=alpha;c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.beginPath();list.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.stroke();c.restore();};
    const dot=(x,y,r,color)=>{c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();};
    const txt=(text,x,y,size=15,color=(window.WX_VISUAL_PALETTE?.css('#557483')||'#557483'))=>{c.fillStyle=color;c.font=size+'px "Times New Roman","Microsoft YaHei",serif';c.textAlign='center';c.textBaseline='middle';c.fillText(text,x,y);};
    const card=(x,y,width,height,text,color)=>{const gradient=c.createLinearGradient(x,y-height/2,x,y+height/2);gradient.addColorStop(0,(window.WX_VISUAL_PALETTE?.css('#f5fbfc')||'#f5fbfc'));gradient.addColorStop(1,color);c.fillStyle=gradient;c.strokeStyle=color;c.lineWidth=1;c.beginPath();c.roundRect(x-width/2,y-height/2,width,height,7);c.fill();c.stroke();txt(text,x,y,15);};
    const orbit=(x,y,rx,ry,color,alpha=.35)=>{c.save();c.globalAlpha=alpha;c.strokeStyle=color;c.lineWidth=1;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.stroke();c.restore();};
    const flow=(fn,color,n=3,speed=.13)=>{path(points(fn),color,1,.33);for(let i=0;i<n;i++){const p=(time*speed+i/n)%1,q=fn(p);dot(q[0],q[1],1.5+Math.sin(p*Math.PI)*1.8,color);}};
    if(f.type==='ai') {
      f.canvas.dataset.llmStep=key;f.canvas.dataset.tokenFocus=String(focusState.tokenFocus);f.canvas.dataset.inputTokens=(english()?LLM_INPUT.en:LLM_INPUT.zh).join('|');f.canvas.dataset.representation='transformer-transformations';
      const input=english()?LLM_INPUT.en:LLM_INPUT.zh,output=english()?LLM_OUTPUT.en:LLM_OUTPUT.zh;
      if(key==='tokens') {
        orbit(295,165,195,58,(window.WX_VISUAL_PALETTE?.css('#98a9cb')||'#98a9cb'),.35);
        input.forEach((word,i)=>{const x=110+i*92,y=115-Math.sin(i/4*Math.PI)*42;card(x,y,78,34,word,i%2?(window.WX_VISUAL_PALETTE?.css('#c0bcdf')||'#c0bcdf'):(window.WX_VISUAL_PALETTE?.css('#acd7d0')||'#acd7d0'));
          const endX=180+i*57;flow(t=>[x+(endX-x)*t,y+22+(210-y-22)*t+Math.sin(t*Math.PI)*12],colors[i%3],2,.12);
          for(let j=0;j<7;j++){const height=10+seed(i*20+j)*34;c.fillStyle=colors[i%3];c.globalAlpha=.8;c.fillRect(endX+(j-3)*6,235-height,4,height);c.globalAlpha=1;}
          if(i===focusState.tokenFocus)orbit(x,y,44,24,(window.WX_VISUAL_PALETTE?.css('#659ba7')||'#659ba7'),.65);
        });
        txt(tr('词元 → 向量','Tokens → embeddings'),295,280,17);
      } else if(key==='attention') {
        orbit(320,166,120,117,(window.WX_VISUAL_PALETTE?.css('#b5a8ce')||'#b5a8ce'),.3);
        for(let layer=2;layer>=0;layer--){const x=220+layer*20,y=95-layer*13;c.fillStyle='rgba(184,199,227,.18)';c.strokeStyle='rgba(147,153,195,.36)';c.beginPath();c.roundRect(x-12,y-12,165,165,12);c.fill();c.stroke();
          for(let row=0;row<5;row++)for(let col=0;col<5;col++){c.globalAlpha=col>row?.08:row===focusState.tokenFocus?.85:.45;c.fillStyle=colors[layer];c.beginPath();c.roundRect(x+col*29,y+row*29,24,24,4);c.fill();c.globalAlpha=1;}
        }
        input.forEach((word,i)=>{txt(word,109,98+i*34,12);dot(141,98+i*34,5,colors[i%3]);flow(t=>[145+t*175,98+i*34+Math.sin(t*Math.PI)*12],colors[i%3],2,.14);});
        txt(tr('多头注意力 · 因果掩码','Multi-head attention · causal mask'),300,285,17);
      } else {
        const fn=t=>[68+t*454,218-Math.sin(t*Math.PI)*26];
        const gradient=c.createLinearGradient(65,0,525,0);gradient.addColorStop(0,(window.WX_VISUAL_PALETTE?.css('#81c4bd')||'#81c4bd'));gradient.addColorStop(1,(window.WX_VISUAL_PALETTE?.css('#b3a4d7')||'#b3a4d7'));path(points(fn),gradient,20,.85);flow(fn,(window.WX_VISUAL_PALETTE?.css('#9a8cc9')||'#9a8cc9'),5,.1);
        const count=paused||reduced.matches?5:Math.min(5,1+Math.floor((time-f.phaseTime)/.58));
        output.forEach((word,i)=>{const x=112+i*91,y=150-Math.sin(i/4*Math.PI)*26;path([[x,y+22],[x,205]],(window.WX_VISUAL_PALETTE?.css('#9dacc6')||'#9dacc6'),1,.4);if(i<count)card(x,y,78,38,word,[(window.WX_VISUAL_PALETTE?.css('#acd7d0')||'#acd7d0'),(window.WX_VISUAL_PALETTE?.css('#b0cedc')||'#b0cedc'),(window.WX_VISUAL_PALETTE?.css('#b9c6e4')||'#b9c6e4'),(window.WX_VISUAL_PALETTE?.css('#c4bade')||'#c4bade'),(window.WX_VISUAL_PALETTE?.css('#ccb5d9')||'#ccb5d9')][i]);});
        const cursorX=112+(count-1)*91+43;path([[cursorX,130],[cursorX,160]],(window.WX_VISUAL_PALETTE?.css('#9b89c4')||'#9b89c4'),2,.8);
        txt(tr('逐词生成 · 一个新的表达','Token by token · a new expression'),295,280,17);
      }
    } else if(f.type==='causal') {
      f.canvas.dataset.causalFocus=key;f.canvas.dataset.representation='causal-story';
      if(key==='instrument') {
        const gene=phase=>t=>[115+t*360,115+Math.sin(t*Math.PI*4+phase)*32];
        for(let i=0;i<24;i++){const t=i/23;path([gene(0)(t),gene(Math.PI)(t)],(window.WX_VISUAL_PALETTE?.css('#91b5c4')||'#91b5c4'),1.5,.65);}
        [0,Math.PI].forEach((phase,i)=>path(points(gene(phase),180),colors[i?2:0],7,.86));
        [3,11,19].forEach((index,i)=>{const p=gene(0)(index/23);orbit(...p,18,18,colors[i],.8);txt('Z'+['₁','₂','₃'][i],p[0],60,13);});
        txt(tr('遗传变异 · 工具变量','Genetic variants · instruments'),295,185,16);
      } else if(key==='exposure') {
        for(let i=0;i<5;i++){
          const fn=t=>{const x=(t-.5)*6;return [130+t*340,180-Math.exp(-x*x/1.55)*108-i*3];};
          path(points(fn),colors[i%3],3,.65);if(i===0||i===4)flow(fn,colors[i%3],3,.11);
        }
        path([[115,185],[485,185]],(window.WX_VISUAL_PALETTE?.css('#a2b5c5')||'#a2b5c5'),1,.5);txt(tr('暴露特征的分布','A distribution of exposure'),295,207,16);
      } else {
        c.setLineDash([4,4]);path([[235,52],[235,190]],(window.WX_VISUAL_PALETTE?.css('#abbccc')||'#abbccc'),1,.65);c.setLineDash([]);
        for(let i=0;i<5;i++){const y=67+i*26,x=215+Math.sin(i*1.6)*34,half=25+seed(i+72)*40;path([[x-half,y],[x+half,y]],colors[i%2],2,.9);c.fillStyle=colors[i%2];c.save();c.translate(x,y);c.rotate(Math.PI/4);c.fillRect(-4,-4,8,8);c.restore();}
        orbit(422,119,56,52,(window.WX_VISUAL_PALETTE?.css('#ab9acb')||'#ab9acb'),.45);dot(422,119,24,(window.WX_VISUAL_PALETTE?.css('#b5a2cf')||'#b5a2cf'));for(let i=0;i<7;i++){const a=i/7*Math.PI*2,p=[422+Math.cos(a)*69,119+Math.sin(a)*69];path([[422,119],p],(window.WX_VISUAL_PALETTE?.css('#a6b3cd')||'#a6b3cd'),1,.3);dot(...p,3,colors[i%3]);}
        txt(tr('结局与效应 · 概念示意','Outcome & effect · schematic'),295,212,16);
      }
      const nodes=[[155,272],[295,272],[435,272],[365,238]],selected=['instrument','exposure','outcome'].indexOf(key);
      [[0,1],[1,2],[3,1],[3,2]].forEach(([a,b],i)=>{if(i>1)c.setLineDash([4,4]);path([nodes[a],nodes[b]],(window.WX_VISUAL_PALETTE?.css('#a8bdcb')||'#a8bdcb'),1,i>1?.3:.7);c.setLineDash([]);if(i<2){const x=nodes[b][0]-10,y=nodes[b][1];path([[x-5,y-3],[x,y],[x-5,y+3]],(window.WX_VISUAL_PALETTE?.css('#81a5b7')||'#81a5b7'),1,.8);}});
      nodes.forEach(([x,y],i)=>{dot(x,y,i===selected?7:4,i===3?(window.WX_VISUAL_PALETTE?.css('#aab9c6')||'#aab9c6'):colors[i]);if(i<3)txt(tr(['遗传工具','暴露','结局'][i],['Instrument','Exposure','Outcome'][i]),x,y+21,12);else txt(tr('混杂','Confounder'),x,y-12,11);});
    } else {
      f.canvas.dataset.omicsLayer=key;f.canvas.dataset.representation='omics-transformations';
      if(key==='all'){
        for(let i=0;i<3;i++){const y=98+i*66;orbit(285,y,120,32,colors[i],.7);orbit(285,y,106,27,colors[i],.25);for(let j=0;j<7;j++){const a=j/7*Math.PI*2+time*.06;dot(285+Math.cos(a)*120,y+Math.sin(a)*32,3,colors[i]);}txt(tr(['基因组','转录组','蛋白组'][i],['Genome','Transcriptome','Proteome'][i]),464,y,14);}
        for(let i=0;i<5;i++){const x=215+i*37;flow(t=>[x+Math.sin(t*Math.PI*2)*24,98+t*132],colors[i%3],2,.1);}
      } else if(key==='genome'){
        const dna=phase=>t=>[280+Math.sin(t*Math.PI*4+phase)*48+(t-.5)*53,62+t*216];
        for(let i=0;i<22;i++){const t=i/21;path([dna(0)(t),dna(Math.PI)(t)],(window.WX_VISUAL_PALETTE?.css('#92b9c7')||'#92b9c7'),1.5,.65);}
        [0,Math.PI].forEach((phase,i)=>path(points(dna(phase),180),colors[i?2:0],8,.9));
        ['A','T','C','G','A','C'].forEach((base,i)=>card(390+(i%2)*31,95+Math.floor(i/2)*34,24,25,base,(window.WX_VISUAL_PALETTE?.css('#c5d7e3')||'#c5d7e3')));txt(tr('序列 · 遗传信息','Sequence · genetic information'),295,307,16);
      } else if(key==='transcriptome'){
        dot(158,160,21,(window.WX_VISUAL_PALETTE?.css('#a1bed8')||'#a1bed8'));orbit(158,160,36,36,(window.WX_VISUAL_PALETTE?.css('#9bbed1')||'#9bbed1'),.5);txt('RNA',158,217,16);
        for(let i=0;i<5;i++){
          const fn=t=>[180+t*(245+(i%2)*28),160+((i-2)*43)*t+Math.sin(t*Math.PI)*17];
          path(points(fn),colors[i%2],6,.72);flow(fn,colors[i%2],2,.13);
          for(let j=0;j<9;j++){const p=fn(.22+j*.082);path([p,[p[0],p[1]-11]],colors[(i+j)%3],4,.85);}
        }txt(tr('转录 · 表达的多种可能','Transcripts · patterns of expression'),295,293,16);
      } else {
        orbit(295,157,134,112,(window.WX_VISUAL_PALETTE?.css('#b5aacd')||'#b5aacd'),.25);
        const fn=t=>{const a=t*Math.PI*2;return [295+Math.sin(a)*97+Math.cos(a*5)*22,165+Math.cos(a*2)*60+Math.sin(a*5)*13];};
        const gradient=c.createLinearGradient(180,70,410,250);gradient.addColorStop(0,(window.WX_VISUAL_PALETTE?.css('#64b4b5')||'#64b4b5'));gradient.addColorStop(1,(window.WX_VISUAL_PALETTE?.css('#ac94d2')||'#ac94d2'));path(points(fn,240),gradient,16,.9);path(points(fn,240),(window.WX_VISUAL_PALETTE?.css('#dce8ee')||'#dce8ee'),1.3,.7);flow(fn,(window.WX_VISUAL_PALETTE?.css('#9685c8')||'#9685c8'),5,.025);
        txt(tr('折叠 · 结构与功能','Folding · structure and function'),295,302,16);
      }
    }
    c.restore();
  }

  function renderFallback(f, time) {
    if (Number(f.canvas.dataset.frame || 0) > 0 && !visible(f.canvas)) return;
    const w = f.canvas.clientWidth, h = f.canvas.clientHeight, d = Math.min(devicePixelRatio || 1, 1.5); if (!w || !h) return;
    if (f.canvas.width !== Math.round(w * d) || f.canvas.height !== Math.round(h * d)) { f.canvas.width = Math.round(w * d); f.canvas.height = Math.round(h * d); }
    const c = f.ctx; c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, w, h);
    if (f.type === 'hero') { drawHeroFallback(f, time, w, h); } else { drawResearchFallback(f, time, w, h); }
    f.canvas.dataset.frame = String(Number(f.canvas.dataset.frame || 0) + 1);
  }
  function rotate(yaw = 0.22, pitch = 0, topic = heroTopic) { rotateHeroTarget(topic, yaw, pitch); }
  function reset() {
    $('hero-canvas')?.dispatchEvent(new CustomEvent('hero-reset-input'));
    HERO_TOPICS.forEach(topic => { heroOrientations[topic] = [0,0,0,1]; heroInputAngles[topic] = {x:0,y:0}; });
    heroInteraction.revision++; heroState.yaw = 0; heroState.pitch = 0; heroState.baseYaw = 0; setZoom(1); selectHeroTopic('scene','reset'); wake();
  }
  function setZoom(value) {
    const n=Number(value); if(!Number.isFinite(n))return;
    heroState.zoom=Math.max(.75,Math.min(1.65,n));
    if($('hero-canvas'))$('hero-canvas').dataset.zoom=heroState.zoom.toFixed(2);
    window.dispatchEvent(new CustomEvent('zoomchange',{detail:{zoom:heroState.zoom}}));wake();
  }
  function animate(now) {
    requestAnimationFrame(animate);
    if (document.hidden) { last = now; return; }
    if (['boot','open'].includes(document.documentElement.dataset.intro) && !dirty) { last = now; return; }
    const wallDelta = Math.max(0, (now - (last || now)) / 1000), delta = Math.min(0.05, wallDelta);
    if (now - last < 1000 / 60 - .5 && !dirty) return;
    last = now;
    if (!paused) clock += delta;
    if (paused && !dirty && now > transitionUntil) return;
    for (const s of scenes) if (!s.dead && (s.frame === 0 || s.width === 0 || visible(s.canvas)) && fit(s)) { s.tick(clock, delta || 1/60, wallDelta || 1/60); if(s.input){s.orbitRoot.quaternion.fromArray(s.input.state.quaternion);if(s.camera.zoom!==s.input.state.zoom){s.camera.zoom=s.input.state.zoom;s.camera.updateProjectionMatrix();}} s.renderer.render(s.scene, s.camera); s.canvas.dataset.frame = String(++s.frame); }
    renderField(clock); fallbackScenes.forEach(f => renderFallback(f, clock)); dirty = false;
  }
  if (T) { hero = molecularHero(); causalScene(); omicsScene(); aiScene(); }
  [['hero-canvas', 'hero'], ['causal-canvas', 'causal'], ['omics-canvas', 'omics'], ['ai-canvas', 'ai']].forEach(([id, type]) => fallback(id, type));
  function applyTheme(){for(const scene of scenes)scene.palette=window.WX_VISUAL_PALETTE?.recolor(scene.root,T);semanticLabels.forEach(fn=>fn());wake();}
  addEventListener('wxthemechange',applyTheme);applyTheme();
  const refresh = () => { semanticLabels.forEach(fn => fn()); llmState?.update(); styleMotion(); dirty = true; };
  window.addEventListener('languagechange', refresh);
  window.addEventListener('resize', () => { dirty = true; });
  window.addEventListener('scroll', () => { if (paused) dirty = true; }, { passive: true });
  document.addEventListener('visibilitychange', () => { last = 0; dirty = true; });
  reduced.addEventListener('change', e => { paused = e.matches; dirty = true; styleMotion(); });
  $('motion-toggle')?.addEventListener('click', () => { paused = !paused; styleMotion(); dirty = true; });
  window.WX_SCENES = {
    setTheme:applyTheme, paletteInfo:()=>Object.fromEntries(scenes.map(s=>[s.id,s.palette])), researchViews:()=>window.WX_RESEARCH_INPUTS?.info(), setMotion, rotate, reset, setZoom, getZoom:()=>heroState.zoom, getHeroOrientation:topic=>(heroOrientations[topic]||heroOrientations.scene).slice(), pulseHero:()=>pulseHero(.5,'api'),
    selectHeroTopic:topic=>{selectHeroTopic(topic,'api');pulseHero(.5,'api');},
    setBasePairs(value){focusState.basePairs=Boolean(value);if(hero)hero.pairs.visible=focusState.basePairs;dirty=true;},
    setHydrogenBonds(value){this.setBasePairs(value);},
    setLLMStep(value){if(!['tokens','attention','generation'].includes(value))return;focusState.llmStep=value;llmState?.update();dirty=true;},
    setTokenFocus(value){focusState.tokenFocus=Math.max(0,Math.min(4,Math.trunc(Number(value)||0)));llmState?.update();dirty=true;},
    setCausalFocus(value){if(!['instrument','exposure','outcome'].includes(value))return;focusState.causalFocus=value;causalState?.update();dirty=true;},
    setOmicsLayer(value){if(!['all','genome','transcriptome','proteome'].includes(value))return;focusState.omicsLayer=value;omicsState?.update();dirty=true;},
    getMotion:()=>paused?'paused':'running',
    info:()=>({structure:'idealized',representation:'silk-helix',heroVersion:10,heroStyle:'biomed-ai-universe',heroTopic,heroSelectionCount,heroOrientations:orientationSnapshot(),heroInteraction:{...heroInteraction,selected:heroTopic,angles:JSON.parse(JSON.stringify(heroInputAngles))},heroTargets:hero?.heroTargets?.()||fallbackHeroTargets(),heroPulse:{count:heroLight.count,source:heroLight.source,origin:heroLight.origin,age:Math.max(0,clock-heroLight.started)},zoom:heroState.zoom,drawnZoom:heroState.drawnZoom,...focusState,inputTokens:english()?LLM_INPUT.en:LLM_INPUT.zh,researchScenes:{llm:llmState?.info?.(),causal:causalState?.info?.(),omics:omicsState?.info?.()},renderers:scenes.map(s=>({id:s.id,renderer:s.canvas.dataset.renderer,frames:s.frame}))})
  };
  styleMotion(); requestAnimationFrame(animate);
})();

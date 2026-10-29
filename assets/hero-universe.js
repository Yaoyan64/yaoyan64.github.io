/* Local BIO × AI artwork. Bacterial shapes are stylized rods and cocci,
 * without nuclei or species-specific claims. This module owns no renderer,
 * animation loop, network request, document event, or page-level motion state. */
(() => {
  'use strict';
  const TOPICS = ['ai', 'microbes', 'data'];
  const identity = [0, 0, 0, 1];
  const multiply = (a, b) => [a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1], a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0], a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3], a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2]];
  const turn = (x, y, z, q = identity) => {
    const tx = 2 * (q[1] * z - q[2] * y), ty = 2 * (q[2] * x - q[0] * z), tz = 2 * (q[0] * y - q[1] * x);
    return [x + q[3] * tx + q[1] * tz - q[2] * ty, y + q[3] * ty + q[2] * tx - q[0] * tz, z + q[3] * tz + q[0] * ty - q[1] * tx];
  };
  const layout = compact => compact ? {
    ai: [-2.92, 2.48, -.35, .8], microbes: [2.82, -2.55, .1, .82], data: [2.96, 2.55, -.8, .8]
  } : {
    ai: [-3.86, 2.48, -.35, 1.1], microbes: [3.78, -2.47, .1, 1.08], data: [3.82, 2.88, -.8, 1]
  };
  function create(T) {
    const group = new T.Group(); group.name = 'hero-universe';
    const pickTargets = [], clusters = {}, strengths = { ai: 0, microbes: 0, data: 0 }, reactive = [];
    let animationTime = 0, lastCompact = null, selectedTopic = 'scene';
    const manualQuaternion = new T.Quaternion();
    const v = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
    const seed = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
    const pearl = (color, options = {}) => new T.MeshPhysicalMaterial({ color, roughness: .26, metalness: .2, clearcoat: .85, clearcoatRoughness: .2, envMapIntensity: .65, ...options });
    const line = (points, color, opacity = .35) => new T.Line(new T.BufferGeometry().setFromPoints(points), new T.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false }));
    const sphere = new T.SphereGeometry(1, 20, 14);
    const bead = (parent, position, radius, color, topic, options = {}) => {
      const mat = pearl(color, { emissive: color, emissiveIntensity: .08, ...options }), mesh = new T.Mesh(sphere, mat);
      mesh.position.copy(position); mesh.scale.setScalar(radius); parent.add(mesh);
      if (topic) pick(mesh, topic); return mesh;
    };
    const pick = (mesh, topic) => { mesh.userData.heroTopic = topic; pickTargets.push(mesh); return mesh; };
    const cluster = topic => { const result = new T.Group(); result.name = 'hero-universe-' + topic; result.userData.heroTopic = topic; clusters[topic] = result; group.add(result); return result; };
    const responsiveMaterial = (mat, topic, intensity = .08) => { mat.emissiveIntensity = intensity; reactive.push({ mat, topic, intensity, opacity: mat.opacity }); return mat; };
    function roundedPlate(width, height, depth, radius) {
      const shape = new T.Shape(), x = -width / 2, y = -height / 2, r = radius;
      shape.moveTo(x + r, y); shape.lineTo(x + width - r, y); shape.quadraticCurveTo(x + width, y, x + width, y + r);
      shape.lineTo(x + width, y + height - r); shape.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
      shape.lineTo(x + r, y + height); shape.quadraticCurveTo(x, y + height, x, y + height - r);
      shape.lineTo(x, y + r); shape.quadraticCurveTo(x, y, x + r, y);
      const geometry = new T.ExtrudeGeometry(shape, { depth, steps: 1, bevelEnabled: true, bevelSize: .045, bevelThickness: .04, bevelSegments: 3, curveSegments: 8 });
      geometry.translate(0, 0, -depth / 2); return geometry;
    }

    // Three translucent, thick attention layers form a miniature AI sculpture.
    const ai = cluster('ai'), stack = new T.Group(); ai.add(stack);
    const plateGeometry = roundedPlate(1.7, 1.55, .11, .17), tileGeometry = new T.BoxGeometry(.22, .22, .065);
    const layers = [], matrix = new T.Object3D(), cells = [], nodePositions = [];
    const layerColors = [0x78b7c7, 0x8e9ad0, 0xb79dce];
    for (let i = 0; i < 3; i++) {
      const layer = new T.Group(), material = responsiveMaterial(pearl(layerColors[i], { transparent: true, opacity: .56, depthWrite: false, emissive: layerColors[i] }), 'ai', .045);
      const panel = pick(new T.Mesh(plateGeometry, material), 'ai'); layer.add(panel);
      const edge = new T.LineSegments(new T.EdgesGeometry(plateGeometry, 26), new T.LineBasicMaterial({ color: i ? 0xb6b5db : 0xa9d8de, transparent: true, opacity: .42 })); layer.add(edge);
      const cellMaterial = responsiveMaterial(pearl(i ? 0x8c92c6 : 0x66b2bf, { emissive: layerColors[i], emissiveIntensity: .08 }), 'ai', .08);
      const dots = new T.InstancedMesh(tileGeometry, cellMaterial, 9); dots.instanceMatrix.setUsage(T.DynamicDrawUsage);
      for (let j = 0; j < 9; j++) { matrix.position.set((j % 3 - 1) * .43, (1 - Math.floor(j / 3)) * .41, .12); matrix.scale.set(1, 1, .7 + seed(i * 20 + j) * 1.7); matrix.updateMatrix(); dots.setMatrixAt(j, matrix.matrix); dots.setColorAt(j, new T.Color(j % 4 === 0 ? 0xd2e7ed : j % 3 === 0 ? 0xa7cbd1 : layerColors[i])); }
      layer.add(dots); stack.add(layer); layers.push(layer); cells.push(dots);
    }
    stack.rotation.set(.42, -.6, -.15);
    const nodeLinks = [];
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2 + .2, p = v(Math.cos(a) * 1.4, Math.sin(a) * 1.28, Math.sin(a * 2) * .35 + .05); nodePositions.push(p);
      bead(ai, p, i % 2 ? .09 : .13, i % 2 ? 0x9aabd4 : 0x7ebfc5, 'ai', { roughness: .17, metalness: .3 });
      const end = v(Math.sign(p.x) * .78, Math.sign(p.y) * .5, 0);
      const curve = new T.QuadraticBezierCurve3(p, p.clone().lerp(end, .5).add(v(0, 0, .25)), end);
      const wire = line(curve.getPoints(28), i % 2 ? 0xaab2d7 : 0x7bbbc7, .44); ai.add(wire); nodeLinks.push({ curve, wire });
    }
    // Two small vector tokens, with engraved bars rather than HUD text.
    const tokenGeometry = roundedPlate(.62, .31, .1, .08);
    [-1, 1].forEach((side, i) => {
      const token = pick(new T.Mesh(tokenGeometry, responsiveMaterial(pearl(i ? 0xb9b4d6 : 0x8fc8cf, { emissive: i ? 0xa69ecb : 0x67afb9 }), 'ai', .03)), 'ai');
      token.position.set(side * 1.1, side * -.78, .46); token.rotation.set(.1, side * .2, side * .25); ai.add(token);
      for (let j = 0; j < 3; j++) { const bar = new T.Mesh(new T.BoxGeometry(.028, .08 + j * .025, .018), pearl(0xe7f3f4, { metalness: .1 })); bar.position.set((j - 1) * .105, 0, .095); token.add(bar); }
    });
    const aiPacket = new T.InstancedMesh(new T.SphereGeometry(.048, 10, 8), pearl(0xd9f7f2, { emissive: 0x7fc1d3, emissiveIntensity: .45 }), 6); aiPacket.instanceMatrix.setUsage(T.DynamicDrawUsage); ai.add(aiPacket);

    // A small bacterial community: smooth rods, separate coccoid cells, no nuclei.
    const microbes = cluster('microbes'), bacteria = [], cocci = new T.Group(); microbes.add(cocci);
    function bacterium(length, radius, color, offset, rotation) {
      const body = new T.Group(); body.position.copy(offset); body.rotation.set(...rotation); microbes.add(body);
      const mat = responsiveMaterial(pearl(color, { transparent: true, opacity: .85, emissive: color, roughness: .27, metalness: .12 }), 'microbes', .035);
      const cell = pick(new T.Mesh(new T.CapsuleGeometry(radius, length, 8, 24), mat), 'microbes'); body.add(cell);
      const coat = new T.Mesh(new T.CapsuleGeometry(radius * 1.055, length, 8, 24), pearl(color, { transparent: true, opacity: .17, depthWrite: false, roughness: .2, metalness: .05 })); body.add(coat);
      // Small dispersed inclusions suggest cytoplasm, with no central compartment.
      const grain = new T.InstancedMesh(new T.SphereGeometry(.035, 8, 6), pearl(color, { transparent: true, opacity: .58, emissive: color, emissiveIntensity: .04 }), 9);
      for (let i = 0; i < 9; i++) { matrix.position.set(Math.cos(i * 2.4) * radius * .52, (i / 8 - .5) * length * 1.12, Math.sin(i * 2.4) * radius * .52); matrix.scale.setScalar(.7 + seed(i + length) * .55); matrix.updateMatrix(); grain.setMatrixAt(i, matrix.matrix); } body.add(grain);
      // A slim longitudinal membrane reflection defines the rounded capsule.
      const glint = [];
      for (let i = 0; i <= 48; i++) { const t = i / 48, y = (t - .5) * (length + radius * 1.3), end = Math.max(0, Math.abs(y) - length / 2), r = Math.sqrt(Math.max(.001, radius * radius - end * end)); glint.push(v(-r * .49, y, r * .87)); }
      body.add(line(glint, color === 0x65b9a9 ? 0xc2ece0 : 0xf1d1bd, .68));
      if (color === 0x65b9a9) {
        // One flagellum and a few short pili distinguish the artistic cell from a capsule.
        const end = -length / 2 - radius;
        const flagellum = new T.CatmullRomCurve3([v(0, end, 0), v(.12, end - .19, .05), v(.34, end - .38, .08), v(.23, end - .61, .12), v(-.1, end - .77, .08), v(-.27, end - .95, .01)]);
        body.add(new T.Mesh(new T.TubeGeometry(flagellum, 64, .012, 6, false), pearl(0x71b4a6, { transparent: true, opacity: .67, roughness: .3, metalness: .08 })));
        [-.32, .28].forEach((y, i) => [-1, 1].forEach(side => {
          const pilus = new T.CatmullRomCurve3([v(side * radius * .91, y, .11), v(side * (radius + .13), y + (i ? .035 : -.045), .14), v(side * (radius + .25), y + (i ? .1 : -.08), .1)]);
          body.add(new T.Mesh(new T.TubeGeometry(pilus, 16, .009, 5, false), pearl(0x78b8ad, { transparent: true, opacity: .65, roughness: .3, metalness: .05 })));
        }));
      }
      bacteria.push({ body, position: offset.clone(), rotation: rotation.slice() }); return body;
    }
    bacterium(1.1, .31, 0x65b9a9, v(-.16, .05, 0), [.17, -.25, -.57]);
    bacterium(.67, .23, 0xd89988, v(.8, -.7, .12), [-.3, .32, .58]);
    const cocciMat = responsiveMaterial(pearl(0xc8af88, { emissive: 0xc3a77d, roughness: .24, metalness: .12 }), 'microbes', .025);
    [[-.82, -.75, -.06, .24], [-.98, -.36, .03, .23], [-.88, .05, .08, .22]].forEach(([x, y, z, r]) => { const cell = pick(new T.Mesh(sphere, cocciMat), 'microbes'); cell.position.set(x, y, z); cell.scale.setScalar(r); cocci.add(cell); });
    bead(microbes, v(.7, .84, -.02), .23, 0xdba99a, 'microbes', { roughness: .24 });
    bead(microbes, v(1, .56, .11), .21, 0xd8b3a0, 'microbes', { roughness: .24 });

    // A single folded data thread gives the composition a third, distinct shape.
    const data = cluster('data'), knotCurve = new T.Curve();
    knotCurve.getPoint = t => { const a = t * Math.PI * 2; return v((2 + Math.cos(3 * a)) * Math.cos(2 * a) * .28, (2 + Math.cos(3 * a)) * Math.sin(2 * a) * .28, Math.sin(3 * a) * .3); };
    const knotGeometry = new T.TubeGeometry(knotCurve, 220, .095, 12, true), knotColors = [], positions = knotGeometry.getAttribute('position');
    const knotPalette = [new T.Color(0x80bdc3), new T.Color(0x8e9ed2), new T.Color(0xbea0c5), new T.Color(0x91cec5)];
    for (let i = 0; i < positions.count; i++) { const t = Math.floor(i / 13) / 220 * 3, j = Math.min(2, Math.floor(t)), c = knotPalette[j].clone().lerp(knotPalette[j + 1], t - j); knotColors.push(c.r, c.g, c.b); }
    knotGeometry.setAttribute('color', new T.Float32BufferAttribute(knotColors, 3));
    const knotMaterial = responsiveMaterial(pearl(0xffffff, { vertexColors: true, roughness: .23, metalness: .25, emissive: 0x9ab4ce }), 'data', .05);
    const knot = pick(new T.Mesh(knotGeometry, knotMaterial), 'data'); data.add(knot);
    const knotAccent = line(knotCurve.getPoints(220).map(p => p.add(v(0, 0, .065))), 0xd5e4ed, .55); data.add(knotAccent);
    const knotLight = bead(data, v(), .064, 0xe4fcf1, null, { emissive: 0xa2d2d7, emissiveIntensity: .55, metalness: .1 });
    // Broad invisible hit areas make the hollow knot and small cells easy to tap.
    const proxyMaterial = new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false });
    TOPICS.forEach(topic => {
      const proxy = new T.Mesh(new T.SphereGeometry(topic === 'data' ? 1.02 : 1.43, 16, 10), proxyMaterial);
      proxy.name = 'hero-universe-hit-' + topic; proxy.userData.heroTopic = topic; proxy.userData.heroHitProxy = true;
      clusters[topic].add(proxy); pickTargets.unshift(proxy);
    });

    const flows = new T.Group(); flows.name = 'hero-universe-flow'; group.add(flows);
    const flowLines = [0, 1, 2].map(i => { const wire = line(Array.from({ length: 81 }, () => v()), [0x8eb5c6, 0xb8aacb, 0x88bdb5][i], i === 2 ? .15 : .24); flows.add(wire); return wire; });
    const flowDots = new T.InstancedMesh(new T.SphereGeometry(.035, 10, 8), pearl(0xc8eae5, { emissive: 0x93bbc9, emissiveIntensity: .4 }), 6); flowDots.instanceMatrix.setUsage(T.DynamicDrawUsage); flows.add(flowDots);
    let flowCurves = [];
    function arrange(compact) {
      const positions = layout(compact); TOPICS.forEach(topic => { const p = positions[topic]; clusters[topic].position.set(p[0], p[1], p[2]); });
      const aiP = clusters.ai.position, bugP = clusters.microbes.position, dataP = clusters.data.position, edge = compact ? 4.1 : 5.35;
      flowCurves = [
        new T.CatmullRomCurve3([aiP.clone().add(v(.3, .7, -.5)), v(-1.1, compact ? 4.15 : 4.45, -2), v(1.6, compact ? 3.8 : 4.3, -2.2), dataP.clone()]),
        new T.CatmullRomCurve3([dataP.clone().add(v(.3, -.25, -.4)), v(edge, 1.1, -1.4), v(edge * .94, -1.25, -1.2), bugP.clone().add(v(.4, .1, -.4))]),
        new T.CatmullRomCurve3([aiP.clone().add(v(-.4, -.6, -.6)), v(-edge * .94, -.9, -2), v(-2.2, compact ? -3.9 : -4.1, -2.3), v(.8, -4.1, -2), bugP.clone().add(v(-.6, -.3, -.3))])
      ];
      flowCurves.forEach((curve, i) => { const attr = flowLines[i].geometry.getAttribute('position'); for (let j = 0; j <= 80; j++) { const p = curve.getPoint(j / 80); attr.setXYZ(j, p.x, p.y, p.z); } attr.needsUpdate = true; flowLines[i].geometry.computeBoundingSphere(); });
    }
    function update(time, dt = 1 / 60, options = {}) {
      const compact = Boolean(options.compact), paused = Boolean(options.paused), selected = TOPICS.includes(options.selected) ? options.selected : (options.selected === 'helix' ? 'helix' : 'scene'); selectedTopic = selected;
      if (!paused) animationTime = Number(time) || 0;
      const t = animationTime, amount = paused ? 1 : 1 - Math.exp(-Math.max(.001, dt) * 7), locations = layout(compact);
      if (compact !== lastCompact) { arrange(compact); lastCompact = compact; }
      TOPICS.forEach(topic => {
        strengths[topic] += ((selected === topic ? 1 : 0) - strengths[topic]) * amount;
        const p = locations[topic], active = strengths[topic]; clusters[topic].position.y = p[1] + Math.sin(t * .26 + TOPICS.indexOf(topic) * 1.7) * .075;
        clusters[topic].scale.setScalar(p[3] * (1 + active * .085));
        clusters[topic].userData.selected = selected === topic;
      });
      ai.rotation.set(Math.sin(t * .18) * .075, Math.sin(t * .13) * .13, Math.sin(t * .1) * .045);
      layers.forEach((layer, i) => {
        layer.position.set((i - 1) * .03, (i - 1) * .05, (i - 1) * (.79 + strengths.ai * .2));
        layer.rotation.set(0, (i - 1) * .06, (i - 1) * .13 + Math.sin(t * .21 + i) * .025);
        for (let j = 0; j < 9; j++) { const wave = Math.max(0, Math.cos(t * 1.2 - j * .7 - i * .9)) ** 5; matrix.position.set((j % 3 - 1) * .43, (1 - Math.floor(j / 3)) * .41, .12 + wave * .055); matrix.scale.set(1, 1, .7 + seed(i * 20 + j) * 1.7 + wave * 1.6); matrix.updateMatrix(); cells[i].setMatrixAt(j, matrix.matrix); } cells[i].instanceMatrix.needsUpdate = true;
      });
      nodeLinks.forEach(({ curve }, i) => { matrix.position.copy(curve.getPoint((t * .1 + i / 6) % 1)); matrix.scale.setScalar(.8); matrix.updateMatrix(); aiPacket.setMatrixAt(i, matrix.matrix); }); aiPacket.instanceMatrix.needsUpdate = true;
      microbes.rotation.set(Math.sin(t * .15) * .1, Math.sin(t * .17) * .23, Math.sin(t * .11) * .055);
      bacteria.forEach(({ body, position, rotation }, i) => { body.position.copy(position).multiplyScalar(1 + strengths.microbes * .12); body.position.y += Math.sin(t * .5 + i * 2) * .055; body.rotation.set(rotation[0] + Math.sin(t * .18 + i) * .09, rotation[1] + Math.sin(t * .2 + i) * .16, rotation[2] + Math.sin(t * .26 + i) * .08); });
      cocci.rotation.z = Math.sin(t * .23) * .06;
      data.rotation.set(.35 + Math.sin(t * .19) * .12, -.25 + Math.sin(t * .15) * .22, .12 + t * .045);
      TOPICS.forEach(topic => clusters[topic].quaternion.premultiply(manualQuaternion.fromArray(options.orientations?.[topic] || identity)));
      knot.scale.setScalar(1 + strengths.data * .05); knotLight.position.copy(knotCurve.getPoint((t * .085) % 1));
      const pulseAge = Number.isFinite(options.pulseAge) ? options.pulseAge : 10, pulse = pulseAge < 3.5 ? Math.exp(-pulseAge * .9) * .1 : 0;
      reactive.forEach(({ mat, topic, intensity, opacity }) => { mat.emissiveIntensity = intensity + strengths[topic] * .23 + pulse; if (mat.transparent) mat.opacity = Math.min(.91, opacity + strengths[topic] * .12); });
      for (let i = 0; i < 6; i++) { const curve = flowCurves[i % 3], q = (t * [.048, .06, .037][i % 3] + i / 6) % 1; matrix.position.copy(curve.getPoint(q)); matrix.scale.setScalar(.72 + Math.sin(q * Math.PI) * .45); matrix.updateMatrix(); flowDots.setMatrixAt(i, matrix.matrix); } flowDots.instanceMatrix.needsUpdate = true;
      group.userData.selected = selected; group.userData.compact = compact; group.userData.animationTime = t;
    }
    function getFocusPoints() { group.updateWorldMatrix(true, false); return Object.fromEntries(TOPICS.map(topic => [topic, group.localToWorld(clusters[topic].position.clone())])); }
    update(0, 1, { paused: true });
    return { group, update, pickTargets, getFocusPoints, getState: () => ({ selected: selectedTopic, compact: lastCompact, animationTime, topics: TOPICS.slice() }) };
  }

  let fallbackTime = 0;
  const fallbackGeometry = (w, h, options = {}) => {
    const compact = Boolean(options.compact), scale = Math.min(w / (compact ? 10.5 : 15), h / 13.8) * (Number(options.zoom) || 1), p = layout(compact);
    const orientation = options.orientations?.scene || identity;
    return { compact, scale, p, project: (x, y, z = 0) => { const q = turn(x, y, z, orientation); return [w / 2 + q[0] * scale, h / 2 - q[1] * scale]; } };
  };
  function drawFallback(ctx, time, w, h, options = {}) {
    if (!options.paused) fallbackTime = Number(time) || 0;
    const t = fallbackTime, { compact, scale, p, project } = fallbackGeometry(w, h, options), selected = options.selected;
    const path = (points, color, width = 1, alpha = 1) => { ctx.save(); ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); points.forEach((a, i) => i ? ctx.lineTo(...a) : ctx.moveTo(...a)); ctx.stroke(); ctx.restore(); };
    const dot = (x, y, radius, color) => { ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill(); };
    const curves = [
      [p.ai, [-1.1, compact ? 4.1 : 4.45], [1.6, compact ? 3.8 : 4.3], p.data],
      [p.data, [compact ? 4.1 : 5.35, 1.2], [compact ? 4 : 5, -1.3], p.microbes],
      [p.ai, [compact ? -4.1 : -5.1, -2], [-.5, -5.1], p.microbes]
    ];
    const bezier = (c, t) => { const u = 1 - t; return project(u * u * u * c[0][0] + 3 * u * u * t * c[1][0] + 3 * u * t * t * c[2][0] + t * t * t * c[3][0], u * u * u * c[0][1] + 3 * u * u * t * c[1][1] + 3 * u * t * t * c[2][1] + t * t * t * c[3][1], -1.3); };
    curves.forEach((curve, i) => { path(Array.from({ length: 81 }, (_, j) => bezier(curve, j / 80)), [(window.WX_VISUAL_PALETTE?.css('#8eb5c6')||'#8eb5c6'), (window.WX_VISUAL_PALETTE?.css('#b8aacb')||'#b8aacb'), (window.WX_VISUAL_PALETTE?.css('#88bdb5')||'#88bdb5')][i], .65, i === 2 ? .22 : .32); for (let j = 0; j < 2; j++) { const q = (t * [.048, .06, .037][i] + j * .5) % 1, a = bezier(curve, q); dot(a[0], a[1], Math.max(.65, scale * .035), (window.WX_VISUAL_PALETTE?.css('#9dbfc9')||'#9dbfc9')); } });
    TOPICS.forEach(topic => {
      const a = p[topic], [x, y] = project(a[0], a[1] + Math.sin(t * .26 + TOPICS.indexOf(topic) * 1.7) * .075, a[2]), active = selected === topic ? 1 : 0, size = scale * a[3] * (1 + active * .085);
      ctx.save(); ctx.translate(x, y); ctx.scale(size, size);
      const orientation = multiply(options.orientations?.scene || identity, options.orientations?.[topic] || identity);
      const axisX = turn(1, 0, 0, orientation), axisY = turn(0, 1, 0, orientation);
      ctx.transform(axisX[0], -axisX[1], -axisY[0], axisY[1], 0, 0);
      if (active) { const glow = ctx.createRadialGradient(0, 0, .2, 0, 0, 1.7); glow.addColorStop(0, topic === 'microbes' ? '#c0e2d755' : '#c6cfed66'); glow.addColorStop(1, '#e2eff000'); ctx.fillStyle = glow; ctx.fillRect(-1.7, -1.7, 3.4, 3.4); }
      if (topic === 'ai') {
        ctx.rotate(-.15 + Math.sin(t * .1) * .04);
        for (let i = 2; i >= 0; i--) {
          const offset = (i - 1) * (.38 + active * .1); ctx.save(); ctx.translate(offset, -offset * .55); ctx.rotate((i - 1) * .1); ctx.transform(1, -.14, .16, .92, 0, 0);
          const g = ctx.createLinearGradient(-.8, -.7, .8, .7); g.addColorStop(0, [(window.WX_VISUAL_PALETTE?.css('#c8e5e9')||'#c8e5e9'), (window.WX_VISUAL_PALETTE?.css('#d1d8ec')||'#d1d8ec'), (window.WX_VISUAL_PALETTE?.css('#ddcfe8')||'#ddcfe8')][i]); g.addColorStop(1, [(window.WX_VISUAL_PALETTE?.css('#8eb9cc')||'#8eb9cc'), (window.WX_VISUAL_PALETTE?.css('#99a5cf')||'#99a5cf'), (window.WX_VISUAL_PALETTE?.css('#b2a0ce')||'#b2a0ce')][i]);
          ctx.globalAlpha = .83; ctx.fillStyle = g; ctx.strokeStyle = (window.WX_VISUAL_PALETTE?.css('#b6bfd7')||'#b6bfd7'); ctx.lineWidth = .025; ctx.beginPath(); ctx.roundRect(-.85, -.775, 1.7, 1.55, .16); ctx.fill(); ctx.stroke(); ctx.globalAlpha = 1;
          for (let j = 0; j < 9; j++) { const wave = Math.max(0, Math.cos(t * 1.2 - j * .7 - i * .9)) ** 5; ctx.fillStyle = j % 3 ? (window.WX_VISUAL_PALETTE?.css('#849fc6')||'#849fc6') : (window.WX_VISUAL_PALETTE?.css('#a9d9d7')||'#a9d9d7'); ctx.globalAlpha = .55 + wave * .4; ctx.beginPath(); ctx.roundRect((j % 3 - 1) * .43 - .11, (Math.floor(j / 3) - 1) * .41 - .11, .22, .22, .04); ctx.fill(); ctx.globalAlpha = 1; } ctx.restore();
        }
        for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + .2, x = Math.cos(a) * 1.4, y = Math.sin(a) * 1.28; path([[x, y], [Math.sign(x) * .7, Math.sign(y) * .45]], (window.WX_VISUAL_PALETTE?.css('#95b4ce')||'#95b4ce'), .018, .5); dot(x, y, i % 2 ? .09 : .13, i % 2 ? (window.WX_VISUAL_PALETTE?.css('#a7b3d5')||'#a7b3d5') : (window.WX_VISUAL_PALETTE?.css('#83c1c8')||'#83c1c8')); }
        [[-1.08, .77], [1.08, -.77]].forEach(([x, y], i) => { ctx.save(); ctx.translate(x, y); ctx.rotate(i ? .2 : -.2); ctx.fillStyle = i ? (window.WX_VISUAL_PALETTE?.css('#c6bddb')||'#c6bddb') : (window.WX_VISUAL_PALETTE?.css('#a0d1d4')||'#a0d1d4'); ctx.beginPath(); ctx.roundRect(-.31, -.15, .62, .3, .075); ctx.fill(); for (let j = 0; j < 3; j++) path([[(j - 1) * .1, -.05], [(j - 1) * .1, .05]], (window.WX_VISUAL_PALETTE?.css('#e9f4f2')||'#e9f4f2'), .025); ctx.restore(); });
      } else if (topic === 'microbes') {
        ctx.rotate(Math.sin(t * .11) * .055);
        const rod = (x, y, width, height, rotation, jade) => { ctx.save(); ctx.translate(x * (1 + active * .12), y); ctx.rotate(rotation); const g = ctx.createLinearGradient(-width / 2, 0, width / 2, 0); g.addColorStop(0, jade ? (window.WX_VISUAL_PALETTE?.css('#64a99e')||'#64a99e') : (window.WX_VISUAL_PALETTE?.css('#bd897d')||'#bd897d')); g.addColorStop(.33, jade ? (window.WX_VISUAL_PALETTE?.css('#b7ded0')||'#b7ded0') : (window.WX_VISUAL_PALETTE?.css('#efd0bb')||'#efd0bb')); g.addColorStop(1, jade ? (window.WX_VISUAL_PALETTE?.css('#6cb6a8')||'#6cb6a8') : (window.WX_VISUAL_PALETTE?.css('#d79f8c')||'#d79f8c')); ctx.fillStyle = g; ctx.strokeStyle = jade ? (window.WX_VISUAL_PALETTE?.css('#8acabc')||'#8acabc') : (window.WX_VISUAL_PALETTE?.css('#e5b8a1')||'#e5b8a1'); ctx.lineWidth = .025; ctx.beginPath(); ctx.roundRect(-width / 2, -height / 2, width, height, width / 2); ctx.fill(); ctx.stroke(); path([[-width * .18, -height * .31], [-width * .18, height * .31]], jade ? (window.WX_VISUAL_PALETTE?.css('#e4f7e8')||'#e4f7e8') : (window.WX_VISUAL_PALETTE?.css('#fff1e0')||'#fff1e0'), .018, .6); if (jade) { const end = height / 2; ctx.strokeStyle = (window.WX_VISUAL_PALETTE?.css('#72b4a6')||'#72b4a6'); ctx.lineWidth = .022; ctx.beginPath(); ctx.moveTo(0, end); ctx.bezierCurveTo(.1, end + .2, .45, end + .3, .29, end + .52); ctx.bezierCurveTo(.13, end + .73, -.22, end + .66, -.27, end + .95); ctx.stroke(); [-.32, .28].forEach((yy, i) => [-1, 1].forEach(side => path([[side * .29, yy], [side * .44, yy + (i ? .035 : -.045)], [side * .56, yy + (i ? .1 : -.08)]], (window.WX_VISUAL_PALETTE?.css('#77b7aa')||'#77b7aa'), .017, .7))); } ctx.restore(); };
        rod(-.16, -.05 + Math.sin(t * .5) * .055, .62, 1.72, .57 + Math.sin(t * .26) * .08, true);
        rod(.8, .7 + Math.sin(t * .5 + 2) * .055, .46, 1.13, -.58 + Math.sin(t * .26 + 1) * .08, false);
        [[-.82, .75, .24], [-.98, .36, .23], [-.88, -.05, .22], [.7, -.84, .23], [1, -.56, .21]].forEach(([x, y, r], i) => { const g = ctx.createRadialGradient(x - r * .25, y - r * .35, .01, x, y, r); g.addColorStop(0, i > 2 ? (window.WX_VISUAL_PALETTE?.css('#f0d5c7')||'#f0d5c7') : (window.WX_VISUAL_PALETTE?.css('#eee0c6')||'#eee0c6')); g.addColorStop(1, i > 2 ? (window.WX_VISUAL_PALETTE?.css('#ce9f91')||'#ce9f91') : (window.WX_VISUAL_PALETTE?.css('#c2ac88')||'#c2ac88')); dot(x, y, r, g); });
      } else {
        ctx.rotate(.12 + t * .045);
        const point = a => [(2 + Math.cos(3 * a)) * Math.cos(2 * a) * .28, (2 + Math.cos(3 * a)) * Math.sin(2 * a) * .28];
        const g = ctx.createLinearGradient(-.9, -.7, .9, .7); g.addColorStop(0, (window.WX_VISUAL_PALETTE?.css('#79b7bc')||'#79b7bc')); g.addColorStop(.5, (window.WX_VISUAL_PALETTE?.css('#9a9ecb')||'#9a9ecb')); g.addColorStop(1, (window.WX_VISUAL_PALETTE?.css('#c2a4cc')||'#c2a4cc'));
        path(Array.from({ length: 221 }, (_, i) => point(i / 220 * Math.PI * 2)), g, .18, 1); path(Array.from({ length: 221 }, (_, i) => { const p = point(i / 220 * Math.PI * 2); return [p[0] - .026, p[1] - .025]; }), (window.WX_VISUAL_PALETTE?.css('#d7e8eb')||'#d7e8eb'), .027, .65);
        const q = point((t * .085 % 1) * Math.PI * 2); dot(q[0], q[1], .065, (window.WX_VISUAL_PALETTE?.css('#e9f9ee')||'#e9f9ee'));
      }
      ctx.restore();
    });
  }
  function hitTestFallback(x, y, w, h, options = {}) {
    const { scale, p, project } = fallbackGeometry(w, h, options);
    let best = null, distance = Infinity;
    TOPICS.forEach(topic => { const a = p[topic], center = project(a[0], a[1], a[2]), radius = (topic === 'data' ? 1.05 : 1.65) * a[3] * scale; const d = Math.hypot(x - center[0], y - center[1]) / radius; if (d < 1 && d < distance) { best = topic; distance = d; } }); return best;
  }
  function getFallbackTargets(w, h, options = {}) {
    const { p, project } = fallbackGeometry(w, h, options);
    return TOPICS.map(topic => { const point = project(p[topic][0], p[topic][1], p[topic][2]); return { topic, x: point[0], y: point[1], visible: point[0] >= 0 && point[0] <= w && point[1] >= 0 && point[1] <= h }; });
  }
  window.WX_HERO_UNIVERSE = { create, drawFallback, hitTestFallback, getFallbackTargets, version: 10 };
})();

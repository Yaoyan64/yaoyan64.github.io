(() => {
  'use strict';
  const root = document.getElementById('pairing-game');
  if (!root) return;
  const COPY = {
    zh: { title:'补全互补链',progress:'{n} / 6',board:'DNA 碱基配对挑战',template:'模板链，5 撇到 3 撇',complement:'互补链，3 撇到 5 撇',position:'第 {n} 位，模板碱基 {base}，待配对',solved:'第 {n} 位，已配对 {base}',choose:'选择碱基 {base}',initial:'为高亮位置选一个碱基，补全与模板互补的 DNA 链。',correct:'配对成功。继续寻找下一对。',wrong:'这对还不匹配，再试一次。',complete:'双链已补全！两条链反向平行，A 与 T、C 与 G 各有默契。',keyboard:'也可按 A / T / C / G',next:'换一组 ↗',again:'再探索一组 ↗',art:'配对示意',status:'配对进度',selected:'正在选择第 {n} 位。' },
    en: { title:'Complete the strand',progress:'{n} / 6',board:'DNA base-pairing challenge',template:'Template strand, 5 prime to 3 prime',complement:'Complementary strand, 3 prime to 5 prime',position:'Position {n}, template base {base}, waiting for a match',solved:'Position {n}, paired with {base}',choose:'Choose base {base}',initial:'Choose a base for the highlighted position to complete the complementary DNA strand.',correct:'A match. Keep going to the next pair.',wrong:'Not a match yet. Give it another try.',complete:'Double strand complete! The strands run in opposite directions: A pairs with T, and C with G.',keyboard:'Or press A / T / C / G',next:'Try another ↗',again:'Explore another ↗',art:'Base-pairing schematic',status:'Pairing progress',selected:'Selecting position {n}.' }
  };
  const complement = { A:'T', T:'A', C:'G', G:'C' };
  const hydrogenBondCount = base => base==='A'||base==='T' ? 2 : 3;
  const sequences = ['ATGCCA','CGTATG','GACCTA','TGCAGT','GTCACA','ACTGGT','CACGTA','TGACCG'];
  const colors = { A:0x38a89a,T:0x627ed4,C:0xc287a2,G:0x9680d4 };
  const state = { index:Math.floor(Math.random()*sequences.length),solved:Array(6).fill(null),selected:0,message:'initial',round:0 };
  let feedbackTimer,celebrationTimer,visual=null;
  const lang = () => window.WX_I18N?.getLang() === 'en' || document.documentElement.lang === 'en' ? 'en' : 'zh';
  const tr = (key,vars={}) => (COPY[lang()][key]||key).replace(/\{(\w+)\}/g,(_,k)=>vars[k]??'');
  const count = () => state.solved.filter(Boolean).length;
  const sequence = () => sequences[state.index];
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.motion === 'paused';

  root.innerHTML = `<div class="pairing-shell"><div class="pairing-play"><div class="pairing-topline"><h3 class="pairing-title"></h3><span class="pairing-progress" role="status"></span></div><div class="pairing-meter" role="progressbar" aria-valuemin="0" aria-valuemax="6"><span></span></div><div class="pairing-sequence pairing-template" role="group"></div><div class="pairing-bonds" aria-hidden="true"></div><div class="pairing-sequence pairing-complement" role="group"></div><p class="pairing-rule"><span>A <i>—</i> T</span><span>C <i>—</i> G</span></p><p class="pairing-feedback" aria-live="polite" aria-atomic="true"></p><div class="pairing-choices" role="group">${['A','T','C','G'].map(b=>`<button type="button" class="pairing-choice" data-base="${b}">${b}</button>`).join('')}</div><div class="pairing-actions"><span class="pairing-keyboard"></span><button type="button" class="pairing-next"></button></div></div><div class="pairing-art"><canvas class="pairing-canvas" aria-hidden="true"></canvas><p class="pairing-art-label"></p></div><div class="pairing-celebration" aria-hidden="true"></div></div>`;
  const q = s => root.querySelector(s);
  const qa = s => [...root.querySelectorAll(s)];
  function render() {
    const restoreSlotFocus=document.activeElement?.classList.contains('pairing-slot');
    const n=count(),done=n===6;
    root.dataset.gameState=done?'complete':'playing';root.dataset.progress=String(n);
    root.setAttribute('aria-label',tr('board'));
    q('.pairing-title').textContent=tr('title');
    q('.pairing-progress').textContent=tr('progress',{n});
    q('.pairing-meter').setAttribute('aria-valuenow',String(n));q('.pairing-meter').setAttribute('aria-label',tr('status'));q('.pairing-meter>span').style.width=`${n/6*100}%`;
    q('.pairing-template').setAttribute('aria-label',tr('template'));q('.pairing-complement').setAttribute('aria-label',tr('complement'));
    q('.pairing-template').innerHTML=`<span class="pairing-end">5′</span>${[...sequence()].map(b=>`<span class="pairing-base">${b}</span>`).join('')}<span class="pairing-end">3′</span>`;
    q('.pairing-bonds').innerHTML=`<i></i>${state.solved.map(b=>b?`<span class="bond-solved" data-bond-count="${hydrogenBondCount(b)}">${'<i></i>'.repeat(hydrogenBondCount(b))}</span>`:'<span class="bond-pending"><i></i></span>').join('')}<i></i>`;
    q('.pairing-complement').innerHTML=`<span class="pairing-end">3′</span>${state.solved.map((b,i)=>`<button type="button" class="pairing-slot${b?' is-solved':''}" data-slot="${i}" aria-pressed="${!done&&i===state.selected}" aria-label="${tr(b?'solved':'position',{n:i+1,base:b||sequence()[i]})}"${b?' aria-disabled="true"':''}>${b||'·'}</button>`).join('')}<span class="pairing-end">5′</span>`;
    q('.pairing-feedback').textContent=tr(done?'complete':state.message,state.message==='selected'?{n:state.selected+1}:{});q('.pairing-feedback').classList.toggle('is-complete',done);
    qa('.pairing-choice').forEach(b=>{b.setAttribute('aria-label',tr('choose',{base:b.dataset.base}));b.disabled=done;});
    q('.pairing-choices').setAttribute('aria-label',tr('board'));
    q('.pairing-keyboard').textContent=tr('keyboard');q('.pairing-next').textContent=tr(done?'again':'next');q('.pairing-art-label').textContent=tr('art');
    visual?.update();
    if(restoreSlotFocus){(done?q('.pairing-next'):q(`[data-slot="${state.selected}"]`))?.focus({preventScroll:true});}
  }
  function bloom() {
    if(reduced()) return;
    const holder=q('.pairing-celebration');clearTimeout(celebrationTimer);
    holder.innerHTML=Array.from({length:28},(_,i)=>{const a=i/28*Math.PI*2,r=70+Math.random()*160,c=['#5aaac2','#5bbe9a','#9a8bd7','#dea6ad'][i%4];return `<i class="pairing-spark" style="--spark-x:${Math.cos(a)*r}px;--spark-y:${Math.sin(a)*r}px;--spark-color:${c};--spark-delay:${i%4*.045}s"></i>`;}).join('');
    celebrationTimer=setTimeout(()=>{holder.innerHTML='';},1600);
  }
  function answer(base) {
    if(count()===6 || !Object.hasOwn(complement,base))return;
    clearTimeout(feedbackTimer);
    const slot=state.selected;
    if(state.solved[slot])return;
    if(base===complement[sequence()[slot]]){
      state.solved[slot]=base;state.message='correct';
      const next=state.solved.findIndex((x,i)=>!x&&i>slot);state.selected=next>=0?next:state.solved.findIndex(x=>!x);
      render();if(count()===6)bloom();
    }else{
      state.message='wrong';render();const el=q(`[data-slot="${slot}"]`);el?.classList.add('is-wrong');feedbackTimer=setTimeout(()=>el?.classList.remove('is-wrong'),380);
    }
  }
  root.addEventListener('click',event=>{
    const choice=event.target.closest('.pairing-choice');if(choice){answer(choice.dataset.base);return;}
    const slot=event.target.closest('.pairing-slot');if(slot){const i=Number(slot.dataset.slot);if(state.solved[i])return;state.selected=i;state.message='selected';render();q(`[data-slot="${i}"]`)?.focus({preventScroll:true});return;}
    if(event.target.closest('.pairing-next')){
      state.index=(state.index+1+Math.floor(Math.random()*(sequences.length-1)))%sequences.length;state.solved=Array(6).fill(null);state.selected=0;state.message='initial';state.round++;
      clearTimeout(feedbackTimer);clearTimeout(celebrationTimer);q('.pairing-celebration').innerHTML='';render();
    }
  });
  root.addEventListener('keydown',event=>{
    if(event.altKey||event.metaKey||event.ctrlKey||event.repeat)return;
    const base=event.key.toUpperCase();
    if(Object.hasOwn(complement,base)&&event.key.length===1){event.preventDefault();answer(base);return;}
    if(event.target.matches('.pairing-slot')&&['ArrowLeft','ArrowRight'].includes(event.key)){
      event.preventDefault();const choices=state.solved.map((b,i)=>!b?i:-1).filter(i=>i>=0);if(!choices.length)return;
      const index=choices.indexOf(state.selected),dir=event.key==='ArrowLeft'?-1:1;state.selected=choices[(index+dir+choices.length)%choices.length];state.message='selected';render();q(`[data-slot="${state.selected}"]`)?.focus({preventScroll:true});
    }
  });
  window.addEventListener('languagechange',render);
  render();

  function setupVisual() {
    let canvas=q('.pairing-canvas');
    let visible=false,frame=0,last=0,dirty=true,elapsed=0,resize=()=>{};
    const folded=root.closest('details');
    const isOpen=()=>!folded||folded.open;
    const inView=()=>{const r=canvas.getBoundingClientRect();return isOpen()&&r.width>0&&r.height>0&&r.bottom>-80&&r.top<innerHeight+80;};
    const io='IntersectionObserver' in window?new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;dirty=true;},{rootMargin:'80px'}):null;
    io?.observe(canvas);
    const wake=()=>{dirty=true;last=0;resize();visible=inView();};
    folded?.addEventListener('toggle',wake);
    new MutationObserver(wake).observe(document.documentElement,{attributes:true,attributeFilter:['data-motion']});
    new ResizeObserver(wake).observe(root);
    window.addEventListener('resize',wake);
    window.addEventListener('languagechange',()=>{dirty=true;});
    document.addEventListener('visibilitychange',()=>{last=0;dirty=true;});
    const T=window.THREE;
    if(T){
      let renderer;
      try{renderer=new T.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});}catch{}
      if(renderer){
        renderer.setClearColor(0x000000,0);renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));canvas.dataset.renderer='webgl';canvas.dataset.frame='0';
        renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.07;
        const scene=new T.Scene(),camera=new T.PerspectiveCamera(36,1,.1,100);camera.position.set(0,.15,13.1);camera.lookAt(0,0,0);
        scene.add(new T.HemisphereLight(0xffffff,0x8caec5,2));
        const key=new T.DirectionalLight(0xffffff,2.9);key.position.set(-4,6,8);scene.add(key);
        const rim=new T.DirectionalLight(0xb6c8ff,2.5);rim.position.set(5,-2,-4);scene.add(rim);
        const fill=new T.DirectionalLight(0xc3fff0,1.3);fill.position.set(-5,-3,4);scene.add(fill);
        const group=new T.Group();scene.add(group);group.rotation.z=-.17;
        const materials={},pieces=[],links=[],yStep=1.08,twist=.59,radius=1.65;
        const vec=(x,y,z)=>new T.Vector3(x,y,z);
        const point=(y,side,offset=0)=>{const theta=y/yStep*twist+offset;return vec(side*radius*Math.cos(theta),y,-side*radius*Math.sin(theta));};
        // Right-handed double helix. This is a pairing diagram, not atomistic
        // geometry: plate labels and the antiparallel ends carry the semantics.
        function ribbon(side){
          const positions=[],normals=[],rgb=[],indices=[],a=new T.Color(side<0?0x35bba9:0x7985dc),b=new T.Color(side<0?0x8bcbdc:0xb496df),steps=180;
          for(let i=0;i<=steps;i++){
            const y=-3.36+i/steps*6.72;
            for(let edge=0;edge<2;edge++){
              const theta=y/yStep*twist+(edge?1:-1)*.105;
              positions.push(side*radius*Math.cos(theta),y,-side*radius*Math.sin(theta));
              normals.push(side*Math.cos(theta),0,-side*Math.sin(theta));
              const c=a.clone().lerp(b,.25+.55*Math.sin(i/steps*Math.PI));rgb.push(c.r,c.g,c.b);
            }
            if(i<steps){const j=i*2;indices.push(j,j+1,j+2,j+1,j+3,j+2);}
          }
          const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('color',new T.Float32BufferAttribute(rgb,3));g.setIndex(indices);g.computeVertexNormals();
          const m=new T.MeshPhysicalMaterial({vertexColors:true,side:T.DoubleSide,roughness:.19,metalness:.24,clearcoat:1,clearcoatRoughness:.12,iridescence:.85,iridescenceIOR:1.4,iridescenceThicknessRange:[180,650]});
          group.add(new T.Mesh(g,m));
          for(const edge of [-.105,.105]){
            const pts=Array.from({length:121},(_,i)=>point(-3.36+i/120*6.72,side,edge));
            const curve=new T.CatmullRomCurve3(pts);const rail=new T.Mesh(new T.TubeGeometry(curve,180,.021,6,false),new T.MeshStandardMaterial({color:side<0?0x83e7d2:0xc1c8ff,emissive:side<0?0x42aa9d:0x656bc5,emissiveIntensity:.16,metalness:.4,roughness:.2}));group.add(rail);
          }
        }
        ribbon(-1);ribbon(1);
        function roundedPlate(){
          const w=.98,h=.48,r=.14,shape=new T.Shape();shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
          const geo=new T.ExtrudeGeometry(shape,{depth:.09,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.035,bevelThickness:.035,curveSegments:7});geo.translate(0,0,-.045);return geo;
        }
        const baseGeo=roundedPlate();
        for(const b of ['A','T','C','G'])materials[b]=new T.MeshPhysicalMaterial({color:colors[b],roughness:.22,metalness:.12,clearcoat:1,transparent:true,opacity:.85,side:T.DoubleSide});
        const pending=new T.MeshPhysicalMaterial({color:0xecf2f9,roughness:.2,transparent:true,opacity:.57,metalness:.06,clearcoat:1,side:T.DoubleSide});
        function label(text,color='#fff',size=.40){const c=document.createElement('canvas');c.width=128;c.height=128;const ctx=c.getContext('2d');ctx.font='76px "Times New Roman"';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=color;ctx.fillText(text,64,65);const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;const s=new T.Sprite(new T.SpriteMaterial({map:tex,transparent:true,depthTest:false}));s.scale.set(size,size,1);return s;}
        function setText(sprite,text){const ctx=sprite.material.map.image.getContext('2d');ctx.clearRect(0,0,128,128);ctx.fillStyle=text==='?'?'#6f879e':'#ffffff';ctx.fillText(text,64,65);sprite.material.map.needsUpdate=true;}
        for(let i=0;i<6;i++){
          const y=(2.5-i)*yStep,row=new T.Group();row.position.y=y;row.rotation.y=y/yStep*twist;group.add(row);
          const left=new T.Mesh(baseGeo,materials[sequence()[i]]),right=new T.Mesh(baseGeo,pending);left.position.x=-.75;right.position.x=.75;row.add(left,right);
          // Fine stems connect nucleotide plates to their respective backbone.
          for(const side of [-1,1]){
            const stem=new T.Mesh(new T.CylinderGeometry(.027,.027,.39,8),new T.MeshStandardMaterial({color:side<0?0x6bbfb3:0x9ca9d5,roughness:.3}));stem.rotation.z=Math.PI/2;stem.position.x=side*1.44;row.add(stem);
          }
          const lText=label(sequence()[i]),rText=label('?','#6f879e');lText.position.set(-.75,0,.13);rText.position.set(.75,0,.13);row.add(lText,rText);
          const pairLinks=[];
          for(let j=0;j<3;j++){
            const geometry=new T.BufferGeometry().setFromPoints([vec(-.23,0,0),vec(.23,0,0)]),line=new T.Line(geometry,new T.LineDashedMaterial({color:0x3c999f,transparent:true,opacity:.67,dashSize:.055,gapSize:.035}));line.computeLineDistances();row.add(line);pairLinks.push(line);
          }
          links.push(pairLinks);pieces.push({left,right,lText,rText,row});
        }
        for(const [side,y,text] of [[-1,3.65,'5′'],[-1,-3.65,'3′'],[1,3.65,'3′'],[1,-3.65,'5′']]){
          const endpoint=label(text,'#456d80',.39);endpoint.position.copy(point(Math.sign(y)*3.36,side)).add(vec(0,Math.sign(y)*.34,0));group.add(endpoint);
        }
        const specks=[];
        for(let i=0;i<28;i++){
          const a=i/28*Math.PI*2,y=Math.sin(i*1.67)*4.1,mesh=new T.Mesh(new T.SphereGeometry(i%4?.019:.032,6,5),new T.MeshBasicMaterial({color:i%2?0x82b8cb:0xaba7dc,transparent:true,opacity:.35}));mesh.position.set(Math.cos(a)*2.6,y,Math.sin(a)*2.2-1);scene.add(mesh);specks.push(mesh);
        }
        resize=()=>{const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.z=w/h<.9?15.6:13.1;camera.updateProjectionMatrix();dirty=true;};
        new ResizeObserver(resize).observe(canvas);resize();
        function update(){pieces.forEach((p,i)=>{p.left.material=materials[sequence()[i]];p.right.material=state.solved[i]?materials[state.solved[i]]:pending;setText(p.lText,sequence()[i]);setText(p.rText,state.solved[i]||'?');const n=state.solved[i]?hydrogenBondCount(state.solved[i]):1;links[i].forEach((line,j)=>{line.visible=j<n;line.position.y=(j-(n-1)/2)*.10;line.material.opacity=state.solved[i] ? .8 : .20;});});dirty=true;}
        let lost=false;canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;canvas.dataset.renderer='context-lost';});canvas.addEventListener('webglcontextrestored',()=>{lost=false;canvas.dataset.renderer='webgl';dirty=true;});
        function tick(time){
          requestAnimationFrame(tick);if(lost||document.hidden||!isOpen()||!canvas.clientWidth||!canvas.clientHeight)return;
          if(!(visible||inView())&&frame>0)return;
          const paused=reduced();if(paused&&!dirty)return;if(time-last<40&&!dirty)return;
          const dt=last?Math.min((time-last)/1000,.06):0;last=time;if(!paused)elapsed+=dt;
          group.rotation.y=.23+Math.sin(elapsed*.23)*.42;group.rotation.x=Math.sin(elapsed*.17)*.055;
          specks.forEach((p,i)=>p.position.y+=!paused?Math.sin(elapsed*.25+i)*dt*.025:0);
          renderer.render(scene,camera);canvas.dataset.frame=String(++frame);dirty=false;
        }
        requestAnimationFrame(tick);return{update};
      }
    }
    // Obtain a fresh canvas when a WebGL attempt has reserved the first one.
    let ctx;try{ctx=canvas.getContext('2d');}catch{}
    if(!ctx){const fresh=canvas.cloneNode(false);canvas.replaceWith(fresh);io?.unobserve(canvas);canvas=fresh;io?.observe(canvas);ctx=canvas.getContext('2d');}
    if(!ctx)return{update(){}};canvas.dataset.renderer='canvas2d';canvas.dataset.frame='0';
    const hex=b=>`#${colors[b].toString(16).padStart(6,'0')}`;
    resize=()=>{const w=canvas.clientWidth,h=canvas.clientHeight,d=Math.min(devicePixelRatio||1,1.5);if(w&&h){canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);}dirty=true;};
    new ResizeObserver(resize).observe(canvas);resize();
    function draw(){
      const w=canvas.width,h=canvas.height;if(!w||!h)return;ctx.clearRect(0,0,w,h);const s=Math.min(w/330,h/400),angle=.23+Math.sin(elapsed*.23)*.42;
      const point=(y,side)=>{const theta=-y/54*.59+angle;return {x:side*81*Math.cos(theta),y,z:-side*81*Math.sin(theta)};};
      ctx.save();ctx.translate(w/2,h/2);ctx.rotate(-.17);ctx.scale(s,s);
      const items=[];
      for(const side of [-1,1])for(let i=0;i<110;i++){const y=-168+i/110*336,a=point(y,side),b=point(y+336/110,side);items.push({z:(a.z+b.z)/2,draw(){const g=ctx.createLinearGradient(a.x,a.y,b.x,b.y);g.addColorStop(0,side<0?'#58bdad':'#9d9be1');g.addColorStop(1,side<0?'#94d6d3':'#c0b8ed');ctx.strokeStyle=g;ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();ctx.strokeStyle=side<0?'#c8f9eb':'#e1e4ff';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x-2,a.y);ctx.lineTo(b.x-2,b.y);ctx.stroke();}});}
      for(let i=0;i<6;i++){
        const y=(i-2.5)*54,a=point(y,-1),b=point(y,1),n=state.solved[i]?hydrogenBondCount(state.solved[i]):1;
        items.push({z:0,draw(){ctx.strokeStyle=state.solved[i]?'#62a7ac':'#becfdc';ctx.lineWidth=1.3;ctx.setLineDash([3,3]);for(let j=0;j<n;j++){const yy=y+(j-(n-1)/2)*4;ctx.beginPath();ctx.moveTo(a.x*.18,yy);ctx.lineTo(b.x*.18,yy);ctx.stroke();}ctx.setLineDash([]);}});
        for(const [side,pp] of [[-1,a],[1,b]]){const base=side<0?sequence()[i]:state.solved[i];items.push({z:pp.z,draw(){const width=Math.max(15,Math.abs(pp.x)*.52),x=pp.x*.56;ctx.fillStyle=base?hex(base):'#edf3fa';ctx.globalAlpha=base ? .92 : .8;ctx.strokeStyle=base?'#b7d9de':'#c5d6e1';ctx.lineWidth=.8;ctx.beginPath();ctx.roundRect(x-width/2,y-12,width,24,6);ctx.fill();ctx.stroke();ctx.globalAlpha=1;ctx.fillStyle=base?'#fff':'#7890a2';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='17px "Times New Roman"';ctx.fillText(base||'?',x,y+.6);}});}
      }
      items.sort((a,b)=>a.z-b.z).forEach(item=>item.draw());
      ctx.fillStyle='#4e7687';ctx.font='14px "Times New Roman"';ctx.textAlign='center';for(const [side,y,text] of [[-1,-185,'5′'],[-1,185,'3′'],[1,-185,'3′'],[1,185,'5′']]){const p=point(Math.sign(y)*168,side);ctx.fillText(text,p.x+Math.sign(p.x||side)*10,y);}
      ctx.restore();canvas.dataset.frame=String(++frame);
    }
    function tick(time){requestAnimationFrame(tick);if(document.hidden||!isOpen()||!canvas.clientWidth||!canvas.clientHeight)return;if(!(visible||inView())&&frame>0)return;const paused=reduced();if(paused&&!dirty)return;if(time-last<50&&!dirty)return;const dt=last?Math.min((time-last)/1000,.06):0;last=time;if(!paused)elapsed+=dt;draw();dirty=false;}
    requestAnimationFrame(tick);return{update(){dirty=true;}};
  }
  visual=setupVisual();visual.update();
  // The public hook intentionally exposes progress, never the answer sequence.
  window.WX_PAIRING = { getState:()=>({progress:count(),complete:count()===6,round:state.round}),reset:()=>q('.pairing-next').click() };
})();

/* Microbial-community illustration, not a measured microbiome or a species classifier.
 * Shapes are generic bacterial rods/cocci; colors never encode beneficial vs pathogenic taxa.
 * Scope and sources: microbiome-notes.md. All rendering stays on this device.
 */
(() => {
  'use strict';
  const host=document.getElementById('microbiome-module');if(!host)return;
  const COPY={
    zh:{canvas:'可旋转的微生物群落示意，拖动或用方向键调整视角',caption:'微生物研究示意',probioticCaption:'菌株 · 代谢信号 · 宿主',pathogenicCaption:'菌体与宿主屏障的界面',communityCaption:'群落间的代谢交换',reset:'复位 ↺',group:'探索微生物研究主题',probiotic:'益生菌研究',pathogenic:'致病机制',community:'群落互作',probioticText:'从具体菌株出发，关注代谢产物与宿主免疫；益生作用需要对应菌株与情境的证据。',pathogenicText:'关注毒力因素、肠道屏障与宿主环境，探索致病菌及机会致病菌的作用机制。',communityText:'关注微生物之间的代谢联系，以及菌群、宿主和环境共同塑造的生态关系。'},
    en:{canvas:'Rotatable microbial community schematic. Drag or use arrow keys to change the view.',caption:'Microbiome research schematic',probioticCaption:'Strain · metabolites · host',pathogenicCaption:'The microbe–barrier interface',communityCaption:'Exchange across communities',reset:'Reset ↺',group:'Explore microbiome research themes',probiotic:'Probiotic research',pathogenic:'Pathogenic mechanisms',community:'Community interactions',probioticText:'Starting with specific strains, explore metabolites and host immunity. Probiotic effects require evidence for the relevant strain and context.',pathogenicText:'Explore virulence factors, the gut barrier and host conditions in the mechanisms of pathogens and opportunistic pathobionts.',communityText:'Explore metabolic relationships among microbes, alongside the ecological connections shaped by the community, its host and its environment.'}
  };
  const lang=()=>window.WX_I18N?.getLang()==='en'||document.documentElement.lang==='en'?'en':'zh';
  const modes=['probiotic','pathogenic','community'];
  let mode='probiotic',yaw=0,pitch=0,viewYaw=0,viewPitch=0,dirty=true,clock=0,frame=0,last=0,visible=false,visual=null;
  const cyclePeriod=3;
  let autoplay=true,elapsed=0,interval=cyclePeriod,modeRevision=0;
  const weights={probiotic:1,pathogenic:0,community:0};
  const transition={elapsed:1.1,duration:1.1,from:{...weights}};
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const paused=()=>reduced.matches||document.documentElement.dataset.motion==='paused';
  host.innerHTML='<div class="microbiome-art"><canvas class="microbiome-canvas" tabindex="0"></canvas><div class="microbiome-caption"><span></span><button type="button" class="microbiome-reset"></button></div></div><div class="microbiome-tour"><span class="microbiome-step" aria-hidden="true">01 / 03</span><div class="microbiome-progress" aria-hidden="true"><span></span></div><button type="button" class="microbiome-autoplay" aria-pressed="true"></button></div><div class="microbiome-modes" role="group"><button type="button" data-microbiome-mode="probiotic" aria-pressed="true"></button><button type="button" data-microbiome-mode="pathogenic" aria-pressed="false"></button><button type="button" data-microbiome-mode="community" aria-pressed="false"></button></div><p class="microbiome-description" aria-live="off"></p>';
  let canvas=host.querySelector('canvas');
  const progress=host.querySelector('.microbiome-progress span');
  function refresh(){const copy=COPY[lang()];canvas.setAttribute('aria-label',copy[mode]+(lang()==='en'?'. ':'。')+copy.canvas);host.querySelector('.microbiome-caption span').textContent=copy[mode+'Caption'];host.querySelector('.microbiome-reset').textContent=copy.reset;host.querySelector('.microbiome-modes').setAttribute('aria-label',copy.group);host.querySelectorAll('[data-microbiome-mode]').forEach(b=>{b.textContent=copy[b.dataset.microbiomeMode];b.setAttribute('aria-pressed',String(b.dataset.microbiomeMode===mode));});host.querySelector('.microbiome-description').textContent=copy[mode+'Text'];host.querySelector('.microbiome-step').textContent='0'+(modes.indexOf(mode)+1)+' / 03';host.dataset.microbiomeMode=mode;host.dataset.modeRevision=String(modeRevision);const article=host.closest('.research-item');if(article){article.dataset.currentScene=mode;article.dataset.sceneStep=String(modes.indexOf(mode)+1);article.dataset.sceneCount='3';}refreshPlayback();dirty=true;}
  function refreshPlayback(){const stopped=paused();const button=host.querySelector('.microbiome-autoplay');button.setAttribute('aria-pressed',String(autoplay));button.disabled=stopped;button.textContent=lang()==='en'?(stopped?'Motion paused':autoplay?'Pause tour':'Resume tour'):(stopped?'动效已暂停':autoplay?'暂停轮换':'继续轮换');host.dataset.autoplay=autoplay&&!stopped?'running':'paused';}
  function setMode(value,automatic=false){if(!modes.includes(value))return;transition.from={...weights};transition.elapsed=0;mode=value;elapsed=0;interval=cyclePeriod;modeRevision++;host.querySelector('.microbiome-description').setAttribute('aria-live',automatic?'off':'polite');refresh();visual?.setMode();window.dispatchEvent(new CustomEvent('researchscenechange',{detail:{module:'microbiome',scene:mode,index:modes.indexOf(mode),count:3,automatic}}));}
  function setAutoplay(value){autoplay=!!value;elapsed=0;interval=cyclePeriod;refreshPlayback();dirty=true;}
  function holdTour(){elapsed=0;interval=cyclePeriod;dirty=true;}
  function reset(){yaw=0;pitch=0;input?.reset();holdTour();}
  host.addEventListener('click',e=>{const button=e.target.closest('button[data-microbiome-mode]');if(button)setMode(button.dataset.microbiomeMode);if(e.target.closest('.microbiome-reset'))reset();if(e.target.closest('.microbiome-autoplay')&&!paused())setAutoplay(!autoplay);});
  const cellSpecs=[
    [-1.78,1.05,.48,'rod',.8,-.52,.18],[-.30,1.7,-.40,'rod',.72,.48,-.20],[1.27,1.18,.26,'cocci',.79,.3,.2],
    [2.08,-.15,-.48,'rod',.85,.72,-.4],[.30,.12,.52,'rod',.92,-.4,.1],[-1.62,-1.08,-.18,'rod',.88,.73,.1],
    [.35,-1.55,.32,'rod',.76,-.58,-.3],[-2.38,-.12,.14,'cocci',.62,.25,0],[1.72,-1.38,.30,'cocci',.7,.4,.15],
    [-.47,-.25,-.92,'cocci',.72,-.3,.2],[-1.08,1.93,-.3,'cocci',.46,.3,.3],[2.13,.85,-.60,'cocci',.42,-.3,.15]
  ];
  const seed=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);};
  let dragging=false,input=null,paletteInfo=null;
  function wireCanvas(){input=window.WX_RESEARCH_INPUTS?.attach(canvas,'microbiome',{onChange(){dirty=true;holdTour();},onGesture(active){dragging=active;holdTour();}});}
  function webgl(){
    const T=window.THREE;if(!T)return null;
    let renderer;try{renderer=new T.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});}catch{return null;}
    renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));renderer.setClearColor(0xffffff,0);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
    const scene=new T.Scene(),camera=new T.PerspectiveCamera(36,1,.1,70);camera.position.set(0,0,13.4);
    scene.add(new T.HemisphereLight(0xffffff,0x9bbcc5,2));
    [[0xffffff,2.6,-4,6,8],[0xd5c7ef,2.1,5,1,-5],[0xc2ecde,1.05,-5,-4,5]].forEach(([color,power,x,y,z])=>{const l=new T.DirectionalLight(color,power);l.position.set(x,y,z);scene.add(l);});
    const root=new T.Group(),orbitRoot=new T.Group();scene.add(orbitRoot);orbitRoot.add(root);
    const groups={},cells=[],flows=[],orbiters=[],labels=[],decorations=[];
    const vec=(x=0,y=0,z=0)=>new T.Vector3(x,y,z);
    const colors=[0x56b9ae,0xa79acb,0x9cbad6,0xd9aaa4];
    const shared={rod:new T.CapsuleGeometry(.32,.71,8,24),coccus:new T.SphereGeometry(.4,24,18),small:new T.SphereGeometry(.055,10,8)};
    const physical=(color,extra={})=>new T.MeshPhysicalMaterial({color,roughness:.23,metalness:.1,clearcoat:.9,clearcoatRoughness:.17,transparent:true,opacity:1,...extra});
    const basic=(color,opacity=1)=>new T.MeshBasicMaterial({color,transparent:true,opacity,depthWrite:false});
    function baseMaterial(material){material.userData.baseOpacity=material.opacity;return material;}
    function add(parent,geometry,material,position=[0,0,0]){const mesh=new T.Mesh(geometry,baseMaterial(material));mesh.position.set(...position);parent.add(mesh);return mesh;}
    function curve(parent,points,color,opacity=.4,width=0){const path=new T.CatmullRomCurve3(points.map(p=>Array.isArray(p)?vec(...p):p));let obj;if(width)obj=new T.Mesh(new T.TubeGeometry(path,96,width,7,false),baseMaterial(physical(color,{opacity,depthWrite:false})));else obj=new T.Line(new T.BufferGeometry().setFromPoints(path.getPoints(80)),baseMaterial(new T.LineBasicMaterial({color,transparent:true,opacity})));parent.add(obj);return path;}
    function ring(parent,r,color,opacity=.35,position=[0,0,0],rotation=[0,0,0],thickness=.012){const mesh=add(parent,new T.TorusGeometry(r,thickness,7,100),physical(color,{opacity,depthWrite:false}),position);mesh.rotation.set(...rotation);return mesh;}
    function text(parent,zh,en,x,y,z,width=2.05){
      const c=document.createElement('canvas');c.width=640;c.height=160;const ctx=c.getContext('2d'),tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;
      const m=baseMaterial(new T.SpriteMaterial({map:tex,transparent:true,depthTest:false})),sprite=new T.Sprite(m);sprite.position.set(x,y,z);sprite.scale.set(width,width*160/640,1);parent.add(sprite);
      labels.push(()=>{ctx.clearRect(0,0,640,160);ctx.fillStyle='#486d7a';ctx.font=Math.round(192/width)+'px "Times New Roman", "Microsoft YaHei", serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(lang()==='en'?en:zh,320,80,620);tex.needsUpdate=true;});
    }
    function bacteria(parent,x,y,z,size,rotation,index,shape='rod'){
      const group=new T.Group(),color=colors[index%colors.length],geometry=shared[shape];group.position.set(x,y,z);group.scale.setScalar(size);group.rotation.set(.18,.22,rotation);parent.add(group);
      add(group,geometry,physical(color,{opacity:.64,depthWrite:false}));
      const interior=add(group,geometry,physical(color,{opacity:.29,depthWrite:false,roughness:.35}));interior.scale.set(.75,.85,.75);
      const points=[];for(let j=0;j<=45;j++){const t=j/45,a=t*Math.PI*4;points.push(vec(Math.sin(a*1.4)*.09,(t-.5)*(shape==='rod'?.96:.42),Math.cos(a)*.10));}
      curve(group,points,color,.92,.021);
      const granules=new T.InstancedMesh(shared.small,baseMaterial(physical(0xe0c39b,{opacity:.74})),shape==='rod'?12:7);const dummy=new T.Object3D();
      for(let j=0;j<granules.count;j++){const a=seed(index*31+j)*Math.PI*2,r=.1+seed(index*23+j+3)*.12;dummy.position.set(Math.cos(a)*r,(seed(index*17+j+6)-.5)*(shape==='rod'?.9:.42),Math.sin(a)*r);dummy.scale.setScalar(.5+seed(j+index)*.35);dummy.updateMatrix();granules.setMatrixAt(j,dummy.matrix);}group.add(granules);
      cells.push({group,position:vec(x,y,z),rotation,phase:index*.83,size,parent});return group;
    }
    function flow(parent,points,color,count=5,speed=.16){const path=curve(parent,points,color,.31);for(let j=0;j<count;j++){const bead=add(parent,new T.SphereGeometry(.05,12,8),basic(color,.82));flows.push({path,bead,offset:j/count,speed});}return path;}
    function halo(parent,color,r,position){
      const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d'),g=ctx.createRadialGradient(64,64,5,64,64,62);g.addColorStop(0,'rgba(255,255,255,.38)');g.addColorStop(.35,'rgba(255,255,255,.16)');g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect(0,0,128,128);const tex=new T.CanvasTexture(c);
      const s=new T.Sprite(baseMaterial(new T.SpriteMaterial({map:tex,color,transparent:true,opacity:.4,depthWrite:false})));s.position.set(...position);s.scale.setScalar(r);parent.add(s);return s;
    }
    function modeGroup(name){const g=new T.Group();g.userData.mode=name;root.add(g);groups[name]=g;return g;}

    // A strain-to-signal composition. The pearl is a visual symbol for host signalling,
    // not a measured immune cell, receptor model, or assertion of a beneficial effect.
    {
      const g=modeGroup('probiotic');halo(g,0x83d2bf,6.4,[-1.0,.1,-1.3]);
      bacteria(g,-2.08,.48,.05,.98,-.55,0);bacteria(g,-1.54,-.88,-.2,.7,.8,1);bacteria(g,-2.15,1.55,-.35,.55,.7,2,'coccus');
      const signal=new T.Group();signal.position.set(1.68,.1,0);g.add(signal);
      add(signal,new T.SphereGeometry(.69,40,28),physical(0xb6a7df,{opacity:.42,depthWrite:false,roughness:.13}));
      add(signal,new T.SphereGeometry(.38,28,20),physical(0xe9d8ef,{opacity:.66,depthWrite:false}));
      for(let j=0;j<3;j++){const r=ring(signal,.98+j*.13,[0x80beb6,0xafa1d2,0xa6bcd6][j],.58,[0,0,0],[.45+j*.58,j*.74,.3+j*.5],.018);orbiters.push({object:r,speed:.06+j*.015,axis:j%2?'y':'z'});}
      for(let j=0;j<9;j++){const a=j/9*Math.PI*2,p=add(signal,shared.small,physical(colors[j%4],{opacity:.92}),[Math.cos(a)*1.11,Math.sin(a)*1.11,Math.sin(a*2)*.24]);orbiters.push({object:p,center:vec(),radius:1.11,phase:a,speed:.1});}
      flow(g,[[-1.65,.55,.25],[-.65,1.05,.58],[.55,.8,.4],[1.1,.36,.1]],0x42b7a4,6,.13);
      flow(g,[[-1.5,-.5,.1],[-.55,-.9,.62],[.65,-.75,.45],[1.1,-.25,.1]],0xa898d1,5,.11);
      flow(g,[[-1.6,.15,-.15],[-.45,.1,.2],[.4,.18,.45],[1.2,.1,.3]],0x84b8ce,7,.15);
      for(let j=0;j<3;j++){const wave=ring(g,.4+j*.26,0x6bbfae,.23,[-.35,0,-.15],[0,1.05,0],.009);decorations.push({object:wave,phase:j*.5,type:'breath'});}
      text(g,'菌株','Strain',-1.95,-1.85,.2,1.7);text(g,'代谢信号','Metabolites',-.2,1.75,.2,1.9);text(g,'宿主信号','Host signalling',1.7,-1.85,.2,2.1);
    }

    // The host epithelium is a distinct, polarised interface. Nuclei are drawn only
    // inside the host cells, never inside the bacteria. No barrier failure is implied.
    {
      const g=modeGroup('pathogenic');halo(g,0xc9b9e8,7.1,[0,-.6,-1.35]);
      const tissue=new T.Group();tissue.position.set(0,-.72,0);g.add(tissue);
      const rounded=(w,h,r)=>{const s=new T.Shape();s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);return new T.ExtrudeGeometry(s,{depth:.34,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.045,bevelThickness:.045,curveSegments:8});};
      const cellGeo=rounded(.63,1.43,.16);
      for(let j=0;j<7;j++){
        const x=(j-3)*.7,cell=add(tissue,cellGeo,physical(j%2?0xa5c2dc:0xb9c9df,{opacity:.56,depthWrite:false,roughness:.3}),[x,0,-.12]);
        const nucleus=add(tissue,new T.SphereGeometry(.17,20,14),physical(0xaaa2c7,{opacity:.72,depthWrite:false}),[x,-.31,.22]);nucleus.scale.set(.84,1.06,.5);
        if(j<6){const junction=add(tissue,new T.BoxGeometry(.13,.07,.15),physical(0xb995a2,{opacity:.75}),[x+.35,.53,.18]);}
      }
      const villi=new T.InstancedMesh(new T.CapsuleGeometry(.027,.15,3,7),baseMaterial(physical(0x99b9bd,{opacity:.73})),35),d=new T.Object3D();
      for(let j=0;j<35;j++){const cell=Math.floor(j/5),n=j%5;d.position.set((cell-3)*.7+(n-2)*.105,.84,.11);d.rotation.set(0,0,Math.sin(j)*.04);d.updateMatrix();villi.setMatrixAt(j,d.matrix);}tissue.add(villi);
      const base=add(g,rounded(5.05,.14,.07),physical(0xb3a2ce,{opacity:.25,depthWrite:false}),[0,-1.56,-.1]);base.rotation.x=.1;
      for(let band=0;band<2;band++){const pts=[];for(let j=0;j<=70;j++){const x=-2.6+j/70*5.2;pts.push([x,.41+Math.sin(j/70*Math.PI*2.3+band*.4)*.05+band*.13,-.1+band*.13]);}const line=curve(g,pts,0xb2cbd3,.4,.022);}
      bacteria(g,-1.35,1.45,.13,.65,-.75,0);bacteria(g,.4,1.12,.38,.65,1.17,1);bacteria(g,1.8,1.54,-.05,.47,.2,2,'coccus');
      flow(g,[[.4,.83,.28],[.65,.65,.57],[.48,.48,.35],[.35,.2,.3]],0xc38e9b,4,.15);
      flow(g,[[-1.35,1.1,.2],[-1.1,.92,.55],[-.98,.58,.4],[-1.05,.25,.2]],0x92b8c4,4,.12);

      text(g,'上皮屏障','Epithelial barrier',0,-2.02,.3,2.8);
    }

    // Communities are shown as three interacting clusters, with no measured
    // abundances or inferred ecological edges encoded in the geometry.
    {
      const g=modeGroup('community');halo(g,0xb3b0de,7,[0,0,-1.3]);
      const centers=[[-1.72,-.62,0],[0,1.22,-.18],[1.72,-.62,.02]];
      centers.forEach(([x,y,z],cluster)=>{
        const c=new T.Group();c.position.set(x,y,z);g.add(c);
        ring(c,1.08,[0x70b8b0,0xa79bce,0x92b1cf][cluster],.51,[0,0,-.26],[.18,-.1+cluster*.12,0],.017);
        ring(c,1.17,[0x70b8b0,0xa79bce,0x92b1cf][cluster],.16,[0,0,-.3],[.18,-.1+cluster*.12,0],.008);
        for(let j=0;j<5;j++){const a=j/5*Math.PI*2+cluster*.5;const r=j===4?.2:.6;bacteria(c,Math.cos(a)*r,Math.sin(a)*r,.1+Math.sin(a)*.13,j===4?.41:.35,a+.2,cluster*5+j,j%2?'coccus':'rod');}
        decorations.push({object:c,phase:cluster*1.8,type:'cluster'});
      });
      for(let j=0;j<3;j++){const a=centers[j],b=centers[(j+1)%3];flow(g,[[a[0],a[1],.05],[(a[0]+b[0])*.55,(a[1]+b[1])*.55,.75],[b[0],b[1],.05]],[0x70b8b0,0xa79bce,0x92b1cf][j],7,.1+j*.015);}
      const center=add(g,new T.OctahedronGeometry(.18,1),physical(0xd3c3df,{opacity:.72}),[0,-.24,.45]);orbiters.push({object:center,speed:.2,axis:'y'});
      ring(g,3.03,0xb1adc9,.18,[0,.05,-.72],[.15,.12,0],.008);

    }
    labels.forEach(update=>update());
    function syncText(){labels.forEach(update=>update());dirty=true;}
    window.addEventListener('languagechange',syncText);
    for(const g of Object.values(groups))g.traverse(o=>{if(o.material&&!o.material.userData.baseOpacity)o.material.userData.baseOpacity=o.material.opacity;});
    let width=0,height=0,dead=false;canvas.dataset.renderer='webgl';
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();dead=true;canvas.dataset.renderer='context-lost';});canvas.addEventListener('webglcontextrestored',()=>{dead=false;canvas.dataset.renderer='webgl';dirty=true;});
    return {setMode(){dirty=true;},setTheme(){paletteInfo=window.WX_VISUAL_PALETTE?.recolor(root,T);dirty=true;},draw(time){
      if(dead)return;const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;
      if(w!==width||h!==height){width=w;height=h;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.z=w/h<1.05?14.3:12.8;camera.updateProjectionMatrix();}
      root.rotation.set(.035,Math.sin(time*.1)*.07,-.025);if(input){orbitRoot.quaternion.fromArray(input.state.quaternion);if(camera.zoom!==input.state.zoom){camera.zoom=input.state.zoom;camera.updateProjectionMatrix();}}
      Object.entries(groups).forEach(([name,g])=>{
        const weight=weights[name];g.visible=weight>.002;if(!g.visible)return;
        g.scale.setScalar((.88+weight*.12)*(name==='community'?1.06:name==='probiotic'?1.24:1.2));g.position.y=(1-weight)*.18;
        g.rotation.y=(1-weight)*(name==='pathogenic'?-.16:.16);
        g.traverse(o=>{if(o.material){o.material.opacity=(o.material.userData.baseOpacity??1)*weight;}});
      });
      cells.forEach(c=>{c.group.position.x=c.position.x+Math.sin(time*.29+c.phase)*.024;c.group.position.y=c.position.y+Math.sin(time*.37+c.phase)*.055;c.group.rotation.y=.22+Math.sin(time*.2+c.phase)*.12;c.group.rotation.z=c.rotation+Math.cos(time*.3+c.phase)*.04;});
      flows.forEach(f=>{const u=(time*f.speed+f.offset)%1;f.bead.position.copy(f.path.getPoint(u));f.bead.scale.setScalar(.35+.65*Math.pow(Math.sin(Math.PI*u),.5));});
      orbiters.forEach(o=>{if(o.center){const a=o.phase+time*o.speed;o.object.position.set(Math.cos(a)*o.radius,Math.sin(a)*o.radius,Math.sin(a*2)*.24);}else{if(o.base===undefined)o.base=o.object.rotation[o.axis];o.object.rotation[o.axis]=o.base+time*o.speed;}});
      decorations.forEach(d=>{if(d.type==='breath')d.object.scale.setScalar(1+Math.sin(time*.7+d.phase)*.045);else d.object.rotation.z=Math.sin(time*.19+d.phase)*.055;});
      renderer.render(scene,camera);canvas.dataset.frame=String(++frame);canvas.dataset.scene=mode;canvas.dataset.sceneVersion='6';canvas.dataset.sceneCurrent=modes.reduce((a,b)=>weights[a]>weights[b]?a:b);
    }};
  }

  function fallback(){
    let ctx;try{ctx=canvas.getContext('2d');}catch{}
    if(!ctx){const replacement=canvas.cloneNode(false);canvas.replaceWith(replacement);canvas=replacement;ctx=canvas.getContext('2d');}
    if(!ctx)return {setMode(){},draw(){}};
    canvas.dataset.renderer='canvas-fallback';
    const getColors=()=>[(window.WX_VISUAL_PALETTE?.css('#75beb2')||'#75beb2'),(window.WX_VISUAL_PALETTE?.css('#b0a1ce')||'#b0a1ce'),(window.WX_VISUAL_PALETTE?.css('#9dbad3')||'#9dbad3'),(window.WX_VISUAL_PALETTE?.css('#d8a8a1')||'#d8a8a1')];
    return {setMode(){dirty=true;},draw(time){const colors=getColors();
      const w=canvas.clientWidth,h=canvas.clientHeight,d=Math.min(devicePixelRatio||1,1.5);if(!w||!h)return;
      if(canvas.width!==Math.round(w*d)||canvas.height!==Math.round(h*d)){canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);}
      ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);
      const s=Math.min(w/7.2,h/6.5)*(input?.state.zoom||1),angle=Math.sin(time*.1)*.07;
      const p=(x,y,z=0)=>{const rx=x*Math.cos(angle)+z*Math.sin(angle),rz=-x*Math.sin(angle)+z*Math.cos(angle);const q=input?.project(rx,y,rz)||[rx,y,rz];return [w/2+q[0]*s,h/2-q[1]*s];};
      const circle=(x,y,r,color,opacity=1,z=0)=>{const q=p(x,y,z);ctx.globalAlpha*=opacity;ctx.fillStyle=color;ctx.beginPath();ctx.arc(q[0],q[1],r*s,0,Math.PI*2);ctx.fill();ctx.globalAlpha/=opacity||1;};
      function ring(x,y,r,color,opacity=.4){const q=p(x,y);ctx.save();ctx.globalAlpha*=opacity;ctx.strokeStyle=color;ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(q[0],q[1],r*s,r*s*Math.max(.35,Math.cos(angle*.5)),0,0,Math.PI*2);ctx.stroke();ctx.restore();}
      function label(zh,en,x,y){const q=p(x,y,.3);ctx.fillStyle=(window.WX_VISUAL_PALETTE?.css('#4d6e7d')||'#4d6e7d');ctx.textAlign='center';ctx.font=(w<350?'11':'13')+'px "Times New Roman","Microsoft YaHei",serif';ctx.fillText(lang()==='en'?en:zh,q[0],q[1]);}
      function bacteria(x,y,size,rotation,index,shape='rod'){
        const q=p(x+Math.sin(time*.29+index)*.025,y+Math.sin(time*.37+index)*.05,.12);ctx.save();ctx.translate(q[0],q[1]);ctx.rotate(rotation+Math.cos(time*.3+index)*.04);
        const r=size*s*.32,len=shape==='rod'?size*s*.71:0,color=colors[index%4],grad=ctx.createLinearGradient(-r,0,r,0);grad.addColorStop(0,(window.WX_VISUAL_PALETTE?.css('#eef8f4')||'#eef8f4'));grad.addColorStop(.44,color);grad.addColorStop(1,(window.WX_VISUAL_PALETTE?.css('#dcefea')||'#dcefea'));ctx.fillStyle=grad;ctx.strokeStyle=color;ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(-r,-r-len/2,r*2,r*2+len,r);ctx.fill();ctx.stroke();
        ctx.strokeStyle=color;ctx.globalAlpha*=.7;ctx.beginPath();for(let j=0;j<=32;j++){const a=j/32*Math.PI*4,xx=Math.sin(a*1.4)*r*.32,yy=(j/32-.5)*(len+r*.6);j?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();
        for(let j=0;j<7;j++){ctx.fillStyle=(window.WX_VISUAL_PALETTE?.css('#dbc9a5')||'#dbc9a5');ctx.beginPath();ctx.arc((seed(index*11+j)-.5)*r*1.3,(seed(index*17+j)-.5)*(len+r),Math.max(.7,s*.018),0,7);ctx.fill();}ctx.restore();
      }
      function flow(a,b,color,offset=0,bend=.5){const u=p(...a),v=p(...b),c=[(u[0]+v[0])/2,(u[1]+v[1])/2-bend*s];ctx.save();ctx.strokeStyle=color;ctx.globalAlpha*=.4;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(...u);ctx.quadraticCurveTo(...c,...v);ctx.stroke();ctx.restore();for(let j=0;j<5;j++){const t=(time*.13+j/5+offset)%1,k=1-t;ctx.fillStyle=color;ctx.beginPath();ctx.arc(k*k*u[0]+2*k*t*c[0]+t*t*v[0],k*k*u[1]+2*k*t*c[1]+t*t*v[1],s*.045*Math.pow(Math.sin(Math.PI*t),.5),0,7);ctx.fill();}}
      modes.forEach(name=>{
        const weight=weights[name];if(weight<.002)return;ctx.save();ctx.globalAlpha=weight;ctx.translate(w/2,h/2);const stageScale=(.88+.12*weight)*(name==='community'?1.06:name==='probiotic'?1.24:1.2);ctx.scale(stageScale,stageScale);ctx.translate(-w/2,-h/2-(1-weight)*s*.18);
        if(name==='probiotic'){
          bacteria(-2.08,.48,.98,.55,0);bacteria(-1.54,-.88,.7,-.8,1);bacteria(-2.15,1.55,.55,-.7,2,'coccus');
          const q=p(1.68,.1);const grad=ctx.createRadialGradient(q[0]-.2*s,q[1]-.3*s,.03*s,q[0],q[1],.7*s);grad.addColorStop(0,'#fff');grad.addColorStop(.6,(window.WX_VISUAL_PALETTE?.css('#d2c4e7')||'#d2c4e7'));grad.addColorStop(1,(window.WX_VISUAL_PALETTE?.css('#b8a9d4')||'#b8a9d4'));ctx.fillStyle=grad;ctx.beginPath();ctx.arc(...q,.7*s,0,7);ctx.fill();
          for(let j=0;j<3;j++){ctx.save();ctx.translate(...q);ctx.rotate(time*.08+j*1.03);ctx.strokeStyle=colors[j];ctx.globalAlpha*=.6;ctx.beginPath();ctx.ellipse(0,0,(1.02+j*.12)*s,.55*s,0,0,7);ctx.stroke();ctx.restore();}
          for(let j=0;j<8;j++){const a=j/8*Math.PI*2+time*.1;circle(1.68+Math.cos(a)*1.12,.1+Math.sin(a)*1.12,.05,colors[j%4]);}
          flow([-1.65,.55],[1.1,.36],(window.WX_VISUAL_PALETTE?.css('#5cb7a8')||'#5cb7a8'),0,.5);flow([-1.5,-.5],[1.1,-.25],(window.WX_VISUAL_PALETTE?.css('#ac9ace')||'#ac9ace'),.2,-.5);flow([-1.6,.15],[1.2,.1],(window.WX_VISUAL_PALETTE?.css('#96b9d0')||'#96b9d0'),.35,.03);
          label('菌株','Strain',-1.95,-1.85);label('代谢信号','Metabolites',-.2,1.8);label('宿主信号','Host signalling',1.7,-1.85);
        }else if(name==='pathogenic'){
          for(let j=0;j<7;j++){const x=(j-3)*.7,q=p(x,-.72);ctx.fillStyle=j%2?(window.WX_VISUAL_PALETTE?.css('#cbdce9')||'#cbdce9'):(window.WX_VISUAL_PALETTE?.css('#d9e2ed')||'#d9e2ed');ctx.strokeStyle=(window.WX_VISUAL_PALETTE?.css('#a6bccb')||'#a6bccb');ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(q[0]-.32*s,q[1]-.715*s,.64*s,1.43*s,.13*s);ctx.fill();ctx.stroke();circle(x,-1.03,.135,(window.WX_VISUAL_PALETTE?.css('#b5a7cb')||'#b5a7cb'),.75);for(let v=0;v<5;v++){const r=p(x+(v-2)*.105,.11);ctx.strokeStyle=(window.WX_VISUAL_PALETTE?.css('#9abac0')||'#9abac0');ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(r[0],r[1]);ctx.lineTo(r[0],r[1]-.16*s);ctx.stroke();}}
          const left=p(-2.5,-1.56),right=p(2.5,-1.56);ctx.strokeStyle=(window.WX_VISUAL_PALETTE?.css('#c0afcf')||'#c0afcf');ctx.lineWidth=.12*s;ctx.beginPath();ctx.moveTo(...left);ctx.lineTo(...right);ctx.stroke();
          for(let j=0;j<2;j++){ctx.strokeStyle=(window.WX_VISUAL_PALETTE?.css('#b9cfd6')||'#b9cfd6');ctx.lineWidth=1.5;ctx.beginPath();for(let k=0;k<=55;k++){const q=p(-2.6+k/55*5.2,.42+Math.sin(k/55*7.2+j*.4)*.05+j*.13);k?ctx.lineTo(...q):ctx.moveTo(...q);}ctx.stroke();}
          bacteria(-1.35,1.45,.65,.75,0);bacteria(.4,1.12,.65,-1.17,1);bacteria(1.8,1.54,.47,-.2,2,'coccus');flow([.4,.83],[.35,.2],(window.WX_VISUAL_PALETTE?.css('#b98e9f')||'#b98e9f'),.2,.13);flow([-1.35,1.1],[-1.05,.25],(window.WX_VISUAL_PALETTE?.css('#96b9c6')||'#96b9c6'),.4,-.1);
          label('上皮屏障','Epithelial barrier',0,-2.08);
        }else{
          const centers=[[-1.72,-.62],[0,1.22],[1.72,-.62]];
          centers.forEach(([x,y],cluster)=>{ring(x,y,1.08,colors[cluster],.55);ring(x,y,1.17,colors[cluster],.2);for(let j=0;j<5;j++){const a=j/5*Math.PI*2+cluster*.5+Math.sin(time*.19+cluster)*.055,r=j===4?.2:.6;bacteria(x+Math.cos(a)*r,y+Math.sin(a)*r,j===4?.41:.35,-a,cluster*5+j,j%2?'coccus':'rod');}});
          for(let j=0;j<3;j++)flow(centers[j],centers[(j+1)%3],colors[j],j*.2,.35);ring(0,.05,3.03,(window.WX_VISUAL_PALETTE?.css('#b8b1d1')||'#b8b1d1'),.22);circle(0,-.24,.13,(window.WX_VISUAL_PALETTE?.css('#c9b8d8')||'#c9b8d8'),.9);
        }
        ctx.restore();
      });
      canvas.dataset.frame=String(++frame);canvas.dataset.scene=mode;canvas.dataset.sceneVersion='6';canvas.dataset.sceneCurrent=modes.reduce((a,b)=>weights[a]>weights[b]?a:b);
    }};
  }

  visual=webgl()||fallback();wireCanvas();refresh();visual.setTheme?.();addEventListener('wxthemechange',()=>{visual.setTheme?.();dirty=true;});
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;last=0;dirty=true;},{rootMargin:'80px'}).observe(canvas);else visible=true;
  new ResizeObserver(()=>{dirty=true;}).observe(canvas);
  new MutationObserver(()=>{last=0;dirty=true;refreshPlayback();}).observe(document.documentElement,{attributes:true,attributeFilter:['data-motion']});
  window.addEventListener('languagechange',refresh);reduced.addEventListener('change',()=>{last=0;dirty=true;refreshPlayback();});document.addEventListener('visibilitychange',()=>{last=0;dirty=true;});
  function animate(now){
    requestAnimationFrame(animate);
    if(document.hidden||(frame>0&&!visible)){last=0;return;}
    const elapsedDt=last?Math.max(0,(now-last)/1000):0,dt=Math.min(.05,elapsedDt);last=now;
    const stopped=paused();
    if(stopped&&!dirty)return;
    if(!stopped){
      clock+=dt;
      if(autoplay&&!dragging){elapsed+=elapsedDt;if(elapsed>=interval){const overflow=elapsed%interval;setMode(modes[(modes.indexOf(mode)+1)%modes.length],true);elapsed=overflow;}}
    }
    transition.elapsed=stopped?transition.duration:Math.min(transition.duration,transition.elapsed+elapsedDt);
    const fraction=transition.elapsed/transition.duration,blend=fraction*fraction*(3-2*fraction);
    modes.forEach(name=>{weights[name]=transition.from[name]+(Number(name===mode)-transition.from[name])*blend;});
    canvas.dataset.transitionProgress=fraction.toFixed(3);host.dataset.transitionProgress=fraction.toFixed(3);
    const damping=stopped?1:1-Math.exp(-dt*10);
    viewYaw+=(yaw-viewYaw)*damping;viewPitch+=(pitch-viewPitch)*damping;
    progress.style.transform='scaleX('+Math.min(1,elapsed/interval).toFixed(4)+')';
    visual.draw(clock);dirty=false;
  }
  window.WX_MICROBIOME={setZoom:value=>input?.setZoom(value),rotate:(yaw,pitch)=>input?.rotate(yaw,pitch),setMode,getMode:()=>mode,setAutoplay,getAutoplay:()=>autoplay,reset,info:()=>({mode,autoplay,elapsed,interval,weights:{...weights},scene:mode,sceneVersion:6,transitionProgress:transition.elapsed/transition.duration,visible,clock,renderer:canvas.dataset.renderer,frame,palette:paletteInfo,view:input?.info(),shapeKinds:['generic rods','generic cocci']})};
  requestAnimationFrame(animate);
})();

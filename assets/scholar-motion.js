/* Decorative, responsive scholarly artwork. The real bibliography remains the source of truth. */
(() => {
  'use strict';
  const html=document.documentElement;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const papers=Array.isArray(window.PUBLICATIONS)?window.PUBLICATIONS:[];
  const publications=document.getElementById('publications');
  const journey=document.getElementById('journey');
  if(!publications||!journey)return;
  let palette={primary:'#277c7c',secondary:'#ce6550',accent:'#c19c60',ink:'#183e43',paper:'#faf5e9'};
  let raf=0,last=0,time=0,frames=0,dirty=true,selectedPaper='',burst=0;
  const renderStats={totalMs:0,maxMs:0};
  let filtered=false,shown=new Set(),stage='phd';
  const scenes=[];
  const motionAllowed=()=>!document.hidden&&!reduced.matches&&html.dataset.motion!=='paused';
  const rgbCache=new Map(),spriteCache=new Map();
  const rgba=(hex,alpha)=>{
    if(!rgbCache.has(hex)){
      const raw=String(hex||'#277c7c').replace('#','');
      const value=parseInt(raw.length===3?raw.split('').map(v=>v+v).join(''):raw,16);
      rgbCache.set(hex,`${value>>16&255},${value>>8&255},${value&255}`);
    }
    return `rgba(${rgbCache.get(hex)},${alpha})`;
  };
  const TAU=Math.PI*2;
  const mix=(a,b,t)=>a+(b-a)*t;
  const point=(angle,radius,y,rotation,tilt)=>{
    const px=Math.cos(angle)*radius,pz=Math.sin(angle)*radius;
    const x=px*Math.cos(rotation)+pz*Math.sin(rotation),z=-px*Math.sin(rotation)+pz*Math.cos(rotation);
    return{x,y:y*Math.cos(tilt)-z*Math.sin(tilt),z:y*Math.sin(tilt)+z*Math.cos(tilt)};
  };
  // Static samples are shared by every frame; moving lights use the analytic curve, never an indexed sample.
  const paperLoops=Array.from({length:3},(_,band)=>Array.from({length:113},(_,i)=>{
    const a=i/112*TAU,r=1.14+band*.055;
    return{x:Math.cos(a)*r,y:Math.sin(a*2+band*.8)*.13,z:Math.sin(a)*r};
  }));
  const journeyLoop=Array.from({length:81},(_,i)=>{const a=i/80*TAU;return{x:Math.cos(a),y:Math.sin(a*2)*.035,z:Math.sin(a)};});
  const traceSamples=Array.from({length:101},(_,i)=>{const u=i/100;return{u,sin:Math.sin(u*TAU),cos:Math.cos(u*TAU),rise:Math.sin(u*Math.PI)};});
  const paperNodes=papers.map((paper,i)=>{
    const y=1-(i+.5)/Math.max(1,papers.length)*2,r=Math.sqrt(Math.max(0,1-y*y))*.83,a=i*2.399963229728653;
    return{paper,i,baseX:Math.cos(a)*r,baseY:y*.78,baseZ:Math.sin(a)*r,x:0,y:0,z:0,active:true,selected:false};
  });
  const depthNodes=paperNodes.slice();

  function orbitPath(ctx,samples,cx,cy,sx,sy,rotation,tilt,color,width,opacity){
    const cr=Math.cos(rotation),sr=Math.sin(rotation),ct=Math.cos(tilt),st=Math.sin(tilt);
    ctx.beginPath();
    for(let i=0;i<samples.length;i++){
      const p=samples[i],x=p.x*cr+p.z*sr,z=-p.x*sr+p.z*cr;
      const px=cx+x*sx,py=cy+(p.y*ct-z*st)*sy;
      if(i)ctx.lineTo(px,py);else ctx.moveTo(px,py);
    }
    ctx.strokeStyle=rgba(color,opacity);ctx.lineWidth=width;ctx.stroke();
  }

  function mount(kind,parent,before){
    const figure=document.createElement('figure');figure.className='scholar-art scholar-art--'+kind;
    figure.setAttribute('aria-hidden','true');
    const canvas=document.createElement('canvas');canvas.id='scholar-'+kind+'-canvas';canvas.setAttribute('aria-hidden','true');figure.append(canvas);
    parent.insertBefore(figure,before||null);
    const ctx=canvas.getContext('2d');if(!ctx){figure.remove();return;}
    const item={kind,figure,canvas,ctx,width:0,height:0,visible:false,draws:0};scenes.push(item);
    const resize=()=>{
      const box=figure.getBoundingClientRect();item.width=box.width;item.height=box.height;
      const dpr=Math.min(devicePixelRatio||1,1.6);canvas.width=Math.max(1,Math.round(box.width*dpr));canvas.height=Math.max(1,Math.round(box.height*dpr));ctx.setTransform(dpr,0,0,dpr,0,0);
      item.visible=box.bottom>0&&box.top<innerHeight&&box.width>0;wake();
    };
    if('ResizeObserver' in window)new ResizeObserver(resize).observe(figure);else addEventListener('resize',resize,{passive:true});
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{item.visible=entries[0].isIntersecting;figure.classList.toggle('scholar-inview',item.visible);wake();},{threshold:0}).observe(figure);
    resize();
  }
  const heading=publications.querySelector('.section-heading');
  heading.classList.add('scholar-heading');mount('papers',heading,heading.querySelector('.paper-total'));
  mount('journey',journey,journey.querySelector('.journey-grid'));

  function sprite(kind,color){
    const key=kind+color;
    if(spriteCache.has(key))return spriteCache.get(key);
    const image=document.createElement('canvas');image.width=image.height=128;
    const ctx=image.getContext('2d'),r=62,c=64;
    if(kind==='aura'){
      const g=ctx.createRadialGradient(c,c,0,c,c,r);g.addColorStop(0,rgba(color,1));g.addColorStop(.48,rgba(color,.35));g.addColorStop(1,rgba(color,0));ctx.fillStyle=g;
    }else{
      const g=ctx.createRadialGradient(c-r*.38,c-r*.42,r*.06,c,c,r);g.addColorStop(0,rgba('#ffffff',.96));g.addColorStop(.26,rgba(color,.35));g.addColorStop(.7,rgba(color,.85));g.addColorStop(1,rgba(palette.ink,.52));ctx.fillStyle=g;
    }
    ctx.beginPath();ctx.arc(c,c,r,0,TAU);ctx.fill();
    if(kind==='pearl'){ctx.strokeStyle=rgba(color,.45);ctx.lineWidth=2;ctx.stroke();}
    spriteCache.set(key,image);return image;
  }
  function stamp(ctx,kind,x,y,r,color,alpha){
    const previous=ctx.globalAlpha;ctx.globalAlpha=previous*alpha;
    const size=r*128/62;ctx.drawImage(sprite(kind,color),x-size/2,y-size/2,size,size);ctx.globalAlpha=previous;
  }
  function aura(ctx,x,y,r,color,alpha){stamp(ctx,'aura',x,y,r,color,alpha);}
  function pearl(ctx,x,y,r,color,alpha=1){stamp(ctx,'pearl',x,y,r,color,alpha);}
  function strokePath(ctx,pts,color,width,opacity,close=false){
    ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));if(close)ctx.closePath();ctx.strokeStyle=rgba(color,opacity);ctx.lineWidth=width;ctx.stroke();
  }
  function drawPapers(item){
    const{ctx,width:w,height:h}=item;if(!w||!h)return;ctx.clearRect(0,0,w,h);
    const cx=w*.5,cy=h*.5,s=Math.min(w*.36,h*.39),turn=time*.105;
    aura(ctx,cx-s*.2,cy,s*1.55,palette.primary,.075);aura(ctx,cx+s*.65,cy+s*.25,s*.95,palette.secondary,.055);
    const project=p=>({x:cx+p.x*s,y:cy+p.y*s*.87,z:p.z});
    // Three fine loops form an open, turning book of connections, not a chart.
    for(let band=0;band<3;band++){
      const color=[palette.primary,palette.accent,palette.secondary][band];
      orbitPath(ctx,paperLoops[band],cx,cy,s,s*.87,turn+band*.72,.55+band*.19,color,band===1?1.15:.75,band===1?.44:.29);
      const head=(time*.065+band*.31)%1;
      const tail=[];for(let i=0;i<15;i++){const a=((head-i*.0035+1)%1)*Math.PI*2;tail.unshift(project(point(a,1.14+band*.055,Math.sin(a*2+band*.8)*.13,turn+band*.72,.55+band*.19)));}
      strokePath(ctx,tail,color,1.7,.7);const tip=tail[tail.length-1];aura(ctx,tip.x,tip.y,9,color,.2);pearl(ctx,tip.x,tip.y,2.1,color,.9);
    }
    const cr=Math.cos(turn+.42),sr=Math.sin(turn+.42),ct=Math.cos(.32),st=Math.sin(.32);
    for(const n of paperNodes){
      const x=n.baseX*cr+n.baseZ*sr,z=-n.baseX*sr+n.baseZ*cr;
      n.x=cx+x*s;n.y=cy+(n.baseY*ct-z*st)*s*.87;n.z=n.baseY*st+z*ct;
      n.active=!filtered||shown.has(n.paper.id);n.selected=selectedPaper===n.paper.id;
    }
    for(let i=0;i<paperNodes.length;i++){
      const a=paperNodes[i],b=paperNodes[(i+3)%paperNodes.length];
      ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.bezierCurveTo(mix(a.x,cx,.6),mix(a.y,cy,.6),mix(b.x,cx,.6),mix(b.y,cy,.6),b.x,b.y);
      ctx.strokeStyle=rgba(i%3===0?palette.accent:palette.primary,(a.selected||b.selected)?.5:(a.active&&b.active)?.16:.045);ctx.lineWidth=(a.selected||b.selected)?1.1:.6;ctx.stroke();
    }
    depthNodes.sort((a,b)=>a.z-b.z).forEach(n=>{
      const color=[palette.primary,palette.secondary,palette.accent][n.i%3];
      const radius=(3.7+(n.z+1)*1.7)*(n.selected?1.35:1);
      const a=n.active?.88:.2;
      if(n.selected||n.active&&burst>0)aura(ctx,n.x,n.y,18+burst*13,color,n.selected?.2:burst*.13);
      pearl(ctx,n.x,n.y,radius,color,a);
      if(n.selected){ctx.beginPath();ctx.arc(n.x,n.y,radius+5,0,Math.PI*2);ctx.strokeStyle=rgba(color,.42);ctx.lineWidth=.7;ctx.stroke();}
    });
    for(let i=0;i<15;i++){
      const a=i*2.39+time*.026,r=s*(1.21+(i%4)*.075),x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r*.61;
      ctx.fillStyle=rgba(i%3===0?palette.secondary:palette.accent,.22+(Math.sin(time*.8+i)+1)*.1);ctx.beginPath();ctx.arc(x,y,i%3===0?1.35:.8,0,Math.PI*2);ctx.fill();
    }
  }

  function drawJourney(item){
    const{ctx,width:w,height:h}=item;if(!w||!h)return;ctx.clearRect(0,0,w,h);
    const cy=h*.51,span=w*.72,left=w*.14,s=Math.min(h*.24,w*.085),active={phd:0,master:1,bachelor:2}[stage]??0;
    const hubs=[0,1,2].map(i=>({x:left+span*i/2,y:cy+Math.sin(i*Math.PI*.5)*h*.035}));
    const trace=(u,offset)=>({x:left+span*u,y:cy+Math.sin(u*Math.PI*2+offset)*h*.085+Math.sin(u*Math.PI)*h*.035});
    for(let line=0;line<5;line++){
      const offset=(line-2)*.21+Math.sin(time*.2)*.12,co=Math.cos(offset),so=Math.sin(offset);
      ctx.beginPath();for(let k=0;k<traceSamples.length;k++){const v=traceSamples[k],x=left+span*v.u,y=cy+(v.sin*co+v.cos*so)*h*.085+v.rise*h*.035;if(k)ctx.lineTo(x,y);else ctx.moveTo(x,y);}
      ctx.strokeStyle=rgba(line%2?palette.primary:palette.accent,line===2?.44:.18);ctx.lineWidth=line===2?1.2:.65;ctx.stroke();
      const u=1-(time*.062+line*.21)%1,p=trace(u,offset);
      pearl(ctx,p.x,p.y,line===2?2.7:1.6,line%2?palette.primary:palette.accent,.78);
    }
    hubs.forEach((hub,i)=>{
      // Match the visible tab order: PhD, master's, undergraduate. Light travels from the earliest stage onward.
      const level=2-i,color=i===1?palette.secondary:i===2?palette.primary:palette.accent;
      aura(ctx,hub.x,hub.y,s*2.1,color,i===active?.12:.04);
      const layers=level+2;
      for(let loop=0;loop<layers;loop++){
        const radius=s*(.62+loop*.14),rotation=time*(.12+i*.025)+loop*.62;
        orbitPath(ctx,journeyLoop,hub.x,hub.y,radius,radius,rotation,.52+loop*.2,color,loop===1?1:.65,i===active?.68:.28);
        const angle=(time*.06+loop*.23)*TAU,p=point(angle,1,Math.sin(angle*2)*.035,rotation,.52+loop*.2);
        pearl(ctx,hub.x+p.x*radius,hub.y+p.y*radius,loop===0?2.8:1.8,color,i===active?.9:.48);
      }
      pearl(ctx,hub.x,hub.y,s*(i===active?.19:.12),color,i===active?.95:.6);
      if(i===active){ctx.beginPath();ctx.ellipse(hub.x,hub.y,s*1.25,s*.88,-.22,0,Math.PI*2);ctx.strokeStyle=rgba(color,.15+Math.sin(time*.7)*.04);ctx.lineWidth=.7;ctx.stroke();}
    });
    for(let i=0;i<21;i++){
      const x=w*(.08+i*.042),y=cy+Math.sin(i*1.21+time*.13)*h*.32;
      ctx.fillStyle=rgba(i%4?palette.primary:palette.secondary,.12+(Math.sin(time*.4+i)+1)*.045);ctx.beginPath();ctx.arc(x,y,i%4? .7:1.2,0,Math.PI*2);ctx.fill();
    }
  }

  function tick(now){
    raf=0;const visible=scenes.filter(s=>s.visible&&s.width>0&&s.height>0);
    if(document.hidden||!visible.length){last=0;return;}
    const running=motionAllowed();
    if(!running&&!dirty){last=0;return;}
    // Render on each display refresh. Lifecycle changes reset `last`, so hidden time is never replayed.
    const dt=last?(now-last)/1000:0;last=now;
    if(running){time+=dt;burst=Math.max(0,burst-dt*.9);}
    const started=performance.now();
    for(const item of visible){if(item.kind==='papers')drawPapers(item);else drawJourney(item);item.draws++;item.canvas.dataset.frame=String(item.draws);}
    const renderMs=performance.now()-started;renderStats.totalMs+=renderMs;renderStats.maxMs=Math.max(renderStats.maxMs,renderMs);
    dirty=false;frames++;
    if(running)raf=requestAnimationFrame(tick);else last=0;
  }
  function wake(){dirty=true;if(!raf&&!document.hidden)raf=requestAnimationFrame(tick);}
  function syncMotion(){html.dataset.scholarMotion=motionAllowed()?'running':'paused';last=0;if(!motionAllowed()){document.querySelectorAll('.scholar-enter,.scholar-panel-enter').forEach(el=>el.classList.remove('scholar-enter','scholar-panel-enter'));}wake();}
  function syncPalette(event){const source=event?.detail?.palette||window.WX_THEME?.palettes?.[window.WX_THEME?.get?.()];if(source){palette={...palette,...source};spriteCache.clear();}wake();}
  addEventListener('wxthemechange',syncPalette);
  addEventListener('languagechange',wake);
  document.addEventListener('visibilitychange',syncMotion);
  reduced.addEventListener('change',syncMotion);
  new MutationObserver(syncMotion).observe(html,{attributes:true,attributeFilter:['data-motion']});

  const list=document.getElementById('publication-list');
  function syncPapers(){
    const rows=[...list.querySelectorAll('.publication')];shown=new Set(rows.map(row=>row.dataset.paperId));
    filtered=publications.querySelector('[data-topic][aria-pressed=true]')?.dataset.topic!=='all'||publications.querySelector('[data-year][aria-pressed=true]')?.dataset.year!=='all'||!!document.getElementById('paper-search')?.value||!!document.getElementById('cofirst-only')?.checked;
    const inView=scenes.find(s=>s.kind==='papers')?.visible;
    rows.forEach((row,index)=>{row.classList.add('scholar-row');row.style.setProperty('--scholar-delay',Math.min(index,5)*45+'ms');if(motionAllowed()&&inView)row.classList.add('scholar-enter');});
    selectedPaper='';burst=1;wake();
  }
  new MutationObserver(syncPapers).observe(list,{childList:true});
  list.addEventListener('pointerover',event=>{const row=event.target.closest('.publication');if(row&&row.dataset.paperId!==selectedPaper){selectedPaper=row.dataset.paperId;wake();}},{passive:true});
  list.addEventListener('pointerleave',()=>{selectedPaper='';wake();},{passive:true});
  list.addEventListener('focusin',event=>{selectedPaper=event.target.closest('.publication')?.dataset.paperId||'';wake();});
  list.addEventListener('focusout',event=>{if(!list.contains(event.relatedTarget)){selectedPaper='';wake();}});
  list.addEventListener('animationend',event=>{if(event.animationName==='scholar-row-enter')event.target.classList.remove('scholar-enter');});
  const tabs=journey.querySelector('.journey-grid'),panel=document.getElementById('journey-panel');
  function syncStage(){
    const next=tabs.querySelector('[aria-selected=true]')?.dataset.stageSelect||'phd';
    if(next===stage)return;stage=next;burst=1;
    if(motionAllowed()){panel.classList.remove('scholar-panel-enter');void panel.offsetWidth;panel.classList.add('scholar-panel-enter');}
    wake();
  }
  new MutationObserver(syncStage).observe(tabs,{subtree:true,attributes:true,attributeFilter:['aria-selected']});
  panel.addEventListener('animationend',event=>{if(event.animationName==='scholar-panel-enter')panel.classList.remove('scholar-panel-enter');});
  window.WX_SCHOLAR={info:()=>({running:motionAllowed(),time,frames,stage,selectedPaper,filtered,visibleIds:[...shown],palette:{...palette},motion:{cadence:'display-refresh',continuousOrbits:true,meanRenderMs:frames?renderStats.totalMs/frames:0,maxRenderMs:renderStats.maxMs,spriteCount:spriteCache.size},scenes:scenes.map(s=>({kind:s.kind,visible:s.visible,width:s.width,height:s.height,frames:s.draws}))})};
  syncPalette();syncPapers();syncMotion();
})();

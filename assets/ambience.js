/* Progressive decorative motion. No text, scientific model or interaction state is changed. */
(() => {
  'use strict';
  const root=document.documentElement;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const fine=matchMedia('(hover: hover) and (pointer: fine)');
  const cards=Array.from(document.querySelectorAll('.research-bento .research-item'));
  const activeTimers=new Map();
  const pendingPointers=new Map();
  let pointerFrame=0;
  const running=()=>!reduced.matches&&!document.hidden&&root.dataset.motion!=='paused';
  const inView=el=>{const box=el.getBoundingClientRect();return box.bottom>0&&box.top<innerHeight&&box.width>0;};

  function syncMotion(){
    root.dataset.ambience=running()?'running':'paused';
    if(!running()){
      cancelAnimationFrame(pointerFrame);pointerFrame=0;pendingPointers.clear();
      cards.forEach(card=>{card.classList.remove('amb-hover');card.style.setProperty('--amb-shift-x','0px');card.style.setProperty('--amb-shift-y','0px');});
      document.querySelectorAll('.amb-arrive,.amb-panel-shift,.amb-poem-shift,.amb-shift').forEach(el=>el.classList.remove('amb-arrive','amb-panel-shift','amb-poem-shift','amb-shift'));
      activeTimers.forEach(clearTimeout);activeTimers.clear();
    }
  }
  new MutationObserver(syncMotion).observe(root,{attributes:true,attributeFilter:['data-motion']});
  document.addEventListener('visibilitychange',syncMotion);
  reduced.addEventListener('change',syncMotion);
  fine.addEventListener('change',()=>{pendingPointers.clear();cards.forEach(card=>card.classList.remove('amb-hover'));});
  syncMotion();

  const arrivalTargets=Array.from(document.querySelectorAll('.section-heading,.about-portrait,.about-copy,.research-stats,.research-bento .research-item,.journey-grid,.closing-inner'));
  arrivalTargets.forEach((el,index)=>{el.dataset.ambReveal='ready';el.style.setProperty('--amb-delay',Math.min(index%3*65,130)+'ms');});
  const decorationTargets=Array.from(document.querySelectorAll('.research-bento .research-item,.cloud-rule,.journey-stage,.hero-poetry'));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){
        const el=entry.target;el.classList.toggle('amb-inview',entry.isIntersecting);
        if(entry.isIntersecting&&el.dataset.ambReveal==='ready'){
          el.dataset.ambReveal='shown';
          if(running())el.classList.add('amb-arrive');
        }
        if(!entry.isIntersecting)el.classList.remove('amb-hover');
      }
    },{threshold:.04});
    new Set([...arrivalTargets,...decorationTargets]).forEach(el=>observer.observe(el));
  }else{
    decorationTargets.forEach(el=>el.classList.add('amb-inview'));
    arrivalTargets.forEach(el=>el.dataset.ambReveal='shown');
  }
  document.addEventListener('animationend',event=>{if(event.animationName==='amb-arrive')event.target.classList.remove('amb-arrive');});

  function flushPointers(){
    pointerFrame=0;if(!running()||!fine.matches){pendingPointers.clear();return;}
    for(const [card,pointer] of pendingPointers){
      if(!card.classList.contains('amb-inview'))continue;
      const rect=card.getBoundingClientRect(),x=pointer.x-rect.left,y=pointer.y-rect.top;
      card.style.setProperty('--amb-x',x.toFixed(1)+'px');card.style.setProperty('--amb-y',y.toFixed(1)+'px');
      card.style.setProperty('--amb-shift-x',((x/Math.max(1,rect.width)-.5)*3.4).toFixed(2)+'px');
      card.style.setProperty('--amb-shift-y',((y/Math.max(1,rect.height)-.5)*2.5).toFixed(2)+'px');
      card.classList.add('amb-hover');
    }
    pendingPointers.clear();
  }
  cards.forEach(card=>{
    card.addEventListener('pointermove',event=>{
      if(!running()||!fine.matches||event.pointerType==='touch')return;
      pendingPointers.set(card,{x:event.clientX,y:event.clientY});
      if(!pointerFrame)pointerFrame=requestAnimationFrame(flushPointers);
    },{passive:true});
    card.addEventListener('pointerleave',()=>{pendingPointers.delete(card);card.classList.remove('amb-hover');card.style.setProperty('--amb-shift-x','0px');card.style.setProperty('--amb-shift-y','0px');},{passive:true});
  });

  function pulse(el,className,duration){
    if(!el||!running()||!inView(el))return;
    const key=className+':'+(el.id||el.className.split(' ')[0]);
    clearTimeout(activeTimers.get(key));
    el.classList.remove(className);
    // One flush per deliberate state transition; nothing is measured in an idle frame loop.
    void el.offsetWidth;
    el.classList.add(className);
    activeTimers.set(key,setTimeout(()=>{el.classList.remove(className);activeTimers.delete(key);},duration));
  }
  addEventListener('researchscenechange',event=>{
    const module=event.detail?.module;
    const card=document.getElementById(({llm:'ai-research',ai:'ai-research',causal:'causal-research',omics:'omics-research',microbiome:'microbiome-research',micro:'microbiome-research'})[module]||'');
    pulse(card,'amb-shift',1300);
  });
  const poems=document.getElementById('poem-lines');
  if(poems)new MutationObserver(()=>pulse(document.querySelector('.hero-poetry'),'amb-poem-shift',1850)).observe(poems,{attributes:true,attributeFilter:['data-poem']});

  const stageButtons=Array.from(document.querySelectorAll('.journey-stage'));
  const fitTracks=()=>stageButtons.forEach(button=>{const line=button.querySelector('.stage-line');if(line)button.style.setProperty('--amb-line-travel',Math.max(0,line.clientWidth-6)+'px');});
  if('ResizeObserver' in window){const resizeObserver=new ResizeObserver(fitTracks);stageButtons.forEach(button=>resizeObserver.observe(button));}
  fitTracks();
  const stageList=document.querySelector('.journey-grid');
  if(stageList)new MutationObserver(records=>{if(records.some(record=>record.target.getAttribute('aria-selected')==='true'))pulse(document.getElementById('journey-panel'),'amb-panel-shift',550);}).observe(stageList,{subtree:true,attributes:true,attributeFilter:['aria-selected']});

  window.WX_AMBIENCE={info:()=>({running:running(),pointer:fine.matches,visibleDecorations:decorationTargets.filter(el=>el.classList.contains('amb-inview')).length,arrived:arrivalTargets.filter(el=>el.dataset.ambReveal==='shown').length,pendingPointers:pendingPointers.size})};
})();

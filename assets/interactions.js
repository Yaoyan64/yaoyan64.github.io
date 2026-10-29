(() => {
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
  const t=(key,vars)=>window.WX_I18N.t(key,vars), en=()=>window.WX_I18N.getLang()==='en';
  const reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const state={interest:'genetics',step:'tokens',token:0,causal:'instrument',omics:'all',stage:'phd',basePairs:true,playing:true,poem:0,auto:{llm:true,causal:true,omics:true,poem:true}};
  const fragments={zh:['肠道','微生物','与','宿主','免疫'],en:['Gut','microbes','and','host','immunity']};
  const poems={
    zh:[['微处有天地','案头见山海'],['一分想象','十分求证'],['慢慢读数据','认真问缘由'],['循着一条线索','再多走一步'],['让疑问留下','让答案生长'],['从已知出发','向未解处行'],['读到有疑处','便是新起点'],['把问题想深','把日子过轻']],
    en:[['A wider world','in the smallest details.'],['Make room for ideas.','Then test them well.'],['Read the data closely.','Keep asking why.'],['Follow one clue.','Take it a little further.'],['Stay with the question.','Let understanding grow.'],['Start with what is known.','Go where questions remain.'],['A question in the margin.','A new place to begin.'],['Think deeply.','Keep a little lightness.']]
  };
  const cyclePeriod=3000;
  const cycles={llm:{period:cyclePeriod,elapsed:0,hold:0,element:'#ai-research'},causal:{period:cyclePeriod,elapsed:0,hold:0,element:'#causal-research'},omics:{period:cyclePeriod,elapsed:0,hold:0,element:'#omics-research'},poem:{period:cyclePeriod,elapsed:0,hold:0,element:'.hero-poetry'}};
  const sequences={llm:['tokens','attention','generation'],causal:['instrument','exposure','outcome'],omics:['all','genome','transcriptome','proteome']};
  function sceneDetails(module,notify=false,automatic=false){
    const scene=state[module==='llm'?'step':module],index=sequences[module].indexOf(scene),count=sequences[module].length;
    const article=$(cycles[module].element);article.dataset.currentScene=scene;article.dataset.sceneStep=String(index+1);article.dataset.sceneCount=String(count);
    $('#'+module+'-scene-number').textContent=String(index+1).padStart(2,'0')+' / '+String(count).padStart(2,'0');
    $('#'+module+'-scene-caption').textContent=t('scene.'+module+'.'+scene);
    const canvas=$('#'+({llm:'ai',causal:'causal',omics:'omics'})[module]+'-canvas');
    canvas?.setAttribute('aria-label',t('scene.'+module+'.'+scene)+'. '+t(module+'.text.'+scene));
    if(notify)dispatchEvent(new CustomEvent('researchscenechange',{detail:{module,scene,index,count,automatic}}));
  }
  function setPressed(selector,attribute,value){$$(selector).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset[attribute]===value)));}
  function feedback(module){
    const el=$(cycles[module]?.element);if(!el)return;
    el.classList.remove('is-focused');void el.offsetWidth;el.classList.add('is-focused');
    const readout=$('#'+module+'-readout');if(readout){readout.classList.remove('is-updated');void readout.offsetWidth;readout.classList.add('is-updated');}
  }
  function hold(module){cycles[module].elapsed=0;cycles[module].hold=cyclePeriod;updateProgress(module);feedback(module);}
  function renderTokens(){
    const restore=document.activeElement?.matches('button[data-token-focus]');
    $('#token-rail').innerHTML=fragments[en()?'en':'zh'].map((text,index)=>'<button type="button" data-token-focus="'+index+'" aria-pressed="'+(index===state.token)+'" aria-label="'+t('llm.focusToken',{token:text})+'">'+text+'</button>').join('');
    if(restore)$('#token-rail [data-token-focus="'+state.token+'"]').focus({preventScroll:true});
  }
  function renderInterest(){setPressed('button[data-interest]','interest',state.interest);$('#about-focus-text').textContent=t('about.focus.'+state.interest);}
  function renderFlow(module,sync=true,automatic=false){
    if(module==='llm'){
      setPressed('button[data-llm-step]','llmStep',state.step);$('#llm-readout').textContent=t('llm.text.'+state.step);
      setPressed('button[data-token-focus]','tokenFocus',String(state.token));
      if(sync){window.WX_SCENES?.setLLMStep(state.step);window.WX_SCENES?.setTokenFocus(state.token);}
    }else{
      setPressed('button[data-'+module+']',module,state[module]);$('#'+module+'-readout').textContent=t(module+'.text.'+state[module]);
      if(sync){if(module==='causal')window.WX_SCENES?.setCausalFocus(state.causal);else window.WX_SCENES?.setOmicsLayer(state.omics);}
    }
    sceneDetails(module,sync,automatic);
    const button=$('#'+module+'-play');button.textContent=t(state.auto[module]?'flow.pause':'flow.play');button.setAttribute('aria-pressed',String(state.auto[module]));
    state.playing=state.auto.llm;updateProgress(module);
  }
  function renderStage(){
    $$('[data-stage-select]').forEach(b=>{const selected=b.dataset.stageSelect===state.stage;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;b.classList.toggle('is-selected',selected);});
    $('#journey-panel').setAttribute('aria-labelledby','stage-'+state.stage);$('#journey-panel-title').textContent=t('journey.panel.'+state.stage+'Title');$('#journey-panel-text').textContent=t('journey.panel.'+state.stage);
  }
  let poemTimer;
  function renderPoem(animate=false){
    clearTimeout(poemTimer);const lines=$('#poem-lines');
    const paint=()=>{const words=poems[en()?'en':'zh'][state.poem];Array.from(lines.children).forEach((p,i)=>p.textContent=words[i]);$('#poem-counter').textContent=String(state.poem+1).padStart(2,'0')+' / 08';lines.dataset.poem=String(state.poem);lines.classList.remove('is-changing');};
    if(animate&&!reduced.matches&&document.documentElement.dataset.motion!=='paused'){lines.classList.add('is-changing');poemTimer=setTimeout(paint,420);}else paint();
    $('#poem-pause').setAttribute('aria-pressed',String(!state.auto.poem));$('#poem-pause').setAttribute('aria-label',t(state.auto.poem?'poem.pause':'poem.play'));$('#poem-pause').textContent=state.auto.poem?'Ⅱ':'▷';
  }
  function updateProgress(module){
    if(module==='poem')return;const cycle=cycles[module],el=$('#'+module+'-progress');
    el.style.setProperty('--flow-progress',String(Math.min(1,cycle.elapsed/(cycle.hold||cycle.period))));
    const blocked=document.documentElement.dataset.motion==='paused'||reduced.matches;
    el.classList.toggle('is-paused',!state.auto[module]||blocked);
    const button=$('#'+module+'-play');button.disabled=blocked;button.setAttribute('aria-pressed',String(!blocked&&state.auto[module]));
    const label=blocked?(en()?'Motion paused':'动效已暂停'):t(state.auto[module]?'flow.pause':'flow.play');
    if(button.textContent!==label)button.textContent=label;
  }
  function advance(module){
    if(module==='poem'){state.poem=(state.poem+1)%8;renderPoem(true);return;}
    const values=sequences[module];
    const key=module==='llm'?'step':module;
    state[key]=values[(values.indexOf(state[key])+1)%values.length];
    if(module==='llm'&&state.step==='tokens')state.token=(state.token+1)%5;
    renderFlow(module,true,true);
  }
  function inView(selector){const el=$(selector);if(!el)return false;const r=el.getBoundingClientRect();return r.bottom>100&&r.top<innerHeight-60&&r.width>0;}
  let last=performance.now();
  setInterval(()=>{
    const now=performance.now(),dt=Math.max(0,now-last);last=now;
    const canRun=!document.hidden&&!reduced.matches&&document.documentElement.dataset.motion!=='paused';
    for(const [module,cycle] of Object.entries(cycles)){
      if(canRun&&state.auto[module]&&!window.WX_RESEARCH_INPUTS?.get(module)?.state.dragging&&inView(cycle.element)){
        cycle.elapsed+=dt;
        if(cycle.elapsed>=(cycle.hold||cycle.period)){cycle.elapsed%=cycle.hold||cycle.period;cycle.hold=0;advance(module);}
      }
      if(module!=='poem')updateProgress(module);
    }
  },100);
  document.addEventListener('visibilitychange',()=>{last=performance.now();});
  addEventListener('researchviewchange',event=>{const cycle=cycles[event.detail?.module];if(cycle){cycle.elapsed=0;cycle.hold=cyclePeriod;updateProgress(event.detail.module);}});
  addEventListener('researchviewgesture',event=>{const cycle=cycles[event.detail?.module];if(cycle){cycle.elapsed=0;cycle.hold=cyclePeriod;}});
  $$('button[data-interest]').forEach(b=>b.addEventListener('click',()=>{state.interest=b.dataset.interest;renderInterest();}));
  $$('button[data-llm-step]').forEach(b=>b.addEventListener('click',()=>{state.step=b.dataset.llmStep;renderFlow('llm');hold('llm');}));
  $('#token-rail').addEventListener('click',e=>{const b=e.target.closest('button[data-token-focus]');if(!b)return;state.token=Number(b.dataset.tokenFocus);state.step='attention';renderFlow('llm');hold('llm');});
  for(const module of ['llm','causal','omics']){
    $('#'+module+'-play').addEventListener('click',()=>{state.auto[module]=!state.auto[module];cycles[module].elapsed=0;cycles[module].hold=0;renderFlow(module,false);});
    if(module!=='llm')$$('button[data-'+module+']').forEach(b=>b.addEventListener('click',()=>{state[module]=b.dataset[module];renderFlow(module);hold(module);}));
    const group=$(cycles[module].element+' .module-options');
    group.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)||!e.target.matches('button'))return;e.preventDefault();const buttons=Array.from(group.querySelectorAll('button'));let index=buttons.indexOf(e.target);index=e.key==='Home'?0:e.key==='End'?buttons.length-1:(index+(e.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;buttons[index].focus({preventScroll:true});buttons[index].click();});
  }
  $('#poem-prev').addEventListener('click',()=>{state.poem=(state.poem+7)%8;hold('poem');renderPoem(true);});
  $('#poem-next').addEventListener('click',()=>{state.poem=(state.poem+1)%8;hold('poem');renderPoem(true);});
  $('#poem-pause').addEventListener('click',()=>{state.auto.poem=!state.auto.poem;cycles.poem.elapsed=0;cycles.poem.hold=0;renderPoem();});
  const stageButtons=$$('[data-stage-select]');
  stageButtons.forEach(b=>{
    b.addEventListener('click',()=>{state.stage=b.dataset.stageSelect;renderStage();});
    b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();let index=stageButtons.indexOf(b);if(e.key==='Home')index=0;else if(e.key==='End')index=stageButtons.length-1;else index=(index+(['ArrowRight','ArrowDown'].includes(e.key)?1:-1)+stageButtons.length)%stageButtons.length;state.stage=stageButtons[index].dataset.stageSelect;renderStage();stageButtons[index].focus();});
  });
  $('#basepairs-toggle').addEventListener('click',()=>{state.basePairs=!state.basePairs;$('#basepairs-toggle').setAttribute('aria-pressed',String(state.basePairs));window.WX_SCENES?.setBasePairs(state.basePairs);});
  function renderZoom(){const zoom=window.WX_SCENES?.getZoom?.()||1;$('#helix-zoom').value=String(zoom);$('#zoom-value').textContent=Math.round(zoom*100)+'%';$('#zoom-in').disabled=zoom>=1.65;$('#zoom-out').disabled=zoom<=.75;}
  $('#helix-zoom').addEventListener('input',e=>{window.WX_SCENES?.setZoom?.(Number(e.target.value));renderZoom();});
  $('#zoom-in').addEventListener('click',()=>{window.WX_SCENES?.setZoom?.((window.WX_SCENES.getZoom?.()||1)+.15);renderZoom();});
  $('#zoom-out').addEventListener('click',()=>{window.WX_SCENES?.setZoom?.((window.WX_SCENES.getZoom?.()||1)-.15);renderZoom();});
  addEventListener('zoomchange',renderZoom);
  const disclosure=$('#dna-discovery'),openButton=$('#open-dna');openButton.setAttribute('aria-controls','dna-discovery');openButton.setAttribute('aria-expanded',String(disclosure.open));
  openButton.addEventListener('click',()=>{disclosure.open=true;openButton.setAttribute('aria-expanded','true');disclosure.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});});
  disclosure.addEventListener('toggle',()=>openButton.setAttribute('aria-expanded',String(disclosure.open)));
  function renderAll(sync=false){renderInterest();renderTokens();for(const module of ['llm','causal','omics'])renderFlow(module,sync);renderStage();renderPoem();renderZoom();}
  addEventListener('languagechange',()=>renderAll(false));
  window.WX_INTERACTIONS={getState:()=>({...state,auto:{...state.auto}}),getTimings:()=>Object.fromEntries(Object.entries(cycles).map(([name,cycle])=>[name,{period:cycle.period,elapsed:cycle.elapsed,hold:cycle.hold}]))};
  renderAll(true);
})();

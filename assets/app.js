(() => {
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
  const t=(key,vars)=>window.WX_I18N.t(key,vars), en=()=>window.WX_I18N.getLang()==='en';
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const scientific=(value,paper)=>window.WX_ACADEMIC?.format(value,paper)||esc(value);
  const header=$('#site-header'), menuButton=$('.menu-toggle'), menu=$('#mobile-nav');
  function menuLabel(){const open=!menu.hidden;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',t(open?'nav.close':'nav.open'));menuButton.dataset.i18nAria=open?'nav.close':'nav.open';}
  function closeMenu(returnFocus=false){menu.hidden=true;menuLabel();if(returnFocus)menuButton.focus();}
  menuButton.addEventListener('click',()=>{menu.hidden=!menu.hidden;menuLabel();});
  $$('#mobile-nav a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
  document.addEventListener('click',e=>{if(!menu.hidden&&!header.contains(e.target))closeMenu();});
  matchMedia('(min-width:1181px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
  const info=$('#model-info'),infoButton=$('#model-info-button');
  function closeInfo(){info.hidden=true;infoButton.setAttribute('aria-expanded','false');}
  infoButton.addEventListener('click',()=>{info.hidden=!info.hidden;infoButton.setAttribute('aria-expanded',String(!info.hidden));});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!menu.hidden)closeMenu(true);if(!info.hidden){closeInfo();infoButton.focus();}}});
  document.addEventListener('click',e=>{if(!info.hidden&&!info.contains(e.target)&&!infoButton.contains(e.target))closeInfo();});
  $('#rotate-left').addEventListener('click',()=>window.WX_SCENES?.rotate(-.3,0));
  $('#rotate-right').addEventListener('click',()=>window.WX_SCENES?.rotate(.3,0));
  $('#reset-model').addEventListener('click',()=>{window.WX_SCENES?.reset();$('#molecule-readout').textContent='';});

  const navLinks=$$('[data-section-link]');
  const sectionIds=[...new Set(navLinks.map(link=>link.hash.slice(1)))];
  const sections=[...document.querySelectorAll('main > section[id]')].filter(section=>sectionIds.includes(section.id));
  const navCopy={zh:{about:'关于我',research:'研究与工具',journey:'学术轨迹',publications:'学术成果','art-gallery':'研究画廊'},en:{about:'About',research:'Research',journey:'Journey',publications:'Publications','art-gallery':'Gallery'}};
  let scrollPending=false, navTarget=null, navUntil=0, activeSection='';
  function updateNavLabels(){const copy=navCopy[en()?'en':'zh'];navLinks.forEach(link=>{link.textContent=copy[link.hash.slice(1)]||link.textContent;});}
  function setActiveSection(id){activeSection=id;navLinks.forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
  function updateScroll(){
    scrollPending=false;header.classList.toggle('scrolled',scrollY>24);
    const total=document.documentElement.scrollHeight-innerHeight;
    $('#reading-progress').style.transform='scaleX('+Math.max(0,Math.min(1,total?scrollY/total:0))+')';
    const line=header.getBoundingClientRect().bottom+Math.min(90,innerHeight*.12);
    let active='';for(const section of sections)if(section.getBoundingClientRect().top<=line)active=section.id;
    if(navTarget&&performance.now()<navUntil){const target=document.getElementById(navTarget);if(target&&Math.abs(target.getBoundingClientRect().top-header.offsetHeight-22)>3)active=navTarget;else navTarget=null;}else navTarget=null;
    if(scrollY+innerHeight>=document.documentElement.scrollHeight-8&&sections.length)active=sections[sections.length-1].id;
    setActiveSection(active);
  }
  function navigateToSection(id,{history=true}={}){const target=document.getElementById(id);if(!target)return false;closeMenu();navTarget=id;navUntil=performance.now()+1700;setActiveSection(id);if(history&&location.hash!=='#'+id)window.history.pushState(null,'','#'+id);window.scrollTo({top:Math.max(0,target.getBoundingClientRect().top+scrollY-header.offsetHeight-22),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});return true;}
  navLinks.forEach(link=>link.addEventListener('click',event=>{if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();navigateToSection(link.hash.slice(1));}));
  addEventListener('wheel',()=>{navTarget=null;},{passive:true});addEventListener('touchstart',()=>{navTarget=null;},{passive:true});
  addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateScroll);}},{passive:true});
  addEventListener('resize',updateScroll);addEventListener('scrollend',updateScroll);new ResizeObserver(()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateScroll);}}).observe(document.getElementById('main'));updateNavLabels();updateScroll();
  window.WX_NAV={go:navigateToSection,info:()=>({active:activeSection,order:sections.map(section=>section.id),links:navLinks.map(link=>({target:link.hash,label:link.textContent,current:link.hasAttribute('aria-current')}))})};
  const papers=window.PUBLICATIONS||[], list=$('#publication-list'), more=$('#more-publications');
  const categories={immune:'immune inflammation bowel IBD 免疫 炎症 肠病',metabolic:'metabolism obesity diabetes 代谢 肥胖 糖尿病',neuro:'neurology ataxia stroke 神经 共济失调 卒中',platform:'platform database 平台 数据库 结构变异'};
  let year='all',expanded=false,topic='all',lastRandom='',pathway=null;
  const pathwayBar=document.createElement('div');pathwayBar.className='publication-pathway';pathwayBar.hidden=true;pathwayBar.innerHTML='<span></span><button type="button"></button>';list.before(pathwayBar);
  function citation(p){return p.authors+' '+p.title+' '+p.journal+'. '+(p.detail||p.year)+'.'+(p.doi?' doi: '+p.doi+'.':'');}
  function paperHTML(p,openIds){
    const authors=p.id==='pub-2025-sv4gd'?esc(p.authors):esc(p.authors).replace(/\bWang X\*?/g,'<strong>$&</strong>');
    return '<article class="publication" data-paper-id="'+esc(p.id)+'"><div class="pub-year">'+p.year+'</div><div class="pub-content"><div class="pub-topline"><em class="pub-journal journal">'+esc(p.journal)+'</em><span class="pub-author-role">'+t(p.cofirst?'papers.cofirst':'papers.collaboration')+'</span>'+(window.WX_CITATIONS?.badgeHTML(p)||'')+'</div><h3 class="pub-title" lang="en">'+scientific(p.title,p)+'</h3><div class="pub-footer"><details class="pub-details"'+(openIds.has(p.id)?' open':'')+'><summary>'+t('papers.authors')+'</summary><div class="pub-detail-content"><p class="pub-summary">'+scientific(en()?p.summaryEn:p.summary,p)+'</p><p class="pub-author" lang="en">'+authors+'</p><p lang="en"><em class="journal">'+esc(p.journal)+'</em> · '+esc(p.detail||p.year)+'</p>'+(p.doi?'<p>DOI: '+esc(p.doi)+'</p>':'')+'</div></details><div class="pub-right"><button type="button" data-copy="'+esc(p.id)+'">'+t('papers.copy')+'</button>'+(window.WX_CITATIONS?.scholarHTML(p)||'')+(p.doi?'<a href="https://doi.org/'+encodeURI(p.doi)+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(t('papers.original')+': '+p.title)+'">'+t('papers.original')+' ↗</a>':'')+'</div></div></div></article>';
  }
  function updateYears(){$$('[data-year]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.year===year)));}
  function render(resetExpansion=false,preserveDetails=false){
    if(resetExpansion)expanded=false;
    const openIds=new Set(preserveDetails?$$('.publication').filter(el=>el.querySelector('details[open]')).map(el=>el.dataset.paperId):[]);
    const query=$('#paper-search').value.trim().toLocaleLowerCase(),cofirst=$('#cofirst-only').checked;
    const topicMatch=p=>topic==='all'||(topic==='microbiome'?/gut microbiom|microbiot|肠道微生物|菌群/i.test([p.title,p.summary,p.summaryEn].join(' ')):p.category===topic);
    const matches=papers.filter(p=>(!pathway||pathway.ids.includes(p.id))&&topicMatch(p)&&(year==='all'||String(p.year)===year)&&(!cofirst||p.cofirst)&&(!query||[p.title,p.authors,p.journal,p.summary,p.summaryEn,p.doi,p.year,categories[p.category]].join(' ').toLocaleLowerCase().includes(query)));
    const visible=expanded?matches:matches.slice(0,4);
    $('#publication-count').textContent=t('papers.count',{count:matches.length});
    $$('[data-topic]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.topic===topic)));
    $('#clear-paper-filters').hidden=!pathway&&year==='all'&&topic==='all'&&!query&&!cofirst;
    pathwayBar.hidden=!pathway;if(pathway){pathwayBar.querySelector('span').textContent=(en()?'Research thread: ':'研究脉络：')+pathway.label[en()?'en':'zh'];pathwayBar.querySelector('button').textContent=en()?'Show all papers':'查看全部论文';}
    list.innerHTML=visible.length?visible.map(p=>paperHTML(p,openIds)).join(''):'<div class="empty-state"><h3>'+t('papers.emptyTitle')+'</h3><p>'+t('papers.emptyText')+'</p><button type="button" id="reset-filters">'+t('papers.reset')+' ↻</button></div>';
    more.hidden=matches.length<=4;more.innerHTML=t(expanded?'papers.less':'papers.more',{count:Math.max(0,matches.length-4)})+' <span aria-hidden="true">'+(expanded?'↑':'↓')+'</span>';
    $('#reset-filters')?.addEventListener('click',()=>{resetFilters();$('[data-year="all"]').focus();});
    updateScroll();
  }

  function resetFilters(){year='all';topic='all';pathway=null;$('#paper-search').value='';$('#cofirst-only').checked=false;updateYears();render(true);}
  pathwayBar.querySelector('button').addEventListener('click',resetFilters);
  function showResearchPapers(ids,label){const valid=[...new Set(ids)].filter(id=>papers.some(p=>p.id===id));if(!valid.length)return false;year='all';topic='all';pathway={ids:valid,label:label||{zh:'相关研究',en:'Connected research'}};$('#paper-search').value='';$('#cofirst-only').checked=false;updateYears();expanded=true;render();return true;}
  window.WX_PUBLICATIONS={show:(ids,label)=>{if(!showResearchPapers(ids,label))return false;navigateToSection('publications');return true;},focus:id=>{if(!showResearchPapers([id],{zh:'逐篇阅读',en:'Selected paper'}))return false;const article=list.querySelector('[data-paper-id="'+id+'"]');article.querySelector('details').open=true;article.classList.add('is-map-target');article.tabIndex=-1;closeMenu();navTarget='publications';navUntil=performance.now()+1700;setActiveSection('publications');if(location.hash!=='#publications')history.pushState(null,'','#publications');article.focus({preventScroll:true});window.scrollTo({top:Math.max(0,article.getBoundingClientRect().top+scrollY-header.offsetHeight-24),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});return true;},info:()=>({pathway:pathway?{ids:pathway.ids.slice(),label:{...pathway.label}}:null,expanded,visible:[...list.querySelectorAll('[data-paper-id]')].map(el=>el.dataset.paperId)})};
  $('#clear-paper-filters').addEventListener('click',resetFilters);
  $$('[data-topic]').forEach(b=>b.addEventListener('click',()=>{topic=b.dataset.topic;render(true);}));
  $('#random-paper').addEventListener('click',()=>{const options=papers.filter(p=>p.id!==lastRandom),paper=options[Math.floor(Math.random()*options.length)];if(!paper)return;lastRandom=paper.id;year='all';topic='all';pathway=null;$('#cofirst-only').checked=false;$('#paper-search').value=paper.title;updateYears();render(true);});
  $$('[data-year]').forEach(b=>b.addEventListener('click',()=>{year=b.dataset.year;updateYears();render(true);}));
  $('#paper-search').addEventListener('input',()=>render(true));$('#cofirst-only').addEventListener('change',()=>render(true));
  more.addEventListener('click',()=>{const wasExpanded=expanded;expanded=!expanded;render(false,true);if(wasExpanded)$('#publications').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});});
  let toastTimer;
  function toast(text){$('#toast').textContent=text;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3000);}
  async function copyText(text){
    if(navigator.clipboard&&window.isSecureContext){try{await navigator.clipboard.writeText(text);return true;}catch{}}
    const focus=document.activeElement,field=document.createElement('textarea');field.value=text;field.readOnly=true;field.style.cssText='position:fixed;top:0;left:-9999px';document.body.append(field);field.select();let success=false;try{success=document.execCommand('copy');}catch{}field.remove();focus?.focus({preventScroll:true});return success;
  }
  list.addEventListener('click',async e=>{const button=e.target.closest('[data-copy]');if(!button)return;const paper=papers.find(p=>p.id===button.dataset.copy);if(paper)toast(t(await copyText(citation(paper))?'papers.copied':'papers.copyFailed'));});
  addEventListener('languagechange',()=>{menuLabel();updateNavLabels();render(false,true);$('#toast').classList.remove('visible');});
  addEventListener('citationschange',()=>render(false,true));
  render();menuLabel();
})();

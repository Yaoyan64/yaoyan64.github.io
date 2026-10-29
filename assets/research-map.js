/* An editorial map of the supplied publications, not a biological causal diagram. */
(() => {
  'use strict';
  const root=document.getElementById('research-map');if(!root)return;
  const papers=window.PUBLICATIONS||[];
  const en=()=>window.WX_I18N?.getLang()==='en',text=pair=>pair[en()?1:0];
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const scientific=(value,p)=>window.WX_ACADEMIC?.format(value,p)||esc(value);
  const questions=[
    {id:'immune',glyph:'immune',name:['免疫与共病','Immunity & shared risk'],title:['越过疾病边界，寻找共同线索。','Different diagnoses, shared questions.'],description:['从炎症性肠病与卒中的遗传交汇，到免疫调控和细胞因子，追问不同表型之间的共同线索。','Shared susceptibility, immune regulation and cytokines offer complementary routes into complex disease.'],papers:['pub-2026-fcgr2a','pub-2026-glp1r','pub-2025-ibd-multitrait','pub-2025-ibd-cross-trait','pub-2024-covid']},
    {id:'metabolic',glyph:'microbe',name:['菌群与代谢','Microbes & metabolism'],title:['从微小生态，走向代谢全局。','Small-scale biology, wider metabolic questions.'],description:['沿着菌群与肥胖、糖尿病与脂肪肝、胆汁酸转运变异三组线索，连接群体证据与分子层面的研究。','Follow three distinct threads: the microbiome and obesity, shared metabolic disease genetics, and bile acid transporter variants.'],papers:['pub-2024-obesity','pub-2026-t2dm-masld','pub-2025-bile-acid']},
    {id:'neuro',glyph:'neuron',name:['神经与遗传','Neurobiology & genetics'],title:['沿遗传之线，探神经之问。','Following genetic clues into neurological disease.'],description:['从重复扩增、基因缺失到共享遗传易感性，研究共济失调、脱髓鞘与卒中相关问题。','Repeat expansions, gene deficiency and shared susceptibility frame questions about ataxia, demyelination and stroke.'],papers:['pub-2025-atxn3','pub-2025-slc20a2','pub-2026-fcgr2a']},
    {id:'platform',glyph:'platform',name:['平台与工具','Platforms & resources'],title:['让分散的数据，成为可用的路径。','Turning dispersed data into usable resources.'],description:['以 pGWAS-Portal 和 SV4GD 为线索，呈现后 GWAS 分析与遗传病结构变异资源的建设。','pGWAS-Portal and SV4GD connect post-GWAS analysis with resources for structural variation in genetic disease.'],papers:['pub-2026-pgwas','pub-2025-sv4gd']}
  ];
  const methods=[
    {id:'genetics',glyph:'helix',name:['遗传解析','Genetic analysis'],title:['从变异出发，读懂共享线索。','Starting with variation and shared genetic signals.'],description:['涉及变异、跨性状与多性状遗传分析，以及后 GWAS 分析平台。具体方法以各篇论文的研究内容为准。','This thread includes variant studies, cross-trait and multi-trait analysis, and a post-GWAS platform. Each paper contributes a different part of that toolkit.']},
    {id:'omics',glyph:'omics',name:['测序与组学','Sequencing & omics'],title:['让不同层次的证据，彼此照见。','Reading across layers of molecular evidence.'],description:['将长读长测序、转录组与多组学整合放在同一条方法脉络中，观察各项研究如何连接不同尺度的证据。','Long-read sequencing, transcriptomics and integrative multi-omics provide complementary views across molecular scales.']},
    {id:'causal',glyph:'causal',name:['因果推断','Causal inference'],title:['由相关起步，向因果追问。','Moving from association towards causal questions.'],description:['孟德尔随机化用于研究潜在因果关系；菌群与肥胖研究还包含双向两样本分析和中介分析。','Mendelian randomization addresses potential causal relationships. The microbiome–obesity study also includes bidirectional two-sample and mediation analyses.']},
    {id:'functional',glyph:'functional',name:['功能与预测','Function & prediction'],title:['让功能研究，与计算判断相遇。','Where functional studies meet computational assessment.'],description:['连接基因缺失相关研究，以及结合功能表征和计算工具的变异致病性评估。','This thread brings together a gene-deficiency study and the use of functional characterization with computational tools for variant assessment.']},
    {id:'resource',glyph:'platform',name:['数据与平台','Data & platforms'],title:['把分析与资源，做成可抵达的入口。','Making analyses and resources easier to reach.'],description:['在线分析平台与结构变异数据库，是科研方法面向使用者的另一种表达。','An online analysis platform and a structural variation database turn research resources into practical entry points.']}
  ];
  const routes={
    'pub-2026-fcgr2a':{methods:['genetics'],short:['FCGR2A · 肠病与卒中','FCGR2A · IBD & stroke']},
    'pub-2026-pgwas':{methods:['genetics','resource'],short:['pGWAS-Portal','pGWAS-Portal']},
    'pub-2026-t2dm-masld':{methods:['genetics'],short:['糖尿病 × 脂肪肝','T2D × MASLD']},
    'pub-2026-glp1r':{methods:['omics'],short:['GLP-1R × 溃疡性结肠炎','GLP-1R × ulcerative colitis']},
    'pub-2025-ibd-multitrait':{methods:['genetics'],short:['IBD · 多性状分析','IBD · multi-trait analysis']},
    'pub-2025-slc20a2':{methods:['functional'],short:['Slc20a2 · 脱髓鞘','Slc20a2 · demyelination']},
    'pub-2025-atxn3':{methods:['omics'],short:['ATXN3 · 重复扩增','ATXN3 · repeat expansions']},
    'pub-2025-bile-acid':{methods:['functional'],short:['胆汁酸转运变异','Bile acid transporter variants']},
    'pub-2025-ibd-cross-trait':{methods:['genetics','omics'],short:['IBD · 跨性状与组学','IBD · cross-trait & omics']},
    'pub-2025-sv4gd':{methods:['resource'],short:['SV4GD · 结构变异','SV4GD · structural variation']},
    'pub-2024-obesity':{methods:['causal'],short:['菌群 × 肥胖','Microbiome × obesity']},
    'pub-2024-covid':{methods:['causal'],short:['细胞因子 × COVID-19','Cytokines × COVID-19']}
  };
  const glyphs={
    immune:'<path class="rm-glyph-outline" d="M40 10C48 4 55 15 63 17S69 31 72 39 62 51 61 61 45 66 38 70 24 61 17 59 12 42 8 35 20 23 23 17 34 15 40 10Z"/><path d="M22 41c0-12 11-22 22-20s18 12 15 23-12 17-23 14-14-9-14-17Z"/><circle class="rm-glyph-beat" cx="41" cy="39" r="9"/><path d="M13 27l8 5m43-8-8 6M24 63l5-9m37-4-9-4"/><circle cx="31" cy="30" r="2"/><circle cx="53" cy="47" r="2"/>',
    microbe:'<g class="rm-glyph-float"><rect x="16" y="11" width="13" height="35" rx="6.5" transform="rotate(30 22 28)"/><path d="m19 24 5 2m-7 5 5 2"/></g><g class="rm-glyph-float rm-glyph-late"><rect x="43" y="34" width="14" height="34" rx="7" transform="rotate(-33 50 51)"/><path d="m46 45 5-3m-1 10 5-3"/></g><circle cx="54" cy="18" r="7"/><circle cx="65" cy="30" r="3"/><circle cx="21" cy="60" r="6"/><circle cx="34" cy="51" r="2"/><path d="M7 44c4 6 5 4 9 7m44 14c8-2 8-4 12-7"/>',
    neuron:'<path d="M36 37 22 24 13 22m9 2 2-13M38 35l6-16 10-8m-10 8 15 3M45 39l16-4 10 6m-10-6 6-11M37 46 24 54 9 52m15 2-4 14M44 45l7 14 15 10m-15-10-3 12"/><path class="rm-glyph-outline" d="M32 33c6-6 14-5 18 3s-3 15-10 15-14-10-8-18Z"/><circle class="rm-glyph-beat" cx="40" cy="41" r="4"/><g class="rm-glyph-dots"><circle cx="13" cy="22" r="2"/><circle cx="54" cy="11" r="2"/><circle cx="71" cy="41" r="2"/><circle cx="20" cy="68" r="2"/></g>',
    platform:'<path d="m40 9 27 14-27 14L13 23 40 9Zm-27 28 27 14 27-14M13 51l27 14 27-14M13 23v14m54-14v14M13 37v14m54-14v14"/><path class="rm-glyph-flow" d="M40 37v28m-19-42 19 10 19-10"/><circle class="rm-glyph-beat" cx="40" cy="23" r="3"/><circle cx="21" cy="54" r="2"/><circle cx="59" cy="54" r="2"/>',
    helix:'<path class="rm-glyph-flow" d="M24 7c0 17 32 17 32 33S24 57 24 73M56 7c0 17-32 17-32 33s32 17 32 33"/><path d="M27 14h26M33 23h14M29 33h22M25 42h30M32 52h16M33 61h14M27 68h26"/>',
    omics:'<path d="m12 20 31-9 25 17-32 10L12 20Zm0 15 24 17 32-10M12 50l24 17 32-10"/><path class="rm-glyph-flow" d="m21 20 9-2 10 7 13-4m-28 20 11 7 15-5m-26 13 11 7 16-5"/><circle cx="40" cy="25" r="2"/><circle cx="36" cy="48" r="2"/><circle cx="51" cy="58" r="2"/>',
    causal:'<circle cx="13" cy="40" r="7"/><circle class="rm-glyph-beat" cx="40" cy="40" r="7"/><circle cx="67" cy="40" r="7"/><path class="rm-glyph-flow" d="M20 40h13m14 0h13"/><path d="m28 36 5 4-5 4m27-8 5 4-5 4M13 26C24 5 56 5 67 26" stroke-dasharray="3 4"/><circle cx="40" cy="13" r="3"/>',
    functional:'<path d="m16 24 11-11c7-7 19 5 12 12L28 36c-7 7-19-5-12-12Zm4-4 12 12"/><path d="M42 39h26v26H42zM51 39v26m8-26v26M42 48h26m-26 9h26M23 44v14h12"/><circle class="rm-glyph-beat" cx="54" cy="52" r="2"/>'
  };
  const glyph=id=>'<svg class="rm-glyph rm-glyph-'+id+'" viewBox="0 0 80 80" aria-hidden="true" focusable="false">'+(glyphs[id]||glyphs.platform)+'</svg>';
  const nodes=[...questions.map(q=>({...q,key:'q:'+q.id,kind:'question'})),...methods.map(m=>({...m,key:'m:'+m.id,kind:'method',papers:papers.filter(p=>routes[p.id]?.methods.includes(m.id)).map(p=>p.id)})),...papers.filter(p=>routes[p.id]).map(p=>({key:'p:'+p.id,id:p.id,kind:'paper',papers:[p.id],name:routes[p.id].short,paper:p}))];
  const nodeByKey=new Map(nodes.map(n=>[n.key,n])),edges=[];
  for(const q of questions)for(const m of methods){const ids=q.papers.filter(id=>routes[id]?.methods.includes(m.id));if(ids.length)edges.push({from:'q:'+q.id,to:'m:'+m.id,papers:ids});}
  for(const p of papers)for(const id of routes[p.id]?.methods||[])edges.push({from:'m:'+id,to:'p:'+p.id,papers:[p.id]});
  let selected='q:immune',preview=null,visible=false,layoutFrame=0,drawCount=0,detailKey='',paperScope=questions[0].papers.slice(),scopeName=questions[0].name;
  const mobile=matchMedia('(max-width:760px)'),reduce=matchMedia('(prefers-reduced-motion:reduce)'),canHover=matchMedia('(hover:hover) and (pointer:fine)');
  root.innerHTML=`<div class="rm-heading"><div><p class="section-eyebrow" data-rm="eyebrow"></p><h3 id="research-map-title" data-rm="title"></h3></div><div class="rm-heading-side"><p data-rm="intro"></p><button type="button" class="rm-overview"><span></span><i aria-hidden="true">↗</i></button></div></div>
    <div class="rm-composition">
      <div class="rm-atlas"><div class="rm-stage">
        <div class="rm-atlas-wash" aria-hidden="true"></div><canvas class="rm-field" aria-hidden="true"></canvas>
        <svg class="rm-contours" viewBox="0 0 800 650" preserveAspectRatio="none" aria-hidden="true"><path d="M19 257C72 42 398 14 648 86S835 408 637 557 105 635 40 430"/><path d="M26 268C88 58 383 28 633 97S811 401 625 541 120 619 54 430"/><path d="M681 26c-31 8-43 34-28 50 13 13 38-3 24-14-8-7-20 4-12 10m-21 18c-38-9-46-39-23-57M44 572h50c25 0 27-31 8-33-12-1-17 14-8 18 5 3 12-3 6-7m-34 34h58"/></svg>
        <div class="rm-question-list" data-rm-list="question"></div>
        <button type="button" class="rm-core" aria-controls="research-map-detail"><span></span><i aria-hidden="true">↗</i></button>
      </div></div>
      <div id="research-map-detail" class="rm-detail" aria-live="off"><div class="rm-detail-copy"><p class="rm-detail-kicker"></p><h4></h4><p class="rm-detail-text"></p><p class="rm-detail-journal"></p></div>
        <div class="rm-method-group"><p class="rm-section-label" data-rm="methods"></p><div class="rm-method-list" data-rm-list="method"></div></div>
        <div class="rm-detail-action"><p class="rm-path-label"></p><button class="rm-read" type="button"><span></span><i aria-hidden="true">↗</i></button></div>
      </div>
    </div>
    <div class="rm-paper-shelf"><div class="rm-shelf-heading"><div><span class="rm-section-label" data-rm="papers"></span><span class="rm-scope-name"></span></div><span class="rm-shelf-count" lang="en"></span></div><div class="rm-paper-list" data-rm-list="paper"></div></div>`;
  const $=s=>root.querySelector(s),buttons=new Map();
  for(const node of nodes){
    const b=document.createElement('button');b.type='button';b.className='rm-node rm-'+node.kind;b.dataset.mapNode=node.key;b.setAttribute('aria-controls','research-map-detail');
    if(node.kind==='question')b.innerHTML='<span class="rm-question-art">'+window.WX_MAP_ART.illustration(node.glyph,'rm-'+node.id)+'</span><span class="rm-question-caption"><span class="rm-node-name"></span><span class="rm-node-count" lang="en"></span></span><span class="rm-question-underline" aria-hidden="true"></span>';
    else if(node.kind==='method')b.innerHTML=glyph(node.glyph)+'<span class="rm-node-name"></span>';
    else b.innerHTML='<span class="rm-paper-gem" aria-hidden="true"><span></span></span><span class="rm-paper-copy"><span class="rm-node-name"></span><span class="rm-paper-year" lang="en">'+node.paper.year+'</span></span><span class="rm-paper-arrow" aria-hidden="true">↗</span>';
    $('[data-rm-list="'+node.kind+'"]').append(b);buttons.set(node.key,b);
  }
  const field=window.WX_MAP_ART.createField($('.rm-field'));
  function active(){return nodeByKey.get(preview||selected)||null;}
  function activePapers(){return active()?.papers||papers.map(p=>p.id);}
  function draw(){layoutFrame=0;if(!root.isConnected)return;const box=$('.rm-stage').getBoundingClientRect(),core=$('.rm-core').getBoundingClientRect(),center={x:(core.left+core.width/2-box.left)/box.width,y:(core.top+core.height*.42-box.top)/box.height},cx=center.x*box.width,cy=center.y*box.height,ids=new Set(activePapers());
    const branches=questions.map(q=>{const r=buttons.get('q:'+q.id).querySelector('.rm-question-art').getBoundingClientRect(),x=r.left+r.width/2-box.left,y=r.top+r.height/2-box.top;return {id:q.id,x,y,c1x:x+(cx-x)*.55,c1y:y-(cy-y)*.15,c2x:cx-(cx-x)*.18,c2y:cy+(y-cy)*.7,active:q.papers.some(id=>ids.has(id))};});field.set(branches,center);drawCount++;
  }
  function queueDraw(){if(!layoutFrame)layoutFrame=requestAnimationFrame(draw);}
  function render(){
    const node=active(),ids=new Set(activePapers()),current=node?.key||'all';root.dataset.mapCurrent=current;root.dataset.mapMode=node?.kind||'overview';root.dataset.mapVisible=String(visible);
    if(!node||node.kind!=='paper'){paperScope=[...ids];scopeName=node?.name||['全部研究','All research'];}else if(!paperScope.includes(node.id)){paperScope=papers.map(p=>p.id);scopeName=['全部研究','All research'];}
    $('[data-rm=eyebrow]').textContent=text(['研究脉络','RESEARCH THREADS']);$('[data-rm=title]').innerHTML=text(['让好奇流动，<br>让线索相逢。','Where questions meet.<br>Where ideas grow.']);$('[data-rm=intro]').textContent=text(['在生命、数据与方法之间，寻一条相连的路。','Across biology, data and methods, discover the connections that shape the work.']);
    $('[data-rm=methods]').textContent=text(['方法沿途','METHODS ALONG THE WAY']);$('[data-rm=papers]').textContent=text(['由此成文','CONNECTED PAPERS']);
    $('.rm-overview span').textContent=text(['纵览研究','All research']);$('.rm-overview').setAttribute('aria-pressed',String(!node));$('.rm-core span').textContent=text(['交汇','CONFLUENCE']);$('.rm-core').setAttribute('aria-label',text(['交汇，查看全部研究','Confluence. Explore all research']));$('.rm-core').setAttribute('aria-pressed',String(!node));
    for(const item of nodes){const b=buttons.get(item.key),related=item.papers.some(id=>ids.has(id));b.dataset.related=String(related);b.setAttribute('aria-pressed',String(item.key===current));b.hidden=item.kind==='paper'&&!paperScope.includes(item.id);b.querySelector('.rm-node-name').innerHTML=item.kind==='paper'?scientific(text(item.name),item.paper):esc(text(item.name));const count=b.querySelector('.rm-node-count');if(count)count.textContent=String(item.papers.length).padStart(2,'0');const name=text(item.name);b.setAttribute('aria-label',item.kind==='paper'?item.paper.title:name+text(['，关联 ','; '])+item.papers.length+text([' 篇论文',' linked papers']));b.title=item.kind==='paper'?item.paper.title:name;}
    const kicker=$('.rm-detail-kicker'),heading=$('.rm-detail-copy h4'),description=$('.rm-detail-text'),journal=$('.rm-detail-journal');
    if(node?.kind==='paper'){const p=node.paper;kicker.textContent=text(['论文一页','A CLOSER LOOK']);heading.innerHTML=scientific(p.title,p);description.innerHTML=scientific(en()?p.summaryEn:p.summary,p);journal.innerHTML='<em class="journal" lang="en">'+esc(p.journal)+'</em><span lang="en"> · '+esc(p.year)+'</span>';journal.hidden=false;}
    else{kicker.textContent=node?text(node.name):text(['四条主线，彼此交汇','FOUR CONNECTED LINES OF INQUIRY']);heading.textContent=node?text(node.title):text(['把散落的星点，连成求知的长河。','A flowing view of questions, methods and papers.']);description.textContent=node?text(node.description):text(['从免疫与代谢，到神经与遗传，再到工具与平台。不同的问题在方法中相遇，也在一篇篇论文中留下足迹。','From immunity and metabolism to neurogenetics and research resources: different questions meet through shared methods and published work.']);journal.hidden=true;}
    $('.rm-path-label').textContent=node?.kind==='paper'?routes[node.id].methods.map(id=>text(methods.find(m=>m.id===id).name)).join(' · '):ids.size+text([' 篇相关论文',' connected papers']);
    $('.rm-read span').textContent=text(node?.kind==='paper'?['定位这篇论文','Read this paper']:['走近这些研究','Explore these papers']);$('.rm-scope-name').textContent=text(scopeName);$('.rm-shelf-count').textContent=String(paperScope.length).padStart(2,'0')+' / '+papers.length;
    document.querySelector('[data-research-map-jump]')?.replaceChildren(document.createTextNode(text(['循着研究脉络看看 ↘','Explore the research map ↘'])));
    const key=current+(en()?'en':'zh');if(detailKey&&detailKey!==key&&!reduce.matches){$('.rm-detail-copy').getAnimations().forEach(a=>a.cancel());$('.rm-detail-copy').animate([{opacity:.25,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration:420,easing:'cubic-bezier(.2,.7,.3,1)'});}detailKey=key;queueDraw();
  }
  function choose(key,{temporary=false}={}){if(key!==null&&!nodeByKey.has(key))return false;if(temporary)preview=key;else{selected=key;preview=null;}render();return true;}
  function revealDetail(){requestAnimationFrame(()=>{const panel=$('.rm-detail'),rect=panel.getBoundingClientRect(),header=document.querySelector('#site-header')?.offsetHeight||80;if(rect.top<header+15||rect.top>innerHeight*.6)window.scrollTo({top:Math.max(0,rect.top+scrollY-header-28),behavior:reduce.matches?'instant':'smooth'});});}
  for(const [key,b]of buttons){b.addEventListener('pointerenter',e=>{if(canHover.matches&&e.pointerType==='mouse')choose(key,{temporary:true});});b.addEventListener('click',()=>{choose(key);if(nodeByKey.get(key).kind==='paper')revealDetail();});b.addEventListener('focus',()=>{if(root.dataset.keyboard==='true')choose(key,{temporary:true});});b.addEventListener('keydown',e=>{
    if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const node=nodeByKey.get(key),kinds=['question','method','paper'];let kind=node.kind,list=[...buttons].filter(([k,b])=>nodeByKey.get(k).kind===kind&&!b.hidden),i=list.findIndex(([k])=>k===key);
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){kind=kinds[Math.max(0,Math.min(2,kinds.indexOf(kind)+(e.key==='ArrowRight'?1:-1)))];const next=[...buttons].filter(([k,b])=>nodeByKey.get(k).kind===kind&&!b.hidden);i=Math.min(next.length-1,Math.round(i/Math.max(1,list.length-1)*(next.length-1)));list=next;}else i=e.key==='Home'?0:e.key==='End'?list.length-1:(i+(e.key==='ArrowDown'?1:-1)+list.length)%list.length;
    const item=list[i];if(item){choose(item[0]);item[1].focus({preventScroll:true});}
  });}
  root.addEventListener('keydown',()=>root.dataset.keyboard='true');root.addEventListener('pointerdown',()=>root.dataset.keyboard='false');
  root.addEventListener('pointerleave',()=>{if(preview){preview=null;render();}});root.addEventListener('focusout',()=>queueMicrotask(()=>{if(!root.contains(document.activeElement)&&preview){preview=null;render();}}));
  $('.rm-overview').addEventListener('click',()=>choose(null));$('.rm-core').addEventListener('click',()=>choose(null));$('.rm-read').addEventListener('click',()=>{const node=active(),ids=activePapers();if(node?.kind==='paper')window.WX_PUBLICATIONS?.focus(node.id);else window.WX_PUBLICATIONS?.show(ids,node?{zh:node.name[0],en:node.name[1]}:{zh:'全部研究',en:'All research'});});
  new ResizeObserver(queueDraw).observe($('.rm-stage'));new IntersectionObserver(es=>{visible=es[0].isIntersecting;root.dataset.mapVisible=String(visible);if(visible)queueDraw();},{rootMargin:'100px 0px'}).observe(root);mobile.addEventListener('change',render);addEventListener('languagechange',render);document.fonts?.ready.then(queueDraw);
  window.WX_RESEARCH_MAP={select:key=>choose(key),reset:()=>choose(null),info:()=>({selected,preview,current:active()?.key||'all',papers:activePapers().slice(),visiblePapers:paperScope.slice(),questions:questions.length,methods:methods.length,paperCount:papers.length,edges:edges.length,drawCount,mobile:mobile.matches,art:field.info(),mappings:questions.map(q=>({id:q.id,papers:q.papers.slice()})),routes:Object.fromEntries(Object.entries(routes).map(([id,r])=>[id,r.methods.slice()]))})};
  render();
})();

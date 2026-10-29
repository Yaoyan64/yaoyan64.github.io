/* DOI/title-verified Crossref counts. Failed requests retain the last verified value. */
(() => {
  'use strict';
  const papers=window.PUBLICATIONS||[],seed=window.WX_CITATION_DATA||{records:{}},ttl=21600000,retryDelay=300000,storageKey='wx-citations-crossref-v1';
  const records={},english=()=>document.documentElement.lang==='en',tr=(zh,en)=>english()?en:zh,time=v=>Date.parse(v)||0;
  const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const valid=(r,p)=>Boolean(r&&p.doi&&r.source==='Crossref'&&r.doi?.toLowerCase()===p.doi.toLowerCase()&&Number.isSafeInteger(r.count)&&r.count>=0&&Number.isFinite(Date.parse(r.checkedAt)));
  let cached;try{cached=JSON.parse(localStorage.getItem(storageKey)||'null');}catch{}
  for(const p of papers){const a=seed.records?.[p.id],b=cached?.records?.[p.id];records[p.id]=valid(b,p)&&(!valid(a,p)||time(b.checkedAt)>time(a.checkedAt)||(time(b.checkedAt)===time(a.checkedAt)&&time(b.lastAttemptAt)>=time(a.lastAttemptAt)))?b:valid(a,p)?a:{doi:p.doi||null,count:null,source:'Crossref',checkedAt:null,status:p.doi?'unavailable':'no-doi'};}
  let attemptedAt=Math.max(time(seed.fetchedAt),time(cached?.attemptedAt)),pending=null,retryTimer=0,inView=false,sync={phase:'idle',completed:0,total:0,failed:0,at:null};
  const verified=p=>valid(records[p.id],p)?records[p.id]:null,maxCount=()=>Math.max(1,...papers.map(p=>verified(p)?.count||0));
  const scholarURL=p=>'https://scholar.google.com/scholar?q='+encodeURIComponent(p.doi||'"'+p.title.replace(/\.$/,'')+'"');
  const dateText=v=>new Intl.DateTimeFormat(english()?'en-US':'zh-CN',{year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date(v));
  function badgeHTML(p){
    const r=verified(p);if(!r||r.count===0)return '';const stale=r.status==='stale',date=dateText(r.checkedAt);
    const detail=tr('Crossref 被引次数：'+r.count+'。核验时间：'+date+'。'+(stale?'最近刷新暂不可用，保留上次核验值。':'')+'Crossref 与 Google Scholar 的收录范围不同。','Crossref Cited-by: '+r.count+'. Checked '+date+'. '+(stale?'The latest refresh was unavailable; this is the last verified value. ':'')+'Crossref coverage differs from Google Scholar.');
    const strength=.12+.27*Math.pow(r.count/maxCount(),.65),label=tr('引用 '+r.count+' · Crossref',r.count+' citations · Crossref'),id='citation-detail-'+p.id;
    return '<span class="citation-wrap"><button type="button" class="citation-badge" data-citation-toggle="'+escape(p.id)+'" data-citation-count="'+r.count+'" style="--citation-fill:'+Math.round(strength*100)+'%" title="'+escape(detail)+'" aria-label="'+escape(label+tr('，查看来源与核验时间','; show source and check time'))+'" aria-expanded="false" aria-controls="'+id+'" aria-describedby="'+id+'">'+escape(label)+'</button><span class="citation-popover" id="'+id+'" role="tooltip" hidden>'+escape(detail)+'</span></span>';
  }
  function scholarHTML(p){return '<a class="scholar-link" href="'+escape(scholarURL(p))+'" target="_blank" rel="noopener noreferrer" aria-label="'+escape(tr('在 Google Scholar 中检索：','Find in Google Scholar: ')+p.title)+'">Google Scholar ↗</a>';}
  const normalize=t=>String(t||'').normalize('NFKC').toLowerCase().replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
  function titleMatches(a,b){const x=normalize(a),y=normalize(b);if(x===y)return true;const A=new Set(x.split(' ')),B=new Set(y.split(' '));return [...A].filter(w=>B.has(w)).length/Math.max(1,new Set([...A,...B]).size)>=.88;}
  function failed(p,status,now){const old=verified(p);records[p.id]=old?{...old,status:'stale',lastAttemptAt:now,lastError:status}:{doi:p.doi,count:null,source:'Crossref',checkedAt:null,lastAttemptAt:now,status};}
  function due(p,now=Date.now()){if(!p.doi)return false;const r=records[p.id],age=now-time(r?.checkedAt);if(valid(r,p)&&r.status==='verified'&&age>=0&&age<ttl)return false;const attemptAge=now-time(r?.lastAttemptAt);return !(r?.status!=='verified'&&attemptAge>=0&&attemptAge<retryDelay);}
  const controls=document.createElement('div');controls.className='citation-controls';controls.innerHTML='<button type="button" class="citation-refresh"><span class="citation-refresh-icon" aria-hidden="true">↻</span><span></span></button><span class="citation-status" role="status" aria-live="polite"></span>';
  const host=document.querySelector('.publication-subtools');host?.insertBefore(controls,host.querySelector('.count-and-reset'));
  const button=controls.querySelector('button'),status=controls.querySelector('.citation-status');
  function renderStatus(){
    const busy=sync.phase==='refreshing';button.disabled=busy;button.setAttribute('aria-busy',String(busy));controls.dataset.state=sync.phase;button.lastElementChild.textContent=tr(busy?'更新中':'更新引用',busy?'Updating':'Refresh citations');
    const dates=papers.map(verified).filter(Boolean).map(r=>time(r.checkedAt)),oldest=dates.length?Math.min(...dates):0;
    let text=oldest?'Crossref · '+new Intl.DateTimeFormat(english()?'en-GB':'zh-CN',{month:'short',day:'numeric'}).format(new Date(oldest)):tr('等待核验','Awaiting a check');
    if(busy)text=tr('正在核验 ','Checking ')+sync.completed+'/'+sync.total;
    else if(sync.phase==='offline')text=tr('离线 · 保留缓存','Offline · cached values');
    else if(sync.phase==='error')text=tr('暂未连通 · 保留缓存','Unavailable · cached values');
    else if(sync.phase==='partial')text=tr('部分更新 · 其余保留','Partly refreshed · cache retained');
    else if(sync.phase==='updated')text=tr('已核验 · ','Checked · ')+new Intl.DateTimeFormat(english()?'en-GB':'zh-CN',{hour:'2-digit',minute:'2-digit'}).format(new Date(sync.at));
    else if(papers.some(p=>records[p.id]?.status==='stale'))text=tr('上次核验数据','Previously verified values');
    status.textContent=text;const detail=tr('数据源：Crossref。自动刷新间隔为 6 小时；点击可立即重新核验。接口收录有延迟，数值不等同于 Google Scholar。','Source: Crossref. Automatic checks are six hours apart; use this button to check now. Indexing can lag, and counts differ from Google Scholar.');button.title=detail;status.title=detail+(oldest?tr(' 较早核验时间：',' Oldest available check: ')+dateText(oldest):'');
  }
  function scheduleRetry(){clearTimeout(retryTimer);if(!inView||document.hidden||navigator.onLine===false)return;const indexed=papers.filter(p=>p.doi);if(!indexed.length)return;const delay=Math.max(1000,Math.min(...indexed.map(p=>{const r=records[p.id];return (valid(r,p)&&r.status==='verified'?time(r.checkedAt)+ttl:time(r?.lastAttemptAt)+retryDelay)-Date.now();}))+100);retryTimer=setTimeout(()=>refresh(),delay);}
  async function refresh({force=false}={}){
    if(pending)return pending;
    if(navigator.onLine===false){sync.phase='offline';renderStatus();return {status:'offline'};}
    const indexed=papers.filter(p=>p.doi&&(force||due(p)));if(!indexed.length){renderStatus();scheduleRetry();return {status:'cached'};}
    clearTimeout(retryTimer);sync={phase:'refreshing',completed:0,total:indexed.length,failed:0,at:null};renderStatus();
    const task=(async()=>{let cursor=0;attemptedAt=Date.now();
      await Promise.all(Array.from({length:1},async()=>{while(cursor<indexed.length){const p=indexed[cursor++],now=new Date().toISOString(),controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),12000);
        try{const response=await fetch('https://api.crossref.org/works/'+encodeURIComponent(p.doi),{signal:controller.signal,credentials:'omit',cache:'no-cache',headers:{Accept:'application/json'}});
          if(!response.ok){failed(p,response.status===404?'not-indexed':response.status===429?'rate-limited':'fetch-failed',now);sync.failed++;continue;}
          const message=(await response.json()).message,count=message?.['is-referenced-by-count'];
          if(message?.DOI?.toLowerCase()!==p.doi.toLowerCase()||!titleMatches(p.title,message?.title?.[0])){failed(p,'metadata-mismatch',now);sync.failed++;continue;}
          if(!Number.isSafeInteger(count)||count<0){failed(p,'count-unavailable',now);sync.failed++;continue;}
          records[p.id]={doi:p.doi,count,source:'Crossref',checkedAt:now,lastAttemptAt:now,status:'verified',crossrefTitle:message.title[0]};
        }catch{failed(p,'fetch-failed',now);sync.failed++;}finally{clearTimeout(timeout);sync.completed++;renderStatus();if(cursor<indexed.length)await new Promise(resolve=>setTimeout(resolve,300));}
      }}));
      sync.phase=sync.failed===sync.total?'error':sync.failed?'partial':'updated';sync.at=new Date().toISOString();try{localStorage.setItem(storageKey,JSON.stringify({attemptedAt:new Date(attemptedAt).toISOString(),records}));}catch{}
      renderStatus();dispatchEvent(new CustomEvent('citationschange',{detail:{source:'Crossref',status:sync.phase,attemptedAt:sync.at}}));return {status:sync.phase,updated:sync.total-sync.failed,failed:sync.failed};
    })();pending=task;try{return await task;}finally{pending=null;scheduleRetry();}
  }
  button.addEventListener('click',()=>refresh({force:true}));
  window.WX_CITATIONS=Object.freeze({badgeHTML,scholarHTML,scholarURL,refresh,info:()=>({source:'Crossref',max:maxCount(),attemptedAt:new Date(attemptedAt||0).toISOString(),sync:{...sync},automaticInterval:ttl,retryDelay,records:JSON.parse(JSON.stringify(records))})});
  const closePopovers=except=>document.querySelectorAll('.citation-wrap').forEach(w=>{if(w===except)return;w.querySelector('.citation-popover').hidden=true;w.querySelector('.citation-badge').setAttribute('aria-expanded','false');});
  document.addEventListener('click',e=>{const b=e.target.closest('[data-citation-toggle]');if(b){const w=b.closest('.citation-wrap'),p=w.querySelector('.citation-popover'),open=p.hidden;closePopovers(w);p.hidden=!open;b.setAttribute('aria-expanded',String(open));if(open){p.style.left='0px';const box=w.getBoundingClientRect();p.style.left=Math.max(16-box.left,Math.min(0,document.documentElement.clientWidth-16-box.left-p.offsetWidth))+'px';}}else if(!e.target.closest('.citation-wrap'))closePopovers();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){const b=document.querySelector('.citation-badge[aria-expanded="true"]');if(b){closePopovers();b.focus({preventScroll:true});}}});
  document.addEventListener('focusin',e=>{if(!e.target.closest('.citation-wrap'))closePopovers();});addEventListener('languagechange',renderStatus);
  addEventListener('online',()=>{if(inView)refresh({force:sync.phase==='offline'||sync.phase==='error'});});addEventListener('offline',()=>{if(!pending){sync.phase='offline';renderStatus();}clearTimeout(retryTimer);});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(retryTimer);else if(inView)refresh();});
  const section=document.getElementById('publications');if(section&&'IntersectionObserver' in window)new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView&&!document.hidden)refresh();else clearTimeout(retryTimer);},{rootMargin:'120px 0px'}).observe(section);else setTimeout(()=>{inView=true;refresh();},1800);
  renderStatus();
})();

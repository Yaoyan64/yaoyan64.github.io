/* Run synchronously in <head>: the first visible frame belongs to the prelude. */
(() => {
  'use strict';
  const root=document.documentElement,key='wx-intro-seen-v13-dipper';
  const params=new URLSearchParams(location.search);
  let seen=false;try{seen=sessionStorage.getItem(key)==='1';}catch{}
  const eligible=!seen&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&!(location.hash&&location.hash!=='#home')&&!params.has('gate')&&!/\/resume\.html(?:[?#]|$)/.test(document.referrer);
  const boot={eligible,claimed:false,expired:false,key,previousMotion:root.dataset.motion||'running',started:performance.now(),timer:0};
  window.WX_INTRO_BOOT=boot;
  /* Inline critical rules prevent slow external CSS exposing the homepage.
     With JavaScript disabled this gate never hides any document content. */
  const critical=document.createElement('style');critical.id='intro-critical';
  critical.textContent='html[data-intro="boot"],html[data-intro="open"]{background:#f7f3eb!important}html[data-intro="boot"]{overflow:hidden!important}html[data-intro="boot"]:before{content:"";position:fixed;inset:0;background:#f7f3eb;z-index:2147483600;pointer-events:none}html[data-intro="boot"] body>*:not(#cover-intro){visibility:hidden!important}html[data-intro="open"] body>:is(#site-header,#main,.footer){opacity:0!important}html[data-intro="revealing"] body>:is(#site-header,#main,.footer){opacity:var(--intro-page-opacity,0)!important}html[data-intro="open"],html[data-intro="revealing"]{overflow:hidden!important}';
  document.head.append(critical);
  boot.release=reason=>{clearTimeout(boot.timer);boot.timer=0;boot.expired=true;boot.reason=reason;if(root.dataset.intro==='boot'){root.dataset.intro='closed';root.dataset.motion=boot.previousMotion;}};
  boot.claim=()=>{if(boot.expired||!boot.eligible)return false;boot.claimed=true;clearTimeout(boot.timer);boot.timer=0;return true;};
  if(!eligible){root.dataset.intro='closed';return;}
  root.dataset.intro='boot';root.dataset.motion='paused';
  ['curiosity-art','cover-cell','cover-science','cover-nejm','cover-bmj','cover-lancet','cover-jama'].forEach(name=>{const link=document.createElement('link');link.rel='preload';link.as='image';link.href='assets/'+name+'.webp?v=13';document.head.append(link);});
  boot.timer=setTimeout(()=>boot.release('script-timeout'),10000);
})();

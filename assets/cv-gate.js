/* A playful reading gate, not authentication or protection of the static CV source. Load synchronously in <head>. */
(() => {
  'use strict';
  const key='wx-cv-pass-v11',now=Date.now(),url=new URL(location.href);
  const valid=token=>{
    if(typeof token!=='string'||!/^v11\.[0-9a-z]+\.[0-9a-f]{32}$/.test(token))return false;
    const expires=parseInt(token.split('.')[1],36);
    return Number.isFinite(expires)&&expires>now&&expires<=now+605000;
  };
  const fragment=new URLSearchParams(url.hash.slice(1));
  let token=fragment.get('cv-pass'),stored=false;
  if(!valid(token)){try{token=sessionStorage.getItem(key);}catch{token=null;}}
  if(valid(token)){
    try{sessionStorage.setItem(key,token);stored=true;}catch{}
    if(fragment.has('cv-pass')&&stored){fragment.delete('cv-pass');url.hash=fragment.toString();try{history.replaceState(null,'',url);}catch{}}
    window.WX_CV_ACCESS={allowed:true,expiresAt:parseInt(token.split('.')[1],36)};
    return;
  }
  try{sessionStorage.removeItem(key);}catch{}
  document.documentElement.style.visibility='hidden';
  window.WX_CV_ACCESS={allowed:false};
  const language=url.searchParams.get('lang')==='zh'?'zh':'en';
  const home=new URL('../index.html',url);home.searchParams.set('gate','cv');home.searchParams.set('lang',language);
  location.replace(home.href);
})();

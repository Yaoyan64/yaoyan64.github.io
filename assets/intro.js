/* Seven cover studies settle into an artistic Dipper-shaped composition.
   The arrangement is editorial art, not an astronomical chart. */
(() => {
  'use strict';
  const root=document.documentElement,reduced=matchMedia('(prefers-reduced-motion: reduce)'),boot=window.WX_INTRO_BOOT;
  if(!document.getElementById('home')){boot?.release('no-home');return;}
  const TAU=Math.PI*2,ENTRY=6800,HOLD=6400,DISSOLVE=2800,TOTAL=ENTRY+HOLD+DISSOLVE;
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),smooth=v=>{v=clamp(v);return v*v*(3-2*v);},sine=v=>(1-Math.cos(clamp(v)*Math.PI))/2;
  const seed=n=>{const a=Math.sin(n*127.1+311.7)*43758.5453123;return a-Math.floor(a);};
  const covers=[
    {key:'nature',masthead:'Nature',image:'curiosity-art.webp',deck:'LIFE, DATA & INQUIRY',title:'A wider world within the small.'},
    {key:'cell',masthead:'Cell',image:'cover-cell.webp',deck:'MICROBES · METABOLISM · IMMUNITY',title:'Small lives, wide connections.'},
    {key:'science',masthead:'Science',image:'cover-science.webp',deck:'DATA · ALGORITHMS · DISCOVERY',title:'From fragments to understanding.'},
    {key:'nejm',masthead:'<i>The</i> NEW ENGLAND<br>JOURNAL <i>of</i> MEDICINE',image:'cover-nejm.webp',deck:'NEUROLOGY · GENETICS',title:'Following the clues of inheritance.'},
    {key:'bmj',masthead:'<span class="masthead-the">the</span> bmj',image:'cover-bmj.webp',deck:'GENETIC INSTRUMENTS · CAUSAL INFERENCE',title:'From association to better questions.'},
    {key:'lancet',masthead:'THE LANCET',image:'cover-lancet.webp',deck:'SHARED GENETICS · SYSTEMIC IMMUNITY',title:'Finding the threads that connect.'},
    {key:'jama',masthead:'JAMA',image:'cover-jama.webp',deck:'CROSS-TRAIT GENETICS · METABOLISM',title:'When separate evidence meets.'}
  ];
  const dialog=document.createElement('dialog');dialog.id='cover-intro';dialog.className='cover-intro';dialog.lang='en';dialog.tabIndex=-1;
  dialog.setAttribute('aria-label','Seven original research cover studies');dialog.setAttribute('aria-describedby','intro-accessible');
  dialog.innerHTML='<p id="intro-accessible" class="intro-sr">Seven original research cover studies drift into an artistic Dipper-shaped constellation, rest for a moment and dissolve into the homepage. This automatic prelude lasts sixteen seconds. Press Escape to enter the site.</p><canvas class="intro-starlines" aria-hidden="true"></canvas><div class="intro-cover-stage"></div><canvas class="intro-pigment" aria-hidden="true"></canvas>';
  const stage=dialog.querySelector('.intro-cover-stage'),canvas=dialog.querySelector('.intro-pigment'),ctx=canvas.getContext('2d'),skyCanvas=dialog.querySelector('.intro-starlines'),sky=skyCanvas.getContext('2d');
  const safeProbe=document.createElement('span');safeProbe.setAttribute('aria-hidden','true');safeProbe.style.cssText='position:absolute;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)';dialog.append(safeProbe);
  covers.forEach(cover=>{const article=document.createElement('article');article.className='intro-cover cover-'+cover.key;article.dataset.introCover=cover.key;article.innerHTML='<img class="intro-cover-art" src="assets/'+cover.image+'?v=13" width="1122" height="1402" decoding="async" alt=""><div class="cover-masthead">'+cover.masthead+'</div><div class="cover-bottom"><p class="cover-deck">'+cover.deck+'</p><h2>'+cover.title+'</h2></div>';stage.append(article);cover.element=article;cover.img=article.querySelector('img');});
  document.body.append(dialog);
  const replay=document.createElement('button');replay.type='button';replay.id='replay-intro';document.querySelector('.footer>div')?.prepend(replay);
  let opened=false,pending=false,phase='idle',generation=0,frame=0,safetyTimer=0,start=0,elapsed=0,frames=0,width=0,height=0,dpr=1,cardWidth=1,cardHeight=1,portrait=false;
  let lastFrame=0,totalFrameMs=0,maxFrameMs=0,slowFrames=0,totalDrawMs=0,maxDrawMs=0,maxDrawPhase='idle';
  let previousFocus=null,previousMotion='running',bodyOverflow='',rootOverflow='',inertElements=[],particles=[],particlesBuilt=false,backgroundRestored=false;
  const poses=[],anchors=[],depths=[1.025,.95,1.02,.97,.94,1,.95],tilts=[2.1,-1.6,1.2,-1.8,1.5,-1.3,1.8],links=[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]];
  const dust=Array.from({length:96},(_,i)=>({x:seed(i+1),y:seed(i+302),r:.45+seed(i+201)*1.15,phase:seed(i+311)*TAU,warm:seed(i+81)>.52}));
  const seenKey=boot?.key||'wx-intro-seen-v13-dipper';
  function paintReplay(){replay.textContent=root.lang==='en'?'Replay prelude':'重看序章';}
  function markSeen(){try{sessionStorage.setItem(seenKey,'1');}catch{}}
  function announce(reason){dispatchEvent(new CustomEvent('wxintrocomplete',{detail:{reason,total:covers.length}}));}
  function pauseBackground(){previousMotion=boot?.claimed&&!boot.expired?boot.previousMotion:(window.WX_SCENES?.getMotion?.()||root.dataset.motion||'running');backgroundRestored=false;if(window.WX_SCENES?.setMotion)window.WX_SCENES.setMotion(false);else root.dataset.motion='paused';}
  function restoreBackground(){if(backgroundRestored)return;backgroundRestored=true;if(window.WX_SCENES?.setMotion)window.WX_SCENES.setMotion(previousMotion==='running'&&!reduced.matches);else root.dataset.motion=previousMotion==='running'&&!reduced.matches?'running':'paused';}
  function focusPage(){if(previousFocus&&previousFocus!==document.body&&previousFocus.isConnected&&!previousFocus.inert){previousFocus.focus({preventScroll:true});return;}const main=document.getElementById('main');if(!main)return;const old=main.getAttribute('tabindex');main.setAttribute('tabindex','-1');main.classList.add('intro-entry-focus');main.focus({preventScroll:true});main.addEventListener('blur',()=>{main.classList.remove('intro-entry-focus');if(old===null)main.removeAttribute('tabindex');else main.setAttribute('tabindex',old);},{once:true});}
  function releasePage(){inertElements.forEach(({el,inert})=>el.inert=inert);inertElements=[];document.body.style.overflow=bodyOverflow;root.style.overflow=rootOverflow;root.style.removeProperty('--intro-page-opacity');}
  function close(reason='complete'){
    generation++;pending=false;cancelAnimationFrame(frame);frame=0;clearTimeout(safetyTimer);safetyTimer=0;boot?.release(reason);
    const wasOpen=opened;opened=false;phase='closed';root.dataset.intro='closed';
    if(dialog.open)dialog.close();else dialog.removeAttribute('open');
    if(wasOpen){releasePage();restoreBackground();focusPage();}else if(boot?.eligible){if(window.WX_SCENES?.setMotion)window.WX_SCENES.setMotion(boot.previousMotion==='running'&&!reduced.matches);else root.dataset.motion=boot.previousMotion;}
    markSeen();announce(reason);
  }
  function fit(){
    width=innerWidth;height=innerHeight;portrait=width/height<1.15;
    dpr=Math.min(devicePixelRatio||1,width<700?1.5:1.6,Math.sqrt(7500000/(width*height)));
    const safe=getComputedStyle(safeProbe),phoneLandscape=!portrait&&width<=1024&&height<=600,left=Math.max(parseFloat(safe.paddingLeft)||0,phoneLandscape?44:0),right=Math.max(parseFloat(safe.paddingRight)||0,phoneLandscape?44:0),top=parseFloat(safe.paddingTop)||0,bottom=parseFloat(safe.paddingBottom)||0,availableWidth=Math.max(1,width-left-right),availableHeight=Math.max(1,height-top-bottom);
    const layout=portrait?[[.25,.14],[.76,.17],[.75,.36],[.28,.33],[.24,.52],[.62,.68],[.48,.88]]:[[.84,.27],[.82,.70],[.59,.69],[.60,.32],[.43,.26],[.27,.40],[.11,.60]];
    anchors.splice(0,anchors.length,...layout.map(([x,y])=>({x:left+availableWidth*x,y:top+availableHeight*y})));
    cardWidth=Math.min(portrait?availableWidth*.255:availableWidth*.118,portrait?availableHeight*.144:availableHeight*.24,420);
    // Keep generous breathing space even on short screens and browser split views.
    for(let pass=0;pass<16;pass++){
      const bounds=anchors.map((p,i)=>{const a=(Math.abs(tilts[i])+1)*Math.PI/180,w=cardWidth*depths[i],h=w*1402/1122;return{x:p.x,y:p.y,w:w*Math.cos(a)+h*Math.sin(a),h:h*Math.cos(a)+w*Math.sin(a)};});
      const outside=bounds.some(b=>b.x-b.w/2<left+14||b.x+b.w/2>width-right-14||b.y-b.h/2<top+16||b.y+b.h/2>height-bottom-16);
      const crowded=bounds.some((a,i)=>bounds.some((b,j)=>j>i&&Math.abs(a.x-b.x)<(a.w+b.w)/2+10&&Math.abs(a.y-b.y)<(a.h+b.h)/2+12));
      if(!outside&&!crowded)break;cardWidth*=.95;
    }
    cardHeight=cardWidth*1402/1122;
    [[canvas,ctx],[skyCanvas,sky]].forEach(([c,g])=>{c.width=Math.round(width*dpr);c.height=Math.round(height*dpr);c.style.width=width+'px';c.style.height=height+'px';g.setTransform(dpr,0,0,dpr,0,0);});
    dialog.style.setProperty('--orbit-cover-width',cardWidth+'px');dialog.dataset.layout=portrait?'portrait':'landscape';
    if(opened&&phase==='dissolving')particlesBuilt=false;
  }
  function bezier(a,b,c,d,t){const s=1-t;return s*s*s*a+3*s*s*t*b+3*s*t*t*c+t*t*t*d;}
  function pose(i,time){
    const target=anchors[i],q=clamp((time-i*450)/(ENTRY-6*450)),e=smooth(q),settled=q>=1;
    const startX=width+cardWidth*.85,startY=height+cardHeight*.4;
    const bendX=target.x+Math.min(width*.14,180),bendY=target.y+Math.min(height*.17,155);
    const breathe=smooth((time-ENTRY)/1600),amp=Math.min(width,height)*.0028;
    const driftX=Math.sin((time-ENTRY)*.00047+i*.7)*amp*breathe,driftY=Math.sin((time-ENTRY)*.00061+i*.9)*amp*breathe;
    const x=bezier(startX,width*.91,bendX,target.x,e)+driftX,y=bezier(startY,height*.88,bendY,target.y,e)+driftY;
    const tilt=tilts[i]+(1-e)*(portrait?-3:-5)+Math.sin((time-ENTRY)*.00048+i)*.36*breathe;
    return{x,y,alpha:smooth(q*4),scale:depths[i]*(.82+.18*e),tilt,z:Math.round(depths[i]*20)+i,q,settled};
  }
  function drawCovers(time){
    const fade=smooth((time-ENTRY-HOLD)/1680);
    covers.forEach((cover,i)=>{const p=pose(i,Math.min(time,ENTRY+HOLD));poses[i]=p;cover.element.style.transform='translate3d('+p.x.toFixed(2)+'px,'+p.y.toFixed(2)+'px,0) translate(-50%,-50%) rotate('+p.tilt.toFixed(2)+'deg) scale('+p.scale.toFixed(4)+')';cover.element.style.opacity=(p.alpha*(1-fade)).toFixed(4);cover.element.style.zIndex=String(p.z);});
  }
  function drawSky(time){
    sky.clearRect(0,0,width,height);const vanish=1-smooth((time-ENTRY-HOLD+120)/2200),arrival=smooth(time/1800),unit=Math.max(.75,Math.min(width,height)/850);
    if(vanish<.003)return;
    sky.save();sky.lineCap='round';sky.lineJoin='round';
    // A few fine arcs frame the composition like the edge of a celestial scroll.
    const arcIn=arrival*vanish;sky.strokeStyle='#ad9466';sky.lineWidth=.7*unit;sky.globalAlpha=.21*arcIn;
    sky.beginPath();if(portrait){sky.moveTo(width*.06,height*.16);sky.bezierCurveTo(width*.035,height*.47,width*.91,height*.45,width*.89,height*.85);}else{sky.moveTo(width*.065,height*.69);sky.bezierCurveTo(width*.29,height*.91,width*.77,height*.055,width*.935,height*.31);}sky.stroke();
    sky.strokeStyle='#6d9391';sky.globalAlpha=.18*arcIn;sky.beginPath();if(portrait){sky.moveTo(width*.12,height*.09);sky.bezierCurveTo(width*.92,height*.04,width*.99,height*.77,width*.36,height*.96);}else{sky.moveTo(width*.12,height*.29);sky.bezierCurveTo(width*.30,height*.12,width*.76,height*.91,width*.91,height*.65);}sky.stroke();
    const count=portrait?62:dust.length;
    for(let i=0;i<count;i++){const s=dust[i],f=.5+.5*Math.sin(time*.00055+s.phase),x=s.x*width+Math.sin(time*.0001+s.phase)*5,y=s.y*height-Math.sin(time*.00013+s.phase)*4;sky.globalAlpha=(.08+.22*f)*arrival*vanish;sky.fillStyle=s.warm?'#b59053':'#6e9792';sky.beginPath();sky.arc(x,y,s.r*unit,0,TAU);sky.fill();if(i%13===0){sky.lineWidth=.55*unit;sky.strokeStyle=s.warm?'#b59053':'#769b95';sky.beginPath();sky.moveTo(x-4*unit,y);sky.lineTo(x+4*unit,y);sky.moveTo(x,y-4*unit);sky.lineTo(x,y+4*unit);sky.stroke();}}
    links.forEach(([ia,ib],i)=>{
      const progress=smooth((time-(Math.max(ia,ib)*450+(ENTRY-6*450)-350))/1100);if(progress<=0)return;
      const a=poses[ia],b=poses[ib],x=a.x+(b.x-a.x)*progress,y=a.y+(b.y-a.y)*progress;
      sky.globalAlpha=.43*vanish;sky.strokeStyle=i<4?'#af966b':'#76948a';sky.lineWidth=.85*unit;sky.beginPath();sky.moveTo(a.x,a.y);sky.lineTo(x,y);sky.stroke();
      if(progress>.99){const travel=((time*.000045+i*.19)%1),tx=a.x+(b.x-a.x)*travel,ty=a.y+(b.y-a.y)*travel;sky.globalAlpha=.5*vanish;sky.fillStyle='#c0a070';sky.beginPath();sky.arc(tx,ty,1.2*unit,0,TAU);sky.fill();}
    });
    poses.forEach((p,i)=>{const a=smooth((p.q-.75)/.25)*vanish;if(a<.01)return;const x=p.x+cardWidth*p.scale*.535,y=p.y-cardHeight*p.scale*.43;sky.globalAlpha=.5*a;sky.strokeStyle=i%2?'#819e95':'#b79a68';sky.lineWidth=.75*unit;sky.beginPath();sky.arc(x,y,3.1*unit,0,TAU);sky.stroke();sky.globalAlpha=.72*a;sky.fillStyle='#bca170';sky.beginPath();sky.arc(x,y,1.1*unit,0,TAU);sky.fill();});
    sky.restore();
  }
  function preparePigments(){
    const sampler=document.createElement('canvas');sampler.width=15;sampler.height=19;const sample=sampler.getContext('2d',{willReadFrequently:true});
    // Read image pixels before starting the timeline. A GPU readback at the
    // first dissolving frame can otherwise introduce a visible one-frame hitch.
    covers.forEach(cover=>{if(cover.pigmentReady)return;try{sample.clearRect(0,0,15,19);sample.drawImage(cover.img,0,0,15,19);cover.pigmentColors=sample.getImageData(0,0,15,19).data;}catch{cover.pigmentColors=null;}cover.pigmentReady=true;});
  }
  function makeParticles(){
    particles=[];const columns=width<650?10:15,rows=width<650?13:19;
    covers.forEach((cover,i)=>{const pixels=cover.pigmentColors;
      const p=poses[i],rot=p.tilt*Math.PI/180,co=Math.cos(rot),si=Math.sin(rot),direction=Math.atan2(p.y-height*.5,p.x-width*.5);
      for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){
        const n=i*1000+row*columns+col,xx=((col+.2+seed(n)*.6)/columns-.5)*cardWidth*p.scale,yy=((row+.2+seed(n+104)*.6)/rows-.5)*cardHeight*p.scale,idx=(Math.floor((row+.5)/rows*19)*15+Math.floor((col+.5)/columns*15))*4;
        const color=pixels?[pixels[idx],pixels[idx+1],pixels[idx+2]]:[[35,103,110],[111,151,146],[196,89,63],[221,154,111],[191,159,101],[230,219,193]][Math.floor(seed(n+99)*6)];
        particles.push({x:p.x+xx*co-yy*si,y:p.y+xx*si+yy*co,vx:Math.cos(direction+Math.PI*.5)*(9+seed(n+31)*21)+(seed(n+204)-.5)*18,vy:-12-seed(n+22)*25,delay:seed(n+25)*.34,life:1.8+seed(n+81)*.7,r:(.7+seed(n+70)*1.8)*Math.max(.75,cardWidth/160),color:'rgb('+color.join(',')+')',phase:seed(n+50)*TAU});
      }
    });particlesBuilt=true;
  }
  function drawPigment(time){
    ctx.clearRect(0,0,width,height);
    if(time<ENTRY+HOLD)return;
    if(!particlesBuilt)makeParticles();const t=(time-ENTRY-HOLD)/1000;
    for(const p of particles){const age=t-p.delay;if(age<0||age>p.life)continue;const q=age/p.life,alpha=smooth(age*3.5)*(1-smooth(q));if(alpha<.008)continue;const swirl=Math.sin(age*.8+p.phase)*age*3.5;ctx.globalAlpha=alpha*.7;ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x+p.vx*age+swirl,p.y+p.vy*age-4*age*age,Math.max(.25,p.r*(1-q*.7)),0,TAU);ctx.fill();}ctx.globalAlpha=1;
  }
  function render(now){
    if(!opened)return;if(!start)start=now;elapsed=now-start;frames++;const drawStart=performance.now();
    if(lastFrame){const delta=now-lastFrame;totalFrameMs+=delta;maxFrameMs=Math.max(maxFrameMs,delta);if(delta>50)slowFrames++;}lastFrame=now;
    if(elapsed>=TOTAL){close('complete');return;}
    phase=elapsed<ENTRY?'entering':elapsed<ENTRY+HOLD?'holding':'dissolving';dialog.dataset.phase=phase;
    drawCovers(elapsed);drawSky(elapsed);drawPigment(elapsed);
    const reveal=smooth((elapsed-(ENTRY+HOLD+850))/1950);
    if(reveal>0){root.dataset.intro='revealing';root.style.setProperty('--intro-page-opacity',reveal.toFixed(4));dialog.style.setProperty('--intro-paper-opacity',(1-reveal).toFixed(4));if(reveal>.55)restoreBackground();}
    const drawMs=performance.now()-drawStart;totalDrawMs+=drawMs;if(drawMs>maxDrawMs){maxDrawMs=drawMs;maxDrawPhase=phase;}frame=requestAnimationFrame(render);
  }
  async function imagesReady(){return Promise.all(covers.map(async cover=>{const img=cover.img;if(!img.complete)await new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});});if(!img.naturalWidth)return false;try{await img.decode();}catch{}return img.naturalWidth>0;})).then(values=>values.every(Boolean));}
  async function open(options={}){
    if(opened||pending||window.WX_STAR_GATE?.info?.().open)return false;
    if(reduced.matches){close('reduced-motion');return false;}
    const first=options.initial===true;if(first&&boot&&(boot.expired||!boot.claim())){close('expired');return false;}
    const token=++generation;pending=true;phase='loading';
    if(first)root.dataset.intro='boot';
    let timeout;const ready=await Promise.race([imagesReady(),new Promise(resolve=>timeout=setTimeout(()=>resolve(false),4800))]);clearTimeout(timeout);
    if(token!==generation)return false;pending=false;
    if(!ready||window.WX_STAR_GATE?.info?.().open){close('images-unavailable');return false;}
    preparePigments();
    previousFocus=document.activeElement;bodyOverflow=document.body.style.overflow;rootOverflow=root.style.overflow;document.body.style.overflow='hidden';root.style.overflow='hidden';
    opened=true;start=0;elapsed=0;frames=0;lastFrame=0;totalFrameMs=0;maxFrameMs=0;slowFrames=0;totalDrawMs=0;maxDrawMs=0;maxDrawPhase='idle';particlesBuilt=false;phase='entering';root.dataset.intro='open';dialog.dataset.phase=phase;dialog.style.setProperty('--intro-paper-opacity','1');root.style.setProperty('--intro-page-opacity','0');pauseBackground();fit();drawCovers(0);drawSky(0);drawPigment(0);
    inertElements=[...document.body.children].filter(el=>el!==dialog&&!['SCRIPT','TEMPLATE','STYLE','LINK'].includes(el.tagName)).map(el=>({el,inert:el.inert}));inertElements.forEach(({el})=>el.inert=true);
    if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');dialog.focus({preventScroll:true});safetyTimer=setTimeout(()=>{if(opened)close('playback-timeout');},TOTAL+5000);frame=requestAnimationFrame(render);return true;
  }
  replay.addEventListener('click',()=>open());
  dialog.addEventListener('cancel',event=>{event.preventDefault();close('escape');});
  dialog.addEventListener('close',()=>{if(opened&&!dialog.open)close('native');});
  dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();close('escape');}else if(event.key==='Tab'){event.preventDefault();dialog.focus({preventScroll:true});}});
  addEventListener('resize',fit);addEventListener('languagechange',paintReplay);
  reduced.addEventListener('change',()=>{if(reduced.matches&&(opened||pending))close('reduced-motion');});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&(opened||pending))close('hidden');});
  window.WX_INTRO={open,close,info:()=>({open:opened,pending,phase,elapsed,frames,total:covers.length,duration:TOTAL,entryDuration:ENTRY,holdDuration:HOLD,orbitDuration:0,dissolveDuration:DISSOLVE,automatic:opened,turns:0,formation:'artistic-dipper',layout:portrait?'portrait':'landscape',previousMotion,reducedMotion:reduced.matches,coverLanguage:'en',poses:poses.map(p=>({x:p.x,y:p.y,alpha:p.alpha,tilt:p.tilt,scale:p.scale,settled:p.settled})),particleCount:particles.length,performance:{averageFrameMs:frames>1?totalFrameMs/(frames-1):0,maxFrameMs,slowFrames,averageDrawMs:frames?totalDrawMs/frames:0,maxDrawMs,maxDrawPhase}})};
  paintReplay();
  if(boot){if(boot.eligible&&!boot.expired)open({initial:true});else queueMicrotask(()=>{phase='closed';root.dataset.intro='closed';announce('bypassed');});}
  else{phase='closed';root.dataset.intro='closed';queueMicrotask(()=>announce('boot-unavailable'));}
})();

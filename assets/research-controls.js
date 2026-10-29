/* Shared, local-only orbit and zoom controls for the four research illustrations. */
(() => {
  'use strict';
  const inputs = new Map();
  const multiply = (a,b) => [a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1],a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0],a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3],a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]];
  const turn = (x,y,z,q) => {const tx=2*(q[1]*z-q[2]*y),ty=2*(q[2]*x-q[0]*z),tz=2*(q[0]*y-q[1]*x);return [x+q[3]*tx+q[1]*tz-q[2]*ty,y+q[3]*ty+q[2]*tx-q[0]*tz,z+q[3]*tz+q[0]*ty-q[1]*tx];};
  const english = () => document.documentElement.lang==='en';
  function attach(canvas, key, options={}) {
    if(inputs.has(key)&&inputs.get(key).canvas===canvas)return inputs.get(key);
    const state={quaternion:[0,0,0,1],zoom:1,dragging:false,pointers:0,revision:0,angles:{x:0,y:0}};
    const pointers=new Map();let previous=null,pinch=null;
    canvas.tabIndex=0;canvas.style.touchAction='none';canvas.style.cursor='grab';
    const bar=document.createElement('div');bar.className='research-view-controls';bar.dataset.researchView=key;
    bar.innerHTML='<button type="button" data-view-action="out">−</button><output>100%</output><button type="button" data-view-action="in">+</button><button type="button" data-view-action="reset" class="research-view-reset"></button>';
    canvas.insertAdjacentElement('afterend',bar);
    const info=()=>({...state,quaternion:state.quaternion.slice(),angles:{...state.angles}});
    const signal=()=>{state.revision++;canvas.dataset.viewZoom=state.zoom.toFixed(3);canvas.dataset.viewRotation=state.quaternion.map(n=>n.toFixed(5)).join(',');canvas.dataset.viewRevision=String(state.revision);canvas.dataset.viewDragging=String(state.dragging);bar.querySelector('output').textContent=Math.round(state.zoom*100)+'%';bar.querySelector('[data-view-action="out"]').disabled=state.zoom<=.65001;bar.querySelector('[data-view-action="in"]').disabled=state.zoom>=1.99999;options.onChange?.(info());dispatchEvent(new CustomEvent('researchviewchange',{detail:{module:key,...info()}}));};
    const gesture=active=>{state.dragging=active;state.pointers=pointers.size;canvas.style.cursor=active?'grabbing':'grab';canvas.dataset.viewDragging=String(active);options.onGesture?.(active);dispatchEvent(new CustomEvent('researchviewgesture',{detail:{module:key,active}}));};
    const setZoom=n=>{if(!Number.isFinite(Number(n)))return;state.zoom=Math.max(.65,Math.min(2,Number(n)));signal();};
    const rotate=(yaw,pitch)=>{const y=[0,Math.sin(yaw/2),0,Math.cos(yaw/2)],x=[Math.sin(pitch/2),0,0,Math.cos(pitch/2)];const q=multiply(x,multiply(y,state.quaternion)),norm=Math.hypot(...q)||1;state.quaternion=q.map(n=>n/norm);state.angles.x+=pitch;state.angles.y+=yaw;signal();};
    const distance=()=>{const p=[...pointers.values()];return Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);};
    const clear=()=>{const ids=[...pointers.keys()];pointers.clear();previous=null;pinch=null;gesture(false);for(const id of ids)if(canvas.hasPointerCapture?.(id))canvas.releasePointerCapture(id);};
    const reset=()=>{clear();state.quaternion=[0,0,0,1];state.zoom=1;state.angles={x:0,y:0};signal();};
    canvas.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch'&&e.button!==0)return;e.preventDefault();canvas.focus({preventScroll:true});pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});canvas.setPointerCapture(e.pointerId);if(pointers.size===1)previous={id:e.pointerId,x:e.clientX,y:e.clientY};else{pinch={distance:Math.max(1,distance()),zoom:state.zoom};previous=null;}gesture(true);});
    canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;e.preventDefault();pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size>1&&pinch){setZoom(pinch.zoom*distance()/pinch.distance);return;}if(!previous||previous.id!==e.pointerId)return;const speed=Math.PI*1.5/Math.max(160,Math.min(canvas.clientWidth,canvas.clientHeight));rotate((e.clientX-previous.x)*speed,(e.clientY-previous.y)*speed);previous={id:e.pointerId,x:e.clientX,y:e.clientY};});
    const end=e=>{if(!pointers.has(e.pointerId))return;pointers.delete(e.pointerId);pinch=null;if(canvas.hasPointerCapture?.(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(pointers.size){const [id,p]=[...pointers.entries()][0];previous={id,...p};}else{previous=null;gesture(false);}state.pointers=pointers.size;};
    ['pointerup','pointercancel','lostpointercapture'].forEach(type=>canvas.addEventListener(type,end));
    canvas.addEventListener('wheel',e=>{e.preventDefault();const unit=e.deltaMode===1?16:e.deltaMode===2?canvas.clientHeight:1;setZoom(state.zoom*Math.exp(-Math.max(-600,Math.min(600,e.deltaY*unit))*.0016));},{passive:false});
    canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','+','=','-','_'].includes(e.key)){e.preventDefault();if(e.key==='Home')reset();else if(e.key==='+'||e.key==='=')setZoom(state.zoom*1.12);else if(e.key==='-'||e.key==='_')setZoom(state.zoom/1.12);else rotate(e.key==='ArrowLeft'?-.16:e.key==='ArrowRight'?.16:0,e.key==='ArrowUp'?-.16:e.key==='ArrowDown'?.16:0);}});
    bar.addEventListener('click',e=>{const action=e.target.closest('button')?.dataset.viewAction;if(action==='out')setZoom(state.zoom/1.15);if(action==='in')setZoom(state.zoom*1.15);if(action==='reset')reset();});
    function refresh(){const en=english();bar.setAttribute('role','group');bar.setAttribute('aria-label',en?'Illustration view':'图案视角');bar.querySelector('[data-view-action="out"]').setAttribute('aria-label',en?'Zoom out':'缩小');bar.querySelector('[data-view-action="in"]').setAttribute('aria-label',en?'Zoom in':'放大');bar.querySelector('[data-view-action="reset"]').textContent=en?'Reset ↺':'复位 ↺';bar.querySelector('output').setAttribute('aria-label',en?'Zoom level':'缩放比例');}
    addEventListener('languagechange',refresh);addEventListener('blur',clear);document.addEventListener('visibilitychange',()=>{if(document.hidden)clear();});refresh();
    const api={canvas,state,info,setZoom,rotate,reset,refresh,project:(x,y,z=0)=>turn(x,y,z,state.quaternion)};inputs.set(key,api);signal();return api;
  }
  const defaults={guochao:{primary:'#176b73',secondary:'#bc4c40',accent:'#b48a47',ink:'#203b40',paper:'#f8f3e9'},celadon:{primary:'#237f7b',secondary:'#7b77a5',accent:'#b39360',ink:'#243e45',paper:'#f7f9f6'},vermilion:{primary:'#a6332a',secondary:'#6a4940',accent:'#ac813b',ink:'#2f2925',paper:'#f4ecdf'},ink:{primary:'#235d48',secondary:'#698377',accent:'#a7804c',ink:'#213b32',paper:'#f8faf7'},editorial:{primary:'#2e475f',secondary:'#ac3e3e',accent:'#a78347',ink:'#283747',paper:'#f3ecdf'}};
  let activePalette=defaults[document.documentElement.dataset.theme]||defaults.guochao;
  const palette=()=>window.WX_THEME?.getPalette?.()||window.WX_THEME?.palettes?.[window.WX_THEME?.get?.()]||activePalette;
  function recolor(root,T){if(!root||!T)return;const p=palette(),seen=new Set(),swatches=[],mapColor=(original)=>{const hsl={};original.getHSL(hsl);if(hsl.s<.035)return original.clone();let key=hsl.h<.11||hsl.h>.87?'secondary':hsl.h<.19?'accent':hsl.h<.55?'primary':hsl.h<.72?'accent':'secondary';const target=new T.Color(p[key]),th={};target.getHSL(th);return new T.Color().setHSL(th.h,Math.min(.68,th.s*.72+hsl.s*.17),Math.min(.9,Math.max(.07,hsl.l*.83+th.l*.17)));};
    root.traverse(object=>{for(const mat of (Array.isArray(object.material)?object.material:[object.material])){if(!mat||seen.has(mat))continue;seen.add(mat);for(const field of ['color','emissive']){if(!mat[field]?.isColor||mat.map)continue;const key='wxOriginal'+field;if(!mat.userData[key])mat.userData[key]=mat[field].clone();mat[field].copy(mapColor(mat.userData[key]));if(field==='color')swatches.push(mat[field].getHexString());}}
      for(const attr of [object.geometry?.attributes?.color,object.instanceColor]){if(!attr||seen.has(attr))continue;seen.add(attr);if(!attr.wxOriginal)attr.wxOriginal=Float32Array.from(attr.array);for(let i=0;i<attr.count;i++){const c=mapColor(new T.Color().fromArray(attr.wxOriginal,i*3));attr.setXYZ(i,c.r,c.g,c.b);}attr.needsUpdate=true;}
    });return {materials:swatches.length,colors:swatches.slice(0,16)};
  }
  const cssCache=new Map();
  function hsl(hex){const [r,g,b]=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255),max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min,l=(max+min)/2;if(!d)return {h:0,s:0,l};let h=max===r?(g-b)/d+(g<b?6:0):max===g?(b-r)/d+2:(r-g)/d+4;return {h:h/6,s:d/(1-Math.abs(2*l-1)),l};}
  function hex(h,s,l){const a=s*Math.min(l,1-l),channel=n=>{const k=(n+h*12)%12;return Math.round((l-a*Math.max(-1,Math.min(k-3,9-k,1)))*255).toString(16).padStart(2,'0');};return '#'+channel(0)+channel(8)+channel(4);}
  function css(color){if(typeof color!=='string'||!/^#[0-9a-f]{6}$/i.test(color))return color;if(cssCache.has(color))return cssCache.get(color);const original=hsl(color);if(original.s<.035)return color;const p=palette(),key=original.h<.11||original.h>.87?'secondary':original.h<.19?'accent':original.h<.55?'primary':original.h<.72?'accent':'secondary',target=hsl(p[key]);const result=hex(target.h,Math.min(.68,target.s*.72+original.s*.17),Math.min(.9,Math.max(.07,original.l*.83+target.l*.17)));cssCache.set(color,result);return result;}
  addEventListener('wxthemechange',e=>{activePalette=e.detail?.palette||palette();cssCache.clear();});
  window.WX_RESEARCH_INPUTS={attach,get:key=>inputs.get(key),info:()=>Object.fromEntries([...inputs].map(([key,input])=>[key,input.info()]))};
  window.WX_VISUAL_PALETTE={get:palette,recolor,css};
})();

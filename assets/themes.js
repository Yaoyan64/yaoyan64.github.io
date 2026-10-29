/* The palette is shared by the page, the artwork and the research scenes. */
(() => {
  'use strict';
  const root = document.documentElement;
  const palettes = Object.freeze({
    guochao: Object.freeze({primary:'#12676d',secondary:'#c34836',accent:'#c49035',ink:'#173b42',paper:'#fffaf0'}),
    porcelain: Object.freeze({primary:'#174f9a',secondary:'#3c7b9c',accent:'#6a9e9a',ink:'#132d52',paper:'#fbfdff'}),
    vermilion: Object.freeze({primary:'#b52022',secondary:'#282b2c',accent:'#927240',ink:'#242626',paper:'#fffefb'}),
    editorial: Object.freeze({primary:'#77523d',secondary:'#a05e45',accent:'#6d8780',ink:'#3d302a',paper:'#fbf8f2'}),
    aurora: Object.freeze({primary:'#5a4b9f',secondary:'#247ea6',accent:'#3e9693',ink:'#242c4d',paper:'#fafaff'})
  });
  const legacyThemes=Object.freeze({celadon:'porcelain',ink:'vermilion'});
  const normalize=value=>Object.prototype.hasOwnProperty.call(legacyThemes,value)?legacyThemes[value]:value;
  const labels = {
    zh:{open:'切换风格',heading:'风格',close:'关闭风格选项',guochao:'青黛流金',porcelain:'青花映雪',vermilion:'朱砂墨韵',editorial:'素笺铜影',aurora:'紫霭星河'},
    en:{open:'Choose a palette',heading:'Palette',close:'Close palette choices',guochao:'Jade, Coral & Gold',porcelain:'Blue & White Porcelain',vermilion:'Vermilion & Ink',editorial:'Copper & Parchment',aurora:'Violet & Glacier'}
  };
  const rgb = hex => hex.match(/[a-f\d]{2}/gi).map(value=>parseInt(value,16)).join(',');
  let active = 'guochao', host, trigger, panel, choiceButtons = [];
  const lang = () => root.lang.toLowerCase().startsWith('en') ? 'en' : 'zh';
  function setTheme(value, persist=true) {
    value=normalize(value);
    if (!Object.prototype.hasOwnProperty.call(palettes,value)) return active;
    active = value;
    const palette = palettes[active];
    root.dataset.theme = active;
    for (const [key,color] of Object.entries(palette)) {
      root.style.setProperty('--theme-'+key,color);
      root.style.setProperty('--theme-'+key+'-rgb',rgb(color));
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = palette.paper;
    if (persist) {try {localStorage.setItem('wx-theme',active);} catch {}}
    updateUI();
    window.dispatchEvent(new CustomEvent('wxthemechange',{detail:{theme:active,palette:{...palette}}}));
    return active;
  }
  function updateUI() {
    if (!host) return;
    const text = labels[lang()];
    trigger.setAttribute('aria-label',text.open);
    trigger.title = text.open;
    host.querySelector('.theme-trigger-label').textContent = text.heading;
    host.querySelector('#theme-menu-title').textContent = text.heading;
    host.querySelector('.theme-close').setAttribute('aria-label',text.close);
    panel.setAttribute('aria-label',text.open);
    for (const button of choiceButtons) {
      const selected = button.dataset.themeOption === active;
      button.setAttribute('aria-checked',String(selected));
      button.tabIndex = selected ? 0 : -1;
      button.querySelector('.theme-option-name').textContent = text[button.dataset.themeOption];
    }
  }
  function closeMenu(restoreFocus=false) {
    if (!panel) return;
    panel.hidden = true;
    trigger.setAttribute('aria-expanded','false');
    if (restoreFocus) trigger.focus({preventScroll:true});
  }
  function openMenu() {
    panel.hidden = false;
    trigger.setAttribute('aria-expanded','true');
    choiceButtons.find(button=>button.dataset.themeOption===active)?.focus({preventScroll:true});
  }
  function init() {
    const actions = document.querySelector('.header-actions');
    if (!actions || document.getElementById('theme-switcher')) return;
    host = document.createElement('div');
    host.id='theme-switcher'; host.className='theme-switcher';
    host.innerHTML='<button class="theme-trigger" id="theme-trigger" type="button" aria-expanded="false" aria-controls="theme-menu" aria-haspopup="true"><span class="theme-trigger-mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="theme-trigger-label"></span></button><div id="theme-menu" class="theme-menu" hidden><div class="theme-menu-heading"><span id="theme-menu-title"></span><button class="theme-close" type="button"><span aria-hidden="true">×</span></button></div><div class="theme-options" role="radiogroup" aria-labelledby="theme-menu-title"></div></div>';
    actions.prepend(host);
    trigger=host.querySelector('.theme-trigger'); panel=host.querySelector('.theme-menu');
    const choices=host.querySelector('.theme-options');
    for(const [name,palette] of Object.entries(palettes)) {
      const button=document.createElement('button');
      button.type='button';button.className='theme-option';button.dataset.themeOption=name;button.setAttribute('role','radio');
      button.innerHTML='<span class="theme-option-colors" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="theme-option-name"></span><span class="theme-option-check" aria-hidden="true">✓</span>';
      [...button.querySelectorAll('i')].forEach((swatch,index)=>{swatch.style.background=[palette.primary,palette.secondary,palette.accent,palette.paper][index];});
      button.addEventListener('click',()=>{setTheme(name);closeMenu(true);});
      button.addEventListener('keydown',event=>{
        let index=choiceButtons.indexOf(button);
        if(event.key==='ArrowDown'||event.key==='ArrowRight')index=(index+1)%choiceButtons.length;
        else if(event.key==='ArrowUp'||event.key==='ArrowLeft')index=(index+choiceButtons.length-1)%choiceButtons.length;
        else if(event.key==='Home')index=0;
        else if(event.key==='End')index=choiceButtons.length-1;
        else return;
        event.preventDefault();
        const next=choiceButtons[index];setTheme(next.dataset.themeOption);next.focus({preventScroll:true});
      });
      choices.append(button);choiceButtons.push(button);
    }
    trigger.addEventListener('click',()=>panel.hidden?openMenu():closeMenu());
    host.querySelector('.theme-close').addEventListener('click',()=>closeMenu(true));
    document.addEventListener('pointerdown',event=>{if(!panel.hidden&&!host.contains(event.target))closeMenu();},{passive:true});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden){event.preventDefault();closeMenu(true);}});
    document.addEventListener('focusin',event=>{if(!panel.hidden&&!host.contains(event.target))closeMenu();});
    window.addEventListener('languagechange',updateUI);
    window.addEventListener('storage',event=>{if(event.key==='wx-theme'&&Object.prototype.hasOwnProperty.call(palettes,normalize(event.newValue)))setTheme(event.newValue,false);});
    updateUI();
  }
  window.WX_THEME = Object.freeze({get:()=>active,getPalette:()=>({...palettes[active]}),set:setTheme,palettes});
  try {const saved=normalize(localStorage.getItem('wx-theme'));if(Object.prototype.hasOwnProperty.call(palettes,saved))active=saved;} catch {}
  setTheme(active,false);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

(() => {
  'use strict';
  // Keep stage labels centralized so confirmed degree stages can be updated once.
  const EDUCATION_LABELS = {
    zh: {current:'博士阶段 · 硕博连读',middle:'硕士阶段 · 硕博连读',bachelor:'本科阶段'},
    en: {current:'Doctoral phase · Integrated master’s–PhD track',middle:'Master’s phase · Integrated master’s–PhD track',bachelor:'Undergraduate studies'}
  };
  const copy = {
    "zh": {
      "title": "王昕 · 学术简历",
      "description": "王昕的学术简历：研究背景、教育经历、荣誉奖励与学术论文。",
      "skip": "跳至正文",
      "back": "个人主页",
      "nav": "简历导航",
      "research": "研究",
      "educationNav": "教育",
      "publicationsNav": "论文",
      "language": "选择语言",
      "cv": "学术简历",
      "name": "王昕",
      "nameAlt": "",
      "affiliation": "哈尔滨医科大学 · 生物医学工程 · 博士阶段（硕博连读）",
      "intro": "从遗传线索出发，以因果推断与多组学分析追问复杂疾病的生物学基础。关注肠道微生物与宿主免疫，也探索大语言模型和 AI 智能体如何支持科研工作。",
      "portrait": "王昕证件照",
      "location": "哈尔滨，中国",
      "overview": "学术概览",
      "papersCount": "篇学术论文",
      "cofirstCount": "篇共同第一作者",
      "scholarship": "硕士国家奖学金",
      "researchLabel": "研究背景",
      "researchTitle": "循因求证，融数探微。",
      "researchLead": "围绕复杂疾病的遗传基础，运用孟德尔随机化、跨性状遗传分析与多组学整合，梳理因果线索，连接不同层面的研究证据。",
      "causalTitle": "因果推断与遗传分析",
      "causalText": "孟德尔随机化、中介分析与跨性状遗传分析；关注暴露因素与疾病结局之间的潜在因果联系。",
      "omicsTitle": "多组学与生物信息",
      "omicsText": "开展多组学联合分析、生物信息学分析与大规模数据挖掘，整合不同层面的证据。",
      "microTitle": "肠道微生物与宿主",
      "microText": "关注益生菌、致病菌及其作用机制，探索菌群、代谢产物与宿主免疫之间的联系。",
      "aiTitle": "大语言模型与科研协作",
      "aiText": "探索大语言模型及 AI 智能体在文献整理、分析工作流与科研表达中的辅助应用。",
      "experimentTitle": "实验技术与科研表达",
      "experimentText": "细胞培养、Western blot 等分子实验；使用 Adobe Illustrator 进行科研绘图与图形表达。",
      "educationLabel": "教育经历",
      "educationTitle": "立足基础，走向交叉。",
      "currentDate": "2026.09 — 至今",
      "biomedical": "生物医学工程",
      "university": "哈尔滨医科大学",
      "basicMedicine": "基础医学（5+2）",
      "bachelorUniversity": "哈尔滨医科大学 · 医学学士",
      "honorsLabel": "荣誉与奖励",
      "honorsTitle": "求学路上的肯定。",
      "nationalScholarship": "硕士国家奖学金",
      "provincialMerit": "省三好学生",
      "additionalTitle": "早期经历与其他奖励",
      "undergraduate": "本科 · 学生工作",
      "studentRoles": "2019—2021 年，先后任校学生会技术部部员、副部长；2021—2022 年任校学生会副主席，参与校园活动组织与视频制作。",
      "earlyAwards": "2021—2022 年获国家励志奖学金；2020—2021 年获俄罗斯科普影片创作大赛三等奖。",
      "otherAwards": "其他奖励",
      "universityAwards": "获校二等奖学金 4 次、干部奖学金 2 次，以及优秀干部、三好学生各 2 次；获第五届全国大学生学术英语词汇竞赛优秀奖。",
      "serviceTitle": "本科与硕士早期 · 志愿服务",
      "serviceText": "参与校园大会会务、“挑战杯”赛务、文化宣传及疫情防控等志愿服务。",
      "publicationsLabel": "学术论文",
      "publicationsTitle": "以论文记录探索。",
      "publicationTotal": "12 篇学术论文",
      "cofirst": "共同第一作者",
      "collaboration": "合作研究",
      "backExplore": "返回个人主页",
      "top": "返回顶部 ↑"
    },
    "en": {
      "title": "Wang Xin · Academic CV",
      "description": "Wang Xin’s academic CV: research background, education, honors and publications.",
      "skip": "Skip to content",
      "back": "Portfolio",
      "nav": "CV navigation",
      "research": "Research",
      "educationNav": "Education",
      "publicationsNav": "Publications",
      "language": "Select language",
      "cv": "ACADEMIC CV",
      "name": "Wang Xin",
      "nameAlt": "",
      "affiliation": "Doctoral phase in Biomedical Engineering · Integrated master’s–PhD track · Harbin Medical University",
      "intro": "My research brings together genetic evidence, causal inference and multi-omics to investigate complex diseases. I am also interested in gut microbes and host immunity, and in using language models and AI agents to support research.",
      "portrait": "Portrait of Wang Xin",
      "location": "Harbin, China",
      "overview": "Academic overview",
      "papersCount": "Publications",
      "cofirstCount": "Co-first author papers",
      "scholarship": "National Master’s Scholarship",
      "researchLabel": "RESEARCH BACKGROUND",
      "researchTitle": "Following causes, connecting evidence.",
      "researchLead": "I investigate the genetic basis of complex diseases through Mendelian randomization, cross-trait genetic analysis and multi-omics integration, bringing evidence together across different biological scales.",
      "causalTitle": "Causal inference & genetics",
      "causalText": "Mendelian randomization, mediation analysis and cross-trait genetic analysis, with an interest in potential causal relationships between exposures and disease outcomes.",
      "omicsTitle": "Multi-omics & bioinformatics",
      "omicsText": "Integrated multi-omics analysis, bioinformatics and large-scale data mining to bring together evidence from different biological layers.",
      "microTitle": "Gut microbes & the host",
      "microText": "Interests include probiotics, pathogens and their mechanisms, and the connections between microbial communities, metabolites and host immunity.",
      "aiTitle": "Language models & research",
      "aiText": "Exploring language models and AI agents as tools for literature organization, analytical workflows and scientific communication.",
      "experimentTitle": "Laboratory skills & visualization",
      "experimentText": "Cell culture and molecular experiments, including Western blotting; scientific illustration and visual communication with Adobe Illustrator.",
      "educationLabel": "EDUCATION",
      "educationTitle": "Foundations for interdisciplinary research.",
      "currentDate": "Sep 2026 — Present",
      "biomedical": "Biomedical Engineering",
      "university": "Harbin Medical University",
      "basicMedicine": "Basic Medicine (5+2 program)",
      "bachelorUniversity": "Harbin Medical University · Bachelor of Medicine",
      "honorsLabel": "HONORS & AWARDS",
      "honorsTitle": "Recognition along the way.",
      "nationalScholarship": "National Scholarship for Master’s Students",
      "provincialMerit": "Provincial Merit Student Award",
      "additionalTitle": "Earlier experience & other awards",
      "undergraduate": "Undergraduate years · Student leadership",
      "studentRoles": "Member and later Deputy Head of the Student Union Technical Department (2019–2021); Vice President of the University Student Union (2021–2022). Contributed to campus event organization and video production.",
      "earlyAwards": "National Inspiration Scholarship (2021–2022); Third Prize in the Russian Science Popularization Film Competition (2020–2021).",
      "otherAwards": "Other awards",
      "universityAwards": "University Second-class Scholarship, four times; Student Leadership Scholarship, twice; Outstanding Student Leader, twice; Merit Student, twice; Excellence Award in the 5th National College Student Academic English Vocabulary Competition.",
      "serviceTitle": "Undergraduate & early master’s years · Volunteering",
      "serviceText": "Supported campus congresses, the Challenge Cup competition, cultural outreach and COVID-19 prevention activities.",
      "publicationsLabel": "PUBLICATIONS",
      "publicationsTitle": "Published research.",
      "publicationTotal": "12 publications",
      "cofirst": "Co-first author",
      "collaboration": "Collaborative research",
      "backExplore": "Back to the portfolio",
      "top": "Back to top ↑"
    }
  };
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const scientific=(value,paper)=>window.WX_ACADEMIC?.format(value,paper)||esc(value);
  let lang='en';
  function initialLanguage(){return new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';}
  function renderPublications(){
    const papers=window.PUBLICATIONS||[];
    let previousYear;
    $('#paper-list').innerHTML=papers.map(p=>{
      const year=previousYear!==p.year?`<h3 class="publication-year">${p.year}</h3>`:'';previousYear=p.year;
      const authors=p.id==='pub-2025-sv4gd'?esc(p.authors):esc(p.authors).replace(/\bWang X\*?/g,'<strong>$&</strong>');
      return `${year}<article class="paper" data-paper-id="${esc(p.id)}"><div class="paper-meta"><em class="journal">${esc(p.journal)}</em><span class="paper-role">${copy[lang][p.cofirst?'cofirst':'collaboration']}</span></div><h3 lang="en">${scientific(p.title,p)}</h3><p class="paper-authors" lang="en">${authors}</p><p class="paper-citation"><span lang="en"><em class="journal">${esc(p.journal)}</em> · ${esc(p.detail||p.year)}</span></p></article>`;
    }).join('');
  }
  function applyLanguage(next,replaceUrl=true){
    lang=next==='en'?'en':'zh';const text=copy[lang];
    document.documentElement.lang=lang==='en'?'en':'zh-CN';
    document.title=text.title;$('meta[name=description]').content=text.description;
    $$('[data-i18n]').forEach(el=>{if(text[el.dataset.i18n]!==undefined)el.textContent=text[el.dataset.i18n];});
    $$('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',text[el.dataset.i18nAria]));
    $$('[data-i18n-alt]').forEach(el=>el.alt=text[el.dataset.i18nAlt]);
    $$('[data-stage]').forEach(el=>el.textContent=EDUCATION_LABELS[lang][el.dataset.stage]);
    $$('[data-lang]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.lang===lang));button.setAttribute('aria-label',button.dataset.lang==='en'?'Switch to English':'切换为中文');});
    $('#back-link').href='../index.html?lang='+lang;$('#footer-back').href='../index.html?lang='+lang;
    if(replaceUrl){try{const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);}catch{}}
    renderPublications();
  }
  $$('[data-lang]').forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.lang)));
  const sections=$$('.cv-section[id]');
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if(!visible.length)return;
      const id=visible[0].target.id;
      $$('.cv-nav a').forEach(link=>{if(link.hash==='#'+id)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');});
    },{rootMargin:'-18% 0px -60% 0px'});
    sections.forEach(section=>observer.observe(section));
  }
  applyLanguage(initialLanguage(),false);
})();

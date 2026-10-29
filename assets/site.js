/* V1 — consolidated application. Modules retain their own scopes and execution order. */
/* 01 · Language and homepage copy */
(() => {
  "use strict";
  // Each language key is defined once.
  const messages = {
    zh: {
      "site.title": "王昕 · 数据山海",
      "site.description": "王昕的科研主页。生物医学工程、因果推断、多组学与 AI 辅助科研。",
      "nav.home": "王昕，返回首页",
      "nav.skip": "跳至正文",
      "nav.main": "主导航",
      "nav.mobile": "移动端导航",
      "nav.language": "切换语言",
      "nav.research": "研究",
      "nav.papers": "论文",
      "nav.journey": "学术轨迹",
      "nav.explore": "互动实验室",
      "nav.cv": "学术简历 ↗",
      "nav.open": "打开导航菜单",
      "nav.close": "关闭导航菜单",
      "hero.statement": "在细微处，<br>看见生命的辽阔。",
      "hero.description": "以遗传与微生物为线索，<br>借助数据与智能，探寻疾病背后的缘由。",
      "hero.research": "探索我的研究",
      "hero.play": "读一段生命密码",
      "hero.scroll": "往下看看",
      "hero.canvas":
        "可自由旋转的生命与智能星群。拖动任意形体旋转它，拖动空白处旋转整组；鼠标放在画面内直接滚轮缩放，触屏双指缩放。数字 0、1、2、3 选择双螺旋、AI、微生物和数据，方向键旋转当前选择，Esc 选择整组，Home 复位。",
      "model.left": "向左旋转结构",
      "model.right": "向右旋转结构",
      "model.reset": "复位",
      "model.drag": "拖动任意图案 · 滚轮缩放",
      "model.info": "关于这片星群 +",
      "model.description":
        "遗传的秩序、语言的联结与微小的生命，在同一片光里相遇。拖动每个形体，找到它的另一面；拖动空白处，让整片星群转动。鼠标放在画面内即可滚轮缩放，触屏支持双指缩放。",
      "model.source": "查看结构来源 ↗",
      "about.label": "关于我",
      "about.title": "从医学出发，<br>在交叉处求索。",
      "about.university": "哈尔滨医科大学 · 生物医学工程博士阶段",
      "about.text":
        "我关注复杂疾病的遗传基础，用孟德尔随机化追问因果，也借助多组学证据，让零散线索逐渐清晰。",
      "about.cv": "阅读学术简历",
      "about.photo": "王昕的个人照片",
      "stats.unit": "篇",
      "stats.papers": "学术论文",
      "stats.cofirst": "共同第一作者",
      "stats.award": "硕士国家奖学金",
      "research.label": "研究与工具",
      "research.title": "把线索连起来，<br>把问题问下去。",
      "research.intro": "遗传、微生物与人工智能，<br>是我观察复杂疾病的几扇窗。",
      "research.aiTitle": "让语言连接工具与想法",
      "research.aiText": "探索大语言模型与 AI 智能体如何协助文献整理、分析工作流与科研表达。",
      "research.aiMethods": "AI 智能体 · 数据挖掘 · 科研可视化",
      "research.aiCanvas": "词元、注意力与生成的大语言模型流程示意",
      "research.causalTitle": "从相关出发，向因果追问",
      "research.causalText": "以遗传变异为工具，研究免疫、代谢等因素与复杂疾病的潜在因果关系。",
      "research.causalMethods": "孟德尔随机化 · 中介分析",
      "research.causalCanvas": "遗传工具、暴露与结局的因果图",
      "research.omicsTitle": "不同层次的证据，同一个问题",
      "research.omicsText": "整合跨性状遗传与多组学证据，探索疾病共享的遗传基础及潜在靶点。",
      "research.omicsMethods": "跨性状分析 · 多组学整合",
      "research.omicsCanvas": "基因组、转录组与蛋白组的动态数据层示意",
      "papers.label": "学术成果",
      "papers.title": "让研究，<br>自己说话。",
      "papers.totalLabel": "学术论文",
      "papers.years": "按年份筛选论文",
      "papers.all": "全部",
      "papers.search": "搜索论文或研究主题",
      "papers.searchAria": "搜索论文",
      "papers.onlyCofirst": "共同第一作者",
      "papers.count": "{count} 篇论文",
      "papers.authors": "研究摘要与书目信息",
      "papers.copy": "复制引用",
      "papers.original": "阅读原文",
      "papers.cofirst": "共同第一作者",
      "papers.collaboration": "合作研究",
      "papers.more": "展开其余 {count} 篇论文",
      "papers.less": "收起论文列表",
      "papers.emptyTitle": "没有匹配的论文",
      "papers.emptyText": "换个关键词，再探索一下。",
      "papers.reset": "清除筛选",
      "papers.copied": "引用已复制",
      "papers.copyFailed": "复制未成功，请展开书目信息后手动复制。",
      "journey.label": "学术轨迹",
      "journey.title": "积累，然后向前。",
      "journey.university": "哈尔滨医科大学",
      "journey.now": "2026.09 — 至今",
      "journey.currentDegree": "博士阶段",
      "journey.masterDegree": "硕士阶段",
      "journey.bachelorDegree": "本科阶段",
      "journey.engineering": "生物医学工程",
      "journey.basic": "基础医学（5+2）",
      "journey.bachelorSubject": "基础医学 · 医学学士",
      "journey.currentText": "连接生命科学与计算方法，继续探索交叉研究。",
      "journey.masterText": "2025 年硕士国家奖学金<br>2025 年省三好学生",
      "journey.bachelorText": "基础医学训练与研究起步。<br>2021—2022 年国家励志奖学金。",
      "journey.early": "本科与硕士早期的其他经历",
      "journey.studentTitle": "本科 · 学生工作",
      "journey.studentText":
        "2019—2022 年，在校学生会参与技术制作与活动组织，先后担任技术部部员、副部长和校学生会副主席。",
      "journey.volunteerTitle": "早期 · 志愿服务",
      "journey.volunteerText":
        "本科与硕士早期参加校园会议、挑战杯赛务、文化宣传及疫情防控等志愿服务。",
      "explore.label": "互动实验室",
      "explore.title": "好奇心，<br>可以亲手试一试。",
      "explore.intro": "给这段 DNA 找到另一半。<br>这次，不用先读方法学。",
      "closing.title": "仍有未解，<br>便有下一程。",
      "closing.cv": "阅读学术简历",
      "footer.top": "返回顶部 ↑",
      "hero.name": "王昕",
      "model.pairs": "连接条带",
      "dna.discover": "读一段 DNA，找到互补的另一半",
      "dna.open": "动手配对",
      "about.focusLabel": "选择研究兴趣",
      "about.genetics": "遗传与因果",
      "about.microbes": "肠道微生物",
      "about.ai": "AI 协作",
      "about.focus.genetics":
        "我关注复杂疾病的遗传基础，用孟德尔随机化追问因果，也借助多组学证据，让零散线索逐渐清晰。",
      "about.focus.microbes":
        "我对肠道微生物尤其感兴趣：从益生菌到致病机制，从代谢产物到宿主免疫，想弄清这些微小生命如何影响健康。",
      "about.focus.ai":
        "我尝试把大语言模型与 AI 智能体用在文献梳理、分析流程和科研表达中，让工具分担重复工作，把时间留给判断与思考。",
      "research.microTitle": "微小的生命，广阔的联系",
      "research.microText":
        "关注肠道菌群、益生菌与致病机制，探索微生物、代谢产物和宿主免疫之间的联系。",
      "llm.label": "语言模型流程示意",
      "llm.play": "播放流程 ↗",
      "llm.playing": "流程播放中…",
      "llm.steps": "查看语言模型步骤",
      "llm.tokens": "词元",
      "llm.attention": "注意力",
      "llm.generation": "生成",
      "llm.selectToken": "选择一个输入片段",
      "llm.focusToken": "聚焦输入片段：{token}",
      "llm.text.tokens": "文本被拆分为词元，再转为向量表示。选中一个片段，看看它如何参与后续计算。",
      "llm.text.attention":
        "不同注意力头建立上下文中的联系；因果遮罩限定可见位置，使模型依据已有内容进行预测。",
      "llm.text.generation": "模型依据已有上下文，逐步预测下一个词元。流动的光带呈现这一过程。",
      "causal.select": "选择因果图节点",
      "causal.instrument": "遗传工具",
      "causal.exposure": "暴露",
      "causal.outcome": "结局",
      "causal.text.instrument":
        "沿遗传位点寻找工具变量，首先检视它们与暴露的关联。因果推断仍需要相应假设与证据。",
      "causal.text.exposure": "从暴露分布到作用路径，借助遗传工具，追问关联背后的因果问题。",
      "causal.text.outcome":
        "回到结局，将效应估计与不确定性放在一起阅读，再结合敏感性分析审视证据。",
      "omics.select": "探索组学层次",
      "omics.all": "整合",
      "omics.genome": "基因组",
      "omics.transcriptome": "转录组",
      "omics.proteome": "蛋白组",
      "omics.text.all": "综合基因组、转录组与蛋白组的证据，从不同层次审视同一个生物学问题。",
      "omics.text.genome": "沿着序列与变异的线索，探索疾病相关的遗传基础。",
      "omics.text.transcriptome":
        "观察 RNA 表达随时间和条件发生的变化，寻找基因活动与生物过程之间的联系。",
      "omics.text.proteome": "观察蛋白质的丰度、状态与功能，进一步理解分子层面的变化。",
      "papers.topics": "按研究主题探索",
      "papers.topicAll": "所有主题",
      "papers.topicMicro": "微生物",
      "papers.topicImmune": "免疫",
      "papers.topicNeuro": "神经",
      "papers.topicPlatform": "研究平台",
      "papers.random": "随机读一篇 ↗",
      "journey.integrated": "2024 — 至今 · 硕博连读",
      "journey.select": "查看教育阶段",
      "journey.panel.phdTitle": "博士阶段 · 生物医学工程",
      "journey.panel.phd":
        "硕博连读的博士阶段。继续围绕复杂疾病、肠道微生物与计算方法探索交叉研究。",
      "journey.panel.masterTitle": "硕士阶段 · 基础医学",
      "journey.panel.master": "硕博连读的硕士阶段。2025 年获硕士国家奖学金、省三好学生。",
      "journey.panel.bachelorTitle": "本科阶段 · 医学学士",
      "journey.panel.bachelor":
        "2019—2024 年完成基础医学本科阶段学习。获 2021—2022 年国家励志奖学金，并在本科期间参与学生工作与志愿服务。",
      "model.zoom": "缩放细节",
      "model.zoomIn": "放大画面",
      "model.zoomOut": "缩小画面",
      "flow.pause": "暂停轮播",
      "flow.play": "继续轮播",
      "causal.flowLabel": "沿着证据，追问因果",
      "omics.flowLabel": "在层次之间，连接线索",
      "poem.label": "轮换的短句",
      "poem.previous": "上一句",
      "poem.next": "下一句",
      "poem.pause": "暂停短句轮换",
      "poem.play": "继续短句轮换",
      "scene.llm.tokens": "词元 · 语言的起点",
      "scene.llm.attention": "注意力 · 联结上下文",
      "scene.llm.generation": "生成 · 预测下一个词元",
      "scene.causal.instrument": "遗传工具 · 从变异寻找线索",
      "scene.causal.exposure": "暴露 · 考察作用路径",
      "scene.causal.outcome": "结局 · 效应与不确定性",
      "scene.omics.all": "整合 · 汇集不同层次的证据",
      "scene.omics.genome": "基因组 · 序列与变异",
      "scene.omics.transcriptome": "转录组 · 读出表达变化",
      "scene.omics.proteome": "蛋白组 · 从分子到功能",
      "about.art": "青黛与朱砂的丝带、微观星群与书页交织的科研插画",
    },
    en: {
      "site.title": "Wang Xin · Data & Discovery",
      "site.description":
        "Wang Xin’s research portfolio. Biomedical engineering, causal inference, multi-omics and AI-assisted research.",
      "nav.home": "Wang Xin, back to home",
      "nav.skip": "Skip to content",
      "nav.main": "Main navigation",
      "nav.mobile": "Mobile navigation",
      "nav.language": "Select language",
      "nav.research": "Research",
      "nav.papers": "Publications",
      "nav.journey": "Journey",
      "nav.explore": "Play & discover",
      "nav.cv": "Academic profile ↗",
      "nav.open": "Open navigation",
      "nav.close": "Close navigation",
      "hero.statement": "Small clues.<br>A wider view of life.",
      "hero.description":
        "Tracing disease through genetics and the microbiome.<br>Bringing data and AI into the search.",
      "hero.research": "Explore my research",
      "hero.play": "Explore a DNA sequence",
      "hero.scroll": "Keep exploring",
      "hero.canvas":
        "An interactive constellation of life and intelligence. Drag any form to rotate it, or drag empty space to turn the whole scene. Scroll over the artwork to zoom; pinch with two fingers on touch screens. Keys 0, 1, 2 and 3 select the helix, AI, microbes and data. Arrow keys rotate the selection, Escape selects the whole scene, and Home resets the view.",
      "model.left": "Rotate structure left",
      "model.right": "Rotate structure right",
      "model.reset": "Reset",
      "model.drag": "Drag a shape · Scroll to zoom",
      "model.info": "About the constellation +",
      "model.description":
        "Genetic order, language and small living worlds meet in the same light. Drag a form to discover another side, or drag empty space to turn the whole constellation. Scroll over the artwork to zoom, or pinch with two fingers on a touch screen.",
      "model.source": "View the structure source ↗",
      "about.label": "About me",
      "about.title": "Rooted in medicine.<br>Drawn to new connections.",
      "about.university": "Harbin Medical University · Doctoral studies in Biomedical Engineering",
      "about.text":
        "I study the genetic basis of complex disease, using Mendelian randomization to examine causal relationships and multi-omics to connect the evidence.",
      "about.cv": "Read my academic profile",
      "about.photo": "Portrait of Wang Xin",
      "stats.unit": "",
      "stats.papers": "Publications",
      "stats.cofirst": "Co-first authorships",
      "stats.award": "National Scholarship for Master’s Students",
      "research.label": "Research & tools",
      "research.title": "Follow the evidence.<br>Ask the next question.",
      "research.intro":
        "Genetics, microbes and AI offer<br>different perspectives on complex disease.",
      "research.aiTitle": "Connecting ideas with AI tools",
      "research.aiText":
        "Exploring how large language models and AI agents can help with literature review, analysis workflows and scientific communication.",
      "research.aiMethods": "AI agents · Data mining · Scientific visualization",
      "research.aiCanvas":
        "Conceptual large language model pipeline showing tokens, attention and generation",
      "research.causalTitle": "From association to causal questions",
      "research.causalText":
        "Using genetic variants as instruments to investigate potential causal links between immune or metabolic factors and complex diseases.",
      "research.causalMethods": "Mendelian randomization · Mediation analysis",
      "research.causalCanvas": "Causal diagram of genetic instruments, exposure and outcome",
      "research.omicsTitle": "Many layers. A shared question.",
      "research.omicsText":
        "Integrating cross-trait genetics and multi-omics evidence to explore shared disease architecture and potential targets.",
      "research.omicsMethods": "Cross-trait analysis · Multi-omics integration",
      "research.omicsCanvas":
        "Animated conceptual layers of genomic, transcriptomic and proteomic data",
      "papers.label": "Publications",
      "papers.title": "Research,<br>in its own words.",
      "papers.totalLabel": "PUBLICATIONS",
      "papers.years": "Filter publications by year",
      "papers.all": "All",
      "papers.search": "Search papers or research topics",
      "papers.searchAria": "Search publications",
      "papers.onlyCofirst": "Co-first author",
      "papers.count": "{count} publications",
      "papers.authors": "Summary & bibliographic details",
      "papers.copy": "Copy citation",
      "papers.original": "Read paper",
      "papers.cofirst": "Co-first author",
      "papers.collaboration": "Collaborative study",
      "papers.more": "Show {count} more publications",
      "papers.less": "Show fewer publications",
      "papers.emptyTitle": "No matching publications",
      "papers.emptyText": "Try another keyword and keep exploring.",
      "papers.reset": "Clear filters",
      "papers.copied": "Citation copied",
      "papers.copyFailed": "Copy failed. Open the bibliographic details to copy manually.",
      "journey.label": "Academic journey",
      "journey.title": "Build. Explore. Keep going.",
      "journey.university": "Harbin Medical University",
      "journey.now": "Sep 2026 — Present",
      "journey.currentDegree": "Doctoral phase",
      "journey.masterDegree": "Master’s phase",
      "journey.bachelorDegree": "Undergraduate studies",
      "journey.engineering": "Biomedical Engineering",
      "journey.basic": "Basic Medicine · 5+2 program",
      "journey.bachelorSubject": "Basic Medicine · Bachelor of Medicine",
      "journey.currentText":
        "Connecting life sciences and computational methods through interdisciplinary research.",
      "journey.masterText":
        "2025 National Scholarship for Master’s Students<br>2025 Provincial Merit Student Award",
      "journey.bachelorText":
        "Foundations in basic medicine and early research.<br>2021–2022 National Inspiration Scholarship.",
      "journey.early": "Earlier campus & volunteer experience",
      "journey.studentTitle": "Undergraduate · Student leadership",
      "journey.studentText":
        "2019–2022: technical production and event organization in the university student union, serving as a department member, deputy head and vice president.",
      "journey.volunteerTitle": "Early years · Volunteering",
      "journey.volunteerText":
        "Volunteer work during undergraduate and early postgraduate years included campus congresses, the Challenge Cup, cultural outreach and COVID-19 prevention.",
      "explore.label": "Interactive lab",
      "explore.title": "Curiosity?<br>Give it a try.",
      "explore.intro": "Find the other half of this DNA sequence.<br>No methods section required.",
      "closing.title": "More to understand.<br>More to explore.",
      "closing.cv": "Read my academic profile",
      "footer.top": "Back to top ↑",
      "hero.name": "Wang Xin",
      "model.pairs": "Connections",
      "dna.discover": "Read a DNA sequence. Find its complementary strand.",
      "dna.open": "Try pairing",
      "about.focusLabel": "Choose a research interest",
      "about.genetics": "Genetics & causality",
      "about.microbes": "Gut microbiome",
      "about.ai": "AI collaboration",
      "about.focus.genetics":
        "I study the genetic basis of complex disease, using Mendelian randomization to examine causal relationships and multi-omics to connect the evidence.",
      "about.focus.microbes":
        "I am especially interested in the gut microbiome—from probiotics and pathogenesis to microbial metabolites and host immunity—and how these relationships shape health.",
      "about.focus.ai":
        "I explore language models and AI agents for literature review, analysis workflows and scientific communication. The aim is to spend less time on repetition and more on interpretation.",
      "research.microTitle": "Small organisms. Far-reaching effects.",
      "research.microText":
        "Exploring gut communities, probiotics and pathogenesis, with an interest in the links between microbes, metabolites and host immunity.",
      "llm.label": "Language model process illustration",
      "llm.play": "Play the process ↗",
      "llm.playing": "Playing…",
      "llm.steps": "Explore language model steps",
      "llm.tokens": "Tokens",
      "llm.attention": "Attention",
      "llm.generation": "Generation",
      "llm.selectToken": "Select an input fragment",
      "llm.focusToken": "Focus on input fragment: {token}",
      "llm.text.tokens":
        "Text is split into tokens and represented as vectors. Select a fragment to see how it enters the model’s calculations.",
      "llm.text.attention":
        "Attention heads connect information across the context. A causal mask restricts each position to the content available so far.",
      "llm.text.generation":
        "The model predicts the next token from the context it has seen. The moving stream illustrates this step-by-step process.",
      "causal.select": "Select a causal diagram node",
      "causal.instrument": "Instrument",
      "causal.exposure": "Exposure",
      "causal.outcome": "Outcome",
      "causal.text.instrument":
        "Explore genetic variants as instruments, beginning with their associations with exposure. Causal inference depends on the relevant assumptions and evidence.",
      "causal.text.exposure":
        "From a distribution of exposure to a possible pathway, genetic instruments help frame questions about causality.",
      "causal.text.outcome":
        "Read effect estimates alongside uncertainty, then consider sensitivity analyses when evaluating the evidence.",
      "omics.select": "Explore the omics layers",
      "omics.all": "Integrate",
      "omics.genome": "Genome",
      "omics.transcriptome": "Transcriptome",
      "omics.proteome": "Proteome",
      "omics.text.all":
        "Combine genomic, transcriptomic and proteomic evidence to examine one biological question from several levels.",
      "omics.text.genome":
        "Follow sequences and variants to investigate the genetic basis of disease.",
      "omics.text.transcriptome":
        "Changes in RNA expression across time and conditions offer clues to gene activity and biological processes.",
      "omics.text.proteome":
        "Examine protein abundance, state and function to understand changes at the molecular level.",
      "papers.topics": "Explore by research topic",
      "papers.topicAll": "All topics",
      "papers.topicMicro": "Microbes",
      "papers.topicImmune": "Immunity",
      "papers.topicNeuro": "Neuroscience",
      "papers.topicPlatform": "Platforms",
      "papers.random": "Pick a paper ↗",
      "journey.integrated": "2024 — Present · Integrated master’s–PhD track",
      "journey.select": "Explore the education stages",
      "journey.panel.phdTitle": "Doctoral phase · Biomedical Engineering",
      "journey.panel.phd":
        "The doctoral phase of an integrated master’s–PhD track, exploring intersections between complex diseases, gut microbes and computational methods.",
      "journey.panel.masterTitle": "Master’s phase · Basic Medicine",
      "journey.panel.master":
        "The master’s phase of an integrated master’s–PhD track. Awarded the 2025 National Scholarship for Master’s Students and the Provincial Merit Student Award.",
      "journey.panel.bachelorTitle": "Undergraduate phase · Bachelor of Medicine",
      "journey.panel.bachelor":
        "Undergraduate studies in Basic Medicine from 2019 to 2024. Received the 2021–2022 National Inspiration Scholarship and took part in student leadership and volunteering.",
      "model.zoom": "Zoom into the details",
      "model.zoomIn": "Zoom in on the scene",
      "model.zoomOut": "Zoom out from the scene",
      "flow.pause": "Pause slideshow",
      "flow.play": "Resume slideshow",
      "causal.flowLabel": "Follow the causal path",
      "omics.flowLabel": "Connect the layers",
      "poem.label": "Rotating reflections",
      "poem.previous": "Previous reflection",
      "poem.next": "Next reflection",
      "poem.pause": "Pause reflections",
      "poem.play": "Resume reflections",
      "scene.llm.tokens": "Tokens · Where language begins",
      "scene.llm.attention": "Attention · Connecting context",
      "scene.llm.generation": "Generation · Predicting the next token",
      "scene.causal.instrument": "Instruments · Clues in genetic variation",
      "scene.causal.exposure": "Exposure · Examining the pathway",
      "scene.causal.outcome": "Outcome · Effects and uncertainty",
      "scene.omics.all": "Integration · Bringing evidence together",
      "scene.omics.genome": "Genome · Sequence and variation",
      "scene.omics.transcriptome": "Transcriptome · Changes in expression",
      "scene.omics.proteome": "Proteome · Molecules and function",
      "about.art":
        "An original illustration of teal and vermilion ribbons, microscopic constellations and an open book",
    },
  };
  function initialLanguage() {
    return new URLSearchParams(location.search).get("lang") === "zh" ? "zh" : "en";
  }
  let lang = initialLanguage();
  const t = (key, vars = {}) =>
    (messages[lang][key] ?? messages.zh[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  function apply() {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.title = t("site.title");
    document
      .querySelector("meta[name=description]")
      ?.setAttribute("content", t("site.description"));
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.innerHTML = t(el.dataset.i18n)));
    for (const [suffix, attribute] of [
      ["Aria", "aria-label"],
      ["Placeholder", "placeholder"],
      ["Alt", "alt"],
    ])
      document
        .querySelectorAll("[data-i18n-" + suffix.toLowerCase() + "]")
        .forEach((el) => el.setAttribute(attribute, t(el.dataset["i18n" + suffix])));
    document
      .querySelectorAll("[data-lang-option]")
      .forEach((el) => el.setAttribute("aria-pressed", String(el.dataset.langOption === lang)));
    document
      .querySelectorAll(".cv-link")
      .forEach((el) => el.setAttribute("href", "assets/resume.html?lang=" + lang));
  }
  function setLang(value) {
    lang = value === "en" ? "en" : "zh";
    try {
      const u = new URL(location.href);
      u.searchParams.set("lang", lang);
      history.replaceState(null, "", u);
    } catch {}
    apply();
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  }
  window.WX_I18N = { t, getLang: () => lang, setLang };
  document
    .querySelectorAll("[data-lang-option]")
    .forEach((el) => el.addEventListener("click", () => setLang(el.dataset.langOption)));
  apply();
})();

/* 02 · Theme selection and shared palette */
/* The palette is shared by the page, the artwork and the research scenes. */
(() => {
  "use strict";
  const root = document.documentElement;
  const palettes = Object.freeze({
    guochao: Object.freeze({
      primary: "#12676d",
      secondary: "#c34836",
      accent: "#c49035",
      ink: "#173b42",
      paper: "#fffaf0",
    }),
    porcelain: Object.freeze({
      primary: "#174f9a",
      secondary: "#3c7b9c",
      accent: "#6a9e9a",
      ink: "#132d52",
      paper: "#fbfdff",
    }),
    vermilion: Object.freeze({
      primary: "#b52022",
      secondary: "#282b2c",
      accent: "#927240",
      ink: "#242626",
      paper: "#fffefb",
    }),
    editorial: Object.freeze({
      primary: "#77523d",
      secondary: "#a05e45",
      accent: "#6d8780",
      ink: "#3d302a",
      paper: "#fbf8f2",
    }),
    aurora: Object.freeze({
      primary: "#5a4b9f",
      secondary: "#247ea6",
      accent: "#3e9693",
      ink: "#242c4d",
      paper: "#fafaff",
    }),
  });
  const legacyThemes = Object.freeze({ celadon: "porcelain", ink: "vermilion" });
  const normalize = (value) =>
    Object.prototype.hasOwnProperty.call(legacyThemes, value) ? legacyThemes[value] : value;
  const labels = {
    zh: {
      open: "切换风格",
      heading: "风格",
      close: "关闭风格选项",
      guochao: "青黛流金",
      porcelain: "青花映雪",
      vermilion: "朱砂墨韵",
      editorial: "素笺铜影",
      aurora: "紫霭星河",
    },
    en: {
      open: "Choose a palette",
      heading: "Palette",
      close: "Close palette choices",
      guochao: "Jade, Coral & Gold",
      porcelain: "Blue & White Porcelain",
      vermilion: "Vermilion & Ink",
      editorial: "Copper & Parchment",
      aurora: "Violet & Glacier",
    },
  };
  const rgb = (hex) =>
    hex
      .match(/[a-f\d]{2}/gi)
      .map((value) => parseInt(value, 16))
      .join(",");
  let active = "guochao",
    host,
    trigger,
    panel,
    choiceButtons = [];
  const lang = () => (root.lang.toLowerCase().startsWith("en") ? "en" : "zh");
  function setTheme(value, persist = true) {
    value = normalize(value);
    if (!Object.prototype.hasOwnProperty.call(palettes, value)) return active;
    active = value;
    const palette = palettes[active];
    root.dataset.theme = active;
    for (const [key, color] of Object.entries(palette)) {
      root.style.setProperty("--theme-" + key, color);
      root.style.setProperty("--theme-" + key + "-rgb", rgb(color));
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = palette.paper;
    if (persist) {
      try {
        localStorage.setItem("wx-theme", active);
      } catch {}
    }
    updateUI();
    window.dispatchEvent(
      new CustomEvent("wxthemechange", { detail: { theme: active, palette: { ...palette } } }),
    );
    return active;
  }
  function updateUI() {
    if (!host) return;
    const text = labels[lang()];
    trigger.setAttribute("aria-label", text.open);
    trigger.title = text.open;
    host.querySelector(".theme-trigger-label").textContent = text.heading;
    host.querySelector("#theme-menu-title").textContent = text.heading;
    host.querySelector(".theme-close").setAttribute("aria-label", text.close);
    panel.setAttribute("aria-label", text.open);
    for (const button of choiceButtons) {
      const selected = button.dataset.themeOption === active;
      button.setAttribute("aria-checked", String(selected));
      button.tabIndex = selected ? 0 : -1;
      button.querySelector(".theme-option-name").textContent = text[button.dataset.themeOption];
    }
  }
  function closeMenu(restoreFocus = false) {
    if (!panel) return;
    panel.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (restoreFocus) trigger.focus({ preventScroll: true });
  }
  function openMenu() {
    panel.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    choiceButtons
      .find((button) => button.dataset.themeOption === active)
      ?.focus({ preventScroll: true });
  }
  function init() {
    const actions = document.querySelector(".header-actions");
    if (!actions || document.getElementById("theme-switcher")) return;
    host = document.createElement("div");
    host.id = "theme-switcher";
    host.className = "theme-switcher";
    host.innerHTML =
      '<button class="theme-trigger" id="theme-trigger" type="button" aria-expanded="false" aria-controls="theme-menu" aria-haspopup="true"><span class="theme-trigger-mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="theme-trigger-label"></span></button><div id="theme-menu" class="theme-menu" hidden><div class="theme-menu-heading"><span id="theme-menu-title"></span><button class="theme-close" type="button"><span aria-hidden="true">×</span></button></div><div class="theme-options" role="radiogroup" aria-labelledby="theme-menu-title"></div></div>';
    actions.prepend(host);
    trigger = host.querySelector(".theme-trigger");
    panel = host.querySelector(".theme-menu");
    const choices = host.querySelector(".theme-options");
    for (const [name, palette] of Object.entries(palettes)) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "theme-option";
      button.dataset.themeOption = name;
      button.setAttribute("role", "radio");
      button.innerHTML =
        '<span class="theme-option-colors" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="theme-option-name"></span><span class="theme-option-check" aria-hidden="true">✓</span>';
      [...button.querySelectorAll("i")].forEach((swatch, index) => {
        swatch.style.background = [
          palette.primary,
          palette.secondary,
          palette.accent,
          palette.paper,
        ][index];
      });
      button.addEventListener("click", () => {
        setTheme(name);
        closeMenu(true);
      });
      button.addEventListener("keydown", (event) => {
        let index = choiceButtons.indexOf(button);
        if (event.key === "ArrowDown" || event.key === "ArrowRight")
          index = (index + 1) % choiceButtons.length;
        else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
          index = (index + choiceButtons.length - 1) % choiceButtons.length;
        else if (event.key === "Home") index = 0;
        else if (event.key === "End") index = choiceButtons.length - 1;
        else return;
        event.preventDefault();
        const next = choiceButtons[index];
        setTheme(next.dataset.themeOption);
        next.focus({ preventScroll: true });
      });
      choices.append(button);
      choiceButtons.push(button);
    }
    trigger.addEventListener("click", () => (panel.hidden ? openMenu() : closeMenu()));
    host.querySelector(".theme-close").addEventListener("click", () => closeMenu(true));
    document.addEventListener(
      "pointerdown",
      (event) => {
        if (!panel.hidden && !host.contains(event.target)) closeMenu();
      },
      { passive: true },
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) {
        event.preventDefault();
        closeMenu(true);
      }
    });
    document.addEventListener("focusin", (event) => {
      if (!panel.hidden && !host.contains(event.target)) closeMenu();
    });
    window.addEventListener("languagechange", updateUI);
    window.addEventListener("storage", (event) => {
      if (
        event.key === "wx-theme" &&
        Object.prototype.hasOwnProperty.call(palettes, normalize(event.newValue))
      )
        setTheme(event.newValue, false);
    });
    updateUI();
  }
  window.WX_THEME = Object.freeze({
    get: () => active,
    getPalette: () => ({ ...palettes[active] }),
    set: setTheme,
    palettes,
  });
  try {
    const saved = normalize(localStorage.getItem("wx-theme"));
    if (Object.prototype.hasOwnProperty.call(palettes, saved)) active = saved;
  } catch {}
  setTheme(active, false);
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();

/* 03 · Academic text formatting */
/* Italic gene symbols are explicitly scoped to the papers that discuss genes.
 * Proteins, receptors, pathways and other uppercase abbreviations stay roman.
 * HGNC: https://www.genenames.org/help/faq/ */
(() => {
  "use strict";
  const symbolsByPaper = Object.freeze({
    "pub-2026-fcgr2a": ["FCGR2A"],
    "pub-2025-slc20a2": ["Slc20a2"],
    "pub-2025-atxn3": ["ATXN3"],
  });
  const escape = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char],
    );
  function format(value, paper) {
    const text = String(value ?? ""),
      symbols = symbolsByPaper[typeof paper === "string" ? paper : paper?.id];
    if (!symbols) return escape(text);
    const matcher = new RegExp("\\b(" + symbols.join("|") + ")\\b", "g");
    let result = "",
      cursor = 0;
    for (const match of text.matchAll(matcher)) {
      result +=
        escape(text.slice(cursor, match.index)) +
        '<i class="gene-symbol">' +
        escape(match[0]) +
        "</i>";
      cursor = match.index + match[0].length;
    }
    return result + escape(text.slice(cursor));
  }
  window.WX_ACADEMIC = Object.freeze({
    format,
    escape,
    symbolsFor: (paper) =>
      (symbolsByPaper[typeof paper === "string" ? paper : paper?.id] || []).slice(),
  });
})();

/* 04 · Citation retrieval and display */
/* DOI/title-verified Crossref counts. Failed requests retain the last verified value. */
(() => {
  "use strict";
  const papers = window.PUBLICATIONS || [],
    seed = window.WX_CITATION_DATA || { records: {} },
    ttl = 21600000,
    retryDelay = 300000,
    storageKey = "wx-citations-crossref-v1";
  const records = {},
    english = () => document.documentElement.lang === "en",
    tr = (zh, en) => (english() ? en : zh),
    time = (v) => Date.parse(v) || 0;
  const escape = (v) =>
    String(v ?? "").replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    );
  const valid = (r, p) =>
    Boolean(
      r &&
        p.doi &&
        r.source === "Crossref" &&
        r.doi?.toLowerCase() === p.doi.toLowerCase() &&
        Number.isSafeInteger(r.count) &&
        r.count >= 0 &&
        Number.isFinite(Date.parse(r.checkedAt)),
    );
  let cached;
  try {
    cached = JSON.parse(localStorage.getItem(storageKey) || "null");
  } catch {}
  for (const p of papers) {
    const a = seed.records?.[p.id],
      b = cached?.records?.[p.id];
    records[p.id] =
      valid(b, p) &&
      (!valid(a, p) ||
        time(b.checkedAt) > time(a.checkedAt) ||
        (time(b.checkedAt) === time(a.checkedAt) && time(b.lastAttemptAt) >= time(a.lastAttemptAt)))
        ? b
        : valid(a, p)
          ? a
          : {
              doi: p.doi || null,
              count: null,
              source: "Crossref",
              checkedAt: null,
              status: p.doi ? "unavailable" : "no-doi",
            };
  }
  let attemptedAt = Math.max(time(seed.fetchedAt), time(cached?.attemptedAt)),
    pending = null,
    retryTimer = 0,
    inView = false,
    sync = { phase: "idle", completed: 0, total: 0, failed: 0, at: null };
  const verified = (p) => (valid(records[p.id], p) ? records[p.id] : null),
    maxCount = () => Math.max(1, ...papers.map((p) => verified(p)?.count || 0));
  const scholarURL = (p) =>
    "https://scholar.google.com/scholar?q=" +
    encodeURIComponent(p.doi || '"' + p.title.replace(/\.$/, "") + '"');
  const dateText = (v) =>
    new Intl.DateTimeFormat(english() ? "en-US" : "zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(v));
  function badgeHTML(p) {
    const r = verified(p);
    if (!r || r.count === 0) return "";
    const stale = r.status === "stale",
      date = dateText(r.checkedAt);
    const detail = tr(
      "Crossref 被引次数：" +
        r.count +
        "。核验时间：" +
        date +
        "。" +
        (stale ? "最近刷新暂不可用，保留上次核验值。" : "") +
        "Crossref 与 Google Scholar 的收录范围不同。",
      "Crossref Cited-by: " +
        r.count +
        ". Checked " +
        date +
        ". " +
        (stale ? "The latest refresh was unavailable; this is the last verified value. " : "") +
        "Crossref coverage differs from Google Scholar.",
    );
    const strength = 0.12 + 0.27 * Math.pow(r.count / maxCount(), 0.65),
      label = tr("引用 " + r.count + " · Crossref", r.count + " citations · Crossref"),
      id = "citation-detail-" + p.id;
    return (
      '<span class="citation-wrap"><button type="button" class="citation-badge" data-citation-toggle="' +
      escape(p.id) +
      '" data-citation-count="' +
      r.count +
      '" style="--citation-fill:' +
      Math.round(strength * 100) +
      '%" title="' +
      escape(detail) +
      '" aria-label="' +
      escape(label + tr("，查看来源与核验时间", "; show source and check time")) +
      '" aria-expanded="false" aria-controls="' +
      id +
      '" aria-describedby="' +
      id +
      '">' +
      escape(label) +
      '</button><span class="citation-popover" id="' +
      id +
      '" role="tooltip" hidden>' +
      escape(detail) +
      "</span></span>"
    );
  }
  function scholarHTML(p) {
    return (
      '<a class="scholar-link" href="' +
      escape(scholarURL(p)) +
      '" target="_blank" rel="noopener noreferrer" aria-label="' +
      escape(tr("在 Google Scholar 中检索：", "Find in Google Scholar: ") + p.title) +
      '">Google Scholar ↗</a>'
    );
  }
  const normalize = (t) =>
    String(t || "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/<[^>]*>/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  function titleMatches(a, b) {
    const x = normalize(a),
      y = normalize(b);
    if (x === y) return true;
    const A = new Set(x.split(" ")),
      B = new Set(y.split(" "));
    return [...A].filter((w) => B.has(w)).length / Math.max(1, new Set([...A, ...B]).size) >= 0.88;
  }
  function failed(p, status, now) {
    const old = verified(p);
    records[p.id] = old
      ? { ...old, status: "stale", lastAttemptAt: now, lastError: status }
      : {
          doi: p.doi,
          count: null,
          source: "Crossref",
          checkedAt: null,
          lastAttemptAt: now,
          status,
        };
  }
  function due(p, now = Date.now()) {
    if (!p.doi) return false;
    const r = records[p.id],
      age = now - time(r?.checkedAt);
    if (valid(r, p) && r.status === "verified" && age >= 0 && age < ttl) return false;
    const attemptAge = now - time(r?.lastAttemptAt);
    return !(r?.status !== "verified" && attemptAge >= 0 && attemptAge < retryDelay);
  }
  const controls = document.createElement("div");
  controls.className = "citation-controls";
  controls.innerHTML =
    '<button type="button" class="citation-refresh"><span class="citation-refresh-icon" aria-hidden="true">↻</span><span></span></button><span class="citation-status" role="status" aria-live="polite"></span>';
  const host = document.querySelector(".publication-subtools");
  host?.insertBefore(controls, host.querySelector(".count-and-reset"));
  const button = controls.querySelector("button"),
    status = controls.querySelector(".citation-status");
  function renderStatus() {
    const busy = sync.phase === "refreshing";
    button.disabled = busy;
    button.setAttribute("aria-busy", String(busy));
    controls.dataset.state = sync.phase;
    button.lastElementChild.textContent = tr(
      busy ? "更新中" : "更新引用",
      busy ? "Updating" : "Refresh citations",
    );
    const dates = papers
        .map(verified)
        .filter(Boolean)
        .map((r) => time(r.checkedAt)),
      oldest = dates.length ? Math.min(...dates) : 0;
    let text = oldest
      ? "Crossref · " +
        new Intl.DateTimeFormat(english() ? "en-GB" : "zh-CN", {
          month: "short",
          day: "numeric",
        }).format(new Date(oldest))
      : tr("等待核验", "Awaiting a check");
    if (busy) text = tr("正在核验 ", "Checking ") + sync.completed + "/" + sync.total;
    else if (sync.phase === "offline") text = tr("离线 · 保留缓存", "Offline · cached values");
    else if (sync.phase === "error")
      text = tr("暂未连通 · 保留缓存", "Unavailable · cached values");
    else if (sync.phase === "partial")
      text = tr("部分更新 · 其余保留", "Partly refreshed · cache retained");
    else if (sync.phase === "updated")
      text =
        tr("已核验 · ", "Checked · ") +
        new Intl.DateTimeFormat(english() ? "en-GB" : "zh-CN", {
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date(sync.at));
    else if (papers.some((p) => records[p.id]?.status === "stale"))
      text = tr("上次核验数据", "Previously verified values");
    status.textContent = text;
    const detail = tr(
      "数据源：Crossref。自动刷新间隔为 6 小时；点击可立即重新核验。接口收录有延迟，数值不等同于 Google Scholar。",
      "Source: Crossref. Automatic checks are six hours apart; use this button to check now. Indexing can lag, and counts differ from Google Scholar.",
    );
    button.title = detail;
    status.title =
      detail +
      (oldest ? tr(" 较早核验时间：", " Oldest available check: ") + dateText(oldest) : "");
  }
  function scheduleRetry() {
    clearTimeout(retryTimer);
    if (!inView || document.hidden || navigator.onLine === false) return;
    const indexed = papers.filter((p) => p.doi);
    if (!indexed.length) return;
    const delay = Math.max(
      1000,
      Math.min(
        ...indexed.map((p) => {
          const r = records[p.id];
          return (
            (valid(r, p) && r.status === "verified"
              ? time(r.checkedAt) + ttl
              : time(r?.lastAttemptAt) + retryDelay) - Date.now()
          );
        }),
      ) + 100,
    );
    retryTimer = setTimeout(() => refresh(), delay);
  }
  async function refresh({ force = false } = {}) {
    if (pending) return pending;
    if (navigator.onLine === false) {
      sync.phase = "offline";
      renderStatus();
      return { status: "offline" };
    }
    const indexed = papers.filter((p) => p.doi && (force || due(p)));
    if (!indexed.length) {
      renderStatus();
      scheduleRetry();
      return { status: "cached" };
    }
    clearTimeout(retryTimer);
    sync = { phase: "refreshing", completed: 0, total: indexed.length, failed: 0, at: null };
    renderStatus();
    const task = (async () => {
      let cursor = 0;
      attemptedAt = Date.now();
      await Promise.all(
        Array.from({ length: 1 }, async () => {
          while (cursor < indexed.length) {
            const p = indexed[cursor++],
              now = new Date().toISOString(),
              controller = new AbortController(),
              timeout = setTimeout(() => controller.abort(), 12000);
            try {
              const response = await fetch(
                "https://api.crossref.org/works/" + encodeURIComponent(p.doi),
                {
                  signal: controller.signal,
                  credentials: "omit",
                  cache: "no-cache",
                  headers: { Accept: "application/json" },
                },
              );
              if (!response.ok) {
                failed(
                  p,
                  response.status === 404
                    ? "not-indexed"
                    : response.status === 429
                      ? "rate-limited"
                      : "fetch-failed",
                  now,
                );
                sync.failed++;
                continue;
              }
              const message = (await response.json()).message,
                count = message?.["is-referenced-by-count"];
              if (
                message?.DOI?.toLowerCase() !== p.doi.toLowerCase() ||
                !titleMatches(p.title, message?.title?.[0])
              ) {
                failed(p, "metadata-mismatch", now);
                sync.failed++;
                continue;
              }
              if (!Number.isSafeInteger(count) || count < 0) {
                failed(p, "count-unavailable", now);
                sync.failed++;
                continue;
              }
              records[p.id] = {
                doi: p.doi,
                count,
                source: "Crossref",
                checkedAt: now,
                lastAttemptAt: now,
                status: "verified",
                crossrefTitle: message.title[0],
              };
            } catch {
              failed(p, "fetch-failed", now);
              sync.failed++;
            } finally {
              clearTimeout(timeout);
              sync.completed++;
              renderStatus();
              if (cursor < indexed.length) await new Promise((resolve) => setTimeout(resolve, 300));
            }
          }
        }),
      );
      sync.phase = sync.failed === sync.total ? "error" : sync.failed ? "partial" : "updated";
      sync.at = new Date().toISOString();
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({ attemptedAt: new Date(attemptedAt).toISOString(), records }),
        );
      } catch {}
      renderStatus();
      dispatchEvent(
        new CustomEvent("citationschange", {
          detail: { source: "Crossref", status: sync.phase, attemptedAt: sync.at },
        }),
      );
      return { status: sync.phase, updated: sync.total - sync.failed, failed: sync.failed };
    })();
    pending = task;
    try {
      return await task;
    } finally {
      pending = null;
      scheduleRetry();
    }
  }
  button.addEventListener("click", () => refresh({ force: true }));
  window.WX_CITATIONS = Object.freeze({
    badgeHTML,
    scholarHTML,
    scholarURL,
    refresh,
    info: () => ({
      source: "Crossref",
      max: maxCount(),
      attemptedAt: new Date(attemptedAt || 0).toISOString(),
      sync: { ...sync },
      automaticInterval: ttl,
      retryDelay,
      records: JSON.parse(JSON.stringify(records)),
    }),
  });
  const closePopovers = (except) =>
    document.querySelectorAll(".citation-wrap").forEach((w) => {
      if (w === except) return;
      w.querySelector(".citation-popover").hidden = true;
      w.querySelector(".citation-badge").setAttribute("aria-expanded", "false");
    });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-citation-toggle]");
    if (b) {
      const w = b.closest(".citation-wrap"),
        p = w.querySelector(".citation-popover"),
        open = p.hidden;
      closePopovers(w);
      p.hidden = !open;
      b.setAttribute("aria-expanded", String(open));
      if (open) {
        p.style.left = "0px";
        const box = w.getBoundingClientRect();
        p.style.left =
          Math.max(
            16 - box.left,
            Math.min(0, document.documentElement.clientWidth - 16 - box.left - p.offsetWidth),
          ) + "px";
      }
    } else if (!e.target.closest(".citation-wrap")) closePopovers();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const b = document.querySelector('.citation-badge[aria-expanded="true"]');
      if (b) {
        closePopovers();
        b.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener("focusin", (e) => {
    if (!e.target.closest(".citation-wrap")) closePopovers();
  });
  addEventListener("languagechange", renderStatus);
  addEventListener("online", () => {
    if (inView) refresh({ force: sync.phase === "offline" || sync.phase === "error" });
  });
  addEventListener("offline", () => {
    if (!pending) {
      sync.phase = "offline";
      renderStatus();
    }
    clearTimeout(retryTimer);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearTimeout(retryTimer);
    else if (inView) refresh();
  });
  const section = document.getElementById("publications");
  if (section && "IntersectionObserver" in window)
    new IntersectionObserver(
      (entries) => {
        inView = entries[0].isIntersecting;
        if (inView && !document.hidden) refresh();
        else clearTimeout(retryTimer);
      },
      { rootMargin: "120px 0px" },
    ).observe(section);
  else
    setTimeout(() => {
      inView = true;
      refresh();
    }, 1800);
  renderStatus();
})();

/* 05 · Shared scene input controls */
/* Shared, local-only orbit and zoom controls for the four research illustrations. */
(() => {
  "use strict";
  const inputs = new Map();
  const multiply = (a, b) => [
    a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
    a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
    a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
    a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
  ];
  const turn = (x, y, z, q) => {
    const tx = 2 * (q[1] * z - q[2] * y),
      ty = 2 * (q[2] * x - q[0] * z),
      tz = 2 * (q[0] * y - q[1] * x);
    return [
      x + q[3] * tx + q[1] * tz - q[2] * ty,
      y + q[3] * ty + q[2] * tx - q[0] * tz,
      z + q[3] * tz + q[0] * ty - q[1] * tx,
    ];
  };
  const english = () => document.documentElement.lang === "en";
  function attach(canvas, key, options = {}) {
    if (inputs.has(key) && inputs.get(key).canvas === canvas) return inputs.get(key);
    const state = {
      quaternion: [0, 0, 0, 1],
      zoom: 1,
      dragging: false,
      pointers: 0,
      revision: 0,
      angles: { x: 0, y: 0 },
    };
    const pointers = new Map();
    let previous = null,
      pinch = null;
    canvas.tabIndex = 0;
    canvas.style.touchAction = "none";
    canvas.style.cursor = "grab";
    const bar = document.createElement("div");
    bar.className = "research-view-controls";
    bar.dataset.researchView = key;
    bar.innerHTML =
      '<button type="button" data-view-action="out">−</button><output>100%</output><button type="button" data-view-action="in">+</button><button type="button" data-view-action="reset" class="research-view-reset"></button>';
    canvas.insertAdjacentElement("afterend", bar);
    const info = () => ({
      ...state,
      quaternion: state.quaternion.slice(),
      angles: { ...state.angles },
    });
    const signal = () => {
      state.revision++;
      canvas.dataset.viewZoom = state.zoom.toFixed(3);
      canvas.dataset.viewRotation = state.quaternion.map((n) => n.toFixed(5)).join(",");
      canvas.dataset.viewRevision = String(state.revision);
      canvas.dataset.viewDragging = String(state.dragging);
      bar.querySelector("output").textContent = Math.round(state.zoom * 100) + "%";
      bar.querySelector('[data-view-action="out"]').disabled = state.zoom <= 0.65001;
      bar.querySelector('[data-view-action="in"]').disabled = state.zoom >= 1.99999;
      options.onChange?.(info());
      dispatchEvent(new CustomEvent("researchviewchange", { detail: { module: key, ...info() } }));
    };
    const gesture = (active) => {
      state.dragging = active;
      state.pointers = pointers.size;
      canvas.style.cursor = active ? "grabbing" : "grab";
      canvas.dataset.viewDragging = String(active);
      options.onGesture?.(active);
      dispatchEvent(new CustomEvent("researchviewgesture", { detail: { module: key, active } }));
    };
    const setZoom = (n) => {
      if (!Number.isFinite(Number(n))) return;
      state.zoom = Math.max(0.65, Math.min(2, Number(n)));
      signal();
    };
    const rotate = (yaw, pitch) => {
      const y = [0, Math.sin(yaw / 2), 0, Math.cos(yaw / 2)],
        x = [Math.sin(pitch / 2), 0, 0, Math.cos(pitch / 2)];
      const q = multiply(x, multiply(y, state.quaternion)),
        norm = Math.hypot(...q) || 1;
      state.quaternion = q.map((n) => n / norm);
      state.angles.x += pitch;
      state.angles.y += yaw;
      signal();
    };
    const distance = () => {
      const p = [...pointers.values()];
      return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
    };
    const clear = () => {
      const ids = [...pointers.keys()];
      pointers.clear();
      previous = null;
      pinch = null;
      gesture(false);
      for (const id of ids) if (canvas.hasPointerCapture?.(id)) canvas.releasePointerCapture(id);
    };
    const reset = () => {
      clear();
      state.quaternion = [0, 0, 0, 1];
      state.zoom = 1;
      state.angles = { x: 0, y: 0 };
      signal();
    };
    canvas.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "touch" && e.button !== 0) return;
      e.preventDefault();
      canvas.focus({ preventScroll: true });
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      canvas.setPointerCapture(e.pointerId);
      if (pointers.size === 1) previous = { id: e.pointerId, x: e.clientX, y: e.clientY };
      else {
        pinch = { distance: Math.max(1, distance()), zoom: state.zoom };
        previous = null;
      }
      gesture(true);
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!pointers.has(e.pointerId)) return;
      e.preventDefault();
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size > 1 && pinch) {
        setZoom((pinch.zoom * distance()) / pinch.distance);
        return;
      }
      if (!previous || previous.id !== e.pointerId) return;
      const speed =
        (Math.PI * 1.5) / Math.max(160, Math.min(canvas.clientWidth, canvas.clientHeight));
      rotate((e.clientX - previous.x) * speed, (e.clientY - previous.y) * speed);
      previous = { id: e.pointerId, x: e.clientX, y: e.clientY };
    });
    const end = (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      pinch = null;
      if (canvas.hasPointerCapture?.(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      if (pointers.size) {
        const [id, p] = [...pointers.entries()][0];
        previous = { id, ...p };
      } else {
        previous = null;
        gesture(false);
      }
      state.pointers = pointers.size;
    };
    ["pointerup", "pointercancel", "lostpointercapture"].forEach((type) =>
      canvas.addEventListener(type, end),
    );
    canvas.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? canvas.clientHeight : 1;
        setZoom(state.zoom * Math.exp(-Math.max(-600, Math.min(600, e.deltaY * unit)) * 0.0016));
      },
      { passive: false },
    );
    canvas.addEventListener("keydown", (e) => {
      if (
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "+", "=", "-", "_"].includes(
          e.key,
        )
      ) {
        e.preventDefault();
        if (e.key === "Home") reset();
        else if (e.key === "+" || e.key === "=") setZoom(state.zoom * 1.12);
        else if (e.key === "-" || e.key === "_") setZoom(state.zoom / 1.12);
        else
          rotate(
            e.key === "ArrowLeft" ? -0.16 : e.key === "ArrowRight" ? 0.16 : 0,
            e.key === "ArrowUp" ? -0.16 : e.key === "ArrowDown" ? 0.16 : 0,
          );
      }
    });
    bar.addEventListener("click", (e) => {
      const action = e.target.closest("button")?.dataset.viewAction;
      if (action === "out") setZoom(state.zoom / 1.15);
      if (action === "in") setZoom(state.zoom * 1.15);
      if (action === "reset") reset();
    });
    function refresh() {
      const en = english();
      bar.setAttribute("role", "group");
      bar.setAttribute("aria-label", en ? "Illustration view" : "图案视角");
      bar
        .querySelector('[data-view-action="out"]')
        .setAttribute("aria-label", en ? "Zoom out" : "缩小");
      bar
        .querySelector('[data-view-action="in"]')
        .setAttribute("aria-label", en ? "Zoom in" : "放大");
      bar.querySelector('[data-view-action="reset"]').textContent = en ? "Reset ↺" : "复位 ↺";
      bar.querySelector("output").setAttribute("aria-label", en ? "Zoom level" : "缩放比例");
    }
    addEventListener("languagechange", refresh);
    addEventListener("blur", clear);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) clear();
    });
    refresh();
    const api = {
      canvas,
      state,
      info,
      setZoom,
      rotate,
      reset,
      refresh,
      project: (x, y, z = 0) => turn(x, y, z, state.quaternion),
    };
    inputs.set(key, api);
    signal();
    return api;
  }
  const defaults = {
    guochao: {
      primary: "#176b73",
      secondary: "#bc4c40",
      accent: "#b48a47",
      ink: "#203b40",
      paper: "#f8f3e9",
    },
    celadon: {
      primary: "#237f7b",
      secondary: "#7b77a5",
      accent: "#b39360",
      ink: "#243e45",
      paper: "#f7f9f6",
    },
    vermilion: {
      primary: "#a6332a",
      secondary: "#6a4940",
      accent: "#ac813b",
      ink: "#2f2925",
      paper: "#f4ecdf",
    },
    ink: {
      primary: "#235d48",
      secondary: "#698377",
      accent: "#a7804c",
      ink: "#213b32",
      paper: "#f8faf7",
    },
    editorial: {
      primary: "#2e475f",
      secondary: "#ac3e3e",
      accent: "#a78347",
      ink: "#283747",
      paper: "#f3ecdf",
    },
  };
  let activePalette = defaults[document.documentElement.dataset.theme] || defaults.guochao;
  const palette = () =>
    window.WX_THEME?.getPalette?.() ||
    window.WX_THEME?.palettes?.[window.WX_THEME?.get?.()] ||
    activePalette;
  function recolor(root, T) {
    if (!root || !T) return;
    const p = palette(),
      seen = new Set(),
      swatches = [],
      mapColor = (original) => {
        const hsl = {};
        original.getHSL(hsl);
        if (hsl.s < 0.035) return original.clone();
        let key =
          hsl.h < 0.11 || hsl.h > 0.87
            ? "secondary"
            : hsl.h < 0.19
              ? "accent"
              : hsl.h < 0.55
                ? "primary"
                : hsl.h < 0.72
                  ? "accent"
                  : "secondary";
        const target = new T.Color(p[key]),
          th = {};
        target.getHSL(th);
        return new T.Color().setHSL(
          th.h,
          Math.min(0.68, th.s * 0.72 + hsl.s * 0.17),
          Math.min(0.9, Math.max(0.07, hsl.l * 0.83 + th.l * 0.17)),
        );
      };
    root.traverse((object) => {
      for (const mat of Array.isArray(object.material) ? object.material : [object.material]) {
        if (!mat || seen.has(mat)) continue;
        seen.add(mat);
        for (const field of ["color", "emissive"]) {
          if (!mat[field]?.isColor || mat.map) continue;
          const key = "wxOriginal" + field;
          if (!mat.userData[key]) mat.userData[key] = mat[field].clone();
          mat[field].copy(mapColor(mat.userData[key]));
          if (field === "color") swatches.push(mat[field].getHexString());
        }
      }
      for (const attr of [object.geometry?.attributes?.color, object.instanceColor]) {
        if (!attr || seen.has(attr)) continue;
        seen.add(attr);
        if (!attr.wxOriginal) attr.wxOriginal = Float32Array.from(attr.array);
        for (let i = 0; i < attr.count; i++) {
          const c = mapColor(new T.Color().fromArray(attr.wxOriginal, i * 3));
          attr.setXYZ(i, c.r, c.g, c.b);
        }
        attr.needsUpdate = true;
      }
    });
    return { materials: swatches.length, colors: swatches.slice(0, 16) };
  }
  const cssCache = new Map();
  function hsl(hex) {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255),
      max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      d = max - min,
      l = (max + min) / 2;
    if (!d) return { h: 0, s: 0, l };
    let h =
      max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return { h: h / 6, s: d / (1 - Math.abs(2 * l - 1)), l };
  }
  function hex(h, s, l) {
    const a = s * Math.min(l, 1 - l),
      channel = (n) => {
        const k = (n + h * 12) % 12;
        return Math.round((l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))) * 255)
          .toString(16)
          .padStart(2, "0");
      };
    return "#" + channel(0) + channel(8) + channel(4);
  }
  function css(color) {
    if (typeof color !== "string" || !/^#[0-9a-f]{6}$/i.test(color)) return color;
    if (cssCache.has(color)) return cssCache.get(color);
    const original = hsl(color);
    if (original.s < 0.035) return color;
    const p = palette(),
      key =
        original.h < 0.11 || original.h > 0.87
          ? "secondary"
          : original.h < 0.19
            ? "accent"
            : original.h < 0.55
              ? "primary"
              : original.h < 0.72
                ? "accent"
                : "secondary",
      target = hsl(p[key]);
    const result = hex(
      target.h,
      Math.min(0.68, target.s * 0.72 + original.s * 0.17),
      Math.min(0.9, Math.max(0.07, original.l * 0.83 + target.l * 0.17)),
    );
    cssCache.set(color, result);
    return result;
  }
  addEventListener("wxthemechange", (e) => {
    activePalette = e.detail?.palette || palette();
    cssCache.clear();
  });
  window.WX_RESEARCH_INPUTS = {
    attach,
    get: (key) => inputs.get(key),
    info: () => Object.fromEntries([...inputs].map(([key, input]) => [key, input.info()])),
  };
  window.WX_VISUAL_PALETTE = { get: palette, recolor, css };
})();

/* 06 · Hero scientific artwork */
/* Local BIO × AI artwork. Bacterial shapes are stylized rods and cocci,
 * without nuclei or species-specific claims. This module owns no renderer,
 * animation loop, network request, document event, or page-level motion state. */
(() => {
  "use strict";
  const TOPICS = ["ai", "microbes", "data"];
  const identity = [0, 0, 0, 1];
  const multiply = (a, b) => [
    a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
    a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
    a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
    a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
  ];
  const turn = (x, y, z, q = identity) => {
    const tx = 2 * (q[1] * z - q[2] * y),
      ty = 2 * (q[2] * x - q[0] * z),
      tz = 2 * (q[0] * y - q[1] * x);
    return [
      x + q[3] * tx + q[1] * tz - q[2] * ty,
      y + q[3] * ty + q[2] * tx - q[0] * tz,
      z + q[3] * tz + q[0] * ty - q[1] * tx,
    ];
  };
  const layout = (compact) =>
    compact
      ? {
          ai: [-2.92, 2.48, -0.35, 0.8],
          microbes: [2.82, -2.55, 0.1, 0.82],
          data: [2.96, 2.55, -0.8, 0.8],
        }
      : {
          ai: [-3.86, 2.48, -0.35, 1.1],
          microbes: [3.78, -2.47, 0.1, 1.08],
          data: [3.82, 2.88, -0.8, 1],
        };
  function create(T) {
    const group = new T.Group();
    group.name = "hero-universe";
    const pickTargets = [],
      clusters = {},
      strengths = { ai: 0, microbes: 0, data: 0 },
      reactive = [];
    let animationTime = 0,
      lastCompact = null,
      selectedTopic = "scene";
    const manualQuaternion = new T.Quaternion();
    const v = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
    const seed = (i) => {
      const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
      return x - Math.floor(x);
    };
    const pearl = (color, options = {}) =>
      new T.MeshPhysicalMaterial({
        color,
        roughness: 0.26,
        metalness: 0.2,
        clearcoat: 0.85,
        clearcoatRoughness: 0.2,
        envMapIntensity: 0.65,
        ...options,
      });
    const line = (points, color, opacity = 0.35) =>
      new T.Line(
        new T.BufferGeometry().setFromPoints(points),
        new T.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false }),
      );
    const sphere = new T.SphereGeometry(1, 20, 14);
    const bead = (parent, position, radius, color, topic, options = {}) => {
      const mat = pearl(color, { emissive: color, emissiveIntensity: 0.08, ...options }),
        mesh = new T.Mesh(sphere, mat);
      mesh.position.copy(position);
      mesh.scale.setScalar(radius);
      parent.add(mesh);
      if (topic) pick(mesh, topic);
      return mesh;
    };
    const pick = (mesh, topic) => {
      mesh.userData.heroTopic = topic;
      pickTargets.push(mesh);
      return mesh;
    };
    const cluster = (topic) => {
      const result = new T.Group();
      result.name = "hero-universe-" + topic;
      result.userData.heroTopic = topic;
      clusters[topic] = result;
      group.add(result);
      return result;
    };
    const responsiveMaterial = (mat, topic, intensity = 0.08) => {
      mat.emissiveIntensity = intensity;
      reactive.push({ mat, topic, intensity, opacity: mat.opacity });
      return mat;
    };
    function roundedPlate(width, height, depth, radius) {
      const shape = new T.Shape(),
        x = -width / 2,
        y = -height / 2,
        r = radius;
      shape.moveTo(x + r, y);
      shape.lineTo(x + width - r, y);
      shape.quadraticCurveTo(x + width, y, x + width, y + r);
      shape.lineTo(x + width, y + height - r);
      shape.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
      shape.lineTo(x + r, y + height);
      shape.quadraticCurveTo(x, y + height, x, y + height - r);
      shape.lineTo(x, y + r);
      shape.quadraticCurveTo(x, y, x + r, y);
      const geometry = new T.ExtrudeGeometry(shape, {
        depth,
        steps: 1,
        bevelEnabled: true,
        bevelSize: 0.045,
        bevelThickness: 0.04,
        bevelSegments: 3,
        curveSegments: 8,
      });
      geometry.translate(0, 0, -depth / 2);
      return geometry;
    }

    // Three translucent, thick attention layers form a miniature AI sculpture.
    const ai = cluster("ai"),
      stack = new T.Group();
    ai.add(stack);
    const plateGeometry = roundedPlate(1.7, 1.55, 0.11, 0.17),
      tileGeometry = new T.BoxGeometry(0.22, 0.22, 0.065);
    const layers = [],
      matrix = new T.Object3D(),
      cells = [],
      nodePositions = [];
    const layerColors = [0x78b7c7, 0x8e9ad0, 0xb79dce];
    for (let i = 0; i < 3; i++) {
      const layer = new T.Group(),
        material = responsiveMaterial(
          pearl(layerColors[i], {
            transparent: true,
            opacity: 0.56,
            depthWrite: false,
            emissive: layerColors[i],
          }),
          "ai",
          0.045,
        );
      const panel = pick(new T.Mesh(plateGeometry, material), "ai");
      layer.add(panel);
      const edge = new T.LineSegments(
        new T.EdgesGeometry(plateGeometry, 26),
        new T.LineBasicMaterial({
          color: i ? 0xb6b5db : 0xa9d8de,
          transparent: true,
          opacity: 0.42,
        }),
      );
      layer.add(edge);
      const cellMaterial = responsiveMaterial(
        pearl(i ? 0x8c92c6 : 0x66b2bf, { emissive: layerColors[i], emissiveIntensity: 0.08 }),
        "ai",
        0.08,
      );
      const dots = new T.InstancedMesh(tileGeometry, cellMaterial, 9);
      dots.instanceMatrix.setUsage(T.DynamicDrawUsage);
      for (let j = 0; j < 9; j++) {
        matrix.position.set(((j % 3) - 1) * 0.43, (1 - Math.floor(j / 3)) * 0.41, 0.12);
        matrix.scale.set(1, 1, 0.7 + seed(i * 20 + j) * 1.7);
        matrix.updateMatrix();
        dots.setMatrixAt(j, matrix.matrix);
        dots.setColorAt(
          j,
          new T.Color(j % 4 === 0 ? 0xd2e7ed : j % 3 === 0 ? 0xa7cbd1 : layerColors[i]),
        );
      }
      layer.add(dots);
      stack.add(layer);
      layers.push(layer);
      cells.push(dots);
    }
    stack.rotation.set(0.42, -0.6, -0.15);
    const nodeLinks = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.2,
        p = v(Math.cos(a) * 1.4, Math.sin(a) * 1.28, Math.sin(a * 2) * 0.35 + 0.05);
      nodePositions.push(p);
      bead(ai, p, i % 2 ? 0.09 : 0.13, i % 2 ? 0x9aabd4 : 0x7ebfc5, "ai", {
        roughness: 0.17,
        metalness: 0.3,
      });
      const end = v(Math.sign(p.x) * 0.78, Math.sign(p.y) * 0.5, 0);
      const curve = new T.QuadraticBezierCurve3(
        p,
        p
          .clone()
          .lerp(end, 0.5)
          .add(v(0, 0, 0.25)),
        end,
      );
      const wire = line(curve.getPoints(28), i % 2 ? 0xaab2d7 : 0x7bbbc7, 0.44);
      ai.add(wire);
      nodeLinks.push({ curve, wire });
    }
    // Two small vector tokens, with engraved bars rather than HUD text.
    const tokenGeometry = roundedPlate(0.62, 0.31, 0.1, 0.08);
    [-1, 1].forEach((side, i) => {
      const token = pick(
        new T.Mesh(
          tokenGeometry,
          responsiveMaterial(
            pearl(i ? 0xb9b4d6 : 0x8fc8cf, { emissive: i ? 0xa69ecb : 0x67afb9 }),
            "ai",
            0.03,
          ),
        ),
        "ai",
      );
      token.position.set(side * 1.1, side * -0.78, 0.46);
      token.rotation.set(0.1, side * 0.2, side * 0.25);
      ai.add(token);
      for (let j = 0; j < 3; j++) {
        const bar = new T.Mesh(
          new T.BoxGeometry(0.028, 0.08 + j * 0.025, 0.018),
          pearl(0xe7f3f4, { metalness: 0.1 }),
        );
        bar.position.set((j - 1) * 0.105, 0, 0.095);
        token.add(bar);
      }
    });
    const aiPacket = new T.InstancedMesh(
      new T.SphereGeometry(0.048, 10, 8),
      pearl(0xd9f7f2, { emissive: 0x7fc1d3, emissiveIntensity: 0.45 }),
      6,
    );
    aiPacket.instanceMatrix.setUsage(T.DynamicDrawUsage);
    ai.add(aiPacket);

    // A small bacterial community: smooth rods, separate coccoid cells, no nuclei.
    const microbes = cluster("microbes"),
      bacteria = [],
      cocci = new T.Group();
    microbes.add(cocci);
    function bacterium(length, radius, color, offset, rotation) {
      const body = new T.Group();
      body.position.copy(offset);
      body.rotation.set(...rotation);
      microbes.add(body);
      const mat = responsiveMaterial(
        pearl(color, {
          transparent: true,
          opacity: 0.85,
          emissive: color,
          roughness: 0.27,
          metalness: 0.12,
        }),
        "microbes",
        0.035,
      );
      const cell = pick(new T.Mesh(new T.CapsuleGeometry(radius, length, 8, 24), mat), "microbes");
      body.add(cell);
      const coat = new T.Mesh(
        new T.CapsuleGeometry(radius * 1.055, length, 8, 24),
        pearl(color, {
          transparent: true,
          opacity: 0.17,
          depthWrite: false,
          roughness: 0.2,
          metalness: 0.05,
        }),
      );
      body.add(coat);
      // Small dispersed inclusions suggest cytoplasm, with no central compartment.
      const grain = new T.InstancedMesh(
        new T.SphereGeometry(0.035, 8, 6),
        pearl(color, {
          transparent: true,
          opacity: 0.58,
          emissive: color,
          emissiveIntensity: 0.04,
        }),
        9,
      );
      for (let i = 0; i < 9; i++) {
        matrix.position.set(
          Math.cos(i * 2.4) * radius * 0.52,
          (i / 8 - 0.5) * length * 1.12,
          Math.sin(i * 2.4) * radius * 0.52,
        );
        matrix.scale.setScalar(0.7 + seed(i + length) * 0.55);
        matrix.updateMatrix();
        grain.setMatrixAt(i, matrix.matrix);
      }
      body.add(grain);
      // A slim longitudinal membrane reflection defines the rounded capsule.
      const glint = [];
      for (let i = 0; i <= 48; i++) {
        const t = i / 48,
          y = (t - 0.5) * (length + radius * 1.3),
          end = Math.max(0, Math.abs(y) - length / 2),
          r = Math.sqrt(Math.max(0.001, radius * radius - end * end));
        glint.push(v(-r * 0.49, y, r * 0.87));
      }
      body.add(line(glint, color === 0x65b9a9 ? 0xc2ece0 : 0xf1d1bd, 0.68));
      if (color === 0x65b9a9) {
        // One flagellum and a few short pili distinguish the artistic cell from a capsule.
        const end = -length / 2 - radius;
        const flagellum = new T.CatmullRomCurve3([
          v(0, end, 0),
          v(0.12, end - 0.19, 0.05),
          v(0.34, end - 0.38, 0.08),
          v(0.23, end - 0.61, 0.12),
          v(-0.1, end - 0.77, 0.08),
          v(-0.27, end - 0.95, 0.01),
        ]);
        body.add(
          new T.Mesh(
            new T.TubeGeometry(flagellum, 64, 0.012, 6, false),
            pearl(0x71b4a6, { transparent: true, opacity: 0.67, roughness: 0.3, metalness: 0.08 }),
          ),
        );
        [-0.32, 0.28].forEach((y, i) =>
          [-1, 1].forEach((side) => {
            const pilus = new T.CatmullRomCurve3([
              v(side * radius * 0.91, y, 0.11),
              v(side * (radius + 0.13), y + (i ? 0.035 : -0.045), 0.14),
              v(side * (radius + 0.25), y + (i ? 0.1 : -0.08), 0.1),
            ]);
            body.add(
              new T.Mesh(
                new T.TubeGeometry(pilus, 16, 0.009, 5, false),
                pearl(0x78b8ad, {
                  transparent: true,
                  opacity: 0.65,
                  roughness: 0.3,
                  metalness: 0.05,
                }),
              ),
            );
          }),
        );
      }
      bacteria.push({ body, position: offset.clone(), rotation: rotation.slice() });
      return body;
    }
    bacterium(1.1, 0.31, 0x65b9a9, v(-0.16, 0.05, 0), [0.17, -0.25, -0.57]);
    bacterium(0.67, 0.23, 0xd89988, v(0.8, -0.7, 0.12), [-0.3, 0.32, 0.58]);
    const cocciMat = responsiveMaterial(
      pearl(0xc8af88, { emissive: 0xc3a77d, roughness: 0.24, metalness: 0.12 }),
      "microbes",
      0.025,
    );
    [
      [-0.82, -0.75, -0.06, 0.24],
      [-0.98, -0.36, 0.03, 0.23],
      [-0.88, 0.05, 0.08, 0.22],
    ].forEach(([x, y, z, r]) => {
      const cell = pick(new T.Mesh(sphere, cocciMat), "microbes");
      cell.position.set(x, y, z);
      cell.scale.setScalar(r);
      cocci.add(cell);
    });
    bead(microbes, v(0.7, 0.84, -0.02), 0.23, 0xdba99a, "microbes", { roughness: 0.24 });
    bead(microbes, v(1, 0.56, 0.11), 0.21, 0xd8b3a0, "microbes", { roughness: 0.24 });

    // A single folded data thread gives the composition a third, distinct shape.
    const data = cluster("data"),
      knotCurve = new T.Curve();
    knotCurve.getPoint = (t) => {
      const a = t * Math.PI * 2;
      return v(
        (2 + Math.cos(3 * a)) * Math.cos(2 * a) * 0.28,
        (2 + Math.cos(3 * a)) * Math.sin(2 * a) * 0.28,
        Math.sin(3 * a) * 0.3,
      );
    };
    const knotGeometry = new T.TubeGeometry(knotCurve, 220, 0.095, 12, true),
      knotColors = [],
      positions = knotGeometry.getAttribute("position");
    const knotPalette = [
      new T.Color(0x80bdc3),
      new T.Color(0x8e9ed2),
      new T.Color(0xbea0c5),
      new T.Color(0x91cec5),
    ];
    for (let i = 0; i < positions.count; i++) {
      const t = (Math.floor(i / 13) / 220) * 3,
        j = Math.min(2, Math.floor(t)),
        c = knotPalette[j].clone().lerp(knotPalette[j + 1], t - j);
      knotColors.push(c.r, c.g, c.b);
    }
    knotGeometry.setAttribute("color", new T.Float32BufferAttribute(knotColors, 3));
    const knotMaterial = responsiveMaterial(
      pearl(0xffffff, { vertexColors: true, roughness: 0.23, metalness: 0.25, emissive: 0x9ab4ce }),
      "data",
      0.05,
    );
    const knot = pick(new T.Mesh(knotGeometry, knotMaterial), "data");
    data.add(knot);
    const knotAccent = line(
      knotCurve.getPoints(220).map((p) => p.add(v(0, 0, 0.065))),
      0xd5e4ed,
      0.55,
    );
    data.add(knotAccent);
    const knotLight = bead(data, v(), 0.064, 0xe4fcf1, null, {
      emissive: 0xa2d2d7,
      emissiveIntensity: 0.55,
      metalness: 0.1,
    });
    // Broad invisible hit areas make the hollow knot and small cells easy to tap.
    const proxyMaterial = new T.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      depthWrite: false,
      colorWrite: false,
    });
    TOPICS.forEach((topic) => {
      const proxy = new T.Mesh(
        new T.SphereGeometry(topic === "data" ? 1.02 : 1.43, 16, 10),
        proxyMaterial,
      );
      proxy.name = "hero-universe-hit-" + topic;
      proxy.userData.heroTopic = topic;
      proxy.userData.heroHitProxy = true;
      clusters[topic].add(proxy);
      pickTargets.unshift(proxy);
    });

    const flows = new T.Group();
    flows.name = "hero-universe-flow";
    group.add(flows);
    const flowLines = [0, 1, 2].map((i) => {
      const wire = line(
        Array.from({ length: 81 }, () => v()),
        [0x8eb5c6, 0xb8aacb, 0x88bdb5][i],
        i === 2 ? 0.15 : 0.24,
      );
      flows.add(wire);
      return wire;
    });
    const flowDots = new T.InstancedMesh(
      new T.SphereGeometry(0.035, 10, 8),
      pearl(0xc8eae5, { emissive: 0x93bbc9, emissiveIntensity: 0.4 }),
      6,
    );
    flowDots.instanceMatrix.setUsage(T.DynamicDrawUsage);
    flows.add(flowDots);
    let flowCurves = [];
    function arrange(compact) {
      const positions = layout(compact);
      TOPICS.forEach((topic) => {
        const p = positions[topic];
        clusters[topic].position.set(p[0], p[1], p[2]);
      });
      const aiP = clusters.ai.position,
        bugP = clusters.microbes.position,
        dataP = clusters.data.position,
        edge = compact ? 4.1 : 5.35;
      flowCurves = [
        new T.CatmullRomCurve3([
          aiP.clone().add(v(0.3, 0.7, -0.5)),
          v(-1.1, compact ? 4.15 : 4.45, -2),
          v(1.6, compact ? 3.8 : 4.3, -2.2),
          dataP.clone(),
        ]),
        new T.CatmullRomCurve3([
          dataP.clone().add(v(0.3, -0.25, -0.4)),
          v(edge, 1.1, -1.4),
          v(edge * 0.94, -1.25, -1.2),
          bugP.clone().add(v(0.4, 0.1, -0.4)),
        ]),
        new T.CatmullRomCurve3([
          aiP.clone().add(v(-0.4, -0.6, -0.6)),
          v(-edge * 0.94, -0.9, -2),
          v(-2.2, compact ? -3.9 : -4.1, -2.3),
          v(0.8, -4.1, -2),
          bugP.clone().add(v(-0.6, -0.3, -0.3)),
        ]),
      ];
      flowCurves.forEach((curve, i) => {
        const attr = flowLines[i].geometry.getAttribute("position");
        for (let j = 0; j <= 80; j++) {
          const p = curve.getPoint(j / 80);
          attr.setXYZ(j, p.x, p.y, p.z);
        }
        attr.needsUpdate = true;
        flowLines[i].geometry.computeBoundingSphere();
      });
    }
    function update(time, dt = 1 / 60, options = {}) {
      const compact = Boolean(options.compact),
        paused = Boolean(options.paused),
        selected = TOPICS.includes(options.selected)
          ? options.selected
          : options.selected === "helix"
            ? "helix"
            : "scene";
      selectedTopic = selected;
      if (!paused) animationTime = Number(time) || 0;
      const t = animationTime,
        amount = paused ? 1 : 1 - Math.exp(-Math.max(0.001, dt) * 7),
        locations = layout(compact);
      if (compact !== lastCompact) {
        arrange(compact);
        lastCompact = compact;
      }
      TOPICS.forEach((topic) => {
        strengths[topic] += ((selected === topic ? 1 : 0) - strengths[topic]) * amount;
        const p = locations[topic],
          active = strengths[topic];
        clusters[topic].position.y =
          p[1] + Math.sin(t * 0.26 + TOPICS.indexOf(topic) * 1.7) * 0.075;
        clusters[topic].scale.setScalar(p[3] * (1 + active * 0.085));
        clusters[topic].userData.selected = selected === topic;
      });
      ai.rotation.set(
        Math.sin(t * 0.18) * 0.075,
        Math.sin(t * 0.13) * 0.13,
        Math.sin(t * 0.1) * 0.045,
      );
      layers.forEach((layer, i) => {
        layer.position.set((i - 1) * 0.03, (i - 1) * 0.05, (i - 1) * (0.79 + strengths.ai * 0.2));
        layer.rotation.set(0, (i - 1) * 0.06, (i - 1) * 0.13 + Math.sin(t * 0.21 + i) * 0.025);
        for (let j = 0; j < 9; j++) {
          const wave = Math.max(0, Math.cos(t * 1.2 - j * 0.7 - i * 0.9)) ** 5;
          matrix.position.set(
            ((j % 3) - 1) * 0.43,
            (1 - Math.floor(j / 3)) * 0.41,
            0.12 + wave * 0.055,
          );
          matrix.scale.set(1, 1, 0.7 + seed(i * 20 + j) * 1.7 + wave * 1.6);
          matrix.updateMatrix();
          cells[i].setMatrixAt(j, matrix.matrix);
        }
        cells[i].instanceMatrix.needsUpdate = true;
      });
      nodeLinks.forEach(({ curve }, i) => {
        matrix.position.copy(curve.getPoint((t * 0.1 + i / 6) % 1));
        matrix.scale.setScalar(0.8);
        matrix.updateMatrix();
        aiPacket.setMatrixAt(i, matrix.matrix);
      });
      aiPacket.instanceMatrix.needsUpdate = true;
      microbes.rotation.set(
        Math.sin(t * 0.15) * 0.1,
        Math.sin(t * 0.17) * 0.23,
        Math.sin(t * 0.11) * 0.055,
      );
      bacteria.forEach(({ body, position, rotation }, i) => {
        body.position.copy(position).multiplyScalar(1 + strengths.microbes * 0.12);
        body.position.y += Math.sin(t * 0.5 + i * 2) * 0.055;
        body.rotation.set(
          rotation[0] + Math.sin(t * 0.18 + i) * 0.09,
          rotation[1] + Math.sin(t * 0.2 + i) * 0.16,
          rotation[2] + Math.sin(t * 0.26 + i) * 0.08,
        );
      });
      cocci.rotation.z = Math.sin(t * 0.23) * 0.06;
      data.rotation.set(
        0.35 + Math.sin(t * 0.19) * 0.12,
        -0.25 + Math.sin(t * 0.15) * 0.22,
        0.12 + t * 0.045,
      );
      TOPICS.forEach((topic) =>
        clusters[topic].quaternion.premultiply(
          manualQuaternion.fromArray(options.orientations?.[topic] || identity),
        ),
      );
      knot.scale.setScalar(1 + strengths.data * 0.05);
      knotLight.position.copy(knotCurve.getPoint((t * 0.085) % 1));
      const pulseAge = Number.isFinite(options.pulseAge) ? options.pulseAge : 10,
        pulse = pulseAge < 3.5 ? Math.exp(-pulseAge * 0.9) * 0.1 : 0;
      reactive.forEach(({ mat, topic, intensity, opacity }) => {
        mat.emissiveIntensity = intensity + strengths[topic] * 0.23 + pulse;
        if (mat.transparent) mat.opacity = Math.min(0.91, opacity + strengths[topic] * 0.12);
      });
      for (let i = 0; i < 6; i++) {
        const curve = flowCurves[i % 3],
          q = (t * [0.048, 0.06, 0.037][i % 3] + i / 6) % 1;
        matrix.position.copy(curve.getPoint(q));
        matrix.scale.setScalar(0.72 + Math.sin(q * Math.PI) * 0.45);
        matrix.updateMatrix();
        flowDots.setMatrixAt(i, matrix.matrix);
      }
      flowDots.instanceMatrix.needsUpdate = true;
      group.userData.selected = selected;
      group.userData.compact = compact;
      group.userData.animationTime = t;
    }
    function getFocusPoints() {
      group.updateWorldMatrix(true, false);
      return Object.fromEntries(
        TOPICS.map((topic) => [topic, group.localToWorld(clusters[topic].position.clone())]),
      );
    }
    update(0, 1, { paused: true });
    return {
      group,
      update,
      pickTargets,
      getFocusPoints,
      getState: () => ({
        selected: selectedTopic,
        compact: lastCompact,
        animationTime,
        topics: TOPICS.slice(),
      }),
    };
  }

  let fallbackTime = 0;
  const fallbackGeometry = (w, h, options = {}) => {
    const compact = Boolean(options.compact),
      scale = Math.min(w / (compact ? 10.5 : 15), h / 13.8) * (Number(options.zoom) || 1),
      p = layout(compact);
    const orientation = options.orientations?.scene || identity;
    return {
      compact,
      scale,
      p,
      project: (x, y, z = 0) => {
        const q = turn(x, y, z, orientation);
        return [w / 2 + q[0] * scale, h / 2 - q[1] * scale];
      },
    };
  };
  function drawFallback(ctx, time, w, h, options = {}) {
    if (!options.paused) fallbackTime = Number(time) || 0;
    const t = fallbackTime,
      { compact, scale, p, project } = fallbackGeometry(w, h, options),
      selected = options.selected;
    const path = (points, color, width = 1, alpha = 1) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      points.forEach((a, i) => (i ? ctx.lineTo(...a) : ctx.moveTo(...a)));
      ctx.stroke();
      ctx.restore();
    };
    const dot = (x, y, radius, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };
    const curves = [
      [p.ai, [-1.1, compact ? 4.1 : 4.45], [1.6, compact ? 3.8 : 4.3], p.data],
      [p.data, [compact ? 4.1 : 5.35, 1.2], [compact ? 4 : 5, -1.3], p.microbes],
      [p.ai, [compact ? -4.1 : -5.1, -2], [-0.5, -5.1], p.microbes],
    ];
    const bezier = (c, t) => {
      const u = 1 - t;
      return project(
        u * u * u * c[0][0] +
          3 * u * u * t * c[1][0] +
          3 * u * t * t * c[2][0] +
          t * t * t * c[3][0],
        u * u * u * c[0][1] +
          3 * u * u * t * c[1][1] +
          3 * u * t * t * c[2][1] +
          t * t * t * c[3][1],
        -1.3,
      );
    };
    curves.forEach((curve, i) => {
      path(
        Array.from({ length: 81 }, (_, j) => bezier(curve, j / 80)),
        [
          window.WX_VISUAL_PALETTE?.css("#8eb5c6") || "#8eb5c6",
          window.WX_VISUAL_PALETTE?.css("#b8aacb") || "#b8aacb",
          window.WX_VISUAL_PALETTE?.css("#88bdb5") || "#88bdb5",
        ][i],
        0.65,
        i === 2 ? 0.22 : 0.32,
      );
      for (let j = 0; j < 2; j++) {
        const q = (t * [0.048, 0.06, 0.037][i] + j * 0.5) % 1,
          a = bezier(curve, q);
        dot(
          a[0],
          a[1],
          Math.max(0.65, scale * 0.035),
          window.WX_VISUAL_PALETTE?.css("#9dbfc9") || "#9dbfc9",
        );
      }
    });
    TOPICS.forEach((topic) => {
      const a = p[topic],
        [x, y] = project(
          a[0],
          a[1] + Math.sin(t * 0.26 + TOPICS.indexOf(topic) * 1.7) * 0.075,
          a[2],
        ),
        active = selected === topic ? 1 : 0,
        size = scale * a[3] * (1 + active * 0.085);
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size, size);
      const orientation = multiply(
        options.orientations?.scene || identity,
        options.orientations?.[topic] || identity,
      );
      const axisX = turn(1, 0, 0, orientation),
        axisY = turn(0, 1, 0, orientation);
      ctx.transform(axisX[0], -axisX[1], -axisY[0], axisY[1], 0, 0);
      if (active) {
        const glow = ctx.createRadialGradient(0, 0, 0.2, 0, 0, 1.7);
        glow.addColorStop(0, topic === "microbes" ? "#c0e2d755" : "#c6cfed66");
        glow.addColorStop(1, "#e2eff000");
        ctx.fillStyle = glow;
        ctx.fillRect(-1.7, -1.7, 3.4, 3.4);
      }
      if (topic === "ai") {
        ctx.rotate(-0.15 + Math.sin(t * 0.1) * 0.04);
        for (let i = 2; i >= 0; i--) {
          const offset = (i - 1) * (0.38 + active * 0.1);
          ctx.save();
          ctx.translate(offset, -offset * 0.55);
          ctx.rotate((i - 1) * 0.1);
          ctx.transform(1, -0.14, 0.16, 0.92, 0, 0);
          const g = ctx.createLinearGradient(-0.8, -0.7, 0.8, 0.7);
          g.addColorStop(
            0,
            [
              window.WX_VISUAL_PALETTE?.css("#c8e5e9") || "#c8e5e9",
              window.WX_VISUAL_PALETTE?.css("#d1d8ec") || "#d1d8ec",
              window.WX_VISUAL_PALETTE?.css("#ddcfe8") || "#ddcfe8",
            ][i],
          );
          g.addColorStop(
            1,
            [
              window.WX_VISUAL_PALETTE?.css("#8eb9cc") || "#8eb9cc",
              window.WX_VISUAL_PALETTE?.css("#99a5cf") || "#99a5cf",
              window.WX_VISUAL_PALETTE?.css("#b2a0ce") || "#b2a0ce",
            ][i],
          );
          ctx.globalAlpha = 0.83;
          ctx.fillStyle = g;
          ctx.strokeStyle = window.WX_VISUAL_PALETTE?.css("#b6bfd7") || "#b6bfd7";
          ctx.lineWidth = 0.025;
          ctx.beginPath();
          ctx.roundRect(-0.85, -0.775, 1.7, 1.55, 0.16);
          ctx.fill();
          ctx.stroke();
          ctx.globalAlpha = 1;
          for (let j = 0; j < 9; j++) {
            const wave = Math.max(0, Math.cos(t * 1.2 - j * 0.7 - i * 0.9)) ** 5;
            ctx.fillStyle =
              j % 3
                ? window.WX_VISUAL_PALETTE?.css("#849fc6") || "#849fc6"
                : window.WX_VISUAL_PALETTE?.css("#a9d9d7") || "#a9d9d7";
            ctx.globalAlpha = 0.55 + wave * 0.4;
            ctx.beginPath();
            ctx.roundRect(
              ((j % 3) - 1) * 0.43 - 0.11,
              (Math.floor(j / 3) - 1) * 0.41 - 0.11,
              0.22,
              0.22,
              0.04,
            );
            ctx.fill();
            ctx.globalAlpha = 1;
          }
          ctx.restore();
        }
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 + 0.2,
            x = Math.cos(a) * 1.4,
            y = Math.sin(a) * 1.28;
          path(
            [
              [x, y],
              [Math.sign(x) * 0.7, Math.sign(y) * 0.45],
            ],
            window.WX_VISUAL_PALETTE?.css("#95b4ce") || "#95b4ce",
            0.018,
            0.5,
          );
          dot(
            x,
            y,
            i % 2 ? 0.09 : 0.13,
            i % 2
              ? window.WX_VISUAL_PALETTE?.css("#a7b3d5") || "#a7b3d5"
              : window.WX_VISUAL_PALETTE?.css("#83c1c8") || "#83c1c8",
          );
        }
        [
          [-1.08, 0.77],
          [1.08, -0.77],
        ].forEach(([x, y], i) => {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(i ? 0.2 : -0.2);
          ctx.fillStyle = i
            ? window.WX_VISUAL_PALETTE?.css("#c6bddb") || "#c6bddb"
            : window.WX_VISUAL_PALETTE?.css("#a0d1d4") || "#a0d1d4";
          ctx.beginPath();
          ctx.roundRect(-0.31, -0.15, 0.62, 0.3, 0.075);
          ctx.fill();
          for (let j = 0; j < 3; j++)
            path(
              [
                [(j - 1) * 0.1, -0.05],
                [(j - 1) * 0.1, 0.05],
              ],
              window.WX_VISUAL_PALETTE?.css("#e9f4f2") || "#e9f4f2",
              0.025,
            );
          ctx.restore();
        });
      } else if (topic === "microbes") {
        ctx.rotate(Math.sin(t * 0.11) * 0.055);
        const rod = (x, y, width, height, rotation, jade) => {
          ctx.save();
          ctx.translate(x * (1 + active * 0.12), y);
          ctx.rotate(rotation);
          const g = ctx.createLinearGradient(-width / 2, 0, width / 2, 0);
          g.addColorStop(
            0,
            jade
              ? window.WX_VISUAL_PALETTE?.css("#64a99e") || "#64a99e"
              : window.WX_VISUAL_PALETTE?.css("#bd897d") || "#bd897d",
          );
          g.addColorStop(
            0.33,
            jade
              ? window.WX_VISUAL_PALETTE?.css("#b7ded0") || "#b7ded0"
              : window.WX_VISUAL_PALETTE?.css("#efd0bb") || "#efd0bb",
          );
          g.addColorStop(
            1,
            jade
              ? window.WX_VISUAL_PALETTE?.css("#6cb6a8") || "#6cb6a8"
              : window.WX_VISUAL_PALETTE?.css("#d79f8c") || "#d79f8c",
          );
          ctx.fillStyle = g;
          ctx.strokeStyle = jade
            ? window.WX_VISUAL_PALETTE?.css("#8acabc") || "#8acabc"
            : window.WX_VISUAL_PALETTE?.css("#e5b8a1") || "#e5b8a1";
          ctx.lineWidth = 0.025;
          ctx.beginPath();
          ctx.roundRect(-width / 2, -height / 2, width, height, width / 2);
          ctx.fill();
          ctx.stroke();
          path(
            [
              [-width * 0.18, -height * 0.31],
              [-width * 0.18, height * 0.31],
            ],
            jade
              ? window.WX_VISUAL_PALETTE?.css("#e4f7e8") || "#e4f7e8"
              : window.WX_VISUAL_PALETTE?.css("#fff1e0") || "#fff1e0",
            0.018,
            0.6,
          );
          if (jade) {
            const end = height / 2;
            ctx.strokeStyle = window.WX_VISUAL_PALETTE?.css("#72b4a6") || "#72b4a6";
            ctx.lineWidth = 0.022;
            ctx.beginPath();
            ctx.moveTo(0, end);
            ctx.bezierCurveTo(0.1, end + 0.2, 0.45, end + 0.3, 0.29, end + 0.52);
            ctx.bezierCurveTo(0.13, end + 0.73, -0.22, end + 0.66, -0.27, end + 0.95);
            ctx.stroke();
            [-0.32, 0.28].forEach((yy, i) =>
              [-1, 1].forEach((side) =>
                path(
                  [
                    [side * 0.29, yy],
                    [side * 0.44, yy + (i ? 0.035 : -0.045)],
                    [side * 0.56, yy + (i ? 0.1 : -0.08)],
                  ],
                  window.WX_VISUAL_PALETTE?.css("#77b7aa") || "#77b7aa",
                  0.017,
                  0.7,
                ),
              ),
            );
          }
          ctx.restore();
        };
        rod(
          -0.16,
          -0.05 + Math.sin(t * 0.5) * 0.055,
          0.62,
          1.72,
          0.57 + Math.sin(t * 0.26) * 0.08,
          true,
        );
        rod(
          0.8,
          0.7 + Math.sin(t * 0.5 + 2) * 0.055,
          0.46,
          1.13,
          -0.58 + Math.sin(t * 0.26 + 1) * 0.08,
          false,
        );
        [
          [-0.82, 0.75, 0.24],
          [-0.98, 0.36, 0.23],
          [-0.88, -0.05, 0.22],
          [0.7, -0.84, 0.23],
          [1, -0.56, 0.21],
        ].forEach(([x, y, r], i) => {
          const g = ctx.createRadialGradient(x - r * 0.25, y - r * 0.35, 0.01, x, y, r);
          g.addColorStop(
            0,
            i > 2
              ? window.WX_VISUAL_PALETTE?.css("#f0d5c7") || "#f0d5c7"
              : window.WX_VISUAL_PALETTE?.css("#eee0c6") || "#eee0c6",
          );
          g.addColorStop(
            1,
            i > 2
              ? window.WX_VISUAL_PALETTE?.css("#ce9f91") || "#ce9f91"
              : window.WX_VISUAL_PALETTE?.css("#c2ac88") || "#c2ac88",
          );
          dot(x, y, r, g);
        });
      } else {
        ctx.rotate(0.12 + t * 0.045);
        const point = (a) => [
          (2 + Math.cos(3 * a)) * Math.cos(2 * a) * 0.28,
          (2 + Math.cos(3 * a)) * Math.sin(2 * a) * 0.28,
        ];
        const g = ctx.createLinearGradient(-0.9, -0.7, 0.9, 0.7);
        g.addColorStop(0, window.WX_VISUAL_PALETTE?.css("#79b7bc") || "#79b7bc");
        g.addColorStop(0.5, window.WX_VISUAL_PALETTE?.css("#9a9ecb") || "#9a9ecb");
        g.addColorStop(1, window.WX_VISUAL_PALETTE?.css("#c2a4cc") || "#c2a4cc");
        path(
          Array.from({ length: 221 }, (_, i) => point((i / 220) * Math.PI * 2)),
          g,
          0.18,
          1,
        );
        path(
          Array.from({ length: 221 }, (_, i) => {
            const p = point((i / 220) * Math.PI * 2);
            return [p[0] - 0.026, p[1] - 0.025];
          }),
          window.WX_VISUAL_PALETTE?.css("#d7e8eb") || "#d7e8eb",
          0.027,
          0.65,
        );
        const q = point(((t * 0.085) % 1) * Math.PI * 2);
        dot(q[0], q[1], 0.065, window.WX_VISUAL_PALETTE?.css("#e9f9ee") || "#e9f9ee");
      }
      ctx.restore();
    });
  }
  function hitTestFallback(x, y, w, h, options = {}) {
    const { scale, p, project } = fallbackGeometry(w, h, options);
    let best = null,
      distance = Infinity;
    TOPICS.forEach((topic) => {
      const a = p[topic],
        center = project(a[0], a[1], a[2]),
        radius = (topic === "data" ? 1.05 : 1.65) * a[3] * scale;
      const d = Math.hypot(x - center[0], y - center[1]) / radius;
      if (d < 1 && d < distance) {
        best = topic;
        distance = d;
      }
    });
    return best;
  }
  function getFallbackTargets(w, h, options = {}) {
    const { p, project } = fallbackGeometry(w, h, options);
    return TOPICS.map((topic) => {
      const point = project(p[topic][0], p[topic][1], p[topic][2]);
      return {
        topic,
        x: point[0],
        y: point[1],
        visible: point[0] >= 0 && point[0] <= w && point[1] >= 0 && point[1] <= h,
      };
    });
  }
  window.WX_HERO_UNIVERSE = {
    create,
    drawFallback,
    hitTestFallback,
    getFallbackTargets,
    version: 10,
  };
})();

/* 07 · Three-dimensional research scenes */
/* Local, offline 3D scenes.
 * The hero is an idealized mathematical helix: decorative art, not a measured structure.
 * AI, omics, causal, and terrain scenes are conceptual data visualizations.
 */
(() => {
  "use strict";
  const T = window.THREE;
  const $ = (id) => document.getElementById(id);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let paused = reduced.matches || ["boot", "open"].includes(document.documentElement.dataset.intro),
    last = 0,
    clock = 0,
    dirty = true;
  const scenes = [],
    semanticLabels = [],
    heroState = {
      yaw: 0,
      pitch: 0,
      baseYaw: 0,
      drag: false,
      zoom: 1,
      drawnYaw: 0,
      drawnPitch: 0,
      drawnZoom: 1,
    };
  let transitionUntil = 0;
  const ease = (current, target, dt, speed = 7) =>
    current + (target - current) * (1 - Math.exp(-Math.max(0.001, dt) * speed));
  function wake() {
    dirty = true;
    transitionUntil = performance.now() + (reduced.matches ? 0 : 1200);
  }
  const palette = {
    teal: 0x149c9a,
    blue: 0x5266d4,
    purple: 0x9a72cf,
    coral: 0xe68d79,
    gold: 0xd2ac60,
    ink: 0x203e4a,
  };
  const english = () =>
    window.WX_I18N?.getLang() === "en" || document.documentElement.lang === "en";
  const tr = (zh, en) => (english() ? en : zh);
  const seed = (n) => {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  const v = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    return r.bottom > -80 && r.top < innerHeight + 80 && r.width > 0 && r.height > 0;
  };
  function styleMotion() {
    document.documentElement.dataset.motion = paused ? "paused" : "running";
    const b = $("motion-toggle");
    if (b) {
      b.setAttribute("aria-pressed", String(paused));
      b.setAttribute(
        "aria-label",
        paused ? tr("恢复动效", "Resume motion") : tr("暂停动效", "Pause motion"),
      );
      const label = b.querySelector("[data-motion-label]") || b;
      label.textContent = paused ? tr("恢复动效", "Resume motion") : tr("暂停动效", "Pause motion");
    }
  }
  function setMotion(value) {
    paused = value === false || value === "paused";
    dirty = true;
    styleMotion();
  }
  function material(color, options = {}) {
    return new T.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.21, ...options });
  }
  function meshSphere(radius, color, options = {}) {
    return new T.Mesh(new T.SphereGeometry(radius, 20, 14), material(color, options));
  }
  function line(points, color, opacity = 1, dashed = false) {
    const geometry = new T.BufferGeometry().setFromPoints(points);
    const mat = dashed
      ? new T.LineDashedMaterial({
          color,
          transparent: true,
          opacity,
          dashSize: 0.12,
          gapSize: 0.1,
        })
      : new T.LineBasicMaterial({ color, transparent: true, opacity });
    const result = new T.Line(geometry, mat);
    if (dashed) result.computeLineDistances();
    return result;
  }
  function label(zh, en, width = 2.4) {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 112;
    const texture = new T.CanvasTexture(c);
    texture.colorSpace = T.SRGBColorSpace;
    const sprite = new T.Sprite(
      new T.SpriteMaterial({ map: texture, transparent: true, depthTest: false }),
    );
    sprite.scale.set(width, (width * 112) / 512, 1);
    const refresh = () => {
      const ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.font = '500 72px "Times New Roman", "Microsoft YaHei", serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = window.WX_VISUAL_PALETTE?.get().ink || "#385b67";
      ctx.fillText(tr(zh, en), 256, 56, 498);
      texture.needsUpdate = true;
    };
    semanticLabels.push(refresh);
    refresh();
    return sprite;
  }
  function makeScene(id, distance, fov = 36) {
    const canvas = $(id);
    if (!canvas || !T) return null;
    try {
      const renderer = new T.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setClearColor(0xffffff, 0);
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.6));
      renderer.outputColorSpace = T.SRGBColorSpace;
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.03;
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(fov, 1, 0.1, 160);
      camera.position.z = distance;
      scene.add(new T.HemisphereLight(0xffffff, 0xa5bdc8, 1.65));
      const key = new T.DirectionalLight(0xffffff, 2.2);
      key.position.set(-5, 8, 12);
      scene.add(key);
      const fill = new T.DirectionalLight(0xb1dbe7, 0.8);
      fill.position.set(8, -1, 4);
      scene.add(fill);
      const rim = new T.DirectionalLight(0xdac8f0, 1.3);
      rim.position.set(3, 7, -9);
      scene.add(rim);
      const root = new T.Group(),
        orbitRoot = new T.Group();
      scene.add(orbitRoot);
      orbitRoot.add(root);
      const state = {
        id,
        canvas,
        renderer,
        scene,
        camera,
        root,
        orbitRoot,
        width: 0,
        height: 0,
        frame: 0,
        tick: () => {},
        dead: false,
      };
      if (id !== "hero-canvas")
        state.input = window.WX_RESEARCH_INPUTS?.attach(
          canvas,
          id === "ai-canvas" ? "llm" : id.split("-")[0],
          { onChange: wake },
        );
      canvas.dataset.renderer = "webgl";
      canvas.dataset.frame = "0";
      canvas.addEventListener("webglcontextlost", (event) => {
        event.preventDefault();
        state.dead = true;
        canvas.dataset.renderer = "context-lost";
      });
      canvas.addEventListener("webglcontextrestored", () => {
        state.dead = false;
        dirty = true;
      });
      new ResizeObserver(() => {
        state.width = 0;
        dirty = true;
      }).observe(canvas);
      scenes.push(state);
      return state;
    } catch (error) {
      canvas.dataset.renderer = "fallback";
      return null;
    }
  }
  function fit(state) {
    const width = Math.round(state.canvas.clientWidth),
      height = Math.round(state.canvas.clientHeight);
    if (!width || !height) return false;
    if (width !== state.width || height !== state.height) {
      state.width = width;
      state.height = height;
      state.renderer.setSize(width, height, false);
      state.camera.aspect = width / height;
      state.camera.updateProjectionMatrix();
    }
    return true;
  }
  function rigidCylinder(a, b, radius, color) {
    const delta = b.clone().sub(a);
    const result = new T.Mesh(
      new T.CylinderGeometry(radius, radius, delta.length(), 10),
      material(color),
    );
    result.position.copy(a).add(b).multiplyScalar(0.5);
    result.quaternion.setFromUnitVectors(v(0, 1, 0), delta.normalize());
    return result;
  }
  let hero, llmState, causalState, omicsState;
  const LLM_INPUT = {
    zh: ["肠道", "微生物", "与", "宿主", "免疫"],
    en: ["Gut", "microbes", "and", "host", "immunity"],
  };
  const LLM_OUTPUT = {
    zh: ["连接", "证据", "与", "严谨", "问题"],
    en: ["Connect", "evidence", "with", "careful", "questions"],
  };
  const focusState = {
    basePairs: true,
    llmStep: "attention",
    tokenFocus: 1,
    causalFocus: "instrument",
    omicsLayer: "all",
  };
  // Closed, lenticular ribbons keep their silhouette smooth at every angle.
  const heroLight = { started: -10, origin: 0.06, count: 0, next: 2.8, source: "idle" };
  const HERO_TOPICS = ["scene", "helix", "ai", "microbes", "data"];
  const heroOrientations = Object.fromEntries(HERO_TOPICS.map((topic) => [topic, [0, 0, 0, 1]]));
  const heroInputAngles = Object.fromEntries(HERO_TOPICS.map((topic) => [topic, { x: 0, y: 0 }]));
  const heroInteraction = { dragging: false, dragTarget: null, revision: 0, pointerCount: 0 };
  const qMultiply = (a, b) => [
    a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
    a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
    a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
    a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
  ];
  const qNormalize = (q) => {
    const length = Math.hypot(...q) || 1;
    return q.map((n) => n / length);
  };
  const qEuler = (x, y, z = 0) =>
    qMultiply(
      qMultiply([Math.sin(x / 2), 0, 0, Math.cos(x / 2)], [0, Math.sin(y / 2), 0, Math.cos(y / 2)]),
      [0, 0, Math.sin(z / 2), Math.cos(z / 2)],
    );
  const qPoint = (point, q) => {
    const x = point.x,
      y = point.y,
      z = point.z,
      tx = 2 * (q[1] * z - q[2] * y),
      ty = 2 * (q[2] * x - q[0] * z),
      tz = 2 * (q[0] * y - q[1] * x);
    return {
      x: x + q[3] * tx + q[1] * tz - q[2] * ty,
      y: y + q[3] * ty + q[2] * tx - q[0] * tz,
      z: z + q[3] * tz + q[0] * ty - q[1] * tx,
    };
  };
  const orientationSnapshot = () =>
    Object.fromEntries(HERO_TOPICS.map((topic) => [topic, heroOrientations[topic].slice()]));
  function rotateHeroTarget(topic, yaw, pitch) {
    topic = HERO_TOPICS.includes(topic) ? topic : "scene";
    yaw = Number(yaw) || 0;
    pitch = Number(pitch) || 0;
    if (!yaw && !pitch) return;
    let delta = qEuler(pitch, yaw);
    // Input axes stay aligned with the screen after the whole universe turns.
    if (topic !== "scene") {
      const scene = heroOrientations.scene,
        inverse = [-scene[0], -scene[1], -scene[2], scene[3]];
      delta = qMultiply(qMultiply(inverse, delta), scene);
    }
    heroOrientations[topic] = qNormalize(qMultiply(delta, heroOrientations[topic]));
    heroInputAngles[topic].x += pitch;
    heroInputAngles[topic].y += yaw;
    heroInteraction.revision++;
    const canvas = $("hero-canvas");
    if (canvas) {
      canvas.dataset.orientationRevision = String(heroInteraction.revision);
      canvas.dataset.rotationTarget = topic;
    }
    wake();
  }
  function heroFallbackOptions(width, height) {
    return {
      compact: width / height < 0.84,
      paused: paused || reduced.matches,
      zoom: heroState.zoom,
      time: clock,
      orientations: heroOrientations,
      selected: heroTopic,
    };
  }
  function hitFallbackHero(x, y, width, height) {
    const options = heroFallbackOptions(width, height),
      target = window.WX_HERO_UNIVERSE?.hitTestFallback?.(x, y, width, height, options);
    if (target) return { topic: target };
    const ratio =
      Math.min(width / 10.5, height / 12.8) *
      heroState.zoom *
      (window.WX_HERO_UNIVERSE ? (options.compact ? 0.72 : 0.78) : 1);
    const q = qMultiply(
      qMultiply(heroOrientations.scene, heroOrientations.helix),
      qEuler(0.13, heroState.baseYaw, -0.29),
    );
    const a = qPoint({ x: 0, y: -3.5, z: 0 }, q),
      b = qPoint({ x: 0, y: 3.5, z: 0 }, q);
    const ax = width / 2 + a.x * ratio,
      ay = height / 2 - a.y * ratio,
      bx = width / 2 + b.x * ratio,
      by = height / 2 - b.y * ratio;
    const dx = bx - ax,
      dy = by - ay,
      t = Math.max(
        0,
        Math.min(1, ((x - ax) * dx + (y - ay) * dy) / Math.max(1, dx * dx + dy * dy)),
      );
    return {
      topic: Math.hypot(x - ax - t * dx, y - ay - t * dy) < ratio * 1.85 ? "helix" : "scene",
    };
  }
  function fallbackHeroTargets() {
    const canvas = $("hero-canvas"),
      width = canvas?.clientWidth || 0,
      height = canvas?.clientHeight || 0;
    const targets =
      window.WX_HERO_UNIVERSE?.getFallbackTargets?.(
        width,
        height,
        heroFallbackOptions(width, height),
      ) || [];
    targets.push({ topic: "helix", x: width / 2, y: height / 2, visible: true });
    const empty = [
      [0.07, 0.07],
      [0.93, 0.07],
      [0.07, 0.88],
      [0.93, 0.88],
      [0.5, 0.04],
    ].find(([x, y]) => hitFallbackHero(x * width, y * height, width, height).topic === "scene") || [
      0.05, 0.05,
    ];
    targets.push({ topic: "scene", x: empty[0] * width, y: empty[1] * height, visible: true });
    return targets;
  }
  function attachHeroInteraction(canvas, hitAt, onTap) {
    const pointers = new Map();
    let gesture = null,
      pinch = null;
    const sync = () => {
      heroState.drag = pointers.size > 0;
      heroInteraction.dragging = Boolean(gesture?.dragging || pinch);
      heroInteraction.dragTarget = gesture?.topic || null;
      heroInteraction.pointerCount = pointers.size;
      canvas.dataset.dragging = String(heroInteraction.dragging);
      canvas.dataset.dragTarget = heroInteraction.dragTarget || "";
      canvas.style.cursor = pointers.size ? "grabbing" : "grab";
    };
    const distance = () => {
      const [a, b] = [...pointers.values()];
      return Math.hypot(a.x - b.x, a.y - b.y);
    };
    const clear = () => {
      const ids = [...pointers.keys()];
      pointers.clear();
      gesture = null;
      pinch = null;
      sync();
      for (const id of ids) if (canvas.hasPointerCapture?.(id)) canvas.releasePointerCapture(id);
      wake();
    };
    canvas.style.touchAction = "none";
    canvas.style.cursor = "grab";
    canvas.dataset.dragging = "false";
    canvas.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "touch" && event.button !== 0) return;
      event.preventDefault();
      canvas.focus({ preventScroll: true });
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      canvas.setPointerCapture(event.pointerId);
      if (pointers.size > 1) {
        pinch = { distance: Math.max(1, distance()), zoom: heroState.zoom };
        if (gesture) {
          gesture.hadPinch = true;
          gesture.moved = 20;
        }
        sync();
        return;
      }
      const hit = hitAt(event.clientX, event.clientY),
        topic = hit?.topic || "scene";
      gesture = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        lastX: event.clientX,
        lastY: event.clientY,
        moved: 0,
        dragging: false,
        hadPinch: false,
        topic,
        hit,
        source: event.pointerType === "touch" ? "touch" : "pointer",
      };
      selectHeroTopic(topic, gesture.source);
      sync();
    });
    canvas.addEventListener("pointermove", (event) => {
      if (!pointers.has(event.pointerId)) return;
      event.preventDefault();
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.size > 1 && pinch) {
        setZoom((pinch.zoom * distance()) / pinch.distance);
        sync();
        return;
      }
      if (!gesture || gesture.pointerId !== event.pointerId) return;
      const dx = event.clientX - gesture.lastX,
        dy = event.clientY - gesture.lastY;
      gesture.moved = Math.max(
        gesture.moved,
        Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y),
      );
      if (gesture.moved > 3) gesture.dragging = true;
      if (gesture.dragging) {
        const sensitivity =
          (Math.PI * 1.5) / Math.max(160, Math.min(canvas.clientWidth, canvas.clientHeight));
        rotateHeroTarget(gesture.topic, dx * sensitivity, dy * sensitivity);
      }
      gesture.lastX = event.clientX;
      gesture.lastY = event.clientY;
      sync();
    });
    const end = (event) => {
      if (!pointers.has(event.pointerId)) return;
      const tap =
        gesture &&
        !gesture.dragging &&
        !gesture.hadPinch &&
        gesture.moved < 6 &&
        event.type === "pointerup";
      if (tap) onTap?.(gesture.hit, gesture.source);
      pointers.delete(event.pointerId);
      pinch = null;
      if (pointers.size) {
        const [id, p] = [...pointers.entries()][0];
        gesture = {
          ...(gesture || {}),
          pointerId: id,
          x: p.x,
          y: p.y,
          lastX: p.x,
          lastY: p.y,
          moved: 20,
          dragging: true,
          hadPinch: true,
          topic: gesture?.topic || "scene",
        };
      } else gesture = null;
      sync();
      if (canvas.hasPointerCapture?.(event.pointerId))
        canvas.releasePointerCapture(event.pointerId);
      wake();
    };
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
    canvas.addEventListener("lostpointercapture", end);
    canvas.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? canvas.clientHeight : 1;
        const delta = Math.max(-600, Math.min(600, event.deltaY * unit));
        setZoom(heroState.zoom * Math.exp(-delta * 0.0016));
      },
      { passive: false },
    );
    canvas.addEventListener("keydown", (event) => {
      if (
        ![
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Home",
          "+",
          "=",
          "-",
          "_",
          "Enter",
          " ",
          "0",
          "1",
          "2",
          "3",
          "Escape",
        ].includes(event.key)
      )
        return;
      event.preventDefault();
      if (["0", "1", "2", "3"].includes(event.key)) {
        if (!event.repeat) {
          selectHeroTopic({ 0: "helix", 1: "ai", 2: "microbes", 3: "data" }[event.key], "keyboard");
          pulseHero(0.5, "keyboard");
        }
      } else if (event.key === "Escape") selectHeroTopic("scene", "keyboard");
      else if (event.key === "Enter" || event.key === " ") {
        if (!event.repeat) pulseHero(0.5, "keyboard");
      } else if (event.key === "Home") {
        clear();
        reset();
      } else if (["+", "=", "-", "_"].includes(event.key))
        setZoom(heroState.zoom + (["+", "="].includes(event.key) ? 0.1 : -0.1));
      else
        rotate(
          event.key === "ArrowLeft" ? -0.22 : event.key === "ArrowRight" ? 0.22 : 0,
          event.key === "ArrowUp" ? -0.22 : event.key === "ArrowDown" ? 0.22 : 0,
        );
    });
    window.addEventListener("blur", clear);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) clear();
    });
    canvas.addEventListener("hero-reset-input", clear);
  }

  let heroTopic = "scene",
    heroSelectionCount = 0;
  function heroSelectionText() {
    const copy = {
      scene: ["整片星群 · 自由流转", "The universe · Turn freely."],
      ai: ["AI 语义星群 · 让线索彼此照见", "AI · Where clues meet."],
      microbes: ["微生物 · 小生命，大回声", "Microbes · Small lives, vast worlds."],
      data: ["数据流 · 向未知汇聚", "Data · Toward the unknown."],
    };
    return copy[heroTopic] ? tr(...copy[heroTopic]) : "";
  }
  function renderHeroSelection() {
    const readout = $("molecule-readout");
    if (readout && heroSelectionCount > 0 && heroTopic !== "helix")
      readout.textContent = heroSelectionText();
  }
  function selectHeroTopic(topic, source = "pointer") {
    if (!HERO_TOPICS.includes(topic)) return;
    heroTopic = topic;
    heroSelectionCount++;
    hero?.clearSelection?.();
    if ($("molecule-readout")) $("molecule-readout").textContent = "";
    const canvas = $("hero-canvas");
    if (canvas) {
      canvas.dataset.selectedTopic = topic;
      canvas.dataset.selectionCount = String(heroSelectionCount);
    }
    renderHeroSelection();
    window.dispatchEvent(new CustomEvent("herotopicchange", { detail: { topic, source } }));
    wake();
  }
  semanticLabels.push(renderHeroSelection);
  function pulseHero(origin = 0.5, source = "pointer") {
    heroLight.started = clock;
    heroLight.origin = Math.max(0.02, Math.min(0.98, origin));
    heroLight.count++;
    heroLight.next = clock + 7.4;
    heroLight.source = source;
    const canvas = $("hero-canvas");
    if (canvas) {
      canvas.dataset.pulseCount = String(heroLight.count);
      canvas.dataset.pulseSource = source;
    }
    wake();
  }
  function heroPulseState(time) {
    if (!paused && !reduced.matches && time >= heroLight.next) pulseHero(0.055, "auto");
    const age = Math.max(0, time - heroLight.started),
      frozen = paused || reduced.matches;
    return { age, frozen, active: age < 3.3, origin: heroLight.origin };
  }
  function helixPoint(t, phase = 0) {
    const angle = (t - 0.5) * Math.PI * 3.4 + phase;
    return v(Math.cos(angle) * 1.7, (t - 0.5) * 9.3, Math.sin(angle) * 1.7);
  }
  function helixCurve(phase = 0) {
    const curve = new T.Curve();
    curve.getPoint = (t) => helixPoint(t, phase);
    return curve;
  }
  function heroRibbonFrame(t, phase = 0) {
    const angle = (t - 0.5) * Math.PI * 3.4 + phase,
      point = helixPoint(t, phase);
    const radial = v(Math.cos(angle), 0, Math.sin(angle));
    const tangent = v(
      -Math.sin(angle) * 1.7 * Math.PI * 3.4,
      9.3,
      Math.cos(angle) * 1.7 * Math.PI * 3.4,
    ).normalize();
    const across = tangent.clone().cross(radial).normalize(),
      end = Math.min(1, t / 0.032, (1 - t) / 0.032);
    return {
      point,
      radial,
      across,
      taper: Math.sqrt(Math.max(0.000015, 1 - Math.pow(1 - end, 2))),
    };
  }
  function ribbonGeometry(curve, halfWidth = 0.57, phase = 0, chain = 0) {
    const positions = [],
      colors = [],
      uvs = [],
      indices = [],
      left = [],
      right = [],
      segments = 384,
      around = 32;
    const stops = (
      chain
        ? [0x6b79b0, 0xa67aba, 0xb6b7db, 0xdaa0bc, 0x7b8bc3]
        : [0x176881, 0x52bbaa, 0x4c94bd, 0xb4e1d3, 0x388e9f]
    ).map((c) => new T.Color(c));
    for (let i = 0; i <= segments; i++) {
      const t = i / segments,
        { point, radial, across, taper } = heroRibbonFrame(t, phase);
      const colorT = t * (stops.length - 1),
        colorI = Math.min(stops.length - 2, Math.floor(colorT));
      const col = stops[colorI].clone().lerp(stops[colorI + 1], colorT - colorI);
      left.push(point.clone().addScaledVector(across, -halfWidth * taper));
      right.push(point.clone().addScaledVector(across, halfWidth * taper));
      for (let j = 0; j <= around; j++) {
        const angle = (j / around) * Math.PI * 2,
          u = Math.cos(angle),
          crown = 0.055 * (1 - u * u);
        const q = point
          .clone()
          .addScaledVector(across, u * halfWidth * taper)
          .addScaledVector(radial, (Math.sin(angle) * 0.105 + crown) * taper);
        positions.push(q.x, q.y, q.z);
        uvs.push(t, j / around);
        const c = col.clone().multiplyScalar(0.91 + 0.09 * Math.max(0, Math.sin(angle)));
        colors.push(c.r, c.g, c.b);
        if (i < segments && j < around) {
          const k = i * (around + 1) + j,
            n = k + around + 1;
          indices.push(k, n, k + 1, n, n + 1, k + 1);
        }
      }
    }
    const geometry = new T.BufferGeometry();
    geometry.setAttribute("position", new T.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new T.Float32BufferAttribute(colors, 3));
    geometry.setAttribute("uv", new T.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    // Weld the shading at the closed cross-section seam without adding a ridge.
    const normals = geometry.getAttribute("normal");
    for (let i = 0; i <= segments; i++) {
      const a = i * (around + 1),
        b = a + around,
        n = v()
          .fromBufferAttribute(normals, a)
          .add(v().fromBufferAttribute(normals, b))
          .normalize();
      normals.setXYZ(a, n.x, n.y, n.z);
      normals.setXYZ(b, n.x, n.y, n.z);
    }
    return { geometry, left, right };
  }
  function molecularHero() {
    const s = makeScene("hero-canvas", 21, 37);
    if (!s) return null;
    // A local studio environment provides soft, separated reflections on pearl.
    s.scene.children
      .filter((o) => o.isLight)
      .forEach((light, i) => {
        light.intensity = [1.15, 2.1, 0.55, 1.4][i] ?? light.intensity;
      });
    try {
      const envCanvas = document.createElement("canvas");
      envCanvas.width = 768;
      envCanvas.height = 384;
      const ec = envCanvas.getContext("2d"),
        wash = ec.createLinearGradient(0, 0, 0, 384);
      wash.addColorStop(0, "#f7ffff");
      wash.addColorStop(0.4, "#bacbd5");
      wash.addColorStop(0.7, "#536f89");
      wash.addColorStop(1, "#adb8c9");
      ec.fillStyle = wash;
      ec.fillRect(0, 0, 768, 384);
      [
        [98, 35, "#edfff9"],
        [315, 90, "#ffffff"],
        [590, 28, "#f2e7ff"],
      ].forEach(([x, width, color]) => {
        const strip = ec.createLinearGradient(x - width, 0, x + width, 0);
        strip.addColorStop(0, "rgba(255,255,255,0)");
        strip.addColorStop(0.4, color);
        strip.addColorStop(0.6, color);
        strip.addColorStop(1, "rgba(255,255,255,0)");
        ec.fillStyle = strip;
        ec.fillRect(x - width, 20, width * 2, 310);
      });
      const environment = new T.CanvasTexture(envCanvas);
      environment.colorSpace = T.SRGBColorSpace;
      environment.mapping = T.EquirectangularReflectionMapping;
      const pmrem = new T.PMREMGenerator(s.renderer),
        target = pmrem.fromEquirectangular(environment);
      s.scene.environment = target.texture;
      s.environmentTarget = target;
      environment.dispose();
      pmrem.dispose();
    } catch {}
    const group = new T.Group(),
      pairGroup = new T.Group(),
      halo = new T.Group();
    s.root.add(group, halo);
    group.add(pairGroup);
    const universe = window.WX_HERO_UNIVERSE?.create(T);
    if (universe) s.root.add(universe.group);
    const packets = [],
      pairPick = [],
      ribbonPick = [],
      lightUniforms = [],
      pairMaterials = [];
    const chainColors = [0x3dada9, 0x9b96cc];
    for (let ci = 0; ci < 2; ci++) {
      const phase = ci * Math.PI,
        curve = helixCurve(phase),
        rib = ribbonGeometry(curve, 0.57, phase, ci);
      const uniforms = {
        heroTime: { value: 0 },
        heroPulseAge: { value: 10 },
        heroPulseOrigin: { value: 0.05 },
        heroPhase: { value: ci * 0.31 },
      };
      lightUniforms.push(uniforms);
      const mat = new T.MeshPhysicalMaterial({
        color: 0xffffff,
        vertexColors: true,
        roughness: 0.255,
        metalness: 0.34,
        envMapIntensity: 0.72,
        clearcoat: 0.88,
        clearcoatRoughness: 0.2,
        iridescence: 0.3,
        iridescenceIOR: 1.34,
        iridescenceThicknessRange: [200, 360],
        emissive: chainColors[ci],
        emissiveIntensity: 0.012,
      });
      mat.onBeforeCompile = (shader) => {
        Object.assign(shader.uniforms, uniforms);
        shader.vertexShader = shader.vertexShader
          .replace("#include <common>", "#include <common>\nvarying vec2 vHeroUv;")
          .replace("#include <begin_vertex>", "#include <begin_vertex>\nvHeroUv = uv;");
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <common>",
          "#include <common>\nvarying vec2 vHeroUv;\nuniform float heroTime;\nuniform float heroPulseAge;\nuniform float heroPulseOrigin;\nuniform float heroPhase;",
        );
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>
          float flowDistance = abs(fract(vHeroUv.x - heroTime * .045 + heroPhase + .5) - .5);
          float flow = exp(-pow(flowDistance / .043, 2.0));
          float waveDistance = abs(vHeroUv.x - heroPulseOrigin) - heroPulseAge * .34;
          float wave = exp(-pow(waveDistance / .055, 2.0)) * exp(-heroPulseAge * .65) * step(heroPulseAge, 3.5);
          float edgeLight = .4 + .6 * pow(abs(cos(vHeroUv.y * 6.283185)), 8.0);
          totalEmissiveRadiance += vec3(.40, .66, .70) * (flow * .34 + wave * 1.35) * edgeLight;
        `,
        );
      };
      mat.customProgramCacheKey = () => "wx-lightwoven-7";
      const ribbon = new T.Mesh(rib.geometry, mat);
      group.add(ribbon);
      ribbonPick.push(ribbon);
      // Polished selvages and fine silk-like filaments follow the same surface.
      [rib.left, rib.right].forEach((edge) => {
        const tube = new T.TubeGeometry(new T.CatmullRomCurve3(edge), 384, 0.019, 8, false);
        group.add(
          new T.Mesh(
            tube,
            material(ci ? 0xcac7e6 : 0xb8ded6, {
              roughness: 0.22,
              metalness: 0.36,
              emissive: chainColors[ci],
              emissiveIntensity: 0.07,
            }),
          ),
        );
      });
      [-0.55, -0.27, 0.34].forEach((u, fi) => {
        const points = Array.from({ length: 321 }, (_, i) => {
          const { point, radial, across, taper } = heroRibbonFrame(
            0.008 + (i / 320) * 0.984,
            phase,
          );
          return point
            .addScaledVector(across, u * 0.57 * taper)
            .addScaledVector(
              radial,
              (Math.sqrt(1 - u * u) * 0.105 + 0.055 * (1 - u * u) + 0.006) * taper,
            );
        });
        group.add(
          new T.Mesh(
            new T.TubeGeometry(
              new T.CatmullRomCurve3(points),
              320,
              fi === 1 ? 0.009 : 0.012,
              6,
              false,
            ),
            material(ci ? 0xc9cee9 : 0xb9e3dc, {
              roughness: 0.3,
              metalness: 0.2,
              transparent: true,
              opacity: fi === 1 ? 0.44 : 0.68,
            }),
          ),
        );
      });
      for (let i = 0; i < 2; i++) {
        const path = new T.Curve();
        path.getPoint = (t) => {
          const f = heroRibbonFrame(t, phase);
          return f.point
            .addScaledVector(f.across, (i ? -0.57 : 0.57) * f.taper)
            .addScaledVector(f.radial, 0.025);
        };
        const positions = new Float32Array(18 * 3),
          colors = new Float32Array(18 * 3),
          hue = new T.Color(ci ? 0xc2b9ef : 0xa0e6d8);
        for (let j = 0; j < 18; j++) {
          const shade = hue.clone().multiplyScalar(0.18 + 0.82 * Math.pow(1 - j / 18, 2));
          colors.set([shade.r, shade.g, shade.b], j * 3);
        }
        const geometry = new T.BufferGeometry();
        geometry.setAttribute("position", new T.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new T.BufferAttribute(colors, 3));
        const tail = new T.Line(
          geometry,
          new T.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.82 }),
        );
        tail.frustumCulled = false;
        const dot = meshSphere(0.042, 0xf5ffff, {
          emissive: chainColors[ci],
          emissiveIntensity: 0.9,
          roughness: 0.17,
          metalness: 0.1,
        });
        group.add(tail, dot);
        packets.push({ dot, tail, path, phase: i * 0.5 + ci * 0.17 });
      }
    }
    const sequence = "CGCGAATTCGCGCGATCGAT";
    for (let index = 0; index < 20; index++) {
      const t = 0.04 + (index / 19) * 0.92,
        pa = helixPoint(t, 0),
        pb = helixPoint(t, Math.PI),
        direction = pb.clone().sub(pa),
        length = direction.length();
      const rung = new T.Group();
      rung.position.copy(pa).add(pb).multiplyScalar(0.5);
      rung.quaternion.setFromUnitVectors(v(1, 0, 0), direction.clone().normalize());
      const bases = sequence[index] + { A: "T", T: "A", C: "G", G: "C" }[sequence[index]];
      [-1, 1].forEach((side) => {
        const mat = new T.MeshPhysicalMaterial({
          color: side < 0 ? 0x82c7c2 : 0xaaa6d0,
          roughness: 0.24,
          metalness: 0.19,
          clearcoat: 0.75,
          transparent: true,
          opacity: 0.48,
          depthWrite: false,
          emissive: side < 0 ? 0x69b6b7 : 0x9a9cce,
          emissiveIntensity: 0.015,
        });
        const plate = new T.Mesh(new T.CapsuleGeometry(0.043, length * 0.42, 6, 12), mat);
        plate.rotation.z = Math.PI / 2;
        plate.position.x = side * length * 0.245;
        plate.userData.pair = { bases, index };
        rung.add(plate);
        pairPick.push(plate);
        pairMaterials.push({ mat, t });
      });
      pairGroup.add(rung);
    }
    const orbitCurves = [
      (t) => {
        const a = t * Math.PI * 2;
        return v(Math.cos(a) * 3.65, Math.sin(a) * 1.13, Math.sin(a) * 2.75);
      },
      (t) => {
        const a = t * Math.PI * 2;
        return v(Math.cos(a) * 2.8, Math.sin(a) * 3.9, Math.sin(a) * 1.8 - 0.8);
      },
    ];
    orbitCurves.forEach((fn, i) => {
      const ring = line(
        Array.from({ length: 201 }, (_, j) => fn(j / 200)),
        i ? 0xaaaaca : 0x6daab3,
        i ? 0.15 : 0.27,
      );
      ring.rotation.z = i ? -0.22 : -0.28;
      halo.add(ring);
    });
    const motes = new T.InstancedMesh(
      new T.SphereGeometry(0.028, 10, 8),
      material(0xffffff, {
        roughness: 0.25,
        metalness: 0.22,
        emissive: 0x719da9,
        emissiveIntensity: 0.15,
        transparent: true,
        opacity: 0.75,
      }),
      20,
    );
    const moteMatrix = new T.Object3D(),
      moteColor = new T.Color();
    motes.instanceMatrix.setUsage(T.DynamicDrawUsage);
    for (let i = 0; i < 20; i++) {
      moteColor.set(i % 3 === 0 ? 0xa39dcf : i % 3 === 1 ? 0x73bab5 : 0xbdc9d3);
      motes.setColorAt(i, moteColor);
    }
    halo.add(motes);
    halo.rotation.set(0.12, -0.16, -0.15);
    const raycaster = new T.Raycaster(),
      pointer = new T.Vector2(),
      manualQuaternion = new T.Quaternion(),
      autoEuler = new T.Euler();
    let selectedPair = null;
    const helixHit = new T.Mesh(
      new T.CapsuleGeometry(1.85, 6.0, 8, 20),
      new T.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
        colorWrite: false,
      }),
    );
    helixHit.userData.heroTopic = "helix";
    helixHit.userData.heroHitProxy = true;
    group.add(helixHit);
    ribbonPick.push(helixHit);
    const updateReadout = () => {
      const r = $("molecule-readout");
      if (r && selectedPair && heroTopic === "helix")
        r.textContent = tr(
          "生命的一种写法 · " + selectedPair.bases[0] + " — " + selectedPair.bases[1],
          "A letter of life · " + selectedPair.bases[0] + " — " + selectedPair.bases[1],
        );
    };
    semanticLabels.push(updateReadout);
    const hitAt = (clientX, clientY) => {
      const rect = s.canvas.getBoundingClientRect();
      pointer.set(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        (-(clientY - rect.top) / rect.height) * 2 + 1,
      );
      s.scene.updateMatrixWorld(true);
      s.camera.updateMatrixWorld();
      raycaster.setFromCamera(pointer, s.camera);
      const hits = raycaster.intersectObjects(
        [...ribbonPick, ...(pairGroup.visible ? pairPick : []), ...(universe?.pickTargets || [])],
        false,
      );
      let hit = hits[0];
      const topic = hit ? hit.object.userData.heroTopic || "helix" : "scene";
      if (hit?.object.userData.heroHitProxy)
        hit =
          hits.find(
            (item) =>
              !item.object.userData.heroHitProxy &&
              (item.object.userData.heroTopic || "helix") === topic,
          ) || hit;
      return { topic, hit };
    };
    attachHeroInteraction(s.canvas, hitAt, (result, source) => {
      const { topic, hit } = result || { topic: "scene" },
        pairHit = hit?.object.userData.pair ? hit : null;
      pulseHero(
        topic === "helix" && !hit?.object.userData.heroHitProxy
          ? (hit?.uv?.x ??
              (pairHit ? 0.04 + (pairHit.object.userData.pair.index / 19) * 0.92 : 0.5))
          : ({ ai: 0.2, microbes: 0.55, data: 0.85 }[topic] ?? 0.5),
        source,
      );
      if (pairHit) {
        selectedPair = pairHit.object.userData.pair;
        updateReadout();
        window.dispatchEvent(
          new CustomEvent("moleculepick", {
            detail: { ...selectedPair, structure: "idealized", representation: "silk-helix" },
          }),
        );
      }
    });
    s.tick = (time, dt) => {
      const amount = reduced.matches ? 1 : 1 - Math.exp(-dt * 8),
        pulse = heroPulseState(time);
      const compact = s.width / s.height < 0.84;
      if (!heroState.drag && !paused) heroState.baseYaw += dt * 0.072;
      heroState.drawnZoom += (heroState.zoom - heroState.drawnZoom) * amount;
      group.quaternion
        .setFromEuler(autoEuler.set(0.13, heroState.baseYaw, -0.29))
        .premultiply(manualQuaternion.fromArray(heroOrientations.helix));
      s.root.quaternion.fromArray(heroOrientations.scene);
      group.position.y = Math.sin(time * 0.35) * 0.035;
      group.scale.setScalar(universe ? (compact ? 0.72 : 0.78) : 1);
      halo.scale.setScalar(universe ? 0.82 : 1);
      halo.rotation.y = -0.16 + Math.sin(time * 0.08) * 0.08;
      if (universe) {
        universe.group.quaternion.identity();
        universe.update(time, dt, {
          compact,
          paused: paused || reduced.matches,
          pulseAge: pulse.age,
          pulseOrigin: pulse.origin,
          selected: heroTopic,
          orientations: heroOrientations,
        });
      }
      lightUniforms.forEach((u) => {
        u.heroTime.value = time;
        u.heroPulseAge.value = pulse.age;
        u.heroPulseOrigin.value = pulse.origin;
      });
      pairMaterials.forEach(({ mat, t }) => {
        const wave =
          Math.exp(-Math.pow((Math.abs(t - pulse.origin) - pulse.age * 0.34) / 0.075, 2)) *
          Math.exp(-pulse.age * 0.65);
        mat.emissiveIntensity = 0.015 + wave * 0.6;
        mat.opacity = 0.48 + wave * 0.21;
      });
      packets.forEach((p) => {
        const q = (time * 0.039 + p.phase) % 1,
          fade = Math.min(1, q * 25, (1 - q) * 25);
        p.dot.position.copy(p.path.getPoint(q));
        p.dot.scale.setScalar(fade);
        const a = p.tail.geometry.getAttribute("position");
        for (let j = 0; j < 18; j++) {
          const point = p.path.getPoint(Math.max(0, q - j * 0.0035));
          a.setXYZ(j, point.x, point.y, point.z);
        }
        a.needsUpdate = true;
        p.tail.material.opacity = fade * 0.82;
      });
      for (let i = 0; i < 20; i++) {
        if (i < 6) {
          const p = orbitCurves[i % 2]((i / 6 + time * (i % 2 ? -0.017 : 0.022) + 10) % 1);
          moteMatrix.position.copy(p);
        } else {
          const a = i * 2.39996 + time * 0.012,
            radius = 2.6 + seed(i + 63) * 1.2;
          moteMatrix.position.set(
            Math.cos(a) * radius,
            (seed(i + 91) - 0.5) * 8.6 + Math.sin(time * 0.22 + i) * 0.055,
            Math.sin(a) * radius * 0.5 - 1.5,
          );
        }
        moteMatrix.scale.setScalar(i < 6 ? 1.8 : 0.6 + seed(i + 15) * 0.8);
        moteMatrix.updateMatrix();
        motes.setMatrixAt(i, moteMatrix.matrix);
      }
      motes.instanceMatrix.needsUpdate = true;
      const base = s.width / s.height < 0.83 ? 20.8 : 21;
      s.camera.position.z = base / heroState.drawnZoom;
      s.canvas.dataset.zoom = heroState.zoom.toFixed(2);
      s.canvas.dataset.drawnZoom = heroState.drawnZoom.toFixed(3);
      s.canvas.dataset.pulseProgress = Math.min(1, pulse.age / 3.3).toFixed(3);
      s.canvas.dataset.pulseState = pulse.frozen ? "still" : pulse.active ? "flowing" : "rest";
    };
    s.group = group;
    s.pairs = pairGroup;
    s.hydrogen = pairGroup;
    s.universe = universe;
    s.heroTargets = () => {
      s.scene.updateMatrixWorld(true);
      const targets = [],
        seen = new Set();
      for (const object of [helixHit, ...(universe?.pickTargets || [])]) {
        const topic = object.userData.heroTopic;
        if (!topic || seen.has(topic)) continue;
        const point = object.getWorldPosition(v()).project(s.camera);
        targets.push({
          topic,
          x: ((point.x + 1) * s.width) / 2,
          y: ((1 - point.y) * s.height) / 2,
          visible: Math.abs(point.x) < 1 && Math.abs(point.y) < 1 && point.z > -1 && point.z < 1,
        });
        seen.add(topic);
      }
      const rect = s.canvas.getBoundingClientRect();
      const empty = [
        [0.07, 0.07],
        [0.93, 0.07],
        [0.07, 0.88],
        [0.93, 0.88],
        [0.5, 0.04],
      ].find(
        ([x, y]) => hitAt(rect.left + x * rect.width, rect.top + y * rect.height).topic === "scene",
      ) || [0.05, 0.05];
      targets.push({
        topic: "scene",
        x: empty[0] * s.width,
        y: empty[1] * s.height,
        visible: true,
      });
      return targets;
    };
    s.clearSelection = () => {
      selectedPair = null;
      const r = $("molecule-readout");
      if (r) r.textContent = "";
    };
    s.canvas.dataset.representation = "silk-helix";
    s.canvas.dataset.heroVersion = "10";
    s.canvas.dataset.material = "lightwoven-pearl";
    s.canvas.dataset.pulseCount = "0";
    s.canvas.dataset.heroElements = universe ? "helix ai microbes data" : "helix";
    s.canvas.dataset.selectedTopic = heroTopic;
    return s;
  }

  /* Each research phase owns a different composition. The page owns cycling. */
  function groupOpacity(group, amount) {
    group.traverse((object) => {
      if (!object.material) return;
      for (const mat of Array.isArray(object.material) ? object.material : [object.material]) {
        if (mat.userData.originalOpacity === undefined) mat.userData.originalOpacity = mat.opacity;
        mat.transparent = true;
        mat.opacity = mat.userData.originalOpacity * amount * (mat.userData.modulation ?? 1);
      }
    });
  }
  function satin(color, opacity = 1) {
    return new T.MeshPhysicalMaterial({
      color,
      roughness: 0.26,
      metalness: 0.17,
      clearcoat: 0.8,
      clearcoatRoughness: 0.25,
      transparent: opacity < 1,
      opacity,
      side: T.DoubleSide,
    });
  }
  function roundCard(width, height, color, opacity = 0.9) {
    const r = Math.min(0.14, height * 0.24),
      x = -width / 2,
      y = -height / 2,
      shape = new T.Shape();
    shape.moveTo(x + r, y);
    shape.lineTo(x + width - r, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + r);
    shape.lineTo(x + width, y + height - r);
    shape.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    shape.lineTo(x + r, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - r);
    shape.lineTo(x, y + r);
    shape.quadraticCurveTo(x, y, x + r, y);
    const geometry = new T.ExtrudeGeometry(shape, {
      depth: 0.075,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.025,
      bevelThickness: 0.025,
      curveSegments: 6,
    });
    return new T.Mesh(geometry, satin(color, opacity));
  }
  function textAt(group, zh, en, x, y, z = 0.15, width = 2.8) {
    const text = label(zh, en, width > 3 ? Math.min(2.6, width * 0.54) : width);
    text.userData.phaseCaption = width > 3;
    text.position.set(x, y, z);
    group.add(text);
    return text;
  }
  function tube(curve, radius, color, opacity = 1, segments = 96) {
    return new T.Mesh(new T.TubeGeometry(curve, segments, radius, 8, false), satin(color, opacity));
  }
  function pathCurve(points) {
    return new T.CatmullRomCurve3(points);
  }
  function parametric(fn) {
    const curve = new T.Curve();
    curve.getPoint = fn;
    return curve;
  }
  function silk(curve, width, color, segments = 200, endColor = color) {
    const frames = curve.computeFrenetFrames(segments, false),
      positions = [],
      colors = [],
      indices = [],
      shade = new T.Color(color),
      end = new T.Color(endColor);
    for (let i = 0; i <= segments; i++) {
      const t = i / segments,
        p = curve.getPoint(t),
        edge = frames.normals[i],
        normal = frames.binormals[i],
        col = shade.clone().lerp(end, t);
      const cap = Math.min(1, t / 0.035, (1 - t) / 0.035),
        taper = Math.sqrt(Math.max(0.0001, 1 - (1 - cap) * (1 - cap)));
      for (let j = 0; j < 7; j++) {
        const u = (j / 6) * 2 - 1,
          q = p
            .clone()
            .addScaledVector(edge, u * width * taper)
            .addScaledVector(normal, (1 - u * u) * width * 0.13);
        positions.push(q.x, q.y, q.z);
        colors.push(col.r, col.g, col.b);
        if (i < segments && j < 6) {
          const a = i * 7 + j,
            b = a + 7;
          indices.push(a, b, a + 1, b, b + 1, a + 1);
        }
      }
    }
    const geometry = new T.BufferGeometry();
    geometry.setAttribute("position", new T.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new T.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const mat = satin(0xffffff);
    mat.vertexColors = true;
    return new T.Mesh(geometry, mat);
  }
  function orbit(group, radius, color, angle = 0.2, opacity = 0.23) {
    const ring = new T.Mesh(new T.TorusGeometry(radius, 0.012, 6, 96), satin(color, opacity));
    ring.rotation.set(angle, 0.12, 0);
    group.add(ring);
    return ring;
  }
  function addFlow(group, curve, color, count = 3, speed = 0.14, radius = 0.065) {
    group.add(line(curve.getPoints(64), color, 0.26));
    const beads = Array.from({ length: count }, (_, i) => {
      const dot = meshSphere(radius, color, {
        emissive: color,
        emissiveIntensity: 0.24,
        transparent: true,
      });
      group.add(dot);
      return { dot, phase: i / count };
    });
    return (time) =>
      beads.forEach(({ dot, phase }) => {
        const p = (time * speed + phase) % 1;
        dot.position.copy(curve.getPoint(p));
        dot.scale.setScalar(0.35 + Math.sin(Math.PI * p) * 0.8);
        dot.material.userData.modulation = Math.sin(Math.PI * p);
      });
  }
  function phaseController(s, names, initial, compositions, options = {}) {
    let current = names.includes(initial) ? initial : names[0],
      previous = current,
      progress = 1,
      elapsed = 0;
    const weights = names.map((name) => (name === current ? 1 : 0));
    let from = weights.slice();
    const groups = names.map((name) => {
      const entry = compositions[name];
      s.root.add(entry.group);
      entry.group.userData.phase = name;
      return entry;
    });
    s.canvas.dataset.scene = current;
    s.canvas.dataset.sceneVersion = "6";
    s.canvas.dataset.transitionProgress = "1.000";
    function set(name) {
      if (!names.includes(name)) return;
      if (name !== current) {
        previous = current;
        current = name;
        from = weights.slice();
        progress = paused || reduced.matches ? 1 : 0;
        elapsed = 0;
        s.canvas.dataset.previousScene = previous;
      }
      s.canvas.dataset.scene = current;
      wake();
    }
    s.tick = (time, dt, wallDt = dt) => {
      if (paused || reduced.matches) progress = 1;
      else progress = Math.min(1, progress + wallDt / 0.95);
      if (!paused) elapsed += wallDt;
      const smooth = progress * progress * (3 - 2 * progress);
      groups.forEach((entry, i) => {
        const active = names[i] === current,
          target = active ? 1 : 0;
        weights[i] = from[i] + (target - from[i]) * smooth;
        entry.group.visible = weights[i] > 0.002;
        if (!entry.group.visible) return;
        entry.group.position.y = (active ? -0.2 : 0.16) * (1 - weights[i]);
        entry.group.scale.setScalar((0.92 + 0.08 * weights[i]) * (options.artScale ?? 1.04));
        entry.group.rotation.y = (active ? -0.12 : 0.12) * (1 - weights[i]);
        entry.tick?.(time, dt, active ? elapsed : 0, paused || reduced.matches);
        groupOpacity(entry.group, weights[i]);
        // Captions leave before the next caption arrives; pictures may crossfade.
        entry.group.traverse((object) => {
          if (!object.userData.phaseCaption || !object.material) return;
          const captionAlpha = active
            ? Math.max(0, Math.min(1, (progress - 0.5) / 0.5))
            : Math.max(0, 1 - progress / 0.28);
          object.material.opacity *= captionAlpha;
        });
      });
      options.tick?.(time, dt, current);
      s.root.rotation.y = (options.yaw ?? -0.11) + Math.sin(time * 0.12) * 0.035;
      s.root.rotation.x = options.pitch ?? 0.035;
      const ratio = s.width / s.height;
      s.camera.position.z =
        ratio < 1.15 ? (options.mobileDistance ?? 16.5) : (options.distance ?? 13.4);
      s.canvas.dataset.transitionProgress = progress.toFixed(3);
      s.canvas.dataset.renderedScene = current;
      s.canvas.dataset.visibleScenes = names.filter((_, i) => weights[i] > 0.01).join("|");
    };
    return { set, info: () => ({ scene: current, previous, progress, weights: weights.slice() }) };
  }
  function miniDag(owner) {
    const group = new T.Group();
    group.position.set(0, -3.15, 0.15);
    owner.add(group);
    const positions = [v(-2.85, 0, 0), v(0, 0, 0), v(2.85, 0, 0), v(1.3, 0.88, -0.12)],
      nodes = [];
    [
      [0, 1],
      [1, 2],
      [3, 1],
      [3, 2],
    ].forEach(([a, b], i) => {
      const start = positions[a],
        end = positions[b],
        direction = end.clone().sub(start).normalize(),
        p = start.clone().addScaledVector(direction, 0.2),
        q = end.clone().addScaledVector(direction, -0.25);
      group.add(line([p, q], i < 2 ? 0x79aab5 : 0xaab7c2, i < 2 ? 0.6 : 0.3, i > 1));
      if (i < 2) {
        const arrow = new T.Mesh(new T.ConeGeometry(0.075, 0.18, 10), satin(0x79aab5));
        arrow.position.copy(q);
        arrow.quaternion.setFromUnitVectors(v(0, 1, 0), direction);
        group.add(arrow);
      }
    });
    positions.forEach((p, i) => {
      const ball = meshSphere(
        i === 3 ? 0.095 : 0.145,
        [palette.teal, palette.blue, palette.coral, 0xaab7c2][i],
      );
      ball.position.copy(p);
      group.add(ball);
      nodes.push(ball);
    });
    [
      ["遗传工具", "Instrument"],
      ["暴露", "Exposure"],
      ["结局", "Outcome"],
    ].forEach(([zh, en], i) => textAt(group, zh, en, positions[i].x, -0.48, 0.1, 1.9));
    textAt(group, "混杂", "Confounder", 1.3, 1.2, -0.1, 1.6);
    return (selected) =>
      nodes.forEach((ball, i) => {
        ball.scale.setScalar(i === selected ? 1.25 : 0.82);
        ball.material.emissive.copy(ball.material.color);
        ball.material.emissiveIntensity = i === selected ? 0.25 : 0;
      });
  }
  function causalScene() {
    const s = makeScene("causal-canvas", 13.4, 36);
    if (!s) return;
    const instrument = { group: new T.Group() },
      exposure = { group: new T.Group() },
      outcome = { group: new T.Group() };
    const ig = instrument.group,
      locusHalos = [];
    const gene = (phase) =>
      parametric((t) => {
        const a = t * Math.PI * 4 + phase;
        return v((t - 0.5) * 7.4, 0.7 + Math.sin(a) * 0.7, Math.cos(a) * 0.7);
      });
    [0, Math.PI].forEach((phase, i) =>
      ig.add(silk(gene(phase), 0.16, i ? 0x9c8dd2 : 0x55b4ae, 160, i ? 0xc1b6e2 : 0x8ad7ca)),
    );
    for (let i = 0; i < 23; i++) {
      const t = i / 22,
        a = gene(0).getPoint(t),
        b = gene(Math.PI).getPoint(t);
      ig.add(rigidCylinder(a, b, 0.025, i % 3 === 0 ? 0x8e7ac6 : 0x8ebec5));
    }
    [3, 11, 19].forEach((idx, i) => {
      const p = gene(0).getPoint(idx / 22),
        ring = orbit(ig, 0.49, [palette.teal, palette.blue, palette.purple][i], 0, 0.65);
      ring.position.copy(p);
      locusHalos.push(ring);
      textAt(ig, "Z" + ["₁", "₂", "₃"][i], "Z" + ["₁", "₂", "₃"][i], p.x, 2.12, 0.5, 1.05);
      ig.add(line([p, v(p.x, 1.8, p.z)], 0x9bb7c8, 0.35));
    });
    textAt(ig, "遗传变异 · 工具变量", "Genetic variants · instruments", 0, -0.8, 0.1, 4.4);
    instrument.tick = (time) => {
      locusHalos.forEach((r, i) => {
        r.rotation.y = Math.sin(time * 0.45 + i) * 0.28;
        r.scale.setScalar(1 + Math.sin(time * 1.15 + i) * 0.06);
      });
    };
    const eg = exposure.group,
      flows = [];
    for (let layer = 0; layer < 5; layer++) {
      const curve = parametric((t) => {
        const x = (t - 0.5) * 6.2;
        return v(x, -0.7 + Math.exp((-x * x) / (1.5 + layer * 0.08)) * 2.65, (layer - 2) * 0.32);
      });
      eg.add(silk(curve, 0.085, layer % 2 ? 0xa8b5e5 : 0x6abbb8, 100, 0xaaa1de));
      if (layer === 0 || layer === 4)
        flows.push(addFlow(eg, curve, layer ? palette.purple : palette.teal, 3, 0.11, 0.055));
    }
    eg.add(line([v(-3.7, -0.86, 0.9), v(3.7, -0.86, 0.9)], 0x9db6c9, 0.5));
    for (let i = 0; i < 3; i++) {
      const orb = meshSphere(0.13, [palette.teal, palette.blue, palette.purple][i]);
      orb.position.set(-4.1, 0.5 + i * 0.53, 0.3);
      eg.add(orb);
      flows.push(
        addFlow(
          eg,
          pathCurve([
            orb.position.clone(),
            v(-3.5, 1.6 + i * 0.2, 0.4),
            v(-1.5, 1, 0.2),
            v(0, 1.95, 0.3),
          ]),
          0x7faec6,
          2,
          0.14,
          0.055,
        ),
      );
    }
    textAt(eg, "暴露特征的分布", "A distribution of exposure", 0, -1.35, 0.2, 4.1);
    exposure.tick = (time) => flows.forEach((fn) => fn(time));
    const og = outcome.group,
      markers = [];
    og.add(line([v(-0.9, -1.2, 0.1), v(-0.9, 2.0, 0.1)], 0xadc0cd, 0.55, true));
    for (let i = 0; i < 5; i++) {
      const y = 1.65 - i * 0.57,
        x = -1.35 + Math.sin(i * 1.6) * 0.8,
        half = 0.55 + seed(i + 72) * 0.7;
      og.add(line([v(x - half, y, 0.1), v(x + half, y, 0.1)], i % 2 ? 0x7a9bc4 : 0x68aea9, 0.8));
      [x - half, x + half].forEach((end) =>
        og.add(line([v(end, y - 0.07, 0.1), v(end, y + 0.07, 0.1)], 0x90acbf, 0.6)),
      );
      const diamond = new T.Mesh(
        new T.OctahedronGeometry(0.12, 0),
        satin(i % 2 ? 0x7c8fc8 : 0x55aba7),
      );
      diamond.position.set(x, y, 0.15);
      og.add(diamond);
      markers.push(diamond);
    }
    const effect = meshSphere(0.65, 0xb39bd5, { roughness: 0.2, metalness: 0.24 });
    effect.position.set(2.7, 0.55, -0.1);
    og.add(effect);
    const halo = orbit(og, 1.05, 0xa996cf, 0.45, 0.5);
    halo.position.copy(effect.position);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2,
        p = v(2.7 + Math.cos(a) * 1.44, 0.55 + Math.sin(a) * 1.44, -0.15),
        orb = meshSphere(0.07, i % 2 ? palette.blue : palette.teal);
      orb.position.copy(p);
      og.add(orb);
      og.add(line([effect.position, p], 0x9dafcf, 0.25));
    }
    textAt(og, "结局与效应 · 概念示意", "Outcome & effect · schematic", 0, -1.5, 0.2, 4.55);
    outcome.tick = (time) => {
      halo.rotation.y = time * 0.12;
      markers.forEach((m, i) => m.scale.setScalar(0.95 + Math.sin(time * 0.8 + i) * 0.07));
    };
    const dag = miniDag(s.root),
      phases = ["instrument", "exposure", "outcome"];
    const controller = phaseController(
      s,
      phases,
      focusState.causalFocus,
      { instrument, exposure, outcome },
      {
        pitch: 0.02,
        distance: 13.2,
        mobileDistance: 16.4,
        tick: (time, dt, key) => dag(phases.indexOf(key)),
      },
    );
    causalState = {
      update: () => {
        s.canvas.dataset.causalFocus = focusState.causalFocus;
        controller.set(focusState.causalFocus);
      },
      info: controller.info,
    };
    causalState.update();
    s.canvas.dataset.representation = "causal-story";
  }
  function omicsScene() {
    const s = makeScene("omics-canvas", 13.3, 36);
    if (!s) return;
    const all = { group: new T.Group() },
      genome = { group: new T.Group() },
      transcriptome = { group: new T.Group() },
      proteome = { group: new T.Group() };
    const shades = [0x45a9a4, 0x6f86cd, 0xa184c7],
      flows = [],
      platforms = [];
    for (let i = 0; i < 3; i++) {
      const platter = new T.Group();
      platter.position.y = (i - 1) * 1.45;
      platter.rotation.x = Math.PI / 2 - 0.16;
      all.group.add(platter);
      platforms.push(platter);
      const disc = new T.Mesh(new T.CircleGeometry(2.7, 80), satin(shades[i], 0.09));
      platter.add(disc);
      [2.72, 2.45].forEach((radius, j) => orbit(platter, radius, shades[i], 0, j ? 0.22 : 0.55));
      for (let k = 0; k < 8; k++) {
        const a = (k / 8) * Math.PI * 2,
          node = meshSphere(0.06 + (k % 3) * 0.018, shades[i]);
        node.position.set(Math.cos(a) * 2.45, Math.sin(a) * 2.45, 0.035);
        platter.add(node);
      }
      textAt(
        all.group,
        ["基因组", "转录组", "蛋白组"][i],
        ["Genome", "Transcriptome", "Proteome"][i],
        3.7,
        (i - 1) * 1.45,
        0.4,
        2.1,
      );
    }
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2,
        curve = pathCurve([
          v(Math.cos(a) * 2.3, -1.5, Math.sin(a) * 1.9),
          v(Math.cos(a + 0.55) * 1.25, 0, Math.sin(a + 0.55) * 1.25),
          v(Math.cos(a + 1.2) * 2.1, 1.5, Math.sin(a + 1.2) * 1.8),
        ]);
      flows.push(addFlow(all.group, curve, shades[i % 3], 2, 0.1, 0.065));
    }
    const center = meshSphere(0.28, 0xb0d1d8, { emissive: 0x548d9d, emissiveIntensity: 0.1 });
    all.group.add(center);
    all.tick = (time) => {
      platforms.forEach((p, i) => (p.rotation.z = time * 0.035 * (i % 2 ? -1 : 1)));
      flows.forEach((fn) => fn(time));
    };
    const gg = genome.group,
      helix = new T.Group();
    gg.add(helix);
    helix.rotation.z = -0.28;
    const DNA = (phase) =>
      parametric((t) => {
        const a = t * Math.PI * 4 + phase;
        return v(Math.cos(a) * 1.0, (t - 0.5) * 5.7, Math.sin(a) * 1.0);
      });
    [0, Math.PI].forEach((phase, i) =>
      helix.add(silk(DNA(phase), 0.19, shades[i ? 2 : 0], 180, i ? 0xc6b2e2 : 0x88d7c6)),
    );
    for (let i = 0; i < 22; i++) {
      const t = 0.02 + (i / 21) * 0.96,
        a = DNA(0).getPoint(t),
        b = DNA(Math.PI).getPoint(t);
      helix.add(rigidCylinder(a, b, 0.028, i % 2 ? 0xb0b8da : 0x80c0bd));
    }
    const seq = ["A", "T", "C", "G", "A", "C"];
    seq.forEach((letter, i) => {
      const tile = roundCard(0.49, 0.48, shades[i % 3], 0.6);
      tile.position.set(2.25 + (i % 2) * 0.68, 1.5 - Math.floor(i / 2) * 0.73, 0.25);
      gg.add(tile);
      textAt(gg, letter, letter, tile.position.x, tile.position.y, 0.45, 0.7);
    });
    textAt(gg, "序列 · 遗传信息", "Sequence · genetic information", 0, -3.22, 0.2, 4.3);
    genome.tick = (time) => {
      helix.rotation.y = time * 0.09;
    };
    const tg = transcriptome.group,
      transcriptFlows = [],
      transcripts = [];
    const transcription = meshSphere(0.48, 0x8fadd6, {
      roughness: 0.24,
      metalness: 0.18,
      transparent: true,
      opacity: 0.8,
    });
    transcription.position.set(-2.9, 0.25, 0);
    tg.add(transcription);
    const hub = orbit(tg, 0.83, 0x90b9d2, 0.4, 0.45);
    hub.position.copy(transcription.position);
    for (let i = 0; i < 5; i++) {
      const y = (i - 2) * 0.88,
        len = 4.2 + (i % 3) * 0.45;
      const curve = pathCurve([
        v(-2.65, 0.25, 0.1),
        v(-1.7, y * 0.6, 0.6 - i * 0.15),
        v(0.2, y + 0.25, -0.2),
        v(len - 2.1, y, 0.2),
      ]);
      const rib = silk(curve, 0.085, i % 2 ? 0x7a9ad2 : 0x7ebcb9, 120, i % 2 ? 0xc0b1e3 : 0xa7d5cc);
      tg.add(rib);
      transcripts.push(rib);
      for (let k = 0; k < 9; k++) {
        const p = curve.getPoint(0.26 + k * 0.077),
          base = roundCard(0.17, 0.29, [0x7bbaad, 0x9c9ed3, 0x86b1d0, 0xc0a2cc][k % 4], 0.7);
        base.position.copy(p).add(v(0, 0.17, 0.06));
        base.rotation.z = Math.sin(k * 0.4 + i) * 0.22;
        tg.add(base);
      }
      transcriptFlows.push(addFlow(tg, curve, i % 2 ? palette.blue : palette.teal, 2, 0.13, 0.05));
    }
    textAt(tg, "RNA", "RNA", -2.95, -1.08, 0.1, 1.4);
    textAt(
      tg,
      "转录 · 表达的多种可能",
      "Transcripts · patterns of expression",
      0.2,
      -2.75,
      0.1,
      5.0,
    );
    transcriptome.tick = (time) => {
      hub.rotation.y = time * 0.12;
      transcriptFlows.forEach((fn) => fn(time));
    };
    const pg = proteome.group,
      fold = new T.Group();
    pg.add(fold);
    const foldPoints = [];
    // Two orderly helical segments connected by a broad, rounded turn.
    // This is a generic protein-inspired ribbon, not an experimental fold.
    for (let i = 0; i <= 50; i++) {
      const t = i / 50,
        a = t * Math.PI * 3.5;
      foldPoints.push(v(-1.35 + Math.cos(a) * 0.7, -1.6 + t * 3.2, Math.sin(a) * 0.7));
    }
    const lastPoint = foldPoints[foldPoints.length - 1].clone();
    const turn = new T.CubicBezierCurve3(
      lastPoint,
      lastPoint.clone().add(v(0.9, 0.6, 0)),
      v(2.05, 2.1, -0.8),
      v(2.05, 1.6, 0),
    );
    foldPoints.push(...turn.getPoints(26).slice(1));
    for (let i = 1; i <= 50; i++) {
      const t = i / 50,
        a = t * Math.PI * 3.5;
      foldPoints.push(v(1.35 + Math.cos(a) * 0.7, 1.6 - t * 3.2, Math.sin(a) * 0.7));
    }
    const backbone = new T.CatmullRomCurve3(foldPoints, false, "centripetal");
    fold.add(silk(backbone, 0.25, 0x65b6b7, 440, 0xa48bcf));
    const edge = tube(backbone, 0.018, 0xdcecf2, 0.55, 350);
    fold.add(edge);
    const glow = [];
    for (let i = 0; i < 7; i++) {
      const ball = meshSphere(0.045, 0x9c89cb, { emissive: 0x7d71bf, emissiveIntensity: 0.4 });
      fold.add(ball);
      glow.push(ball);
    }
    const ring = orbit(pg, 3.15, 0xb3abd5, 0.45, 0.25);
    ring.position.z = -0.9;
    textAt(pg, "折叠 · 结构与功能", "Folding · structure and function", 0, -2.6, 0.3, 4.6);
    proteome.tick = (time) => {
      fold.rotation.y = time * 0.07;
      fold.rotation.z = 0.22 + Math.sin(time * 0.12) * 0.06;
      glow.forEach((b, i) => b.position.copy(backbone.getPoint((time * 0.025 + i / 7) % 1)));
      ring.rotation.z = time * 0.025;
    };
    const controller = phaseController(
      s,
      ["all", "genome", "transcriptome", "proteome"],
      focusState.omicsLayer,
      { all, genome, transcriptome, proteome },
      { pitch: 0.1, distance: 13.3, mobileDistance: 16.3 },
    );
    omicsState = {
      update: () => {
        s.canvas.dataset.omicsLayer = focusState.omicsLayer;
        controller.set(focusState.omicsLayer);
      },
      info: controller.info,
    };
    omicsState.update();
    s.canvas.dataset.representation = "omics-transformations";
  }
  function aiScene() {
    const s = makeScene("ai-canvas", 13.1, 36);
    if (!s) return;
    const tokens = { group: new T.Group() },
      attention = { group: new T.Group() },
      generation = { group: new T.Group() },
      tokenTiles = [],
      tokenFlow = [];
    const positions = [
      [-3.8, 0.75, -0.2],
      [-1.9, 1.55, 0.2],
      [0, 1.9, 0.45],
      [1.9, 1.55, 0.2],
      [3.8, 0.75, -0.2],
    ];
    positions.forEach(([x, y, z], i) => {
      const group = new T.Group();
      group.position.set(x, y, z);
      tokens.group.add(group);
      const tile = roundCard(1.54, 0.68, i % 2 ? 0xb6b6df : 0x9cd7cf);
      group.add(tile);
      textAt(group, LLM_INPUT.zh[i], LLM_INPUT.en[i], 0, 0, 0.18, 1.86);
      tokenTiles.push({ group, tile, home: y });
      const vector = new T.Group();
      vector.position.set((i - 2) * 1.15, -1.2, 0.3);
      tokens.group.add(vector);
      for (let j = 0; j < 7; j++) {
        const height = 0.17 + seed(i * 30 + j) * 0.83,
          bar = new T.Mesh(
            new T.BoxGeometry(0.11, height, 0.2),
            satin(i % 2 ? 0x9692d2 : 0x61afa9, 0.82),
          );
        bar.position.set((j - 3) * 0.15, height / 2, 0);
        vector.add(bar);
      }
      const route = pathCurve([
        v(x, y - 0.4, z),
        v(x * 0.92, 0.1, z + 0.5),
        v((i - 2) * 1.15, -0.3, 0.4),
      ]);
      tokenFlow.push(
        addFlow(tokens.group, route, i % 2 ? palette.purple : palette.teal, 2, 0.12, 0.055),
      );
    });
    const tokOrbit = orbit(tokens.group, 3.65, 0x97b8cb, 1.08, 0.24);
    tokOrbit.scale.y = 0.67;
    tokOrbit.position.set(0, -0.1, -0.65);
    textAt(tokens.group, "词元 → 向量", "Tokens → embeddings", 0, -2.2, 0.2, 3.8);
    tokens.tick = (time) => {
      tokenTiles.forEach(({ group, tile, home }, i) => {
        group.position.y = home + Math.sin(time * 0.5 + i * 0.8) * 0.045;
        group.scale.setScalar(i === focusState.tokenFocus ? 1.07 : 1);
        tile.material.emissive.setHex(0x478c92);
        tile.material.emissiveIntensity = i === focusState.tokenFocus ? 0.23 : 0;
      });
      tokenFlow.forEach((fn) => fn(time));
    };
    const ag = attention.group,
      cells = [],
      panels = [],
      attentionFlow = [];
    for (let layer = 0; layer < 3; layer++) {
      const panel = new T.Group();
      panel.position.set((layer - 1) * 0.54, (layer - 1) * 0.21, (layer - 1) * 0.72);
      panel.rotation.y = -0.26;
      panels.push(panel);
      ag.add(panel);
      const back = roundCard(3.2, 3.2, [0xb0ded9, 0xb9c6ed, 0xd0bde7][layer], 0.24);
      back.material.depthWrite = false;
      panel.add(back);
      for (let row = 0; row < 5; row++)
        for (let col = 0; col < 5; col++) {
          const masked = col > row,
            amount = masked ? 0.04 : 0.36 + seed(layer * 83 + row * 7 + col) * 0.5,
            cell = roundCard(
              0.43,
              0.43,
              masked ? 0xdbe2ea : [0x63b3ad, 0x7c8dcb, 0xa28acb][layer],
              amount,
            );
          cell.position.set((col - 2) * 0.55, (2 - row) * 0.55, 0.16);
          panel.add(cell);
          cells.push({ cell, row, col, masked, amount });
        }
    }
    for (let i = 0; i < 5; i++) {
      const p = v(-3.8, (2 - i) * 0.64, 0.2),
        orb = meshSphere(0.105, i % 2 ? palette.blue : palette.teal);
      orb.position.copy(p);
      ag.add(orb);
      textAt(ag, LLM_INPUT.zh[i], LLM_INPUT.en[i], -4.25, p.y, 0.2, 1.35);
      const curve = pathCurve([
        p,
        v(-2.9, p.y, 0.9),
        v(-1.6, (2 - i) * 0.55, 0.9),
        v(0.5, (2 - i) * 0.55, 0.8),
      ]);
      attentionFlow.push(addFlow(ag, curve, i % 2 ? 0x9496cf : 0x7abcb7, 2, 0.13, 0.045));
    }
    const aRing = orbit(ag, 2.5, 0xa99acb, 0.48, 0.2);
    aRing.position.z = -1.2;
    textAt(ag, "多头注意力 · 因果掩码", "Multi-head attention · causal mask", 0.2, -2.25, 0.8, 5.0);
    attention.tick = (time) => {
      panels.forEach((p, i) => (p.position.y = (i - 1) * 0.21 + Math.sin(time * 0.4 + i) * 0.025));
      cells.forEach(({ cell, row, masked }) => {
        cell.material.userData.modulation = masked ? 0.5 : row === focusState.tokenFocus ? 1 : 0.54;
        cell.material.emissive.copy(cell.material.color);
        cell.material.emissiveIntensity = !masked && row === focusState.tokenFocus ? 0.2 : 0;
      });
      attentionFlow.forEach((fn) => fn(time));
    };
    const gg = generation.group,
      outputTiles = [],
      path = parametric((t) =>
        v(
          (t - 0.5) * 9.4,
          -1 + Math.sin(t * Math.PI * 1.65) * 0.46,
          Math.sin(t * Math.PI * 1.9) * 0.62,
        ),
      );
    const ribbon = silk(path, 0.35, 0x83c7c1, 220, 0xb3a4d9);
    ribbon.rotation.x = 0.15;
    gg.add(ribbon);
    const genFlow = addFlow(gg, path, 0x9183cb, 5, 0.095, 0.065);
    for (let i = 0; i < 5; i++) {
      const group = new T.Group(),
        x = (i - 2) * 1.83,
        y = 0.5 + Math.sin((i / 4) * Math.PI) * 0.62;
      group.position.set(x, y, 0.15);
      gg.add(group);
      const tile = roundCard(
        1.54,
        0.82,
        [0x9bd3cc, 0xa4cbdc, 0xb1bce4, 0xbcb0dd, 0xc7a9d6][i],
        0.9,
      );
      group.add(tile);
      textAt(group, LLM_OUTPUT.zh[i], LLM_OUTPUT.en[i], 0, 0, 0.16, 1.8);
      outputTiles.push({ group, tile });
      gg.add(line([v(x, y - 0.52, 0.1), v(x, -0.5, 0.1)], 0xa2b9cd, 0.28));
    }
    const cursor = new T.Mesh(new T.BoxGeometry(0.035, 0.6, 0.05), satin(0x8d7bc6));
    gg.add(cursor);
    const ribbon2 = silk(
      parametric((t) =>
        v(
          (t - 0.5) * 8.8,
          -1.55 + Math.sin(t * Math.PI * 1.65 + 0.5) * 0.34,
          Math.cos(t * Math.PI * 2) * 0.4,
        ),
      ),
      0.14,
      0xb0cddc,
      160,
      0xcab8df,
    );
    gg.add(ribbon2);
    textAt(gg, "逐词生成 · 一个新的表达", "Token by token · a new expression", 0, -2.35, 0.3, 5.1);
    generation.tick = (time, dt, elapsed, still) => {
      const count = still ? 5 : Math.min(5, 1 + Math.floor(elapsed / 0.58));
      outputTiles.forEach(({ group, tile }, i) => {
        group.visible = i < count;
        group.scale.setScalar(i === count - 1 ? 1.04 : 1);
        tile.material.emissive.setHex(0x9c83c6);
        tile.material.emissiveIntensity = i === count - 1 ? 0.17 : 0;
      });
      cursor.position.set(
        (Math.max(1, count) - 3) * 1.83 + 0.88,
        0.5 + Math.sin(((count - 1) / 4) * Math.PI) * 0.62,
        0.3,
      );
      cursor.material.userData.modulation = still ? 0.8 : 0.45 + 0.4 * Math.sin(time * 3);
      genFlow(time);
    };
    const controller = phaseController(
      s,
      ["tokens", "attention", "generation"],
      focusState.llmStep,
      { tokens, attention, generation },
      { pitch: 0.045, distance: 12.9, mobileDistance: 16.2 },
    );
    llmState = {
      update: () => {
        controller.set(focusState.llmStep);
        s.canvas.dataset.llmStep = focusState.llmStep;
        s.canvas.dataset.tokenFocus = String(focusState.tokenFocus);
        s.canvas.dataset.inputTokens = (english() ? LLM_INPUT.en : LLM_INPUT.zh).join("|");
        wake();
      },
      info: controller.info,
    };
    llmState.update();
    s.canvas.dataset.representation = "transformer-transformations";
  }

  // A perspective-projected height field: thousands of samples form moving
  // contours. It is decorative data topography, never a measured data claim.
  const field = $("data-field-canvas");
  let fieldContext;
  try {
    fieldContext = field?.getContext("2d");
  } catch {}
  function renderField(time) {
    if (!fieldContext || !visible(field)) return;
    const width = field.clientWidth,
      height = field.clientHeight,
      dpr = Math.min(devicePixelRatio || 1, 1.4);
    if (!width || !height) return;
    if (field.width !== Math.round(width * dpr) || field.height !== Math.round(height * dpr)) {
      field.width = Math.round(width * dpr);
      field.height = Math.round(height * dpr);
    }
    const ctx = fieldContext;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    const fieldPalette = window.WX_VISUAL_PALETTE?.get() || {
      primary: "#158f98",
      accent: "#4671bf",
      secondary: "#8269c2",
    };
    const fieldColors = [fieldPalette.primary, fieldPalette.accent, fieldPalette.secondary].map(
      (hex) => [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16)).join(","),
    );
    const mobile = width < 700,
      rows = mobile ? 31 : 48,
      cols = mobile ? 56 : 96,
      grid = [];
    for (let row = rows - 1; row >= 0; row--) {
      const z = row / rows,
        depth = 1 - z,
        perspective = 0.4 + depth * 0.8;
      const baseY = height * (0.31 + depth * 0.89),
        center = width * 0.53;
      const points = [];
      for (let col = 0; col <= cols; col++) {
        const x = (col / cols) * 2 - 1;
        const ridgeA = Math.exp(-Math.pow((x + 0.63 - z * 0.18) / 0.25, 2)) * 0.62;
        const ridgeB = Math.exp(-Math.pow((x + 0.01 + z * 0.06) / 0.19, 2)) * 0.43;
        const ridgeC = Math.exp(-Math.pow((x - 0.59 + z * 0.13) / 0.29, 2)) * 0.84;
        const wave =
          Math.sin(x * 8.3 + z * 7.1 + time * 0.28) * 0.075 +
          Math.cos(x * 15.2 - z * 4.5 - time * 0.18) * 0.025;
        const px = center + x * width * 0.82 * perspective;
        const py = baseY - (ridgeA + ridgeB + ridgeC + wave) * height * 0.63 * perspective;
        points.push([px, py]);
        const emphasis = Math.max(0, Math.sin(col * 0.18 + row * 0.24 - time * 1.05)) ** 16;
        const color =
          col < cols * 0.4 ? fieldColors[0] : col < cols * 0.72 ? fieldColors[1] : fieldColors[2];
        ctx.fillStyle = `rgba(${color},${(0.16 + depth * 0.12 + emphasis * 0.44) * perspective})`;
        ctx.beginPath();
        ctx.arc(px, py, (0.69 + depth * 0.15 + emphasis * 0.75) * perspective, 0, Math.PI * 2);
        ctx.fill();
      }
      grid[row] = points;
      if (row % 2 === 0) {
        ctx.strokeStyle = `rgba(${fieldColors[0]},${0.065 + depth * 0.065})`;
        ctx.lineWidth = 0.65;
        ctx.beginPath();
        points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.stroke();
      }
    }
    // Fine cross-contours expose the surface depth. Brighter packets move
    // along a few contour lines rather than filling the screen with noise.
    for (let col = 3; col < cols; col += mobile ? 6 : 5) {
      ctx.strokeStyle = `rgba(${fieldColors[0]},.067)`;
      ctx.lineWidth = 0.55;
      ctx.beginPath();
      for (let row = rows - 1; row >= 0; row--) {
        const p = grid[row][col];
        row === rows - 1 ? ctx.moveTo(...p) : ctx.lineTo(...p);
      }
      ctx.stroke();
    }
    const streams = mobile ? 4 : 6;
    for (let flow = 0; flow < streams; flow++) {
      const row = Math.round(rows * (0.16 + (flow / streams) * 0.63));
      const progress = (time * 0.048 + flow * 0.167) % 1;
      const head = progress * (cols - 1),
        index = Math.floor(head),
        fraction = head - index;
      const points = grid[row],
        a = points[index],
        b = points[index + 1];
      const px = a[0] + (b[0] - a[0]) * fraction,
        py = a[1] + (b[1] - a[1]) * fraction;
      const color = fieldColors[flow % 3];
      for (let tail = 0; tail < 7 && index - tail > 0; tail++) {
        ctx.strokeStyle = `rgba(${color},${0.47 * (1 - tail / 7)})`;
        ctx.lineWidth = 1.15;
        ctx.beginPath();
        ctx.moveTo(...points[index - tail]);
        ctx.lineTo(...points[index - tail - 1]);
        ctx.stroke();
      }
      ctx.fillStyle = `rgba(${color},.12)`;
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(${color},.75)`;
      ctx.beginPath();
      ctx.arc(px, py, 2.1, 0, Math.PI * 2);
      ctx.fill();
    }
    field.dataset.renderer = "perspective-canvas";
    field.dataset.frame = String(Number(field.dataset.frame || 0) + 1);
    field.dataset.palette = fieldColors.join("|");
  }
  // Canvas fallback keeps the same idealized ribbon art and conceptual scenes.
  const fallbackScenes = [];
  function drawHeroFallback(f, time, w, h) {
    const c = f.ctx,
      pulse = heroPulseState(time),
      compact = w / h < 0.84,
      universe = window.WX_HERO_UNIVERSE;
    if (!paused && !heroState.drag)
      heroState.baseYaw += Math.min(0.05, Math.max(0, time - (f.heroTime ?? time))) * 0.072;
    f.heroTime = time;
    if (universe?.drawFallback) {
      c.save();
      universe.drawFallback(c, time, w, h, { ...heroFallbackOptions(w, h), pulseAge: pulse.age });
      c.restore();
    }
    const ratio =
      Math.min(w / 10.5, h / 12.8) * heroState.zoom * (universe ? (compact ? 0.72 : 0.78) : 1);
    const orientation = qMultiply(
      qMultiply(heroOrientations.scene, heroOrientations.helix),
      qEuler(0.13, heroState.baseYaw, -0.29),
    );
    const transform = (point) => qPoint(point, orientation);
    const project = (point) => {
      const p = transform(point);
      return { x: w / 2 + p.x * ratio, y: h / 2 - p.y * ratio, z: p.z };
    };
    const frame = (t, phase) => {
      const a = (t - 0.5) * Math.PI * 3.4 + phase,
        sa = Math.sin(a),
        ca = Math.cos(a),
        speed = 1.7 * Math.PI * 3.4,
        length = Math.hypot(speed, 9.3),
        end = Math.min(1, t / 0.032, (1 - t) / 0.032);
      return {
        p: { x: ca * 1.7, y: (t - 0.5) * 9.3, z: sa * 1.7 },
        r: { x: ca, y: 0, z: sa },
        b: { x: (sa * 9.3) / length, y: speed / length, z: (-ca * 9.3) / length },
        taper: Math.sqrt(Math.max(0.000015, 1 - (1 - end) * (1 - end))),
      };
    };
    const surface = (t, phase, theta) => {
      const q = frame(t, phase),
        u = Math.cos(theta),
        radial = (Math.sin(theta) * 0.105 + 0.055 * (1 - u * u)) * q.taper;
      return {
        x: q.p.x + q.b.x * u * 0.57 * q.taper + q.r.x * radial,
        y: q.p.y + q.b.y * u * 0.57 * q.taper,
        z: q.p.z + q.b.z * u * 0.57 * q.taper + q.r.z * radial,
      };
    };
    const stroke = (points, color, width, opacity = 1) => {
      c.strokeStyle = color;
      c.lineWidth = width;
      c.globalAlpha = opacity;
      c.lineCap = "round";
      c.lineJoin = "round";
      c.beginPath();
      points.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
      c.stroke();
      c.globalAlpha = 1;
    };
    const orbit = (t, i) => {
      const a = t * Math.PI * 2;
      return i
        ? { x: Math.cos(a) * 2.8, y: Math.sin(a) * 3.9, z: Math.sin(a) * 1.8 - 0.8 }
        : { x: Math.cos(a) * 3.65, y: Math.sin(a) * 1.13, z: Math.sin(a) * 2.75 };
    };
    [0, 1].forEach((i) =>
      stroke(
        Array.from({ length: 161 }, (_, j) => project(orbit(j / 160, i))),
        i
          ? window.WX_VISUAL_PALETTE?.css("#aaaaca") || "#aaaaca"
          : window.WX_VISUAL_PALETTE?.css("#6daab3") || "#6daab3",
        0.7,
        i ? 0.2 : 0.32,
      ),
    );
    const palettes = [
      [
        window.WX_VISUAL_PALETTE?.css("#176881") || "#176881",
        window.WX_VISUAL_PALETTE?.css("#52bbaa") || "#52bbaa",
        window.WX_VISUAL_PALETTE?.css("#4c94bd") || "#4c94bd",
        window.WX_VISUAL_PALETTE?.css("#b4e1d3") || "#b4e1d3",
        window.WX_VISUAL_PALETTE?.css("#388e9f") || "#388e9f",
      ],
      [
        window.WX_VISUAL_PALETTE?.css("#6b79b0") || "#6b79b0",
        window.WX_VISUAL_PALETTE?.css("#a67aba") || "#a67aba",
        window.WX_VISUAL_PALETTE?.css("#b6b7db") || "#b6b7db",
        window.WX_VISUAL_PALETTE?.css("#daa0bc") || "#daa0bc",
        window.WX_VISUAL_PALETTE?.css("#7b8bc3") || "#7b8bc3",
      ],
    ].map((chain) => chain.map((hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))));
    const mixColor = (ci, t, light, shimmer) => {
      const ct = t * 4,
        i = Math.min(3, Math.floor(ct)),
        a = palettes[ci][i],
        b = palettes[ci][i + 1],
        blend = ct - i;
      return (
        "rgb(" +
        a
          .map((x, j) =>
            Math.round(
              Math.max(
                0,
                Math.min(
                  255,
                  (x + (b[j] - x) * blend) * light + (255 - (x + (b[j] - x) * blend)) * shimmer,
                ),
              ),
            ),
          )
          .join(",") +
        ")"
      );
    };
    const polygons = [],
      segments = 152,
      around = 16;
    for (let ci = 0; ci < 2; ci++) {
      const rows = Array.from({ length: segments + 1 }, (_, i) =>
        Array.from({ length: around + 1 }, (_, j) =>
          project(surface(i / segments, ci * Math.PI, (j / around) * Math.PI * 2)),
        ),
      );
      for (let i = 0; i < segments; i++)
        for (let j = 0; j < around; j++) {
          const t = (i + 0.5) / segments,
            theta = ((j + 0.5) / around) * Math.PI * 2,
            f0 = frame(t, ci * Math.PI);
          const normal = transform({
            x: f0.b.x * Math.cos(theta) * 0.105 + f0.r.x * Math.sin(theta) * 0.57,
            y: f0.b.y * Math.cos(theta) * 0.105,
            z: f0.b.z * Math.cos(theta) * 0.105 + f0.r.z * Math.sin(theta) * 0.57,
          });
          if (normal.z <= -0.01) continue;
          const nLength = Math.hypot(normal.x, normal.y, normal.z),
            light =
              0.63 +
              0.37 * Math.max(0, (-normal.x * 0.4 + normal.y * 0.6 + normal.z * 0.8) / nLength);
          const flowD = Math.abs(((t - time * 0.045 + ci * 0.31 + 100.5) % 1) - 0.5),
            flow = Math.exp(-Math.pow(flowD / 0.043, 2)) * 0.19;
          const wave =
            Math.exp(-Math.pow((Math.abs(t - pulse.origin) - pulse.age * 0.34) / 0.055, 2)) *
            Math.exp(-pulse.age * 0.65) *
            0.34;
          const specular = Math.pow(Math.max(0, normal.z / nLength), 14) * 0.22;
          const q = [rows[i][j], rows[i + 1][j], rows[i + 1][j + 1], rows[i][j + 1]];
          polygons.push({
            q,
            color: mixColor(ci, t, light, specular + flow + wave),
            z: q.reduce((n, p) => n + p.z, 0) / 4,
          });
        }
      // Draw the selvedges and fine fibers with the same depth order as the body.
      [0, Math.PI, 0.99, 1.84, 2.2].forEach((theta, index) => {
        for (let i = 0; i < segments; i++) {
          const a = project(surface((i + 0.2) / segments, ci * Math.PI, theta)),
            b = project(surface((i + 1.2) / segments, ci * Math.PI, theta));
          polygons.push({
            line: [a, b],
            z: (a.z + b.z) / 2 + 0.01,
            color: ci
              ? window.WX_VISUAL_PALETTE?.css("#dfd9ef") || "#dfd9ef"
              : window.WX_VISUAL_PALETTE?.css("#c0ece2") || "#c0ece2",
            width: index < 2 ? 0.85 : 0.55,
            opacity: index < 2 ? 0.82 : 0.55,
          });
        }
      });
      for (let i = 0; i < 2; i++) {
        const q = (time * 0.039 + i * 0.5 + ci * 0.17) % 1,
          points = Array.from({ length: 14 }, (_, j) =>
            project(surface(Math.max(0, q - j * 0.0035), ci * Math.PI, i ? Math.PI : 0)),
          );
        polygons.push({
          line: points,
          z: points[0].z + 0.04,
          color: ci
            ? window.WX_VISUAL_PALETTE?.css("#e8defb") || "#e8defb"
            : window.WX_VISUAL_PALETTE?.css("#d7fff0") || "#d7fff0",
          width: 1.6,
          opacity: 0.9,
        });
      }
    }
    if (focusState.basePairs)
      for (let i = 0; i < 20; i++) {
        const t = 0.04 + (i / 19) * 0.92,
          a = project(frame(t, 0).p),
          b = project(frame(t, Math.PI).p);
        polygons.push({
          line: [a, b],
          z: (a.z + b.z) / 2,
          color: window.WX_VISUAL_PALETTE?.css("#9cbfca") || "#9cbfca",
          width: Math.max(1.1, ratio * 0.055),
          opacity: 0.5,
        });
      }
    polygons
      .sort((a, b) => a.z - b.z)
      .forEach((item) => {
        if (item.line) {
          stroke(item.line, item.color, item.width, item.opacity);
          return;
        }
        c.fillStyle = item.color;
        c.strokeStyle = item.color;
        c.lineWidth = 0.65;
        c.beginPath();
        item.q.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
        c.closePath();
        c.fill();
        c.stroke();
      });
    for (let i = 0; i < 12; i++) {
      const p = project(orbit((i / 12 + time * 0.018) % 1, i % 2));
      c.fillStyle =
        i % 2
          ? window.WX_VISUAL_PALETTE?.css("#bab4dc") || "#bab4dc"
          : window.WX_VISUAL_PALETTE?.css("#99c4c5") || "#99c4c5";
      c.globalAlpha = 0.6;
      c.beginPath();
      c.arc(p.x, p.y, i < 4 ? 1.5 : 0.7, 0, Math.PI * 2);
      c.fill();
    }
    c.globalAlpha = 1;
    f.canvas.dataset.representation = "silk-helix";
    f.canvas.dataset.heroVersion = "10";
    f.canvas.dataset.material = "lightwoven-pearl";
    f.canvas.dataset.heroElements = universe ? "helix ai microbes data" : "helix";
    f.canvas.dataset.selectedTopic = heroTopic;
    f.canvas.dataset.zoom = heroState.zoom.toFixed(2);
    f.canvas.dataset.drawnZoom = heroState.zoom.toFixed(3);
    f.canvas.dataset.pulseCount = String(heroLight.count);
    f.canvas.dataset.pulseProgress = Math.min(1, pulse.age / 3.3).toFixed(3);
    f.canvas.dataset.pulseState = pulse.frozen ? "still" : pulse.active ? "flowing" : "rest";
    heroState.drawnZoom = heroState.zoom;
  }

  function fallback(id, type) {
    let canvas = $(id);
    if (!canvas || canvas.dataset.renderer === "webgl") return;
    let ctx;
    try {
      ctx = canvas.getContext("2d");
    } catch {}
    if (!ctx) {
      const replacement = canvas.cloneNode(false);
      canvas.replaceWith(replacement);
      canvas = replacement;
      ctx = canvas.getContext("2d");
    }
    if (!ctx) return;
    canvas.dataset.renderer = "canvas-fallback";
    const input =
      type === "hero"
        ? null
        : window.WX_RESEARCH_INPUTS?.attach(canvas, type === "ai" ? "llm" : type, {
            onChange: wake,
          });
    fallbackScenes.push({ canvas, ctx, type, input });
    if (type === "hero") {
      attachHeroInteraction(
        canvas,
        (clientX, clientY) => {
          const rect = canvas.getBoundingClientRect();
          return hitFallbackHero(clientX - rect.left, clientY - rect.top, rect.width, rect.height);
        },
        (result, source) =>
          pulseHero({ ai: 0.2, microbes: 0.55, data: 0.85 }[result?.topic] ?? 0.5, source),
      );
    }
  }
  function drawResearchFallback(f, time, w, h) {
    const c = f.ctx,
      key =
        f.type === "ai"
          ? focusState.llmStep
          : f.type === "causal"
            ? focusState.causalFocus
            : focusState.omicsLayer;
    if (f.lastPhase !== key) {
      f.canvas.dataset.previousScene = f.lastPhase || key;
      f.lastPhase = key;
      f.phaseTime = time;
    }
    f.canvas.dataset.scene = key;
    f.canvas.dataset.renderedScene = key;
    f.canvas.dataset.visibleScenes = key;
    f.canvas.dataset.sceneVersion = "6";
    f.canvas.dataset.transitionProgress = "1.000";
    c.save();
    if (f.input) {
      const a = f.input.project(1, 0),
        b = f.input.project(0, 1),
        z = f.input.state.zoom;
      c.translate(w / 2, h / 2);
      c.transform(a[0] * z, -a[1] * z, -b[0] * z, b[1] * z, 0, 0);
      c.translate(-w / 2, -h / 2);
    }
    const scale = Math.min(w / 590, h / 340);
    c.translate((w - 590 * scale) / 2, (h - 340 * scale) / 2);
    c.scale(scale, scale);
    const colors = [
        window.WX_VISUAL_PALETTE?.css("#58aaa7") || "#58aaa7",
        window.WX_VISUAL_PALETTE?.css("#7e8eca") || "#7e8eca",
        window.WX_VISUAL_PALETTE?.css("#a18bc9") || "#a18bc9",
      ],
      points = (fn, n = 100) => Array.from({ length: n + 1 }, (_, i) => fn(i / n));
    const path = (list, color, width = 1, alpha = 1) => {
      c.save();
      c.globalAlpha = alpha;
      c.strokeStyle = color;
      c.lineWidth = width;
      c.lineCap = "round";
      c.lineJoin = "round";
      c.beginPath();
      list.forEach((p, i) => (i ? c.lineTo(...p) : c.moveTo(...p)));
      c.stroke();
      c.restore();
    };
    const dot = (x, y, r, color) => {
      c.fillStyle = color;
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
    };
    const txt = (
      text,
      x,
      y,
      size = 15,
      color = window.WX_VISUAL_PALETTE?.css("#557483") || "#557483",
    ) => {
      c.fillStyle = color;
      c.font = size + 'px "Times New Roman","Microsoft YaHei",serif';
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText(text, x, y);
    };
    const card = (x, y, width, height, text, color) => {
      const gradient = c.createLinearGradient(x, y - height / 2, x, y + height / 2);
      gradient.addColorStop(0, window.WX_VISUAL_PALETTE?.css("#f5fbfc") || "#f5fbfc");
      gradient.addColorStop(1, color);
      c.fillStyle = gradient;
      c.strokeStyle = color;
      c.lineWidth = 1;
      c.beginPath();
      c.roundRect(x - width / 2, y - height / 2, width, height, 7);
      c.fill();
      c.stroke();
      txt(text, x, y, 15);
    };
    const orbit = (x, y, rx, ry, color, alpha = 0.35) => {
      c.save();
      c.globalAlpha = alpha;
      c.strokeStyle = color;
      c.lineWidth = 1;
      c.beginPath();
      c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
      c.stroke();
      c.restore();
    };
    const flow = (fn, color, n = 3, speed = 0.13) => {
      path(points(fn), color, 1, 0.33);
      for (let i = 0; i < n; i++) {
        const p = (time * speed + i / n) % 1,
          q = fn(p);
        dot(q[0], q[1], 1.5 + Math.sin(p * Math.PI) * 1.8, color);
      }
    };
    if (f.type === "ai") {
      f.canvas.dataset.llmStep = key;
      f.canvas.dataset.tokenFocus = String(focusState.tokenFocus);
      f.canvas.dataset.inputTokens = (english() ? LLM_INPUT.en : LLM_INPUT.zh).join("|");
      f.canvas.dataset.representation = "transformer-transformations";
      const input = english() ? LLM_INPUT.en : LLM_INPUT.zh,
        output = english() ? LLM_OUTPUT.en : LLM_OUTPUT.zh;
      if (key === "tokens") {
        orbit(295, 165, 195, 58, window.WX_VISUAL_PALETTE?.css("#98a9cb") || "#98a9cb", 0.35);
        input.forEach((word, i) => {
          const x = 110 + i * 92,
            y = 115 - Math.sin((i / 4) * Math.PI) * 42;
          card(
            x,
            y,
            78,
            34,
            word,
            i % 2
              ? window.WX_VISUAL_PALETTE?.css("#c0bcdf") || "#c0bcdf"
              : window.WX_VISUAL_PALETTE?.css("#acd7d0") || "#acd7d0",
          );
          const endX = 180 + i * 57;
          flow(
            (t) => [x + (endX - x) * t, y + 22 + (210 - y - 22) * t + Math.sin(t * Math.PI) * 12],
            colors[i % 3],
            2,
            0.12,
          );
          for (let j = 0; j < 7; j++) {
            const height = 10 + seed(i * 20 + j) * 34;
            c.fillStyle = colors[i % 3];
            c.globalAlpha = 0.8;
            c.fillRect(endX + (j - 3) * 6, 235 - height, 4, height);
            c.globalAlpha = 1;
          }
          if (i === focusState.tokenFocus)
            orbit(x, y, 44, 24, window.WX_VISUAL_PALETTE?.css("#659ba7") || "#659ba7", 0.65);
        });
        txt(tr("词元 → 向量", "Tokens → embeddings"), 295, 280, 17);
      } else if (key === "attention") {
        orbit(320, 166, 120, 117, window.WX_VISUAL_PALETTE?.css("#b5a8ce") || "#b5a8ce", 0.3);
        for (let layer = 2; layer >= 0; layer--) {
          const x = 220 + layer * 20,
            y = 95 - layer * 13;
          c.fillStyle = "rgba(184,199,227,.18)";
          c.strokeStyle = "rgba(147,153,195,.36)";
          c.beginPath();
          c.roundRect(x - 12, y - 12, 165, 165, 12);
          c.fill();
          c.stroke();
          for (let row = 0; row < 5; row++)
            for (let col = 0; col < 5; col++) {
              c.globalAlpha = col > row ? 0.08 : row === focusState.tokenFocus ? 0.85 : 0.45;
              c.fillStyle = colors[layer];
              c.beginPath();
              c.roundRect(x + col * 29, y + row * 29, 24, 24, 4);
              c.fill();
              c.globalAlpha = 1;
            }
        }
        input.forEach((word, i) => {
          txt(word, 109, 98 + i * 34, 12);
          dot(141, 98 + i * 34, 5, colors[i % 3]);
          flow(
            (t) => [145 + t * 175, 98 + i * 34 + Math.sin(t * Math.PI) * 12],
            colors[i % 3],
            2,
            0.14,
          );
        });
        txt(tr("多头注意力 · 因果掩码", "Multi-head attention · causal mask"), 300, 285, 17);
      } else {
        const fn = (t) => [68 + t * 454, 218 - Math.sin(t * Math.PI) * 26];
        const gradient = c.createLinearGradient(65, 0, 525, 0);
        gradient.addColorStop(0, window.WX_VISUAL_PALETTE?.css("#81c4bd") || "#81c4bd");
        gradient.addColorStop(1, window.WX_VISUAL_PALETTE?.css("#b3a4d7") || "#b3a4d7");
        path(points(fn), gradient, 20, 0.85);
        flow(fn, window.WX_VISUAL_PALETTE?.css("#9a8cc9") || "#9a8cc9", 5, 0.1);
        const count =
          paused || reduced.matches ? 5 : Math.min(5, 1 + Math.floor((time - f.phaseTime) / 0.58));
        output.forEach((word, i) => {
          const x = 112 + i * 91,
            y = 150 - Math.sin((i / 4) * Math.PI) * 26;
          path(
            [
              [x, y + 22],
              [x, 205],
            ],
            window.WX_VISUAL_PALETTE?.css("#9dacc6") || "#9dacc6",
            1,
            0.4,
          );
          if (i < count)
            card(
              x,
              y,
              78,
              38,
              word,
              [
                window.WX_VISUAL_PALETTE?.css("#acd7d0") || "#acd7d0",
                window.WX_VISUAL_PALETTE?.css("#b0cedc") || "#b0cedc",
                window.WX_VISUAL_PALETTE?.css("#b9c6e4") || "#b9c6e4",
                window.WX_VISUAL_PALETTE?.css("#c4bade") || "#c4bade",
                window.WX_VISUAL_PALETTE?.css("#ccb5d9") || "#ccb5d9",
              ][i],
            );
        });
        const cursorX = 112 + (count - 1) * 91 + 43;
        path(
          [
            [cursorX, 130],
            [cursorX, 160],
          ],
          window.WX_VISUAL_PALETTE?.css("#9b89c4") || "#9b89c4",
          2,
          0.8,
        );
        txt(tr("逐词生成 · 一个新的表达", "Token by token · a new expression"), 295, 280, 17);
      }
    } else if (f.type === "causal") {
      f.canvas.dataset.causalFocus = key;
      f.canvas.dataset.representation = "causal-story";
      if (key === "instrument") {
        const gene = (phase) => (t) => [
          115 + t * 360,
          115 + Math.sin(t * Math.PI * 4 + phase) * 32,
        ];
        for (let i = 0; i < 24; i++) {
          const t = i / 23;
          path(
            [gene(0)(t), gene(Math.PI)(t)],
            window.WX_VISUAL_PALETTE?.css("#91b5c4") || "#91b5c4",
            1.5,
            0.65,
          );
        }
        [0, Math.PI].forEach((phase, i) =>
          path(points(gene(phase), 180), colors[i ? 2 : 0], 7, 0.86),
        );
        [3, 11, 19].forEach((index, i) => {
          const p = gene(0)(index / 23);
          orbit(...p, 18, 18, colors[i], 0.8);
          txt("Z" + ["₁", "₂", "₃"][i], p[0], 60, 13);
        });
        txt(tr("遗传变异 · 工具变量", "Genetic variants · instruments"), 295, 185, 16);
      } else if (key === "exposure") {
        for (let i = 0; i < 5; i++) {
          const fn = (t) => {
            const x = (t - 0.5) * 6;
            return [130 + t * 340, 180 - Math.exp((-x * x) / 1.55) * 108 - i * 3];
          };
          path(points(fn), colors[i % 3], 3, 0.65);
          if (i === 0 || i === 4) flow(fn, colors[i % 3], 3, 0.11);
        }
        path(
          [
            [115, 185],
            [485, 185],
          ],
          window.WX_VISUAL_PALETTE?.css("#a2b5c5") || "#a2b5c5",
          1,
          0.5,
        );
        txt(tr("暴露特征的分布", "A distribution of exposure"), 295, 207, 16);
      } else {
        c.setLineDash([4, 4]);
        path(
          [
            [235, 52],
            [235, 190],
          ],
          window.WX_VISUAL_PALETTE?.css("#abbccc") || "#abbccc",
          1,
          0.65,
        );
        c.setLineDash([]);
        for (let i = 0; i < 5; i++) {
          const y = 67 + i * 26,
            x = 215 + Math.sin(i * 1.6) * 34,
            half = 25 + seed(i + 72) * 40;
          path(
            [
              [x - half, y],
              [x + half, y],
            ],
            colors[i % 2],
            2,
            0.9,
          );
          c.fillStyle = colors[i % 2];
          c.save();
          c.translate(x, y);
          c.rotate(Math.PI / 4);
          c.fillRect(-4, -4, 8, 8);
          c.restore();
        }
        orbit(422, 119, 56, 52, window.WX_VISUAL_PALETTE?.css("#ab9acb") || "#ab9acb", 0.45);
        dot(422, 119, 24, window.WX_VISUAL_PALETTE?.css("#b5a2cf") || "#b5a2cf");
        for (let i = 0; i < 7; i++) {
          const a = (i / 7) * Math.PI * 2,
            p = [422 + Math.cos(a) * 69, 119 + Math.sin(a) * 69];
          path([[422, 119], p], window.WX_VISUAL_PALETTE?.css("#a6b3cd") || "#a6b3cd", 1, 0.3);
          dot(...p, 3, colors[i % 3]);
        }
        txt(tr("结局与效应 · 概念示意", "Outcome & effect · schematic"), 295, 212, 16);
      }
      const nodes = [
          [155, 272],
          [295, 272],
          [435, 272],
          [365, 238],
        ],
        selected = ["instrument", "exposure", "outcome"].indexOf(key);
      [
        [0, 1],
        [1, 2],
        [3, 1],
        [3, 2],
      ].forEach(([a, b], i) => {
        if (i > 1) c.setLineDash([4, 4]);
        path(
          [nodes[a], nodes[b]],
          window.WX_VISUAL_PALETTE?.css("#a8bdcb") || "#a8bdcb",
          1,
          i > 1 ? 0.3 : 0.7,
        );
        c.setLineDash([]);
        if (i < 2) {
          const x = nodes[b][0] - 10,
            y = nodes[b][1];
          path(
            [
              [x - 5, y - 3],
              [x, y],
              [x - 5, y + 3],
            ],
            window.WX_VISUAL_PALETTE?.css("#81a5b7") || "#81a5b7",
            1,
            0.8,
          );
        }
      });
      nodes.forEach(([x, y], i) => {
        dot(
          x,
          y,
          i === selected ? 7 : 4,
          i === 3 ? window.WX_VISUAL_PALETTE?.css("#aab9c6") || "#aab9c6" : colors[i],
        );
        if (i < 3)
          txt(
            tr(["遗传工具", "暴露", "结局"][i], ["Instrument", "Exposure", "Outcome"][i]),
            x,
            y + 21,
            12,
          );
        else txt(tr("混杂", "Confounder"), x, y - 12, 11);
      });
    } else {
      f.canvas.dataset.omicsLayer = key;
      f.canvas.dataset.representation = "omics-transformations";
      if (key === "all") {
        for (let i = 0; i < 3; i++) {
          const y = 98 + i * 66;
          orbit(285, y, 120, 32, colors[i], 0.7);
          orbit(285, y, 106, 27, colors[i], 0.25);
          for (let j = 0; j < 7; j++) {
            const a = (j / 7) * Math.PI * 2 + time * 0.06;
            dot(285 + Math.cos(a) * 120, y + Math.sin(a) * 32, 3, colors[i]);
          }
          txt(
            tr(["基因组", "转录组", "蛋白组"][i], ["Genome", "Transcriptome", "Proteome"][i]),
            464,
            y,
            14,
          );
        }
        for (let i = 0; i < 5; i++) {
          const x = 215 + i * 37;
          flow((t) => [x + Math.sin(t * Math.PI * 2) * 24, 98 + t * 132], colors[i % 3], 2, 0.1);
        }
      } else if (key === "genome") {
        const dna = (phase) => (t) => [
          280 + Math.sin(t * Math.PI * 4 + phase) * 48 + (t - 0.5) * 53,
          62 + t * 216,
        ];
        for (let i = 0; i < 22; i++) {
          const t = i / 21;
          path(
            [dna(0)(t), dna(Math.PI)(t)],
            window.WX_VISUAL_PALETTE?.css("#92b9c7") || "#92b9c7",
            1.5,
            0.65,
          );
        }
        [0, Math.PI].forEach((phase, i) =>
          path(points(dna(phase), 180), colors[i ? 2 : 0], 8, 0.9),
        );
        ["A", "T", "C", "G", "A", "C"].forEach((base, i) =>
          card(
            390 + (i % 2) * 31,
            95 + Math.floor(i / 2) * 34,
            24,
            25,
            base,
            window.WX_VISUAL_PALETTE?.css("#c5d7e3") || "#c5d7e3",
          ),
        );
        txt(tr("序列 · 遗传信息", "Sequence · genetic information"), 295, 307, 16);
      } else if (key === "transcriptome") {
        dot(158, 160, 21, window.WX_VISUAL_PALETTE?.css("#a1bed8") || "#a1bed8");
        orbit(158, 160, 36, 36, window.WX_VISUAL_PALETTE?.css("#9bbed1") || "#9bbed1", 0.5);
        txt("RNA", 158, 217, 16);
        for (let i = 0; i < 5; i++) {
          const fn = (t) => [
            180 + t * (245 + (i % 2) * 28),
            160 + (i - 2) * 43 * t + Math.sin(t * Math.PI) * 17,
          ];
          path(points(fn), colors[i % 2], 6, 0.72);
          flow(fn, colors[i % 2], 2, 0.13);
          for (let j = 0; j < 9; j++) {
            const p = fn(0.22 + j * 0.082);
            path([p, [p[0], p[1] - 11]], colors[(i + j) % 3], 4, 0.85);
          }
        }
        txt(tr("转录 · 表达的多种可能", "Transcripts · patterns of expression"), 295, 293, 16);
      } else {
        orbit(295, 157, 134, 112, window.WX_VISUAL_PALETTE?.css("#b5aacd") || "#b5aacd", 0.25);
        const fn = (t) => {
          const a = t * Math.PI * 2;
          return [
            295 + Math.sin(a) * 97 + Math.cos(a * 5) * 22,
            165 + Math.cos(a * 2) * 60 + Math.sin(a * 5) * 13,
          ];
        };
        const gradient = c.createLinearGradient(180, 70, 410, 250);
        gradient.addColorStop(0, window.WX_VISUAL_PALETTE?.css("#64b4b5") || "#64b4b5");
        gradient.addColorStop(1, window.WX_VISUAL_PALETTE?.css("#ac94d2") || "#ac94d2");
        path(points(fn, 240), gradient, 16, 0.9);
        path(points(fn, 240), window.WX_VISUAL_PALETTE?.css("#dce8ee") || "#dce8ee", 1.3, 0.7);
        flow(fn, window.WX_VISUAL_PALETTE?.css("#9685c8") || "#9685c8", 5, 0.025);
        txt(tr("折叠 · 结构与功能", "Folding · structure and function"), 295, 302, 16);
      }
    }
    c.restore();
  }

  function renderFallback(f, time) {
    if (Number(f.canvas.dataset.frame || 0) > 0 && !visible(f.canvas)) return;
    const w = f.canvas.clientWidth,
      h = f.canvas.clientHeight,
      d = Math.min(devicePixelRatio || 1, 1.5);
    if (!w || !h) return;
    if (f.canvas.width !== Math.round(w * d) || f.canvas.height !== Math.round(h * d)) {
      f.canvas.width = Math.round(w * d);
      f.canvas.height = Math.round(h * d);
    }
    const c = f.ctx;
    c.setTransform(d, 0, 0, d, 0, 0);
    c.clearRect(0, 0, w, h);
    if (f.type === "hero") {
      drawHeroFallback(f, time, w, h);
    } else {
      drawResearchFallback(f, time, w, h);
    }
    f.canvas.dataset.frame = String(Number(f.canvas.dataset.frame || 0) + 1);
  }
  function rotate(yaw = 0.22, pitch = 0, topic = heroTopic) {
    rotateHeroTarget(topic, yaw, pitch);
  }
  function reset() {
    $("hero-canvas")?.dispatchEvent(new CustomEvent("hero-reset-input"));
    HERO_TOPICS.forEach((topic) => {
      heroOrientations[topic] = [0, 0, 0, 1];
      heroInputAngles[topic] = { x: 0, y: 0 };
    });
    heroInteraction.revision++;
    heroState.yaw = 0;
    heroState.pitch = 0;
    heroState.baseYaw = 0;
    setZoom(1);
    selectHeroTopic("scene", "reset");
    wake();
  }
  function setZoom(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return;
    heroState.zoom = Math.max(0.75, Math.min(1.65, n));
    if ($("hero-canvas")) $("hero-canvas").dataset.zoom = heroState.zoom.toFixed(2);
    window.dispatchEvent(new CustomEvent("zoomchange", { detail: { zoom: heroState.zoom } }));
    wake();
  }
  function animate(now) {
    requestAnimationFrame(animate);
    if (document.hidden) {
      last = now;
      return;
    }
    if (["boot", "open"].includes(document.documentElement.dataset.intro) && !dirty) {
      last = now;
      return;
    }
    const wallDelta = Math.max(0, (now - (last || now)) / 1000),
      delta = Math.min(0.05, wallDelta);
    if (now - last < 1000 / 60 - 0.5 && !dirty) return;
    last = now;
    if (!paused) clock += delta;
    if (paused && !dirty && now > transitionUntil) return;
    for (const s of scenes)
      if (!s.dead && (s.frame === 0 || s.width === 0 || visible(s.canvas)) && fit(s)) {
        s.tick(clock, delta || 1 / 60, wallDelta || 1 / 60);
        if (s.input) {
          s.orbitRoot.quaternion.fromArray(s.input.state.quaternion);
          if (s.camera.zoom !== s.input.state.zoom) {
            s.camera.zoom = s.input.state.zoom;
            s.camera.updateProjectionMatrix();
          }
        }
        s.renderer.render(s.scene, s.camera);
        s.canvas.dataset.frame = String(++s.frame);
      }
    renderField(clock);
    fallbackScenes.forEach((f) => renderFallback(f, clock));
    dirty = false;
  }
  if (T) {
    hero = molecularHero();
    causalScene();
    omicsScene();
    aiScene();
  }
  [
    ["hero-canvas", "hero"],
    ["causal-canvas", "causal"],
    ["omics-canvas", "omics"],
    ["ai-canvas", "ai"],
  ].forEach(([id, type]) => fallback(id, type));
  function applyTheme() {
    for (const scene of scenes) scene.palette = window.WX_VISUAL_PALETTE?.recolor(scene.root, T);
    semanticLabels.forEach((fn) => fn());
    wake();
  }
  addEventListener("wxthemechange", applyTheme);
  applyTheme();
  const refresh = () => {
    semanticLabels.forEach((fn) => fn());
    llmState?.update();
    styleMotion();
    dirty = true;
  };
  window.addEventListener("languagechange", refresh);
  window.addEventListener("resize", () => {
    dirty = true;
  });
  window.addEventListener(
    "scroll",
    () => {
      if (paused) dirty = true;
    },
    { passive: true },
  );
  document.addEventListener("visibilitychange", () => {
    last = 0;
    dirty = true;
  });
  reduced.addEventListener("change", (e) => {
    paused = e.matches;
    dirty = true;
    styleMotion();
  });
  $("motion-toggle")?.addEventListener("click", () => {
    paused = !paused;
    styleMotion();
    dirty = true;
  });
  window.WX_SCENES = {
    setTheme: applyTheme,
    paletteInfo: () => Object.fromEntries(scenes.map((s) => [s.id, s.palette])),
    researchViews: () => window.WX_RESEARCH_INPUTS?.info(),
    setMotion,
    rotate,
    reset,
    setZoom,
    getZoom: () => heroState.zoom,
    getHeroOrientation: (topic) => (heroOrientations[topic] || heroOrientations.scene).slice(),
    pulseHero: () => pulseHero(0.5, "api"),
    selectHeroTopic: (topic) => {
      selectHeroTopic(topic, "api");
      pulseHero(0.5, "api");
    },
    setBasePairs(value) {
      focusState.basePairs = Boolean(value);
      if (hero) hero.pairs.visible = focusState.basePairs;
      dirty = true;
    },
    setHydrogenBonds(value) {
      this.setBasePairs(value);
    },
    setLLMStep(value) {
      if (!["tokens", "attention", "generation"].includes(value)) return;
      focusState.llmStep = value;
      llmState?.update();
      dirty = true;
    },
    setTokenFocus(value) {
      focusState.tokenFocus = Math.max(0, Math.min(4, Math.trunc(Number(value) || 0)));
      llmState?.update();
      dirty = true;
    },
    setCausalFocus(value) {
      if (!["instrument", "exposure", "outcome"].includes(value)) return;
      focusState.causalFocus = value;
      causalState?.update();
      dirty = true;
    },
    setOmicsLayer(value) {
      if (!["all", "genome", "transcriptome", "proteome"].includes(value)) return;
      focusState.omicsLayer = value;
      omicsState?.update();
      dirty = true;
    },
    getMotion: () => (paused ? "paused" : "running"),
    info: () => ({
      structure: "idealized",
      representation: "silk-helix",
      heroVersion: 10,
      heroStyle: "biomed-ai-universe",
      heroTopic,
      heroSelectionCount,
      heroOrientations: orientationSnapshot(),
      heroInteraction: {
        ...heroInteraction,
        selected: heroTopic,
        angles: JSON.parse(JSON.stringify(heroInputAngles)),
      },
      heroTargets: hero?.heroTargets?.() || fallbackHeroTargets(),
      heroPulse: {
        count: heroLight.count,
        source: heroLight.source,
        origin: heroLight.origin,
        age: Math.max(0, clock - heroLight.started),
      },
      zoom: heroState.zoom,
      drawnZoom: heroState.drawnZoom,
      ...focusState,
      inputTokens: english() ? LLM_INPUT.en : LLM_INPUT.zh,
      researchScenes: {
        llm: llmState?.info?.(),
        causal: causalState?.info?.(),
        omics: omicsState?.info?.(),
      },
      renderers: scenes.map((s) => ({
        id: s.id,
        renderer: s.canvas.dataset.renderer,
        frames: s.frame,
      })),
    }),
  };
  styleMotion();
  requestAnimationFrame(animate);
})();

/* 08 · Sequence pairing interaction */
(() => {
  "use strict";
  const root = document.getElementById("pairing-game");
  if (!root) return;
  const COPY = {
    zh: {
      title: "补全互补链",
      progress: "{n} / 6",
      board: "DNA 碱基配对挑战",
      template: "模板链，5 撇到 3 撇",
      complement: "互补链，3 撇到 5 撇",
      position: "第 {n} 位，模板碱基 {base}，待配对",
      solved: "第 {n} 位，已配对 {base}",
      choose: "选择碱基 {base}",
      initial: "为高亮位置选一个碱基，补全与模板互补的 DNA 链。",
      correct: "配对成功。继续寻找下一对。",
      wrong: "这对还不匹配，再试一次。",
      complete: "双链已补全！两条链反向平行，A 与 T、C 与 G 各有默契。",
      keyboard: "也可按 A / T / C / G",
      next: "换一组 ↗",
      again: "再探索一组 ↗",
      art: "配对示意",
      status: "配对进度",
      selected: "正在选择第 {n} 位。",
    },
    en: {
      title: "Complete the strand",
      progress: "{n} / 6",
      board: "DNA base-pairing challenge",
      template: "Template strand, 5 prime to 3 prime",
      complement: "Complementary strand, 3 prime to 5 prime",
      position: "Position {n}, template base {base}, waiting for a match",
      solved: "Position {n}, paired with {base}",
      choose: "Choose base {base}",
      initial:
        "Choose a base for the highlighted position to complete the complementary DNA strand.",
      correct: "A match. Keep going to the next pair.",
      wrong: "Not a match yet. Give it another try.",
      complete:
        "Double strand complete! The strands run in opposite directions: A pairs with T, and C with G.",
      keyboard: "Or press A / T / C / G",
      next: "Try another ↗",
      again: "Explore another ↗",
      art: "Base-pairing schematic",
      status: "Pairing progress",
      selected: "Selecting position {n}.",
    },
  };
  const complement = { A: "T", T: "A", C: "G", G: "C" };
  const hydrogenBondCount = (base) => (base === "A" || base === "T" ? 2 : 3);
  const sequences = [
    "ATGCCA",
    "CGTATG",
    "GACCTA",
    "TGCAGT",
    "GTCACA",
    "ACTGGT",
    "CACGTA",
    "TGACCG",
  ];
  const colors = { A: 0x38a89a, T: 0x627ed4, C: 0xc287a2, G: 0x9680d4 };
  const state = {
    index: Math.floor(Math.random() * sequences.length),
    solved: Array(6).fill(null),
    selected: 0,
    message: "initial",
    round: 0,
  };
  let feedbackTimer,
    celebrationTimer,
    visual = null;
  const lang = () =>
    window.WX_I18N?.getLang() === "en" || document.documentElement.lang === "en" ? "en" : "zh";
  const tr = (key, vars = {}) =>
    (COPY[lang()][key] || key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  const count = () => state.solved.filter(Boolean).length;
  const sequence = () => sequences[state.index];
  const reduced = () =>
    matchMedia("(prefers-reduced-motion: reduce)").matches ||
    document.documentElement.dataset.motion === "paused";

  root.innerHTML = `<div class="pairing-shell"><div class="pairing-play"><div class="pairing-topline"><h3 class="pairing-title"></h3><span class="pairing-progress" role="status"></span></div><div class="pairing-meter" role="progressbar" aria-valuemin="0" aria-valuemax="6"><span></span></div><div class="pairing-sequence pairing-template" role="group"></div><div class="pairing-bonds" aria-hidden="true"></div><div class="pairing-sequence pairing-complement" role="group"></div><p class="pairing-rule"><span>A <i>—</i> T</span><span>C <i>—</i> G</span></p><p class="pairing-feedback" aria-live="polite" aria-atomic="true"></p><div class="pairing-choices" role="group">${["A", "T", "C", "G"].map((b) => `<button type="button" class="pairing-choice" data-base="${b}">${b}</button>`).join("")}</div><div class="pairing-actions"><span class="pairing-keyboard"></span><button type="button" class="pairing-next"></button></div></div><div class="pairing-art"><canvas class="pairing-canvas" aria-hidden="true"></canvas><p class="pairing-art-label"></p></div><div class="pairing-celebration" aria-hidden="true"></div></div>`;
  const q = (s) => root.querySelector(s);
  const qa = (s) => [...root.querySelectorAll(s)];
  function render() {
    const restoreSlotFocus = document.activeElement?.classList.contains("pairing-slot");
    const n = count(),
      done = n === 6;
    root.dataset.gameState = done ? "complete" : "playing";
    root.dataset.progress = String(n);
    root.setAttribute("aria-label", tr("board"));
    q(".pairing-title").textContent = tr("title");
    q(".pairing-progress").textContent = tr("progress", { n });
    q(".pairing-meter").setAttribute("aria-valuenow", String(n));
    q(".pairing-meter").setAttribute("aria-label", tr("status"));
    q(".pairing-meter>span").style.width = `${(n / 6) * 100}%`;
    q(".pairing-template").setAttribute("aria-label", tr("template"));
    q(".pairing-complement").setAttribute("aria-label", tr("complement"));
    q(".pairing-template").innerHTML =
      `<span class="pairing-end">5′</span>${[...sequence()].map((b) => `<span class="pairing-base">${b}</span>`).join("")}<span class="pairing-end">3′</span>`;
    q(".pairing-bonds").innerHTML =
      `<i></i>${state.solved.map((b) => (b ? `<span class="bond-solved" data-bond-count="${hydrogenBondCount(b)}">${"<i></i>".repeat(hydrogenBondCount(b))}</span>` : '<span class="bond-pending"><i></i></span>')).join("")}<i></i>`;
    q(".pairing-complement").innerHTML =
      `<span class="pairing-end">3′</span>${state.solved.map((b, i) => `<button type="button" class="pairing-slot${b ? " is-solved" : ""}" data-slot="${i}" aria-pressed="${!done && i === state.selected}" aria-label="${tr(b ? "solved" : "position", { n: i + 1, base: b || sequence()[i] })}"${b ? ' aria-disabled="true"' : ""}>${b || "·"}</button>`).join("")}<span class="pairing-end">5′</span>`;
    q(".pairing-feedback").textContent = tr(
      done ? "complete" : state.message,
      state.message === "selected" ? { n: state.selected + 1 } : {},
    );
    q(".pairing-feedback").classList.toggle("is-complete", done);
    qa(".pairing-choice").forEach((b) => {
      b.setAttribute("aria-label", tr("choose", { base: b.dataset.base }));
      b.disabled = done;
    });
    q(".pairing-choices").setAttribute("aria-label", tr("board"));
    q(".pairing-keyboard").textContent = tr("keyboard");
    q(".pairing-next").textContent = tr(done ? "again" : "next");
    q(".pairing-art-label").textContent = tr("art");
    visual?.update();
    if (restoreSlotFocus) {
      (done ? q(".pairing-next") : q(`[data-slot="${state.selected}"]`))?.focus({
        preventScroll: true,
      });
    }
  }
  function bloom() {
    if (reduced()) return;
    const holder = q(".pairing-celebration");
    clearTimeout(celebrationTimer);
    holder.innerHTML = Array.from({ length: 28 }, (_, i) => {
      const a = (i / 28) * Math.PI * 2,
        r = 70 + Math.random() * 160,
        c = ["#5aaac2", "#5bbe9a", "#9a8bd7", "#dea6ad"][i % 4];
      return `<i class="pairing-spark" style="--spark-x:${Math.cos(a) * r}px;--spark-y:${Math.sin(a) * r}px;--spark-color:${c};--spark-delay:${(i % 4) * 0.045}s"></i>`;
    }).join("");
    celebrationTimer = setTimeout(() => {
      holder.innerHTML = "";
    }, 1600);
  }
  function answer(base) {
    if (count() === 6 || !Object.hasOwn(complement, base)) return;
    clearTimeout(feedbackTimer);
    const slot = state.selected;
    if (state.solved[slot]) return;
    if (base === complement[sequence()[slot]]) {
      state.solved[slot] = base;
      state.message = "correct";
      const next = state.solved.findIndex((x, i) => !x && i > slot);
      state.selected = next >= 0 ? next : state.solved.findIndex((x) => !x);
      render();
      if (count() === 6) bloom();
    } else {
      state.message = "wrong";
      render();
      const el = q(`[data-slot="${slot}"]`);
      el?.classList.add("is-wrong");
      feedbackTimer = setTimeout(() => el?.classList.remove("is-wrong"), 380);
    }
  }
  root.addEventListener("click", (event) => {
    const choice = event.target.closest(".pairing-choice");
    if (choice) {
      answer(choice.dataset.base);
      return;
    }
    const slot = event.target.closest(".pairing-slot");
    if (slot) {
      const i = Number(slot.dataset.slot);
      if (state.solved[i]) return;
      state.selected = i;
      state.message = "selected";
      render();
      q(`[data-slot="${i}"]`)?.focus({ preventScroll: true });
      return;
    }
    if (event.target.closest(".pairing-next")) {
      state.index =
        (state.index + 1 + Math.floor(Math.random() * (sequences.length - 1))) % sequences.length;
      state.solved = Array(6).fill(null);
      state.selected = 0;
      state.message = "initial";
      state.round++;
      clearTimeout(feedbackTimer);
      clearTimeout(celebrationTimer);
      q(".pairing-celebration").innerHTML = "";
      render();
    }
  });
  root.addEventListener("keydown", (event) => {
    if (event.altKey || event.metaKey || event.ctrlKey || event.repeat) return;
    const base = event.key.toUpperCase();
    if (Object.hasOwn(complement, base) && event.key.length === 1) {
      event.preventDefault();
      answer(base);
      return;
    }
    if (event.target.matches(".pairing-slot") && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      const choices = state.solved.map((b, i) => (!b ? i : -1)).filter((i) => i >= 0);
      if (!choices.length) return;
      const index = choices.indexOf(state.selected),
        dir = event.key === "ArrowLeft" ? -1 : 1;
      state.selected = choices[(index + dir + choices.length) % choices.length];
      state.message = "selected";
      render();
      q(`[data-slot="${state.selected}"]`)?.focus({ preventScroll: true });
    }
  });
  window.addEventListener("languagechange", render);
  render();

  function setupVisual() {
    let canvas = q(".pairing-canvas");
    let visible = false,
      frame = 0,
      last = 0,
      dirty = true,
      elapsed = 0,
      resize = () => {};
    const folded = root.closest("details");
    const isOpen = () => !folded || folded.open;
    const inView = () => {
      const r = canvas.getBoundingClientRect();
      return isOpen() && r.width > 0 && r.height > 0 && r.bottom > -80 && r.top < innerHeight + 80;
    };
    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              visible = entries[0].isIntersecting;
              dirty = true;
            },
            { rootMargin: "80px" },
          )
        : null;
    io?.observe(canvas);
    const wake = () => {
      dirty = true;
      last = 0;
      resize();
      visible = inView();
    };
    folded?.addEventListener("toggle", wake);
    new MutationObserver(wake).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });
    new ResizeObserver(wake).observe(root);
    window.addEventListener("resize", wake);
    window.addEventListener("languagechange", () => {
      dirty = true;
    });
    document.addEventListener("visibilitychange", () => {
      last = 0;
      dirty = true;
    });
    const T = window.THREE;
    if (T) {
      let renderer;
      try {
        renderer = new T.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
      } catch {}
      if (renderer) {
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
        canvas.dataset.renderer = "webgl";
        canvas.dataset.frame = "0";
        renderer.outputColorSpace = T.SRGBColorSpace;
        renderer.toneMapping = T.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.07;
        const scene = new T.Scene(),
          camera = new T.PerspectiveCamera(36, 1, 0.1, 100);
        camera.position.set(0, 0.15, 13.1);
        camera.lookAt(0, 0, 0);
        scene.add(new T.HemisphereLight(0xffffff, 0x8caec5, 2));
        const key = new T.DirectionalLight(0xffffff, 2.9);
        key.position.set(-4, 6, 8);
        scene.add(key);
        const rim = new T.DirectionalLight(0xb6c8ff, 2.5);
        rim.position.set(5, -2, -4);
        scene.add(rim);
        const fill = new T.DirectionalLight(0xc3fff0, 1.3);
        fill.position.set(-5, -3, 4);
        scene.add(fill);
        const group = new T.Group();
        scene.add(group);
        group.rotation.z = -0.17;
        const materials = {},
          pieces = [],
          links = [],
          yStep = 1.08,
          twist = 0.59,
          radius = 1.65;
        const vec = (x, y, z) => new T.Vector3(x, y, z);
        const point = (y, side, offset = 0) => {
          const theta = (y / yStep) * twist + offset;
          return vec(side * radius * Math.cos(theta), y, -side * radius * Math.sin(theta));
        };
        // Right-handed double helix. This is a pairing diagram, not atomistic
        // geometry: plate labels and the antiparallel ends carry the semantics.
        function ribbon(side) {
          const positions = [],
            normals = [],
            rgb = [],
            indices = [],
            a = new T.Color(side < 0 ? 0x35bba9 : 0x7985dc),
            b = new T.Color(side < 0 ? 0x8bcbdc : 0xb496df),
            steps = 180;
          for (let i = 0; i <= steps; i++) {
            const y = -3.36 + (i / steps) * 6.72;
            for (let edge = 0; edge < 2; edge++) {
              const theta = (y / yStep) * twist + (edge ? 1 : -1) * 0.105;
              positions.push(side * radius * Math.cos(theta), y, -side * radius * Math.sin(theta));
              normals.push(side * Math.cos(theta), 0, -side * Math.sin(theta));
              const c = a.clone().lerp(b, 0.25 + 0.55 * Math.sin((i / steps) * Math.PI));
              rgb.push(c.r, c.g, c.b);
            }
            if (i < steps) {
              const j = i * 2;
              indices.push(j, j + 1, j + 2, j + 1, j + 3, j + 2);
            }
          }
          const g = new T.BufferGeometry();
          g.setAttribute("position", new T.Float32BufferAttribute(positions, 3));
          g.setAttribute("color", new T.Float32BufferAttribute(rgb, 3));
          g.setIndex(indices);
          g.computeVertexNormals();
          const m = new T.MeshPhysicalMaterial({
            vertexColors: true,
            side: T.DoubleSide,
            roughness: 0.19,
            metalness: 0.24,
            clearcoat: 1,
            clearcoatRoughness: 0.12,
            iridescence: 0.85,
            iridescenceIOR: 1.4,
            iridescenceThicknessRange: [180, 650],
          });
          group.add(new T.Mesh(g, m));
          for (const edge of [-0.105, 0.105]) {
            const pts = Array.from({ length: 121 }, (_, i) =>
              point(-3.36 + (i / 120) * 6.72, side, edge),
            );
            const curve = new T.CatmullRomCurve3(pts);
            const rail = new T.Mesh(
              new T.TubeGeometry(curve, 180, 0.021, 6, false),
              new T.MeshStandardMaterial({
                color: side < 0 ? 0x83e7d2 : 0xc1c8ff,
                emissive: side < 0 ? 0x42aa9d : 0x656bc5,
                emissiveIntensity: 0.16,
                metalness: 0.4,
                roughness: 0.2,
              }),
            );
            group.add(rail);
          }
        }
        ribbon(-1);
        ribbon(1);
        function roundedPlate() {
          const w = 0.98,
            h = 0.48,
            r = 0.14,
            shape = new T.Shape();
          shape.moveTo(-w / 2 + r, -h / 2);
          shape.lineTo(w / 2 - r, -h / 2);
          shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
          shape.lineTo(w / 2, h / 2 - r);
          shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
          shape.lineTo(-w / 2 + r, h / 2);
          shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
          shape.lineTo(-w / 2, -h / 2 + r);
          shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
          const geo = new T.ExtrudeGeometry(shape, {
            depth: 0.09,
            bevelEnabled: true,
            bevelSegments: 3,
            steps: 1,
            bevelSize: 0.035,
            bevelThickness: 0.035,
            curveSegments: 7,
          });
          geo.translate(0, 0, -0.045);
          return geo;
        }
        const baseGeo = roundedPlate();
        for (const b of ["A", "T", "C", "G"])
          materials[b] = new T.MeshPhysicalMaterial({
            color: colors[b],
            roughness: 0.22,
            metalness: 0.12,
            clearcoat: 1,
            transparent: true,
            opacity: 0.85,
            side: T.DoubleSide,
          });
        const pending = new T.MeshPhysicalMaterial({
          color: 0xecf2f9,
          roughness: 0.2,
          transparent: true,
          opacity: 0.57,
          metalness: 0.06,
          clearcoat: 1,
          side: T.DoubleSide,
        });
        function label(text, color = "#fff", size = 0.4) {
          const c = document.createElement("canvas");
          c.width = 128;
          c.height = 128;
          const ctx = c.getContext("2d");
          ctx.font = '76px "Times New Roman"';
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = color;
          ctx.fillText(text, 64, 65);
          const tex = new T.CanvasTexture(c);
          tex.colorSpace = T.SRGBColorSpace;
          const s = new T.Sprite(
            new T.SpriteMaterial({ map: tex, transparent: true, depthTest: false }),
          );
          s.scale.set(size, size, 1);
          return s;
        }
        function setText(sprite, text) {
          const ctx = sprite.material.map.image.getContext("2d");
          ctx.clearRect(0, 0, 128, 128);
          ctx.fillStyle = text === "?" ? "#6f879e" : "#ffffff";
          ctx.fillText(text, 64, 65);
          sprite.material.map.needsUpdate = true;
        }
        for (let i = 0; i < 6; i++) {
          const y = (2.5 - i) * yStep,
            row = new T.Group();
          row.position.y = y;
          row.rotation.y = (y / yStep) * twist;
          group.add(row);
          const left = new T.Mesh(baseGeo, materials[sequence()[i]]),
            right = new T.Mesh(baseGeo, pending);
          left.position.x = -0.75;
          right.position.x = 0.75;
          row.add(left, right);
          // Fine stems connect nucleotide plates to their respective backbone.
          for (const side of [-1, 1]) {
            const stem = new T.Mesh(
              new T.CylinderGeometry(0.027, 0.027, 0.39, 8),
              new T.MeshStandardMaterial({ color: side < 0 ? 0x6bbfb3 : 0x9ca9d5, roughness: 0.3 }),
            );
            stem.rotation.z = Math.PI / 2;
            stem.position.x = side * 1.44;
            row.add(stem);
          }
          const lText = label(sequence()[i]),
            rText = label("?", "#6f879e");
          lText.position.set(-0.75, 0, 0.13);
          rText.position.set(0.75, 0, 0.13);
          row.add(lText, rText);
          const pairLinks = [];
          for (let j = 0; j < 3; j++) {
            const geometry = new T.BufferGeometry().setFromPoints([
                vec(-0.23, 0, 0),
                vec(0.23, 0, 0),
              ]),
              line = new T.Line(
                geometry,
                new T.LineDashedMaterial({
                  color: 0x3c999f,
                  transparent: true,
                  opacity: 0.67,
                  dashSize: 0.055,
                  gapSize: 0.035,
                }),
              );
            line.computeLineDistances();
            row.add(line);
            pairLinks.push(line);
          }
          links.push(pairLinks);
          pieces.push({ left, right, lText, rText, row });
        }
        for (const [side, y, text] of [
          [-1, 3.65, "5′"],
          [-1, -3.65, "3′"],
          [1, 3.65, "3′"],
          [1, -3.65, "5′"],
        ]) {
          const endpoint = label(text, "#456d80", 0.39);
          endpoint.position
            .copy(point(Math.sign(y) * 3.36, side))
            .add(vec(0, Math.sign(y) * 0.34, 0));
          group.add(endpoint);
        }
        const specks = [];
        for (let i = 0; i < 28; i++) {
          const a = (i / 28) * Math.PI * 2,
            y = Math.sin(i * 1.67) * 4.1,
            mesh = new T.Mesh(
              new T.SphereGeometry(i % 4 ? 0.019 : 0.032, 6, 5),
              new T.MeshBasicMaterial({
                color: i % 2 ? 0x82b8cb : 0xaba7dc,
                transparent: true,
                opacity: 0.35,
              }),
            );
          mesh.position.set(Math.cos(a) * 2.6, y, Math.sin(a) * 2.2 - 1);
          scene.add(mesh);
          specks.push(mesh);
        }
        resize = () => {
          const w = canvas.clientWidth,
            h = canvas.clientHeight;
          if (!w || !h) return;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.position.z = w / h < 0.9 ? 15.6 : 13.1;
          camera.updateProjectionMatrix();
          dirty = true;
        };
        new ResizeObserver(resize).observe(canvas);
        resize();
        function update() {
          pieces.forEach((p, i) => {
            p.left.material = materials[sequence()[i]];
            p.right.material = state.solved[i] ? materials[state.solved[i]] : pending;
            setText(p.lText, sequence()[i]);
            setText(p.rText, state.solved[i] || "?");
            const n = state.solved[i] ? hydrogenBondCount(state.solved[i]) : 1;
            links[i].forEach((line, j) => {
              line.visible = j < n;
              line.position.y = (j - (n - 1) / 2) * 0.1;
              line.material.opacity = state.solved[i] ? 0.8 : 0.2;
            });
          });
          dirty = true;
        }
        let lost = false;
        canvas.addEventListener("webglcontextlost", (event) => {
          event.preventDefault();
          lost = true;
          canvas.dataset.renderer = "context-lost";
        });
        canvas.addEventListener("webglcontextrestored", () => {
          lost = false;
          canvas.dataset.renderer = "webgl";
          dirty = true;
        });
        function tick(time) {
          requestAnimationFrame(tick);
          if (lost || document.hidden || !isOpen() || !canvas.clientWidth || !canvas.clientHeight)
            return;
          if (!(visible || inView()) && frame > 0) return;
          const paused = reduced();
          if (paused && !dirty) return;
          if (time - last < 40 && !dirty) return;
          const dt = last ? Math.min((time - last) / 1000, 0.06) : 0;
          last = time;
          if (!paused) elapsed += dt;
          group.rotation.y = 0.23 + Math.sin(elapsed * 0.23) * 0.42;
          group.rotation.x = Math.sin(elapsed * 0.17) * 0.055;
          specks.forEach(
            (p, i) => (p.position.y += !paused ? Math.sin(elapsed * 0.25 + i) * dt * 0.025 : 0),
          );
          renderer.render(scene, camera);
          canvas.dataset.frame = String(++frame);
          dirty = false;
        }
        requestAnimationFrame(tick);
        return { update };
      }
    }
    // Obtain a fresh canvas when a WebGL attempt has reserved the first one.
    let ctx;
    try {
      ctx = canvas.getContext("2d");
    } catch {}
    if (!ctx) {
      const fresh = canvas.cloneNode(false);
      canvas.replaceWith(fresh);
      io?.unobserve(canvas);
      canvas = fresh;
      io?.observe(canvas);
      ctx = canvas.getContext("2d");
    }
    if (!ctx) return { update() {} };
    canvas.dataset.renderer = "canvas2d";
    canvas.dataset.frame = "0";
    const hex = (b) => `#${colors[b].toString(16).padStart(6, "0")}`;
    resize = () => {
      const w = canvas.clientWidth,
        h = canvas.clientHeight,
        d = Math.min(devicePixelRatio || 1, 1.5);
      if (w && h) {
        canvas.width = Math.round(w * d);
        canvas.height = Math.round(h * d);
      }
      dirty = true;
    };
    new ResizeObserver(resize).observe(canvas);
    resize();
    function draw() {
      const w = canvas.width,
        h = canvas.height;
      if (!w || !h) return;
      ctx.clearRect(0, 0, w, h);
      const s = Math.min(w / 330, h / 400),
        angle = 0.23 + Math.sin(elapsed * 0.23) * 0.42;
      const point = (y, side) => {
        const theta = (-y / 54) * 0.59 + angle;
        return { x: side * 81 * Math.cos(theta), y, z: -side * 81 * Math.sin(theta) };
      };
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(-0.17);
      ctx.scale(s, s);
      const items = [];
      for (const side of [-1, 1])
        for (let i = 0; i < 110; i++) {
          const y = -168 + (i / 110) * 336,
            a = point(y, side),
            b = point(y + 336 / 110, side);
          items.push({
            z: (a.z + b.z) / 2,
            draw() {
              const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
              g.addColorStop(0, side < 0 ? "#58bdad" : "#9d9be1");
              g.addColorStop(1, side < 0 ? "#94d6d3" : "#c0b8ed");
              ctx.strokeStyle = g;
              ctx.lineWidth = 9;
              ctx.lineCap = "round";
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
              ctx.strokeStyle = side < 0 ? "#c8f9eb" : "#e1e4ff";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x - 2, a.y);
              ctx.lineTo(b.x - 2, b.y);
              ctx.stroke();
            },
          });
        }
      for (let i = 0; i < 6; i++) {
        const y = (i - 2.5) * 54,
          a = point(y, -1),
          b = point(y, 1),
          n = state.solved[i] ? hydrogenBondCount(state.solved[i]) : 1;
        items.push({
          z: 0,
          draw() {
            ctx.strokeStyle = state.solved[i] ? "#62a7ac" : "#becfdc";
            ctx.lineWidth = 1.3;
            ctx.setLineDash([3, 3]);
            for (let j = 0; j < n; j++) {
              const yy = y + (j - (n - 1) / 2) * 4;
              ctx.beginPath();
              ctx.moveTo(a.x * 0.18, yy);
              ctx.lineTo(b.x * 0.18, yy);
              ctx.stroke();
            }
            ctx.setLineDash([]);
          },
        });
        for (const [side, pp] of [
          [-1, a],
          [1, b],
        ]) {
          const base = side < 0 ? sequence()[i] : state.solved[i];
          items.push({
            z: pp.z,
            draw() {
              const width = Math.max(15, Math.abs(pp.x) * 0.52),
                x = pp.x * 0.56;
              ctx.fillStyle = base ? hex(base) : "#edf3fa";
              ctx.globalAlpha = base ? 0.92 : 0.8;
              ctx.strokeStyle = base ? "#b7d9de" : "#c5d6e1";
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.roundRect(x - width / 2, y - 12, width, 24, 6);
              ctx.fill();
              ctx.stroke();
              ctx.globalAlpha = 1;
              ctx.fillStyle = base ? "#fff" : "#7890a2";
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.font = '17px "Times New Roman"';
              ctx.fillText(base || "?", x, y + 0.6);
            },
          });
        }
      }
      items.sort((a, b) => a.z - b.z).forEach((item) => item.draw());
      ctx.fillStyle = "#4e7687";
      ctx.font = '14px "Times New Roman"';
      ctx.textAlign = "center";
      for (const [side, y, text] of [
        [-1, -185, "5′"],
        [-1, 185, "3′"],
        [1, -185, "3′"],
        [1, 185, "5′"],
      ]) {
        const p = point(Math.sign(y) * 168, side);
        ctx.fillText(text, p.x + Math.sign(p.x || side) * 10, y);
      }
      ctx.restore();
      canvas.dataset.frame = String(++frame);
    }
    function tick(time) {
      requestAnimationFrame(tick);
      if (document.hidden || !isOpen() || !canvas.clientWidth || !canvas.clientHeight) return;
      if (!(visible || inView()) && frame > 0) return;
      const paused = reduced();
      if (paused && !dirty) return;
      if (time - last < 50 && !dirty) return;
      const dt = last ? Math.min((time - last) / 1000, 0.06) : 0;
      last = time;
      if (!paused) elapsed += dt;
      draw();
      dirty = false;
    }
    requestAnimationFrame(tick);
    return {
      update() {
        dirty = true;
      },
    };
  }
  visual = setupVisual();
  visual.update();
  // The public hook intentionally exposes progress, never the answer sequence.
  window.WX_PAIRING = {
    getState: () => ({ progress: count(), complete: count() === 6, round: state.round }),
    reset: () => q(".pairing-next").click(),
  };
})();

/* 09 · Microbial community interaction */
/* Microbial-community illustration, not a measured microbiome or a species classifier.
 * Shapes are generic bacterial rods/cocci; colors never encode beneficial vs pathogenic taxa.
 * Scope and sources: microbiome-notes.md. All rendering stays on this device.
 */
(() => {
  "use strict";
  const host = document.getElementById("microbiome-module");
  if (!host) return;
  const COPY = {
    zh: {
      canvas: "可旋转的微生物群落示意，拖动或用方向键调整视角",
      caption: "微生物研究示意",
      probioticCaption: "菌株 · 代谢信号 · 宿主",
      pathogenicCaption: "菌体与宿主屏障的界面",
      communityCaption: "群落间的代谢交换",
      reset: "复位 ↺",
      group: "探索微生物研究主题",
      probiotic: "益生菌研究",
      pathogenic: "致病机制",
      community: "群落互作",
      probioticText: "从具体菌株出发，关注代谢产物与宿主免疫；益生作用需要对应菌株与情境的证据。",
      pathogenicText: "关注毒力因素、肠道屏障与宿主环境，探索致病菌及机会致病菌的作用机制。",
      communityText: "关注微生物之间的代谢联系，以及菌群、宿主和环境共同塑造的生态关系。",
    },
    en: {
      canvas: "Rotatable microbial community schematic. Drag or use arrow keys to change the view.",
      caption: "Microbiome research schematic",
      probioticCaption: "Strain · metabolites · host",
      pathogenicCaption: "The microbe–barrier interface",
      communityCaption: "Exchange across communities",
      reset: "Reset ↺",
      group: "Explore microbiome research themes",
      probiotic: "Probiotic research",
      pathogenic: "Pathogenic mechanisms",
      community: "Community interactions",
      probioticText:
        "Starting with specific strains, explore metabolites and host immunity. Probiotic effects require evidence for the relevant strain and context.",
      pathogenicText:
        "Explore virulence factors, the gut barrier and host conditions in the mechanisms of pathogens and opportunistic pathobionts.",
      communityText:
        "Explore metabolic relationships among microbes, alongside the ecological connections shaped by the community, its host and its environment.",
    },
  };
  const lang = () =>
    window.WX_I18N?.getLang() === "en" || document.documentElement.lang === "en" ? "en" : "zh";
  const modes = ["probiotic", "pathogenic", "community"];
  let mode = "probiotic",
    yaw = 0,
    pitch = 0,
    viewYaw = 0,
    viewPitch = 0,
    dirty = true,
    clock = 0,
    frame = 0,
    last = 0,
    visible = false,
    visual = null;
  const cyclePeriod = 3;
  let autoplay = true,
    elapsed = 0,
    interval = cyclePeriod,
    modeRevision = 0;
  const weights = { probiotic: 1, pathogenic: 0, community: 0 };
  const transition = { elapsed: 1.1, duration: 1.1, from: { ...weights } };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const paused = () => reduced.matches || document.documentElement.dataset.motion === "paused";
  host.innerHTML =
    '<div class="microbiome-art"><canvas class="microbiome-canvas" tabindex="0"></canvas><div class="microbiome-caption"><span></span><button type="button" class="microbiome-reset"></button></div></div><div class="microbiome-tour"><span class="microbiome-step" aria-hidden="true">01 / 03</span><div class="microbiome-progress" aria-hidden="true"><span></span></div><button type="button" class="microbiome-autoplay" aria-pressed="true"></button></div><div class="microbiome-modes" role="group"><button type="button" data-microbiome-mode="probiotic" aria-pressed="true"></button><button type="button" data-microbiome-mode="pathogenic" aria-pressed="false"></button><button type="button" data-microbiome-mode="community" aria-pressed="false"></button></div><p class="microbiome-description" aria-live="off"></p>';
  let canvas = host.querySelector("canvas");
  const progress = host.querySelector(".microbiome-progress span");
  function refresh() {
    const copy = COPY[lang()];
    canvas.setAttribute("aria-label", copy[mode] + (lang() === "en" ? ". " : "。") + copy.canvas);
    host.querySelector(".microbiome-caption span").textContent = copy[mode + "Caption"];
    host.querySelector(".microbiome-reset").textContent = copy.reset;
    host.querySelector(".microbiome-modes").setAttribute("aria-label", copy.group);
    host.querySelectorAll("[data-microbiome-mode]").forEach((b) => {
      b.textContent = copy[b.dataset.microbiomeMode];
      b.setAttribute("aria-pressed", String(b.dataset.microbiomeMode === mode));
    });
    host.querySelector(".microbiome-description").textContent = copy[mode + "Text"];
    host.querySelector(".microbiome-step").textContent = "0" + (modes.indexOf(mode) + 1) + " / 03";
    host.dataset.microbiomeMode = mode;
    host.dataset.modeRevision = String(modeRevision);
    const article = host.closest(".research-item");
    if (article) {
      article.dataset.currentScene = mode;
      article.dataset.sceneStep = String(modes.indexOf(mode) + 1);
      article.dataset.sceneCount = "3";
    }
    refreshPlayback();
    dirty = true;
  }
  function refreshPlayback() {
    const stopped = paused();
    const button = host.querySelector(".microbiome-autoplay");
    button.setAttribute("aria-pressed", String(autoplay));
    button.disabled = stopped;
    button.textContent =
      lang() === "en"
        ? stopped
          ? "Motion paused"
          : autoplay
            ? "Pause tour"
            : "Resume tour"
        : stopped
          ? "动效已暂停"
          : autoplay
            ? "暂停轮换"
            : "继续轮换";
    host.dataset.autoplay = autoplay && !stopped ? "running" : "paused";
  }
  function setMode(value, automatic = false) {
    if (!modes.includes(value)) return;
    transition.from = { ...weights };
    transition.elapsed = 0;
    mode = value;
    elapsed = 0;
    interval = cyclePeriod;
    modeRevision++;
    host
      .querySelector(".microbiome-description")
      .setAttribute("aria-live", automatic ? "off" : "polite");
    refresh();
    visual?.setMode();
    window.dispatchEvent(
      new CustomEvent("researchscenechange", {
        detail: {
          module: "microbiome",
          scene: mode,
          index: modes.indexOf(mode),
          count: 3,
          automatic,
        },
      }),
    );
  }
  function setAutoplay(value) {
    autoplay = !!value;
    elapsed = 0;
    interval = cyclePeriod;
    refreshPlayback();
    dirty = true;
  }
  function holdTour() {
    elapsed = 0;
    interval = cyclePeriod;
    dirty = true;
  }
  function reset() {
    yaw = 0;
    pitch = 0;
    input?.reset();
    holdTour();
  }
  host.addEventListener("click", (e) => {
    const button = e.target.closest("button[data-microbiome-mode]");
    if (button) setMode(button.dataset.microbiomeMode);
    if (e.target.closest(".microbiome-reset")) reset();
    if (e.target.closest(".microbiome-autoplay") && !paused()) setAutoplay(!autoplay);
  });
  const cellSpecs = [
    [-1.78, 1.05, 0.48, "rod", 0.8, -0.52, 0.18],
    [-0.3, 1.7, -0.4, "rod", 0.72, 0.48, -0.2],
    [1.27, 1.18, 0.26, "cocci", 0.79, 0.3, 0.2],
    [2.08, -0.15, -0.48, "rod", 0.85, 0.72, -0.4],
    [0.3, 0.12, 0.52, "rod", 0.92, -0.4, 0.1],
    [-1.62, -1.08, -0.18, "rod", 0.88, 0.73, 0.1],
    [0.35, -1.55, 0.32, "rod", 0.76, -0.58, -0.3],
    [-2.38, -0.12, 0.14, "cocci", 0.62, 0.25, 0],
    [1.72, -1.38, 0.3, "cocci", 0.7, 0.4, 0.15],
    [-0.47, -0.25, -0.92, "cocci", 0.72, -0.3, 0.2],
    [-1.08, 1.93, -0.3, "cocci", 0.46, 0.3, 0.3],
    [2.13, 0.85, -0.6, "cocci", 0.42, -0.3, 0.15],
  ];
  const seed = (n) => {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  let dragging = false,
    input = null,
    paletteInfo = null;
  function wireCanvas() {
    input = window.WX_RESEARCH_INPUTS?.attach(canvas, "microbiome", {
      onChange() {
        dirty = true;
        holdTour();
      },
      onGesture(active) {
        dragging = active;
        holdTour();
      },
    });
  }
  function webgl() {
    const T = window.THREE;
    if (!T) return null;
    let renderer;
    try {
      renderer = new T.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return null;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.6));
    renderer.setClearColor(0xffffff, 0);
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    const scene = new T.Scene(),
      camera = new T.PerspectiveCamera(36, 1, 0.1, 70);
    camera.position.set(0, 0, 13.4);
    scene.add(new T.HemisphereLight(0xffffff, 0x9bbcc5, 2));
    [
      [0xffffff, 2.6, -4, 6, 8],
      [0xd5c7ef, 2.1, 5, 1, -5],
      [0xc2ecde, 1.05, -5, -4, 5],
    ].forEach(([color, power, x, y, z]) => {
      const l = new T.DirectionalLight(color, power);
      l.position.set(x, y, z);
      scene.add(l);
    });
    const root = new T.Group(),
      orbitRoot = new T.Group();
    scene.add(orbitRoot);
    orbitRoot.add(root);
    const groups = {},
      cells = [],
      flows = [],
      orbiters = [],
      labels = [],
      decorations = [];
    const vec = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
    const colors = [0x56b9ae, 0xa79acb, 0x9cbad6, 0xd9aaa4];
    const shared = {
      rod: new T.CapsuleGeometry(0.32, 0.71, 8, 24),
      coccus: new T.SphereGeometry(0.4, 24, 18),
      small: new T.SphereGeometry(0.055, 10, 8),
    };
    const physical = (color, extra = {}) =>
      new T.MeshPhysicalMaterial({
        color,
        roughness: 0.23,
        metalness: 0.1,
        clearcoat: 0.9,
        clearcoatRoughness: 0.17,
        transparent: true,
        opacity: 1,
        ...extra,
      });
    const basic = (color, opacity = 1) =>
      new T.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
    function baseMaterial(material) {
      material.userData.baseOpacity = material.opacity;
      return material;
    }
    function add(parent, geometry, material, position = [0, 0, 0]) {
      const mesh = new T.Mesh(geometry, baseMaterial(material));
      mesh.position.set(...position);
      parent.add(mesh);
      return mesh;
    }
    function curve(parent, points, color, opacity = 0.4, width = 0) {
      const path = new T.CatmullRomCurve3(points.map((p) => (Array.isArray(p) ? vec(...p) : p)));
      let obj;
      if (width)
        obj = new T.Mesh(
          new T.TubeGeometry(path, 96, width, 7, false),
          baseMaterial(physical(color, { opacity, depthWrite: false })),
        );
      else
        obj = new T.Line(
          new T.BufferGeometry().setFromPoints(path.getPoints(80)),
          baseMaterial(new T.LineBasicMaterial({ color, transparent: true, opacity })),
        );
      parent.add(obj);
      return path;
    }
    function ring(
      parent,
      r,
      color,
      opacity = 0.35,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      thickness = 0.012,
    ) {
      const mesh = add(
        parent,
        new T.TorusGeometry(r, thickness, 7, 100),
        physical(color, { opacity, depthWrite: false }),
        position,
      );
      mesh.rotation.set(...rotation);
      return mesh;
    }
    function text(parent, zh, en, x, y, z, width = 2.05) {
      const c = document.createElement("canvas");
      c.width = 640;
      c.height = 160;
      const ctx = c.getContext("2d"),
        tex = new T.CanvasTexture(c);
      tex.colorSpace = T.SRGBColorSpace;
      const m = baseMaterial(
          new T.SpriteMaterial({ map: tex, transparent: true, depthTest: false }),
        ),
        sprite = new T.Sprite(m);
      sprite.position.set(x, y, z);
      sprite.scale.set(width, (width * 160) / 640, 1);
      parent.add(sprite);
      labels.push(() => {
        ctx.clearRect(0, 0, 640, 160);
        ctx.fillStyle = "#486d7a";
        ctx.font = Math.round(192 / width) + 'px "Times New Roman", "Microsoft YaHei", serif';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(lang() === "en" ? en : zh, 320, 80, 620);
        tex.needsUpdate = true;
      });
    }
    function bacteria(parent, x, y, z, size, rotation, index, shape = "rod") {
      const group = new T.Group(),
        color = colors[index % colors.length],
        geometry = shared[shape];
      group.position.set(x, y, z);
      group.scale.setScalar(size);
      group.rotation.set(0.18, 0.22, rotation);
      parent.add(group);
      add(group, geometry, physical(color, { opacity: 0.64, depthWrite: false }));
      const interior = add(
        group,
        geometry,
        physical(color, { opacity: 0.29, depthWrite: false, roughness: 0.35 }),
      );
      interior.scale.set(0.75, 0.85, 0.75);
      const points = [];
      for (let j = 0; j <= 45; j++) {
        const t = j / 45,
          a = t * Math.PI * 4;
        points.push(
          vec(
            Math.sin(a * 1.4) * 0.09,
            (t - 0.5) * (shape === "rod" ? 0.96 : 0.42),
            Math.cos(a) * 0.1,
          ),
        );
      }
      curve(group, points, color, 0.92, 0.021);
      const granules = new T.InstancedMesh(
        shared.small,
        baseMaterial(physical(0xe0c39b, { opacity: 0.74 })),
        shape === "rod" ? 12 : 7,
      );
      const dummy = new T.Object3D();
      for (let j = 0; j < granules.count; j++) {
        const a = seed(index * 31 + j) * Math.PI * 2,
          r = 0.1 + seed(index * 23 + j + 3) * 0.12;
        dummy.position.set(
          Math.cos(a) * r,
          (seed(index * 17 + j + 6) - 0.5) * (shape === "rod" ? 0.9 : 0.42),
          Math.sin(a) * r,
        );
        dummy.scale.setScalar(0.5 + seed(j + index) * 0.35);
        dummy.updateMatrix();
        granules.setMatrixAt(j, dummy.matrix);
      }
      group.add(granules);
      cells.push({ group, position: vec(x, y, z), rotation, phase: index * 0.83, size, parent });
      return group;
    }
    function flow(parent, points, color, count = 5, speed = 0.16) {
      const path = curve(parent, points, color, 0.31);
      for (let j = 0; j < count; j++) {
        const bead = add(parent, new T.SphereGeometry(0.05, 12, 8), basic(color, 0.82));
        flows.push({ path, bead, offset: j / count, speed });
      }
      return path;
    }
    function halo(parent, color, r, position) {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const ctx = c.getContext("2d"),
        g = ctx.createRadialGradient(64, 64, 5, 64, 64, 62);
      g.addColorStop(0, "rgba(255,255,255,.38)");
      g.addColorStop(0.35, "rgba(255,255,255,.16)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 128, 128);
      const tex = new T.CanvasTexture(c);
      const s = new T.Sprite(
        baseMaterial(
          new T.SpriteMaterial({
            map: tex,
            color,
            transparent: true,
            opacity: 0.4,
            depthWrite: false,
          }),
        ),
      );
      s.position.set(...position);
      s.scale.setScalar(r);
      parent.add(s);
      return s;
    }
    function modeGroup(name) {
      const g = new T.Group();
      g.userData.mode = name;
      root.add(g);
      groups[name] = g;
      return g;
    }

    // A strain-to-signal composition. The pearl is a visual symbol for host signalling,
    // not a measured immune cell, receptor model, or assertion of a beneficial effect.
    {
      const g = modeGroup("probiotic");
      halo(g, 0x83d2bf, 6.4, [-1.0, 0.1, -1.3]);
      bacteria(g, -2.08, 0.48, 0.05, 0.98, -0.55, 0);
      bacteria(g, -1.54, -0.88, -0.2, 0.7, 0.8, 1);
      bacteria(g, -2.15, 1.55, -0.35, 0.55, 0.7, 2, "coccus");
      const signal = new T.Group();
      signal.position.set(1.68, 0.1, 0);
      g.add(signal);
      add(
        signal,
        new T.SphereGeometry(0.69, 40, 28),
        physical(0xb6a7df, { opacity: 0.42, depthWrite: false, roughness: 0.13 }),
      );
      add(
        signal,
        new T.SphereGeometry(0.38, 28, 20),
        physical(0xe9d8ef, { opacity: 0.66, depthWrite: false }),
      );
      for (let j = 0; j < 3; j++) {
        const r = ring(
          signal,
          0.98 + j * 0.13,
          [0x80beb6, 0xafa1d2, 0xa6bcd6][j],
          0.58,
          [0, 0, 0],
          [0.45 + j * 0.58, j * 0.74, 0.3 + j * 0.5],
          0.018,
        );
        orbiters.push({ object: r, speed: 0.06 + j * 0.015, axis: j % 2 ? "y" : "z" });
      }
      for (let j = 0; j < 9; j++) {
        const a = (j / 9) * Math.PI * 2,
          p = add(signal, shared.small, physical(colors[j % 4], { opacity: 0.92 }), [
            Math.cos(a) * 1.11,
            Math.sin(a) * 1.11,
            Math.sin(a * 2) * 0.24,
          ]);
        orbiters.push({ object: p, center: vec(), radius: 1.11, phase: a, speed: 0.1 });
      }
      flow(
        g,
        [
          [-1.65, 0.55, 0.25],
          [-0.65, 1.05, 0.58],
          [0.55, 0.8, 0.4],
          [1.1, 0.36, 0.1],
        ],
        0x42b7a4,
        6,
        0.13,
      );
      flow(
        g,
        [
          [-1.5, -0.5, 0.1],
          [-0.55, -0.9, 0.62],
          [0.65, -0.75, 0.45],
          [1.1, -0.25, 0.1],
        ],
        0xa898d1,
        5,
        0.11,
      );
      flow(
        g,
        [
          [-1.6, 0.15, -0.15],
          [-0.45, 0.1, 0.2],
          [0.4, 0.18, 0.45],
          [1.2, 0.1, 0.3],
        ],
        0x84b8ce,
        7,
        0.15,
      );
      for (let j = 0; j < 3; j++) {
        const wave = ring(
          g,
          0.4 + j * 0.26,
          0x6bbfae,
          0.23,
          [-0.35, 0, -0.15],
          [0, 1.05, 0],
          0.009,
        );
        decorations.push({ object: wave, phase: j * 0.5, type: "breath" });
      }
      text(g, "菌株", "Strain", -1.95, -1.85, 0.2, 1.7);
      text(g, "代谢信号", "Metabolites", -0.2, 1.75, 0.2, 1.9);
      text(g, "宿主信号", "Host signalling", 1.7, -1.85, 0.2, 2.1);
    }

    // The host epithelium is a distinct, polarised interface. Nuclei are drawn only
    // inside the host cells, never inside the bacteria. No barrier failure is implied.
    {
      const g = modeGroup("pathogenic");
      halo(g, 0xc9b9e8, 7.1, [0, -0.6, -1.35]);
      const tissue = new T.Group();
      tissue.position.set(0, -0.72, 0);
      g.add(tissue);
      const rounded = (w, h, r) => {
        const s = new T.Shape();
        s.moveTo(-w / 2 + r, -h / 2);
        s.lineTo(w / 2 - r, -h / 2);
        s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
        s.lineTo(w / 2, h / 2 - r);
        s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
        s.lineTo(-w / 2 + r, h / 2);
        s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
        s.lineTo(-w / 2, -h / 2 + r);
        s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
        return new T.ExtrudeGeometry(s, {
          depth: 0.34,
          bevelEnabled: true,
          bevelSegments: 3,
          steps: 1,
          bevelSize: 0.045,
          bevelThickness: 0.045,
          curveSegments: 8,
        });
      };
      const cellGeo = rounded(0.63, 1.43, 0.16);
      for (let j = 0; j < 7; j++) {
        const x = (j - 3) * 0.7,
          cell = add(
            tissue,
            cellGeo,
            physical(j % 2 ? 0xa5c2dc : 0xb9c9df, {
              opacity: 0.56,
              depthWrite: false,
              roughness: 0.3,
            }),
            [x, 0, -0.12],
          );
        const nucleus = add(
          tissue,
          new T.SphereGeometry(0.17, 20, 14),
          physical(0xaaa2c7, { opacity: 0.72, depthWrite: false }),
          [x, -0.31, 0.22],
        );
        nucleus.scale.set(0.84, 1.06, 0.5);
        if (j < 6) {
          const junction = add(
            tissue,
            new T.BoxGeometry(0.13, 0.07, 0.15),
            physical(0xb995a2, { opacity: 0.75 }),
            [x + 0.35, 0.53, 0.18],
          );
        }
      }
      const villi = new T.InstancedMesh(
          new T.CapsuleGeometry(0.027, 0.15, 3, 7),
          baseMaterial(physical(0x99b9bd, { opacity: 0.73 })),
          35,
        ),
        d = new T.Object3D();
      for (let j = 0; j < 35; j++) {
        const cell = Math.floor(j / 5),
          n = j % 5;
        d.position.set((cell - 3) * 0.7 + (n - 2) * 0.105, 0.84, 0.11);
        d.rotation.set(0, 0, Math.sin(j) * 0.04);
        d.updateMatrix();
        villi.setMatrixAt(j, d.matrix);
      }
      tissue.add(villi);
      const base = add(
        g,
        rounded(5.05, 0.14, 0.07),
        physical(0xb3a2ce, { opacity: 0.25, depthWrite: false }),
        [0, -1.56, -0.1],
      );
      base.rotation.x = 0.1;
      for (let band = 0; band < 2; band++) {
        const pts = [];
        for (let j = 0; j <= 70; j++) {
          const x = -2.6 + (j / 70) * 5.2;
          pts.push([
            x,
            0.41 + Math.sin((j / 70) * Math.PI * 2.3 + band * 0.4) * 0.05 + band * 0.13,
            -0.1 + band * 0.13,
          ]);
        }
        const line = curve(g, pts, 0xb2cbd3, 0.4, 0.022);
      }
      bacteria(g, -1.35, 1.45, 0.13, 0.65, -0.75, 0);
      bacteria(g, 0.4, 1.12, 0.38, 0.65, 1.17, 1);
      bacteria(g, 1.8, 1.54, -0.05, 0.47, 0.2, 2, "coccus");
      flow(
        g,
        [
          [0.4, 0.83, 0.28],
          [0.65, 0.65, 0.57],
          [0.48, 0.48, 0.35],
          [0.35, 0.2, 0.3],
        ],
        0xc38e9b,
        4,
        0.15,
      );
      flow(
        g,
        [
          [-1.35, 1.1, 0.2],
          [-1.1, 0.92, 0.55],
          [-0.98, 0.58, 0.4],
          [-1.05, 0.25, 0.2],
        ],
        0x92b8c4,
        4,
        0.12,
      );

      text(g, "上皮屏障", "Epithelial barrier", 0, -2.02, 0.3, 2.8);
    }

    // Communities are shown as three interacting clusters, with no measured
    // abundances or inferred ecological edges encoded in the geometry.
    {
      const g = modeGroup("community");
      halo(g, 0xb3b0de, 7, [0, 0, -1.3]);
      const centers = [
        [-1.72, -0.62, 0],
        [0, 1.22, -0.18],
        [1.72, -0.62, 0.02],
      ];
      centers.forEach(([x, y, z], cluster) => {
        const c = new T.Group();
        c.position.set(x, y, z);
        g.add(c);
        ring(
          c,
          1.08,
          [0x70b8b0, 0xa79bce, 0x92b1cf][cluster],
          0.51,
          [0, 0, -0.26],
          [0.18, -0.1 + cluster * 0.12, 0],
          0.017,
        );
        ring(
          c,
          1.17,
          [0x70b8b0, 0xa79bce, 0x92b1cf][cluster],
          0.16,
          [0, 0, -0.3],
          [0.18, -0.1 + cluster * 0.12, 0],
          0.008,
        );
        for (let j = 0; j < 5; j++) {
          const a = (j / 5) * Math.PI * 2 + cluster * 0.5;
          const r = j === 4 ? 0.2 : 0.6;
          bacteria(
            c,
            Math.cos(a) * r,
            Math.sin(a) * r,
            0.1 + Math.sin(a) * 0.13,
            j === 4 ? 0.41 : 0.35,
            a + 0.2,
            cluster * 5 + j,
            j % 2 ? "coccus" : "rod",
          );
        }
        decorations.push({ object: c, phase: cluster * 1.8, type: "cluster" });
      });
      for (let j = 0; j < 3; j++) {
        const a = centers[j],
          b = centers[(j + 1) % 3];
        flow(
          g,
          [
            [a[0], a[1], 0.05],
            [(a[0] + b[0]) * 0.55, (a[1] + b[1]) * 0.55, 0.75],
            [b[0], b[1], 0.05],
          ],
          [0x70b8b0, 0xa79bce, 0x92b1cf][j],
          7,
          0.1 + j * 0.015,
        );
      }
      const center = add(
        g,
        new T.OctahedronGeometry(0.18, 1),
        physical(0xd3c3df, { opacity: 0.72 }),
        [0, -0.24, 0.45],
      );
      orbiters.push({ object: center, speed: 0.2, axis: "y" });
      ring(g, 3.03, 0xb1adc9, 0.18, [0, 0.05, -0.72], [0.15, 0.12, 0], 0.008);
    }
    labels.forEach((update) => update());
    function syncText() {
      labels.forEach((update) => update());
      dirty = true;
    }
    window.addEventListener("languagechange", syncText);
    for (const g of Object.values(groups))
      g.traverse((o) => {
        if (o.material && !o.material.userData.baseOpacity)
          o.material.userData.baseOpacity = o.material.opacity;
      });
    let width = 0,
      height = 0,
      dead = false;
    canvas.dataset.renderer = "webgl";
    canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      dead = true;
      canvas.dataset.renderer = "context-lost";
    });
    canvas.addEventListener("webglcontextrestored", () => {
      dead = false;
      canvas.dataset.renderer = "webgl";
      dirty = true;
    });
    return {
      setMode() {
        dirty = true;
      },
      setTheme() {
        paletteInfo = window.WX_VISUAL_PALETTE?.recolor(root, T);
        dirty = true;
      },
      draw(time) {
        if (dead) return;
        const w = canvas.clientWidth,
          h = canvas.clientHeight;
        if (!w || !h) return;
        if (w !== width || h !== height) {
          width = w;
          height = h;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.position.z = w / h < 1.05 ? 14.3 : 12.8;
          camera.updateProjectionMatrix();
        }
        root.rotation.set(0.035, Math.sin(time * 0.1) * 0.07, -0.025);
        if (input) {
          orbitRoot.quaternion.fromArray(input.state.quaternion);
          if (camera.zoom !== input.state.zoom) {
            camera.zoom = input.state.zoom;
            camera.updateProjectionMatrix();
          }
        }
        Object.entries(groups).forEach(([name, g]) => {
          const weight = weights[name];
          g.visible = weight > 0.002;
          if (!g.visible) return;
          g.scale.setScalar(
            (0.88 + weight * 0.12) *
              (name === "community" ? 1.06 : name === "probiotic" ? 1.24 : 1.2),
          );
          g.position.y = (1 - weight) * 0.18;
          g.rotation.y = (1 - weight) * (name === "pathogenic" ? -0.16 : 0.16);
          g.traverse((o) => {
            if (o.material) {
              o.material.opacity = (o.material.userData.baseOpacity ?? 1) * weight;
            }
          });
        });
        cells.forEach((c) => {
          c.group.position.x = c.position.x + Math.sin(time * 0.29 + c.phase) * 0.024;
          c.group.position.y = c.position.y + Math.sin(time * 0.37 + c.phase) * 0.055;
          c.group.rotation.y = 0.22 + Math.sin(time * 0.2 + c.phase) * 0.12;
          c.group.rotation.z = c.rotation + Math.cos(time * 0.3 + c.phase) * 0.04;
        });
        flows.forEach((f) => {
          const u = (time * f.speed + f.offset) % 1;
          f.bead.position.copy(f.path.getPoint(u));
          f.bead.scale.setScalar(0.35 + 0.65 * Math.pow(Math.sin(Math.PI * u), 0.5));
        });
        orbiters.forEach((o) => {
          if (o.center) {
            const a = o.phase + time * o.speed;
            o.object.position.set(
              Math.cos(a) * o.radius,
              Math.sin(a) * o.radius,
              Math.sin(a * 2) * 0.24,
            );
          } else {
            if (o.base === undefined) o.base = o.object.rotation[o.axis];
            o.object.rotation[o.axis] = o.base + time * o.speed;
          }
        });
        decorations.forEach((d) => {
          if (d.type === "breath")
            d.object.scale.setScalar(1 + Math.sin(time * 0.7 + d.phase) * 0.045);
          else d.object.rotation.z = Math.sin(time * 0.19 + d.phase) * 0.055;
        });
        renderer.render(scene, camera);
        canvas.dataset.frame = String(++frame);
        canvas.dataset.scene = mode;
        canvas.dataset.sceneVersion = "6";
        canvas.dataset.sceneCurrent = modes.reduce((a, b) => (weights[a] > weights[b] ? a : b));
      },
    };
  }

  function fallback() {
    let ctx;
    try {
      ctx = canvas.getContext("2d");
    } catch {}
    if (!ctx) {
      const replacement = canvas.cloneNode(false);
      canvas.replaceWith(replacement);
      canvas = replacement;
      ctx = canvas.getContext("2d");
    }
    if (!ctx) return { setMode() {}, draw() {} };
    canvas.dataset.renderer = "canvas-fallback";
    const getColors = () => [
      window.WX_VISUAL_PALETTE?.css("#75beb2") || "#75beb2",
      window.WX_VISUAL_PALETTE?.css("#b0a1ce") || "#b0a1ce",
      window.WX_VISUAL_PALETTE?.css("#9dbad3") || "#9dbad3",
      window.WX_VISUAL_PALETTE?.css("#d8a8a1") || "#d8a8a1",
    ];
    return {
      setMode() {
        dirty = true;
      },
      draw(time) {
        const colors = getColors();
        const w = canvas.clientWidth,
          h = canvas.clientHeight,
          d = Math.min(devicePixelRatio || 1, 1.5);
        if (!w || !h) return;
        if (canvas.width !== Math.round(w * d) || canvas.height !== Math.round(h * d)) {
          canvas.width = Math.round(w * d);
          canvas.height = Math.round(h * d);
        }
        ctx.setTransform(d, 0, 0, d, 0, 0);
        ctx.clearRect(0, 0, w, h);
        const s = Math.min(w / 7.2, h / 6.5) * (input?.state.zoom || 1),
          angle = Math.sin(time * 0.1) * 0.07;
        const p = (x, y, z = 0) => {
          const rx = x * Math.cos(angle) + z * Math.sin(angle),
            rz = -x * Math.sin(angle) + z * Math.cos(angle);
          const q = input?.project(rx, y, rz) || [rx, y, rz];
          return [w / 2 + q[0] * s, h / 2 - q[1] * s];
        };
        const circle = (x, y, r, color, opacity = 1, z = 0) => {
          const q = p(x, y, z);
          ctx.globalAlpha *= opacity;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(q[0], q[1], r * s, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha /= opacity || 1;
        };
        function ring(x, y, r, color, opacity = 0.4) {
          const q = p(x, y);
          ctx.save();
          ctx.globalAlpha *= opacity;
          ctx.strokeStyle = color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(
            q[0],
            q[1],
            r * s,
            r * s * Math.max(0.35, Math.cos(angle * 0.5)),
            0,
            0,
            Math.PI * 2,
          );
          ctx.stroke();
          ctx.restore();
        }
        function label(zh, en, x, y) {
          const q = p(x, y, 0.3);
          ctx.fillStyle = window.WX_VISUAL_PALETTE?.css("#4d6e7d") || "#4d6e7d";
          ctx.textAlign = "center";
          ctx.font = (w < 350 ? "11" : "13") + 'px "Times New Roman","Microsoft YaHei",serif';
          ctx.fillText(lang() === "en" ? en : zh, q[0], q[1]);
        }
        function bacteria(x, y, size, rotation, index, shape = "rod") {
          const q = p(
            x + Math.sin(time * 0.29 + index) * 0.025,
            y + Math.sin(time * 0.37 + index) * 0.05,
            0.12,
          );
          ctx.save();
          ctx.translate(q[0], q[1]);
          ctx.rotate(rotation + Math.cos(time * 0.3 + index) * 0.04);
          const r = size * s * 0.32,
            len = shape === "rod" ? size * s * 0.71 : 0,
            color = colors[index % 4],
            grad = ctx.createLinearGradient(-r, 0, r, 0);
          grad.addColorStop(0, window.WX_VISUAL_PALETTE?.css("#eef8f4") || "#eef8f4");
          grad.addColorStop(0.44, color);
          grad.addColorStop(1, window.WX_VISUAL_PALETTE?.css("#dcefea") || "#dcefea");
          ctx.fillStyle = grad;
          ctx.strokeStyle = color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(-r, -r - len / 2, r * 2, r * 2 + len, r);
          ctx.fill();
          ctx.stroke();
          ctx.strokeStyle = color;
          ctx.globalAlpha *= 0.7;
          ctx.beginPath();
          for (let j = 0; j <= 32; j++) {
            const a = (j / 32) * Math.PI * 4,
              xx = Math.sin(a * 1.4) * r * 0.32,
              yy = (j / 32 - 0.5) * (len + r * 0.6);
            j ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy);
          }
          ctx.stroke();
          for (let j = 0; j < 7; j++) {
            ctx.fillStyle = window.WX_VISUAL_PALETTE?.css("#dbc9a5") || "#dbc9a5";
            ctx.beginPath();
            ctx.arc(
              (seed(index * 11 + j) - 0.5) * r * 1.3,
              (seed(index * 17 + j) - 0.5) * (len + r),
              Math.max(0.7, s * 0.018),
              0,
              7,
            );
            ctx.fill();
          }
          ctx.restore();
        }
        function flow(a, b, color, offset = 0, bend = 0.5) {
          const u = p(...a),
            v = p(...b),
            c = [(u[0] + v[0]) / 2, (u[1] + v[1]) / 2 - bend * s];
          ctx.save();
          ctx.strokeStyle = color;
          ctx.globalAlpha *= 0.4;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(...u);
          ctx.quadraticCurveTo(...c, ...v);
          ctx.stroke();
          ctx.restore();
          for (let j = 0; j < 5; j++) {
            const t = (time * 0.13 + j / 5 + offset) % 1,
              k = 1 - t;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(
              k * k * u[0] + 2 * k * t * c[0] + t * t * v[0],
              k * k * u[1] + 2 * k * t * c[1] + t * t * v[1],
              s * 0.045 * Math.pow(Math.sin(Math.PI * t), 0.5),
              0,
              7,
            );
            ctx.fill();
          }
        }
        modes.forEach((name) => {
          const weight = weights[name];
          if (weight < 0.002) return;
          ctx.save();
          ctx.globalAlpha = weight;
          ctx.translate(w / 2, h / 2);
          const stageScale =
            (0.88 + 0.12 * weight) *
            (name === "community" ? 1.06 : name === "probiotic" ? 1.24 : 1.2);
          ctx.scale(stageScale, stageScale);
          ctx.translate(-w / 2, -h / 2 - (1 - weight) * s * 0.18);
          if (name === "probiotic") {
            bacteria(-2.08, 0.48, 0.98, 0.55, 0);
            bacteria(-1.54, -0.88, 0.7, -0.8, 1);
            bacteria(-2.15, 1.55, 0.55, -0.7, 2, "coccus");
            const q = p(1.68, 0.1);
            const grad = ctx.createRadialGradient(
              q[0] - 0.2 * s,
              q[1] - 0.3 * s,
              0.03 * s,
              q[0],
              q[1],
              0.7 * s,
            );
            grad.addColorStop(0, "#fff");
            grad.addColorStop(0.6, window.WX_VISUAL_PALETTE?.css("#d2c4e7") || "#d2c4e7");
            grad.addColorStop(1, window.WX_VISUAL_PALETTE?.css("#b8a9d4") || "#b8a9d4");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(...q, 0.7 * s, 0, 7);
            ctx.fill();
            for (let j = 0; j < 3; j++) {
              ctx.save();
              ctx.translate(...q);
              ctx.rotate(time * 0.08 + j * 1.03);
              ctx.strokeStyle = colors[j];
              ctx.globalAlpha *= 0.6;
              ctx.beginPath();
              ctx.ellipse(0, 0, (1.02 + j * 0.12) * s, 0.55 * s, 0, 0, 7);
              ctx.stroke();
              ctx.restore();
            }
            for (let j = 0; j < 8; j++) {
              const a = (j / 8) * Math.PI * 2 + time * 0.1;
              circle(1.68 + Math.cos(a) * 1.12, 0.1 + Math.sin(a) * 1.12, 0.05, colors[j % 4]);
            }
            flow(
              [-1.65, 0.55],
              [1.1, 0.36],
              window.WX_VISUAL_PALETTE?.css("#5cb7a8") || "#5cb7a8",
              0,
              0.5,
            );
            flow(
              [-1.5, -0.5],
              [1.1, -0.25],
              window.WX_VISUAL_PALETTE?.css("#ac9ace") || "#ac9ace",
              0.2,
              -0.5,
            );
            flow(
              [-1.6, 0.15],
              [1.2, 0.1],
              window.WX_VISUAL_PALETTE?.css("#96b9d0") || "#96b9d0",
              0.35,
              0.03,
            );
            label("菌株", "Strain", -1.95, -1.85);
            label("代谢信号", "Metabolites", -0.2, 1.8);
            label("宿主信号", "Host signalling", 1.7, -1.85);
          } else if (name === "pathogenic") {
            for (let j = 0; j < 7; j++) {
              const x = (j - 3) * 0.7,
                q = p(x, -0.72);
              ctx.fillStyle =
                j % 2
                  ? window.WX_VISUAL_PALETTE?.css("#cbdce9") || "#cbdce9"
                  : window.WX_VISUAL_PALETTE?.css("#d9e2ed") || "#d9e2ed";
              ctx.strokeStyle = window.WX_VISUAL_PALETTE?.css("#a6bccb") || "#a6bccb";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.roundRect(q[0] - 0.32 * s, q[1] - 0.715 * s, 0.64 * s, 1.43 * s, 0.13 * s);
              ctx.fill();
              ctx.stroke();
              circle(x, -1.03, 0.135, window.WX_VISUAL_PALETTE?.css("#b5a7cb") || "#b5a7cb", 0.75);
              for (let v = 0; v < 5; v++) {
                const r = p(x + (v - 2) * 0.105, 0.11);
                ctx.strokeStyle = window.WX_VISUAL_PALETTE?.css("#9abac0") || "#9abac0";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(r[0], r[1]);
                ctx.lineTo(r[0], r[1] - 0.16 * s);
                ctx.stroke();
              }
            }
            const left = p(-2.5, -1.56),
              right = p(2.5, -1.56);
            ctx.strokeStyle = window.WX_VISUAL_PALETTE?.css("#c0afcf") || "#c0afcf";
            ctx.lineWidth = 0.12 * s;
            ctx.beginPath();
            ctx.moveTo(...left);
            ctx.lineTo(...right);
            ctx.stroke();
            for (let j = 0; j < 2; j++) {
              ctx.strokeStyle = window.WX_VISUAL_PALETTE?.css("#b9cfd6") || "#b9cfd6";
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              for (let k = 0; k <= 55; k++) {
                const q = p(
                  -2.6 + (k / 55) * 5.2,
                  0.42 + Math.sin((k / 55) * 7.2 + j * 0.4) * 0.05 + j * 0.13,
                );
                k ? ctx.lineTo(...q) : ctx.moveTo(...q);
              }
              ctx.stroke();
            }
            bacteria(-1.35, 1.45, 0.65, 0.75, 0);
            bacteria(0.4, 1.12, 0.65, -1.17, 1);
            bacteria(1.8, 1.54, 0.47, -0.2, 2, "coccus");
            flow(
              [0.4, 0.83],
              [0.35, 0.2],
              window.WX_VISUAL_PALETTE?.css("#b98e9f") || "#b98e9f",
              0.2,
              0.13,
            );
            flow(
              [-1.35, 1.1],
              [-1.05, 0.25],
              window.WX_VISUAL_PALETTE?.css("#96b9c6") || "#96b9c6",
              0.4,
              -0.1,
            );
            label("上皮屏障", "Epithelial barrier", 0, -2.08);
          } else {
            const centers = [
              [-1.72, -0.62],
              [0, 1.22],
              [1.72, -0.62],
            ];
            centers.forEach(([x, y], cluster) => {
              ring(x, y, 1.08, colors[cluster], 0.55);
              ring(x, y, 1.17, colors[cluster], 0.2);
              for (let j = 0; j < 5; j++) {
                const a =
                    (j / 5) * Math.PI * 2 + cluster * 0.5 + Math.sin(time * 0.19 + cluster) * 0.055,
                  r = j === 4 ? 0.2 : 0.6;
                bacteria(
                  x + Math.cos(a) * r,
                  y + Math.sin(a) * r,
                  j === 4 ? 0.41 : 0.35,
                  -a,
                  cluster * 5 + j,
                  j % 2 ? "coccus" : "rod",
                );
              }
            });
            for (let j = 0; j < 3; j++)
              flow(centers[j], centers[(j + 1) % 3], colors[j], j * 0.2, 0.35);
            ring(0, 0.05, 3.03, window.WX_VISUAL_PALETTE?.css("#b8b1d1") || "#b8b1d1", 0.22);
            circle(0, -0.24, 0.13, window.WX_VISUAL_PALETTE?.css("#c9b8d8") || "#c9b8d8", 0.9);
          }
          ctx.restore();
        });
        canvas.dataset.frame = String(++frame);
        canvas.dataset.scene = mode;
        canvas.dataset.sceneVersion = "6";
        canvas.dataset.sceneCurrent = modes.reduce((a, b) => (weights[a] > weights[b] ? a : b));
      },
    };
  }

  visual = webgl() || fallback();
  wireCanvas();
  refresh();
  visual.setTheme?.();
  addEventListener("wxthemechange", () => {
    visual.setTheme?.();
    dirty = true;
  });
  if ("IntersectionObserver" in window)
    new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        last = 0;
        dirty = true;
      },
      { rootMargin: "80px" },
    ).observe(canvas);
  else visible = true;
  new ResizeObserver(() => {
    dirty = true;
  }).observe(canvas);
  new MutationObserver(() => {
    last = 0;
    dirty = true;
    refreshPlayback();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
  window.addEventListener("languagechange", refresh);
  reduced.addEventListener("change", () => {
    last = 0;
    dirty = true;
    refreshPlayback();
  });
  document.addEventListener("visibilitychange", () => {
    last = 0;
    dirty = true;
  });
  function animate(now) {
    requestAnimationFrame(animate);
    if (document.hidden || (frame > 0 && !visible)) {
      last = 0;
      return;
    }
    const elapsedDt = last ? Math.max(0, (now - last) / 1000) : 0,
      dt = Math.min(0.05, elapsedDt);
    last = now;
    const stopped = paused();
    if (stopped && !dirty) return;
    if (!stopped) {
      clock += dt;
      if (autoplay && !dragging) {
        elapsed += elapsedDt;
        if (elapsed >= interval) {
          const overflow = elapsed % interval;
          setMode(modes[(modes.indexOf(mode) + 1) % modes.length], true);
          elapsed = overflow;
        }
      }
    }
    transition.elapsed = stopped
      ? transition.duration
      : Math.min(transition.duration, transition.elapsed + elapsedDt);
    const fraction = transition.elapsed / transition.duration,
      blend = fraction * fraction * (3 - 2 * fraction);
    modes.forEach((name) => {
      weights[name] =
        transition.from[name] + (Number(name === mode) - transition.from[name]) * blend;
    });
    canvas.dataset.transitionProgress = fraction.toFixed(3);
    host.dataset.transitionProgress = fraction.toFixed(3);
    const damping = stopped ? 1 : 1 - Math.exp(-dt * 10);
    viewYaw += (yaw - viewYaw) * damping;
    viewPitch += (pitch - viewPitch) * damping;
    progress.style.transform = "scaleX(" + Math.min(1, elapsed / interval).toFixed(4) + ")";
    visual.draw(clock);
    dirty = false;
  }
  window.WX_MICROBIOME = {
    setZoom: (value) => input?.setZoom(value),
    rotate: (yaw, pitch) => input?.rotate(yaw, pitch),
    setMode,
    getMode: () => mode,
    setAutoplay,
    getAutoplay: () => autoplay,
    reset,
    info: () => ({
      mode,
      autoplay,
      elapsed,
      interval,
      weights: { ...weights },
      scene: mode,
      sceneVersion: 6,
      transitionProgress: transition.elapsed / transition.duration,
      visible,
      clock,
      renderer: canvas.dataset.renderer,
      frame,
      palette: paletteInfo,
      view: input?.info(),
      shapeKinds: ["generic rods", "generic cocci"],
    }),
  };
  requestAnimationFrame(animate);
})();

/* 10 · Embedded research interactions */
(() => {
  "use strict";
  const $ = (s) => document.querySelector(s),
    $$ = (s) => Array.from(document.querySelectorAll(s));
  const t = (key, vars) => window.WX_I18N.t(key, vars),
    en = () => window.WX_I18N.getLang() === "en";
  const reduced = matchMedia("(prefers-reduced-motion:reduce)");
  const state = {
    interest: "genetics",
    step: "tokens",
    token: 0,
    causal: "instrument",
    omics: "all",
    stage: "phd",
    basePairs: true,
    playing: true,
    poem: 0,
    auto: { llm: true, causal: true, omics: true, poem: true },
  };
  const fragments = {
    zh: ["肠道", "微生物", "与", "宿主", "免疫"],
    en: ["Gut", "microbes", "and", "host", "immunity"],
  };
  const poems = {
    zh: [
      ["微处有天地", "案头见山海"],
      ["一分想象", "十分求证"],
      ["慢慢读数据", "认真问缘由"],
      ["循着一条线索", "再多走一步"],
      ["让疑问留下", "让答案生长"],
      ["从已知出发", "向未解处行"],
      ["读到有疑处", "便是新起点"],
      ["把问题想深", "把日子过轻"],
    ],
    en: [
      ["A wider world", "in the smallest details."],
      ["Make room for ideas.", "Then test them well."],
      ["Read the data closely.", "Keep asking why."],
      ["Follow one clue.", "Take it a little further."],
      ["Stay with the question.", "Let understanding grow."],
      ["Start with what is known.", "Go where questions remain."],
      ["A question in the margin.", "A new place to begin."],
      ["Think deeply.", "Keep a little lightness."],
    ],
  };
  const cyclePeriod = 3000;
  const cycles = {
    llm: { period: cyclePeriod, elapsed: 0, hold: 0, element: "#ai-research" },
    causal: { period: cyclePeriod, elapsed: 0, hold: 0, element: "#causal-research" },
    omics: { period: cyclePeriod, elapsed: 0, hold: 0, element: "#omics-research" },
    poem: { period: cyclePeriod, elapsed: 0, hold: 0, element: ".hero-poetry" },
  };
  const sequences = {
    llm: ["tokens", "attention", "generation"],
    causal: ["instrument", "exposure", "outcome"],
    omics: ["all", "genome", "transcriptome", "proteome"],
  };
  function sceneDetails(module, notify = false, automatic = false) {
    const scene = state[module === "llm" ? "step" : module],
      index = sequences[module].indexOf(scene),
      count = sequences[module].length;
    const article = $(cycles[module].element);
    article.dataset.currentScene = scene;
    article.dataset.sceneStep = String(index + 1);
    article.dataset.sceneCount = String(count);
    $("#" + module + "-scene-number").textContent =
      String(index + 1).padStart(2, "0") + " / " + String(count).padStart(2, "0");
    $("#" + module + "-scene-caption").textContent = t("scene." + module + "." + scene);
    const canvas = $("#" + { llm: "ai", causal: "causal", omics: "omics" }[module] + "-canvas");
    canvas?.setAttribute(
      "aria-label",
      t("scene." + module + "." + scene) + ". " + t(module + ".text." + scene),
    );
    if (notify)
      dispatchEvent(
        new CustomEvent("researchscenechange", {
          detail: { module, scene, index, count, automatic },
        }),
      );
  }
  function setPressed(selector, attribute, value) {
    $$(selector).forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset[attribute] === value)),
    );
  }
  function feedback(module) {
    const el = $(cycles[module]?.element);
    if (!el) return;
    el.classList.remove("is-focused");
    void el.offsetWidth;
    el.classList.add("is-focused");
    const readout = $("#" + module + "-readout");
    if (readout) {
      readout.classList.remove("is-updated");
      void readout.offsetWidth;
      readout.classList.add("is-updated");
    }
  }
  function hold(module) {
    cycles[module].elapsed = 0;
    cycles[module].hold = cyclePeriod;
    updateProgress(module);
    feedback(module);
  }
  function renderTokens() {
    const restore = document.activeElement?.matches("button[data-token-focus]");
    $("#token-rail").innerHTML = fragments[en() ? "en" : "zh"]
      .map(
        (text, index) =>
          '<button type="button" data-token-focus="' +
          index +
          '" aria-pressed="' +
          (index === state.token) +
          '" aria-label="' +
          t("llm.focusToken", { token: text }) +
          '">' +
          text +
          "</button>",
      )
      .join("");
    if (restore)
      $('#token-rail [data-token-focus="' + state.token + '"]').focus({ preventScroll: true });
  }
  function renderInterest() {
    setPressed("button[data-interest]", "interest", state.interest);
    $("#about-focus-text").textContent = t("about.focus." + state.interest);
  }
  function renderFlow(module, sync = true, automatic = false) {
    if (module === "llm") {
      setPressed("button[data-llm-step]", "llmStep", state.step);
      $("#llm-readout").textContent = t("llm.text." + state.step);
      setPressed("button[data-token-focus]", "tokenFocus", String(state.token));
      if (sync) {
        window.WX_SCENES?.setLLMStep(state.step);
        window.WX_SCENES?.setTokenFocus(state.token);
      }
    } else {
      setPressed("button[data-" + module + "]", module, state[module]);
      $("#" + module + "-readout").textContent = t(module + ".text." + state[module]);
      if (sync) {
        if (module === "causal") window.WX_SCENES?.setCausalFocus(state.causal);
        else window.WX_SCENES?.setOmicsLayer(state.omics);
      }
    }
    sceneDetails(module, sync, automatic);
    const button = $("#" + module + "-play");
    button.textContent = t(state.auto[module] ? "flow.pause" : "flow.play");
    button.setAttribute("aria-pressed", String(state.auto[module]));
    state.playing = state.auto.llm;
    updateProgress(module);
  }
  function renderStage() {
    $$("[data-stage-select]").forEach((b) => {
      const selected = b.dataset.stageSelect === state.stage;
      b.setAttribute("aria-selected", String(selected));
      b.tabIndex = selected ? 0 : -1;
      b.classList.toggle("is-selected", selected);
    });
    $("#journey-panel").setAttribute("aria-labelledby", "stage-" + state.stage);
    $("#journey-panel-title").textContent = t("journey.panel." + state.stage + "Title");
    $("#journey-panel-text").textContent = t("journey.panel." + state.stage);
  }
  let poemTimer;
  function renderPoem(animate = false) {
    clearTimeout(poemTimer);
    const lines = $("#poem-lines");
    const paint = () => {
      const words = poems[en() ? "en" : "zh"][state.poem];
      Array.from(lines.children).forEach((p, i) => (p.textContent = words[i]));
      $("#poem-counter").textContent = String(state.poem + 1).padStart(2, "0") + " / 08";
      lines.dataset.poem = String(state.poem);
      lines.classList.remove("is-changing");
    };
    if (animate && !reduced.matches && document.documentElement.dataset.motion !== "paused") {
      lines.classList.add("is-changing");
      poemTimer = setTimeout(paint, 420);
    } else paint();
    $("#poem-pause").setAttribute("aria-pressed", String(!state.auto.poem));
    $("#poem-pause").setAttribute("aria-label", t(state.auto.poem ? "poem.pause" : "poem.play"));
    $("#poem-pause").textContent = state.auto.poem ? "Ⅱ" : "▷";
  }
  function updateProgress(module) {
    if (module === "poem") return;
    const cycle = cycles[module],
      el = $("#" + module + "-progress");
    el.style.setProperty(
      "--flow-progress",
      String(Math.min(1, cycle.elapsed / (cycle.hold || cycle.period))),
    );
    const blocked = document.documentElement.dataset.motion === "paused" || reduced.matches;
    el.classList.toggle("is-paused", !state.auto[module] || blocked);
    const button = $("#" + module + "-play");
    button.disabled = blocked;
    button.setAttribute("aria-pressed", String(!blocked && state.auto[module]));
    const label = blocked
      ? en()
        ? "Motion paused"
        : "动效已暂停"
      : t(state.auto[module] ? "flow.pause" : "flow.play");
    if (button.textContent !== label) button.textContent = label;
  }
  function advance(module) {
    if (module === "poem") {
      state.poem = (state.poem + 1) % 8;
      renderPoem(true);
      return;
    }
    const values = sequences[module];
    const key = module === "llm" ? "step" : module;
    state[key] = values[(values.indexOf(state[key]) + 1) % values.length];
    if (module === "llm" && state.step === "tokens") state.token = (state.token + 1) % 5;
    renderFlow(module, true, true);
  }
  function inView(selector) {
    const el = $(selector);
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.bottom > 100 && r.top < innerHeight - 60 && r.width > 0;
  }
  let last = performance.now();
  setInterval(() => {
    const now = performance.now(),
      dt = Math.max(0, now - last);
    last = now;
    const canRun =
      !document.hidden && !reduced.matches && document.documentElement.dataset.motion !== "paused";
    for (const [module, cycle] of Object.entries(cycles)) {
      if (
        canRun &&
        state.auto[module] &&
        !window.WX_RESEARCH_INPUTS?.get(module)?.state.dragging &&
        inView(cycle.element)
      ) {
        cycle.elapsed += dt;
        if (cycle.elapsed >= (cycle.hold || cycle.period)) {
          cycle.elapsed %= cycle.hold || cycle.period;
          cycle.hold = 0;
          advance(module);
        }
      }
      if (module !== "poem") updateProgress(module);
    }
  }, 100);
  document.addEventListener("visibilitychange", () => {
    last = performance.now();
  });
  addEventListener("researchviewchange", (event) => {
    const cycle = cycles[event.detail?.module];
    if (cycle) {
      cycle.elapsed = 0;
      cycle.hold = cyclePeriod;
      updateProgress(event.detail.module);
    }
  });
  addEventListener("researchviewgesture", (event) => {
    const cycle = cycles[event.detail?.module];
    if (cycle) {
      cycle.elapsed = 0;
      cycle.hold = cyclePeriod;
    }
  });
  $$("button[data-interest]").forEach((b) =>
    b.addEventListener("click", () => {
      state.interest = b.dataset.interest;
      renderInterest();
    }),
  );
  $$("button[data-llm-step]").forEach((b) =>
    b.addEventListener("click", () => {
      state.step = b.dataset.llmStep;
      renderFlow("llm");
      hold("llm");
    }),
  );
  $("#token-rail").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-token-focus]");
    if (!b) return;
    state.token = Number(b.dataset.tokenFocus);
    state.step = "attention";
    renderFlow("llm");
    hold("llm");
  });
  for (const module of ["llm", "causal", "omics"]) {
    $("#" + module + "-play").addEventListener("click", () => {
      state.auto[module] = !state.auto[module];
      cycles[module].elapsed = 0;
      cycles[module].hold = 0;
      renderFlow(module, false);
    });
    if (module !== "llm")
      $$("button[data-" + module + "]").forEach((b) =>
        b.addEventListener("click", () => {
          state[module] = b.dataset[module];
          renderFlow(module);
          hold(module);
        }),
      );
    const group = $(cycles[module].element + " .module-options");
    group.addEventListener("keydown", (e) => {
      if (
        !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key) ||
        !e.target.matches("button")
      )
        return;
      e.preventDefault();
      const buttons = Array.from(group.querySelectorAll("button"));
      let index = buttons.indexOf(e.target);
      index =
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? buttons.length - 1
            : (index + (e.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
      buttons[index].focus({ preventScroll: true });
      buttons[index].click();
    });
  }
  $("#poem-prev").addEventListener("click", () => {
    state.poem = (state.poem + 7) % 8;
    hold("poem");
    renderPoem(true);
  });
  $("#poem-next").addEventListener("click", () => {
    state.poem = (state.poem + 1) % 8;
    hold("poem");
    renderPoem(true);
  });
  $("#poem-pause").addEventListener("click", () => {
    state.auto.poem = !state.auto.poem;
    cycles.poem.elapsed = 0;
    cycles.poem.hold = 0;
    renderPoem();
  });
  const stageButtons = $$("[data-stage-select]");
  stageButtons.forEach((b) => {
    b.addEventListener("click", () => {
      state.stage = b.dataset.stageSelect;
      renderStage();
    });
    b.addEventListener("keydown", (e) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
        return;
      e.preventDefault();
      let index = stageButtons.indexOf(b);
      if (e.key === "Home") index = 0;
      else if (e.key === "End") index = stageButtons.length - 1;
      else
        index =
          (index + (["ArrowRight", "ArrowDown"].includes(e.key) ? 1 : -1) + stageButtons.length) %
          stageButtons.length;
      state.stage = stageButtons[index].dataset.stageSelect;
      renderStage();
      stageButtons[index].focus();
    });
  });
  $("#basepairs-toggle").addEventListener("click", () => {
    state.basePairs = !state.basePairs;
    $("#basepairs-toggle").setAttribute("aria-pressed", String(state.basePairs));
    window.WX_SCENES?.setBasePairs(state.basePairs);
  });
  function renderZoom() {
    const zoom = window.WX_SCENES?.getZoom?.() || 1;
    $("#helix-zoom").value = String(zoom);
    $("#zoom-value").textContent = Math.round(zoom * 100) + "%";
    $("#zoom-in").disabled = zoom >= 1.65;
    $("#zoom-out").disabled = zoom <= 0.75;
  }
  $("#helix-zoom").addEventListener("input", (e) => {
    window.WX_SCENES?.setZoom?.(Number(e.target.value));
    renderZoom();
  });
  $("#zoom-in").addEventListener("click", () => {
    window.WX_SCENES?.setZoom?.((window.WX_SCENES.getZoom?.() || 1) + 0.15);
    renderZoom();
  });
  $("#zoom-out").addEventListener("click", () => {
    window.WX_SCENES?.setZoom?.((window.WX_SCENES.getZoom?.() || 1) - 0.15);
    renderZoom();
  });
  addEventListener("zoomchange", renderZoom);
  const disclosure = $("#dna-discovery"),
    openButton = $("#open-dna");
  openButton.setAttribute("aria-controls", "dna-discovery");
  openButton.setAttribute("aria-expanded", String(disclosure.open));
  openButton.addEventListener("click", () => {
    disclosure.open = true;
    openButton.setAttribute("aria-expanded", "true");
    disclosure.scrollIntoView({ behavior: reduced.matches ? "instant" : "smooth", block: "start" });
  });
  disclosure.addEventListener("toggle", () =>
    openButton.setAttribute("aria-expanded", String(disclosure.open)),
  );
  function renderAll(sync = false) {
    renderInterest();
    renderTokens();
    for (const module of ["llm", "causal", "omics"]) renderFlow(module, sync);
    renderStage();
    renderPoem();
    renderZoom();
  }
  addEventListener("languagechange", () => renderAll(false));
  window.WX_INTERACTIONS = {
    getState: () => ({ ...state, auto: { ...state.auto } }),
    getTimings: () =>
      Object.fromEntries(
        Object.entries(cycles).map(([name, cycle]) => [
          name,
          { period: cycle.period, elapsed: cycle.elapsed, hold: cycle.hold },
        ]),
      ),
  };
  renderAll(true);
})();

/* 11 · Navigation, publications and page behaviour */
(() => {
  "use strict";
  const $ = (s) => document.querySelector(s),
    $$ = (s) => Array.from(document.querySelectorAll(s));
  const t = (key, vars) => window.WX_I18N.t(key, vars),
    en = () => window.WX_I18N.getLang() === "en";
  const esc = (v) =>
    String(v ?? "").replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    );
  const scientific = (value, paper) => window.WX_ACADEMIC?.format(value, paper) || esc(value);
  const header = $("#site-header"),
    menuButton = $(".menu-toggle"),
    menu = $("#mobile-nav");
  function menuLabel() {
    const open = !menu.hidden;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"));
    menuButton.dataset.i18nAria = open ? "nav.close" : "nav.open";
  }
  function closeMenu(returnFocus = false) {
    menu.hidden = true;
    menuLabel();
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
    menuLabel();
  });
  $$("#mobile-nav a").forEach((a) => a.addEventListener("click", () => closeMenu()));
  document.addEventListener("click", (e) => {
    if (!menu.hidden && !header.contains(e.target)) closeMenu();
  });
  matchMedia("(min-width:1181px)").addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });
  const info = $("#model-info"),
    infoButton = $("#model-info-button");
  function closeInfo() {
    info.hidden = true;
    infoButton.setAttribute("aria-expanded", "false");
  }
  infoButton.addEventListener("click", () => {
    info.hidden = !info.hidden;
    infoButton.setAttribute("aria-expanded", String(!info.hidden));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!menu.hidden) closeMenu(true);
      if (!info.hidden) {
        closeInfo();
        infoButton.focus();
      }
    }
  });
  document.addEventListener("click", (e) => {
    if (!info.hidden && !info.contains(e.target) && !infoButton.contains(e.target)) closeInfo();
  });
  $("#rotate-left").addEventListener("click", () => window.WX_SCENES?.rotate(-0.3, 0));
  $("#rotate-right").addEventListener("click", () => window.WX_SCENES?.rotate(0.3, 0));
  $("#reset-model").addEventListener("click", () => {
    window.WX_SCENES?.reset();
    $("#molecule-readout").textContent = "";
  });

  const navLinks = $$("[data-section-link]");
  const sectionIds = [...new Set(navLinks.map((link) => link.hash.slice(1)))];
  const sections = [...document.querySelectorAll("main > section[id]")].filter((section) =>
    sectionIds.includes(section.id),
  );
  const navCopy = {
    zh: {
      about: "关于我",
      research: "研究与工具",
      journey: "学术轨迹",
      publications: "学术成果",
      "art-gallery": "研究画廊",
    },
    en: {
      about: "About",
      research: "Research",
      journey: "Journey",
      publications: "Publications",
      "art-gallery": "Gallery",
    },
  };
  let scrollPending = false,
    navTarget = null,
    navUntil = 0,
    activeSection = "";
  function updateNavLabels() {
    const copy = navCopy[en() ? "en" : "zh"];
    navLinks.forEach((link) => {
      link.textContent = copy[link.hash.slice(1)] || link.textContent;
    });
  }
  function setActiveSection(id) {
    activeSection = id;
    navLinks.forEach((a) => {
      if (a.hash === "#" + id) a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    });
  }
  function updateScroll() {
    scrollPending = false;
    header.classList.toggle("scrolled", scrollY > 24);
    const total = document.documentElement.scrollHeight - innerHeight;
    $("#reading-progress").style.transform =
      "scaleX(" + Math.max(0, Math.min(1, total ? scrollY / total : 0)) + ")";
    const line = header.getBoundingClientRect().bottom + Math.min(90, innerHeight * 0.12);
    let active = "";
    for (const section of sections)
      if (section.getBoundingClientRect().top <= line) active = section.id;
    if (navTarget && performance.now() < navUntil) {
      const target = document.getElementById(navTarget);
      if (target && Math.abs(target.getBoundingClientRect().top - header.offsetHeight - 22) > 3)
        active = navTarget;
      else navTarget = null;
    } else navTarget = null;
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 8 && sections.length)
      active = sections[sections.length - 1].id;
    setActiveSection(active);
  }
  function navigateToSection(id, { history = true } = {}) {
    const target = document.getElementById(id);
    if (!target) return false;
    closeMenu();
    navTarget = id;
    navUntil = performance.now() + 1700;
    setActiveSection(id);
    if (history && location.hash !== "#" + id) window.history.pushState(null, "", "#" + id);
    window.scrollTo({
      top: Math.max(0, target.getBoundingClientRect().top + scrollY - header.offsetHeight - 22),
      behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "instant" : "smooth",
    });
    return true;
  }
  navLinks.forEach((link) =>
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      navigateToSection(link.hash.slice(1));
    }),
  );
  addEventListener(
    "wheel",
    () => {
      navTarget = null;
    },
    { passive: true },
  );
  addEventListener(
    "touchstart",
    () => {
      navTarget = null;
    },
    { passive: true },
  );
  addEventListener(
    "scroll",
    () => {
      if (!scrollPending) {
        scrollPending = true;
        requestAnimationFrame(updateScroll);
      }
    },
    { passive: true },
  );
  addEventListener("resize", updateScroll);
  addEventListener("scrollend", updateScroll);
  new ResizeObserver(() => {
    if (!scrollPending) {
      scrollPending = true;
      requestAnimationFrame(updateScroll);
    }
  }).observe(document.getElementById("main"));
  updateNavLabels();
  updateScroll();
  window.WX_NAV = {
    go: navigateToSection,
    info: () => ({
      active: activeSection,
      order: sections.map((section) => section.id),
      links: navLinks.map((link) => ({
        target: link.hash,
        label: link.textContent,
        current: link.hasAttribute("aria-current"),
      })),
    }),
  };
  const papers = window.PUBLICATIONS || [],
    list = $("#publication-list"),
    more = $("#more-publications");
  const categories = {
    immune: "immune inflammation bowel IBD 免疫 炎症 肠病",
    metabolic: "metabolism obesity diabetes 代谢 肥胖 糖尿病",
    neuro: "neurology ataxia stroke 神经 共济失调 卒中",
    platform: "platform database 平台 数据库 结构变异",
  };
  let year = "all",
    expanded = false,
    topic = "all",
    lastRandom = "",
    pathway = null;
  const pathwayBar = document.createElement("div");
  pathwayBar.className = "publication-pathway";
  pathwayBar.hidden = true;
  pathwayBar.innerHTML = '<span></span><button type="button"></button>';
  list.before(pathwayBar);
  function citation(p) {
    return (
      p.authors +
      " " +
      p.title +
      " " +
      p.journal +
      ". " +
      (p.detail || p.year) +
      "." +
      (p.doi ? " doi: " + p.doi + "." : "")
    );
  }
  function paperHTML(p, openIds) {
    const authors =
      p.id === "pub-2025-sv4gd"
        ? esc(p.authors)
        : esc(p.authors).replace(/\bWang X\*?/g, "<strong>$&</strong>");
    return (
      '<article class="publication" data-paper-id="' +
      esc(p.id) +
      '"><div class="pub-year">' +
      p.year +
      '</div><div class="pub-content"><div class="pub-topline"><em class="pub-journal journal">' +
      esc(p.journal) +
      '</em><span class="pub-author-role">' +
      t(p.cofirst ? "papers.cofirst" : "papers.collaboration") +
      "</span>" +
      (window.WX_CITATIONS?.badgeHTML(p) || "") +
      '</div><h3 class="pub-title" lang="en">' +
      scientific(p.title, p) +
      '</h3><div class="pub-footer"><details class="pub-details"' +
      (openIds.has(p.id) ? " open" : "") +
      "><summary>" +
      t("papers.authors") +
      '</summary><div class="pub-detail-content"><p class="pub-summary">' +
      scientific(en() ? p.summaryEn : p.summary, p) +
      '</p><p class="pub-author" lang="en">' +
      authors +
      '</p><p lang="en"><em class="journal">' +
      esc(p.journal) +
      "</em> · " +
      esc(p.detail || p.year) +
      "</p>" +
      (p.doi ? "<p>DOI: " + esc(p.doi) + "</p>" : "") +
      '</div></details><div class="pub-right"><button type="button" data-copy="' +
      esc(p.id) +
      '">' +
      t("papers.copy") +
      "</button>" +
      (window.WX_CITATIONS?.scholarHTML(p) || "") +
      (p.doi
        ? '<a href="https://doi.org/' +
          encodeURI(p.doi) +
          '" target="_blank" rel="noopener noreferrer" aria-label="' +
          esc(t("papers.original") + ": " + p.title) +
          '">' +
          t("papers.original") +
          " ↗</a>"
        : "") +
      "</div></div></div></article>"
    );
  }
  function updateYears() {
    $$("[data-year]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.year === year)),
    );
  }
  function render(resetExpansion = false, preserveDetails = false) {
    if (resetExpansion) expanded = false;
    const openIds = new Set(
      preserveDetails
        ? $$(".publication")
            .filter((el) => el.querySelector("details[open]"))
            .map((el) => el.dataset.paperId)
        : [],
    );
    const query = $("#paper-search").value.trim().toLocaleLowerCase(),
      cofirst = $("#cofirst-only").checked;
    const topicMatch = (p) =>
      topic === "all" ||
      (topic === "microbiome"
        ? /gut microbiom|microbiot|肠道微生物|菌群/i.test(
            [p.title, p.summary, p.summaryEn].join(" "),
          )
        : p.category === topic);
    const matches = papers.filter(
      (p) =>
        (!pathway || pathway.ids.includes(p.id)) &&
        topicMatch(p) &&
        (year === "all" || String(p.year) === year) &&
        (!cofirst || p.cofirst) &&
        (!query ||
          [
            p.title,
            p.authors,
            p.journal,
            p.summary,
            p.summaryEn,
            p.doi,
            p.year,
            categories[p.category],
          ]
            .join(" ")
            .toLocaleLowerCase()
            .includes(query)),
    );
    const visible = expanded ? matches : matches.slice(0, 4);
    $("#publication-count").textContent = t("papers.count", { count: matches.length });
    $$("[data-topic]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.topic === topic)),
    );
    $("#clear-paper-filters").hidden =
      !pathway && year === "all" && topic === "all" && !query && !cofirst;
    pathwayBar.hidden = !pathway;
    if (pathway) {
      pathwayBar.querySelector("span").textContent =
        (en() ? "Research thread: " : "研究脉络：") + pathway.label[en() ? "en" : "zh"];
      pathwayBar.querySelector("button").textContent = en() ? "Show all papers" : "查看全部论文";
    }
    list.innerHTML = visible.length
      ? visible.map((p) => paperHTML(p, openIds)).join("")
      : '<div class="empty-state"><h3>' +
        t("papers.emptyTitle") +
        "</h3><p>" +
        t("papers.emptyText") +
        '</p><button type="button" id="reset-filters">' +
        t("papers.reset") +
        " ↻</button></div>";
    more.hidden = matches.length <= 4;
    more.innerHTML =
      t(expanded ? "papers.less" : "papers.more", { count: Math.max(0, matches.length - 4) }) +
      ' <span aria-hidden="true">' +
      (expanded ? "↑" : "↓") +
      "</span>";
    $("#reset-filters")?.addEventListener("click", () => {
      resetFilters();
      $('[data-year="all"]').focus();
    });
    updateScroll();
  }

  function resetFilters() {
    year = "all";
    topic = "all";
    pathway = null;
    $("#paper-search").value = "";
    $("#cofirst-only").checked = false;
    updateYears();
    render(true);
  }
  pathwayBar.querySelector("button").addEventListener("click", resetFilters);
  function showResearchPapers(ids, label) {
    const valid = [...new Set(ids)].filter((id) => papers.some((p) => p.id === id));
    if (!valid.length) return false;
    year = "all";
    topic = "all";
    pathway = { ids: valid, label: label || { zh: "相关研究", en: "Connected research" } };
    $("#paper-search").value = "";
    $("#cofirst-only").checked = false;
    updateYears();
    expanded = true;
    render();
    return true;
  }
  window.WX_PUBLICATIONS = {
    show: (ids, label) => {
      if (!showResearchPapers(ids, label)) return false;
      navigateToSection("publications");
      return true;
    },
    focus: (id) => {
      if (!showResearchPapers([id], { zh: "逐篇阅读", en: "Selected paper" })) return false;
      const article = list.querySelector('[data-paper-id="' + id + '"]');
      article.querySelector("details").open = true;
      article.classList.add("is-map-target");
      article.tabIndex = -1;
      closeMenu();
      navTarget = "publications";
      navUntil = performance.now() + 1700;
      setActiveSection("publications");
      if (location.hash !== "#publications") history.pushState(null, "", "#publications");
      article.focus({ preventScroll: true });
      window.scrollTo({
        top: Math.max(0, article.getBoundingClientRect().top + scrollY - header.offsetHeight - 24),
        behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "instant" : "smooth",
      });
      return true;
    },
    info: () => ({
      pathway: pathway ? { ids: pathway.ids.slice(), label: { ...pathway.label } } : null,
      expanded,
      visible: [...list.querySelectorAll("[data-paper-id]")].map((el) => el.dataset.paperId),
    }),
  };
  $("#clear-paper-filters").addEventListener("click", resetFilters);
  $$("[data-topic]").forEach((b) =>
    b.addEventListener("click", () => {
      topic = b.dataset.topic;
      render(true);
    }),
  );
  $("#random-paper").addEventListener("click", () => {
    const options = papers.filter((p) => p.id !== lastRandom),
      paper = options[Math.floor(Math.random() * options.length)];
    if (!paper) return;
    lastRandom = paper.id;
    year = "all";
    topic = "all";
    pathway = null;
    $("#cofirst-only").checked = false;
    $("#paper-search").value = paper.title;
    updateYears();
    render(true);
  });
  $$("[data-year]").forEach((b) =>
    b.addEventListener("click", () => {
      year = b.dataset.year;
      updateYears();
      render(true);
    }),
  );
  $("#paper-search").addEventListener("input", () => render(true));
  $("#cofirst-only").addEventListener("change", () => render(true));
  more.addEventListener("click", () => {
    const wasExpanded = expanded;
    expanded = !expanded;
    render(false, true);
    if (wasExpanded)
      $("#publications").scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "instant" : "smooth",
      });
  });
  let toastTimer;
  function toast(text) {
    $("#toast").textContent = text;
    $("#toast").classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $("#toast").classList.remove("visible"), 3000);
  }
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {}
    }
    const focus = document.activeElement,
      field = document.createElement("textarea");
    field.value = text;
    field.readOnly = true;
    field.style.cssText = "position:fixed;top:0;left:-9999px";
    document.body.append(field);
    field.select();
    let success = false;
    try {
      success = document.execCommand("copy");
    } catch {}
    field.remove();
    focus?.focus({ preventScroll: true });
    return success;
  }
  list.addEventListener("click", async (e) => {
    const button = e.target.closest("[data-copy]");
    if (!button) return;
    const paper = papers.find((p) => p.id === button.dataset.copy);
    if (paper) toast(t((await copyText(citation(paper))) ? "papers.copied" : "papers.copyFailed"));
  });
  addEventListener("languagechange", () => {
    menuLabel();
    updateNavLabels();
    render(false, true);
    $("#toast").classList.remove("visible");
  });
  addEventListener("citationschange", () => render(false, true));
  render();
  menuLabel();
})();

/* 12 · Ambient page motion */
/* Progressive decorative motion. No text, scientific model or interaction state is changed. */
(() => {
  "use strict";
  const root = document.documentElement;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  const cards = Array.from(document.querySelectorAll(".research-bento .research-item"));
  const activeTimers = new Map();
  const pendingPointers = new Map();
  let pointerFrame = 0;
  const running = () => !reduced.matches && !document.hidden && root.dataset.motion !== "paused";
  const inView = (el) => {
    const box = el.getBoundingClientRect();
    return box.bottom > 0 && box.top < innerHeight && box.width > 0;
  };

  function syncMotion() {
    root.dataset.ambience = running() ? "running" : "paused";
    if (!running()) {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      pendingPointers.clear();
      cards.forEach((card) => {
        card.classList.remove("amb-hover");
        card.style.setProperty("--amb-shift-x", "0px");
        card.style.setProperty("--amb-shift-y", "0px");
      });
      document
        .querySelectorAll(".amb-arrive,.amb-panel-shift,.amb-poem-shift,.amb-shift")
        .forEach((el) =>
          el.classList.remove("amb-arrive", "amb-panel-shift", "amb-poem-shift", "amb-shift"),
        );
      activeTimers.forEach(clearTimeout);
      activeTimers.clear();
    }
  }
  new MutationObserver(syncMotion).observe(root, {
    attributes: true,
    attributeFilter: ["data-motion"],
  });
  document.addEventListener("visibilitychange", syncMotion);
  reduced.addEventListener("change", syncMotion);
  fine.addEventListener("change", () => {
    pendingPointers.clear();
    cards.forEach((card) => card.classList.remove("amb-hover"));
  });
  syncMotion();

  const arrivalTargets = Array.from(
    document.querySelectorAll(
      ".section-heading,.about-portrait,.about-copy,.research-stats,.research-bento .research-item,.journey-grid,.closing-inner",
    ),
  );
  arrivalTargets.forEach((el, index) => {
    el.dataset.ambReveal = "ready";
    el.style.setProperty("--amb-delay", Math.min((index % 3) * 65, 130) + "ms");
  });
  const decorationTargets = Array.from(
    document.querySelectorAll(
      ".research-bento .research-item,.cloud-rule,.journey-stage,.hero-poetry",
    ),
  );
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;
          el.classList.toggle("amb-inview", entry.isIntersecting);
          if (entry.isIntersecting && el.dataset.ambReveal === "ready") {
            el.dataset.ambReveal = "shown";
            if (running()) el.classList.add("amb-arrive");
          }
          if (!entry.isIntersecting) el.classList.remove("amb-hover");
        }
      },
      { threshold: 0.04 },
    );
    new Set([...arrivalTargets, ...decorationTargets]).forEach((el) => observer.observe(el));
  } else {
    decorationTargets.forEach((el) => el.classList.add("amb-inview"));
    arrivalTargets.forEach((el) => (el.dataset.ambReveal = "shown"));
  }
  document.addEventListener("animationend", (event) => {
    if (event.animationName === "amb-arrive") event.target.classList.remove("amb-arrive");
  });

  function flushPointers() {
    pointerFrame = 0;
    if (!running() || !fine.matches) {
      pendingPointers.clear();
      return;
    }
    for (const [card, pointer] of pendingPointers) {
      if (!card.classList.contains("amb-inview")) continue;
      const rect = card.getBoundingClientRect(),
        x = pointer.x - rect.left,
        y = pointer.y - rect.top;
      card.style.setProperty("--amb-x", x.toFixed(1) + "px");
      card.style.setProperty("--amb-y", y.toFixed(1) + "px");
      card.style.setProperty(
        "--amb-shift-x",
        ((x / Math.max(1, rect.width) - 0.5) * 3.4).toFixed(2) + "px",
      );
      card.style.setProperty(
        "--amb-shift-y",
        ((y / Math.max(1, rect.height) - 0.5) * 2.5).toFixed(2) + "px",
      );
      card.classList.add("amb-hover");
    }
    pendingPointers.clear();
  }
  cards.forEach((card) => {
    card.addEventListener(
      "pointermove",
      (event) => {
        if (!running() || !fine.matches || event.pointerType === "touch") return;
        pendingPointers.set(card, { x: event.clientX, y: event.clientY });
        if (!pointerFrame) pointerFrame = requestAnimationFrame(flushPointers);
      },
      { passive: true },
    );
    card.addEventListener(
      "pointerleave",
      () => {
        pendingPointers.delete(card);
        card.classList.remove("amb-hover");
        card.style.setProperty("--amb-shift-x", "0px");
        card.style.setProperty("--amb-shift-y", "0px");
      },
      { passive: true },
    );
  });

  function pulse(el, className, duration) {
    if (!el || !running() || !inView(el)) return;
    const key = className + ":" + (el.id || el.className.split(" ")[0]);
    clearTimeout(activeTimers.get(key));
    el.classList.remove(className);
    // One flush per deliberate state transition; nothing is measured in an idle frame loop.
    void el.offsetWidth;
    el.classList.add(className);
    activeTimers.set(
      key,
      setTimeout(() => {
        el.classList.remove(className);
        activeTimers.delete(key);
      }, duration),
    );
  }
  addEventListener("researchscenechange", (event) => {
    const module = event.detail?.module;
    const card = document.getElementById(
      {
        llm: "ai-research",
        ai: "ai-research",
        causal: "causal-research",
        omics: "omics-research",
        microbiome: "microbiome-research",
        micro: "microbiome-research",
      }[module] || "",
    );
    pulse(card, "amb-shift", 1300);
  });
  const poems = document.getElementById("poem-lines");
  if (poems)
    new MutationObserver(() =>
      pulse(document.querySelector(".hero-poetry"), "amb-poem-shift", 1850),
    ).observe(poems, { attributes: true, attributeFilter: ["data-poem"] });

  const stageButtons = Array.from(document.querySelectorAll(".journey-stage"));
  const fitTracks = () =>
    stageButtons.forEach((button) => {
      const line = button.querySelector(".stage-line");
      if (line)
        button.style.setProperty("--amb-line-travel", Math.max(0, line.clientWidth - 6) + "px");
    });
  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(fitTracks);
    stageButtons.forEach((button) => resizeObserver.observe(button));
  }
  fitTracks();
  const stageList = document.querySelector(".journey-grid");
  if (stageList)
    new MutationObserver((records) => {
      if (records.some((record) => record.target.getAttribute("aria-selected") === "true"))
        pulse(document.getElementById("journey-panel"), "amb-panel-shift", 550);
    }).observe(stageList, { subtree: true, attributes: true, attributeFilter: ["aria-selected"] });

  window.WX_AMBIENCE = {
    info: () => ({
      running: running(),
      pointer: fine.matches,
      visibleDecorations: decorationTargets.filter((el) => el.classList.contains("amb-inview"))
        .length,
      arrived: arrivalTargets.filter((el) => el.dataset.ambReveal === "shown").length,
      pendingPointers: pendingPointers.size,
    }),
  };
})();

/* 13 · Scholarly artwork */
/* Decorative, responsive scholarly artwork. The real bibliography remains the source of truth. */
(() => {
  "use strict";
  const html = document.documentElement;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const papers = Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS : [];
  const publications = document.getElementById("publications");
  const journey = document.getElementById("journey");
  if (!publications || !journey) return;
  let palette = {
    primary: "#277c7c",
    secondary: "#ce6550",
    accent: "#c19c60",
    ink: "#183e43",
    paper: "#faf5e9",
  };
  let raf = 0,
    last = 0,
    time = 0,
    frames = 0,
    dirty = true,
    selectedPaper = "",
    burst = 0;
  const renderStats = { totalMs: 0, maxMs: 0 };
  let filtered = false,
    shown = new Set(),
    stage = "phd";
  const scenes = [];
  const motionAllowed = () =>
    !document.hidden && !reduced.matches && html.dataset.motion !== "paused";
  const rgbCache = new Map(),
    spriteCache = new Map();
  const rgba = (hex, alpha) => {
    if (!rgbCache.has(hex)) {
      const raw = String(hex || "#277c7c").replace("#", "");
      const value = parseInt(
        raw.length === 3
          ? raw
              .split("")
              .map((v) => v + v)
              .join("")
          : raw,
        16,
      );
      rgbCache.set(hex, `${(value >> 16) & 255},${(value >> 8) & 255},${value & 255}`);
    }
    return `rgba(${rgbCache.get(hex)},${alpha})`;
  };
  const TAU = Math.PI * 2;
  const mix = (a, b, t) => a + (b - a) * t;
  const point = (angle, radius, y, rotation, tilt) => {
    const px = Math.cos(angle) * radius,
      pz = Math.sin(angle) * radius;
    const x = px * Math.cos(rotation) + pz * Math.sin(rotation),
      z = -px * Math.sin(rotation) + pz * Math.cos(rotation);
    return {
      x,
      y: y * Math.cos(tilt) - z * Math.sin(tilt),
      z: y * Math.sin(tilt) + z * Math.cos(tilt),
    };
  };
  // Static samples are shared by every frame; moving lights use the analytic curve, never an indexed sample.
  const paperLoops = Array.from({ length: 3 }, (_, band) =>
    Array.from({ length: 113 }, (_, i) => {
      const a = (i / 112) * TAU,
        r = 1.14 + band * 0.055;
      return { x: Math.cos(a) * r, y: Math.sin(a * 2 + band * 0.8) * 0.13, z: Math.sin(a) * r };
    }),
  );
  const journeyLoop = Array.from({ length: 81 }, (_, i) => {
    const a = (i / 80) * TAU;
    return { x: Math.cos(a), y: Math.sin(a * 2) * 0.035, z: Math.sin(a) };
  });
  const traceSamples = Array.from({ length: 101 }, (_, i) => {
    const u = i / 100;
    return { u, sin: Math.sin(u * TAU), cos: Math.cos(u * TAU), rise: Math.sin(u * Math.PI) };
  });
  const paperNodes = papers.map((paper, i) => {
    const y = 1 - ((i + 0.5) / Math.max(1, papers.length)) * 2,
      r = Math.sqrt(Math.max(0, 1 - y * y)) * 0.83,
      a = i * 2.399963229728653;
    return {
      paper,
      i,
      baseX: Math.cos(a) * r,
      baseY: y * 0.78,
      baseZ: Math.sin(a) * r,
      x: 0,
      y: 0,
      z: 0,
      active: true,
      selected: false,
    };
  });
  const depthNodes = paperNodes.slice();

  function orbitPath(ctx, samples, cx, cy, sx, sy, rotation, tilt, color, width, opacity) {
    const cr = Math.cos(rotation),
      sr = Math.sin(rotation),
      ct = Math.cos(tilt),
      st = Math.sin(tilt);
    ctx.beginPath();
    for (let i = 0; i < samples.length; i++) {
      const p = samples[i],
        x = p.x * cr + p.z * sr,
        z = -p.x * sr + p.z * cr;
      const px = cx + x * sx,
        py = cy + (p.y * ct - z * st) * sy;
      if (i) ctx.lineTo(px, py);
      else ctx.moveTo(px, py);
    }
    ctx.strokeStyle = rgba(color, opacity);
    ctx.lineWidth = width;
    ctx.stroke();
  }

  function mount(kind, parent, before) {
    const figure = document.createElement("figure");
    figure.className = "scholar-art scholar-art--" + kind;
    figure.setAttribute("aria-hidden", "true");
    const canvas = document.createElement("canvas");
    canvas.id = "scholar-" + kind + "-canvas";
    canvas.setAttribute("aria-hidden", "true");
    figure.append(canvas);
    parent.insertBefore(figure, before || null);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      figure.remove();
      return;
    }
    const item = { kind, figure, canvas, ctx, width: 0, height: 0, visible: false, draws: 0 };
    scenes.push(item);
    const resize = () => {
      const box = figure.getBoundingClientRect();
      item.width = box.width;
      item.height = box.height;
      const dpr = Math.min(devicePixelRatio || 1, 1.6);
      canvas.width = Math.max(1, Math.round(box.width * dpr));
      canvas.height = Math.max(1, Math.round(box.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      item.visible = box.bottom > 0 && box.top < innerHeight && box.width > 0;
      wake();
    };
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(figure);
    else addEventListener("resize", resize, { passive: true });
    if ("IntersectionObserver" in window)
      new IntersectionObserver(
        (entries) => {
          item.visible = entries[0].isIntersecting;
          figure.classList.toggle("scholar-inview", item.visible);
          wake();
        },
        { threshold: 0 },
      ).observe(figure);
    resize();
  }
  const heading = publications.querySelector(".section-heading");
  heading.classList.add("scholar-heading");
  mount("papers", heading, heading.querySelector(".paper-total"));
  mount("journey", journey, journey.querySelector(".journey-grid"));

  function sprite(kind, color) {
    const key = kind + color;
    if (spriteCache.has(key)) return spriteCache.get(key);
    const image = document.createElement("canvas");
    image.width = image.height = 128;
    const ctx = image.getContext("2d"),
      r = 62,
      c = 64;
    if (kind === "aura") {
      const g = ctx.createRadialGradient(c, c, 0, c, c, r);
      g.addColorStop(0, rgba(color, 1));
      g.addColorStop(0.48, rgba(color, 0.35));
      g.addColorStop(1, rgba(color, 0));
      ctx.fillStyle = g;
    } else {
      const g = ctx.createRadialGradient(c - r * 0.38, c - r * 0.42, r * 0.06, c, c, r);
      g.addColorStop(0, rgba("#ffffff", 0.96));
      g.addColorStop(0.26, rgba(color, 0.35));
      g.addColorStop(0.7, rgba(color, 0.85));
      g.addColorStop(1, rgba(palette.ink, 0.52));
      ctx.fillStyle = g;
    }
    ctx.beginPath();
    ctx.arc(c, c, r, 0, TAU);
    ctx.fill();
    if (kind === "pearl") {
      ctx.strokeStyle = rgba(color, 0.45);
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    spriteCache.set(key, image);
    return image;
  }
  function stamp(ctx, kind, x, y, r, color, alpha) {
    const previous = ctx.globalAlpha;
    ctx.globalAlpha = previous * alpha;
    const size = (r * 128) / 62;
    ctx.drawImage(sprite(kind, color), x - size / 2, y - size / 2, size, size);
    ctx.globalAlpha = previous;
  }
  function aura(ctx, x, y, r, color, alpha) {
    stamp(ctx, "aura", x, y, r, color, alpha);
  }
  function pearl(ctx, x, y, r, color, alpha = 1) {
    stamp(ctx, "pearl", x, y, r, color, alpha);
  }
  function strokePath(ctx, pts, color, width, opacity, close = false) {
    ctx.beginPath();
    pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
    if (close) ctx.closePath();
    ctx.strokeStyle = rgba(color, opacity);
    ctx.lineWidth = width;
    ctx.stroke();
  }
  function drawPapers(item) {
    const { ctx, width: w, height: h } = item;
    if (!w || !h) return;
    ctx.clearRect(0, 0, w, h);
    const cx = w * 0.5,
      cy = h * 0.5,
      s = Math.min(w * 0.36, h * 0.39),
      turn = time * 0.105;
    aura(ctx, cx - s * 0.2, cy, s * 1.55, palette.primary, 0.075);
    aura(ctx, cx + s * 0.65, cy + s * 0.25, s * 0.95, palette.secondary, 0.055);
    const project = (p) => ({ x: cx + p.x * s, y: cy + p.y * s * 0.87, z: p.z });
    // Three fine loops form an open, turning book of connections, not a chart.
    for (let band = 0; band < 3; band++) {
      const color = [palette.primary, palette.accent, palette.secondary][band];
      orbitPath(
        ctx,
        paperLoops[band],
        cx,
        cy,
        s,
        s * 0.87,
        turn + band * 0.72,
        0.55 + band * 0.19,
        color,
        band === 1 ? 1.15 : 0.75,
        band === 1 ? 0.44 : 0.29,
      );
      const head = (time * 0.065 + band * 0.31) % 1;
      const tail = [];
      for (let i = 0; i < 15; i++) {
        const a = ((head - i * 0.0035 + 1) % 1) * Math.PI * 2;
        tail.unshift(
          project(
            point(
              a,
              1.14 + band * 0.055,
              Math.sin(a * 2 + band * 0.8) * 0.13,
              turn + band * 0.72,
              0.55 + band * 0.19,
            ),
          ),
        );
      }
      strokePath(ctx, tail, color, 1.7, 0.7);
      const tip = tail[tail.length - 1];
      aura(ctx, tip.x, tip.y, 9, color, 0.2);
      pearl(ctx, tip.x, tip.y, 2.1, color, 0.9);
    }
    const cr = Math.cos(turn + 0.42),
      sr = Math.sin(turn + 0.42),
      ct = Math.cos(0.32),
      st = Math.sin(0.32);
    for (const n of paperNodes) {
      const x = n.baseX * cr + n.baseZ * sr,
        z = -n.baseX * sr + n.baseZ * cr;
      n.x = cx + x * s;
      n.y = cy + (n.baseY * ct - z * st) * s * 0.87;
      n.z = n.baseY * st + z * ct;
      n.active = !filtered || shown.has(n.paper.id);
      n.selected = selectedPaper === n.paper.id;
    }
    for (let i = 0; i < paperNodes.length; i++) {
      const a = paperNodes[i],
        b = paperNodes[(i + 3) % paperNodes.length];
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.bezierCurveTo(
        mix(a.x, cx, 0.6),
        mix(a.y, cy, 0.6),
        mix(b.x, cx, 0.6),
        mix(b.y, cy, 0.6),
        b.x,
        b.y,
      );
      ctx.strokeStyle = rgba(
        i % 3 === 0 ? palette.accent : palette.primary,
        a.selected || b.selected ? 0.5 : a.active && b.active ? 0.16 : 0.045,
      );
      ctx.lineWidth = a.selected || b.selected ? 1.1 : 0.6;
      ctx.stroke();
    }
    depthNodes
      .sort((a, b) => a.z - b.z)
      .forEach((n) => {
        const color = [palette.primary, palette.secondary, palette.accent][n.i % 3];
        const radius = (3.7 + (n.z + 1) * 1.7) * (n.selected ? 1.35 : 1);
        const a = n.active ? 0.88 : 0.2;
        if (n.selected || (n.active && burst > 0))
          aura(ctx, n.x, n.y, 18 + burst * 13, color, n.selected ? 0.2 : burst * 0.13);
        pearl(ctx, n.x, n.y, radius, color, a);
        if (n.selected) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, radius + 5, 0, Math.PI * 2);
          ctx.strokeStyle = rgba(color, 0.42);
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      });
    for (let i = 0; i < 15; i++) {
      const a = i * 2.39 + time * 0.026,
        r = s * (1.21 + (i % 4) * 0.075),
        x = cx + Math.cos(a) * r,
        y = cy + Math.sin(a) * r * 0.61;
      ctx.fillStyle = rgba(
        i % 3 === 0 ? palette.secondary : palette.accent,
        0.22 + (Math.sin(time * 0.8 + i) + 1) * 0.1,
      );
      ctx.beginPath();
      ctx.arc(x, y, i % 3 === 0 ? 1.35 : 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawJourney(item) {
    const { ctx, width: w, height: h } = item;
    if (!w || !h) return;
    ctx.clearRect(0, 0, w, h);
    const cy = h * 0.51,
      span = w * 0.72,
      left = w * 0.14,
      s = Math.min(h * 0.24, w * 0.085),
      active = { phd: 0, master: 1, bachelor: 2 }[stage] ?? 0;
    const hubs = [0, 1, 2].map((i) => ({
      x: left + (span * i) / 2,
      y: cy + Math.sin(i * Math.PI * 0.5) * h * 0.035,
    }));
    const trace = (u, offset) => ({
      x: left + span * u,
      y: cy + Math.sin(u * Math.PI * 2 + offset) * h * 0.085 + Math.sin(u * Math.PI) * h * 0.035,
    });
    for (let line = 0; line < 5; line++) {
      const offset = (line - 2) * 0.21 + Math.sin(time * 0.2) * 0.12,
        co = Math.cos(offset),
        so = Math.sin(offset);
      ctx.beginPath();
      for (let k = 0; k < traceSamples.length; k++) {
        const v = traceSamples[k],
          x = left + span * v.u,
          y = cy + (v.sin * co + v.cos * so) * h * 0.085 + v.rise * h * 0.035;
        if (k) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
      ctx.strokeStyle = rgba(line % 2 ? palette.primary : palette.accent, line === 2 ? 0.44 : 0.18);
      ctx.lineWidth = line === 2 ? 1.2 : 0.65;
      ctx.stroke();
      const u = 1 - ((time * 0.062 + line * 0.21) % 1),
        p = trace(u, offset);
      pearl(
        ctx,
        p.x,
        p.y,
        line === 2 ? 2.7 : 1.6,
        line % 2 ? palette.primary : palette.accent,
        0.78,
      );
    }
    hubs.forEach((hub, i) => {
      // Match the visible tab order: PhD, master's, undergraduate. Light travels from the earliest stage onward.
      const level = 2 - i,
        color = i === 1 ? palette.secondary : i === 2 ? palette.primary : palette.accent;
      aura(ctx, hub.x, hub.y, s * 2.1, color, i === active ? 0.12 : 0.04);
      const layers = level + 2;
      for (let loop = 0; loop < layers; loop++) {
        const radius = s * (0.62 + loop * 0.14),
          rotation = time * (0.12 + i * 0.025) + loop * 0.62;
        orbitPath(
          ctx,
          journeyLoop,
          hub.x,
          hub.y,
          radius,
          radius,
          rotation,
          0.52 + loop * 0.2,
          color,
          loop === 1 ? 1 : 0.65,
          i === active ? 0.68 : 0.28,
        );
        const angle = (time * 0.06 + loop * 0.23) * TAU,
          p = point(angle, 1, Math.sin(angle * 2) * 0.035, rotation, 0.52 + loop * 0.2);
        pearl(
          ctx,
          hub.x + p.x * radius,
          hub.y + p.y * radius,
          loop === 0 ? 2.8 : 1.8,
          color,
          i === active ? 0.9 : 0.48,
        );
      }
      pearl(ctx, hub.x, hub.y, s * (i === active ? 0.19 : 0.12), color, i === active ? 0.95 : 0.6);
      if (i === active) {
        ctx.beginPath();
        ctx.ellipse(hub.x, hub.y, s * 1.25, s * 0.88, -0.22, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(color, 0.15 + Math.sin(time * 0.7) * 0.04);
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    });
    for (let i = 0; i < 21; i++) {
      const x = w * (0.08 + i * 0.042),
        y = cy + Math.sin(i * 1.21 + time * 0.13) * h * 0.32;
      ctx.fillStyle = rgba(
        i % 4 ? palette.primary : palette.secondary,
        0.12 + (Math.sin(time * 0.4 + i) + 1) * 0.045,
      );
      ctx.beginPath();
      ctx.arc(x, y, i % 4 ? 0.7 : 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function tick(now) {
    raf = 0;
    const visible = scenes.filter((s) => s.visible && s.width > 0 && s.height > 0);
    if (document.hidden || !visible.length) {
      last = 0;
      return;
    }
    const running = motionAllowed();
    if (!running && !dirty) {
      last = 0;
      return;
    }
    // Render on each display refresh. Lifecycle changes reset `last`, so hidden time is never replayed.
    const dt = last ? (now - last) / 1000 : 0;
    last = now;
    if (running) {
      time += dt;
      burst = Math.max(0, burst - dt * 0.9);
    }
    const started = performance.now();
    for (const item of visible) {
      if (item.kind === "papers") drawPapers(item);
      else drawJourney(item);
      item.draws++;
      item.canvas.dataset.frame = String(item.draws);
    }
    const renderMs = performance.now() - started;
    renderStats.totalMs += renderMs;
    renderStats.maxMs = Math.max(renderStats.maxMs, renderMs);
    dirty = false;
    frames++;
    if (running) raf = requestAnimationFrame(tick);
    else last = 0;
  }
  function wake() {
    dirty = true;
    if (!raf && !document.hidden) raf = requestAnimationFrame(tick);
  }
  function syncMotion() {
    html.dataset.scholarMotion = motionAllowed() ? "running" : "paused";
    last = 0;
    if (!motionAllowed()) {
      document
        .querySelectorAll(".scholar-enter,.scholar-panel-enter")
        .forEach((el) => el.classList.remove("scholar-enter", "scholar-panel-enter"));
    }
    wake();
  }
  function syncPalette(event) {
    const source = event?.detail?.palette || window.WX_THEME?.palettes?.[window.WX_THEME?.get?.()];
    if (source) {
      palette = { ...palette, ...source };
      spriteCache.clear();
    }
    wake();
  }
  addEventListener("wxthemechange", syncPalette);
  addEventListener("languagechange", wake);
  document.addEventListener("visibilitychange", syncMotion);
  reduced.addEventListener("change", syncMotion);
  new MutationObserver(syncMotion).observe(html, {
    attributes: true,
    attributeFilter: ["data-motion"],
  });

  const list = document.getElementById("publication-list");
  function syncPapers() {
    const rows = [...list.querySelectorAll(".publication")];
    shown = new Set(rows.map((row) => row.dataset.paperId));
    filtered =
      publications.querySelector("[data-topic][aria-pressed=true]")?.dataset.topic !== "all" ||
      publications.querySelector("[data-year][aria-pressed=true]")?.dataset.year !== "all" ||
      !!document.getElementById("paper-search")?.value ||
      !!document.getElementById("cofirst-only")?.checked;
    const inView = scenes.find((s) => s.kind === "papers")?.visible;
    rows.forEach((row, index) => {
      row.classList.add("scholar-row");
      row.style.setProperty("--scholar-delay", Math.min(index, 5) * 45 + "ms");
      if (motionAllowed() && inView) row.classList.add("scholar-enter");
    });
    selectedPaper = "";
    burst = 1;
    wake();
  }
  new MutationObserver(syncPapers).observe(list, { childList: true });
  list.addEventListener(
    "pointerover",
    (event) => {
      const row = event.target.closest(".publication");
      if (row && row.dataset.paperId !== selectedPaper) {
        selectedPaper = row.dataset.paperId;
        wake();
      }
    },
    { passive: true },
  );
  list.addEventListener(
    "pointerleave",
    () => {
      selectedPaper = "";
      wake();
    },
    { passive: true },
  );
  list.addEventListener("focusin", (event) => {
    selectedPaper = event.target.closest(".publication")?.dataset.paperId || "";
    wake();
  });
  list.addEventListener("focusout", (event) => {
    if (!list.contains(event.relatedTarget)) {
      selectedPaper = "";
      wake();
    }
  });
  list.addEventListener("animationend", (event) => {
    if (event.animationName === "scholar-row-enter") event.target.classList.remove("scholar-enter");
  });
  const tabs = journey.querySelector(".journey-grid"),
    panel = document.getElementById("journey-panel");
  function syncStage() {
    const next = tabs.querySelector("[aria-selected=true]")?.dataset.stageSelect || "phd";
    if (next === stage) return;
    stage = next;
    burst = 1;
    if (motionAllowed()) {
      panel.classList.remove("scholar-panel-enter");
      void panel.offsetWidth;
      panel.classList.add("scholar-panel-enter");
    }
    wake();
  }
  new MutationObserver(syncStage).observe(tabs, {
    subtree: true,
    attributes: true,
    attributeFilter: ["aria-selected"],
  });
  panel.addEventListener("animationend", (event) => {
    if (event.animationName === "scholar-panel-enter")
      panel.classList.remove("scholar-panel-enter");
  });
  window.WX_SCHOLAR = {
    info: () => ({
      running: motionAllowed(),
      time,
      frames,
      stage,
      selectedPaper,
      filtered,
      visibleIds: [...shown],
      palette: { ...palette },
      motion: {
        cadence: "display-refresh",
        continuousOrbits: true,
        meanRenderMs: frames ? renderStats.totalMs / frames : 0,
        maxRenderMs: renderStats.maxMs,
        spriteCount: spriteCache.size,
      },
      scenes: scenes.map((s) => ({
        kind: s.kind,
        visible: s.visible,
        width: s.width,
        height: s.height,
        frames: s.draws,
      })),
    }),
  };
  syncPalette();
  syncPapers();
  syncMotion();
})();

/* 14 · Opening cover choreography */
/* Seven cover studies settle into an artistic Dipper-shaped composition.
   The arrangement is editorial art, not an astronomical chart. */
(() => {
  "use strict";
  const root = document.documentElement,
    reduced = matchMedia("(prefers-reduced-motion: reduce)"),
    boot = window.WX_INTRO_BOOT;
  if (!document.getElementById("home")) {
    boot?.release("no-home");
    return;
  }
  const TAU = Math.PI * 2,
    ENTRY = 6800,
    HOLD = 6400,
    DISSOLVE = 2800,
    TOTAL = ENTRY + HOLD + DISSOLVE;
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v)),
    smooth = (v) => {
      v = clamp(v);
      return v * v * (3 - 2 * v);
    },
    sine = (v) => (1 - Math.cos(clamp(v) * Math.PI)) / 2;
  const seed = (n) => {
    const a = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
    return a - Math.floor(a);
  };
  const covers = [
    {
      key: "nature",
      masthead: "Nature",
      image: "curiosity-art.webp",
      deck: "LIFE, DATA & INQUIRY",
      title: "A wider world within the small.",
    },
    {
      key: "cell",
      masthead: "Cell",
      image: "cover-cell.webp",
      deck: "MICROBES · METABOLISM · IMMUNITY",
      title: "Small lives, wide connections.",
    },
    {
      key: "science",
      masthead: "Science",
      image: "cover-science.webp",
      deck: "DATA · ALGORITHMS · DISCOVERY",
      title: "From fragments to understanding.",
    },
    {
      key: "nejm",
      masthead: "<i>The</i> NEW ENGLAND<br>JOURNAL <i>of</i> MEDICINE",
      image: "cover-nejm.webp",
      deck: "NEUROLOGY · GENETICS",
      title: "Following the clues of inheritance.",
    },
    {
      key: "bmj",
      masthead: '<span class="masthead-the">the</span> bmj',
      image: "cover-bmj.webp",
      deck: "GENETIC INSTRUMENTS · CAUSAL INFERENCE",
      title: "From association to better questions.",
    },
    {
      key: "lancet",
      masthead: "THE LANCET",
      image: "cover-lancet.webp",
      deck: "SHARED GENETICS · SYSTEMIC IMMUNITY",
      title: "Finding the threads that connect.",
    },
    {
      key: "jama",
      masthead: "JAMA",
      image: "cover-jama.webp",
      deck: "CROSS-TRAIT GENETICS · METABOLISM",
      title: "When separate evidence meets.",
    },
  ];
  const dialog = document.createElement("dialog");
  dialog.id = "cover-intro";
  dialog.className = "cover-intro";
  dialog.lang = "en";
  dialog.tabIndex = -1;
  dialog.setAttribute("aria-label", "Seven original research cover studies");
  dialog.setAttribute("aria-describedby", "intro-accessible");
  dialog.innerHTML =
    '<p id="intro-accessible" class="intro-sr">Seven original research cover studies drift into an artistic Dipper-shaped constellation, rest for a moment and dissolve into the homepage. This automatic prelude lasts sixteen seconds. Press Escape to enter the site.</p><canvas class="intro-starlines" aria-hidden="true"></canvas><div class="intro-cover-stage"></div><canvas class="intro-pigment" aria-hidden="true"></canvas>';
  const stage = dialog.querySelector(".intro-cover-stage"),
    canvas = dialog.querySelector(".intro-pigment"),
    ctx = canvas.getContext("2d"),
    skyCanvas = dialog.querySelector(".intro-starlines"),
    sky = skyCanvas.getContext("2d");
  const safeProbe = document.createElement("span");
  safeProbe.setAttribute("aria-hidden", "true");
  safeProbe.style.cssText =
    "position:absolute;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)";
  dialog.append(safeProbe);
  covers.forEach((cover) => {
    const article = document.createElement("article");
    article.className = "intro-cover cover-" + cover.key;
    article.dataset.introCover = cover.key;
    article.innerHTML =
      '<img class="intro-cover-art" src="assets/' +
      cover.image +
      '?v=1" width="1122" height="1402" decoding="async" alt=""><div class="cover-masthead">' +
      cover.masthead +
      '</div><div class="cover-bottom"><p class="cover-deck">' +
      cover.deck +
      "</p><h2>" +
      cover.title +
      "</h2></div>";
    stage.append(article);
    cover.element = article;
    cover.img = article.querySelector("img");
  });
  document.body.append(dialog);
  const replay = document.createElement("button");
  replay.type = "button";
  replay.id = "replay-intro";
  document.querySelector(".footer>div")?.prepend(replay);
  let opened = false,
    pending = false,
    phase = "idle",
    generation = 0,
    frame = 0,
    safetyTimer = 0,
    start = 0,
    elapsed = 0,
    frames = 0,
    width = 0,
    height = 0,
    dpr = 1,
    cardWidth = 1,
    cardHeight = 1,
    portrait = false;
  let lastFrame = 0,
    totalFrameMs = 0,
    maxFrameMs = 0,
    slowFrames = 0,
    totalDrawMs = 0,
    maxDrawMs = 0,
    maxDrawPhase = "idle";
  let previousFocus = null,
    previousMotion = "running",
    bodyOverflow = "",
    rootOverflow = "",
    inertElements = [],
    particles = [],
    particlesBuilt = false,
    backgroundRestored = false;
  const poses = [],
    anchors = [],
    depths = [1.025, 0.95, 1.02, 0.97, 0.94, 1, 0.95],
    tilts = [2.1, -1.6, 1.2, -1.8, 1.5, -1.3, 1.8],
    links = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [3, 4],
      [4, 5],
      [5, 6],
    ];
  const dust = Array.from({ length: 96 }, (_, i) => ({
    x: seed(i + 1),
    y: seed(i + 302),
    r: 0.45 + seed(i + 201) * 1.15,
    phase: seed(i + 311) * TAU,
    warm: seed(i + 81) > 0.52,
  }));
  const seenKey = boot?.key || "wx-intro-seen-v13-dipper";
  function paintReplay() {
    replay.textContent = root.lang === "en" ? "Replay prelude" : "重看序章";
  }
  function markSeen() {
    try {
      sessionStorage.setItem(seenKey, "1");
    } catch {}
  }
  function announce(reason) {
    dispatchEvent(new CustomEvent("wxintrocomplete", { detail: { reason, total: covers.length } }));
  }
  function pauseBackground() {
    previousMotion =
      boot?.claimed && !boot.expired
        ? boot.previousMotion
        : window.WX_SCENES?.getMotion?.() || root.dataset.motion || "running";
    backgroundRestored = false;
    if (window.WX_SCENES?.setMotion) window.WX_SCENES.setMotion(false);
    else root.dataset.motion = "paused";
  }
  function restoreBackground() {
    if (backgroundRestored) return;
    backgroundRestored = true;
    if (window.WX_SCENES?.setMotion)
      window.WX_SCENES.setMotion(previousMotion === "running" && !reduced.matches);
    else
      root.dataset.motion = previousMotion === "running" && !reduced.matches ? "running" : "paused";
  }
  function focusPage() {
    if (
      previousFocus &&
      previousFocus !== document.body &&
      previousFocus.isConnected &&
      !previousFocus.inert
    ) {
      previousFocus.focus({ preventScroll: true });
      return;
    }
    const main = document.getElementById("main");
    if (!main) return;
    const old = main.getAttribute("tabindex");
    main.setAttribute("tabindex", "-1");
    main.classList.add("intro-entry-focus");
    main.focus({ preventScroll: true });
    main.addEventListener(
      "blur",
      () => {
        main.classList.remove("intro-entry-focus");
        if (old === null) main.removeAttribute("tabindex");
        else main.setAttribute("tabindex", old);
      },
      { once: true },
    );
  }
  function releasePage() {
    inertElements.forEach(({ el, inert }) => (el.inert = inert));
    inertElements = [];
    document.body.style.overflow = bodyOverflow;
    root.style.overflow = rootOverflow;
    root.style.removeProperty("--intro-page-opacity");
  }
  function close(reason = "complete") {
    generation++;
    pending = false;
    cancelAnimationFrame(frame);
    frame = 0;
    clearTimeout(safetyTimer);
    safetyTimer = 0;
    boot?.release(reason);
    const wasOpen = opened;
    opened = false;
    phase = "closed";
    root.dataset.intro = "closed";
    if (dialog.open) dialog.close();
    else dialog.removeAttribute("open");
    if (wasOpen) {
      releasePage();
      restoreBackground();
      focusPage();
    } else if (boot?.eligible) {
      if (window.WX_SCENES?.setMotion)
        window.WX_SCENES.setMotion(boot.previousMotion === "running" && !reduced.matches);
      else root.dataset.motion = boot.previousMotion;
    }
    markSeen();
    announce(reason);
  }
  function fit() {
    width = innerWidth;
    height = innerHeight;
    portrait = width / height < 1.15;
    dpr = Math.min(
      devicePixelRatio || 1,
      width < 700 ? 1.5 : 1.6,
      Math.sqrt(7500000 / (width * height)),
    );
    const safe = getComputedStyle(safeProbe),
      phoneLandscape = !portrait && width <= 1024 && height <= 600,
      left = Math.max(parseFloat(safe.paddingLeft) || 0, phoneLandscape ? 44 : 0),
      right = Math.max(parseFloat(safe.paddingRight) || 0, phoneLandscape ? 44 : 0),
      top = parseFloat(safe.paddingTop) || 0,
      bottom = parseFloat(safe.paddingBottom) || 0,
      availableWidth = Math.max(1, width - left - right),
      availableHeight = Math.max(1, height - top - bottom);
    const layout = portrait
      ? [
          [0.25, 0.14],
          [0.76, 0.17],
          [0.75, 0.36],
          [0.28, 0.33],
          [0.24, 0.52],
          [0.62, 0.68],
          [0.48, 0.88],
        ]
      : [
          [0.84, 0.27],
          [0.82, 0.7],
          [0.59, 0.69],
          [0.6, 0.32],
          [0.43, 0.26],
          [0.27, 0.4],
          [0.11, 0.6],
        ];
    anchors.splice(
      0,
      anchors.length,
      ...layout.map(([x, y]) => ({ x: left + availableWidth * x, y: top + availableHeight * y })),
    );
    cardWidth = Math.min(
      portrait ? availableWidth * 0.255 : availableWidth * 0.118,
      portrait ? availableHeight * 0.144 : availableHeight * 0.24,
      420,
    );
    // Keep generous breathing space even on short screens and browser split views.
    for (let pass = 0; pass < 16; pass++) {
      const bounds = anchors.map((p, i) => {
        const a = ((Math.abs(tilts[i]) + 1) * Math.PI) / 180,
          w = cardWidth * depths[i],
          h = (w * 1402) / 1122;
        return {
          x: p.x,
          y: p.y,
          w: w * Math.cos(a) + h * Math.sin(a),
          h: h * Math.cos(a) + w * Math.sin(a),
        };
      });
      const outside = bounds.some(
        (b) =>
          b.x - b.w / 2 < left + 14 ||
          b.x + b.w / 2 > width - right - 14 ||
          b.y - b.h / 2 < top + 16 ||
          b.y + b.h / 2 > height - bottom - 16,
      );
      const crowded = bounds.some((a, i) =>
        bounds.some(
          (b, j) =>
            j > i &&
            Math.abs(a.x - b.x) < (a.w + b.w) / 2 + 10 &&
            Math.abs(a.y - b.y) < (a.h + b.h) / 2 + 12,
        ),
      );
      if (!outside && !crowded) break;
      cardWidth *= 0.95;
    }
    cardHeight = (cardWidth * 1402) / 1122;
    [
      [canvas, ctx],
      [skyCanvas, sky],
    ].forEach(([c, g]) => {
      c.width = Math.round(width * dpr);
      c.height = Math.round(height * dpr);
      c.style.width = width + "px";
      c.style.height = height + "px";
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    dialog.style.setProperty("--orbit-cover-width", cardWidth + "px");
    dialog.dataset.layout = portrait ? "portrait" : "landscape";
    if (opened && phase === "dissolving") particlesBuilt = false;
  }
  function bezier(a, b, c, d, t) {
    const s = 1 - t;
    return s * s * s * a + 3 * s * s * t * b + 3 * s * t * t * c + t * t * t * d;
  }
  function pose(i, time) {
    const target = anchors[i],
      q = clamp((time - i * 450) / (ENTRY - 6 * 450)),
      e = smooth(q),
      settled = q >= 1;
    const startX = width + cardWidth * 0.85,
      startY = height + cardHeight * 0.4;
    const bendX = target.x + Math.min(width * 0.14, 180),
      bendY = target.y + Math.min(height * 0.17, 155);
    const breathe = smooth((time - ENTRY) / 1600),
      amp = Math.min(width, height) * 0.0028;
    const driftX = Math.sin((time - ENTRY) * 0.00047 + i * 0.7) * amp * breathe,
      driftY = Math.sin((time - ENTRY) * 0.00061 + i * 0.9) * amp * breathe;
    const x = bezier(startX, width * 0.91, bendX, target.x, e) + driftX,
      y = bezier(startY, height * 0.88, bendY, target.y, e) + driftY;
    const tilt =
      tilts[i] +
      (1 - e) * (portrait ? -3 : -5) +
      Math.sin((time - ENTRY) * 0.00048 + i) * 0.36 * breathe;
    return {
      x,
      y,
      alpha: smooth(q * 4),
      scale: depths[i] * (0.82 + 0.18 * e),
      tilt,
      z: Math.round(depths[i] * 20) + i,
      q,
      settled,
    };
  }
  function drawCovers(time) {
    const fade = smooth((time - ENTRY - HOLD) / 1680);
    covers.forEach((cover, i) => {
      const p = pose(i, Math.min(time, ENTRY + HOLD));
      poses[i] = p;
      cover.element.style.transform =
        "translate3d(" +
        p.x.toFixed(2) +
        "px," +
        p.y.toFixed(2) +
        "px,0) translate(-50%,-50%) rotate(" +
        p.tilt.toFixed(2) +
        "deg) scale(" +
        p.scale.toFixed(4) +
        ")";
      cover.element.style.opacity = (p.alpha * (1 - fade)).toFixed(4);
      cover.element.style.zIndex = String(p.z);
    });
  }
  function drawSky(time) {
    sky.clearRect(0, 0, width, height);
    const vanish = 1 - smooth((time - ENTRY - HOLD + 120) / 2200),
      arrival = smooth(time / 1800),
      unit = Math.max(0.75, Math.min(width, height) / 850);
    if (vanish < 0.003) return;
    sky.save();
    sky.lineCap = "round";
    sky.lineJoin = "round";
    // A few fine arcs frame the composition like the edge of a celestial scroll.
    const arcIn = arrival * vanish;
    sky.strokeStyle = "#ad9466";
    sky.lineWidth = 0.7 * unit;
    sky.globalAlpha = 0.21 * arcIn;
    sky.beginPath();
    if (portrait) {
      sky.moveTo(width * 0.06, height * 0.16);
      sky.bezierCurveTo(
        width * 0.035,
        height * 0.47,
        width * 0.91,
        height * 0.45,
        width * 0.89,
        height * 0.85,
      );
    } else {
      sky.moveTo(width * 0.065, height * 0.69);
      sky.bezierCurveTo(
        width * 0.29,
        height * 0.91,
        width * 0.77,
        height * 0.055,
        width * 0.935,
        height * 0.31,
      );
    }
    sky.stroke();
    sky.strokeStyle = "#6d9391";
    sky.globalAlpha = 0.18 * arcIn;
    sky.beginPath();
    if (portrait) {
      sky.moveTo(width * 0.12, height * 0.09);
      sky.bezierCurveTo(
        width * 0.92,
        height * 0.04,
        width * 0.99,
        height * 0.77,
        width * 0.36,
        height * 0.96,
      );
    } else {
      sky.moveTo(width * 0.12, height * 0.29);
      sky.bezierCurveTo(
        width * 0.3,
        height * 0.12,
        width * 0.76,
        height * 0.91,
        width * 0.91,
        height * 0.65,
      );
    }
    sky.stroke();
    const count = portrait ? 62 : dust.length;
    for (let i = 0; i < count; i++) {
      const s = dust[i],
        f = 0.5 + 0.5 * Math.sin(time * 0.00055 + s.phase),
        x = s.x * width + Math.sin(time * 0.0001 + s.phase) * 5,
        y = s.y * height - Math.sin(time * 0.00013 + s.phase) * 4;
      sky.globalAlpha = (0.08 + 0.22 * f) * arrival * vanish;
      sky.fillStyle = s.warm ? "#b59053" : "#6e9792";
      sky.beginPath();
      sky.arc(x, y, s.r * unit, 0, TAU);
      sky.fill();
      if (i % 13 === 0) {
        sky.lineWidth = 0.55 * unit;
        sky.strokeStyle = s.warm ? "#b59053" : "#769b95";
        sky.beginPath();
        sky.moveTo(x - 4 * unit, y);
        sky.lineTo(x + 4 * unit, y);
        sky.moveTo(x, y - 4 * unit);
        sky.lineTo(x, y + 4 * unit);
        sky.stroke();
      }
    }
    links.forEach(([ia, ib], i) => {
      const progress = smooth((time - (Math.max(ia, ib) * 450 + (ENTRY - 6 * 450) - 350)) / 1100);
      if (progress <= 0) return;
      const a = poses[ia],
        b = poses[ib],
        x = a.x + (b.x - a.x) * progress,
        y = a.y + (b.y - a.y) * progress;
      sky.globalAlpha = 0.43 * vanish;
      sky.strokeStyle = i < 4 ? "#af966b" : "#76948a";
      sky.lineWidth = 0.85 * unit;
      sky.beginPath();
      sky.moveTo(a.x, a.y);
      sky.lineTo(x, y);
      sky.stroke();
      if (progress > 0.99) {
        const travel = (time * 0.000045 + i * 0.19) % 1,
          tx = a.x + (b.x - a.x) * travel,
          ty = a.y + (b.y - a.y) * travel;
        sky.globalAlpha = 0.5 * vanish;
        sky.fillStyle = "#c0a070";
        sky.beginPath();
        sky.arc(tx, ty, 1.2 * unit, 0, TAU);
        sky.fill();
      }
    });
    poses.forEach((p, i) => {
      const a = smooth((p.q - 0.75) / 0.25) * vanish;
      if (a < 0.01) return;
      const x = p.x + cardWidth * p.scale * 0.535,
        y = p.y - cardHeight * p.scale * 0.43;
      sky.globalAlpha = 0.5 * a;
      sky.strokeStyle = i % 2 ? "#819e95" : "#b79a68";
      sky.lineWidth = 0.75 * unit;
      sky.beginPath();
      sky.arc(x, y, 3.1 * unit, 0, TAU);
      sky.stroke();
      sky.globalAlpha = 0.72 * a;
      sky.fillStyle = "#bca170";
      sky.beginPath();
      sky.arc(x, y, 1.1 * unit, 0, TAU);
      sky.fill();
    });
    sky.restore();
  }
  function preparePigments() {
    const sampler = document.createElement("canvas");
    sampler.width = 15;
    sampler.height = 19;
    const sample = sampler.getContext("2d", { willReadFrequently: true });
    // Read image pixels before starting the timeline. A GPU readback at the
    // first dissolving frame can otherwise introduce a visible one-frame hitch.
    covers.forEach((cover) => {
      if (cover.pigmentReady) return;
      try {
        sample.clearRect(0, 0, 15, 19);
        sample.drawImage(cover.img, 0, 0, 15, 19);
        cover.pigmentColors = sample.getImageData(0, 0, 15, 19).data;
      } catch {
        cover.pigmentColors = null;
      }
      cover.pigmentReady = true;
    });
  }
  function makeParticles() {
    particles = [];
    const columns = width < 650 ? 10 : 15,
      rows = width < 650 ? 13 : 19;
    covers.forEach((cover, i) => {
      const pixels = cover.pigmentColors;
      const p = poses[i],
        rot = (p.tilt * Math.PI) / 180,
        co = Math.cos(rot),
        si = Math.sin(rot),
        direction = Math.atan2(p.y - height * 0.5, p.x - width * 0.5);
      for (let row = 0; row < rows; row++)
        for (let col = 0; col < columns; col++) {
          const n = i * 1000 + row * columns + col,
            xx = ((col + 0.2 + seed(n) * 0.6) / columns - 0.5) * cardWidth * p.scale,
            yy = ((row + 0.2 + seed(n + 104) * 0.6) / rows - 0.5) * cardHeight * p.scale,
            idx =
              (Math.floor(((row + 0.5) / rows) * 19) * 15 +
                Math.floor(((col + 0.5) / columns) * 15)) *
              4;
          const color = pixels
            ? [pixels[idx], pixels[idx + 1], pixels[idx + 2]]
            : [
                [35, 103, 110],
                [111, 151, 146],
                [196, 89, 63],
                [221, 154, 111],
                [191, 159, 101],
                [230, 219, 193],
              ][Math.floor(seed(n + 99) * 6)];
          particles.push({
            x: p.x + xx * co - yy * si,
            y: p.y + xx * si + yy * co,
            vx:
              Math.cos(direction + Math.PI * 0.5) * (9 + seed(n + 31) * 21) +
              (seed(n + 204) - 0.5) * 18,
            vy: -12 - seed(n + 22) * 25,
            delay: seed(n + 25) * 0.34,
            life: 1.8 + seed(n + 81) * 0.7,
            r: (0.7 + seed(n + 70) * 1.8) * Math.max(0.75, cardWidth / 160),
            color: "rgb(" + color.join(",") + ")",
            phase: seed(n + 50) * TAU,
          });
        }
    });
    particlesBuilt = true;
  }
  function drawPigment(time) {
    ctx.clearRect(0, 0, width, height);
    if (time < ENTRY + HOLD) return;
    if (!particlesBuilt) makeParticles();
    const t = (time - ENTRY - HOLD) / 1000;
    for (const p of particles) {
      const age = t - p.delay;
      if (age < 0 || age > p.life) continue;
      const q = age / p.life,
        alpha = smooth(age * 3.5) * (1 - smooth(q));
      if (alpha < 0.008) continue;
      const swirl = Math.sin(age * 0.8 + p.phase) * age * 3.5;
      ctx.globalAlpha = alpha * 0.7;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(
        p.x + p.vx * age + swirl,
        p.y + p.vy * age - 4 * age * age,
        Math.max(0.25, p.r * (1 - q * 0.7)),
        0,
        TAU,
      );
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function render(now) {
    if (!opened) return;
    if (!start) start = now;
    elapsed = now - start;
    frames++;
    const drawStart = performance.now();
    if (lastFrame) {
      const delta = now - lastFrame;
      totalFrameMs += delta;
      maxFrameMs = Math.max(maxFrameMs, delta);
      if (delta > 50) slowFrames++;
    }
    lastFrame = now;
    if (elapsed >= TOTAL) {
      close("complete");
      return;
    }
    phase = elapsed < ENTRY ? "entering" : elapsed < ENTRY + HOLD ? "holding" : "dissolving";
    dialog.dataset.phase = phase;
    drawCovers(elapsed);
    drawSky(elapsed);
    drawPigment(elapsed);
    const reveal = smooth((elapsed - (ENTRY + HOLD + 850)) / 1950);
    if (reveal > 0) {
      root.dataset.intro = "revealing";
      root.style.setProperty("--intro-page-opacity", reveal.toFixed(4));
      dialog.style.setProperty("--intro-paper-opacity", (1 - reveal).toFixed(4));
      if (reveal > 0.55) restoreBackground();
    }
    const drawMs = performance.now() - drawStart;
    totalDrawMs += drawMs;
    if (drawMs > maxDrawMs) {
      maxDrawMs = drawMs;
      maxDrawPhase = phase;
    }
    frame = requestAnimationFrame(render);
  }
  async function imagesReady() {
    return Promise.all(
      covers.map(async (cover) => {
        const img = cover.img;
        if (!img.complete)
          await new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          });
        if (!img.naturalWidth) return false;
        try {
          await img.decode();
        } catch {}
        return img.naturalWidth > 0;
      }),
    ).then((values) => values.every(Boolean));
  }
  async function open(options = {}) {
    if (opened || pending || window.WX_STAR_GATE?.info?.().open) return false;
    if (reduced.matches) {
      close("reduced-motion");
      return false;
    }
    const first = options.initial === true;
    if (first && boot && (boot.expired || !boot.claim())) {
      close("expired");
      return false;
    }
    const token = ++generation;
    pending = true;
    phase = "loading";
    if (first) root.dataset.intro = "boot";
    let timeout;
    const ready = await Promise.race([
      imagesReady(),
      new Promise((resolve) => (timeout = setTimeout(() => resolve(false), 4800))),
    ]);
    clearTimeout(timeout);
    if (token !== generation) return false;
    pending = false;
    if (!ready || window.WX_STAR_GATE?.info?.().open) {
      close("images-unavailable");
      return false;
    }
    preparePigments();
    previousFocus = document.activeElement;
    bodyOverflow = document.body.style.overflow;
    rootOverflow = root.style.overflow;
    document.body.style.overflow = "hidden";
    root.style.overflow = "hidden";
    opened = true;
    start = 0;
    elapsed = 0;
    frames = 0;
    lastFrame = 0;
    totalFrameMs = 0;
    maxFrameMs = 0;
    slowFrames = 0;
    totalDrawMs = 0;
    maxDrawMs = 0;
    maxDrawPhase = "idle";
    particlesBuilt = false;
    phase = "entering";
    root.dataset.intro = "open";
    dialog.dataset.phase = phase;
    dialog.style.setProperty("--intro-paper-opacity", "1");
    root.style.setProperty("--intro-page-opacity", "0");
    pauseBackground();
    fit();
    drawCovers(0);
    drawSky(0);
    drawPigment(0);
    inertElements = [...document.body.children]
      .filter(
        (el) => el !== dialog && !["SCRIPT", "TEMPLATE", "STYLE", "LINK"].includes(el.tagName),
      )
      .map((el) => ({ el, inert: el.inert }));
    inertElements.forEach(({ el }) => (el.inert = true));
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    dialog.focus({ preventScroll: true });
    safetyTimer = setTimeout(() => {
      if (opened) close("playback-timeout");
    }, TOTAL + 5000);
    frame = requestAnimationFrame(render);
    return true;
  }
  replay.addEventListener("click", () => open());
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    close("escape");
  });
  dialog.addEventListener("close", () => {
    if (opened && !dialog.open) close("native");
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close("escape");
    } else if (event.key === "Tab") {
      event.preventDefault();
      dialog.focus({ preventScroll: true });
    }
  });
  addEventListener("resize", fit);
  addEventListener("languagechange", paintReplay);
  reduced.addEventListener("change", () => {
    if (reduced.matches && (opened || pending)) close("reduced-motion");
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && (opened || pending)) close("hidden");
  });
  window.WX_INTRO = {
    open,
    close,
    info: () => ({
      open: opened,
      pending,
      phase,
      elapsed,
      frames,
      total: covers.length,
      duration: TOTAL,
      entryDuration: ENTRY,
      holdDuration: HOLD,
      orbitDuration: 0,
      dissolveDuration: DISSOLVE,
      automatic: opened,
      turns: 0,
      formation: "artistic-dipper",
      layout: portrait ? "portrait" : "landscape",
      previousMotion,
      reducedMotion: reduced.matches,
      coverLanguage: "en",
      poses: poses.map((p) => ({
        x: p.x,
        y: p.y,
        alpha: p.alpha,
        tilt: p.tilt,
        scale: p.scale,
        settled: p.settled,
      })),
      particleCount: particles.length,
      performance: {
        averageFrameMs: frames > 1 ? totalFrameMs / (frames - 1) : 0,
        maxFrameMs,
        slowFrames,
        averageDrawMs: frames ? totalDrawMs / frames : 0,
        maxDrawMs,
        maxDrawPhase,
      },
    }),
  };
  paintReplay();
  if (boot) {
    if (boot.eligible && !boot.expired) open({ initial: true });
    else
      queueMicrotask(() => {
        phase = "closed";
        root.dataset.intro = "closed";
        announce("bypassed");
      });
  } else {
    phase = "closed";
    root.dataset.intro = "closed";
    queueMicrotask(() => announce("boot-unavailable"));
  }
})();

/* 15 · Artwork gallery and visual explanations */
/* Original artwork, with optional details that remain quiet until explored. */
(() => {
  "use strict";
  const root = document.documentElement,
    lang = () => (root.lang === "en" ? "en" : "zh");
  const common = {
    zh: {
      label: "画中有意",
      portrait: "王昕的水彩与彩铅风格绘画肖像",
      galleryLabel: "研究的另一种表达",
      galleryTitle: "让好奇，<br>有自己的形状。",
      galleryIntro: "七幅画，七条线索，回到研究本身。",
      choose: "选择画作",
      nature: "生命与求知",
      cell: "菌群与代谢",
      science: "数据与智能",
      nejm: "神经与遗传",
      bmj: "因果与证据",
      lancet: "炎症与共因",
      jama: "代谢与交汇",
    },
    en: {
      label: "INSIDE THE ARTWORK",
      portrait: "A watercolor and colored-pencil portrait of Wang Xin",
      galleryLabel: "A DIFFERENT EXPRESSION",
      galleryTitle: "A shape<br>for curiosity.",
      galleryIntro: "Seven paintings, seven threads of inquiry.",
      choose: "Choose an artwork",
      nature: "Life & inquiry",
      cell: "Microbes & metabolism",
      science: "Data & intelligence",
      nejm: "Neurology & genetics",
      bmj: "Causality & evidence",
      lancet: "Shared genetic threads",
      jama: "Metabolic connections",
    },
  };
  const works = {
    nature: {
      positions: {
        ribbon: [55, 51],
        capsule: [32, 39],
        cell: [45, 32],
        network: [59, 23],
        book: [44, 87],
      },
      zh: {
        title: "把好奇，画成风景。",
        intro: "从遗传与因果，到微生物与智能；用不同的线索，追问同一份好奇。",
        alt: "丝带、微观圆囊、胶囊、连接网络与书页交织的科研艺术插画",
        overview: [
          "微观与远方，在此相遇。",
          "丝带穿过书页，光点连接微观的形态。遗传、药物与智能的线索，在想象中汇成一幅求知的风景。",
        ],
        ribbon: [
          "双链",
          "交织之间，读见遗传。",
          "交织的丝带借用了双螺旋的意象，呼应遗传信息的传递，也连接起不同学科的线索。自由的曲线，为生命的秩序留下一点想象。",
        ],
        capsule: [
          "药物",
          "从发现，走向新的可能。",
          "胶囊指向药物与转化研究：分子层面的发现，如何成为值得检验的干预思路。",
        ],
        cell: [
          "细胞",
          "微小之中，自有天地。",
          "半透明的圆囊是微观生命的艺术意象，让人联想到细胞、分子环境，以及生命之间细密的信号。",
        ],
        network: [
          "网络",
          "让分散的线索，相互照见。",
          "光点与连线呼应数据、智能模型和生物系统。理解，往往发生在原本分散的证据被重新连接之时。",
        ],
        book: [
          "书页",
          "答案之外，还有下一页。",
          "翻开的书页是求知的起点。阅读留下线索，提问打开新的方向，让研究一直向前。",
        ],
      },
      en: {
        title: "A landscape of curiosity.",
        intro:
          "Genetics, causality, microbes and intelligent tools offer different routes into the questions that interest me.",
        alt: "A research-inspired painting of ribbons, microscopic forms, capsules, connected nodes and an open book",
        overview: [
          "Small worlds, wider horizons.",
          "Ribbons cross an open book, and points of light connect microscopic forms. Genetics, discovery and intelligence share an imagined landscape of inquiry.",
        ],
        ribbon: [
          "Inheritance",
          "A shared thread.",
          "The interwoven ribbons evoke the double helix and the passage of genetic information, while their free-flowing curves suggest connections across disciplines.",
        ],
        capsule: [
          "Discovery",
          "From insight to possibility.",
          "The capsule brings translational research into view: how might a molecular discovery lead to a new intervention worth investigating?",
        ],
        cell: [
          "Life",
          "Worlds within the small.",
          "The translucent forms offer an artistic glimpse of microscopic life, recalling cells, their molecular surroundings and the signals that pass between them.",
        ],
        network: [
          "Connections",
          "When evidence finds its context.",
          "The luminous network brings together data, intelligent models and living systems. Separate observations can become more meaningful when seen in relation to one another.",
        ],
        book: [
          "Inquiry",
          "There is always another page.",
          "An open book marks the beginning of inquiry. Reading offers a clue; a new question turns the page.",
        ],
      },
    },
    cell: {
      positions: {
        bacilli: [35, 59],
        cocci: [77, 65],
        community: [48, 80],
      },
      zh: {
        title: "微小的生命，辽阔的联系。",
        intro: "从肠道菌群与肥胖的孟德尔随机化研究出发，继续关注代谢与宿主免疫之间的联系。",
        alt: "青绿、朱红与金色的杆状和球状微生物形态，交织在花纹与流线之间的艺术插画",
        overview: [
          "一片流动的微观世界。",
          "杆状与球状的形态穿行其间，像一群相互影响的邻居。画面借微生物的多样性，想象菌群、代谢与宿主之间的联系。",
        ],
        bacilli: [
          "杆状",
          "从形态开始，向功能追问。",
          "舒展的杆状形体呼应常见的细菌形态。轮廓让观察有了起点，理解它的作用，还需要培养、测序与实验的证据。",
        ],
        cocci: [
          "球状",
          "同样微小，各有不同。",
          "圆润的球形与舒展的杆状形体彼此呼应，呈现微观世界的多样性。形态提供观察的入口，功能仍需要回到实验与证据。",
        ],
        community: [
          "群落",
          "联系，比孤立更有意味。",
          "流线、光点与交错的路径，借喻菌群内部以及微生物与宿主之间的相互作用。一个小小的变化，也可能值得放回整个系统中理解。",
        ],
      },
      en: {
        title: "Small lives, wide connections.",
        intro:
          "Mendelian randomisation research on gut microbiota and obesity connects with my interests in metabolism and host immunity.",
        alt: "An original painting of teal, coral and gold rod-like and spherical microbial forms among flowing lines and ornamental flowers",
        overview: [
          "An imagined microbial world.",
          "Rod-like and spherical forms share the scene like interconnected neighbours. Their diversity evokes relationships among communities, metabolites and their host.",
        ],
        bacilli: [
          "Rods",
          "From form to function.",
          "The elongated forms recall common bacterial shapes. A silhouette begins the observation; culture, sequencing and experiments help explain what an organism does.",
        ],
        cocci: [
          "Spheres",
          "Small, yet never all the same.",
          "Round and elongated forms evoke microscopic diversity. Shape provides a place to begin; experiments and evidence help explain function.",
        ],
        community: [
          "Community",
          "Connections give the scene its meaning.",
          "Flowing lines and scattered points suggest interactions within a microbial community and with its host. A small change can invite a question about the larger system.",
        ],
      },
    },
    science: {
      positions: {
        input: [18, 77],
        layers: [60, 50],
        network: [62, 37],
      },
      zh: {
        title: "由序成章，向知而行。",
        intro:
          "从 pGWAS 与 SV4GD 相关研究出发，把数据整理成可探索的世界，也关注 AI 辅助科研的可能。",
        alt: "青绿与朱红的纸页、矩阵纹样和连接网络交织的原创数据艺术插画",
        overview: [
          "纸页之间，线索渐次展开。",
          "散页化成有序的矩阵，节点连接成可探索的网络。数据平台与智能工具的研究意象，在纸本纹理中汇成一幅求知的风景。",
        ],
        input: [
          "输入",
          "每一片，都是理解的起点。",
          "左下方的散页借喻分散的记录与输入。让资料变得可检索、可分析，也让后续的问题有处落笔。",
        ],
        layers: [
          "矩阵",
          "从记录，到有序的组织。",
          "层叠的网格呼应数据表与多维表征。纸页的起伏，把抽象的数据组织化成看得见的秩序。",
        ],
        network: [
          "网络",
          "让独立的线索，彼此连接。",
          "纸页上的节点与连线，呼应信息关联、数据探索与 AI 辅助科研。理解，有时从一次新的连接开始。",
        ],
      },
      en: {
        title: "From fragments to understanding.",
        intro:
          "Research involving pGWAS and SV4GD connects with my interest in organising explorable data and investigating AI-assisted research.",
        alt: "An original paper-textured painting of teal and vermilion pages, matrix patterns and connected nodes",
        overview: [
          "Clues unfold between the pages.",
          "Separate pages become matrices, and individual points become connected networks. The paper textures bring these research interests together in an imagined landscape of inquiry.",
        ],
        input: [
          "Input",
          "Every piece begins a question.",
          "The separate pages evoke scattered records and inputs. Making information searchable and analysable gives further questions somewhere to begin.",
        ],
        layers: [
          "Matrices",
          "From records to organisation.",
          "Layered grids recall data tables and multidimensional representations. Curved paper surfaces give abstract organisation a visible form.",
        ],
        network: [
          "Networks",
          "Connecting independent clues.",
          "The nodes and links evoke information relationships, data exploration and AI-assisted research. Understanding can begin with a new connection.",
        ],
      },
    },
    nejm: {
      positions: {
        neuron: [30, 35],
        sheath: [64, 64],
        repeat: [58, 80],
      },
      zh: {
        title: "循着遗传，追问生命。",
        intro: "从 ATXN3 重复扩增与 Slc20a2 缺陷相关研究中，追问神经疾病的遗传与分子机制。",
        alt: "以神经与遗传研究为灵感的原创纸本艺术插画",
        overview: [
          "把细微的变化，放回生命的整体。",
          "神经分枝、层叠结构与重复纹样，把神经遗传研究的线索编织在一起。它们是研究意象，也是一份继续追问机制的好奇。",
        ],
        neuron: [
          "神经",
          "在分枝之间，追问联系。",
          "向外伸展的枝条借用了神经元的意象，让人联想到神经系统中精细而广泛的联系。花叶与纹理为科学问题保留了想象的空间。",
        ],
        sheath: [
          "层次",
          "由微观，望向整个系统。",
          "分段包覆的形态呼应轴突与髓鞘的视觉特征。组织与分子的不同层次，共同引向对神经系统的理解。",
        ],
        repeat: [
          "重复",
          "一个重复，也值得追问。",
          "朱红丝带上的重复纹样，呼应 ATXN3 重复扩增相关研究。一次次相似的形态，藏着值得认真追索的遗传问题。",
        ],
      },
      en: {
        title: "Following the clues of inheritance.",
        intro:
          "Research involving ATXN3 repeat expansion and Slc20a2 deficiency informs my questions about genetic and molecular mechanisms in neurological disease.",
        alt: "An original paper-textured painting inspired by neurological and genetic research",
        overview: [
          "Small changes, a larger picture.",
          "Branching forms, layered structures and repeated patterns weave together threads of neurological and genetic research. They express an ongoing curiosity about mechanisms.",
        ],
        neuron: [
          "Neurons",
          "Questions among the branches.",
          "The branching form evokes a neuron and the intricate connections of the nervous system. Flowers and textures leave room for imagination around a scientific question.",
        ],
        sheath: [
          "Layers",
          "From small structures to a wider system.",
          "Segmented coverings recall the visual forms of an axon and myelin. Tissue and molecular scales offer complementary ways to understand the nervous system.",
        ],
        repeat: [
          "Repeats",
          "A repetition can hold a question.",
          "Repeated patterns on the vermilion ribbon recall research involving ATXN3 repeat expansion. Similar forms give a genetic question its visual rhythm.",
        ],
      },
    },
    bmj: {
      positions: {
        origin: [16, 81],
        mediator: [57, 49],
        paths: [76, 60],
      },
      zh: {
        title: "循证而问，溯因而行。",
        intro: "以遗传变异为工具，在孟德尔随机化与中介分析中，继续追问关联背后的因果。",
        alt: "以孟德尔随机化和因果推断为灵感的原创纸本艺术插画",
        overview: [
          "关联之外，仍需多问一步。",
          "起点、平台与分叉的路径，把孟德尔随机化和中介分析的问题画在一起。因果判断需要假设与证据，也需要为不同解释保留空间。",
        ],
        origin: [
          "起点",
          "先把问题，放在起点。",
          "起点平台上的不同颗粒，借喻供分析的变量与遗传线索。它们从何而来、是否适合成为工具，是因果推断需要认真考虑的问题。",
        ],
        mediator: [
          "中介",
          "联系之间，还有经过的地方。",
          "中间的平台，提示对中介路径的追问：一种联系，是否可能经过另一个过程？沿途的停留，也可能带来新的问题。",
        ],
        paths: [
          "路径",
          "沿着联系，辨认可能的方向。",
          "分叉与汇合的路线，呼应对不同解释的比较。沿着证据前行，也把每一步所依赖的假设看得更清楚。",
        ],
      },
      en: {
        title: "From association to better questions.",
        intro:
          "Genetic instruments, Mendelian randomisation and mediation analysis help me explore questions beyond an observed association.",
        alt: "An original paper-textured painting inspired by Mendelian randomisation and causal inference",
        overview: [
          "An association begins a question.",
          "Starting points, platforms and branching paths bring Mendelian randomisation and mediation into one image. Causal judgement relies on assumptions and evidence, with room for alternative explanations.",
        ],
        origin: [
          "Starting point",
          "A question begins with its inputs.",
          "Different particles on the first platform evoke variables and genetic clues. Where they come from, and whether they are suitable instruments, matter in causal inference.",
        ],
        mediator: [
          "Mediation",
          "What might lie between?",
          "The middle platform suggests an intermediate pathway through which a relationship might operate. A stop along the way can open another question.",
        ],
        paths: [
          "Paths",
          "Considering possible explanations.",
          "Branching and converging routes evoke the comparison of explanations. Following the evidence also means examining the assumptions along the way.",
        ],
      },
    },
    lancet: {
      positions: {
        roots: [52, 78],
        branches: [55, 46],
        immune: [74, 48],
      },
      zh: {
        title: "在交汇处，寻找共同的线索。",
        intro: "关注炎症性肠病与卒中的共享遗传线索，把疾病联系放回免疫与系统的视野。",
        alt: "以炎症性肠病、卒中共享遗传与系统免疫为灵感的原创纸本艺术插画",
        overview: [
          "不同的疾病，也可能提出相遇的问题。",
          "跨性状遗传与多组学证据，让看似分离的疾病获得共同观察的视角。交织的枝叶，回应对共享机制与系统免疫的探索。",
        ],
        roots: [
          "共根",
          "从共同的线索，重新出发。",
          "交织的根系呼应共享遗传基础的研究视角。不同疾病之间可能共有的信号，成为进一步追问机制的起点。",
        ],
        branches: [
          "分枝",
          "同一份好奇，伸向不同方向。",
          "青绿与朱红的两组枝叶，借喻不同疾病表型与研究问题。相遇的枝条，把跨性状探索画成彼此可见的联系。",
        ],
        immune: [
          "免疫",
          "把细胞，也放进系统之中。",
          "半透明圆囊与簇状形态，借用了免疫细胞的艺术意象。它们让共享遗传与多组学问题，回到细胞、组织和整个系统的联系之中。",
        ],
      },
      en: {
        title: "Finding the threads that connect.",
        intro:
          "Shared genetic signals between inflammatory bowel disease and stroke bring immune and systemic perspectives into my research.",
        alt: "An original paper-textured painting inspired by shared genetics, inflammatory bowel disease, stroke and systemic immunity",
        overview: [
          "Different diseases can meet in a shared question.",
          "Cross-trait genetics and multi-omics evidence offer ways to examine conditions together. Interwoven branches reflect a search for shared mechanisms and systemic immune connections.",
        ],
        roots: [
          "Shared roots",
          "Beginning again with a shared clue.",
          "Intertwined roots evoke the study of shared genetic foundations. Signals that conditions may have in common offer a starting point for further mechanistic questions.",
        ],
        branches: [
          "Branches",
          "Different directions, a shared curiosity.",
          "Teal and vermilion branches suggest different traits and research questions. Their meeting points turn cross-trait exploration into visible connections.",
        ],
        immune: [
          "Immunity",
          "Cells within a wider system.",
          "Translucent rounded forms evoke immune cells through artistic metaphor. They bring questions about shared genetics and multi-omics back to relationships among cells, tissues and the wider system.",
        ],
      },
    },
    jama: {
      positions: {
        transport: [32, 30],
        metabolism: [60, 77],
        particles: [18, 24],
      },
      zh: {
        title: "让分散的证据，相互照见。",
        intro: "从2型糖尿病与脂肪肝的跨性状遗传，到胆汁酸转运蛋白变异，串联代谢研究中的不同证据。",
        alt: "以糖尿病、脂肪肝跨性状遗传与胆汁酸转运研究为灵感的原创纸本艺术插画",
        overview: [
          "代谢的故事，往往不止一个尺度。",
          "遗传变异、转运过程与疾病表型，是观察代谢联系的不同入口。画面将这些研究线索放在一起，呈现从局部机制走向整体理解的好奇。",
        ],
        transport: [
          "转运",
          "一扇门，连接两种环境。",
          "门状形态借喻物质跨越膜的过程，呼应胆汁酸转运蛋白变异相关研究。一处微观的变化，也可能引出更大的代谢问题。",
        ],
        metabolism: [
          "代谢",
          "在流动之中，寻找联系。",
          "舒展的流域呼应代谢过程的相互联系，也连接到2型糖尿病与脂肪肝的跨性状遗传研究。它把不同尺度的问题放在同一幅画中。",
        ],
        particles: [
          "线索",
          "从一粒线索，到更大的问题。",
          "散落的颗粒借喻参与转运与代谢的不同成分。沿着它们的去向，把局部过程与更广的疾病联系放在一起思考。",
        ],
      },
      en: {
        title: "When separate evidence meets.",
        intro:
          "My metabolic research connects cross-trait genetics of type 2 diabetes and fatty liver with work involving bile acid transporter variants.",
        alt: "An original paper-textured painting inspired by metabolic genetics, diabetes, fatty liver and bile acid transport",
        overview: [
          "Metabolism spans more than one scale.",
          "Genetic variants, transport processes and disease traits offer different points of entry. The painting brings these research threads together, reflecting curiosity about how local mechanisms relate to a broader picture.",
        ],
        transport: [
          "Transport",
          "A doorway between environments.",
          "The doorway evokes movement across a membrane and research involving bile acid transporter variants. A microscopic change can open a wider metabolic question.",
        ],
        metabolism: [
          "Metabolism",
          "Connections in a flowing system.",
          "The broad flowing forms evoke metabolic relationships and cross-trait genetic research on type 2 diabetes and fatty liver. They bring questions at different scales into one painting.",
        ],
        particles: [
          "Clues",
          "A small clue, a wider question.",
          "Scattered particles suggest components involved in transport and metabolism. Following their paths brings local processes into a wider view of disease relationships.",
        ],
      },
    },
  };
  function writeText(node, text, work) {
    node.textContent = "";
    if (work !== "nejm") {
      node.textContent = text;
      return;
    }
    const chunks = String(text).split(/(\bATXN3\b|\bSlc20a2\b)/);
    chunks.forEach((part) => {
      if (part === "ATXN3" || part === "Slc20a2") {
        const gene = document.createElement("i");
        gene.className = "gene-symbol";
        gene.textContent = part;
        node.append(gene);
      } else node.append(document.createTextNode(part));
    });
  }
  const instances = [];
  document.querySelectorAll("[data-art-work]").forEach((host, index) => {
    const work = works[host.dataset.artWork],
      figure = host.querySelector(".art-map"),
      options = host.querySelector(".art-key-options"),
      meaning = host.querySelector(".art-meaning");
    if (!work || !figure || !options || !meaning) return;
    const keys = Object.keys(work.positions),
      scope = host.dataset.artScope || "gallery";
    let selected = null,
      preview = null;
    meaning.id = "art-meaning-" + scope + "-" + index;
    options.textContent = "";
    figure.querySelectorAll(".art-hotspot").forEach((dot) => dot.remove());
    keys.forEach((key) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "art-hotspot";
      dot.dataset.artKey = key;
      dot.style.left = work.positions[key][0] + "%";
      dot.style.top = work.positions[key][1] + "%";
      dot.tabIndex = -1;
      dot.innerHTML = '<span aria-hidden="true"></span>';
      dot.setAttribute("aria-controls", meaning.id);
      figure.append(dot);
      const option = document.createElement("button");
      option.type = "button";
      option.className = "art-key";
      option.dataset.artKey = key;
      option.setAttribute("aria-controls", meaning.id);
      options.append(option);
    });
    const buttons = [...host.querySelectorAll("[data-art-key]")];
    function render() {
      const c = work[lang()],
        active = preview || selected,
        entry = active ? c[active].slice(1) : c.overview;
      options.setAttribute("aria-label", common[lang()].label);
      host.querySelector(".art-eyebrow").textContent = common[lang()].label;
      host.querySelector(".art-heading").textContent = c.title;
      writeText(host.querySelector(".art-intro"), c.intro, host.dataset.artWork);
      figure.querySelector("img").alt = c.alt;
      host.dataset.artSelected = selected || "";
      host.dataset.artPreview = preview || "";
      meaning.dataset.artMeaning = active || "";
      writeText(meaning.querySelector("h4"), entry[0], host.dataset.artWork);
      writeText(meaning.querySelector("p"), entry[1], host.dataset.artWork);
      host.dataset.artActive = active || "";
      buttons.forEach((button) => {
        const key = button.dataset.artKey;
        button.setAttribute("aria-pressed", String(key === active));
        button.setAttribute("aria-label", c[key][0]);
        button.classList.toggle("is-preview", key === preview);
        if (button.classList.contains("art-key")) button.textContent = c[key][0];
      });
    }
    function choose(key, { temporary = false, announce = false } = {}) {
      if (key !== null && !keys.includes(key)) return;
      if (temporary) preview = key;
      else {
        selected = key;
        preview = null;
      }
      meaning.setAttribute("aria-live", announce ? "polite" : "off");
      render();
      if (key)
        dispatchEvent(
          new CustomEvent("artdetailchange", {
            detail: { key, scope, work: host.dataset.artWork, temporary, announce },
          }),
        );
    }
    buttons.forEach((button) => {
      const key = button.dataset.artKey;
      if (button.classList.contains("art-hotspot"))
        button.addEventListener("pointerenter", (event) => {
          if (event.pointerType === "mouse") choose(key, { temporary: true });
        });
      button.addEventListener("click", () => choose(key, { announce: true }));
      button.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const index = keys.indexOf(key),
          next =
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? keys.length - 1
                : (index + (event.key === "ArrowRight" ? 1 : -1) + keys.length) % keys.length;
        choose(keys[next], { announce: true });
        options.querySelector('[data-art-key="' + keys[next] + '"]').focus();
      });
    });
    figure.addEventListener("pointerleave", () => {
      if (preview) {
        preview = null;
        render();
      }
    });
    const api = {
      host,
      scope,
      work: host.dataset.artWork,
      get: () => selected,
      select: (key) => choose(key, { announce: true }),
      reset: () => choose(null),
      render,
    };
    instances.push(api);
    render();
  });
  const gallery = document.getElementById("art-gallery"),
    galleryKeys = ["nature", "cell", "science", "nejm", "bmj", "lancet", "jama"];
  let gallerySelected = "nature";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)"),
    galleryInterval = 11000;
  let galleryVisible = false,
    hovering = false,
    playing = false,
    remaining = galleryInterval,
    startedAt = 0,
    holdUntil = 0,
    playTimer = 0,
    transitionTimer = 0,
    autoChanges = 0;
  function clockRemaining() {
    return Math.max(0, remaining - (playing ? performance.now() - startedAt : 0));
  }
  function pauseClock() {
    if (playing) remaining = clockRemaining();
    playing = false;
    clearTimeout(playTimer);
    playTimer = 0;
  }
  function playbackReasons() {
    const reasons = [];
    if (!galleryVisible) reasons.push("outside-view");
    if (document.hidden) reasons.push("hidden-tab");
    if (reduced.matches) reasons.push("reduced-motion");
    if (root.dataset.motion === "paused") reasons.push("motion-paused");
    if (["boot", "open", "revealing"].includes(root.dataset.intro)) reasons.push("opening");
    if (hovering) reasons.push("pointer");
    if (gallery?.contains(document.activeElement)) reasons.push("focus");
    if (performance.now() < holdUntil) reasons.push("reading");
    return reasons;
  }
  function paintProgress() {
    if (!gallery) return;
    gallery.style.setProperty("--gallery-progress", String(1 - clockRemaining() / galleryInterval));
    gallery.dataset.galleryHolding = String(!playing);
  }
  function syncPlayback() {
    pauseClock();
    if (!gallery) return;
    const reasons = playbackReasons();
    paintProgress();
    if (reasons.length) {
      if (reasons.length === 1 && reasons[0] === "reading")
        playTimer = setTimeout(syncPlayback, Math.max(20, holdUntil - performance.now() + 10));
      return;
    }
    playing = true;
    startedAt = performance.now();
    paintProgress();
    playTimer = setTimeout(tickPlayback, Math.min(250, Math.max(10, remaining)));
  }
  function tickPlayback() {
    playTimer = 0;
    if (playbackReasons().length) {
      syncPlayback();
      return;
    }
    if (clockRemaining() <= 12) {
      pauseClock();
      remaining = galleryInterval;
      autoChanges++;
      selectGallery(galleryKeys[(galleryKeys.indexOf(gallerySelected) + 1) % galleryKeys.length], {
        automatic: true,
      });
    } else {
      paintProgress();
      playTimer = setTimeout(tickPlayback, Math.min(250, clockRemaining()));
    }
  }
  function holdForReading(milliseconds = 18000) {
    pauseClock();
    holdUntil = Math.max(holdUntil, performance.now() + milliseconds);
    remaining = galleryInterval;
    syncPlayback();
  }
  function revealThumbnail(key, smooth = false) {
    const strip = gallery?.querySelector(".art-gallery-tabs"),
      button = gallery?.querySelector('[data-art-gallery-select="' + key + '"]');
    if (!strip || !button || strip.scrollWidth <= strip.clientWidth + 1) return;
    const outer = strip.getBoundingClientRect(),
      inner = button.getBoundingClientRect();
    if (inner.left >= outer.left + 3 && inner.right <= outer.right - 3) return;
    const left = strip.scrollLeft + inner.left - outer.left - (strip.clientWidth - inner.width) / 2;
    strip.scrollTo({
      left: Math.max(0, Math.min(strip.scrollWidth - strip.clientWidth, left)),
      behavior: smooth && !reduced.matches ? "smooth" : "instant",
    });
  }
  function refresh() {
    const c = common[lang()];
    document.querySelectorAll(".personal-portrait img").forEach((img) => (img.alt = c.portrait));
    instances.forEach((item) => item.render());
    if (!gallery) return;
    gallery.querySelector("[data-gallery-label]").textContent = c.galleryLabel;
    gallery.querySelector("[data-gallery-title]").innerHTML = c.galleryTitle;
    gallery.querySelector("[data-gallery-intro]").textContent = c.galleryIntro;
    gallery.querySelector(".art-gallery-tabs").setAttribute("aria-label", c.choose);
    gallery
      .querySelectorAll("[data-art-gallery-select]")
      .forEach(
        (button) =>
          ((button.querySelector("span") || button).textContent =
            c[button.dataset.artGallerySelect]),
      );
  }
  function selectGallery(key, { focus = false, automatic = false, immediate = false } = {}) {
    if (!galleryKeys.includes(key) || !gallery) return false;
    pauseClock();
    const previous = gallerySelected,
      changed = previous !== key,
      animate = changed && !immediate && !reduced.matches && root.dataset.motion !== "paused";
    clearTimeout(transitionTimer);
    gallerySelected = key;
    gallery.dataset.artGallery = key;
    gallery.querySelectorAll("[data-art-gallery-panel]").forEach((panel) => {
      const current = panel.dataset.artGalleryPanel === key,
        outgoing = animate && panel.dataset.artGalleryPanel === previous;
      panel.classList.remove("is-arriving", "is-outgoing");
      panel.hidden = !current && !outgoing;
      panel.inert = !current;
      panel.setAttribute("aria-hidden", String(!current));
      if (animate && current) panel.classList.add("is-arriving");
      if (outgoing) panel.classList.add("is-outgoing");
    });
    gallery.querySelectorAll("[data-art-gallery-select]").forEach((button) => {
      const current = button.dataset.artGallerySelect === key;
      button.setAttribute("aria-selected", String(current));
      button.tabIndex = current ? 0 : -1;
      if (current && focus) button.focus({ preventScroll: true });
    });
    if (animate)
      transitionTimer = setTimeout(() => {
        gallery.querySelectorAll("[data-art-gallery-panel]").forEach((panel) => {
          panel.hidden = panel.dataset.artGalleryPanel !== gallerySelected;
          panel.classList.remove("is-arriving", "is-outgoing");
        });
      }, 870);
    if (focus || automatic) revealThumbnail(key, automatic);
    remaining = galleryInterval;
    if (!automatic && !immediate) holdUntil = Math.max(holdUntil, performance.now() + 18000);
    syncPlayback();
    dispatchEvent(new CustomEvent("wxartgallerychange", { detail: { work: key, automatic } }));
    return true;
  }
  gallery?.querySelectorAll("[data-art-gallery-select]").forEach((button) => {
    button.addEventListener("click", () => selectGallery(button.dataset.artGallerySelect));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const index = galleryKeys.indexOf(button.dataset.artGallerySelect),
        next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? galleryKeys.length - 1
              : (index + (event.key === "ArrowRight" ? 1 : -1) + galleryKeys.length) %
                galleryKeys.length;
      selectGallery(galleryKeys[next], { focus: true });
    });
  });
  window.WX_ART = {
    get: () => instances.find((item) => item.work === gallerySelected)?.get() || null,
    select: (key) => instances.find((item) => item.work === gallerySelected)?.select(key),
    reset: () => instances.forEach((item) => item.reset()),
  };
  window.WX_ART_GALLERY = {
    select: selectGallery,
    selectDetail: (key) =>
      instances
        .find((item) => item.scope === "gallery" && item.work === gallerySelected)
        ?.select(key),
    info: () => ({
      work: gallerySelected,
      selected:
        instances
          .find((item) => item.scope === "gallery" && item.work === gallerySelected)
          ?.get() || null,
      autoplay: {
        interval: galleryInterval,
        running: playing,
        remaining: Math.round(clockRemaining()),
        visible: galleryVisible,
        reasons: playbackReasons(),
        changes: autoChanges,
      },
    }),
    reset: () =>
      instances.filter((item) => item.scope === "gallery").forEach((item) => item.reset()),
  };
  if (gallery) {
    gallery.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        hovering = true;
        syncPlayback();
      }
    });
    gallery.addEventListener("pointerleave", () => {
      hovering = false;
      syncPlayback();
    });
    gallery.addEventListener("pointerdown", () => holdForReading(), { passive: true });
    gallery.addEventListener("focusin", syncPlayback);
    gallery.addEventListener("focusout", () => queueMicrotask(syncPlayback));
    gallery.addEventListener("keydown", () => holdForReading());
    new IntersectionObserver(
      (entries) => {
        galleryVisible = entries[0].isIntersecting;
        syncPlayback();
      },
      { rootMargin: "-100px 0px -50px 0px", threshold: 0.05 },
    ).observe(gallery);
    new MutationObserver(syncPlayback).observe(root, {
      attributes: true,
      attributeFilter: ["data-motion", "data-intro"],
    });
  }
  addEventListener("artdetailchange", (event) => {
    if (event.detail.scope === "gallery" && !event.detail.temporary) holdForReading(30000);
  });
  addEventListener("languagechange", () => {
    refresh();
    holdForReading();
  });
  document.addEventListener("visibilitychange", syncPlayback);
  reduced.addEventListener("change", syncPlayback);
  refresh();
  selectGallery("nature", { immediate: true });
})();

/* 16 · Celestial atlas and reading interaction */
/* Celestial atlas: catalog stars on a spherical projection, with a quiet reading easter egg. */
(() => {
  "use strict";
  const html = document.documentElement,
    reduced = matchMedia("(prefers-reduced-motion: reduce)"),
    D = Math.PI / 180,
    TAU = Math.PI * 2;
  const english = () => window.WX_I18N?.getLang() === "en" || html.lang === "en",
    tr = (zh, en) => (english() ? en : zh);
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n)),
    wrap = (x) => ((x % 360) + 360) % 360;
  const esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    );
  const seed = (n) => {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  const vector = (ra, dec) => {
    const a = ra * D,
      d = dec * D,
      c = Math.cos(d);
    return [c * Math.cos(a), c * Math.sin(a), Math.sin(d)];
  };
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
    cross = (a, b) => [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0],
    ];
  const normal = (v) => {
      const n = Math.hypot(...v) || 1;
      return v.map((x) => x / n);
    },
    coords = (v) => ({
      ra: wrap(Math.atan2(v[1], v[0]) / D),
      dec: Math.asin(clamp(v[2], -1, 1)) / D,
    });
  const catalog = window.WX_STAR_CATALOG || { stars: [], groups: [] };
  const stars = (catalog.stars || []).map((s, i) => ({
    ...s,
    id: String(s.id),
    ra: +s.ra,
    dec: +s.dec,
    mag: Number.isFinite(+s.mag) ? +s.mag : 5,
    phase: seed(i + 18) * TAU,
    members: [],
  }));
  const groups = (catalog.groups || []).map((g) => ({
    ...g,
    id: String(g.id),
    kind: g.kind || "constellation",
  }));
  const byId = new Map(stars.map((s) => [s.id, s])),
    groupsById = new Map(groups.map((g) => [g.id, g]));
  for (const s of stars) s.v = vector(s.ra, s.dec);
  for (const g of groups) {
    g.lines = (g.lines || [])
      .map((l) => l.map(String))
      .filter((l) => l.length >= 2 && byId.has(l[0]) && byId.has(l[1]));
    g.memberIds = [...new Set(g.lines.flat())];
    for (const id of g.memberIds) byId.get(id).members.push(g.id);
    g.center = normal(
      g.memberIds.reduce((v, id) => v.map((x, i) => x + byId.get(id).v[i]), [0, 0, 0]),
    );
    g.radius = Math.max(
      0.25,
      ...g.memberIds.map((id) => Math.acos(clamp(dot(byId.get(id).v, g.center), -1, 1)) / D),
    );
  }
  const aliases = {
    polaris: ["Polaris", "北极星"],
    sirius: ["Sirius", "天狼星"],
    vega: ["Vega", "织女"],
    altair: ["Altair", "牛郎"],
    deneb: ["Deneb", "天津四"],
    betelgeuse: ["Betelgeuse", "参宿四"],
    rigel: ["Rigel", "参宿七"],
    antares: ["Antares", "心宿二"],
    aldebaran: ["Aldebaran", "毕宿五"],
    spica: ["Spica", "角宿一"],
  };
  const resolve = (id) =>
    byId.get(id) ||
    groupsById.get(id) ||
    stars.find((s) =>
      (aliases[id] || [id]).some((a) =>
        [s.en, s.zh, s.proper].some((n) => n && String(n).toLowerCase().includes(a.toLowerCase())),
      ),
    );
  const name = (s) => (english() ? s.en || s.proper || s.id : s.zh || s.en || s.proper || s.id);
  const planets = [
    ["venus", "Venus", "启明星 · 金星"],
    ["moon", "Moon", "月球"],
    ["jupiter", "Jupiter", "木星"],
    ["saturn", "Saturn", "土星"],
    ["mars", "Mars", "火星"],
    ["mercury", "Mercury", "水星"],
    ["uranus", "Uranus", "天王星"],
    ["neptune", "Neptune", "海王星"],
    ["sun", "Sun", "太阳"],
  ].map(([id, en, zh]) => {
    const s = {
      id,
      en,
      zh,
      ra: NaN,
      dec: NaN,
      mag: NaN,
      kind: "planet",
      phase: 0,
      members: [],
      v: [NaN, NaN, NaN],
      available: false,
    };
    stars.unshift(s);
    byId.set(id, s);
    return s;
  });
  const venus = byId.get("venus");
  const descriptions = {
    uranus: [
      "天王星是一颗冰巨星，自转轴倾斜得近乎横卧。它在恒星背景中移动缓慢，切换日期后可以追踪它的地心方向。",
      "Uranus is an ice giant with an unusually tilted spin axis. It moves slowly against the distant stars; change the date to follow its geocentric direction.",
    ],
    neptune: [
      "海王星是八大行星中离太阳最远的一颗，也是一颗冰巨星。它通常需要借助望远镜观察；在这里，可以按选定日期计算它的方向。",
      "Neptune is the outermost of the eight planets and an ice giant. It normally requires a telescope to observe; this atlas calculates its direction for the selected date.",
    ],
    sun: [
      "太阳是离地球最近的恒星。这里保留远方恒星作为背景，展示太阳在天球上的方向，帮助理解太阳系天体随日期移动的轨迹。",
      "The Sun is our nearest star. The atlas keeps the distant stars visible as a reference, showing the Sun’s direction and the changing geometry of the Solar System.",
    ],
    venus: [
      "金星是地球的近邻。出现在日出前时，人们称它为启明星；日落后则称长庚星。它的明亮来自浓厚云层反射的阳光。",
      "Venus is our brilliant planetary neighbour. Before sunrise it is the Morning Star; after sunset, the Evening Star. Thick clouds reflect much of the sunlight that reaches it.",
    ],
    moon: [
      "月球绕地球运行，相位与在天空中的位置随日期改变。切换日期，看它如何沿着星群之间的路径前行。",
      "The Moon orbits Earth, changing both phase and sky position. Step through the dates to follow its path among the stars.",
    ],
    jupiter: [
      "木星是太阳系最大的行星。它相对遥远恒星的位置，会随着自身与地球的公转缓慢改变。",
      "Jupiter is the largest planet in the Solar System. Its position against the distant stars changes as both Jupiter and Earth travel around the Sun.",
    ],
    saturn: [
      "土星以环系闻名。这里显示的是它在全天球中的地心方向；星芒的大小不代表行星的真实尺寸。",
      "Saturn is known for its ring system. This atlas shows its geocentric direction on the celestial sphere; the point of light is not drawn to physical scale.",
    ],
    mars: [
      "火星常呈暖红色。改变日期，可以查看它在恒星背景中的位置变化。",
      "Mars often appears warm and reddish. Change the date to see how its direction shifts against the background stars.",
    ],
    mercury: [
      "水星是离太阳最近的行星，从地球看往往离太阳不远。全天球图展示它的方向，不判断当地是否适合观测。",
      "Mercury is the closest planet to the Sun and stays near it in Earth’s sky. The atlas plots its direction, rather than predicting local observing conditions.",
    ],
    polaris: [
      "北极星靠近北天极，能指引北方。它并非夜空最亮的恒星，却因这个特殊的位置，成为远行者熟悉的坐标。",
      "Polaris lies close to the north celestial pole. It is not the brightest star, but its position has made it a familiar guide to north.",
    ],
    sirius: [
      "天狼星是地球夜空中最明亮的恒星，位于大犬座。它的亮度既与自身发光有关，也与距离太阳较近有关。",
      "Sirius in Canis Major is the brightest star in Earth’s night sky. Its prominence comes from both its intrinsic light and its relative proximity to the Sun.",
    ],
    vega: [
      "织女星位于天琴座，与牛郎星、天津四共同构成夏季大三角。传统故事里的两岸，在这里成为可以慢慢寻找的天空坐标。",
      "Vega in Lyra forms the Summer Triangle with Altair and Deneb. These three bright stars offer an easy route across the northern summer sky.",
    ],
    altair: [
      "牛郎星位于天鹰座，是夏季大三角的顶点之一。与织女星遥遥相望，两颗亮星也是中国星空故事中熟悉的一幕。",
      "Altair in Aquila is one corner of the Summer Triangle. In Chinese sky traditions it is the Cowherd, paired with Vega across the Milky Way.",
    ],
    deneb: [
      "天津四位于天鹅座尾部，是夏季大三角中的一颗亮星。沿着天鹅座的十字形连线，可以顺势寻访银河。",
      "Deneb marks the tail of Cygnus and a corner of the Summer Triangle. The Northern Cross traces the Swan along the Milky Way.",
    ],
    betelgeuse: [
      "参宿四是猎户座肩部的红超巨星。它偏暖的颜色，与猎户座足部蓝白色的参宿七形成鲜明对照。",
      "Betelgeuse is the red supergiant at Orion’s shoulder. Its warm colour contrasts with blue-white Rigel at the Hunter’s foot.",
    ],
    rigel: [
      "参宿七位于猎户座足部，是一颗蓝白色超巨星。借助腰带上的三颗星，可以认出这片醒目的冬夜星群。",
      "Rigel is the blue-white supergiant at Orion’s foot. The three stars of Orion’s Belt make this part of the winter sky easy to recognise.",
    ],
    antares: [
      "心宿二是天蝎座的红超巨星，也是心宿中明亮的核心。沿着两侧的星点，能看见天蝎蜿蜒的身形。",
      "Antares is the red supergiant at the heart of Scorpius and a prominent star of the Heart mansion. Nearby stars trace the Scorpion’s long curve.",
    ],
    aldebaran: [
      "毕宿五是金牛座的一颗橙红色巨星。它在视线上接近毕星团，但并不是该星团的成员。",
      "Aldebaran is an orange giant in Taurus. It lies along the same line of sight as the Hyades but is not a member of that cluster.",
    ],
    spica: [
      "角宿一是室女座最亮的恒星，也是角宿的醒目标志。它的蓝白色光芒来自一个紧密的双星系统。",
      "Spica is the brightest star in Virgo and a marker of the Horn mansion. Its blue-white light comes from a close binary system.",
    ],
  };
  const identity = (s) =>
    descriptions[s.id] ? s.id : Object.keys(aliases).find((k) => resolve(k)?.id === s.id);
  const type = (s) =>
    s.kind === "mansion"
      ? tr("二十八宿", "LUNAR MANSION")
      : groupsById.has(s.id)
        ? tr("星座与星群", "CONSTELLATION / ASTERISM")
        : s.kind === "planet"
          ? tr(
              s.id === "moon" ? "天然卫星" : s.id === "sun" ? "恒星 · 太阳系" : "行星",
              s.id === "moon"
                ? "NATURAL SATELLITE"
                : s.id === "sun"
                  ? "STAR · SOLAR SYSTEM"
                  : "PLANET",
            )
          : tr("恒星", "STAR");
  const state = {
    open: false,
    count: 0,
    unlocked: false,
    selected: null,
    hover: null,
    filter: "featured",
    ra: 83,
    dec: 28,
    fov: 104,
    roll: 0,
    clock: 0,
    frames: 0,
    lastInteraction: 0,
    showLines: true,
    showLabels: true,
    showGrid: false,
    showTrails: false,
    inspection: false,
    date: new Date(),
  };
  let width = 0,
    height = 0,
    dpr = 1,
    cx = 0,
    cy = 0,
    scale = 1,
    raf = 0,
    last = 0,
    tween = null,
    pass = null,
    saved = null,
    queued = false,
    rect = null,
    pan = null,
    pinch = null,
    dragged = false,
    downId = null,
    visibleStars = [],
    groupTargets = [],
    groupSegments = [],
    lastDrawMs = 0,
    meanDrawMs = 0,
    paintPending = false,
    renderedLabels = [],
    layoutReadAt = 0,
    blockedRects = [];
  let basis = { forward: [1, 0, 0], right: [0, 1, 0], up: [0, 0, 1] };
  const pointers = new Map(),
    renderPoints = new Map(),
    pulses = [],
    textWidths = new Map();
  const overlay = document.createElement("div");
  overlay.id = "star-gate";
  overlay.className = "star-gate";
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "star-gate-title");
  overlay.innerHTML = `<canvas class="star-gate-canvas" tabindex="0" role="img" aria-describedby="star-gate-keyboard"></canvas><div class="star-atlas-vignette" aria-hidden="true"></div>
    <header class="star-gate-top"><div><p class="star-atlas-eyebrow" lang="en">A FIELD GUIDE TO THE NIGHT</p><h2 id="star-gate-title"></h2></div><div class="star-gate-actions"><button type="button" class="star-gate-lang"></button><button type="button" class="star-gate-close">×</button></div></header>
    <nav class="star-gate-locators"></nav><div class="star-atlas-date"><button type="button" data-date="previous">‹</button><input type="date" min="1900-01-01" max="2100-12-31"><button type="button" data-date="next">›</button><button type="button" data-date="today"></button></div>
    <aside class="star-atlas-library" id="star-atlas-library"><div class="star-atlas-library-heading"><h3></h3><button type="button" class="star-atlas-library-close">×</button></div><label class="star-atlas-search"><span aria-hidden="true">⌕</span><input id="star-atlas-search" type="search" autocomplete="off" spellcheck="false"><button type="button" class="star-atlas-search-clear" hidden>×</button></label><div class="star-atlas-filters" role="group"><button data-filter="featured" type="button"></button><button data-filter="solar" type="button"></button><button data-filter="constellation" type="button"></button><button data-filter="mansion" type="button"></button></div><p class="star-atlas-result-status" aria-live="polite"></p><div class="star-atlas-results"></div><p class="star-atlas-search-empty" hidden></p></aside>
    <section class="star-atlas-info" aria-live="polite"><div class="star-atlas-info-head"><p class="star-atlas-object-type"></p><button type="button" class="star-atlas-collapse" aria-expanded="true">−</button></div><h3 class="star-atlas-object-name"></h3><p class="star-atlas-object-subtitle"></p><div class="star-atlas-info-body"><p class="star-atlas-description"></p><dl class="star-atlas-metadata"></dl><div class="star-atlas-members"></div><div class="star-atlas-object-actions"><button type="button" data-object-action="focus"></button><button type="button" data-object-action="closer"></button><a class="star-atlas-source" target="_blank" rel="noopener"></a></div></div><a class="star-gate-enter" hidden></a></section>
    <div class="star-atlas-viewtools"><button type="button" data-tool="directory" aria-controls="star-atlas-library" aria-expanded="false"></button><div class="star-gate-zoom"><button type="button" data-zoom="out">−</button><output></output><button type="button" data-zoom="in">+</button></div><button type="button" data-tool="reset"></button><button type="button" data-tool="note" aria-controls="star-gate-note" aria-expanded="false">?</button></div>
    <div class="star-atlas-layers" role="group"><button type="button" data-layer="lines" aria-pressed="true"></button><button type="button" data-layer="labels" aria-pressed="true"></button><button type="button" data-layer="grid" aria-pressed="false"></button><button type="button" data-layer="trails" aria-pressed="false"></button></div><div class="star-atlas-coordinates" aria-hidden="true" hidden><span></span><span></span></div>
    <section class="star-gate-note" id="star-gate-note" hidden><button type="button" class="star-gate-note-close">×</button><h3></h3><p class="star-gate-note-copy"></p><p class="star-gate-note-sources"></p></section><div class="star-atlas-hover" hidden></div><p class="star-gate-sr" id="star-gate-keyboard"></p><p class="star-gate-sr star-atlas-announcement" role="status"></p>`;
  document.body.append(overlay);
  const $ = (q) => overlay.querySelector(q),
    $$ = (q) => [...overlay.querySelectorAll(q)],
    canvas = $("canvas"),
    ctx = canvas.getContext("2d", { alpha: false }),
    search = $("#star-atlas-search");
  const sprites = ["#d8e9ff", "#f4ecd5", "#f2bd91", "#b8d3ff", "#b3e1da"].map((color) => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d"),
      r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, color);
    r.addColorStop(0.06, color + "ff");
    r.addColorStop(0.17, color + "75");
    r.addColorStop(0.38, color + "17");
    r.addColorStop(1, color + "00");
    g.fillStyle = r;
    g.fillRect(0, 0, 64, 64);
    return c;
  });
  const colorIndex = (s) =>
    s.kind === "planet"
      ? s.id === "mars"
        ? 2
        : s.id === "uranus"
          ? 4
          : s.id === "neptune"
            ? 3
            : 1
      : !Number.isFinite(+s.bv)
        ? 0
        : +s.bv > 1
          ? 2
          : +s.bv > 0.45
            ? 1
            : +s.bv < 0
              ? 3
              : 0;
  function frame() {
    const ra = state.ra * D,
      dec = state.dec * D,
      cr = Math.cos(state.roll),
      sr = Math.sin(state.roll),
      right = [Math.sin(ra), -Math.cos(ra), 0],
      up = [-Math.sin(dec) * Math.cos(ra), -Math.sin(dec) * Math.sin(ra), Math.cos(dec)];
    basis = {
      forward: vector(state.ra, state.dec),
      right: right.map((v, i) => v * cr + up[i] * sr),
      up: up.map((v, i) => v * cr - right[i] * sr),
    };
    scale = Math.min(width, height) / (2 * Math.tan((state.fov * D) / 4));
  }
  function project(v) {
    const z = dot(v, basis.forward),
      den = 1 + z;
    if (den < 0.08) return null;
    return {
      x: cx + (scale * dot(v, basis.right)) / den,
      y: cy - (scale * dot(v, basis.up)) / den,
      z,
    };
  }
  function unproject(x, y) {
    const a = (x - cx) / scale,
      b = -(y - cy) / scale,
      r = a * a + b * b,
      k = 1 / (1 + r);
    return normal(
      basis.right.map(
        (v, i) => 2 * a * k * v + 2 * b * k * basis.up[i] + (1 - r) * k * basis.forward[i],
      ),
    );
  }
  const fmtRa = (ra) => {
    const h = wrap(ra) / 15;
    return (
      String(Math.floor(h)).padStart(2, "0") +
      "h " +
      String(Math.floor((h % 1) * 60)).padStart(2, "0") +
      "m"
    );
  };
  const fmtDec = (dec) => (dec < 0 ? "−" : "+") + Math.abs(dec).toFixed(1) + "°";
  const dateString = () => state.date.toISOString().slice(0, 10);
  function ephemeris() {
    for (const s of planets) {
      try {
        if (!window.Astronomy) throw Error("No ephemeris");
        const p = Astronomy.EquatorFromVector(Astronomy.GeoVector(s.en, state.date, true)),
          ill = Astronomy.Illumination(s.en, state.date);
        if (![p.ra, p.dec, ill.mag, ill.phase_fraction].every(Number.isFinite))
          throw Error("Invalid ephemeris");
        s.ra = p.ra * 15;
        s.dec = p.dec;
        s.mag = ill.mag;
        s.phaseFraction = ill.phase_fraction;
        s.available = true;
        s.v = vector(s.ra, s.dec);
      } catch {
        s.available = false;
        s.ra = s.dec = s.mag = NaN;
        s.v = [NaN, NaN, NaN];
        if (state.selected === s.id) state.selected = null;
      }
    }
    $(".star-atlas-date input").value = dateString();
    $(".star-atlas-date").hidden = !planets.some((s) => s.available);
  }
  function interact() {
    state.lastInteraction = performance.now();
  }
  function targetFor(obj, closer = false) {
    if (groupsById.has(obj.id))
      return {
        ...coords(obj.center),
        fov: closer
          ? clamp(Math.min(state.fov * 0.56, obj.radius * 2.2), 4, 122)
          : clamp(obj.radius * 3.2, 8, 122),
        roll: 0,
      };
    return {
      ra: obj.ra,
      dec: obj.dec,
      fov: closer
        ? clamp(Math.min(12, state.fov * 0.56), 4, 140)
        : clamp(Math.min(state.fov, 32), 18, 40),
      roll: state.roll,
    };
  }
  function moveCamera(target, animated = true) {
    interact();
    const to = { ...target };
    to.ra = state.ra + (((to.ra - state.ra + 540) % 360) - 180);
    if (!animated || reduced.matches) {
      Object.assign(state, to);
      state.ra = wrap(state.ra);
      tween = null;
      frame();
      updateZoom();
      draw();
      return;
    }
    tween = {
      from: { ra: state.ra, dec: state.dec, fov: state.fov, roll: state.roll },
      to,
      start: performance.now(),
      duration: 1000,
    };
    schedule();
  }
  function findGroup(qs) {
    return groups.find((g) =>
      qs.some((q) =>
        [g.id, g.zh, g.en].some((t) => t && String(t).toLowerCase().includes(q.toLowerCase())),
      ),
    );
  }
  const quick = [
    ["venus", () => venus],
    ["polaris", () => resolve("polaris")],
    ["dipper", () => findGroup(["big dipper", "北斗"])],
    ["orion", () => findGroup(["orion", "猎户"])],
    ["mansions", () => groups.find((g) => g.kind === "mansion")],
  ];

  function renderText() {
    overlay.lang = english() ? "en" : "zh-CN";
    $("#star-gate-title").textContent = tr("星河漫游", "Atlas of starlight");
    $(".star-gate-lang").textContent = english() ? "中文" : "EN";
    $(".star-gate-lang").setAttribute("aria-label", tr("切换为英文", "Switch to Chinese"));
    $(".star-gate-close").setAttribute("aria-label", tr("返回主页", "Return to the profile"));
    $(".star-gate-locators").setAttribute(
      "aria-label",
      tr("常见星体与星群", "Familiar objects and star patterns"),
    );
    $(".star-gate-locators").innerHTML = quick
      .map(([id, get]) => {
        const o = get();
        return o && o.available !== false
          ? '<button type="button" data-locate="' +
              esc(id) +
              '">' +
              (id === "mansions"
                ? tr("二十八宿", "28 mansions")
                : id === "venus"
                  ? tr("启明星", "Venus")
                  : esc(name(o))) +
              "</button>"
          : "";
      })
      .join("");
    $(".star-atlas-library-heading h3").textContent = tr("循名寻星", "Find your way");
    $(".star-atlas-library-close").setAttribute(
      "aria-label",
      tr("收起星名簿", "Close star library"),
    );
    search.placeholder = tr("星名、星座或星宿", "A star, constellation or mansion");
    search.setAttribute("aria-label", tr("搜索星空", "Search the sky"));
    const filters = {
      featured: ["常看", "Highlights"],
      solar: ["太阳系", "Solar system"],
      constellation: ["星群", "Patterns"],
      mansion: ["星宿", "Mansions"],
    };
    $$("[data-filter]").forEach((b) => {
      b.textContent = tr(...filters[b.dataset.filter]);
      b.setAttribute("aria-pressed", String(state.filter === b.dataset.filter));
    });
    $(".star-atlas-search-empty").textContent = tr(
      "未找到匹配项。试试“海王星”“织女”“北斗”或 HIP 编号；清除搜索即可重新浏览。",
      "No match yet. Try Neptune, Vega, Orion or a HIP number. Clear the search to browse again.",
    );
    $(".star-atlas-search-clear").setAttribute(
      "aria-label",
      tr("清除搜索，重新浏览", "Clear search and browse again"),
    );
    $('[data-tool="directory"]').textContent = tr("星名簿", "Library");
    $('[data-tool="reset"]').textContent = tr("全景", "Overview");
    $('[data-tool="note"]').setAttribute("aria-label", tr("关于星图", "About this atlas"));
    $(".star-gate-note-close").setAttribute("aria-label", tr("关闭说明", "Close note"));
    $('[data-zoom="in"]').setAttribute("aria-label", tr("放大星空", "Zoom in"));
    $('[data-zoom="out"]').setAttribute("aria-label", tr("缩小星空", "Zoom out"));
    $('[data-date="previous"]').setAttribute("aria-label", tr("前一天", "Previous day"));
    $('[data-date="next"]').setAttribute("aria-label", tr("后一天", "Next day"));
    $('[data-date="today"]').textContent = tr("今天", "Today");
    $(".star-atlas-date input").setAttribute(
      "aria-label",
      tr("行星位置日期，世界时", "Planet positions date, UTC"),
    );
    const layers = {
      lines: ["连线", "Lines"],
      labels: ["星名", "Names"],
      grid: ["坐标", "Coordinates"],
      trails: ["星轨", "Trails"],
    };
    $$("[data-layer]").forEach((b) => {
      b.textContent = tr(...layers[b.dataset.layer]);
      b.setAttribute(
        "aria-pressed",
        String(state["show" + b.dataset.layer[0].toUpperCase() + b.dataset.layer.slice(1)]),
      );
    });
    $(".star-gate-note h3").textContent = tr("读懂这片星空", "Reading this sky");
    $(".star-gate-note-copy").textContent = tr(
      "恒星位置来自 J2000 星表；星座与二十八宿按真实成员连接，放大可逐颗寻访。视野缓慢巡游，拖动或选中对象后停留供你观察。它是一张全天球探索图，不是基于你所在地的实时观测图。日期按世界时计算，太阳系天体的位置随日期更新。星芒与银河雾带经过艺术化处理；天体大小不按物理比例。",
      "Stars retain their J2000 catalog positions. Constellations and the 28 mansions connect real member stars; zoom in to explore them. The view drifts gently, then settles while you inspect. This is an all-sky atlas, not a live horizon view for your location. Dates use UTC and update the geocentric directions of Solar System objects. Star glows and the diffuse Milky Way are stylised; point sizes are not physical diameters.",
    );
    if (!planets.every((s) => s.available))
      $(".star-gate-note-copy").textContent += tr(
        " 当前太阳系历算未能完整载入；缺少计算结果的天体已隐藏，恒星和星群仍可浏览。",
        " Some Solar System calculations are unavailable. Those bodies are hidden; the stellar atlas remains available.",
      );
    $(".star-gate-note-sources").innerHTML =
      (catalog.sources || [])
        .slice(0, 5)
        .map(
          (s) =>
            '<a href="' +
            esc(s.url || s.href || s) +
            '" target="_blank" rel="noopener">' +
            esc(s.name || s.title || "Source") +
            "</a>",
        )
        .join(" · ") +
      '<br><a href="assets/star-catalog-license.md" target="_blank" rel="noopener">' +
      tr("星表来源与许可", "Catalog sources & licences") +
      "</a>";
    $("#star-gate-keyboard").textContent = tr(
      "拖动浏览全天球，滚轮或双指缩放；双指旋转。方向键转动视野，加减号缩放，Home 恢复全景。星名簿可搜索并定位星体。Escape 返回主页。",
      "Drag to explore the celestial sphere; scroll or pinch to zoom and twist with two fingers to rotate. Arrow keys turn the view, plus and minus zoom, and Home returns to the overview. Search the library to find an object. Escape returns to the profile.",
    );
    canvas.setAttribute(
      "aria-label",
      tr(
        "可自由浏览的星空，支持搜索星体、查看真实星座连线和二十八宿",
        "An explorable celestial atlas with catalog stars, constellation lines and the 28 lunar mansions",
      ),
    );
    $('[data-layer="grid"]').title = tr(
      "切换赤道网格、视野坐标与赤经赤纬",
      "Toggle the equatorial grid, view coordinates and RA/Dec readouts",
    );
    $('[data-layer="trails"]').title = tr(
      "长曝光星轨示意；在北极星附近观察更清楚",
      "Illustrative long-exposure trails; explore around Polaris",
    );
    $(".star-gate-note-copy").textContent += tr(
      " 星轨以真实恒星位置为端点，绕天极描绘 22.5° 的长曝光弧线；是地球自转视运动的示意，流光速度经过艺术化处理，不改变星表坐标，也不模拟当地地平线。",
      " Trails end at catalog stars and trace 22.5-degree arcs around the celestial poles. They illustrate long exposures caused by Earth’s rotation. Moving highlights are artistic; catalog coordinates stay fixed and no local horizon is simulated.",
    );
    renderLibrary();
    renderInfo();
    updateLayers();
    updateZoom();
    if (state.open) draw();
  }
  const normalizeQuery = (value) =>
    String(value ?? "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f\s·.()]/g, "")
      .toLocaleLowerCase();
  const extraSearch = {
    venus: "启明星 长庚星 晨星 昏星 morning evening",
    moon: "月 月亮 太阴",
    sun: "日 太阳 阳光",
    vega: "织女 织女一",
    altair: "牛郎 河鼓二",
    polaris: "北极 北辰 勾陈一",
    pleiades: "七姐妹 七姊妹 昴星团 昴宿",
    dipper: "北斗 七星 勺子",
    orion: "猎户 参宿",
    cassiopeia: "仙后 W",
    "summer-triangle": "夏季大三角 织女 牛郎 天津四",
    "mansion-17": "昴星团 七姐妹 七姊妹",
  };
  const searchPool = [...groups, ...stars];
  for (const obj of searchPool)
    obj.searchText = normalizeQuery(
      [
        obj.zh,
        obj.en,
        obj.proper,
        obj.id,
        obj.hip ? "HIP " + obj.hip : "",
        extraSearch[obj.id] || "",
      ].join(" "),
    );
  const highlightedIds = [
    "venus",
    "moon",
    "polaris",
    "sirius",
    "vega",
    "altair",
    "deneb",
    "betelgeuse",
    "rigel",
    "arcturus",
    "capella",
    "canopus",
    "antares",
    "aldebaran",
    "spica",
    "pollux",
    "procyon",
    "fomalhaut",
    "regulus",
    "achernar",
    "rigil-kentaurus",
    "dubhe",
    "mizar",
    "alkaid",
    "dipper",
    "orion",
    "cassiopeia",
    "summer-triangle",
    "pleiades",
    "great-square",
  ];
  function renderLibrary() {
    const q = normalizeQuery(search.value);
    let items;
    if (q)
      items = searchPool
        .filter((s) => s.available !== false && s.searchText.includes(q))
        .sort(
          (a, b) => Number(normalizeQuery(name(b)) === q) - Number(normalizeQuery(name(a)) === q),
        );
    else if (state.filter === "solar")
      items = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune"]
        .map((id) => byId.get(id))
        .filter((s) => s?.available);
    else if (state.filter === "mansion") items = groups.filter((g) => g.kind === "mansion");
    else if (state.filter === "constellation") items = groups.filter((g) => g.kind !== "mansion");
    else items = highlightedIds.map((id) => resolve(id)).filter((s) => s && s.available !== false);
    const limit = 80;
    $(".star-atlas-search-clear").hidden = !search.value;
    $$("[data-filter]").forEach((b) =>
      b.setAttribute("aria-pressed", String(!q && state.filter === b.dataset.filter)),
    );
    $(".star-atlas-result-status").textContent = q
      ? tr(
          items.length + " 条匹配" + (items.length > limit ? " · 显示前 " + limit + " 条" : ""),
          items.length + " matches" + (items.length > limit ? " · First " + limit + " shown" : ""),
        )
      : state.filter === "solar"
        ? tr(
            items.length + " 个太阳系天体 · 地心视角",
            items.length + " Solar System objects · Geocentric view",
          )
        : tr(items.length + " 个入口 · 选择星名即可前往", items.length + " places to explore");
    $(".star-atlas-results").innerHTML = items
      .slice(0, limit)
      .map(
        (o) =>
          '<button type="button" class="star-atlas-result" data-object="' +
          esc(o.id) +
          '"' +
          (o.id === state.selected ? ' aria-current="true"' : "") +
          '><span class="star-atlas-result-dot ' +
          (groupsById.has(o.id) ? "is-pattern" : "") +
          '" aria-hidden="true"></span><span><strong>' +
          esc(name(o)) +
          "</strong><small>" +
          esc(
            groupsById.has(o.id)
              ? o.kind === "mansion"
                ? tr("传统星宿", "Lunar mansion")
                : tr("星座 / 星群", "Sky pattern")
              : o.kind === "planet"
                ? tr(
                    o.id === "sun"
                      ? "太阳系 · 恒星"
                      : o.id === "moon"
                        ? "地球的天然卫星"
                        : "太阳系 · 行星",
                    o.id === "sun"
                      ? "Our nearest star"
                      : o.id === "moon"
                        ? "Earth’s natural satellite"
                        : "Solar System planet",
                  )
                : english()
                  ? ""
                  : o.en || o.proper || "",
          ) +
          '</small></span><span class="star-atlas-result-arrow" aria-hidden="true">↗</span></button>',
      )
      .join("");
    $(".star-atlas-search-empty").hidden = items.length > 0;
  }
  function renderInfo() {
    layoutReadAt = 0;
    const obj = byId.get(state.selected) || groupsById.get(state.selected),
      body = $(".star-atlas-info-body");
    $(".star-atlas-info").dataset.object = state.selected || "overview";
    $(".star-atlas-object-type").textContent = obj
      ? type(obj)
      : tr("全天球 · 自由探索", "THE CELESTIAL SPHERE");
    $(".star-atlas-object-name").textContent = obj
      ? name(obj)
      : tr("星光之间，自有来路。", "Every star, another way.");
    $(".star-atlas-object-subtitle").textContent = obj
      ? english()
        ? ""
        : obj.en || obj.proper || ""
      : tr("循星而行，不必匆忙。", "A sky to explore at your own pace.");
    $(".star-atlas-collapse").setAttribute(
      "aria-label",
      tr(
        body.hidden ? "展开星体介绍" : "收起星体介绍",
        body.hidden ? "Expand object details" : "Collapse object details",
      ),
    );
    let description = tr(
      "从一颗熟悉的星出发，向更远的星群漫游。拖动天空改变方向，放大后让细小的星点逐渐显现。",
      "Begin with a familiar star and wander into a wider sky. Drag to look around; zoom in and fainter stars emerge.",
    );
    if (obj) {
      const pair = descriptions[identity(obj)];
      description = english()
        ? obj.descriptionEn ||
          pair?.[1] ||
          "A catalog star on the celestial sphere. Coordinates describe a direction in the sky; magnitude indicates apparent brightness. Lower magnitudes are brighter."
        : obj.descriptionZh ||
          pair?.[0] ||
          "星表中的一颗恒星。赤经与赤纬标记它在天空中的方向；视星等描述从地球看去的亮度，数值越小越明亮。";
      if (groupsById.has(obj.id) && !obj.descriptionZh && !obj.descriptionEn)
        description =
          obj.kind === "mansion"
            ? tr(
                "二十八宿之一。图中的连线连接本宿的主要星官成员，保持它们在星表中的相对位置。选择下方的星名，可以逐颗走近。",
                "One of the 28 traditional lunar mansions. The lines connect its member stars in their celestial geometry. Choose a member below to explore it.",
              )
            : tr(
                "这些恒星在视线中组成熟悉的图案，实际距离却各不相同。循着连线，认出它的轮廓。",
                "These stars form a familiar pattern in our line of sight, although their distances differ. Follow the lines to recognise the shape.",
              );
    }
    $(".star-atlas-description").textContent = description;
    const group = obj && groupsById.has(obj.id),
      point = obj ? (group ? coords(obj.center) : obj) : { ra: state.ra, dec: state.dec };
    const stats =
      obj && !group
        ? [
            [tr("赤经", "RA"), fmtRa(point.ra)],
            [tr("赤纬", "DEC"), fmtDec(point.dec)],
            [tr("视星等", "MAG"), Number(obj.mag).toFixed(2)],
          ]
        : [
            [tr("赤经", "RA"), fmtRa(point.ra)],
            [tr("赤纬", "DEC"), fmtDec(point.dec)],
            [
              group ? tr("连线成员", "PATTERN STARS") : tr("恒星", "CATALOG STARS"),
              group ? obj.memberIds.length : catalog.stars.length.toLocaleString(),
            ],
          ];
    if (obj?.kind === "planet" && obj.id !== "sun" && Number.isFinite(obj.phaseFraction))
      stats.push([tr("亮面比例", "ILLUMINATED"), Math.round(obj.phaseFraction * 100) + "%"]);
    else if (
      obj &&
      !group &&
      Number.isFinite(+obj.distanceLY) &&
      obj.distanceLY > 0 &&
      obj.distanceLY < 100000
    )
      stats.push([
        tr("约距太阳", "APPROX. DISTANCE"),
        Number(obj.distanceLY).toLocaleString(english() ? "en" : "zh") + tr(" 光年", " ly"),
      ]);
    $(".star-atlas-metadata").innerHTML = stats
      .map(
        ([k, v], i) =>
          "<div" +
          (i < 2 ? " data-coordinate" + (state.showGrid ? "" : " hidden") : "") +
          "><dt>" +
          esc(k) +
          "</dt><dd>" +
          esc(v) +
          "</dd></div>",
      )
      .join("");
    const members = group
      ? obj.memberIds.map((id) => byId.get(id))
      : obj
        ? (obj.members || []).map((id) => groupsById.get(id)).filter(Boolean)
        : [];
    $(".star-atlas-members").innerHTML = members
      .slice(0, 24)
      .map(
        (o) =>
          '<button type="button" data-object="' + esc(o.id) + '">' + esc(name(o)) + "</button>",
      )
      .join("");
    $('[data-object-action="focus"]').textContent = obj
      ? tr("居中观察", "Centre view")
      : tr("寻访北斗", "Find the Dipper");
    $('[data-object-action="closer"]').textContent = tr("走近一些", "Look closer");
    const source = $(".star-atlas-source");
    source.textContent = tr("星表记录 ↗", "Catalog record ↗");
    source.hidden = !obj || group;
    if (obj?.kind === "planet") {
      source.textContent = "NASA ↗";
      source.href = "https://science.nasa.gov/" + obj.id + "/";
    } else
      source.href = obj
        ? "https://simbad.cds.unistra.fr/simbad/sim-id?Ident=" +
          encodeURIComponent(obj.hip ? "HIP " + obj.hip : obj.en || obj.proper || obj.id)
        : "#";
    $(".star-gate-enter").hidden = !state.unlocked;
    $(".star-gate-enter").textContent = tr(
      "星光相逢 · 展开学术简历 ↗",
      "A hidden page · Open academic CV ↗",
    );
    if (pass) {
      const u = new URL("assets/resume.html", location.href);
      u.searchParams.set("lang", english() ? "en" : "zh");
      u.hash = new URLSearchParams({ "cv-pass": pass }).toString();
      $(".star-gate-enter").href = u.href;
    }
    overlay.dataset.unlocked = String(state.unlocked);
  }
  function issuePass() {
    const bytes = new Uint8Array(16);
    if (window.crypto?.getRandomValues) crypto.getRandomValues(bytes);
    else bytes.forEach((_, i) => (bytes[i] = Math.floor(Math.random() * 256)));
    pass =
      "v11." +
      (Date.now() + 600000).toString(36) +
      "." +
      [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
    try {
      sessionStorage.setItem("wx-cv-pass-v11", pass);
    } catch {}
  }
  function selectObject(id, { activate = false, fly = true, closer = false } = {}) {
    const obj = byId.get(id) || groupsById.get(id) || resolve(id);
    if (!obj || obj.available === false || !state.open) return;
    interact();
    state.selected = obj.id;
    state.inspection = true;
    state.showLines = true;
    let newlyUnlocked = false;
    pulses.push({ id: obj.id, start: performance.now() });
    if (activate && !state.unlocked) {
      state.count = obj.id === "venus" ? state.count + 1 : 0;
      if (state.count >= 3) {
        state.unlocked = true;
        newlyUnlocked = true;
        issuePass();
        $(".star-atlas-announcement").textContent = tr(
          "一页新的文字，已随星光展开。",
          "A hidden page is now open.",
        );
        $(".star-atlas-info-body").hidden = true;
        $(".star-atlas-info").classList.add("is-collapsed");
        $(".star-atlas-collapse").textContent = "+";
        $(".star-atlas-collapse").setAttribute("aria-expanded", "false");
      }
    }
    if (fly) moveCamera(targetFor(obj, closer));
    renderInfo();
    renderLibrary();
    updateLayers();
    if (newlyUnlocked) {
      $(".star-atlas-info").scrollTop = 0;
      $(".star-gate-enter").focus({ preventScroll: true });
    }
    draw();
    schedule();
  }
  function resetView(animated = true) {
    state.selected = null;
    state.inspection = false;
    state.hover = null;
    state.count = 0;
    moveCamera({ ra: 83, dec: 28, fov: 104, roll: 0 }, animated);
    renderInfo();
    renderLibrary();
    draw();
  }
  function updateZoom() {
    const out = $(".star-gate-zoom output");
    out.textContent = Math.round((104 / state.fov) * 100) + "%";
    out.title = tr("视野", "Field of view") + " " + state.fov.toFixed(1) + "°";
    $('[data-zoom="in"]').disabled = state.fov <= 4.05;
    $('[data-zoom="out"]').disabled = state.fov >= 139.95;
    $('[data-object-action="closer"]').disabled = state.fov <= 4.05;
  }
  function zoomAt(factor, x = cx, y = cy) {
    interact();
    tween = null;
    frame();
    const before = coords(unproject(x, y));
    state.fov = clamp(state.fov / factor, 4, 140);
    frame();
    const after = coords(unproject(x, y));
    state.ra = wrap(state.ra + (((before.ra - after.ra + 540) % 360) - 180));
    state.dec = clamp(state.dec + before.dec - after.dec, -89.7, 89.7);
    state.inspection = true;
    frame();
    updateZoom();
    draw();
  }
  function resize() {
    if (!state.open) return;
    const vv = window.visualViewport,
      available = Math.min(innerHeight, vv?.height || innerHeight),
      coarse = matchMedia("(pointer:coarse)").matches;
    overlay.style.height = Math.round(available) + "px";
    overlay.style.top = Math.max(0, vv?.offsetTop || 0) + "px";
    overlay.style.setProperty("--sg-vh", Math.round(available) + "px");
    overlay.dataset.keyboard = String(coarse && available < innerHeight * 0.76);
    width = overlay.clientWidth;
    height = overlay.clientHeight;
    dpr = Math.min(
      devicePixelRatio || 1,
      coarse ? 1.65 : 2,
      Math.sqrt((coarse ? 3000000 : 4500000) / (width * height)),
    );
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    cx = width * (width >= 1200 ? 0.52 : width > height ? 0.43 : 0.5);
    cy = height * (width < 760 && height > width ? 0.37 : 0.49);
    rect = canvas.getBoundingClientRect();
    layoutReadAt = 0;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    frame();
    draw();
  }
  function linePath(a, b, id) {
    const pa = project(a),
      pb = project(b);
    if (!pa || !pb || Math.hypot(pa.x - pb.x, pa.y - pb.y) > Math.max(width, height) * 1.6) return;
    ctx.moveTo(pa.x, pa.y);
    ctx.lineTo(pb.x, pb.y);
    if (id) groupSegments.push({ id, x1: pa.x, y1: pa.y, x2: pb.x, y2: pb.y });
  }
  function drawGrid() {
    ctx.strokeStyle = "#789cac50";
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    for (let ra = 0; ra < 360; ra += 30) {
      let prev = null;
      for (let dec = -86; dec <= 86; dec += 4) {
        const v = vector(ra, dec);
        if (prev) linePath(prev, v);
        prev = v;
      }
    }
    for (let dec = -60; dec <= 60; dec += 30) {
      let prev = null;
      for (let ra = 0; ra <= 360; ra += 4) {
        const v = vector(ra, dec);
        if (prev) linePath(prev, v);
        prev = v;
      }
    }
    ctx.stroke();
  }
  const galacticPole = vector(192.85948, 27.12825),
    galacticEast = normal(cross(galacticPole, [0, 0, 1])),
    galacticNorth = normal(cross(galacticPole, galacticEast));
  const haze = Array.from({ length: 80 }, (_, i) => {
    const a = (i / 80) * TAU;
    return normal(galacticEast.map((x, k) => x * Math.cos(a) + galacticNorth[k] * Math.sin(a)));
  });
  const cloudSprite = (() => {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const g = c.getContext("2d"),
      r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, "#53607310");
    r.addColorStop(0.45, "#384e6210");
    r.addColorStop(1, "#30425b00");
    g.fillStyle = r;
    g.fillRect(0, 0, 128, 128);
    return c;
  })();

  // Long-exposure illustration: constant declination, rotation about the celestial pole.
  // The stored catalog vectors and the hit-test positions never move with this overlay.
  const trailStars = stars
    .filter((s) => s.kind !== "planet" && s.mag <= 5)
    .sort((a, b) => a.mag - b.mag);
  const trailCache = new Map(),
    trailRotations = Array.from({ length: 25 }, (_, i) => {
      const a = (1 - i / 24) * 22.5 * D;
      return [Math.cos(a), Math.sin(a)];
    });
  let drawnTrails = 0,
    trailSample = null;
  function drawTrails() {
    drawnTrails = 0;
    trailSample = null;
    if (!state.showTrails) return;
    const budget = width < 760 ? 80 : width < 1600 ? 140 : 190;
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const star of trailStars) {
      const head = project(star.v);
      if (
        !head ||
        head.z < -0.1 ||
        head.x < -50 ||
        head.x > width + 50 ||
        head.y < -50 ||
        head.y > height + 50
      )
        continue;
      let vectors = trailCache.get(star.id);
      if (!vectors) {
        vectors = trailRotations.map(([c, s]) => [
          star.v[0] * c - star.v[1] * s,
          star.v[0] * s + star.v[1] * c,
          star.v[2],
        ]);
        trailCache.set(star.id, vectors);
      }
      const points = vectors.map(project);
      if (points.some((p) => !p || p.z < -0.45)) continue;
      const tail = points[0];
      if (Math.hypot(head.x - tail.x, head.y - tail.y) < 1.4) continue;
      const color = ["#c4ddf6", "#eee0bc", "#e9b18e", "#9cbfe8", "#addace"][colorIndex(star)];
      const gradient = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
      gradient.addColorStop(0, color + "00");
      gradient.addColorStop(0.32, color + "32");
      gradient.addColorStop(1, color + "b0");
      ctx.globalAlpha = clamp(0.85 - star.mag * 0.09, 0.3, 0.95);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = star.mag < 2 ? 1.15 : 0.7;
      ctx.beginPath();
      points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.stroke();
      const progress = reduced.matches ? 0.65 : (state.clock * 0.055 + star.phase / TAU) % 1,
        position = progress * 24,
        lower = Math.min(23, Math.floor(position)),
        fraction = position - lower;
      const a = points[lower],
        b = points[lower + 1];
      ctx.globalAlpha = Math.sin(progress * Math.PI) * 0.55;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(
        a.x + (b.x - a.x) * fraction,
        a.y + (b.y - a.y) * fraction,
        star.mag < 2 ? 1.5 : 0.95,
        0,
        TAU,
      );
      ctx.fill();
      if (!trailSample)
        trailSample = {
          id: star.id,
          declination: star.dec,
          head: coords(vectors[24]),
          tail: coords(vectors[0]),
        };
      if (++drawnTrails >= budget) break;
    }
    ctx.restore();
  }

  function requestDraw() {
    paintPending = true;
    schedule();
  }
  function draw() {
    requestDraw();
  }
  function measuredText(text, font) {
    const key = font + "|" + text;
    if (textWidths.has(key)) return textWidths.get(key);
    ctx.font = font;
    const w = ctx.measureText(text).width;
    textWidths.set(key, w);
    return w;
  }
  function sceneObstacles() {
    const now = performance.now();
    if (now - layoutReadAt < 250) return blockedRects;
    layoutReadAt = now;
    const origin = canvas.getBoundingClientRect();
    blockedRects = [];
    for (const selector of [
      ".star-gate-top",
      ".star-gate-locators",
      ".star-atlas-date",
      ".star-atlas-library",
      ".star-atlas-info",
      ".star-atlas-viewtools",
      ".star-atlas-layers",
      ".star-gate-note",
    ]) {
      const el = $(selector);
      if (!el || el.hidden || el.inert || getComputedStyle(el).visibility === "hidden") continue;
      const r = el.getBoundingClientRect();
      if (r.width && r.height)
        blockedRects.push({
          x: r.x - origin.x - 7,
          y: r.y - origin.y - 5,
          w: r.width + 14,
          h: r.height + 10,
        });
    }
    return blockedRects;
  }
  const overlaps = (a, b, pad = 0) =>
    a.x < b.x + b.w + pad &&
    a.x + a.w + pad > b.x &&
    a.y < b.y + b.h + pad &&
    a.y + a.h + pad > b.y;
  let lastPaintAt = 0;
  function paint() {
    if (!state.open || !width || !height) return;
    const started = performance.now(),
      fontScale = width >= 2000 ? Math.min(1.6, width / 1800) : 1;
    paintPending = false;
    frame();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#07101c";
    ctx.fillRect(0, 0, width, height);
    for (const v of haze) {
      const p = project(v);
      if (!p || p.z < -0.1 || p.x < -300 || p.x > width + 300 || p.y < -300 || p.y > height + 300)
        continue;
      const r = Math.min(650, scale * 0.25);
      ctx.drawImage(cloudSprite, p.x - r, p.y - r, r * 2, r * 2);
    }
    drawTrails();
    if (state.showGrid) drawGrid();
    const selectedGroup = groupsById.get(state.selected),
      selectedStar = byId.get(state.selected),
      activeGroups = selectedGroup ? [selectedGroup.id] : selectedStar?.members || [],
      labelCandidates = [];
    groupTargets = [];
    groupSegments = [];
    if (state.showLines)
      for (const g of groups) {
        if (!g.lines.length) continue;
        const active = activeGroups.includes(g.id),
          center = project(g.center);
        if (!active && state.fov < 35 && g.radius > state.fov) continue;
        const mansion = g.kind === "mansion";
        ctx.strokeStyle = active
          ? mansion
            ? "#e3be83c9"
            : "#c3dfefb8"
          : mansion
            ? "#a3977126"
            : "#6e9dbb40";
        ctx.lineWidth = active ? 1.25 : 0.65;
        ctx.beginPath();
        for (const [a, b] of g.lines) linePath(byId.get(a).v, byId.get(b).v, g.id);
        ctx.stroke();
        if (
          state.showLabels &&
          center &&
          center.z > 0 &&
          (selectedGroup?.id === g.id ||
            (!state.selected && state.fov > 45 && g.radius > 9 && !mansion))
        )
          labelCandidates.push({
            obj: g,
            p: center,
            priority: selectedGroup?.id === g.id ? 99 : 25,
            isGroup: true,
          });
      }
    visibleStars = [];
    renderPoints.clear();
    const members = new Set(selectedGroup?.memberIds || []),
      limit = state.fov > 90 ? 5.7 : state.fov > 50 ? 6.5 : state.fov > 20 ? 7.5 : 9,
      spatial = new Map(),
      cell = 48;
    for (const star of stars) {
      if (star.available === false) continue;
      if (
        star.kind !== "planet" &&
        star.mag > limit &&
        star.id !== state.selected &&
        !members.has(star.id)
      )
        continue;
      const p = project(star.v);
      if (!p || p.z < -0.55 || p.x < -35 || p.x > width + 35 || p.y < -35 || p.y > height + 35)
        continue;
      const selected = star.id === state.selected,
        member = members.has(star.id),
        ci = colorIndex(star),
        solar = star.kind === "planet",
        core = clamp(2.25 - star.mag * 0.29, 0.42, 3.2) * (selected ? 1.15 : 1),
        tw = reduced.matches ? 1 : 0.96 + 0.04 * Math.sin(state.clock * 0.65 + star.phase),
        glow =
          (solar
            ? star.id === "sun"
              ? 40
              : star.id === "moon"
                ? 34
                : star.mag < 0
                  ? 28
                  : Math.max(8, 25 - star.mag * 2.2)
            : Math.max(5, 18 - star.mag * 2.4)) * (selected ? 1.4 : 1);
      ctx.globalAlpha = tw;
      if (star.mag < 3.3 || selected || member || solar)
        ctx.drawImage(sprites[ci], p.x - glow, p.y - glow, glow * 2, glow * 2);
      ctx.fillStyle = ["#dbe9fc", "#f1e4cc", "#eab990", "#b7d6ff", "#b3e1da"][ci];
      ctx.beginPath();
      ctx.arc(p.x, p.y, core, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = 1;
      renderPoints.set(star.id, p);
      visibleStars.push({ s: star, p });
      const cellKey = Math.floor(p.x / cell) + "," + Math.floor(p.y / cell);
      if (!spatial.has(cellKey)) spatial.set(cellKey, []);
      spatial.get(cellKey).push({ id: star.id, p });
      if (solar) {
        ctx.strokeStyle = "#e7cf9a65";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(p.x - 7, p.y);
        ctx.lineTo(p.x + 7, p.y);
        ctx.moveTo(p.x, p.y - 7);
        ctx.lineTo(p.x, p.y + 7);
        ctx.stroke();
      }
      if (selected) {
        ctx.strokeStyle = "#e9cc96a8";
        ctx.lineWidth = 0.7;
        ctx.setLineDash([6, 7]);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 18 + Math.sin(state.clock * 0.8) * 1.1, 0, TAU);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      if (
        (state.showLabels || selected || member) &&
        (selected ||
          solar ||
          member ||
          star.mag < 1.7 ||
          (state.fov < 32 && (star.featured || star.proper)) ||
          (state.fov < 12 && star.zh))
      )
        labelCandidates.push({
          obj: star,
          p,
          priority: selected ? 100 : member ? 80 : solar ? 70 : 10 - star.mag,
          isGroup: false,
        });
    }
    const occupied = [],
      obstacles = sceneObstacles(),
      budget = width < 760 ? 14 : width < 1400 ? 25 : 42;
    renderedLabels = [];
    labelCandidates.sort((a, b) => b.priority - a.priority);
    for (const { obj, p, priority, isGroup } of labelCandidates) {
      if (renderedLabels.length >= budget) break;
      const text = name(obj),
        font =
          (priority >= 70 ? 14 : 12) * fontScale +
          'px "Times New Roman","Noto Serif SC",SimSun,serif',
        tw = measuredText(text, font),
        h = 18 * fontScale,
        gap = 11 * fontScale;
      const positions = isGroup
        ? [
            [p.x - tw / 2, p.y + 25 * fontScale],
            [p.x - tw / 2, p.y - 23 * fontScale],
            [p.x + 15 * fontScale, p.y - 10 * fontScale],
          ]
        : [
            [p.x + gap, p.y - gap],
            [p.x + gap, p.y + 24 * fontScale],
            [p.x - tw - gap, p.y - gap],
            [p.x - tw - gap, p.y + 24 * fontScale],
          ];
      let chosen = null;
      for (const [lx, ly] of positions) {
        const b = { x: lx, y: ly - 14 * fontScale, w: tw, h };
        if (
          lx < 12 ||
          lx + tw > width - 12 ||
          b.y < 12 ||
          b.y + h > height - 12 ||
          occupied.some((a) => overlaps(a, b, 7)) ||
          obstacles.some((a) => overlaps(a, b))
        )
          continue;
        let starOverlap = false;
        if (priority < 100) {
          for (
            let gx = Math.floor((b.x - 3) / cell);
            gx <= Math.floor((b.x + b.w + 3) / cell) && !starOverlap;
            gx++
          )
            for (
              let gy = Math.floor((b.y - 3) / cell);
              gy <= Math.floor((b.y + b.h + 3) / cell);
              gy++
            ) {
              if (
                (spatial.get(gx + "," + gy) || []).some(
                  (a) =>
                    a.id !== obj.id &&
                    a.p.x > b.x - 3 &&
                    a.p.x < b.x + b.w + 3 &&
                    a.p.y > b.y - 3 &&
                    a.p.y < b.y + b.h + 3,
                )
              ) {
                starOverlap = true;
                break;
              }
            }
        }
        if (starOverlap) continue;
        chosen = { lx, ly, b };
        break;
      }
      if (!chosen) continue;
      occupied.push(chosen.b);
      ctx.font = font;
      ctx.fillStyle =
        priority >= 99 ? "#efd8a7" : priority >= 70 ? "#d3dce5" : isGroup ? "#7b9aaf91" : "#93afc4";
      ctx.textAlign = "left";
      ctx.fillText(text, chosen.lx, chosen.ly);
      renderedLabels.push({ id: obj.id, text, ...chosen.b });
      if (isGroup) groupTargets.push({ id: obj.id, ...chosen.b });
    }
    const now = performance.now();
    for (let i = pulses.length - 1; i >= 0; i--) {
      const pulse = pulses[i],
        age = (now - pulse.start) / 1100;
      if (age >= 1) {
        pulses.splice(i, 1);
        continue;
      }
      const obj = byId.get(pulse.id) || groupsById.get(pulse.id),
        p = obj ? project(obj.v || obj.center) : null;
      if (p) {
        ctx.strokeStyle = "rgba(227,201,148," + (1 - age) * 0.62 + ")";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 14 + age * 65, 0, TAU);
        ctx.stroke();
      }
    }
    if (state.showGrid) {
      const spans = $$(".star-atlas-coordinates span"),
        position = [fmtRa(state.ra), fmtDec(state.dec)],
        values = [position.join("  "), "FOV " + state.fov.toFixed(1) + "°"];
      spans.forEach((span, i) => {
        if (span.textContent !== values[i]) span.textContent = values[i];
      });
      if (!state.selected)
        $$(".star-atlas-metadata [data-coordinate] dd").forEach((field, i) => {
          if (field.textContent !== position[i]) field.textContent = position[i];
        });
    }
    state.frames++;
    lastDrawMs = performance.now() - started;
    meanDrawMs = meanDrawMs * 0.95 + lastDrawMs * 0.05;
    lastPaintAt = now;
  }
  function tick(now) {
    raf = 0;
    if (!state.open || document.hidden) {
      last = 0;
      return;
    }
    const dt = last ? Math.min((now - last) / 1000, 0.08) : 0;
    last = now;
    if (!reduced.matches) state.clock += dt;
    let moving = false;
    if (tween) {
      moving = true;
      const p = clamp((now - tween.start) / tween.duration, 0, 1),
        e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      for (const k of ["ra", "dec", "fov", "roll"])
        state[k] = tween.from[k] + (tween.to[k] - tween.from[k]) * e;
      if (p === 1) {
        state.ra = wrap(state.ra);
        tween = null;
      }
      updateZoom();
    } else if (
      !reduced.matches &&
      !state.inspection &&
      overlay.dataset.library !== "open" &&
      !pointers.size &&
      now - state.lastInteraction > 4500
    ) {
      moving = true;
      state.ra = wrap(state.ra + dt * 0.19);
    }
    if (
      paintPending ||
      moving ||
      pulses.length ||
      now - lastPaintAt >= (state.showTrails && !reduced.matches ? 32 : 90)
    )
      paint();
    if (!reduced.matches || tween || pulses.length || paintPending)
      raf = requestAnimationFrame(tick);
  }
  function schedule() {
    if (state.open && !document.hidden && !raf) raf = requestAnimationFrame(tick);
  }
  function pauseBackground() {
    saved = {
      focus: document.activeElement,
      scrollX,
      scrollY,
      motion: html.dataset.motion,
      bodyStyle: {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        width: document.body.style.width,
        overflow: document.body.style.overflow,
      },
      inert: [],
    };
    for (const el of document.body.children) {
      if (el === overlay || ["SCRIPT", "STYLE", "LINK"].includes(el.tagName)) continue;
      saved.inert.push([el, el.inert]);
      el.inert = true;
    }
    Object.assign(document.body.style, {
      position: "fixed",
      top: -saved.scrollY + "px",
      left: -saved.scrollX + "px",
      width: "100%",
      overflow: "hidden",
    });
    if (window.WX_SCENES?.setMotion) window.WX_SCENES.setMotion(false);
    else html.dataset.motion = "paused";
  }
  function open() {
    if (state.open || queued) return;
    if (["boot", "open", "revealing"].includes(html.dataset.intro) && window.WX_INTRO?.close) {
      queued = true;
      addEventListener(
        "wxintrocomplete",
        () => {
          queued = false;
          queueMicrotask(open);
        },
        { once: true },
      );
      window.WX_INTRO.close("gate");
      return;
    }
    pauseBackground();
    html.dataset.starAtlas = "open";
    Object.assign(state, {
      open: true,
      count: 0,
      unlocked: false,
      selected: null,
      hover: null,
      filter: "featured",
      ra: 83,
      dec: 28,
      fov: 104,
      roll: 0,
      inspection: false,
      date: new Date(),
    });
    pass = null;
    tween = null;
    last = 0;
    search.value = "";
    interact();
    overlay.hidden = false;
    $(".star-gate-note").hidden = true;
    library(false, false);
    $(".star-atlas-info-body").hidden = false;
    $(".star-atlas-collapse").textContent = "−";
    $(".star-atlas-collapse").setAttribute("aria-expanded", "true");
    $(".star-atlas-info").classList.remove("is-collapsed");
    ephemeris();
    renderText();
    resize();
    canvas.focus({ preventScroll: true });
    schedule();
    try {
      const u = new URL(location.href);
      if (u.searchParams.get("gate") === "cv") {
        u.searchParams.delete("gate");
        history.replaceState(null, "", u);
      }
    } catch {}
  }
  function close() {
    if (!state.open) return;
    state.open = false;
    overlay.hidden = true;
    delete html.dataset.starAtlas;
    pointers.clear();
    pan = pinch = null;
    tween = null;
    cancelAnimationFrame(raf);
    raf = 0;
    last = 0;
    if (saved) {
      saved.inert.forEach(([el, v]) => (el.inert = v));
      Object.assign(document.body.style, saved.bodyStyle);
      if (window.WX_SCENES?.setMotion) window.WX_SCENES.setMotion(saved.motion !== "paused");
      else if (saved.motion === undefined) delete html.dataset.motion;
      else html.dataset.motion = saved.motion;
      window.scrollTo({ left: saved.scrollX, top: saved.scrollY, behavior: "instant" });
      if (saved.focus?.isConnected && !saved.focus.inert)
        saved.focus.focus({ preventScroll: true });
      saved = null;
    }
  }
  function library(show, focus = true) {
    const panel = $(".star-atlas-library"),
      contained = panel.contains(document.activeElement);
    panel.classList.toggle("is-open", show);
    panel.inert = !show;
    panel.setAttribute("aria-hidden", String(!show));
    overlay.dataset.library = show ? "open" : "closed";
    $('[data-tool="directory"]').setAttribute("aria-expanded", String(show));
    if (focus) {
      if (show) search.focus({ preventScroll: true });
      else if (contained) $('[data-tool="directory"]').focus({ preventScroll: true });
    }
    layoutReadAt = 0;
    requestDraw();
  }
  function updateLayers() {
    $$("[data-layer]").forEach((b) =>
      b.setAttribute(
        "aria-pressed",
        String(state["show" + b.dataset.layer[0].toUpperCase() + b.dataset.layer.slice(1)]),
      ),
    );
    $(".star-atlas-coordinates").hidden = !state.showGrid;
    $$("[data-coordinate]").forEach((el) => (el.hidden = !state.showGrid));
    overlay.dataset.coordinates = String(state.showGrid);
    overlay.dataset.trails = String(state.showTrails);
    layoutReadAt = 0;
  }
  function setDate(value) {
    const d = value instanceof Date ? value : new Date(value + "T12:00:00Z");
    if (!Number.isFinite(+d) || d.getUTCFullYear() < 1900 || d.getUTCFullYear() > 2100) return;
    state.date = d;
    ephemeris();
    const obj = byId.get(state.selected);
    if (obj?.kind === "planet") {
      moveCamera(targetFor(obj));
      pulses.push({ id: obj.id, start: performance.now() });
    }
    renderInfo();
    draw();
    schedule();
  }
  $(".star-gate-close").addEventListener("click", close);
  $(".star-gate-lang").addEventListener("click", () => {
    if (window.WX_I18N) window.WX_I18N.setLang(english() ? "zh" : "en");
    else {
      html.lang = english() ? "zh-CN" : "en";
      renderText();
    }
  });
  $(".star-gate-locators").addEventListener("click", (e) => {
    const b = e.target.closest("[data-locate]");
    if (!b) return;
    const id = b.dataset.locate;
    if (id === "mansions") {
      state.filter = "mansion";
      search.value = "";
      library(true);
      renderLibrary();
      $$("[data-filter]").forEach((x) =>
        x.setAttribute("aria-pressed", String(x.dataset.filter === "mansion")),
      );
    }
    const obj = quick.find((q) => q[0] === id)?.[1]();
    if (obj) selectObject(obj.id);
  });
  $(".star-atlas-results").addEventListener("click", (e) => {
    const b = e.target.closest("[data-object]");
    if (b) {
      selectObject(b.dataset.object);
      library(false);
    }
  });
  $(".star-atlas-members").addEventListener("click", (e) => {
    const b = e.target.closest("[data-object]");
    if (b) selectObject(b.dataset.object);
  });
  search.addEventListener("input", renderLibrary);
  $(".star-atlas-search-clear").addEventListener("click", () => {
    search.value = "";
    renderLibrary();
    search.focus({ preventScroll: true });
  });
  search.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && search.value) {
      e.preventDefault();
      e.stopPropagation();
      search.value = "";
      renderLibrary();
      return;
    }
    if (e.key === "Enter") {
      const b = $(".star-atlas-result");
      if (b) {
        selectObject(b.dataset.object);
        library(false);
        canvas.focus({ preventScroll: true });
      }
    }
  });
  $$("[data-filter]").forEach((b) =>
    b.addEventListener("click", () => {
      state.filter = b.dataset.filter;
      search.value = "";
      $$("[data-filter]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      renderLibrary();
    }),
  );
  $(".star-atlas-library-close").addEventListener("click", () => library(false));
  $('[data-tool="directory"]').addEventListener("click", () =>
    library(!$(".star-atlas-library").classList.contains("is-open")),
  );
  $('[data-tool="reset"]').addEventListener("click", () => resetView());
  $$("[data-zoom]").forEach((b) =>
    b.addEventListener("click", () => zoomAt(b.dataset.zoom === "in" ? 1.28 : 1 / 1.28)),
  );
  $$("[data-date]").forEach((b) =>
    b.addEventListener("click", () => {
      if (b.dataset.date === "today") setDate(new Date());
      else setDate(new Date(+state.date + (b.dataset.date === "next" ? 1 : -1) * 86400000));
    }),
  );
  $(".star-atlas-date input").addEventListener("change", (e) => setDate(e.target.value));
  $$("[data-layer]").forEach((b) =>
    b.addEventListener("click", () => {
      const k = "show" + b.dataset.layer[0].toUpperCase() + b.dataset.layer.slice(1);
      state[k] = !state[k];
      interact();
      updateLayers();
      draw();
    }),
  );
  $('[data-tool="note"]').addEventListener("click", () => {
    const show = $(".star-gate-note").hidden;
    $(".star-gate-note").hidden = !show;
    $('[data-tool="note"]').setAttribute("aria-expanded", String(show));
    if (show) $(".star-gate-note-close").focus();
  });
  $(".star-gate-note-close").addEventListener("click", () => {
    $(".star-gate-note").hidden = true;
    $('[data-tool="note"]').setAttribute("aria-expanded", "false");
    $('[data-tool="note"]').focus();
  });
  $(".star-atlas-collapse").addEventListener("click", () => {
    const el = $(".star-atlas-info-body");
    el.hidden = !el.hidden;
    $(".star-atlas-info").classList.toggle("is-collapsed", el.hidden);
    $(".star-atlas-collapse").textContent = el.hidden ? "+" : "−";
    $(".star-atlas-collapse").setAttribute("aria-expanded", String(!el.hidden));
    renderInfo();
  });
  $$("[data-object-action]").forEach((b) =>
    b.addEventListener("click", () => {
      const obj = byId.get(state.selected) || groupsById.get(state.selected);
      if (obj) {
        pulses.push({ id: obj.id, start: performance.now() });
        selectObject(obj.id, { closer: b.dataset.objectAction === "closer" });
      } else if (b.dataset.objectAction === "closer") zoomAt(1.6);
      else {
        const dipper = quick.find((q) => q[0] === "dipper")?.[1]();
        if (dipper) selectObject(dipper.id);
      }
    }),
  );
  function pointer(e) {
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }
  function gesture() {
    const a = [...pointers.values()];
    return {
      mid: { x: (a[0].x + a[1].x) / 2, y: (a[0].y + a[1].y) / 2 },
      distance: Math.hypot(a[1].x - a[0].x, a[1].y - a[0].y),
      angle: Math.atan2(a[1].y - a[0].y, a[1].x - a[0].x),
    };
  }
  function hit(p, threshold = 16) {
    let best = null,
      dist = threshold;
    for (const { s, p: q } of visibleStars) {
      const d = Math.hypot(p.x - q.x, p.y - q.y);
      if (d < dist) {
        dist = d;
        best = s;
      }
    }
    if (best) return best;
    for (const g of groupTargets)
      if (p.x > g.x - 6 && p.x < g.x + g.w + 6 && p.y > g.y - 6 && p.y < g.y + g.h + 6)
        return groupsById.get(g.id);
    dist = threshold * 0.45;
    for (const g of groupSegments) {
      const dx = g.x2 - g.x1,
        dy = g.y2 - g.y1,
        t = clamp(((p.x - g.x1) * dx + (p.y - g.y1) * dy) / (dx * dx + dy * dy || 1), 0, 1),
        d = Math.hypot(p.x - g.x1 - t * dx, p.y - g.y1 - t * dy);
      if (d < dist) {
        dist = d;
        best = groupsById.get(g.id);
      }
    }
    return best;
  }
  canvas.addEventListener("pointerdown", (e) => {
    if (e.button > 0 && e.button !== 2) return;
    e.preventDefault();
    interact();
    state.inspection = true;
    canvas.focus({ preventScroll: true });
    rect = canvas.getBoundingClientRect();
    const p = pointer(e);
    pointers.set(e.pointerId, p);
    canvas.setPointerCapture(e.pointerId);
    tween = null;
    $(".star-atlas-hover").hidden = true;
    if (pointers.size === 1) {
      pan = {
        x: p.x,
        y: p.y,
        ra: state.ra,
        dec: state.dec,
        roll: state.roll,
        rotate: e.shiftKey || e.button === 2,
      };
      dragged = false;
      downId = e.pointerId;
    } else if (pointers.size === 2) {
      pinch = { ...gesture(), fov: state.fov, roll: state.roll, ra: state.ra, dec: state.dec };
      dragged = true;
    }
  });
  canvas.addEventListener("pointermove", (e) => {
    const p = pointer(e);
    if (!pointers.has(e.pointerId)) {
      const o = hit(p);
      state.hover = o?.id || null;
      canvas.style.cursor = o ? "pointer" : "grab";
      const tip = $(".star-atlas-hover");
      tip.hidden = !o;
      if (o) {
        tip.textContent = name(o);
        tip.style.left = clamp(p.x + 16, 8, width - 180) + "px";
        tip.style.top = clamp(p.y + 16, 125, height - 45) + "px";
      }
      return;
    }
    e.preventDefault();
    pointers.set(e.pointerId, p);
    interact();
    if (pointers.size >= 2 && pinch) {
      const g = gesture();
      state.fov = clamp((pinch.fov * pinch.distance) / Math.max(1, g.distance), 4, 140);
      state.roll = pinch.roll + g.angle - pinch.angle;
      state.ra = wrap(
        pinch.ra + ((g.mid.x - pinch.mid.x) / Math.min(width, height)) * state.fov * 1.5,
      );
      state.dec = clamp(
        pinch.dec + ((g.mid.y - pinch.mid.y) / Math.min(width, height)) * state.fov * 1.5,
        -89.7,
        89.7,
      );
      dragged = true;
      updateZoom();
    } else if (pan) {
      const dx = p.x - pan.x,
        dy = p.y - pan.y;
      if (Math.hypot(dx, dy) > 4) dragged = true;
      if (pan.rotate) state.roll = pan.roll + dx * 0.005;
      else {
        state.ra = wrap(
          pan.ra +
            ((dx / Math.min(width, height)) * state.fov * 1.5) /
              Math.max(0.22, Math.cos(pan.dec * D)),
        );
        state.dec = clamp(pan.dec + (dy / Math.min(width, height)) * state.fov * 1.5, -89.7, 89.7);
      }
    }
    draw();
  });
  function release(e, cancel = false) {
    if (!pointers.has(e.pointerId)) return;
    const p = pointer(e),
      click = !cancel && !dragged && pointers.size === 1 && e.pointerId === downId;
    pointers.delete(e.pointerId);
    if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
    if (click) {
      const obj = hit(p, e.pointerType === "touch" ? 27 : 17);
      if (obj) selectObject(obj.id, { activate: true, fly: state.selected !== obj.id });
    }
    if (pointers.size === 1) {
      const rem = [...pointers.values()][0];
      pan = { x: rem.x, y: rem.y, ra: state.ra, dec: state.dec, roll: state.roll, rotate: false };
      dragged = true;
      pinch = null;
    } else if (!pointers.size) {
      pan = pinch = null;
      downId = null;
    }
  }
  canvas.addEventListener("pointerup", (e) => release(e));
  canvas.addEventListener("pointercancel", (e) => release(e, true));
  canvas.addEventListener("pointerleave", () => {
    $(".star-atlas-hover").hidden = true;
  });
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());
  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const p = pointer(e),
        delta = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? height : 1);
      zoomAt(Math.exp(-clamp(delta, -240, 240) * 0.0016), p.x, p.y);
    },
    { passive: false },
  );
  canvas.addEventListener("keydown", (e) => {
    const k = e.key;
    let handled = true;
    tween = null;
    interact();
    state.inspection = true;
    if (k === "ArrowLeft") state.ra = wrap(state.ra + state.fov * 0.06);
    else if (k === "ArrowRight") state.ra = wrap(state.ra - state.fov * 0.06);
    else if (k === "ArrowUp") state.dec = clamp(state.dec + state.fov * 0.06, -89.7, 89.7);
    else if (k === "ArrowDown") state.dec = clamp(state.dec - state.fov * 0.06, -89.7, 89.7);
    else if (k === "+" || k === "=") zoomAt(1.25);
    else if (k === "-" || k === "_") zoomAt(1 / 1.25);
    else if (k.toLowerCase() === "q") state.roll -= 0.12;
    else if (k.toLowerCase() === "e") state.roll += 0.12;
    else if (k === "Home") resetView();
    else if ((k === "Enter" || k === " ") && state.selected)
      selectObject(state.selected, { activate: true, fly: false });
    else handled = false;
    if (handled) {
      e.preventDefault();
      draw();
    }
  });
  overlay.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      if (!$(".star-gate-note").hidden) {
        $(".star-gate-note").hidden = true;
        $('[data-tool="note"]').setAttribute("aria-expanded", "false");
      } else if ($(".star-atlas-library").classList.contains("is-open")) library(false);
      else close();
    } else if (e.key === "Tab") {
      const focusables = $$("button:not(:disabled),a[href],input,canvas").filter(
        (el) =>
          !el.hidden &&
          !el.closest("[hidden]") &&
          !el.closest("[inert]") &&
          getComputedStyle(el).visibility !== "hidden" &&
          el.getClientRects().length,
      );
      const first = focusables[0],
        end = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        end.focus();
      } else if (!e.shiftKey && document.activeElement === end) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  document.addEventListener(
    "click",
    (e) => {
      if (e.target.closest?.(".cv-link")) {
        e.preventDefault();
        e.stopPropagation();
        open();
      }
    },
    true,
  );
  document.addEventListener(
    "auxclick",
    (e) => {
      if (e.target.closest?.(".cv-link")) {
        e.preventDefault();
        open();
      }
    },
    true,
  );
  addEventListener("resize", resize);
  window.visualViewport?.addEventListener("resize", resize);
  window.visualViewport?.addEventListener("scroll", resize);
  addEventListener("languagechange", () => {
    textWidths.clear();
    layoutReadAt = 0;
    if (state.open) renderText();
  });
  document.fonts?.ready.then(() => {
    textWidths.clear();
    requestDraw();
  });
  document.addEventListener("visibilitychange", () => {
    last = 0;
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
    } else if (state.open) {
      draw();
      schedule();
    }
  });
  reduced.addEventListener("change", () => {
    last = 0;
    if (reduced.matches) {
      if (tween) {
        Object.assign(state, tween.to);
        tween = null;
      }
      cancelAnimationFrame(raf);
      raf = 0;
      draw();
    } else schedule();
  });
  window.WX_STAR_GATE = {
    open,
    close,
    locate: (id) => selectObject(id),
    activate: (id) => selectObject(id, { activate: true, fly: false }),
    reset: () => resetView(),
    setDate,
    info: () => ({
      open: state.open,
      count: state.count,
      unlocked: state.unlocked,
      selected: state.selected,
      zoom: 104 / state.fov,
      fov: state.fov,
      ra: wrap(state.ra),
      dec: state.dec,
      rotation: state.roll,
      frames: state.frames,
      starCount: stars.filter((s) => s.available !== false).length,
      groupCount: groups.length,
      mansionCount: groups.filter((g) => g.kind === "mansion").length,
      visibleCount: visibleStars.length,
      drawMs: lastDrawMs,
      meanDrawMs,
      showLines: state.showLines,
      showLabels: state.showLabels,
      showGrid: state.showGrid,
      showTrails: state.showTrails,
      trailCount: drawnTrails,
      trailSample,
      libraryOpen: overlay.dataset.library === "open",
      labels: renderedLabels,
      date: dateString(),
      ephemeris: planets.every((s) => s.available),
      planets: planets
        .filter((s) => s.available)
        .map((s) => ({ id: s.id, ra: s.ra, dec: s.dec, phase: s.phaseFraction, mag: s.mag })),
      groups: groups.map((g) => ({
        id: g.id,
        name: name(g),
        members: g.memberIds.length,
        lines: g.lines.length,
      })),
      targets: [...renderPoints].map(([id, p]) => ({ id, x: p.x, y: p.y })),
    }),
  };
  if (new URL(location.href).searchParams.get("gate") === "cv") {
    if (["boot", "open", "revealing"].includes(html.dataset.intro))
      addEventListener("wxintrocomplete", () => setTimeout(open, 0), { once: true });
    else setTimeout(open, 0);
  }
})();

/* 17 · Interests and interactive studies */
/* personal interests, interpreted through small interactive studies. */
(() => {
  "use strict";
  const host = document.querySelector(".off-duty");
  if (!host) return;
  const root = document.documentElement,
    svg = host.querySelector("svg"),
    study = host.querySelector(".off-duty-study");
  const panel = host.querySelector(".off-duty-panel"),
    tabs = [...host.querySelectorAll("[data-curiosity-select]")];
  const reduced = matchMedia("(prefers-reduced-motion:reduce)"),
    keys = ["pattern", "stars", "play"];
  const text = {
    zh: {
      label: "研究之外",
      title: "看花纹，<br>也看星河。",
      intro: "偏爱东方纹样的留白与层次，也喜欢山海神话的想象，和小小交互带来的惊喜。",
      choose: "研究之外的兴趣",
      pattern: {
        tab: "纹样",
        title: "一笔一纹，慢慢看。",
        description: "青花、云纹与明快的色彩，都是值得细看的视觉语言。",
        action: "换一枚花纹",
      },
      stars: {
        tab: "星空",
        title: "神话与星空，都值得仰望。",
        description: "喜欢山海神话的想象，也想知道东方星宿的名字从何而来。一半听故事，一半看星空。",
        action: "循星漫游",
      },
      play: {
        tab: "交互",
        title: "让想法，动起来。",
        description:
          "喜欢让抽象的想法变成可以探索的小作品。好看的界面，也应当给每一次点击一个回应。",
        action: "重新连线",
      },
    },
    en: {
      label: "BEYOND RESEARCH",
      title: "Patterns, stars,<br>and a little play.",
      intro:
        "I am drawn to the quiet detail of traditional ornament, the imagination of Chinese mythology, and small interactions that make an idea tangible.",
      choose: "Interests beyond research",
      pattern: {
        tab: "Patterns",
        title: "A closer look at a familiar line.",
        description:
          "Blue-and-white ornament, cloud motifs and thoughtful colour offer different ways to see the beauty in a small detail.",
        action: "Another pattern",
      },
      stars: {
        tab: "Starlight",
        title: "Myths and starlight.",
        description:
          "The worlds of Shanhaijing and the stories behind traditional star names invite two kinds of exploration: one through imagination, the other across the sky.",
        action: "Explore the sky",
      },
      play: {
        tab: "Play",
        title: "Give an idea something to do.",
        description:
          "I like ideas that invite a little exploration. A thoughtful interface should make each interaction feel worthwhile.",
        action: "Reconnect the dots",
      },
    },
  };
  let selected = "pattern",
    variant = 0,
    visible = false,
    changeTimer = 0;
  const lang = () => (root.lang === "en" ? "en" : "zh");
  const seed = (n) => {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  function ornament() {
    const petals = [8, 10, 6, 12][variant % 4],
      detail = Array.from(
        { length: petals },
        (_, i) =>
          '<path d="M120 120 C90 106 94 67 120 42 C146 67 150 106 120 120Z" transform="rotate(' +
          (i * 360) / petals +
          ' 120 120)" fill="var(--theme-primary)" fill-opacity=".075" stroke="var(--theme-primary)" stroke-opacity=".62" stroke-width=".8"/>',
      ).join("");
    return (
      '<g class="study-orbit"><circle cx="120" cy="120" r="96" fill="none" stroke="var(--theme-primary)" stroke-opacity=".18"/><circle cx="120" cy="120" r="88" fill="none" stroke="var(--theme-accent)" stroke-opacity=".65" stroke-dasharray="1 8" stroke-linecap="round"/>' +
      detail +
      '</g><g fill="none" stroke="var(--theme-secondary)" stroke-width="1"><circle cx="120" cy="120" r="29" opacity=".75"/><circle cx="120" cy="120" r="35" opacity=".24"/></g><circle class="study-pulse" cx="120" cy="120" r="6" fill="var(--theme-accent)"/><path d="M45 159 C31 138 31 107 48 87 M192 153 C206 132 206 109 195 90" fill="none" stroke="var(--theme-secondary)" stroke-width="1.2" stroke-linecap="round" opacity=".5"/>'
    );
  }
  function asterism() {
    const catalog = window.WX_STAR_CATALOG,
      group = catalog?.groups?.find((g) => g.id === "dipper");
    if (!group)
      return '<circle cx="120" cy="120" r="80" fill="none" stroke="var(--theme-primary)" opacity=".3"/>';
    const ids = [...new Set(group.lines.flat())],
      stars = ids.map((id) => catalog.stars.find((s) => s.id === id)).filter(Boolean),
      r = Math.PI / 180;
    const ra = Math.atan2(
        stars.reduce((a, s) => a + Math.sin(s.ra * r), 0),
        stars.reduce((a, s) => a + Math.cos(s.ra * r), 0),
      ),
      dec = stars.reduce((a, s) => a + s.dec * r, 0) / stars.length;
    const points = stars.map((s) => {
      const delta = s.ra * r - ra,
        d = s.dec * r,
        k = Math.sin(dec) * Math.sin(d) + Math.cos(dec) * Math.cos(d) * Math.cos(delta);
      return {
        id: s.id,
        x: (-Math.cos(d) * Math.sin(delta)) / k,
        y: -(Math.cos(dec) * Math.sin(d) - Math.sin(dec) * Math.cos(d) * Math.cos(delta)) / k,
      };
    });
    const xs = points.map((p) => p.x),
      ys = points.map((p) => p.y),
      left = Math.min(...xs),
      top = Math.min(...ys),
      spanX = Math.max(...xs) - left,
      spanY = Math.max(...ys) - top,
      scale = 168 / Math.max(spanX, spanY);
    const xy = Object.fromEntries(
      points.map((p) => [
        p.id,
        { x: 120 + (p.x - left - spanX / 2) * scale, y: 120 + (p.y - top - spanY / 2) * scale },
      ]),
    );
    const field = Array.from(
      { length: 24 },
      (_, i) =>
        '<circle cx="' +
        (28 + seed(i + 19) * 184).toFixed(1) +
        '" cy="' +
        (25 + seed(i + 53) * 185).toFixed(1) +
        '" r="' +
        (0.6 + seed(i + 15)).toFixed(1) +
        '" fill="var(--theme-primary)" opacity=".22"/>',
    ).join("");
    const lines = group.lines
      .map(
        ([a, b]) =>
          '<path class="study-line" d="M' +
          xy[a].x.toFixed(1) +
          " " +
          xy[a].y.toFixed(1) +
          "L" +
          xy[b].x.toFixed(1) +
          " " +
          xy[b].y.toFixed(1) +
          '" fill="none" stroke="var(--theme-primary)" stroke-opacity=".55" stroke-width="1.2"/>',
      )
      .join("");
    const dots = stars
      .map(
        (s, i) =>
          '<g class="study-pulse" style="--pulse-delay:' +
          i * 0.37 +
          's"><circle cx="' +
          xy[s.id].x.toFixed(1) +
          '" cy="' +
          xy[s.id].y.toFixed(1) +
          '" r="6" fill="var(--theme-accent)" opacity=".17"/><circle cx="' +
          xy[s.id].x.toFixed(1) +
          '" cy="' +
          xy[s.id].y.toFixed(1) +
          '" r="2.5" fill="var(--theme-primary)"/></g>',
      )
      .join("");
    return field + lines + dots;
  }
  function network() {
    const nodes = Array.from({ length: 13 }, (_, i) => {
      const a = i * 2.399963 + variant * 0.6,
        r = 22 + Math.sqrt(i / 12) * 70;
      return { x: 120 + Math.cos(a) * r, y: 120 + Math.sin(a) * r };
    });
    let lines = "";
    nodes.forEach((node, i) => {
      for (const j of [i + 1, i + 3])
        if (nodes[j])
          lines +=
            '<path class="study-line" d="M' +
            node.x.toFixed(1) +
            " " +
            node.y.toFixed(1) +
            " Q120 " +
            (80 + (variant % 3) * 35) +
            " " +
            nodes[j].x.toFixed(1) +
            " " +
            nodes[j].y.toFixed(1) +
            '" fill="none" stroke="var(--theme-primary)" stroke-opacity=".2" stroke-width="1"/>';
    });
    return (
      '<circle cx="120" cy="120" r="98" fill="none" stroke="var(--theme-primary)" stroke-opacity=".11" stroke-dasharray="2 7"/>' +
      lines +
      nodes
        .map(
          (p, i) =>
            '<g class="study-pulse" style="--pulse-delay:' +
            i * 0.18 +
            's"><circle cx="' +
            p.x.toFixed(1) +
            '" cy="' +
            p.y.toFixed(1) +
            '" r="' +
            (i % 3 ? 4 : 6) +
            '" fill="var(--theme-' +
            (i % 3 === 0 ? "secondary" : i % 2 ? "primary" : "accent") +
            ')" fill-opacity=".7"/><circle cx="' +
            p.x.toFixed(1) +
            '" cy="' +
            p.y.toFixed(1) +
            '" r="' +
            (i % 3 ? 9 : 12) +
            '" fill="none" stroke="var(--theme-primary)" stroke-opacity=".12"/></g>',
        )
        .join("")
    );
  }
  function draw(animate = true) {
    svg.innerHTML =
      selected === "pattern" ? ornament() : selected === "stars" ? asterism() : network();
    host.classList.remove("is-changing");
    if (animate && !reduced.matches && root.dataset.motion !== "paused") {
      void svg.getBoundingClientRect();
      host.classList.add("is-changing");
      clearTimeout(changeTimer);
      changeTimer = setTimeout(() => host.classList.remove("is-changing"), 650);
    }
  }
  function render() {
    const c = text[lang()],
      item = c[selected];
    host.querySelector("[data-curiosity-label]").textContent = c.label;
    host.querySelector("[data-curiosity-title]").innerHTML = c.title;
    host.querySelector("[data-curiosity-intro]").textContent = c.intro;
    host.querySelector("[role=tablist]").setAttribute("aria-label", c.choose);
    host.querySelector("[data-curiosity-heading]").textContent = item.title;
    host.querySelector("[data-curiosity-description]").textContent = item.description;
    host.querySelector("[data-curiosity-action]").innerHTML =
      item.action + ' <span aria-hidden="true">↗</span>';
    tabs.forEach((button) => {
      const active = button.dataset.curiositySelect === selected;
      button.textContent = c[button.dataset.curiositySelect].tab;
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
    host.dataset.curiosity = selected;
    panel.setAttribute("aria-labelledby", "curiosity-" + selected);
  }
  function select(key, { focus = false } = {}) {
    if (!keys.includes(key)) return false;
    selected = key;
    render();
    draw();
    if (focus)
      tabs.find((button) => button.dataset.curiositySelect === key).focus({ preventScroll: true });
    return true;
  }
  function act() {
    if (selected === "stars") {
      window.WX_STAR_GATE?.open();
      return;
    }
    variant++;
    draw();
  }
  tabs.forEach((button) => {
    button.addEventListener("click", () => select(button.dataset.curiositySelect));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const index = keys.indexOf(selected),
        next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? keys.length - 1
              : (index + (event.key === "ArrowRight" ? 1 : -1) + keys.length) % keys.length;
      select(keys[next], { focus: true });
    });
  });
  host.querySelector("[data-curiosity-action]").addEventListener("click", act);
  study.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse" || reduced.matches || root.dataset.motion === "paused")
        return;
      const rect = study.getBoundingClientRect();
      study.style.setProperty(
        "--study-x",
        ((0.5 - (event.clientY - rect.top) / rect.height) * 8).toFixed(2) + "deg",
      );
      study.style.setProperty(
        "--study-y",
        (((event.clientX - rect.left) / rect.width - 0.5) * 8).toFixed(2) + "deg",
      );
    },
    { passive: true },
  );
  study.addEventListener("pointerleave", () => {
    study.style.removeProperty("--study-x");
    study.style.removeProperty("--study-y");
  });
  const visibility = () => (host.dataset.studyVisible = String(visible && !document.hidden));
  new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      visibility();
    },
    { threshold: 0.1 },
  ).observe(host);
  document.addEventListener("visibilitychange", visibility);
  addEventListener("languagechange", render);
  window.WX_CURIOSITY = {
    select,
    act,
    info: () => ({
      selected,
      variant,
      visible,
      source: selected === "stars" ? "Stellarium Big Dipper / HYG J2000" : null,
    }),
  };
  render();
  draw(false);
})();

/* 18 · Research-map illustrations */
/* Original interactive SVG motifs and a lightweight, local data-ribbon renderer. */
(() => {
  "use strict";
  const TAU = Math.PI * 2;
  const fmt = (n) => Number(n.toFixed(2));
  function illustration(type, id) {
    const p = id + "-p",
      s = id + "-s",
      a = id + "-a",
      shine = id + "-shine";
    const defs = `<defs><radialGradient id="${p}" cx="32%" cy="25%" r="83%"><stop stop-color="var(--rm-paper)"/><stop offset=".32" stop-color="var(--rm-primary)" stop-opacity=".24"/><stop offset=".82" stop-color="var(--rm-primary)" stop-opacity=".68"/><stop offset="1" stop-color="var(--rm-primary)" stop-opacity=".15"/></radialGradient><radialGradient id="${s}" cx="32%" cy="25%" r="78%"><stop stop-color="var(--rm-paper)"/><stop offset=".35" stop-color="var(--rm-secondary)" stop-opacity=".32"/><stop offset="1" stop-color="var(--rm-secondary)" stop-opacity=".82"/></radialGradient><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="var(--rm-paper)"/><stop offset=".55" stop-color="var(--rm-accent)" stop-opacity=".65"/><stop offset="1" stop-color="var(--rm-primary)" stop-opacity=".7"/></linearGradient><linearGradient id="${shine}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="var(--rm-paper)" stop-opacity=".95"/><stop offset="1" stop-color="var(--rm-paper)" stop-opacity="0"/></linearGradient></defs>`;
    let art = "";
    if (type === "immune") {
      const beads = Array.from({ length: 42 }, (_, i) => {
        const t = (i / 42) * TAU,
          r = 65 + Math.sin(t * 5) * 2.5;
        return `<circle cx="${fmt(100 + Math.cos(t) * r)}" cy="${fmt(100 + Math.sin(t) * r)}" r="${i % 3 ? 1.5 : 2.3}" fill="var(--rm-primary)" opacity="${i % 3 ? 0.38 : 0.7}"/>`;
      }).join("");
      const vesicles = Array.from({ length: 9 }, (_, i) => {
        const t = i * 2.4,
          r = 37 + (i % 3) * 5;
        return `<circle cx="${fmt(100 + Math.cos(t) * r)}" cy="${fmt(100 + Math.sin(t) * r)}" r="${3 + (i % 3)}" fill="url(#${i % 3 === 0 ? s : a})" stroke="var(--rm-paper)" stroke-width=".8"/>`;
      }).join("");
      art = `<g class="rm-art-breathe"><circle cx="100" cy="100" r="69" fill="url(#${p})" stroke="var(--rm-primary)" stroke-opacity=".4"/><path d="M48 86C47 50 88 24 119 40" fill="none" stroke="var(--rm-paper)" stroke-width="5" stroke-linecap="round" opacity=".75"/><circle cx="100" cy="100" r="61" fill="none" stroke="var(--rm-primary)" stroke-opacity=".23"/>${beads}<g class="rm-art-turn">${vesicles}<path d="M57 105Q84 142 140 111M64 73Q113 59 142 92" fill="none" stroke="var(--rm-primary)" stroke-width=".65" opacity=".32"/></g><path d="M77 90C80 74 111 68 123 86S123 119 105 125 71 114 77 90Z" fill="url(#${s})" stroke="var(--rm-secondary)" stroke-opacity=".45"/><path d="M86 91C95 77 114 85 115 97S99 118 88 105" fill="none" stroke="var(--rm-paper)" stroke-width="1.2" opacity=".7"/><circle cx="103" cy="99" r="6" fill="url(#${a})"/></g><g class="rm-art-satellite"><circle cx="37" cy="61" r="8" fill="url(#${s})"/><circle cx="164" cy="130" r="11" fill="url(#${p})"/><circle cx="136" cy="27" r="4" fill="var(--rm-accent)" opacity=".65"/></g>`;
    } else if (type === "microbe") {
      const bodies = [
        [78, 86, -32, 29, 82, p],
        [128, 118, 27, 25, 70, s],
        [54, 134, 32, 20, 47, a],
        [131, 48, -48, 18, 42, p],
        [105, 163, 74, 14, 30, a],
      ];
      art = bodies
        .map(
          ([x, y, rot, w, h, g], i) =>
            `<g class="rm-art-drift" style="--float-delay:${-i * 1.6}s"><g transform="translate(${x} ${y}) rotate(${rot})"><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="${w / 2}" fill="url(#${g})" stroke="var(--rm-primary)" stroke-opacity=".27"/><path d="M${-w / 2 + 5} ${-h / 2 + w / 2}V${h / 2 - w / 2}" stroke="var(--rm-paper)" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>${Array.from({ length: 4 }, (_, n) => `<ellipse cx="${n % 2 ? 3 : -2}" cy="${(n - 1.5) * (h / 7)}" rx="2.3" ry="1.5" fill="var(--rm-primary)" opacity=".48" transform="rotate(-20)"/>`).join("")}<path d="M0 ${h / 2}q14 13 1 20t8 15" fill="none" stroke="var(--rm-primary)" stroke-width=".75" opacity=".35"/></g></g>`,
        )
        .join("");
      art += Array.from({ length: 14 }, (_, i) => {
        const t = i * 2.4,
          r = 52 + (i % 4) * 7;
        return `<circle class="rm-art-spark" cx="${fmt(100 + Math.cos(t) * r)}" cy="${fmt(100 + Math.sin(t) * r)}" r="${(i % 3) + 1.4}" style="--spark-delay:${-i * 0.7}s" fill="${i % 2 ? "var(--rm-accent)" : "var(--rm-primary)"}" opacity=".55"/>`;
      }).join("");
    } else if (type === "neuron") {
      const branches = Array.from({ length: 11 }, (_, i) => {
        const t = -2.9 + i * 0.54,
          x = 100 + Math.cos(t) * 70,
          y = 90 + Math.sin(t) * 67,
          cx = 100 + Math.cos(t + 0.18) * 43,
          cy = 90 + Math.sin(t + 0.18) * 34;
        const dx = Math.cos(t + 1.1) * 20,
          dy = Math.sin(t + 1.1) * 20;
        return `<g><path d="M100 92Q${fmt(cx)} ${fmt(cy)} ${fmt(x)} ${fmt(y)}m${fmt(-Math.cos(t) * 21)} ${fmt(-Math.sin(t) * 21)}q${fmt(dx)} ${fmt(dy)} ${fmt(dx * 1.3)} ${fmt(dy * 1.7)}" fill="none" stroke="var(--rm-primary)" stroke-width="${i % 2 ? 1.3 : 1.8}" stroke-linecap="round" opacity=".55"/><path class="rm-art-impulse" d="M${fmt(x)} ${fmt(y)}Q${fmt(cx)} ${fmt(cy)} 100 92" fill="none" stroke="var(--rm-accent)" stroke-width="2.3" stroke-linecap="round" style="--spark-delay:${-i * 0.9}s"/><circle cx="${fmt(x)}" cy="${fmt(y)}" r="2.8" fill="url(#${s})"/></g>`;
      }).join("");
      art = `<path d="M103 105C82 132 137 148 104 179" fill="none" stroke="var(--rm-primary)" stroke-width="4" stroke-linecap="round" opacity=".24"/><path class="rm-art-impulse" d="M103 105C82 132 137 148 104 179" fill="none" stroke="var(--rm-accent)" stroke-width="2"/>${branches}<path class="rm-art-breathe" d="M83 73Q99 78 111 67L116 84 132 97 113 104 105 122 93 107 74 104 86 90Z" fill="url(#${p})" stroke="var(--rm-primary)" stroke-opacity=".65"/><circle cx="102" cy="94" r="10" fill="url(#${s})"/><circle cx="99" cy="91" r="3" fill="var(--rm-paper)" opacity=".75"/>`;
    } else {
      const layers = [0, 1, 2]
        .map((n) => {
          const y = 66 + n * 29;
          return `<g class="rm-art-layer" style="--float-delay:${-n * 1.9}s"><path d="M36 ${y} 101 ${y - 29} 164 ${y} 100 ${y + 33}Z" fill="url(#${n === 1 ? s : p})" stroke="var(--rm-primary)" stroke-opacity=".35"/><path d="m36 ${y}v8l64 33 64-33v-8M100 ${y + 33}v8" fill="none" stroke="var(--rm-primary)" stroke-opacity=".3"/><path d="m45 ${y - 1} 56-25 54 25" fill="none" stroke="var(--rm-paper)" stroke-width="1.2" opacity=".8"/>${Array.from(
            { length: 9 },
            (_, i) => {
              const col = i % 3,
                row = Math.floor(i / 3);
              return `<circle cx="${74 + col * 17 + row * 10}" cy="${y - 5 + row * 9 - col * 7}" r="${i === 4 ? 3.4 : 1.9}" fill="${i === 4 ? "var(--rm-secondary)" : "var(--rm-paper)"}" opacity=".8"/>`;
            },
          ).join("")}</g>`;
        })
        .reverse()
        .join("");
      art = `<ellipse class="rm-art-orbit" cx="100" cy="113" rx="84" ry="42" fill="none" stroke="var(--rm-accent)" stroke-width=".8" stroke-dasharray="2 7" transform="rotate(-25 100 113)"/>${layers}<g class="rm-art-satellite"><circle cx="40" cy="56" r="4.5" fill="url(#${a})"/><circle cx="172" cy="122" r="6" fill="url(#${s})"/><circle cx="117" cy="24" r="3" fill="var(--rm-accent)"/></g>`;
    }
    return `<svg class="rm-illustration rm-illustration-${type}" viewBox="0 0 200 200" aria-hidden="true" focusable="false">${defs}<circle class="rm-art-wash" cx="100" cy="100" r="85" fill="url(#${p})" opacity=".07"/><ellipse class="rm-art-orbit" cx="100" cy="100" rx="91" ry="77" fill="none" stroke="var(--rm-primary)" stroke-opacity=".2" stroke-width=".6" stroke-dasharray="75 10 2 10" transform="rotate(-24 100 100)"/>${art}</svg>`;
  }
  function createField(canvas) {
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return { set() {}, resize() {}, info: () => ({ available: false }) };
    const root = canvas.closest(".research-map"),
      host = canvas.parentElement,
      reduce = matchMedia("(prefers-reduced-motion:reduce)");
    let w = 1,
      h = 1,
      dpr = 1,
      raf = 0,
      visible = false,
      last = 0,
      time = 0,
      frames = 0,
      totalDraw = 0,
      branches = [],
      active = [],
      pointer = { x: 0, y: 0 },
      tilt = { x: 0, y: 0 },
      palette = {},
      center = { x: 0.5, y: 0.5 };
    const strands = Array.from({ length: 26 }, (_, k) =>
      Array.from({ length: 181 }, (_, j) => {
        const t = (j / 180) * TAU,
          offset = (k - 12.5) * 0.011,
          r = 2 + (0.7 + offset) * Math.cos(3 * t);
        return [r * Math.cos(2 * t), r * Math.sin(2 * t), (0.7 + offset) * Math.sin(3 * t), t];
      }),
    );
    function colors() {
      const style = getComputedStyle(root),
        rgb = (v) => style.getPropertyValue("--theme-" + v + "-rgb").trim() || "18,103,109";
      palette = { primary: rgb("primary"), secondary: rgb("secondary"), accent: rgb("accent") };
    }
    const rgba = (key, alpha) => "rgba(" + palette[key] + "," + alpha + ")";
    function paint() {
      const start = performance.now();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      tilt.x += (pointer.x - tilt.x) * 0.05;
      tilt.y += (pointer.y - tilt.y) * 0.05;
      const cx = w * center.x,
        cy = h * center.y,
        radius = Math.min(w * 0.19, h * 0.21),
        phase = time * 0.11;
      for (const [i, b] of branches.entries()) {
        const alpha = b.active ? 0.24 : 0.075;
        ctx.strokeStyle = rgba("primary", alpha);
        ctx.lineWidth = 0.7;
        for (let n = -2; n <= 2; n++) {
          ctx.beginPath();
          ctx.moveTo(b.x, b.y + n * 2);
          ctx.bezierCurveTo(b.c1x, b.c1y + n * 5, b.c2x, b.c2y + n * 5, cx, cy + n * 3);
          ctx.stroke();
        }
        if (b.active)
          for (let n = 0; n < 3; n++) {
            const t = (time * 0.085 + i * 0.21 + n / 3) % 1,
              u = 1 - t,
              x = u * u * u * b.x + 3 * u * u * t * b.c1x + 3 * u * t * t * b.c2x + t * t * t * cx,
              y = u * u * u * b.y + 3 * u * u * t * b.c1y + 3 * u * t * t * b.c2y + t * t * t * cy;
            ctx.beginPath();
            ctx.fillStyle = rgba(n % 2 ? "accent" : "secondary", 0.72);
            ctx.arc(x, y, n === 0 ? 2.2 : 1.25, 0, TAU);
            ctx.fill();
          }
      }
      const wash = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.35);
      wash.addColorStop(0, rgba("accent", 0.07));
      wash.addColorStop(0.65, rgba("primary", 0.025));
      wash.addColorStop(1, rgba("primary", 0));
      ctx.fillStyle = wash;
      ctx.fillRect(cx - radius * 1.35, cy - radius * 1.35, radius * 2.7, radius * 2.7);
      const rx = 0.78 + tilt.y * 0.28,
        ry = phase + tilt.x * 0.3,
        rz = -0.4 + Math.sin(time * 0.08) * 0.08,
        cosX = Math.cos(rx),
        sinX = Math.sin(rx),
        cosY = Math.cos(ry),
        sinY = Math.sin(ry),
        cosZ = Math.cos(rz),
        sinZ = Math.sin(rz);
      function project(p) {
        const y = p[1] * cosX - p[2] * sinX,
          z = p[1] * sinX + p[2] * cosX,
          x = p[0] * cosY + z * sinY,
          z2 = -p[0] * sinY + z * cosY,
          scale = (radius / 3) * (6.5 / (6.5 + z2 * 0.35));
        return [cx + (x * cosZ - y * sinZ) * scale, cy + (x * sinZ + y * cosZ) * scale, z2];
      }
      for (let k = 0; k < strands.length; k++) {
        const pts = strands[k],
          g = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
        g.addColorStop(0, rgba("primary", 0.28 + (k % 5) * 0.035));
        g.addColorStop(0.44, rgba(k % 3 ? "primary" : "accent", 0.7));
        g.addColorStop(0.72, rgba("secondary", 0.5));
        g.addColorStop(1, rgba("accent", 0.24));
        ctx.strokeStyle = g;
        ctx.lineWidth = k % 7 === 0 ? 1.2 : 0.72;
        ctx.beginPath();
        for (let j = 0; j < pts.length; j++) {
          const p = project(pts[j]);
          j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
        }
        ctx.stroke();
      }
      for (let i = 0; i < 7; i++) {
        const j = Math.floor(((time * 0.035 + i / 7) % 1) * 180),
          p = project(strands[13][j]);
        ctx.beginPath();
        ctx.fillStyle = rgba(i % 2 ? "secondary" : "primary", 0.8);
        ctx.arc(p[0], p[1], i === 0 ? 2.8 : 1.5, 0, TAU);
        ctx.fill();
      }
      const drift = radius * 1.3;
      for (let i = 0; i < 13; i++) {
        const t = i * 2.399 + time * 0.025,
          x = cx + Math.cos(t) * drift * (0.7 + (i % 3) * 0.1),
          y = cy + Math.sin(t) * drift * 0.7;
        ctx.beginPath();
        ctx.fillStyle = rgba(i % 2 ? "accent" : "primary", 0.18 + 0.12 * Math.sin(time + i));
        ctx.arc(x, y, 0.8 + (i % 3) * 0.35, 0, TAU);
        ctx.fill();
      }
      frames++;
      totalDraw += performance.now() - start;
    }
    function running() {
      return (
        visible &&
        !reduce.matches &&
        !document.hidden &&
        document.documentElement.dataset.motion !== "paused" &&
        document.documentElement.dataset.starAtlas !== "open" &&
        !["boot", "open", "revealing"].includes(document.documentElement.dataset.intro)
      );
    }
    function tick(now) {
      raf = 0;
      if (!running()) {
        last = 0;
        return;
      }
      if (!last || now - last >= 31) {
        time += last ? Math.min(0.06, (now - last) / 1000) : 0;
        last = now;
        paint();
      }
      raf = requestAnimationFrame(tick);
    }
    function sync() {
      if (running()) {
        if (!raf) {
          last = 0;
          raf = requestAnimationFrame(tick);
        }
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
        last = 0;
        paint();
      }
    }
    function resize() {
      const rect = host.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(1.75, devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      colors();
      paint();
    }
    host.addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerType !== "mouse") return;
        const b = host.getBoundingClientRect();
        pointer = {
          x: (e.clientX - b.left) / b.width - 0.5,
          y: (e.clientY - b.top) / b.height - 0.5,
        };
      },
      { passive: true },
    );
    host.addEventListener("pointerleave", () => (pointer = { x: 0, y: 0 }));
    new IntersectionObserver(
      (es) => {
        visible = es[0].isIntersecting;
        sync();
      },
      { rootMargin: "50px" },
    ).observe(host);
    new ResizeObserver(resize).observe(host);
    new MutationObserver(() => {
      colors();
      sync();
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "data-motion", "data-star-atlas", "data-intro"],
    });
    document.addEventListener("visibilitychange", sync);
    reduce.addEventListener("change", sync);
    colors();
    resize();
    return {
      set(next, c = { x: 0.5, y: 0.5 }) {
        branches = next;
        active = next.filter((b) => b.active).map((b) => b.id);
        center = c;
        paint();
      },
      resize,
      info: () => ({
        available: true,
        visible,
        running: running(),
        frames,
        meanDrawMs: frames ? totalDraw / frames : 0,
        active: active.slice(),
        width: w,
        height: h,
        dpr,
      }),
    };
  }
  window.WX_MAP_ART = { illustration, createField };
})();

/* 19 · Research-map navigation */
/* An editorial map of the supplied publications, not a biological causal diagram. */
(() => {
  "use strict";
  const root = document.getElementById("research-map");
  if (!root) return;
  const papers = window.PUBLICATIONS || [];
  const en = () => window.WX_I18N?.getLang() === "en",
    text = (pair) => pair[en() ? 1 : 0];
  const esc = (v) =>
    String(v ?? "").replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    );
  const scientific = (value, p) => window.WX_ACADEMIC?.format(value, p) || esc(value);
  const questions = [
    {
      id: "immune",
      glyph: "immune",
      name: ["免疫与共病", "Immunity & shared risk"],
      title: ["越过疾病边界，寻找共同线索。", "Different diagnoses, shared questions."],
      description: [
        "从炎症性肠病与卒中的遗传交汇，到免疫调控和细胞因子，追问不同表型之间的共同线索。",
        "Shared susceptibility, immune regulation and cytokines offer complementary routes into complex disease.",
      ],
      papers: [
        "pub-2026-fcgr2a",
        "pub-2026-glp1r",
        "pub-2025-ibd-multitrait",
        "pub-2025-ibd-cross-trait",
        "pub-2024-covid",
      ],
    },
    {
      id: "metabolic",
      glyph: "microbe",
      name: ["菌群与代谢", "Microbes & metabolism"],
      title: ["从微小生态，走向代谢全局。", "Small-scale biology, wider metabolic questions."],
      description: [
        "沿着菌群与肥胖、糖尿病与脂肪肝、胆汁酸转运变异三组线索，连接群体证据与分子层面的研究。",
        "Follow three distinct threads: the microbiome and obesity, shared metabolic disease genetics, and bile acid transporter variants.",
      ],
      papers: ["pub-2024-obesity", "pub-2026-t2dm-masld", "pub-2025-bile-acid"],
    },
    {
      id: "neuro",
      glyph: "neuron",
      name: ["神经与遗传", "Neurobiology & genetics"],
      title: ["沿遗传之线，探神经之问。", "Following genetic clues into neurological disease."],
      description: [
        "从重复扩增、基因缺失到共享遗传易感性，研究共济失调、脱髓鞘与卒中相关问题。",
        "Repeat expansions, gene deficiency and shared susceptibility frame questions about ataxia, demyelination and stroke.",
      ],
      papers: ["pub-2025-atxn3", "pub-2025-slc20a2", "pub-2026-fcgr2a"],
    },
    {
      id: "platform",
      glyph: "platform",
      name: ["平台与工具", "Platforms & resources"],
      title: ["让分散的数据，成为可用的路径。", "Turning dispersed data into usable resources."],
      description: [
        "以 pGWAS-Portal 和 SV4GD 为线索，呈现后 GWAS 分析与遗传病结构变异资源的建设。",
        "pGWAS-Portal and SV4GD connect post-GWAS analysis with resources for structural variation in genetic disease.",
      ],
      papers: ["pub-2026-pgwas", "pub-2025-sv4gd"],
    },
  ];
  const methods = [
    {
      id: "genetics",
      glyph: "helix",
      name: ["遗传解析", "Genetic analysis"],
      title: ["从变异出发，读懂共享线索。", "Starting with variation and shared genetic signals."],
      description: [
        "涉及变异、跨性状与多性状遗传分析，以及后 GWAS 分析平台。具体方法以各篇论文的研究内容为准。",
        "This thread includes variant studies, cross-trait and multi-trait analysis, and a post-GWAS platform. Each paper contributes a different part of that toolkit.",
      ],
    },
    {
      id: "omics",
      glyph: "omics",
      name: ["测序与组学", "Sequencing & omics"],
      title: ["让不同层次的证据，彼此照见。", "Reading across layers of molecular evidence."],
      description: [
        "将长读长测序、转录组与多组学整合放在同一条方法脉络中，观察各项研究如何连接不同尺度的证据。",
        "Long-read sequencing, transcriptomics and integrative multi-omics provide complementary views across molecular scales.",
      ],
    },
    {
      id: "causal",
      glyph: "causal",
      name: ["因果推断", "Causal inference"],
      title: ["由相关起步，向因果追问。", "Moving from association towards causal questions."],
      description: [
        "孟德尔随机化用于研究潜在因果关系；菌群与肥胖研究还包含双向两样本分析和中介分析。",
        "Mendelian randomization addresses potential causal relationships. The microbiome–obesity study also includes bidirectional two-sample and mediation analyses.",
      ],
    },
    {
      id: "functional",
      glyph: "functional",
      name: ["功能与预测", "Function & prediction"],
      title: [
        "让功能研究，与计算判断相遇。",
        "Where functional studies meet computational assessment.",
      ],
      description: [
        "连接基因缺失相关研究，以及结合功能表征和计算工具的变异致病性评估。",
        "This thread brings together a gene-deficiency study and the use of functional characterization with computational tools for variant assessment.",
      ],
    },
    {
      id: "resource",
      glyph: "platform",
      name: ["数据与平台", "Data & platforms"],
      title: ["把分析与资源，做成可抵达的入口。", "Making analyses and resources easier to reach."],
      description: [
        "在线分析平台与结构变异数据库，是科研方法面向使用者的另一种表达。",
        "An online analysis platform and a structural variation database turn research resources into practical entry points.",
      ],
    },
  ];
  const routes = {
    "pub-2026-fcgr2a": {
      methods: ["genetics"],
      short: ["FCGR2A · 肠病与卒中", "FCGR2A · IBD & stroke"],
    },
    "pub-2026-pgwas": {
      methods: ["genetics", "resource"],
      short: ["pGWAS-Portal", "pGWAS-Portal"],
    },
    "pub-2026-t2dm-masld": { methods: ["genetics"], short: ["糖尿病 × 脂肪肝", "T2D × MASLD"] },
    "pub-2026-glp1r": {
      methods: ["omics"],
      short: ["GLP-1R × 溃疡性结肠炎", "GLP-1R × ulcerative colitis"],
    },
    "pub-2025-ibd-multitrait": {
      methods: ["genetics"],
      short: ["IBD · 多性状分析", "IBD · multi-trait analysis"],
    },
    "pub-2025-slc20a2": {
      methods: ["functional"],
      short: ["Slc20a2 · 脱髓鞘", "Slc20a2 · demyelination"],
    },
    "pub-2025-atxn3": {
      methods: ["omics"],
      short: ["ATXN3 · 重复扩增", "ATXN3 · repeat expansions"],
    },
    "pub-2025-bile-acid": {
      methods: ["functional"],
      short: ["胆汁酸转运变异", "Bile acid transporter variants"],
    },
    "pub-2025-ibd-cross-trait": {
      methods: ["genetics", "omics"],
      short: ["IBD · 跨性状与组学", "IBD · cross-trait & omics"],
    },
    "pub-2025-sv4gd": {
      methods: ["resource"],
      short: ["SV4GD · 结构变异", "SV4GD · structural variation"],
    },
    "pub-2024-obesity": { methods: ["causal"], short: ["菌群 × 肥胖", "Microbiome × obesity"] },
    "pub-2024-covid": {
      methods: ["causal"],
      short: ["细胞因子 × COVID-19", "Cytokines × COVID-19"],
    },
  };
  const glyphs = {
    immune:
      '<path class="rm-glyph-outline" d="M40 10C48 4 55 15 63 17S69 31 72 39 62 51 61 61 45 66 38 70 24 61 17 59 12 42 8 35 20 23 23 17 34 15 40 10Z"/><path d="M22 41c0-12 11-22 22-20s18 12 15 23-12 17-23 14-14-9-14-17Z"/><circle class="rm-glyph-beat" cx="41" cy="39" r="9"/><path d="M13 27l8 5m43-8-8 6M24 63l5-9m37-4-9-4"/><circle cx="31" cy="30" r="2"/><circle cx="53" cy="47" r="2"/>',
    microbe:
      '<g class="rm-glyph-float"><rect x="16" y="11" width="13" height="35" rx="6.5" transform="rotate(30 22 28)"/><path d="m19 24 5 2m-7 5 5 2"/></g><g class="rm-glyph-float rm-glyph-late"><rect x="43" y="34" width="14" height="34" rx="7" transform="rotate(-33 50 51)"/><path d="m46 45 5-3m-1 10 5-3"/></g><circle cx="54" cy="18" r="7"/><circle cx="65" cy="30" r="3"/><circle cx="21" cy="60" r="6"/><circle cx="34" cy="51" r="2"/><path d="M7 44c4 6 5 4 9 7m44 14c8-2 8-4 12-7"/>',
    neuron:
      '<path d="M36 37 22 24 13 22m9 2 2-13M38 35l6-16 10-8m-10 8 15 3M45 39l16-4 10 6m-10-6 6-11M37 46 24 54 9 52m15 2-4 14M44 45l7 14 15 10m-15-10-3 12"/><path class="rm-glyph-outline" d="M32 33c6-6 14-5 18 3s-3 15-10 15-14-10-8-18Z"/><circle class="rm-glyph-beat" cx="40" cy="41" r="4"/><g class="rm-glyph-dots"><circle cx="13" cy="22" r="2"/><circle cx="54" cy="11" r="2"/><circle cx="71" cy="41" r="2"/><circle cx="20" cy="68" r="2"/></g>',
    platform:
      '<path d="m40 9 27 14-27 14L13 23 40 9Zm-27 28 27 14 27-14M13 51l27 14 27-14M13 23v14m54-14v14M13 37v14m54-14v14"/><path class="rm-glyph-flow" d="M40 37v28m-19-42 19 10 19-10"/><circle class="rm-glyph-beat" cx="40" cy="23" r="3"/><circle cx="21" cy="54" r="2"/><circle cx="59" cy="54" r="2"/>',
    helix:
      '<path class="rm-glyph-flow" d="M24 7c0 17 32 17 32 33S24 57 24 73M56 7c0 17-32 17-32 33s32 17 32 33"/><path d="M27 14h26M33 23h14M29 33h22M25 42h30M32 52h16M33 61h14M27 68h26"/>',
    omics:
      '<path d="m12 20 31-9 25 17-32 10L12 20Zm0 15 24 17 32-10M12 50l24 17 32-10"/><path class="rm-glyph-flow" d="m21 20 9-2 10 7 13-4m-28 20 11 7 15-5m-26 13 11 7 16-5"/><circle cx="40" cy="25" r="2"/><circle cx="36" cy="48" r="2"/><circle cx="51" cy="58" r="2"/>',
    causal:
      '<circle cx="13" cy="40" r="7"/><circle class="rm-glyph-beat" cx="40" cy="40" r="7"/><circle cx="67" cy="40" r="7"/><path class="rm-glyph-flow" d="M20 40h13m14 0h13"/><path d="m28 36 5 4-5 4m27-8 5 4-5 4M13 26C24 5 56 5 67 26" stroke-dasharray="3 4"/><circle cx="40" cy="13" r="3"/>',
    functional:
      '<path d="m16 24 11-11c7-7 19 5 12 12L28 36c-7 7-19-5-12-12Zm4-4 12 12"/><path d="M42 39h26v26H42zM51 39v26m8-26v26M42 48h26m-26 9h26M23 44v14h12"/><circle class="rm-glyph-beat" cx="54" cy="52" r="2"/>',
  };
  const glyph = (id) =>
    '<svg class="rm-glyph rm-glyph-' +
    id +
    '" viewBox="0 0 80 80" aria-hidden="true" focusable="false">' +
    (glyphs[id] || glyphs.platform) +
    "</svg>";
  const nodes = [
    ...questions.map((q) => ({ ...q, key: "q:" + q.id, kind: "question" })),
    ...methods.map((m) => ({
      ...m,
      key: "m:" + m.id,
      kind: "method",
      papers: papers.filter((p) => routes[p.id]?.methods.includes(m.id)).map((p) => p.id),
    })),
    ...papers
      .filter((p) => routes[p.id])
      .map((p) => ({
        key: "p:" + p.id,
        id: p.id,
        kind: "paper",
        papers: [p.id],
        name: routes[p.id].short,
        paper: p,
      })),
  ];
  const nodeByKey = new Map(nodes.map((n) => [n.key, n])),
    edges = [];
  for (const q of questions)
    for (const m of methods) {
      const ids = q.papers.filter((id) => routes[id]?.methods.includes(m.id));
      if (ids.length) edges.push({ from: "q:" + q.id, to: "m:" + m.id, papers: ids });
    }
  for (const p of papers)
    for (const id of routes[p.id]?.methods || [])
      edges.push({ from: "m:" + id, to: "p:" + p.id, papers: [p.id] });
  let selected = "q:immune",
    preview = null,
    visible = false,
    layoutFrame = 0,
    drawCount = 0,
    detailKey = "",
    paperScope = questions[0].papers.slice(),
    scopeName = questions[0].name;
  const mobile = matchMedia("(max-width:760px)"),
    reduce = matchMedia("(prefers-reduced-motion:reduce)"),
    canHover = matchMedia("(hover:hover) and (pointer:fine)");
  root.innerHTML = `<div class="rm-heading"><div><p class="section-eyebrow" data-rm="eyebrow"></p><h3 id="research-map-title" data-rm="title"></h3></div><div class="rm-heading-side"><p data-rm="intro"></p><button type="button" class="rm-overview"><span></span><i aria-hidden="true">↗</i></button></div></div>
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
  const $ = (s) => root.querySelector(s),
    buttons = new Map();
  for (const node of nodes) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "rm-node rm-" + node.kind;
    b.dataset.mapNode = node.key;
    b.setAttribute("aria-controls", "research-map-detail");
    if (node.kind === "question")
      b.innerHTML =
        '<span class="rm-question-art">' +
        window.WX_MAP_ART.illustration(node.glyph, "rm-" + node.id) +
        '</span><span class="rm-question-caption"><span class="rm-node-name"></span><span class="rm-node-count" lang="en"></span></span><span class="rm-question-underline" aria-hidden="true"></span>';
    else if (node.kind === "method")
      b.innerHTML = glyph(node.glyph) + '<span class="rm-node-name"></span>';
    else
      b.innerHTML =
        '<span class="rm-paper-gem" aria-hidden="true"><span></span></span><span class="rm-paper-copy"><span class="rm-node-name"></span><span class="rm-paper-year" lang="en">' +
        node.paper.year +
        '</span></span><span class="rm-paper-arrow" aria-hidden="true">↗</span>';
    $('[data-rm-list="' + node.kind + '"]').append(b);
    buttons.set(node.key, b);
  }
  const field = window.WX_MAP_ART.createField($(".rm-field"));
  function active() {
    return nodeByKey.get(preview || selected) || null;
  }
  function activePapers() {
    return active()?.papers || papers.map((p) => p.id);
  }
  function draw() {
    layoutFrame = 0;
    if (!root.isConnected) return;
    const box = $(".rm-stage").getBoundingClientRect(),
      core = $(".rm-core").getBoundingClientRect(),
      center = {
        x: (core.left + core.width / 2 - box.left) / box.width,
        y: (core.top + core.height * 0.42 - box.top) / box.height,
      },
      cx = center.x * box.width,
      cy = center.y * box.height,
      ids = new Set(activePapers());
    const branches = questions.map((q) => {
      const r = buttons
          .get("q:" + q.id)
          .querySelector(".rm-question-art")
          .getBoundingClientRect(),
        x = r.left + r.width / 2 - box.left,
        y = r.top + r.height / 2 - box.top;
      return {
        id: q.id,
        x,
        y,
        c1x: x + (cx - x) * 0.55,
        c1y: y - (cy - y) * 0.15,
        c2x: cx - (cx - x) * 0.18,
        c2y: cy + (y - cy) * 0.7,
        active: q.papers.some((id) => ids.has(id)),
      };
    });
    field.set(branches, center);
    drawCount++;
  }
  function queueDraw() {
    if (!layoutFrame) layoutFrame = requestAnimationFrame(draw);
  }
  function render() {
    const node = active(),
      ids = new Set(activePapers()),
      current = node?.key || "all";
    root.dataset.mapCurrent = current;
    root.dataset.mapMode = node?.kind || "overview";
    root.dataset.mapVisible = String(visible);
    if (!node || node.kind !== "paper") {
      paperScope = [...ids];
      scopeName = node?.name || ["全部研究", "All research"];
    } else if (!paperScope.includes(node.id)) {
      paperScope = papers.map((p) => p.id);
      scopeName = ["全部研究", "All research"];
    }
    $("[data-rm=eyebrow]").textContent = text(["研究脉络", "RESEARCH THREADS"]);
    $("[data-rm=title]").innerHTML = text([
      "让好奇流动，<br>让线索相逢。",
      "Where questions meet.<br>Where ideas grow.",
    ]);
    $("[data-rm=intro]").textContent = text([
      "在生命、数据与方法之间，寻一条相连的路。",
      "Across biology, data and methods, discover the connections that shape the work.",
    ]);
    $("[data-rm=methods]").textContent = text(["方法沿途", "METHODS ALONG THE WAY"]);
    $("[data-rm=papers]").textContent = text(["由此成文", "CONNECTED PAPERS"]);
    $(".rm-overview span").textContent = text(["纵览研究", "All research"]);
    $(".rm-overview").setAttribute("aria-pressed", String(!node));
    $(".rm-core span").textContent = text(["交汇", "CONFLUENCE"]);
    $(".rm-core").setAttribute(
      "aria-label",
      text(["交汇，查看全部研究", "Confluence. Explore all research"]),
    );
    $(".rm-core").setAttribute("aria-pressed", String(!node));
    for (const item of nodes) {
      const b = buttons.get(item.key),
        related = item.papers.some((id) => ids.has(id));
      b.dataset.related = String(related);
      b.setAttribute("aria-pressed", String(item.key === current));
      b.hidden = item.kind === "paper" && !paperScope.includes(item.id);
      b.querySelector(".rm-node-name").innerHTML =
        item.kind === "paper" ? scientific(text(item.name), item.paper) : esc(text(item.name));
      const count = b.querySelector(".rm-node-count");
      if (count) count.textContent = String(item.papers.length).padStart(2, "0");
      const name = text(item.name);
      b.setAttribute(
        "aria-label",
        item.kind === "paper"
          ? item.paper.title
          : name +
              text(["，关联 ", "; "]) +
              item.papers.length +
              text([" 篇论文", " linked papers"]),
      );
      b.title = item.kind === "paper" ? item.paper.title : name;
    }
    const kicker = $(".rm-detail-kicker"),
      heading = $(".rm-detail-copy h4"),
      description = $(".rm-detail-text"),
      journal = $(".rm-detail-journal");
    if (node?.kind === "paper") {
      const p = node.paper;
      kicker.textContent = text(["论文一页", "A CLOSER LOOK"]);
      heading.innerHTML = scientific(p.title, p);
      description.innerHTML = scientific(en() ? p.summaryEn : p.summary, p);
      journal.innerHTML =
        '<em class="journal" lang="en">' +
        esc(p.journal) +
        '</em><span lang="en"> · ' +
        esc(p.year) +
        "</span>";
      journal.hidden = false;
    } else {
      kicker.textContent = node
        ? text(node.name)
        : text(["四条主线，彼此交汇", "FOUR CONNECTED LINES OF INQUIRY"]);
      heading.textContent = node
        ? text(node.title)
        : text([
            "把散落的星点，连成求知的长河。",
            "A flowing view of questions, methods and papers.",
          ]);
      description.textContent = node
        ? text(node.description)
        : text([
            "从免疫与代谢，到神经与遗传，再到工具与平台。不同的问题在方法中相遇，也在一篇篇论文中留下足迹。",
            "From immunity and metabolism to neurogenetics and research resources: different questions meet through shared methods and published work.",
          ]);
      journal.hidden = true;
    }
    $(".rm-path-label").textContent =
      node?.kind === "paper"
        ? routes[node.id].methods
            .map((id) => text(methods.find((m) => m.id === id).name))
            .join(" · ")
        : ids.size + text([" 篇相关论文", " connected papers"]);
    $(".rm-read span").textContent = text(
      node?.kind === "paper"
        ? ["定位这篇论文", "Read this paper"]
        : ["走近这些研究", "Explore these papers"],
    );
    $(".rm-scope-name").textContent = text(scopeName);
    $(".rm-shelf-count").textContent =
      String(paperScope.length).padStart(2, "0") + " / " + papers.length;
    document
      .querySelector("[data-research-map-jump]")
      ?.replaceChildren(
        document.createTextNode(text(["循着研究脉络看看 ↘", "Explore the research map ↘"])),
      );
    const key = current + (en() ? "en" : "zh");
    if (detailKey && detailKey !== key && !reduce.matches) {
      $(".rm-detail-copy")
        .getAnimations()
        .forEach((a) => a.cancel());
      $(".rm-detail-copy").animate(
        [
          { opacity: 0.25, transform: "translateY(9px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 420, easing: "cubic-bezier(.2,.7,.3,1)" },
      );
    }
    detailKey = key;
    queueDraw();
  }
  function choose(key, { temporary = false } = {}) {
    if (key !== null && !nodeByKey.has(key)) return false;
    if (temporary) preview = key;
    else {
      selected = key;
      preview = null;
    }
    render();
    return true;
  }
  function revealDetail() {
    requestAnimationFrame(() => {
      const panel = $(".rm-detail"),
        rect = panel.getBoundingClientRect(),
        header = document.querySelector("#site-header")?.offsetHeight || 80;
      if (rect.top < header + 15 || rect.top > innerHeight * 0.6)
        window.scrollTo({
          top: Math.max(0, rect.top + scrollY - header - 28),
          behavior: reduce.matches ? "instant" : "smooth",
        });
    });
  }
  for (const [key, b] of buttons) {
    b.addEventListener("pointerenter", (e) => {
      if (canHover.matches && e.pointerType === "mouse") choose(key, { temporary: true });
    });
    b.addEventListener("click", () => {
      choose(key);
      if (nodeByKey.get(key).kind === "paper") revealDetail();
    });
    b.addEventListener("focus", () => {
      if (root.dataset.keyboard === "true") choose(key, { temporary: true });
    });
    b.addEventListener("keydown", (e) => {
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key))
        return;
      e.preventDefault();
      const node = nodeByKey.get(key),
        kinds = ["question", "method", "paper"];
      let kind = node.kind,
        list = [...buttons].filter(([k, b]) => nodeByKey.get(k).kind === kind && !b.hidden),
        i = list.findIndex(([k]) => k === key);
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        kind =
          kinds[Math.max(0, Math.min(2, kinds.indexOf(kind) + (e.key === "ArrowRight" ? 1 : -1)))];
        const next = [...buttons].filter(([k, b]) => nodeByKey.get(k).kind === kind && !b.hidden);
        i = Math.min(
          next.length - 1,
          Math.round((i / Math.max(1, list.length - 1)) * (next.length - 1)),
        );
        list = next;
      } else
        i =
          e.key === "Home"
            ? 0
            : e.key === "End"
              ? list.length - 1
              : (i + (e.key === "ArrowDown" ? 1 : -1) + list.length) % list.length;
      const item = list[i];
      if (item) {
        choose(item[0]);
        item[1].focus({ preventScroll: true });
      }
    });
  }
  root.addEventListener("keydown", () => (root.dataset.keyboard = "true"));
  root.addEventListener("pointerdown", () => (root.dataset.keyboard = "false"));
  root.addEventListener("pointerleave", () => {
    if (preview) {
      preview = null;
      render();
    }
  });
  root.addEventListener("focusout", () =>
    queueMicrotask(() => {
      if (!root.contains(document.activeElement) && preview) {
        preview = null;
        render();
      }
    }),
  );
  $(".rm-overview").addEventListener("click", () => choose(null));
  $(".rm-core").addEventListener("click", () => choose(null));
  $(".rm-read").addEventListener("click", () => {
    const node = active(),
      ids = activePapers();
    if (node?.kind === "paper") window.WX_PUBLICATIONS?.focus(node.id);
    else
      window.WX_PUBLICATIONS?.show(
        ids,
        node ? { zh: node.name[0], en: node.name[1] } : { zh: "全部研究", en: "All research" },
      );
  });
  new ResizeObserver(queueDraw).observe($(".rm-stage"));
  new IntersectionObserver(
    (es) => {
      visible = es[0].isIntersecting;
      root.dataset.mapVisible = String(visible);
      if (visible) queueDraw();
    },
    { rootMargin: "100px 0px" },
  ).observe(root);
  mobile.addEventListener("change", render);
  addEventListener("languagechange", render);
  document.fonts?.ready.then(queueDraw);
  window.WX_RESEARCH_MAP = {
    select: (key) => choose(key),
    reset: () => choose(null),
    info: () => ({
      selected,
      preview,
      current: active()?.key || "all",
      papers: activePapers().slice(),
      visiblePapers: paperScope.slice(),
      questions: questions.length,
      methods: methods.length,
      paperCount: papers.length,
      edges: edges.length,
      drawCount,
      mobile: mobile.matches,
      art: field.info(),
      mappings: questions.map((q) => ({ id: q.id, papers: q.papers.slice() })),
      routes: Object.fromEntries(Object.entries(routes).map(([id, r]) => [id, r.methods.slice()])),
    }),
  };
  render();
})();

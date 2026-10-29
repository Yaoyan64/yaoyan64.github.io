(() => {
  'use strict';
  const messages={
    zh:{
      'site.title':'王昕 · 数据山海','site.description':'王昕的科研主页。生物医学工程、因果推断、多组学与 AI 辅助科研。',
      'nav.home':'王昕，返回首页','nav.skip':'跳至正文','nav.main':'主导航','nav.mobile':'移动端导航','nav.language':'切换语言','nav.research':'研究','nav.papers':'论文','nav.journey':'学术轨迹','nav.explore':'互动实验室','nav.cv':'学术简历 ↗','nav.open':'打开导航菜单','nav.close':'关闭导航菜单',
      'hero.statement':'在数据山海，<br>探索生命。','hero.description':'生物医学工程 · 因果推断 · 多组学<br>用 AI 拓展科研的想象力。','hero.research':'探索我的研究','hero.play':'来一场小实验','hero.scroll':'继续下探','hero.canvas':'可交互的 DNA 晶体结构，拖动或用方向键旋转',
      'model.left':'向左旋转结构','model.right':'向右旋转结构','model.reset':'复位','model.drag':'拖动，换个角度看生命','model.info':'结构信息 +','model.description':'B 型 DNA 十二聚体，使用 RCSB PDB 1BNA 的实验原子坐标。旋转改变观察角度，结构本身保持不变。','model.source':'查看结构来源 ↗',
      'about.label':'关于我','about.title':'以医学为起点，<br>向交叉处生长。','about.university':'哈尔滨医科大学 · 生物医学工程','about.text':'关注复杂疾病背后的遗传线索。用孟德尔随机化追问因果，用多组学连接证据，也把 AI 智能体带入科研工具箱。','about.cv':'阅读学术简历','about.photo':'王昕的个人照片',
      'stats.unit':'篇','stats.papers':'学术论文','stats.cofirst':'共同第一作者','stats.award':'硕士国家奖学金',
      'research.label':'研究与工具','research.title':'让线索相遇，<br>让想法生长。','research.intro':'从遗传变异到复杂疾病，<br>也从计算工具走向新的研究方式。','research.aiTitle':'AI，让工具更聪明','research.aiText':'把 AI 智能体纳入科研工具箱，探索文献、分析与可视化中的协作方式。','research.aiMethods':'AI 智能体 · 数据挖掘 · 科研可视化','research.aiCanvas':'动态人工神经网络示意','research.causalTitle':'因果，值得多问一步','research.causalText':'以遗传变异为工具，研究免疫、代谢等因素与复杂疾病的潜在因果关系。','research.causalMethods':'孟德尔随机化 · 中介分析','research.causalCanvas':'遗传工具、暴露与结局的因果图','research.omicsTitle':'组学，把证据连起来','research.omicsText':'整合跨性状遗传与多组学证据，探索疾病共享的遗传基础及潜在靶点。','research.omicsMethods':'跨性状分析 · 多组学整合','research.omicsCanvas':'基因组、转录组与蛋白组的动态数据层示意',
      'papers.label':'学术成果','papers.title':'让研究，<br>自己说话。','papers.totalLabel':'学术论文','papers.years':'按年份筛选论文','papers.all':'全部','papers.search':'搜索论文或研究主题','papers.searchAria':'搜索论文','papers.onlyCofirst':'共同第一作者','papers.count':'{count} 篇论文','papers.authors':'研究摘要与书目信息','papers.copy':'复制引用','papers.original':'阅读原文','papers.cofirst':'共同第一作者','papers.collaboration':'合作研究','papers.more':'展开其余 {count} 篇论文','papers.less':'收起论文列表','papers.emptyTitle':'没有匹配的论文','papers.emptyText':'换个关键词，再探索一下。','papers.reset':'清除筛选','papers.copied':'引用已复制','papers.copyFailed':'复制未成功，请展开书目信息后手动复制。',
      'journey.label':'学术轨迹','journey.title':'积累，然后向前。','journey.university':'哈尔滨医科大学','journey.now':'2026.09 — 至今','journey.currentDegree':'博士阶段','journey.masterDegree':'硕士阶段','journey.bachelorDegree':'本科阶段','journey.engineering':'生物医学工程','journey.basic':'基础医学（5+2）','journey.bachelorSubject':'基础医学 · 医学学士','journey.currentText':'连接生命科学与计算方法，继续探索交叉研究。','journey.masterText':'2025 年硕士国家奖学金<br>2025 年省三好学生','journey.bachelorText':'基础医学训练与研究起步。<br>2021—2022 年国家励志奖学金。','journey.early':'本科与硕士早期的其他经历','journey.studentTitle':'本科 · 学生工作','journey.studentText':'2019—2022 年，在校学生会参与技术制作与活动组织，先后担任技术部部员、副部长和校学生会副主席。','journey.volunteerTitle':'早期 · 志愿服务','journey.volunteerText':'本科与硕士早期参加校园会议、挑战杯赛务、文化宣传及疫情防控等志愿服务。',
      'explore.label':'互动实验室','explore.title':'好奇心，<br>可以亲手试一试。','explore.intro':'给这段 DNA 找到另一半。<br>这次，不用先读方法学。','closing.title':'数据有边界，<br>好奇心没有。','closing.cv':'阅读学术简历','footer.top':'返回顶部 ↑'
    },
    en:{
      'site.title':'Wang Xin · Data & Discovery','site.description':'Wang Xin’s research portfolio. Biomedical engineering, causal inference, multi-omics and AI-assisted research.',
      'nav.home':'Wang Xin, back to home','nav.skip':'Skip to content','nav.main':'Main navigation','nav.mobile':'Mobile navigation','nav.language':'Select language','nav.research':'Research','nav.papers':'Publications','nav.journey':'Journey','nav.explore':'Play & discover','nav.cv':'Academic profile ↗','nav.open':'Open navigation','nav.close':'Close navigation',
      'hero.statement':'A sea of data.<br>A world of discovery.','hero.description':'Biomedical engineering · Causal inference · Multi-omics<br>Exploring new possibilities with AI.','hero.research':'Explore my research','hero.play':'Try a little experiment','hero.scroll':'Explore further','hero.canvas':'Interactive DNA crystal structure. Drag or use arrow keys to rotate.',
      'model.left':'Rotate structure left','model.right':'Rotate structure right','model.reset':'Reset','model.drag':'Drag to see another angle','model.info':'Structure info +','model.description':'A B-DNA dodecamer rendered from the experimental atomic coordinates of RCSB PDB 1BNA. Rotation changes the viewpoint, never the molecular structure.','model.source':'View the structure source ↗',
      'about.label':'About me','about.title':'Rooted in medicine.<br>Curious across disciplines.','about.university':'Harbin Medical University · Biomedical Engineering','about.text':'I explore the genetic clues behind complex diseases, using Mendelian randomization to investigate causality and multi-omics to connect evidence—with AI agents as part of my research toolkit.','about.cv':'Read my academic profile','about.photo':'Portrait of Wang Xin',
      'stats.unit':'','stats.papers':'Publications','stats.cofirst':'Co-first authorships','stats.award':'National Scholarship for Master’s Students',
      'research.label':'Research & tools','research.title':'Connect the evidence.<br>Explore the possibilities.','research.intro':'From genetic variation to complex disease.<br>From computational tools to new ways of working.','research.aiTitle':'AI in the research toolkit','research.aiText':'Exploring AI agents as collaborators in literature work, analysis and scientific visualization.','research.aiMethods':'AI agents · Data mining · Scientific visualization','research.aiCanvas':'Animated artificial neural network schematic','research.causalTitle':'Look beyond association','research.causalText':'Using genetic variants as instruments to investigate potential causal links between immune or metabolic factors and complex diseases.','research.causalMethods':'Mendelian randomization · Mediation analysis','research.causalCanvas':'Causal diagram of genetic instruments, exposure and outcome','research.omicsTitle':'Bring the evidence together','research.omicsText':'Integrating cross-trait genetics and multi-omics evidence to explore shared disease architecture and potential targets.','research.omicsMethods':'Cross-trait analysis · Multi-omics integration','research.omicsCanvas':'Animated conceptual layers of genomic, transcriptomic and proteomic data',
      'papers.label':'Publications','papers.title':'Research,<br>in its own words.','papers.totalLabel':'PUBLICATIONS','papers.years':'Filter publications by year','papers.all':'All','papers.search':'Search papers or research topics','papers.searchAria':'Search publications','papers.onlyCofirst':'Co-first author','papers.count':'{count} publications','papers.authors':'Summary & bibliographic details','papers.copy':'Copy citation','papers.original':'Read paper','papers.cofirst':'Co-first author','papers.collaboration':'Collaborative study','papers.more':'Show {count} more publications','papers.less':'Show fewer publications','papers.emptyTitle':'No matching publications','papers.emptyText':'Try another keyword and keep exploring.','papers.reset':'Clear filters','papers.copied':'Citation copied','papers.copyFailed':'Copy failed. Open the bibliographic details to copy manually.',
      'journey.label':'Academic journey','journey.title':'Build. Explore. Keep going.','journey.university':'Harbin Medical University','journey.now':'Sep 2026 — Present','journey.currentDegree':'Doctoral phase','journey.masterDegree':'Master’s phase','journey.bachelorDegree':'Undergraduate studies','journey.engineering':'Biomedical Engineering','journey.basic':'Basic Medicine · 5+2 program','journey.bachelorSubject':'Basic Medicine · Bachelor of Medicine','journey.currentText':'Connecting life sciences and computational methods through interdisciplinary research.','journey.masterText':'2025 National Scholarship for Master’s Students<br>2025 Provincial Merit Student Award','journey.bachelorText':'Foundations in basic medicine and early research.<br>2021–2022 National Inspiration Scholarship.','journey.early':'Earlier campus & volunteer experience','journey.studentTitle':'Undergraduate · Student leadership','journey.studentText':'2019–2022: technical production and event organization in the university student union, serving as a department member, deputy head and vice president.','journey.volunteerTitle':'Early years · Volunteering','journey.volunteerText':'Volunteer work during undergraduate and early postgraduate years included campus congresses, the Challenge Cup, cultural outreach and COVID-19 prevention.',
      'explore.label':'Interactive lab','explore.title':'Curiosity?<br>Give it a try.','explore.intro':'Find the other half of this DNA sequence.<br>No methods section required.','closing.title':'Data has limits.<br>Curiosity doesn’t.','closing.cv':'Read my academic profile','footer.top':'Back to top ↑'
    }
  };

  // Current presentation copy and confirmed integrated degree track.
  Object.assign(messages.zh, {
  "hero.name": "王昕",
  "hero.description": "生物医学工程 · 肠道微生物 · 因果推断<br>用 AI 拓展科研的想象力。",
  "hero.play": "读一段生命密码",
  "hero.canvas": "可交互的 DNA 骨架条带示意，拖动或用方向键旋转",
  "model.pairs": "碱基配对",
  "model.description": "基于 PDB 1BNA 的糖骨架路径绘制双链条带。呈现反向平行、右手螺旋与碱基配对，不是原子级结构图。",
  "dna.discover": "读一段 DNA，找到互补的另一半",
  "dna.open": "动手配对",
  "about.university": "哈尔滨医科大学 · 生物医学工程博士阶段",
  "about.focusLabel": "选择研究兴趣",
  "about.genetics": "遗传与因果",
  "about.microbes": "肠道微生物",
  "about.ai": "AI 协作",
  "about.text": "用孟德尔随机化追问因果，用多组学连接证据，关注复杂疾病背后的遗传线索。",
  "about.focus.genetics": "用孟德尔随机化追问因果，用多组学连接证据，关注复杂疾病背后的遗传线索。",
  "about.focus.microbes": "关注益生菌、致病机制与菌群互作，探索肠道微生物、代谢产物和宿主免疫之间的联系。",
  "about.focus.ai": "探索大语言模型与 AI 智能体在科研中的协作，让文献整理、分析工作流和可视化更顺畅。",
  "research.title": "不同尺度，<br>同一份好奇。",
  "research.intro": "从语言模型到肠道微生物，<br>也从遗传线索到疾病机制。",
  "research.aiTitle": "让语言，成为科研的接口",
  "research.aiText": "探索大语言模型与 AI 智能体在文献整理、分析工作流和科研表达中的协作。",
  "research.aiCanvas": "词元、注意力与生成的大语言模型流程示意",
  "research.microTitle": "在微小世界，寻找大问题",
  "research.microText": "关注肠道微生物、益生菌与致病机制，探索菌群、代谢产物和宿主免疫之间的联系。",
  "llm.label": "语言模型流程示意",
  "llm.play": "播放流程 ↗",
  "llm.playing": "流程播放中…",
  "llm.steps": "查看语言模型步骤",
  "llm.tokens": "词元",
  "llm.attention": "注意力",
  "llm.generation": "生成",
  "llm.selectToken": "选择一个输入片段",
  "llm.focusToken": "聚焦输入片段：{token}",
  "llm.text.tokens": "文本被表示为词元并映射到向量。点选一个片段，观察它在图中的位置。",
  "llm.text.attention": "注意力连接上下文；选中的片段会在矩阵中突出显示。",
  "llm.text.generation": "模型逐步生成后续词元。图中用预设片段演示这一过程。",
  "causal.select": "选择因果图节点",
  "causal.instrument": "遗传工具",
  "causal.exposure": "暴露",
  "causal.outcome": "结局",
  "causal.text.instrument": "遗传变异作为工具变量。有效推断还依赖相关性、独立性与排除限制等假设。",
  "causal.text.exposure": "暴露是希望研究的因素，例如一种代谢物或免疫性状。",
  "causal.text.outcome": "结局是所关注的疾病或表型。关联信号需要进一步的因果分析与证据验证。",
  "omics.select": "探索组学层次",
  "omics.all": "整合",
  "omics.genome": "基因组",
  "omics.transcriptome": "转录组",
  "omics.proteome": "蛋白组",
  "omics.text.all": "把不同层面的证据放在一起，寻找一致的线索。",
  "omics.text.genome": "基因组层关注 DNA 序列与遗传变异，提供相对稳定的遗传背景。",
  "omics.text.transcriptome": "转录组层关注 RNA 表达，帮助观察基因活动的变化。",
  "omics.text.proteome": "蛋白组层关注蛋白质的丰度与状态，靠近细胞功能的执行层。",
  "papers.topics": "按研究主题探索",
  "papers.topicAll": "所有主题",
  "papers.topicMicro": "微生物",
  "papers.topicImmune": "免疫",
  "papers.topicNeuro": "神经",
  "papers.topicPlatform": "研究平台",
  "papers.random": "随机读一篇 ↗",
  "journey.currentDegree": "博士阶段",
  "journey.masterDegree": "硕士阶段",
  "journey.integrated": "2024 — 至今 · 硕博连读",
  "journey.select": "查看教育阶段",
  "journey.panel.phdTitle": "博士阶段 · 生物医学工程",
  "journey.panel.phd": "硕博连读的博士阶段。继续围绕复杂疾病、肠道微生物与计算方法探索交叉研究。",
  "journey.panel.masterTitle": "硕士阶段 · 基础医学",
  "journey.panel.master": "硕博连读的硕士阶段。2025 年获硕士国家奖学金、省三好学生。",
  "journey.panel.bachelorTitle": "本科阶段 · 医学学士",
  "journey.panel.bachelor": "2019—2024 年完成基础医学本科阶段学习。获 2021—2022 年国家励志奖学金，并在本科期间参与学生工作与志愿服务。"
});
  Object.assign(messages.en, {
  "hero.name": "Wang Xin",
  "hero.description": "Biomedical engineering · Gut microbiome · Causal inference<br>Exploring new possibilities with AI.",
  "hero.play": "Read a little life code",
  "hero.canvas": "Interactive DNA backbone ribbon schematic. Drag or use arrow keys to rotate.",
  "model.pairs": "Base pairs",
  "model.description": "Two ribbons follow the sugar-backbone paths of PDB 1BNA. They illustrate antiparallel strands, a right-handed helix and base pairing, rather than an atomic-level rendering.",
  "dna.discover": "Read a DNA sequence. Find its complementary strand.",
  "dna.open": "Try pairing",
  "about.university": "Harbin Medical University · Doctoral studies in Biomedical Engineering",
  "about.focusLabel": "Choose a research interest",
  "about.genetics": "Genetics & causality",
  "about.microbes": "Gut microbiome",
  "about.ai": "AI collaboration",
  "about.text": "Using Mendelian randomization to investigate causality and multi-omics to connect evidence behind the genetics of complex diseases.",
  "about.focus.genetics": "Using Mendelian randomization to investigate causality and multi-omics to connect evidence behind the genetics of complex diseases.",
  "about.focus.microbes": "Interested in probiotics, pathogenesis and microbial interactions, exploring links between gut microbes, metabolites and host immunity.",
  "about.focus.ai": "Exploring large language models and AI agents as collaborators in literature work, analysis workflows and scientific visualization.",
  "research.title": "Different scales.<br>The same curiosity.",
  "research.intro": "From language models to gut microbes.<br>From genetic clues to disease mechanisms.",
  "research.aiTitle": "Language as a research interface",
  "research.aiText": "Exploring large language models and AI agents for collaboration in literature work, analytical workflows and scientific communication.",
  "research.aiCanvas": "Conceptual large language model pipeline showing tokens, attention and generation",
  "research.microTitle": "Small worlds. Big questions.",
  "research.microText": "Research interests in gut microbes, probiotics and pathogenesis, connecting microbial communities, metabolites and host immunity.",
  "llm.label": "Language model process illustration",
  "llm.play": "Play the process ↗",
  "llm.playing": "Playing…",
  "llm.steps": "Explore language model steps",
  "llm.tokens": "Tokens",
  "llm.attention": "Attention",
  "llm.generation": "Generation",
  "llm.selectToken": "Select an input fragment",
  "llm.focusToken": "Focus on input fragment: {token}",
  "llm.text.tokens": "Text is represented as tokens and mapped to vectors. Select a fragment to locate it in the model illustration.",
  "llm.text.attention": "Attention links the context. The selected fragment is highlighted across the matrices.",
  "llm.text.generation": "The model generates subsequent tokens step by step. Preset fragments illustrate this process here.",
  "causal.select": "Select a causal diagram node",
  "causal.instrument": "Instrument",
  "causal.exposure": "Exposure",
  "causal.outcome": "Outcome",
  "causal.text.instrument": "Genetic variants act as instruments. Valid inference also requires relevance, independence and exclusion-restriction assumptions.",
  "causal.text.exposure": "The exposure is the factor of interest, such as a metabolite or an immune trait.",
  "causal.text.outcome": "The outcome is a disease or phenotype of interest. Association signals need causal analysis and further supporting evidence.",
  "omics.select": "Explore the omics layers",
  "omics.all": "Integrate",
  "omics.genome": "Genome",
  "omics.transcriptome": "Transcriptome",
  "omics.proteome": "Proteome",
  "omics.text.all": "Bring evidence from different biological layers together to look for consistent clues.",
  "omics.text.genome": "Genomics examines DNA sequences and genetic variation, providing a relatively stable genetic background.",
  "omics.text.transcriptome": "Transcriptomics examines RNA expression to explore changes in gene activity.",
  "omics.text.proteome": "Proteomics examines protein abundance and state, closer to the execution of cellular functions.",
  "papers.topics": "Explore by research topic",
  "papers.topicAll": "All topics",
  "papers.topicMicro": "Microbes",
  "papers.topicImmune": "Immunity",
  "papers.topicNeuro": "Neuroscience",
  "papers.topicPlatform": "Platforms",
  "papers.random": "Pick a paper ↗",
  "journey.currentDegree": "Doctoral phase",
  "journey.masterDegree": "Master’s phase",
  "journey.integrated": "2024 — Present · Integrated master’s–PhD track",
  "journey.select": "Explore the education stages",
  "journey.panel.phdTitle": "Doctoral phase · Biomedical Engineering",
  "journey.panel.phd": "The doctoral phase of an integrated master’s–PhD track, exploring intersections between complex diseases, gut microbes and computational methods.",
  "journey.panel.masterTitle": "Master’s phase · Basic Medicine",
  "journey.panel.master": "The master’s phase of an integrated master’s–PhD track. Awarded the 2025 National Scholarship for Master’s Students and the Provincial Merit Student Award.",
  "journey.panel.bachelorTitle": "Undergraduate phase · Bachelor of Medicine",
  "journey.panel.bachelor": "Undergraduate studies in Basic Medicine from 2019 to 2024. Received the 2021–2022 National Inspiration Scholarship and took part in student leadership and volunteering."
});
  // V5: editorial language and continuous exploration.
  Object.assign(messages.zh,{"hero.statement": "向微处寻光，<br>与未知相逢。", "hero.description": "循着遗传、微生物与智能的线索，<br>把好奇写进每一个值得追问的问题。", "hero.canvas": "可旋转、缩放的光织双螺旋。拖动或方向键旋转，轻触或按回车感受流光，用滑杆缩放。", "model.drag": "轻触流光 · 拖动旋转", "model.info": "关于这道螺旋 +", "model.description": "以双螺旋为灵感的光织雕塑。珠光、细丝与流动的光，在曲面间相遇。轻触唤起一道涟漪，转动与放大，发现另一个角度。", "model.zoom": "缩放细节", "model.zoomIn": "放大双螺旋", "model.zoomOut": "缩小双螺旋", "model.pairs": "连接条带", "about.title": "以医学为起点，<br>让好奇慢慢生长。", "about.focus.genetics": "我喜欢沿着遗传的细小线索，追问疾病背后的因果。让不同层面的组学证据相互照见，也让每一个结论经得起细读。", "about.focus.microbes": "微小的生命，自有广阔的世界。我关注肠道菌群、益生菌与致病机制，也关心它们如何通过代谢与免疫，与宿主彼此回应。", "about.focus.ai": "把重复的步骤交给工具，把更多时间留给问题。我尝试与大语言模型、AI 智能体协作，在文献、分析与表达之间，为研究打开新的窗口。", "research.title": "于不同尺度，<br>听见生命的回声。", "research.intro": "让证据循线而来，<br>也给想象留一扇窗。", "closing.title": "山海未尽，<br>好奇未央。", "flow.pause": "暂停轮播", "flow.play": "自动轮播", "causal.flowLabel": "沿着证据，追问因果", "omics.flowLabel": "在层次之间，连接线索", "poem.label": "轮换的短句", "poem.previous": "上一句", "poem.next": "下一句", "poem.pause": "暂停短句轮换", "poem.play": "继续短句轮换"});
  Object.assign(messages.en,{"hero.statement": "Find light in the small.<br>Meet the unknown.", "hero.description": "Following threads of genetics, microbes and intelligence.<br>Letting curiosity lead to questions worth asking.", "hero.canvas": "Interactive light-woven double helix. Drag or use arrow keys to rotate; tap or press Enter for a light ripple; use the slider to zoom.", "model.drag": "Touch for light · Drag to turn", "model.info": "About the helix +", "model.description": "A light-woven sculpture inspired by the double helix. Pearlescent ribbons and fine filaments meet in flowing light. Touch to awaken a ripple; turn and zoom to discover another angle.", "model.zoom": "Zoom into the details", "model.zoomIn": "Zoom in on the helix", "model.zoomOut": "Zoom out from the helix", "model.pairs": "Connections", "about.title": "Rooted in medicine.<br>Growing with curiosity.", "about.focus.genetics": "I follow small genetic clues toward larger questions of causality. Through multi-omics, I look for evidence that speaks across scales, and conclusions that stand up to a closer reading.", "about.focus.microbes": "Small lives inhabit a vast world. I am interested in gut communities, probiotics and pathogenesis, and the conversations between microbes and their host through metabolism and immunity.", "about.focus.ai": "More time for questions, fewer hours of repetition. I explore language models and AI agents as collaborators in reading, analysis and expression, opening new windows onto research.", "research.title": "Across scales,<br>listening to life.", "research.intro": "Follow the evidence.<br>Leave a window open for imagination.", "closing.title": "Beyond the horizon,<br>curiosity continues.", "flow.pause": "Pause cycle", "flow.play": "Auto cycle", "causal.flowLabel": "Follow the causal path", "omics.flowLabel": "Connect the layers", "poem.label": "Rotating reflections", "poem.previous": "Previous reflection", "poem.next": "Next reflection", "poem.pause": "Pause reflections", "poem.play": "Resume reflections"});
  // V6: scene-specific captions and accurate conceptual descriptions.
  Object.assign(messages.zh,{"scene.llm.tokens": "词元 · 语义星群", "scene.llm.attention": "注意力 · 上下文的交汇", "scene.llm.generation": "生成 · 语言渐次展开", "scene.causal.instrument": "遗传工具 · 因果的起点", "scene.causal.exposure": "暴露 · 沿作用路径前行", "scene.causal.outcome": "结局 · 读懂效应与区间", "scene.omics.all": "整合 · 证据交汇之处", "scene.omics.genome": "基因组 · 序列的秩序", "scene.omics.transcriptome": "转录组 · 流动的表达", "scene.omics.proteome": "蛋白组 · 折叠的形与意", "llm.text.tokens": "语言被拆成词元，并映射到向量空间。选择一个输入片段，跟随它进入注意力的世界。", "llm.text.attention": "不同的注意力头关联上下文；因果遮罩限定可见位置，保留自回归生成的方向。", "llm.text.generation": "生成光带渐次展开，示意模型如何依据已有上下文，继续预测下一个词元。", "causal.text.instrument": "沿遗传位点寻找工具变量，首先检视它们与暴露的关联。因果推断仍需要相应假设与证据。", "causal.text.exposure": "从暴露分布到作用路径，借助遗传工具，追问关联背后的因果问题。", "causal.text.outcome": "回到结局，将效应估计与不确定性放在一起阅读，再结合敏感性分析审视证据。", "omics.text.all": "让基因组、转录组与蛋白组相互照见，在不同尺度的证据之间寻找联系。", "omics.text.genome": "沿着序列与变异的线索，探索疾病相关的遗传基础。", "omics.text.transcriptome": "转录本在时间与情境中流动，让表达变化成为观察生物过程的窗口。", "omics.text.proteome": "从氨基酸序列到折叠形态，再到丰度与功能，连接分子结构和生物学问题。"});
  Object.assign(messages.en,{"scene.llm.tokens": "Tokens · A constellation of meaning", "scene.llm.attention": "Attention · Context converges", "scene.llm.generation": "Generation · Language unfolds", "scene.causal.instrument": "Instruments · Where inquiry begins", "scene.causal.exposure": "Exposure · Following the pathway", "scene.causal.outcome": "Outcome · Effects and uncertainty", "scene.omics.all": "Integration · Evidence in dialogue", "scene.omics.genome": "Genome · Order in the sequence", "scene.omics.transcriptome": "Transcriptome · Expression in motion", "scene.omics.proteome": "Proteome · Form through folding", "llm.text.tokens": "Language is divided into tokens and mapped into vector space. Choose an input fragment to follow it into attention.", "llm.text.attention": "Different attention heads connect context. A causal mask limits visible positions for autoregressive generation.", "llm.text.generation": "An unfolding stream illustrates how a model uses existing context to predict the next token.", "causal.text.instrument": "Explore genetic variants as instruments, beginning with their associations with exposure. Causal inference depends on the relevant assumptions and evidence.", "causal.text.exposure": "From a distribution of exposure to a possible pathway, genetic instruments help frame questions about causality.", "causal.text.outcome": "Read effect estimates alongside uncertainty, then consider sensitivity analyses when evaluating the evidence.", "omics.text.all": "Bring genomes, transcriptomes and proteomes into dialogue, connecting evidence across biological scales.", "omics.text.genome": "Follow sequences and variants to investigate the genetic basis of disease.", "omics.text.transcriptome": "Transcripts vary across time and context, opening a window onto biological processes.", "omics.text.proteome": "From amino-acid sequences and folded forms to abundance and function, connect molecular structure with biological questions."});
  // V8: several visible forms share one continuous biomedical / AI composition.
  Object.assign(messages.zh,{
    'hero.canvas':'生命与智能的动态星群。轻触不同形体可探索，拖动或方向键旋转，滑杆缩放。数字 1、2、3 分别选择 AI、微生物和数据；回车触发流光，Esc 返回双螺旋。',
    'model.drag':'轻触探索 · 拖动旋转',
    'model.info':'关于这片星群 +',
    'model.description':'遗传的秩序、语言的联结与微小的生命，在同一片光里相遇。轻触星群，跟随它们之间的回应；转动与放大，让细节慢慢浮现。',
    'model.zoomIn':'放大画面','model.zoomOut':'缩小画面'
  });
  Object.assign(messages.en,{
    'hero.canvas':'A moving constellation of life and intelligence. Touch a form to explore, drag or use arrows to rotate, and use the slider to zoom. Keys 1, 2 and 3 select AI, microbes and data. Enter releases light; Escape returns to the helix.',
    'model.drag':'Touch to explore · Drag to turn',
    'model.info':'About the constellation +',
    'model.description':'Genetic order, the connections of language, and small living worlds meet in the same light. Touch the constellation and follow its responses. Turn and zoom to let the details emerge.',
    'model.zoomIn':'Zoom in on the scene','model.zoomOut':'Zoom out from the scene'
  });
  // V9: each form has its own orientation; the empty stage turns the whole scene.
  Object.assign(messages.zh,{
    'hero.canvas':'可自由旋转的生命与智能星群。拖动任意形体旋转它，拖动空白处旋转整组；鼠标放在画面内直接滚轮缩放，触屏双指缩放。数字 0、1、2、3 选择双螺旋、AI、微生物和数据，方向键旋转当前选择，Esc 选择整组，Home 复位。',
    'model.drag':'拖动任意图案 · 滚轮缩放',
    'model.description':'遗传的秩序、语言的联结与微小的生命，在同一片光里相遇。拖动每个形体，找到它的另一面；拖动空白处，让整片星群转动。鼠标放在画面内即可滚轮缩放，触屏支持双指缩放。'
  });
  Object.assign(messages.en,{
    'hero.canvas':'An interactive constellation of life and intelligence. Drag any form to rotate it, or drag empty space to turn the whole scene. Scroll over the artwork to zoom; pinch with two fingers on touch screens. Keys 0, 1, 2 and 3 select the helix, AI, microbes and data. Arrow keys rotate the selection, Escape selects the whole scene, and Home resets the view.',
    'model.drag':'Drag a shape · Scroll to zoom',
    'model.description':'Genetic order, language and small living worlds meet in the same light. Drag a form to discover another side, or drag empty space to turn the whole constellation. Scroll over the artwork to zoom, or pinch with two fingers on a touch screen.'
  });
  // V10: the homepage uses an original illustration; the CV retains the portrait.
  Object.assign(messages.zh,{'about.art':'青黛与朱砂的丝带、微观星群与书页交织的科研插画'});
  Object.assign(messages.en,{'about.art':'An original illustration of teal and vermilion ribbons, microscopic constellations and an open book'});
  // V11: concise editorial copy, written naturally in each language.
  Object.assign(messages.zh,{
    'hero.statement':'在细微处，<br>看见生命的辽阔。',
    'hero.description':'以遗传与微生物为线索，<br>借助数据与智能，探寻疾病背后的缘由。',
    'hero.play':'读一段生命密码',
    'hero.scroll':'往下看看',
    'about.title':'从医学出发，<br>在交叉处求索。',
    'about.text':'我关注复杂疾病的遗传基础，用孟德尔随机化追问因果，也借助多组学证据，让零散线索逐渐清晰。',
    'about.focus.genetics':'我关注复杂疾病的遗传基础，用孟德尔随机化追问因果，也借助多组学证据，让零散线索逐渐清晰。',
    'about.focus.microbes':'我对肠道微生物尤其感兴趣：从益生菌到致病机制，从代谢产物到宿主免疫，想弄清这些微小生命如何影响健康。',
    'about.focus.ai':'我尝试把大语言模型与 AI 智能体用在文献梳理、分析流程和科研表达中，让工具分担重复工作，把时间留给判断与思考。',
    'research.title':'把线索连起来，<br>把问题问下去。',
    'research.intro':'遗传、微生物与人工智能，<br>是我观察复杂疾病的几扇窗。',
    'research.aiTitle':'让语言连接工具与想法',
    'research.aiText':'探索大语言模型与 AI 智能体如何协助文献整理、分析工作流与科研表达。',
    'research.microTitle':'微小的生命，广阔的联系',
    'research.microText':'关注肠道菌群、益生菌与致病机制，探索微生物、代谢产物和宿主免疫之间的联系。',
    'research.causalTitle':'从相关出发，向因果追问',
    'research.omicsTitle':'不同层次的证据，同一个问题',
    'closing.title':'仍有未解，<br>便有下一程。',
    'flow.pause':'暂停轮播','flow.play':'继续轮播',
    'scene.llm.tokens':'词元 · 语言的起点',
    'scene.llm.attention':'注意力 · 联结上下文',
    'scene.llm.generation':'生成 · 预测下一个词元',
    'scene.causal.instrument':'遗传工具 · 从变异寻找线索',
    'scene.causal.exposure':'暴露 · 考察作用路径',
    'scene.causal.outcome':'结局 · 效应与不确定性',
    'scene.omics.all':'整合 · 汇集不同层次的证据',
    'scene.omics.genome':'基因组 · 序列与变异',
    'scene.omics.transcriptome':'转录组 · 读出表达变化',
    'scene.omics.proteome':'蛋白组 · 从分子到功能',
    'llm.text.tokens':'文本被拆分为词元，再转为向量表示。选中一个片段，看看它如何参与后续计算。',
    'llm.text.attention':'不同注意力头建立上下文中的联系；因果遮罩限定可见位置，使模型依据已有内容进行预测。',
    'llm.text.generation':'模型依据已有上下文，逐步预测下一个词元。流动的光带呈现这一过程。',
    'omics.text.all':'综合基因组、转录组与蛋白组的证据，从不同层次审视同一个生物学问题。',
    'omics.text.transcriptome':'观察 RNA 表达随时间和条件发生的变化，寻找基因活动与生物过程之间的联系。',
    'omics.text.proteome':'观察蛋白质的丰度、状态与功能，进一步理解分子层面的变化。'
  });
  Object.assign(messages.en,{
    'hero.statement':'Small clues.<br>A wider view of life.',
    'hero.description':'Tracing disease through genetics and the microbiome.<br>Bringing data and AI into the search.',
    'hero.play':'Explore a DNA sequence',
    'hero.scroll':'Keep exploring',
    'about.title':'Rooted in medicine.<br>Drawn to new connections.',
    'about.text':'I study the genetic basis of complex disease, using Mendelian randomization to examine causal relationships and multi-omics to connect the evidence.',
    'about.focus.genetics':'I study the genetic basis of complex disease, using Mendelian randomization to examine causal relationships and multi-omics to connect the evidence.',
    'about.focus.microbes':'I am especially interested in the gut microbiome—from probiotics and pathogenesis to microbial metabolites and host immunity—and how these relationships shape health.',
    'about.focus.ai':'I explore language models and AI agents for literature review, analysis workflows and scientific communication. The aim is to spend less time on repetition and more on interpretation.',
    'research.title':'Follow the evidence.<br>Ask the next question.',
    'research.intro':'Genetics, microbes and AI offer<br>different perspectives on complex disease.',
    'research.aiTitle':'Connecting ideas with AI tools',
    'research.aiText':'Exploring how large language models and AI agents can help with literature review, analysis workflows and scientific communication.',
    'research.microTitle':'Small organisms. Far-reaching effects.',
    'research.microText':'Exploring gut communities, probiotics and pathogenesis, with an interest in the links between microbes, metabolites and host immunity.',
    'research.causalTitle':'From association to causal questions',
    'research.omicsTitle':'Many layers. A shared question.',
    'closing.title':'More to understand.<br>More to explore.',
    'flow.pause':'Pause slideshow','flow.play':'Resume slideshow',
    'scene.llm.tokens':'Tokens · Where language begins',
    'scene.llm.attention':'Attention · Connecting context',
    'scene.llm.generation':'Generation · Predicting the next token',
    'scene.causal.instrument':'Instruments · Clues in genetic variation',
    'scene.causal.exposure':'Exposure · Examining the pathway',
    'scene.causal.outcome':'Outcome · Effects and uncertainty',
    'scene.omics.all':'Integration · Bringing evidence together',
    'scene.omics.genome':'Genome · Sequence and variation',
    'scene.omics.transcriptome':'Transcriptome · Changes in expression',
    'scene.omics.proteome':'Proteome · Molecules and function',
    'llm.text.tokens':'Text is split into tokens and represented as vectors. Select a fragment to see how it enters the model’s calculations.',
    'llm.text.attention':'Attention heads connect information across the context. A causal mask restricts each position to the content available so far.',
    'llm.text.generation':'The model predicts the next token from the context it has seen. The moving stream illustrates this step-by-step process.',
    'omics.text.all':'Combine genomic, transcriptomic and proteomic evidence to examine one biological question from several levels.',
    'omics.text.transcriptome':'Changes in RNA expression across time and conditions offer clues to gene activity and biological processes.',
    'omics.text.proteome':'Examine protein abundance, state and function to understand changes at the molecular level.'
  });
  function initialLanguage(){return new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';}
  let lang=initialLanguage();
  const t=(key,vars={})=>(messages[lang][key]??messages.zh[key]??key).replace(/\{(\w+)\}/g,(_,k)=>vars[k]??'');
  function apply(){
    document.documentElement.lang=lang==='en'?'en':'zh-CN';document.title=t('site.title');
    document.querySelector('meta[name=description]')?.setAttribute('content',t('site.description'));
    document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=t(el.dataset.i18n));
    for(const [suffix,attribute] of [['Aria','aria-label'],['Placeholder','placeholder'],['Alt','alt']])document.querySelectorAll('[data-i18n-'+suffix.toLowerCase()+']').forEach(el=>el.setAttribute(attribute,t(el.dataset['i18n'+suffix])));
    document.querySelectorAll('[data-lang-option]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.langOption===lang)));
    document.querySelectorAll('.cv-link').forEach(el=>el.setAttribute('href','assets/resume.html?lang='+lang));
  }
  function setLang(value){lang=value==='en'?'en':'zh';try{const u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState(null,'',u);}catch{}apply();window.dispatchEvent(new CustomEvent('languagechange',{detail:{lang}}));}
  window.WX_I18N={t,getLang:()=>lang,setLang};
  document.querySelectorAll('[data-lang-option]').forEach(el=>el.addEventListener('click',()=>setLang(el.dataset.langOption)));
  apply();
})();

/* Original artwork, with optional details that remain quiet until explored. */
(() => {
  'use strict';
  const root=document.documentElement,lang=()=>root.lang==='en'?'en':'zh';
  const common={
  "zh": {
    "label": "画中有意",
    "portrait": "王昕的水彩与彩铅风格绘画肖像",
    "galleryLabel": "研究的另一种表达",
    "galleryTitle": "让好奇，<br>有自己的形状。",
    "galleryIntro": "七幅画，七条线索，回到研究本身。",
    "choose": "选择画作",
    "nature": "生命与求知",
    "cell": "菌群与代谢",
    "science": "数据与智能",
    "nejm": "神经与遗传",
    "bmj": "因果与证据",
    "lancet": "炎症与共因",
    "jama": "代谢与交汇"
  },
  "en": {
    "label": "INSIDE THE ARTWORK",
    "portrait": "A watercolor and colored-pencil portrait of Wang Xin",
    "galleryLabel": "A DIFFERENT EXPRESSION",
    "galleryTitle": "A shape<br>for curiosity.",
    "galleryIntro": "Seven paintings, seven threads of inquiry.",
    "choose": "Choose an artwork",
    "nature": "Life & inquiry",
    "cell": "Microbes & metabolism",
    "science": "Data & intelligence",
    "nejm": "Neurology & genetics",
    "bmj": "Causality & evidence",
    "lancet": "Shared genetic threads",
    "jama": "Metabolic connections"
  }
};
  const works={
  "nature": {
    "positions": {
      "ribbon": [
        55,
        51
      ],
      "capsule": [
        32,
        39
      ],
      "cell": [
        45,
        32
      ],
      "network": [
        59,
        23
      ],
      "book": [
        44,
        87
      ]
    },
    "zh": {
      "title": "把好奇，画成风景。",
      "intro": "从遗传与因果，到微生物与智能；用不同的线索，追问同一份好奇。",
      "alt": "丝带、微观圆囊、胶囊、连接网络与书页交织的科研艺术插画",
      "overview": [
        "微观与远方，在此相遇。",
        "丝带穿过书页，光点连接微观的形态。遗传、药物与智能的线索，在想象中汇成一幅求知的风景。"
      ],
      "ribbon": [
        "双链",
        "交织之间，读见遗传。",
        "交织的丝带借用了双螺旋的意象，呼应遗传信息的传递，也连接起不同学科的线索。自由的曲线，为生命的秩序留下一点想象。"
      ],
      "capsule": [
        "药物",
        "从发现，走向新的可能。",
        "胶囊指向药物与转化研究：分子层面的发现，如何成为值得检验的干预思路。"
      ],
      "cell": [
        "细胞",
        "微小之中，自有天地。",
        "半透明的圆囊是微观生命的艺术意象，让人联想到细胞、分子环境，以及生命之间细密的信号。"
      ],
      "network": [
        "网络",
        "让分散的线索，相互照见。",
        "光点与连线呼应数据、智能模型和生物系统。理解，往往发生在原本分散的证据被重新连接之时。"
      ],
      "book": [
        "书页",
        "答案之外，还有下一页。",
        "翻开的书页是求知的起点。阅读留下线索，提问打开新的方向，让研究一直向前。"
      ]
    },
    "en": {
      "title": "A landscape of curiosity.",
      "intro": "Genetics, causality, microbes and intelligent tools offer different routes into the questions that interest me.",
      "alt": "A research-inspired painting of ribbons, microscopic forms, capsules, connected nodes and an open book",
      "overview": [
        "Small worlds, wider horizons.",
        "Ribbons cross an open book, and points of light connect microscopic forms. Genetics, discovery and intelligence share an imagined landscape of inquiry."
      ],
      "ribbon": [
        "Inheritance",
        "A shared thread.",
        "The interwoven ribbons evoke the double helix and the passage of genetic information, while their free-flowing curves suggest connections across disciplines."
      ],
      "capsule": [
        "Discovery",
        "From insight to possibility.",
        "The capsule brings translational research into view: how might a molecular discovery lead to a new intervention worth investigating?"
      ],
      "cell": [
        "Life",
        "Worlds within the small.",
        "The translucent forms offer an artistic glimpse of microscopic life, recalling cells, their molecular surroundings and the signals that pass between them."
      ],
      "network": [
        "Connections",
        "When evidence finds its context.",
        "The luminous network brings together data, intelligent models and living systems. Separate observations can become more meaningful when seen in relation to one another."
      ],
      "book": [
        "Inquiry",
        "There is always another page.",
        "An open book marks the beginning of inquiry. Reading offers a clue; a new question turns the page."
      ]
    }
  },
  "cell": {
    "positions": {
      "bacilli": [
        35,
        59
      ],
      "cocci": [
        77,
        65
      ],
      "community": [
        48,
        80
      ]
    },
    "zh": {
      "title": "微小的生命，辽阔的联系。",
      "intro": "从肠道菌群与肥胖的孟德尔随机化研究出发，继续关注代谢与宿主免疫之间的联系。",
      "alt": "青绿、朱红与金色的杆状和球状微生物形态，交织在花纹与流线之间的艺术插画",
      "overview": [
        "一片流动的微观世界。",
        "杆状与球状的形态穿行其间，像一群相互影响的邻居。画面借微生物的多样性，想象菌群、代谢与宿主之间的联系。"
      ],
      "bacilli": [
        "杆状",
        "从形态开始，向功能追问。",
        "舒展的杆状形体呼应常见的细菌形态。轮廓让观察有了起点，理解它的作用，还需要培养、测序与实验的证据。"
      ],
      "cocci": [
        "球状",
        "同样微小，各有不同。",
        "圆润的球形与舒展的杆状形体彼此呼应，呈现微观世界的多样性。形态提供观察的入口，功能仍需要回到实验与证据。"
      ],
      "community": [
        "群落",
        "联系，比孤立更有意味。",
        "流线、光点与交错的路径，借喻菌群内部以及微生物与宿主之间的相互作用。一个小小的变化，也可能值得放回整个系统中理解。"
      ]
    },
    "en": {
      "title": "Small lives, wide connections.",
      "intro": "Mendelian randomisation research on gut microbiota and obesity connects with my interests in metabolism and host immunity.",
      "alt": "An original painting of teal, coral and gold rod-like and spherical microbial forms among flowing lines and ornamental flowers",
      "overview": [
        "An imagined microbial world.",
        "Rod-like and spherical forms share the scene like interconnected neighbours. Their diversity evokes relationships among communities, metabolites and their host."
      ],
      "bacilli": [
        "Rods",
        "From form to function.",
        "The elongated forms recall common bacterial shapes. A silhouette begins the observation; culture, sequencing and experiments help explain what an organism does."
      ],
      "cocci": [
        "Spheres",
        "Small, yet never all the same.",
        "Round and elongated forms evoke microscopic diversity. Shape provides a place to begin; experiments and evidence help explain function."
      ],
      "community": [
        "Community",
        "Connections give the scene its meaning.",
        "Flowing lines and scattered points suggest interactions within a microbial community and with its host. A small change can invite a question about the larger system."
      ]
    }
  },
  "science": {
    "positions": {
      "input": [
        18,
        77
      ],
      "layers": [
        60,
        50
      ],
      "network": [
        62,
        37
      ]
    },
    "zh": {
      "title": "由序成章，向知而行。",
      "intro": "从 pGWAS 与 SV4GD 相关研究出发，把数据整理成可探索的世界，也关注 AI 辅助科研的可能。",
      "alt": "青绿与朱红的纸页、矩阵纹样和连接网络交织的原创数据艺术插画",
      "overview": [
        "纸页之间，线索渐次展开。",
        "散页化成有序的矩阵，节点连接成可探索的网络。数据平台与智能工具的研究意象，在纸本纹理中汇成一幅求知的风景。"
      ],
      "input": [
        "输入",
        "每一片，都是理解的起点。",
        "左下方的散页借喻分散的记录与输入。让资料变得可检索、可分析，也让后续的问题有处落笔。"
      ],
      "layers": [
        "矩阵",
        "从记录，到有序的组织。",
        "层叠的网格呼应数据表与多维表征。纸页的起伏，把抽象的数据组织化成看得见的秩序。"
      ],
      "network": [
        "网络",
        "让独立的线索，彼此连接。",
        "纸页上的节点与连线，呼应信息关联、数据探索与 AI 辅助科研。理解，有时从一次新的连接开始。"
      ]
    },
    "en": {
      "title": "From fragments to understanding.",
      "intro": "Research involving pGWAS and SV4GD connects with my interest in organising explorable data and investigating AI-assisted research.",
      "alt": "An original paper-textured painting of teal and vermilion pages, matrix patterns and connected nodes",
      "overview": [
        "Clues unfold between the pages.",
        "Separate pages become matrices, and individual points become connected networks. The paper textures bring these research interests together in an imagined landscape of inquiry."
      ],
      "input": [
        "Input",
        "Every piece begins a question.",
        "The separate pages evoke scattered records and inputs. Making information searchable and analysable gives further questions somewhere to begin."
      ],
      "layers": [
        "Matrices",
        "From records to organisation.",
        "Layered grids recall data tables and multidimensional representations. Curved paper surfaces give abstract organisation a visible form."
      ],
      "network": [
        "Networks",
        "Connecting independent clues.",
        "The nodes and links evoke information relationships, data exploration and AI-assisted research. Understanding can begin with a new connection."
      ]
    }
  },
  "nejm": {
    "positions": {
      "neuron": [
        30,
        35
      ],
      "sheath": [
        64,
        64
      ],
      "repeat": [
        58,
        80
      ]
    },
    "zh": {
      "title": "循着遗传，追问生命。",
      "intro": "从 ATXN3 重复扩增与 Slc20a2 缺陷相关研究中，追问神经疾病的遗传与分子机制。",
      "alt": "以神经与遗传研究为灵感的原创纸本艺术插画",
      "overview": [
        "把细微的变化，放回生命的整体。",
        "神经分枝、层叠结构与重复纹样，把神经遗传研究的线索编织在一起。它们是研究意象，也是一份继续追问机制的好奇。"
      ],
      "neuron": [
        "神经",
        "在分枝之间，追问联系。",
        "向外伸展的枝条借用了神经元的意象，让人联想到神经系统中精细而广泛的联系。花叶与纹理为科学问题保留了想象的空间。"
      ],
      "sheath": [
        "层次",
        "由微观，望向整个系统。",
        "分段包覆的形态呼应轴突与髓鞘的视觉特征。组织与分子的不同层次，共同引向对神经系统的理解。"
      ],
      "repeat": [
        "重复",
        "一个重复，也值得追问。",
        "朱红丝带上的重复纹样，呼应 ATXN3 重复扩增相关研究。一次次相似的形态，藏着值得认真追索的遗传问题。"
      ]
    },
    "en": {
      "title": "Following the clues of inheritance.",
      "intro": "Research involving ATXN3 repeat expansion and Slc20a2 deficiency informs my questions about genetic and molecular mechanisms in neurological disease.",
      "alt": "An original paper-textured painting inspired by neurological and genetic research",
      "overview": [
        "Small changes, a larger picture.",
        "Branching forms, layered structures and repeated patterns weave together threads of neurological and genetic research. They express an ongoing curiosity about mechanisms."
      ],
      "neuron": [
        "Neurons",
        "Questions among the branches.",
        "The branching form evokes a neuron and the intricate connections of the nervous system. Flowers and textures leave room for imagination around a scientific question."
      ],
      "sheath": [
        "Layers",
        "From small structures to a wider system.",
        "Segmented coverings recall the visual forms of an axon and myelin. Tissue and molecular scales offer complementary ways to understand the nervous system."
      ],
      "repeat": [
        "Repeats",
        "A repetition can hold a question.",
        "Repeated patterns on the vermilion ribbon recall research involving ATXN3 repeat expansion. Similar forms give a genetic question its visual rhythm."
      ]
    }
  },
  "bmj": {
    "positions": {
      "origin": [
        16,
        81
      ],
      "mediator": [
        57,
        49
      ],
      "paths": [
        76,
        60
      ]
    },
    "zh": {
      "title": "循证而问，溯因而行。",
      "intro": "以遗传变异为工具，在孟德尔随机化与中介分析中，继续追问关联背后的因果。",
      "alt": "以孟德尔随机化和因果推断为灵感的原创纸本艺术插画",
      "overview": [
        "关联之外，仍需多问一步。",
        "起点、平台与分叉的路径，把孟德尔随机化和中介分析的问题画在一起。因果判断需要假设与证据，也需要为不同解释保留空间。"
      ],
      "origin": [
        "起点",
        "先把问题，放在起点。",
        "起点平台上的不同颗粒，借喻供分析的变量与遗传线索。它们从何而来、是否适合成为工具，是因果推断需要认真考虑的问题。"
      ],
      "mediator": [
        "中介",
        "联系之间，还有经过的地方。",
        "中间的平台，提示对中介路径的追问：一种联系，是否可能经过另一个过程？沿途的停留，也可能带来新的问题。"
      ],
      "paths": [
        "路径",
        "沿着联系，辨认可能的方向。",
        "分叉与汇合的路线，呼应对不同解释的比较。沿着证据前行，也把每一步所依赖的假设看得更清楚。"
      ]
    },
    "en": {
      "title": "From association to better questions.",
      "intro": "Genetic instruments, Mendelian randomisation and mediation analysis help me explore questions beyond an observed association.",
      "alt": "An original paper-textured painting inspired by Mendelian randomisation and causal inference",
      "overview": [
        "An association begins a question.",
        "Starting points, platforms and branching paths bring Mendelian randomisation and mediation into one image. Causal judgement relies on assumptions and evidence, with room for alternative explanations."
      ],
      "origin": [
        "Starting point",
        "A question begins with its inputs.",
        "Different particles on the first platform evoke variables and genetic clues. Where they come from, and whether they are suitable instruments, matter in causal inference."
      ],
      "mediator": [
        "Mediation",
        "What might lie between?",
        "The middle platform suggests an intermediate pathway through which a relationship might operate. A stop along the way can open another question."
      ],
      "paths": [
        "Paths",
        "Considering possible explanations.",
        "Branching and converging routes evoke the comparison of explanations. Following the evidence also means examining the assumptions along the way."
      ]
    }
  },
  "lancet": {
    "positions": {
      "roots": [
        52,
        78
      ],
      "branches": [
        55,
        46
      ],
      "immune": [
        74,
        48
      ]
    },
    "zh": {
      "title": "在交汇处，寻找共同的线索。",
      "intro": "关注炎症性肠病与卒中的共享遗传线索，把疾病联系放回免疫与系统的视野。",
      "alt": "以炎症性肠病、卒中共享遗传与系统免疫为灵感的原创纸本艺术插画",
      "overview": [
        "不同的疾病，也可能提出相遇的问题。",
        "跨性状遗传与多组学证据，让看似分离的疾病获得共同观察的视角。交织的枝叶，回应对共享机制与系统免疫的探索。"
      ],
      "roots": [
        "共根",
        "从共同的线索，重新出发。",
        "交织的根系呼应共享遗传基础的研究视角。不同疾病之间可能共有的信号，成为进一步追问机制的起点。"
      ],
      "branches": [
        "分枝",
        "同一份好奇，伸向不同方向。",
        "青绿与朱红的两组枝叶，借喻不同疾病表型与研究问题。相遇的枝条，把跨性状探索画成彼此可见的联系。"
      ],
      "immune": [
        "免疫",
        "把细胞，也放进系统之中。",
        "半透明圆囊与簇状形态，借用了免疫细胞的艺术意象。它们让共享遗传与多组学问题，回到细胞、组织和整个系统的联系之中。"
      ]
    },
    "en": {
      "title": "Finding the threads that connect.",
      "intro": "Shared genetic signals between inflammatory bowel disease and stroke bring immune and systemic perspectives into my research.",
      "alt": "An original paper-textured painting inspired by shared genetics, inflammatory bowel disease, stroke and systemic immunity",
      "overview": [
        "Different diseases can meet in a shared question.",
        "Cross-trait genetics and multi-omics evidence offer ways to examine conditions together. Interwoven branches reflect a search for shared mechanisms and systemic immune connections."
      ],
      "roots": [
        "Shared roots",
        "Beginning again with a shared clue.",
        "Intertwined roots evoke the study of shared genetic foundations. Signals that conditions may have in common offer a starting point for further mechanistic questions."
      ],
      "branches": [
        "Branches",
        "Different directions, a shared curiosity.",
        "Teal and vermilion branches suggest different traits and research questions. Their meeting points turn cross-trait exploration into visible connections."
      ],
      "immune": [
        "Immunity",
        "Cells within a wider system.",
        "Translucent rounded forms evoke immune cells through artistic metaphor. They bring questions about shared genetics and multi-omics back to relationships among cells, tissues and the wider system."
      ]
    }
  },
  "jama": {
    "positions": {
      "transport": [
        32,
        30
      ],
      "metabolism": [
        60,
        77
      ],
      "particles": [
        18,
        24
      ]
    },
    "zh": {
      "title": "让分散的证据，相互照见。",
      "intro": "从2型糖尿病与脂肪肝的跨性状遗传，到胆汁酸转运蛋白变异，串联代谢研究中的不同证据。",
      "alt": "以糖尿病、脂肪肝跨性状遗传与胆汁酸转运研究为灵感的原创纸本艺术插画",
      "overview": [
        "代谢的故事，往往不止一个尺度。",
        "遗传变异、转运过程与疾病表型，是观察代谢联系的不同入口。画面将这些研究线索放在一起，呈现从局部机制走向整体理解的好奇。"
      ],
      "transport": [
        "转运",
        "一扇门，连接两种环境。",
        "门状形态借喻物质跨越膜的过程，呼应胆汁酸转运蛋白变异相关研究。一处微观的变化，也可能引出更大的代谢问题。"
      ],
      "metabolism": [
        "代谢",
        "在流动之中，寻找联系。",
        "舒展的流域呼应代谢过程的相互联系，也连接到2型糖尿病与脂肪肝的跨性状遗传研究。它把不同尺度的问题放在同一幅画中。"
      ],
      "particles": [
        "线索",
        "从一粒线索，到更大的问题。",
        "散落的颗粒借喻参与转运与代谢的不同成分。沿着它们的去向，把局部过程与更广的疾病联系放在一起思考。"
      ]
    },
    "en": {
      "title": "When separate evidence meets.",
      "intro": "My metabolic research connects cross-trait genetics of type 2 diabetes and fatty liver with work involving bile acid transporter variants.",
      "alt": "An original paper-textured painting inspired by metabolic genetics, diabetes, fatty liver and bile acid transport",
      "overview": [
        "Metabolism spans more than one scale.",
        "Genetic variants, transport processes and disease traits offer different points of entry. The painting brings these research threads together, reflecting curiosity about how local mechanisms relate to a broader picture."
      ],
      "transport": [
        "Transport",
        "A doorway between environments.",
        "The doorway evokes movement across a membrane and research involving bile acid transporter variants. A microscopic change can open a wider metabolic question."
      ],
      "metabolism": [
        "Metabolism",
        "Connections in a flowing system.",
        "The broad flowing forms evoke metabolic relationships and cross-trait genetic research on type 2 diabetes and fatty liver. They bring questions at different scales into one painting."
      ],
      "particles": [
        "Clues",
        "A small clue, a wider question.",
        "Scattered particles suggest components involved in transport and metabolism. Following their paths brings local processes into a wider view of disease relationships."
      ]
    }
  }
};
  function writeText(node,text,work){node.textContent='';if(work!=='nejm'){node.textContent=text;return;}const chunks=String(text).split(/(\bATXN3\b|\bSlc20a2\b)/);chunks.forEach(part=>{if(part==='ATXN3'||part==='Slc20a2'){const gene=document.createElement('i');gene.className='gene-symbol';gene.textContent=part;node.append(gene);}else node.append(document.createTextNode(part));});}
  const instances=[];
  document.querySelectorAll('[data-art-work]').forEach((host,index)=>{
    const work=works[host.dataset.artWork],figure=host.querySelector('.art-map'),options=host.querySelector('.art-key-options'),meaning=host.querySelector('.art-meaning');
    if(!work||!figure||!options||!meaning)return;
    const keys=Object.keys(work.positions),scope=host.dataset.artScope||'gallery';
    let selected=null,preview=null;
    meaning.id='art-meaning-'+scope+'-'+index;options.textContent='';
    figure.querySelectorAll('.art-hotspot').forEach(dot=>dot.remove());
    keys.forEach(key=>{const dot=document.createElement('button');dot.type='button';dot.className='art-hotspot';dot.dataset.artKey=key;dot.style.left=work.positions[key][0]+'%';dot.style.top=work.positions[key][1]+'%';dot.tabIndex=-1;dot.innerHTML='<span aria-hidden="true"></span>';dot.setAttribute('aria-controls',meaning.id);figure.append(dot);const option=document.createElement('button');option.type='button';option.className='art-key';option.dataset.artKey=key;option.setAttribute('aria-controls',meaning.id);options.append(option);});
    const buttons=[...host.querySelectorAll('[data-art-key]')];
    function render(){const c=work[lang()],active=preview||selected,entry=active?c[active].slice(1):c.overview;
      options.setAttribute('aria-label',common[lang()].label);host.querySelector('.art-eyebrow').textContent=common[lang()].label;host.querySelector('.art-heading').textContent=c.title;writeText(host.querySelector('.art-intro'),c.intro,host.dataset.artWork);figure.querySelector('img').alt=c.alt;
      host.dataset.artSelected=selected||'';host.dataset.artPreview=preview||'';meaning.dataset.artMeaning=active||'';writeText(meaning.querySelector('h4'),entry[0],host.dataset.artWork);writeText(meaning.querySelector('p'),entry[1],host.dataset.artWork);
      host.dataset.artActive=active||'';
      buttons.forEach(button=>{const key=button.dataset.artKey;button.setAttribute('aria-pressed',String(key===active));button.setAttribute('aria-label',c[key][0]);button.classList.toggle('is-preview',key===preview);if(button.classList.contains('art-key'))button.textContent=c[key][0];});
    }
    function choose(key,{temporary=false,announce=false}={}){if(key!==null&&!keys.includes(key))return;if(temporary)preview=key;else{selected=key;preview=null;}meaning.setAttribute('aria-live',announce?'polite':'off');render();if(key)dispatchEvent(new CustomEvent('artdetailchange',{detail:{key,scope,work:host.dataset.artWork,temporary,announce}}));}
    buttons.forEach(button=>{const key=button.dataset.artKey;
      if(button.classList.contains('art-hotspot'))button.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')choose(key,{temporary:true});});
      button.addEventListener('click',()=>choose(key,{announce:true}));
      button.addEventListener('keydown',event=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;event.preventDefault();const index=keys.indexOf(key),next=event.key==='Home'?0:event.key==='End'?keys.length-1:(index+(event.key==='ArrowRight'?1:-1)+keys.length)%keys.length;choose(keys[next],{announce:true});options.querySelector('[data-art-key="'+keys[next]+'"]').focus();});
    });
    figure.addEventListener('pointerleave',()=>{if(preview){preview=null;render();}});
    const api={host,scope,work:host.dataset.artWork,get:()=>selected,select:key=>choose(key,{announce:true}),reset:()=>choose(null),render};instances.push(api);render();
  });
  const gallery=document.getElementById('art-gallery'),galleryKeys=['nature','cell','science','nejm','bmj','lancet','jama'];let gallerySelected='nature';
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),galleryInterval=11000;
  let galleryVisible=false,hovering=false,playing=false,remaining=galleryInterval,startedAt=0,holdUntil=0,playTimer=0,transitionTimer=0,autoChanges=0;
  function clockRemaining(){return Math.max(0,remaining-(playing?performance.now()-startedAt:0));}
  function pauseClock(){if(playing)remaining=clockRemaining();playing=false;clearTimeout(playTimer);playTimer=0;}
  function playbackReasons(){const reasons=[];if(!galleryVisible)reasons.push('outside-view');if(document.hidden)reasons.push('hidden-tab');if(reduced.matches)reasons.push('reduced-motion');if(root.dataset.motion==='paused')reasons.push('motion-paused');if(['boot','open','revealing'].includes(root.dataset.intro))reasons.push('opening');if(hovering)reasons.push('pointer');if(gallery?.contains(document.activeElement))reasons.push('focus');if(performance.now()<holdUntil)reasons.push('reading');return reasons;}
  function paintProgress(){if(!gallery)return;gallery.style.setProperty('--gallery-progress',String(1-clockRemaining()/galleryInterval));gallery.dataset.galleryHolding=String(!playing);}
  function syncPlayback(){pauseClock();if(!gallery)return;const reasons=playbackReasons();paintProgress();if(reasons.length){if(reasons.length===1&&reasons[0]==='reading')playTimer=setTimeout(syncPlayback,Math.max(20,holdUntil-performance.now()+10));return;}playing=true;startedAt=performance.now();paintProgress();playTimer=setTimeout(tickPlayback,Math.min(250,Math.max(10,remaining)));}
  function tickPlayback(){playTimer=0;if(playbackReasons().length){syncPlayback();return;}if(clockRemaining()<=12){pauseClock();remaining=galleryInterval;autoChanges++;selectGallery(galleryKeys[(galleryKeys.indexOf(gallerySelected)+1)%galleryKeys.length],{automatic:true});}else{paintProgress();playTimer=setTimeout(tickPlayback,Math.min(250,clockRemaining()));}}
  function holdForReading(milliseconds=18000){pauseClock();holdUntil=Math.max(holdUntil,performance.now()+milliseconds);remaining=galleryInterval;syncPlayback();}
  function revealThumbnail(key,smooth=false){const strip=gallery?.querySelector('.art-gallery-tabs'),button=gallery?.querySelector('[data-art-gallery-select="'+key+'"]');if(!strip||!button||strip.scrollWidth<=strip.clientWidth+1)return;const outer=strip.getBoundingClientRect(),inner=button.getBoundingClientRect();if(inner.left>=outer.left+3&&inner.right<=outer.right-3)return;const left=strip.scrollLeft+inner.left-outer.left-(strip.clientWidth-inner.width)/2;strip.scrollTo({left:Math.max(0,Math.min(strip.scrollWidth-strip.clientWidth,left)),behavior:smooth&&!reduced.matches?'smooth':'instant'});}
  function refresh(){const c=common[lang()];document.querySelectorAll('.personal-portrait img').forEach(img=>img.alt=c.portrait);instances.forEach(item=>item.render());if(!gallery)return;
    gallery.querySelector('[data-gallery-label]').textContent=c.galleryLabel;gallery.querySelector('[data-gallery-title]').innerHTML=c.galleryTitle;gallery.querySelector('[data-gallery-intro]').textContent=c.galleryIntro;gallery.querySelector('.art-gallery-tabs').setAttribute('aria-label',c.choose);gallery.querySelectorAll('[data-art-gallery-select]').forEach(button=>(button.querySelector('span')||button).textContent=c[button.dataset.artGallerySelect]);
  }
  function selectGallery(key,{focus=false,automatic=false,immediate=false}={}){if(!galleryKeys.includes(key)||!gallery)return false;pauseClock();const previous=gallerySelected,changed=previous!==key,animate=changed&&!immediate&&!reduced.matches&&root.dataset.motion!=='paused';clearTimeout(transitionTimer);gallerySelected=key;gallery.dataset.artGallery=key;
    gallery.querySelectorAll('[data-art-gallery-panel]').forEach(panel=>{const current=panel.dataset.artGalleryPanel===key,outgoing=animate&&panel.dataset.artGalleryPanel===previous;panel.classList.remove('is-arriving','is-outgoing');panel.hidden=!current&&!outgoing;panel.inert=!current;panel.setAttribute('aria-hidden',String(!current));if(animate&&current)panel.classList.add('is-arriving');if(outgoing)panel.classList.add('is-outgoing');});
    gallery.querySelectorAll('[data-art-gallery-select]').forEach(button=>{const current=button.dataset.artGallerySelect===key;button.setAttribute('aria-selected',String(current));button.tabIndex=current?0:-1;if(current&&focus)button.focus({preventScroll:true});});
    if(animate)transitionTimer=setTimeout(()=>{gallery.querySelectorAll('[data-art-gallery-panel]').forEach(panel=>{panel.hidden=panel.dataset.artGalleryPanel!==gallerySelected;panel.classList.remove('is-arriving','is-outgoing');});},870);
    if(focus||automatic)revealThumbnail(key,automatic);remaining=galleryInterval;if(!automatic&&!immediate)holdUntil=Math.max(holdUntil,performance.now()+18000);syncPlayback();
    dispatchEvent(new CustomEvent('wxartgallerychange',{detail:{work:key,automatic}}));return true;
  }
  gallery?.querySelectorAll('[data-art-gallery-select]').forEach(button=>{button.addEventListener('click',()=>selectGallery(button.dataset.artGallerySelect));button.addEventListener('keydown',event=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;event.preventDefault();const index=galleryKeys.indexOf(button.dataset.artGallerySelect),next=event.key==='Home'?0:event.key==='End'?galleryKeys.length-1:(index+(event.key==='ArrowRight'?1:-1)+galleryKeys.length)%galleryKeys.length;selectGallery(galleryKeys[next],{focus:true});});});
  window.WX_ART={get:()=>instances.find(item=>item.work===gallerySelected)?.get()||null,select:key=>instances.find(item=>item.work===gallerySelected)?.select(key),reset:()=>instances.forEach(item=>item.reset())};
  window.WX_ART_GALLERY={select:selectGallery,selectDetail:key=>instances.find(item=>item.scope==='gallery'&&item.work===gallerySelected)?.select(key),info:()=>({work:gallerySelected,selected:instances.find(item=>item.scope==='gallery'&&item.work===gallerySelected)?.get()||null,autoplay:{interval:galleryInterval,running:playing,remaining:Math.round(clockRemaining()),visible:galleryVisible,reasons:playbackReasons(),changes:autoChanges}}),reset:()=>instances.filter(item=>item.scope==='gallery').forEach(item=>item.reset())};
  if(gallery){gallery.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'||event.pointerType==='pen'){hovering=true;syncPlayback();}});gallery.addEventListener('pointerleave',()=>{hovering=false;syncPlayback();});gallery.addEventListener('pointerdown',()=>holdForReading(),{passive:true});gallery.addEventListener('focusin',syncPlayback);gallery.addEventListener('focusout',()=>queueMicrotask(syncPlayback));gallery.addEventListener('keydown',()=>holdForReading());new IntersectionObserver(entries=>{galleryVisible=entries[0].isIntersecting;syncPlayback();},{rootMargin:'-100px 0px -50px 0px',threshold:.05}).observe(gallery);new MutationObserver(syncPlayback).observe(root,{attributes:true,attributeFilter:['data-motion','data-intro']});}
  addEventListener('artdetailchange',event=>{if(event.detail.scope==='gallery'&&!event.detail.temporary)holdForReading(30000);});
  addEventListener('languagechange',()=>{refresh();holdForReading();});document.addEventListener('visibilitychange',syncPlayback);reduced.addEventListener('change',syncPlayback);refresh();selectGallery('nature',{immediate:true});
})();



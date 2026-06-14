(() => {
  const languages = ["en", "zh", "fr"];
  const copy = {
    zh: {
      "nav.home": "首页", "nav.work": "作品", "nav.playground": "实验场", "nav.about": "关于", "nav.connect": "联系我",
      "home.hero.eyebrow": "巴黎 / 品牌与视觉设计师",
      "home.hero.title": "设计身份<br />与<em>体验。</em>",
      "home.hero.subtitle": "品牌 / 编辑设计 / 活动视觉 / 动态 / 数字体验",
      "home.hero.ctaWork": "查看精选作品 <span>&rarr;</span>",
      "home.hero.ctaAbout": "关于我 <span>&rarr;</span>",
      "home.hero.note": "移动鼠标，发现隐藏词。",
      "home.featured.eyebrow": "01 / 精选作品",
      "home.featured.title": "被塑造成视觉系统的故事。",
      "home.featured.scape.meta": "001 / 酒店品牌",
      "home.featured.scape.desc": "围绕情绪沉浸与流动感建立的酒店品牌身份。",
      "home.featured.luminous.meta": "002 / 文化活动视觉",
      "home.featured.luminous.desc": "一个庆祝地方文化与社区相聚的当代灯会视觉系统。",
      "home.featured.hands.meta": "003 / 编辑叙事",
      "home.featured.hands.desc": "探索手势如何成为跨越边界的语言的视觉叙事。",
      "home.featured.viewAll": "查看全部作品 <span>&rarr;</span>",
      "home.about.eyebrow": "02 / 关于我",
      "home.about.title": "天生好奇。<br />训练有序。",
      "home.about.body": "我的实践在视觉身份、编辑叙事和数字体验之间移动。工业设计背景让我关注系统，艺术指导则让我把系统转化为可感知的情绪。",
      "home.about.cta": "更多关于我 <span>&rarr;</span>",
      "work.hero.eyebrow": "01 · 作品",
      "work.hero.title": "语境中的<em>概念。</em>",
      "work.hero.intro": "精选身份、活动、编辑、数字与概念项目。",
      "work.filter.all": "全部", "work.filter.identity": "身份", "work.filter.campaign": "活动",
      "work.filter.editorial": "编辑", "work.filter.digital": "数字", "work.filter.motion": "动态",
      "work.tile.scape": "品牌身份 · 数字与印刷",
      "work.tile.luminous": "活动视觉 · 体验设计",
      "work.tile.hands": "编辑设计 · 摄影指导",
      "work.tile.bell": "活动邀请 · 动态资产",
      "work.tile.frontiers": "数字体验 · AI 视觉化",
      "work.tile.xiaoxi": "品牌身份 · 包装",
      "work.tile.lamina": "品牌身份 · 包装提案",
      "work.practice.eyebrow": "专业实践",
      "work.practice.title": "DXOMARK 精选工作",
      "work.practice.body": "在既有品牌语境中完成的设计工作，适配不同受众、渠道和格式。",
      "work.practice.cta": "查看实践项目 <span>&rarr;</span>",
      "play.hero.eyebrow": "02 / 实验场",
      "play.hero.title": "给<em>好奇心</em>的空间。",
      "play.hero.intro": "视觉实验、动态片段和空间尝试，被收集为持续生长的火花。",
      "play.card.script": "沉浸式剧本杀剧场", "play.card.living": "Diana / Living Land",
      "play.card.coffee": "咖啡文化", "play.card.zine": "1/3 of life",
      "play.modal.zine.eyebrow": "Zine / 编辑实验", "play.modal.zine.title": "1/3 of life",
      "play.modal.zine.body": "一个把阅读视为动态空间节奏的在线 zine 实验：页面、停顿与手势共同展开为紧凑的叙事系统。",
      "play.modal.zine.cta": "打开完整阅读器 <span>&rarr;</span>",
      "play.modal.living.eyebrow": "动态研究 / 视觉研究", "play.modal.living.title": "Diana / Living Land",
      "play.modal.living.body": "围绕优雅、公共记忆与编辑克制展开的动态影像研究，以 Lady Diana 作为柔软与注视之间的视觉参照。",
      "play.modal.living.cta": "打开说明 PDF <span>&rarr;</span>",
      "play.modal.script.eyebrow": "360 视频 / 空间叙事", "play.modal.script.title": "沉浸式剧本杀剧场",
      "play.modal.script.body": "一个 360 度剧场原型，通过空间调度与氛围把观看者拉入故事世界。",
      "play.modal.script.hint": "在场景中拖动查看四周，使用滚轮或触控板缩放。",
      "play.modal.coffee.eyebrow": "信息设计 / 文化比较", "play.modal.coffee.title": "咖啡文化",
      "play.modal.coffee.body": "一个比较上海与巴黎咖啡文化的信息设计展板，观察历史、消费习惯、店铺类型与社交仪式的差异。",
      "about.hero.eyebrow": "03 / 关于",
      "about.hero.title": "用系统<br />建构<em>故事。</em>",
      "about.hero.body": "我是一名常驻巴黎的品牌与视觉设计师，经验横跨奢侈品零售、编辑媒体与数字活动。我喜欢把想法转化为清晰、有表达力，并能在不同格式中保持生命力的视觉系统。",
      "about.hero.email": "给我写邮件 <span>&rarr;</span>", "about.hero.cv": "下载简历 <span>&rarr;</span>",
      "about.experience.eyebrow": "经历", "about.experience.now": "2026 - 至今",
      "about.experience.role1": "品牌设计师", "about.experience.role2": "视觉陈列",
      "about.experience.role3": "编辑设计师", "about.experience.role4": "助理产品经理",
      "about.capabilities.eyebrow": "能力", "about.capabilities.art": "艺术指导",
      "about.capabilities.brand": "品牌身份", "about.capabilities.editorial": "编辑叙事",
      "about.capabilities.campaign": "活动视觉", "about.capabilities.motion": "动态图形",
      "about.capabilities.digital": "数字体验", "about.capabilities.ai": "AI 辅助设计",
      "about.languages.eyebrow": "语言", "about.languages.chinese": "中文", "about.languages.native": "母语",
      "about.languages.english": "英语", "about.languages.englishLevel": "C1 / 工作语言",
      "about.languages.japanese": "日语", "about.languages.japaneseLevel": "N2 / 流利",
      "about.languages.french": "法语", "about.languages.frenchLevel": "A2 / 基础",
      "footer.eyebrow": "有项目、机会，或只是一个想法？", "footer.title": "一起聊聊。"
    },
    fr: {
      "nav.home": "Accueil", "nav.work": "Projets", "nav.playground": "Playground", "nav.about": "À propos", "nav.connect": "Contact",
      "home.hero.eyebrow": "Basée à Paris / Designer de marque et visuelle",
      "home.hero.title": "Concevoir des identités<br />et des <em>expériences.</em>",
      "home.hero.subtitle": "Branding / Éditorial / Campagnes / Motion / Digital",
      "home.hero.ctaWork": "Voir les projets sélectionnés <span>&rarr;</span>",
      "home.hero.ctaAbout": "À propos <span>&rarr;</span>",
      "home.hero.note": "Déplacez le curseur pour révéler les mots cachés.",
      "home.featured.eyebrow": "01 / Projets phares",
      "home.featured.title": "Des histoires façonnées en systèmes visuels.",
      "home.featured.scape.meta": "001 / Identité hôtelière",
      "home.featured.scape.desc": "Une identité hôtelière pensée autour de l'immersion émotionnelle et du flux.",
      "home.featured.luminous.meta": "002 / Campagne culturelle",
      "home.featured.luminous.desc": "Un festival de lanternes contemporain célébrant la culture locale et la communauté.",
      "home.featured.hands.meta": "003 / Récit éditorial",
      "home.featured.hands.desc": "Un récit visuel sur les gestes comme langage au-delà des frontières.",
      "home.featured.viewAll": "Voir tous les projets <span>&rarr;</span>",
      "home.about.eyebrow": "02 / À propos de moi",
      "home.about.title": "Curieuse par nature.<br />Structurée par formation.",
      "home.about.body": "Ma pratique navigue entre identités visuelles, récits éditoriaux et expériences digitales. Ma formation en design industriel nourrit mon attention aux systèmes ; la direction artistique me permet de les rendre sensibles.",
      "home.about.cta": "En savoir plus <span>&rarr;</span>",
      "work.hero.eyebrow": "01 · Projets", "work.hero.title": "Des concepts en <em>contexte.</em>",
      "work.hero.intro": "Une sélection de projets d'identité, campagne, édition, digital et spéculation.",
      "work.filter.all": "Tous", "work.filter.identity": "Identité", "work.filter.campaign": "Campagne",
      "work.filter.editorial": "Éditorial", "work.filter.digital": "Digital", "work.filter.motion": "Motion",
      "work.tile.scape": "Identité de marque · Digital & print",
      "work.tile.luminous": "Visuels de campagne · Expérience événementielle",
      "work.tile.hands": "Design éditorial · Direction photo",
      "work.tile.bell": "Invitation de campagne · Motion",
      "work.tile.frontiers": "Expérience digitale · Visualisation IA",
      "work.tile.xiaoxi": "Identité de marque · Packaging",
      "work.tile.lamina": "Identité de marque · Proposition packaging",
      "work.practice.eyebrow": "Pratique professionnelle", "work.practice.title": "Sélection de travaux chez DXOMARK",
      "work.practice.body": "Travaux réalisés dans un contexte de marque établi, adaptés à différents publics, canaux et formats.",
      "work.practice.cta": "Voir le projet <span>&rarr;</span>",
      "play.hero.eyebrow": "02 / Playground", "play.hero.title": "Un espace pour la <em>curiosité.</em>",
      "play.hero.intro": "Expériences visuelles, fragments en mouvement et essais spatiaux collectés comme étincelles de travail.",
      "play.card.script": "Théâtre immersif de script-murder", "play.card.living": "Diana / Living Land",
      "play.card.coffee": "Culture du café", "play.card.zine": "1/3 of life",
      "play.modal.zine.eyebrow": "Zine / Expérience éditoriale", "play.modal.zine.title": "1/3 of life",
      "play.modal.zine.body": "Une expérience de zine en ligne qui traite la lecture comme un rythme spatial : pages, pauses et gestes déploient un système narratif compact.",
      "play.modal.zine.cta": "Ouvrir le lecteur <span>&rarr;</span>",
      "play.modal.living.eyebrow": "Étude motion / Recherche visuelle", "play.modal.living.title": "Diana / Living Land",
      "play.modal.living.body": "Une étude en image animée autour de l'élégance, de la mémoire publique et de la retenue éditoriale, avec Lady Diana comme référence visuelle.",
      "play.modal.living.cta": "Ouvrir le PDF <span>&rarr;</span>",
      "play.modal.script.eyebrow": "Vidéo 360 / Narration spatiale", "play.modal.script.title": "Théâtre immersif de script-murder",
      "play.modal.script.body": "Un prototype de théâtre à 360 degrés utilisant la mise en scène spatiale et l'atmosphère pour faire entrer le spectateur dans l'univers du récit.",
      "play.modal.script.hint": "Faites glisser dans la scène pour regarder autour de vous. Utilisez le scroll ou le trackpad pour zoomer.",
      "play.modal.coffee.eyebrow": "Design d'information / Comparaison culturelle", "play.modal.coffee.title": "Culture du café",
      "play.modal.coffee.body": "Un panneau comparant la culture du café à Shanghai et à Paris à travers l'histoire, les habitudes, les lieux et les rituels sociaux.",
      "about.hero.eyebrow": "03 / À propos",
      "about.hero.title": "Construire des histoires<br />par les <em>systèmes.</em>",
      "about.hero.body": "Je suis designer de marque et visuelle basée à Paris, avec une expérience dans le retail de luxe, les médias éditoriaux et les campagnes digitales. J'aime transformer les idées en systèmes visuels clairs, expressifs et vivants à travers les formats.",
      "about.hero.email": "M'écrire <span>&rarr;</span>", "about.hero.cv": "Télécharger le CV <span>&rarr;</span>",
      "about.experience.eyebrow": "Expérience", "about.experience.now": "2026 - Aujourd'hui",
      "about.experience.role1": "Brand Designer", "about.experience.role2": "Visual Merchandiser",
      "about.experience.role3": "Designer éditoriale", "about.experience.role4": "Assistante chef de produit",
      "about.capabilities.eyebrow": "Compétences", "about.capabilities.art": "Direction artistique",
      "about.capabilities.brand": "Identité de marque", "about.capabilities.editorial": "Récit éditorial",
      "about.capabilities.campaign": "Visuels de campagne", "about.capabilities.motion": "Motion design",
      "about.capabilities.digital": "Expériences digitales", "about.capabilities.ai": "Design assisté par IA",
      "about.languages.eyebrow": "Langues", "about.languages.chinese": "Chinois", "about.languages.native": "Langue maternelle",
      "about.languages.english": "Anglais", "about.languages.englishLevel": "C1 / Professionnel",
      "about.languages.japanese": "Japonais", "about.languages.japaneseLevel": "N2 / Courant",
      "about.languages.french": "Français", "about.languages.frenchLevel": "A2 / Fondamental",
      "footer.eyebrow": "Un projet, une opportunité ou une idée ?", "footer.title": "Parlons-en."
    }
  };

  const projectCopy = {
    zh: {
      scape: {
        type: "酒店品牌",
        services: "艺术指导 · 品牌身份 · 数字与印刷资产",
        context: "SCAPE 是一个围绕情绪沉浸与安静逃离感建立的酒店品牌身份。项目探索灵活的视觉系统如何在氛围与应用之间移动，同时保持平静与连贯。",
        concept: "连续波浪成为核心视觉手势，邀请人移动、停留并重新进入流动。系统延展至字体、色彩、编辑节奏、数字触点与空间应用。"
      },
      "luminous-fair": {
        type: "文化活动视觉",
        services: "艺术指导 · 活动视觉 · 环境图形",
        context: "Luminous Fair 是一个当代灯会概念，通过食物、灯光与社区相聚庆祝地方文化，把熟悉的季节性仪式带入鲜活而友好的视觉世界。",
        concept: "灯笼、民俗图形与玩味形态被提炼为模块化语言。温暖色彩与大胆构图让系统延展至海报、托特包、导视和活动空间。"
      },
      "hands-across-borders": {
        type: "编辑叙事",
        services: "编辑设计 · 摄影指导 · 视觉叙事",
        context: "Hands Across Borders 探索手势如何成为跨越边界的语言，观察双手如何在词语之前表达关怀、分歧、记忆、支持与连接。",
        concept: "线、影子、手写痕迹与场景摄影构成触觉化序列。编辑系统在克制与打断之间切换，让每个手势承载独立的情绪重量。"
      },
      "bell-ross": {
        type: "活动邀请",
        services: "艺术指导 · 编辑式邀请 · 动态资产",
        context: "为 Bell & Ross 创作的限量邀请概念，围绕精准、折叠时间，以及技术仪器与个人仪式之间的安静张力展开。",
        concept: "系统利用纸张折痕、腕表几何与克制对比，把邀请转化为可触摸的品牌时刻，并延展到印刷、数字与动态内容。"
      },
      "new-frontiers": {
        type: "概念旅行体验",
        services: "艺术指导 · 数字体验 · AI 视觉化",
        context: "一个面向未来的 Club Med 概念，探索旅行如何通过数字服务设计变得更个人化、更沉浸，也更具情绪智能。",
        concept: "项目将概念化酒店体验转译为界面、行程与目的地触点，以平静的 UI 系统结合探索感。"
      },
      xiaoxi: {
        type: "品牌身份",
        services: "艺术指导 · 包装 · 印刷资产",
        context: "XiaoXi Rice Wine 是一个围绕小型仪式、安静温暖与亲近视觉语言建立的柔和品牌系统。",
        concept: "克制的色彩、细腻字体与触感应用共同创造一个亲密、适合赠礼且令人记忆的品牌世界。"
      },
      lamina: {
        type: "品牌身份与包装提案",
        services: "艺术指导 · 品牌身份 · 包装设计",
        context: "LAMINA 是一个在 48 小时内构思并完成的植物香皂品牌提案。项目探索如何在快速创作周期中，用紧凑的身份系统清晰表达天然成分、感官特征与产品层级。",
        concept: "LAMINA 意为薄片或层。品牌将植物结构转化为档案系统，以文件夹标签、标本编号和线性插画，把木、叶、花组织成三个独立的感官系列。"
      },
      dxomark: {
        type: "专业实践",
        services: "品牌系统 · 活动视觉 · 数字设计",
        context: "在 DXOMARK，我参与跨平台 B2B 与 B2C 传播设计。这组作品呈现了在既有品牌语境中完成，并适配不同受众与格式的工作。",
        concept: "实践重点是把技术议题转化为清晰、易懂且具有视觉吸引力的传播内容，涵盖社交媒体、活动视觉、动态内容、演示系统与官网概念。"
      }
    },
    fr: {
      scape: {
        type: "Identité hôtelière",
        services: "Direction artistique · Identité de marque · Supports digitaux & imprimés",
        context: "SCAPE est une identité hôtelière créée autour de l'immersion émotionnelle et du plaisir discret de l'évasion. Le projet explore un système visuel flexible qui conserve calme et cohérence à travers ses applications.",
        concept: "Une vague continue devient le geste central : une invitation à bouger, s'arrêter et revenir au flux. Le système se déploie dans la typographie, la couleur, le rythme éditorial, le digital et l'espace."
      },
      "luminous-fair": {
        type: "Campagne culturelle",
        services: "Direction artistique · Visuels de campagne · Graphisme environnemental",
        context: "Luminous Fair est un festival de lanternes contemporain célébrant la culture locale par la nourriture, la lumière et le rassemblement communautaire.",
        concept: "Lanternes, motifs populaires et formes ludiques deviennent un vocabulaire modulaire. Une palette chaleureuse et des compositions fortes permettent au système de vivre sur affiches, sacs, signalétique et espace."
      },
      "hands-across-borders": {
        type: "Récit éditorial",
        services: "Design éditorial · Direction photo · Narration visuelle",
        context: "Hands Across Borders observe les gestes comme langage au-delà des frontières et la manière dont les mains communiquent soin, désaccord, mémoire, soutien et lien avant les mots.",
        concept: "Fils, ombres, notes manuscrites et photographie mise en scène construisent une séquence tactile alternant retenue et interruption."
      },
      "bell-ross": {
        type: "Invitation de campagne",
        services: "Direction artistique · Invitation éditoriale · Motion",
        context: "Un concept d'invitation en édition limitée pour Bell & Ross, construit autour de la précision, du temps plié et de la tension entre instrument technique et rituel personnel.",
        concept: "Plis de papier, géométrie horlogère et contraste retenu transforment l'invitation en moment de marque tactile, du print au digital et au motion."
      },
      "new-frontiers": {
        type: "Expérience de voyage spéculative",
        services: "Direction artistique · Expérience digitale · Visualisation IA",
        context: "Un concept Club Med tourné vers le futur, explorant comment le voyage peut devenir plus personnel, immersif et émotionnellement intelligent par le design de service digital.",
        concept: "Le projet traduit l'hospitalité spéculative en interfaces, itinéraires et points de contact, combinant systèmes UI calmes et sensation de découverte."
      },
      xiaoxi: {
        type: "Identité de marque",
        services: "Direction artistique · Packaging · Supports imprimés",
        context: "XiaoXi Rice Wine est un système d'identité doux et raffiné, construit autour de petits rituels, d'une chaleur discrète et d'un langage visuel accessible.",
        concept: "Une palette retenue, une typographie délicate et des applications tactiles créent un univers intime, mémorable et propice au cadeau."
      },
      lamina: {
        type: "Identité de marque et proposition packaging",
        services: "Direction artistique · Identité de marque · Design packaging",
        context: "LAMINA est une proposition de marque de savon botanique conçue et produite en 48 heures. Le projet explore comment un système d'identité compact peut communiquer les ingrédients naturels, les qualités sensorielles et la hiérarchie produit dans un délai accéléré.",
        concept: "Inspirée du sens de lamina — une plaque ou couche fine — l'identité transforme les structures botaniques en système d'archives. Onglets, codes de spécimens et illustrations au trait organisent bois, feuille et fleur en trois familles sensorielles."
      },
      dxomark: {
        type: "Pratique professionnelle",
        services: "Systèmes de marque · Visuels de campagne · Design digital",
        context: "Chez DXOMARK, je contribue à la communication B2B et B2C sur différents canaux digitaux. Cette sélection rassemble des travaux produits dans un contexte de marque établi et adaptés à plusieurs publics et formats.",
        concept: "La pratique traduit des sujets techniques en communications accessibles et visuellement engageantes : réseaux sociaux, campagnes événementielles, motion, présentations et concepts de homepage."
      }
    }
  };

  const projectOriginal = (() => {
    const metadata = document.querySelectorAll("#project-root .project-meta b");
    const paragraphs = document.querySelectorAll("#project-root .project-summary p");
    return {
      type: metadata[0]?.innerHTML || "",
      services: metadata[1]?.innerHTML || "",
      context: paragraphs[0]?.innerHTML || "",
      concept: paragraphs[1]?.innerHTML || ""
    };
  })();

  const getLanguage = () => {
    const stored = localStorage.getItem("siteLanguage");
    return languages.includes(stored) ? stored : "en";
  };

  function setContent(element, value, language) {
    if (!element) return;
    if (!element.dataset.i18nOriginal) element.dataset.i18nOriginal = element.innerHTML;
    element.innerHTML = language === "en" || !value ? element.dataset.i18nOriginal : value;
  }

  function translateNavigation(language) {
    const labels = {
      "index.html": "nav.home", "work.html": "nav.work",
      "playground.html": "nav.playground", "about.html": "nav.about"
    };
    document.querySelectorAll(".site-nav a").forEach((link) => {
      const key = link.classList.contains("nav-contact")
        ? "nav.connect"
        : Object.entries(labels).find(([path]) => (link.getAttribute("href") || "").includes(path))?.[1];
      if (key) setContent(link, copy[language]?.[key], language);
    });
  }

  function translateProject(language) {
    const root = document.querySelector("#project-root");
    if (!root) return;
    const slug = new URLSearchParams(window.location.search).get("slug") || "scape";
    const labels = language === "zh"
      ? ["全部作品", "类型", "服务", "年份", "背景", "概念", "下一个项目"]
      : language === "fr"
        ? ["Tous les projets", "Type", "Services", "Année", "Contexte", "Concept", "Projet suivant"]
        : ["All work", "Type", "Services", "Year", "Context", "Concept", "Next project"];
    const back = root.querySelector(".project-back");
    if (back) back.innerHTML = `<span>&larr;</span> ${labels[0]}`;
    root.querySelectorAll(".project-meta > p").forEach((item, index) => {
      const value = item.querySelector("b")?.innerHTML || "";
      item.innerHTML = `${labels[index + 1]}<b>${value}</b>`;
    });
    const headings = root.querySelectorAll(".project-summary h2");
    if (headings[0]) headings[0].textContent = labels[4];
    if (headings[1]) headings[1].textContent = labels[5];
    const next = root.querySelector(".project-next b");
    if (next) next.textContent = labels[6];

    const localized = projectCopy[language]?.[slug] || projectOriginal;
    const type = root.querySelector(".project-meta > p:nth-child(1) b");
    const services = root.querySelector(".project-meta > p:nth-child(2) b");
    const paragraphs = root.querySelectorAll(".project-summary p");
    [type, services, paragraphs[0], paragraphs[1]].forEach((element) => {
      if (element && !element.dataset.i18nOriginal) element.dataset.i18nOriginal = element.innerHTML;
    });
    if (type) type.innerHTML = localized.type || projectOriginal.type;
    if (services) services.innerHTML = localized.services || projectOriginal.services;
    if (paragraphs[0]) paragraphs[0].innerHTML = localized.context || projectOriginal.context;
    if (paragraphs[1]) paragraphs[1].innerHTML = localized.concept || projectOriginal.concept;
  }

  function applyLanguage(language) {
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      setContent(element, copy[language]?.[element.dataset.i18n], language);
    });
    translateNavigation(language);
    translateProject(language);
    document.querySelectorAll(".language-switcher button").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setupSwitcher() {
    document.querySelectorAll(".site-nav").forEach((nav) => {
      if (nav.querySelector(".language-switcher")) return;
      const switcher = document.createElement("div");
      switcher.className = "language-switcher";
      switcher.setAttribute("aria-label", "Language selector");
      switcher.innerHTML = '<button type="button" data-lang="en">EN</button><button type="button" data-lang="zh">中</button><button type="button" data-lang="fr">FR</button>';
      nav.insertBefore(switcher, nav.querySelector(".nav-contact"));
    });
    document.addEventListener("click", (event) => {
      const button = event.target.closest(".language-switcher button");
      if (!button) return;
      localStorage.setItem("siteLanguage", button.dataset.lang);
      applyLanguage(button.dataset.lang);
    });
    applyLanguage(getLanguage());
  }

  setupSwitcher();
})();

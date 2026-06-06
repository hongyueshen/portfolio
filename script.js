const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function seededRandom(seed) {
  let value = [...seed].reduce((total, char) => total + char.charCodeAt(0), 0) || 1;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function buildMatrix(matrix) {
  const phrases = (matrix.dataset.hidden || "STAY CURIOUS").toUpperCase().split("|");
  const layouts = (matrix.dataset.hiddenLayout || "")
    .split(";")
    .filter(Boolean)
    .map((layout) => layout.split(",").map(Number));
  const random = seededRandom(matrix.dataset.seed || phrases.join(""));
  const width = Math.max(24, Math.floor(matrix.clientWidth / 22));
  const height = Math.max(10, Math.ceil(matrix.clientHeight / 27));
  const total = width * height;
  const letters = Array.from({ length: total }, () => alphabet[Math.floor(random() * alphabet.length)]);
  const hiddenIndexes = new Set();

  matrix.style.setProperty("--matrix-cols", width);
  phrases.forEach((phrase, phraseOrder) => {
    const [customRow, customCol] = layouts[phraseOrder] || [];
    const defaultRow = phrases.length === 1
      ? Number.parseFloat(matrix.dataset.hiddenRow || "0.5")
      : (phraseOrder + 1) / (phrases.length + 1);
    const rowRatio = Number.isFinite(customRow) ? customRow : defaultRow;
    const colRatio = Number.isFinite(customCol)
      ? customCol
      : Number.parseFloat(matrix.dataset.hiddenCol || "0.5");
    const startRow = Math.max(1, Math.min(height - 2, Math.round((height - 1) * rowRatio)));
    const availableColumns = Math.max(1, width - phrase.length - 1);
    const startCol = Math.max(1, Math.min(availableColumns, Math.round(availableColumns * colRatio)));

    for (let index = 0; index < phrase.length; index += 1) {
      const position = startRow * width + startCol + index;
      if (position < total) {
        letters[position] = phrase[index] === " " ? "" : phrase[index];
        hiddenIndexes.add(position);
      }
    }
  });

  matrix.innerHTML = letters
    .map((letter, index) => `<span class="matrix-letter${hiddenIndexes.has(index) ? " hidden-letter" : ""}" data-index="${index}">${letter || "&nbsp;"}</span>`)
    .join("");

  if (matrix.dataset.interactive === "true") {
    const spans = [...matrix.querySelectorAll(".matrix-letter")];
    const eventTarget = matrix.closest("[data-matrix-zone]") || matrix.parentElement || matrix;
    let frame = null;
    let pointer = { x: 0, y: 0 };
    if (matrix.matrixPointerMove) matrix.matrixEventTarget?.removeEventListener("pointermove", matrix.matrixPointerMove);
    if (matrix.matrixPointerLeave) matrix.matrixEventTarget?.removeEventListener("pointerleave", matrix.matrixPointerLeave);
    matrix.matrixPointerMove = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        spans.forEach((span) => {
          const rect = span.getBoundingClientRect();
          const distance = Math.hypot(pointer.x - (rect.left + rect.width / 2), pointer.y - (rect.top + rect.height / 2));
          span.classList.toggle("is-near", distance < 112);
        });
        frame = null;
      });
    };
    matrix.matrixPointerLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = null;
      spans.forEach((span) => span.classList.remove("is-near"));
    };
    matrix.matrixEventTarget = eventTarget;
    eventTarget.addEventListener("pointermove", matrix.matrixPointerMove);
    eventTarget.addEventListener("pointerleave", matrix.matrixPointerLeave);
  }
}

const projectData = {
  scape: {
    number: "001",
    title: "SCAPE",
    type: "Hospitality Branding",
    services: "Art Direction · Brand Identity · Digital & Print Assets",
    year: "2025",
    thumbnail: "assets/work/scape08.jpg",
    context: "SCAPE is a hospitality identity created around emotional immersion and the quiet pleasure of escape. The project explores how a flexible visual system can move from atmosphere to application without losing its sense of calm.",
    concept: "A continuous wave becomes the central gesture: an invitation to move, pause, and return to flow. The identity extends through typography, color, editorial rhythm, digital touchpoints, and spatial applications.",
    media: ["assets/work/scape02.jpg","assets/work/scape03.jpg","assets/work/scape04.jpg","assets/work/scape05.jpg","assets/work/scape06.jpg","assets/work/scape07.jpg","assets/work/scape08.jpg"],
    next: "luminous-fair"
  },
  "luminous-fair": {
    number: "002",
    title: "Luminous Fair",
    type: "Cultural Event Campaign",
    services: "Art Direction · Campaign Visuals · Environmental Graphics",
    year: "2025",
    thumbnail: "assets/work/deng08.jpg",
    context: "Luminous Fair is a contemporary lantern festival concept celebrating local culture through food, light, and community gathering. It brings a familiar seasonal ritual into a vivid and welcoming visual world.",
    concept: "Lanterns, folk motifs, and playful graphic forms are reduced into a modular vocabulary. A warm palette and bold compositions allow the system to travel across posters, tote bags, wayfinding, and the event space.",
    media: ["assets/work/deng02.jpg","assets/work/deng03.jpg","assets/work/deng04.jpg","assets/work/deng06.jpg","assets/work/deng05.jpg","assets/work/deng07.jpg","assets/work/deng08.jpg"],
    next: "hands-across-borders"
  },
  "hands-across-borders": {
    number: "003",
    title: "Hands Across Borders",
    type: "Editorial Storytelling",
    services: "Editorial Design · Photography Direction · Visual Storytelling",
    year: "2025",
    thumbnail: "assets/work/hands-hero.jpg",
    context: "Hands Across Borders is an editorial narrative about gestures as a language beyond borders. It observes how hands can communicate care, disagreement, memory, support, and connection before words arrive.",
    concept: "Threads, shadows, handwritten notes, and staged photography build a tactile sequence. The editorial system alternates between restraint and interruption, allowing each gesture to carry its own emotional weight.",
    media: ["assets/work/hands02.jpg","assets/work/hands03.jpg","assets/work/hands04.jpg","assets/work/hands05.jpg","assets/work/hands06.jpg","assets/work/hands07.jpg"],
    next: "bell-ross"
  },
  "bell-ross": {
    number: "004",
    title: "Folding Time",
    type: "Campaign Invitation",
    services: "Art Direction · Editorial Invitation · Motion Asset",
    year: "2025",
    thumbnail: "assets/work/bellross-thumbnail.jpg",
    context: "A limited-edition invitation concept for Bell & Ross, shaped around precision, folding time, and the quiet tension between technical instrument and personal ritual.",
    concept: "The system uses paper folds, watch geometry, and restrained contrast to turn an invitation into a tactile brand moment across print, digital, and motion.",
    media: [
      "assets/work/bellross01.jpg",
      "assets/work/bellross03.jpg",
      "assets/work/bellross02.jpg",
      { type: "video", src: "assets/video/bell-ross-invitation.mp4", caption: "Bell & Ross · Invitation motion" },
      "assets/work/bellross04.jpg",
      "assets/work/bellross05.jpg"
    ],
    next: "new-frontiers"
  },
  "new-frontiers": {
    number: "005",
    title: "Club Med: The New Frontiers",
    type: "Speculative Travel Experience",
    services: "Art Direction · Digital Experience · AI Visualization",
    year: "2025",
    thumbnail: "assets/work/cm-thumbnail.jpg",
    context: "A future-facing Club Med concept exploring how travel can feel more personal, immersive, and emotionally intelligent through digital service design.",
    concept: "The work translates speculative hospitality into interface, itinerary, and destination touchpoints, combining calm UI systems with a sense of discovery.",
    media: ["assets/work/cm02.jpg","assets/work/cm03.jpg","assets/work/cm04.jpg","assets/work/cm05.jpg","assets/work/cm06.jpg","assets/work/cm07.jpg"],
    next: "xiaoxi"
  },
  xiaoxi: {
    number: "006",
    title: "XiaoXi Rice Wine",
    type: "Brand Identity",
    services: "Art Direction · Packaging · Print Assets",
    year: "2025",
    thumbnail: "assets/work/xiaoxi-thumbnail.jpg",
    context: "Xiao Xi is a soft and refined identity system built around small rituals, quiet warmth, and an approachable visual language.",
    concept: "A restrained palette, delicate typography, and tactile applications create a brand world that feels intimate, giftable, and gently memorable.",
    media: ["assets/work/xiaoxi01.jpg","assets/work/xiaoxi02.jpg","assets/work/xiaoxi03.jpg","assets/work/xiaoxi04.jpg","assets/work/xiaoxi05.jpg"],
    next: "dxomark"
  },
  dxomark: {
    number: "007",
    title: "DXOMARK",
    type: "Professional Practice",
    services: "Brand Systems · Campaign Visuals · Digital Design",
    year: "2026",
    thumbnail: "assets/work/dxomark-thumbnail.jpg",
    context: "At DXOMARK, I contribute to cross-platform B2B and B2C communication across digital channels. This selection brings together work produced within an established brand context and adapted to different audiences and formats.",
    concept: "The practice focuses on translating technical topics into accessible and visually engaging communication. The work spans social media, event campaigns, motion content, presentation systems, and homepage concepts.",
    media: ["assets/work/dxomark01.jpg","assets/work/dxomark02.jpg","assets/work/dxomark03.jpg","assets/work/dxomark04.jpg","assets/work/dxomark05.jpg"],
    next: "scape"
  }
};

function getGalleryLayouts(media) {
  const layouts = Array.from({ length: media.length }, () => "pair");
  if (media.length % 2 === 1) layouts[0] = "wide";
  media.forEach((item, index) => {
    if (typeof item === "object" && item.layout) layouts[index] = item.layout;
  });
  return layouts;
}

function renderMediaItem(item, project, index, layout = "pair") {
  const image = typeof item === "string" ? item : item.src;
  const layoutClass = layout === "wide" ? " gallery-item-wide" : layout === "third" ? " gallery-item-third" : "";
  const caption = typeof item === "string"
    ? `${project.title} · Visual ${String(index + 1).padStart(2,"0")}`
    : (item.caption || `${project.title} · Visual ${String(index + 1).padStart(2,"0")}`).replace("Bell & Ross", project.title);
  if (typeof item === "object" && item.type === "video") {
    return `<div class="gallery-item gallery-video${layoutClass} reveal">
      <video controls playsinline preload="metadata" src="${item.src}"></video>
      <p>${caption}</p>
    </div>`;
  }
  return `<button class="gallery-item${layoutClass} reveal" type="button" data-lightbox="${image}" data-caption="${caption}">
    <img src="${image}" alt="${project.title} visual ${index + 1}" loading="lazy" />
  </button>`;
}

function renderProject() {
  const root = document.querySelector("#project-root");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || params.get("id") || "scape";
  const project = projectData[slug] || projectData.scape;
  const next = projectData[project.next];
  const galleryLayouts = getGalleryLayouts(project.media);
  document.title = `${project.title} | Hongyue Shen`;
  root.innerHTML = `
    <section class="project-hero">
      <div class="project-hero-top">
        <a class="project-back text-link text-link-muted" href="work.html"><span>&larr;</span> All work</a>
        <p class="project-number">${project.number}</p>
      </div>
      <h1>${project.title}</h1>
      <div class="project-meta">
        <p>Type<b>${project.type}</b></p>
        <p>Services<b>${project.services}</b></p>
        <p>Year<b>${project.year}</b></p>
      </div>
    </section>
    <section class="project-summary">
      <div class="reveal"><h2>Context</h2><p>${project.context}</p></div>
      <div class="reveal"><h2>Concept</h2><p>${project.concept}</p></div>
    </section>
    <section class="project-gallery">
      <div class="gallery-grid">
        ${project.media.map((item, index) => renderMediaItem(item, project, index, galleryLayouts[index])).join("")}
      </div>
    </section>
    <a class="project-next" href="project.html?slug=${project.next}"><b>Next project</b><span>${next.title} &rarr;</span></a>`;
}

function setupLightbox() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;
  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector("p");
  const close = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  };
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox]");
    if (!trigger) return;
    image.src = trigger.dataset.lightbox;
    image.alt = trigger.dataset.caption || "Expanded visual";
    caption.textContent = trigger.dataset.caption || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.closest(".lightbox-close")) close();
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
}

function setupPlaygroundModal() {
  const modal = document.querySelector(".play-modal");
  if (!modal) return;
  const panels = [...modal.querySelectorAll(".play-panel")];
  const closeButton = modal.querySelector(".play-modal-close");
  const videos = [...modal.querySelectorAll("video")];
  const sphereVideo = modal.querySelector("#script-murder-sphere-source");
  const panoramaScene = modal.querySelector(".panorama-frame a-scene");
  const panoramaFrame = modal.querySelector(".panorama-frame");
  if (!window.AFRAME) panoramaFrame?.classList.add("no-aframe");

  const stopVideos = () => {
    videos.forEach((video) => {
      video.pause();
      if (!video.closest(".play-card")) video.currentTime = 0;
    });
  };

  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    panels.forEach((panel) => panel.classList.remove("active"));
    stopVideos();
  };

  document.querySelectorAll("[data-play-target]").forEach((card) => {
    const preview = card.querySelector("video");
    if (preview) {
      card.addEventListener("pointerenter", () => preview.play().catch(() => {}));
      card.addEventListener("pointerleave", () => preview.pause());
    }
    card.addEventListener("click", () => {
      const target = card.dataset.playTarget;
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.playPanel === target));
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      const activePanel = panels.find((panel) => panel.dataset.playPanel === target);
      activePanel?.querySelectorAll("video").forEach((video) => video.play().catch(() => {}));
      activePanel?.querySelectorAll(".coffee-image-stage").forEach((stage) => resetCoffeeImageStage(stage));
      activePanel?.querySelectorAll(".coffee-stage").forEach((stage) => {
        stage.dataset.step = "0";
        stage.dispatchEvent(new Event("coffee:update"));
      });
      if (target === "script-murder") {
        sphereVideo?.play().catch(() => {});
        window.setTimeout(() => {
          panoramaScene?.resize?.();
          panoramaScene?.components?.renderer?.resize?.();
        }, 180);
      }
    });
  });

  closeButton?.addEventListener("click", close);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) close();
  });
}

function resetCoffeeImageStage(stage) {
  stage.scrollTo({ left: 0, top: 0, behavior: "auto" });
  stage.scrollLeft = 0;
  requestAnimationFrame(() => {
    stage.scrollTo({ left: 0, top: 0, behavior: "auto" });
    stage.scrollLeft = 0;
  });
  window.setTimeout(() => {
    stage.scrollTo({ left: 0, top: 0, behavior: "auto" });
    stage.scrollLeft = 0;
  }, 120);
}

function setupCoffeeBoard() {
  const stages = [...document.querySelectorAll(".coffee-stage")];
  if (!stages.length) return;

  stages.forEach((stage) => {
    const modules = [...stage.querySelectorAll(".coffee-module-piece")];
    const progress = stage.querySelector(".coffee-progress");
    if (!modules.length) return;
    let startX = null;
    let wheelLocked = false;

    modules.forEach((module) => {
      const image = module.querySelector("img");
      const x = Number.parseFloat(module.style.left);
      const y = Number.parseFloat(module.style.top);
      const width = Number.parseFloat(module.style.width);
      const height = Number.parseFloat(module.style.height);
      image.style.width = `${100 / width * 100}%`;
      image.style.height = `${100 / height * 100}%`;
      image.style.left = `${-x / width * 100}%`;
      image.style.top = `${-y / height * 100}%`;
    });

    const setStep = (nextStep) => {
      const step = Math.max(0, Math.min(modules.length - 1, nextStep));
      stage.dataset.step = String(step);
      stage.classList.toggle("is-complete", step === modules.length - 1);
      modules.forEach((module, index) => {
        module.classList.toggle("active", index <= step);
        module.classList.toggle("current", index === step);
      });
      if (progress) progress.textContent = `${String(step + 1).padStart(2, "0")} / ${String(modules.length).padStart(2, "0")}`;
    };

    const move = (direction) => setStep(Number(stage.dataset.step || 0) + direction);

    stage.addEventListener("coffee:update", () => setStep(Number(stage.dataset.step || 0)));
    stage.addEventListener("wheel", (event) => {
      event.preventDefault();
      if (wheelLocked) return;
      wheelLocked = true;
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      move(delta > 0 ? 1 : -1);
      window.setTimeout(() => { wheelLocked = false; }, 220);
    }, { passive: false });
    stage.addEventListener("pointerdown", (event) => {
      startX = event.clientX;
      stage.setPointerCapture?.(event.pointerId);
    });
    stage.addEventListener("pointerup", (event) => {
      if (startX === null) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 34) move(delta < 0 ? 1 : -1);
      startX = null;
    });
    stage.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    });
    setStep(0);
  });
}

function setupCoffeeImageBoards() {
  document.querySelectorAll(".coffee-image-stage").forEach((stage) => {
    const image = stage.querySelector(".coffee-panorama-image");
    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    resetCoffeeImageStage(stage);
    image?.addEventListener("load", () => resetCoffeeImageStage(stage));

    stage.addEventListener("wheel", (event) => {
      event.preventDefault();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      stage.scrollLeft += delta;
    }, { passive: false });

    stage.addEventListener("pointerdown", (event) => {
      dragging = true;
      startX = event.clientX;
      startScroll = stage.scrollLeft;
      stage.setPointerCapture?.(event.pointerId);
    });

    stage.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      event.preventDefault();
      stage.scrollLeft = startScroll - (event.clientX - startX);
    });

    const stopDragging = () => { dragging = false; };
    stage.addEventListener("pointerup", stopDragging);
    stage.addEventListener("pointercancel", stopDragging);
    stage.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") stage.scrollBy({ left: stage.clientWidth * .72, behavior: "smooth" });
      if (event.key === "ArrowLeft") stage.scrollBy({ left: -stage.clientWidth * .72, behavior: "smooth" });
    });
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-button");
  const tiles = document.querySelectorAll(".work-tile");
  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    tiles.forEach((tile) => {
      const matches = filter === "all" || tile.dataset.category.split(" ").includes(filter);
      tile.classList.toggle("is-hidden", !matches);
    });
  }));
}

function setupMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.classList.toggle("open", !open);
    nav.classList.toggle("open", !open);
  });
}

function setupCursor() {
  const cursor = document.querySelector(".cursor-dot");
  if (!cursor) return;
  const moveCursor = (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.style.opacity = "1";
  };
  window.addEventListener("pointermove", moveCursor, true);
  window.addEventListener("mousemove", moveCursor, true);
  document.addEventListener("pointerover", () => { cursor.style.opacity = "1"; }, true);
  document.querySelectorAll("a,button").forEach((item) => {
    item.addEventListener("pointerenter", () => cursor.classList.add("large"));
    item.addEventListener("pointerleave", () => cursor.classList.remove("large"));
  });
}

function setupReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .11 });
  document.querySelectorAll(".reveal").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * .96 && rect.bottom > 0) {
      item.classList.add("visible");
    } else {
      observer.observe(item);
    }
  });
}

renderProject();
document.querySelectorAll(".letter-matrix").forEach(buildMatrix);
window.addEventListener("resize", () => {
  document.querySelectorAll(".letter-matrix").forEach((matrix) => {
    if (!matrix.dataset.resizing) {
      matrix.dataset.resizing = "true";
      window.setTimeout(() => {
        buildMatrix(matrix);
        delete matrix.dataset.resizing;
      }, 180);
    }
  });
});
document.querySelectorAll("[data-year]").forEach((item) => { item.textContent = new Date().getFullYear(); });
setupMenu();
setupFilters();
setupLightbox();
setupPlaygroundModal();
setupCoffeeBoard();
setupCoffeeImageBoards();
setupCursor();
setupReveals();

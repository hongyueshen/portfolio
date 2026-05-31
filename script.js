const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function seededRandom(seed) {
  let value = [...seed].reduce((total, char) => total + char.charCodeAt(0), 0) || 1;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function buildMatrix(matrix) {
  const phrase = (matrix.dataset.hidden || "STAY CURIOUS").toUpperCase();
  const random = seededRandom(matrix.dataset.seed || phrase);
  const width = Math.max(16, Math.floor(matrix.clientWidth / 21));
  const height = Math.max(10, Math.ceil(matrix.clientHeight / 30));
  const total = width * height;
  const letters = Array.from({ length: total }, () => alphabet[Math.floor(random() * alphabet.length)]);
  const compactPhrase = phrase.replace(/ /g, "");
  const startRow = Math.max(2, Math.floor(height * 0.48));
  const startCol = Math.max(1, Math.floor((width - compactPhrase.length) / 2));
  const hiddenIndexes = new Set();

  let phraseIndex = 0;
  for (let index = 0; index < phrase.length; index += 1) {
    const char = phrase[index];
    if (char === " ") {
      phraseIndex += 1;
      continue;
    }
    const position = startRow * width + startCol + phraseIndex;
    if (position < total) {
      letters[position] = char;
      hiddenIndexes.add(position);
    }
    phraseIndex += 1;
  }

  matrix.innerHTML = letters
    .map((letter, index) => `<span class="matrix-letter${hiddenIndexes.has(index) ? " hidden-letter" : ""}" data-index="${index}">${letter}</span>`)
    .join("");

  if (matrix.dataset.interactive === "true") {
    const spans = [...matrix.querySelectorAll(".matrix-letter")];
    matrix.addEventListener("pointermove", (event) => {
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const distance = Math.hypot(event.clientX - (rect.left + rect.width / 2), event.clientY - (rect.top + rect.height / 2));
        span.classList.toggle("is-near", distance < 105);
      });
    });
    matrix.addEventListener("pointerleave", () => spans.forEach((span) => span.classList.remove("is-near")));
  }
}

const projectData = {
  scape: {
    number: "001",
    title: "SCAPE",
    subtitle: "Into the flow",
    category: "Brand Identity · Digital & Print Assets · Advertising",
    year: "2025",
    role: "Art Direction · Brand Identity",
    lead: "pdf_preview/portfolio_10.jpg",
    context: "SCAPE is a hospitality identity created around emotional immersion and the quiet pleasure of escape. The project explores how a flexible visual system can move from atmosphere to application without losing its sense of calm.",
    concept: "A continuous wave becomes the central gesture: an invitation to move, pause, and return to flow. The identity extends through typography, color, editorial rhythm, digital touchpoints, and spatial applications.",
    images: ["portfolio_04.jpg","portfolio_05.jpg","portfolio_06.jpg","portfolio_07.jpg","portfolio_08.jpg","portfolio_09.jpg","portfolio_10.jpg"],
    next: "luminous-fair"
  },
  "luminous-fair": {
    number: "002",
    title: "Luminous Fair",
    subtitle: "上灯游园",
    category: "Campaign Visuals · Event Experience · Environmental Graphics",
    year: "2025",
    role: "Art Direction · Campaign Design",
    lead: "pdf_preview/portfolio_18.jpg",
    context: "Luminous Fair is a contemporary lantern festival concept celebrating local culture through food, light, and community gathering. It brings a familiar seasonal ritual into a vivid and welcoming visual world.",
    concept: "Lanterns, folk motifs, and playful graphic forms are reduced into a modular vocabulary. A warm palette and bold compositions allow the system to travel across posters, tote bags, wayfinding, and the event space.",
    images: ["portfolio_12.jpg","portfolio_13.jpg","portfolio_14.jpg","portfolio_15.jpg","portfolio_16.jpg","portfolio_17.jpg","portfolio_18.jpg"],
    next: "hands-across-borders"
  },
  "hands-across-borders": {
    number: "003",
    title: "Hands Across Borders",
    subtitle: "Connect",
    category: "Editorial Design · Photography Direction · Visual Storytelling",
    year: "2025",
    role: "Editorial Design · Art Direction",
    lead: "pdf_preview/portfolio_23.jpg",
    context: "Hands Across Borders is an editorial narrative about gestures as a language beyond borders. It observes how hands can communicate care, disagreement, memory, support, and connection before words arrive.",
    concept: "Threads, shadows, handwritten notes, and staged photography build a tactile sequence. The editorial system alternates between restraint and interruption, allowing each gesture to carry its own emotional weight.",
    images: ["portfolio_20.jpg","portfolio_21.jpg","portfolio_22.jpg","portfolio_23.jpg","portfolio_24.jpg","portfolio_25.jpg"],
    next: "new-frontiers"
  },
  "new-frontiers": {
    number: "004",
    title: "The New Frontiers",
    subtitle: "Ever unknown",
    category: "Brand Identity · Campaign Visuals · AI Visualization",
    year: "2025",
    role: "Art Direction · Concept Development",
    lead: "pdf_preview/portfolio_27.jpg",
    context: "As travel experiences become increasingly standardized, hospitality brands risk losing emotional connection and a sense of discovery. The New Frontiers imagines a future-facing travel experience shaped by immersion and wonder.",
    concept: "Three speculative destinations become a connected visual universe. AI-assisted worldbuilding supports the art direction, while a celestial graphic language gives the imagined experience a coherent identity.",
    images: ["portfolio_27.jpg","portfolio_28.jpg","portfolio_29.jpg","portfolio_30.jpg"],
    next: "dxomark"
  },
  dxomark: {
    number: "005",
    title: "DXOMARK",
    subtitle: "Professional practice",
    category: "Brand Systems · Campaigns · Social Media · Digital Design",
    year: "2026",
    role: "Brand Designer · Jan 2026 – Present",
    lead: "pdf_preview/portfolio_32.jpg",
    context: "At DXOMARK, I contribute to cross-platform B2B and B2C communication across digital channels. This selection brings together work produced within an established brand context and adapted to different audiences and formats.",
    concept: "The practice focuses on translating technical topics into accessible and visually engaging communication. The work spans social media, event campaigns, motion content, presentation systems, and homepage concepts.",
    images: ["portfolio_32.jpg","portfolio_33.jpg"],
    next: "scape"
  }
};

function renderProject() {
  const root = document.querySelector("#project-root");
  if (!root) return;
  const slug = new URLSearchParams(window.location.search).get("slug") || "scape";
  const project = projectData[slug] || projectData.scape;
  const next = projectData[project.next];
  document.title = `${project.title} | Hongyue Shen`;
  root.innerHTML = `
    <section class="project-hero">
      <div class="project-kicker"><p class="eyebrow">${project.number} · ${project.subtitle}</p><a class="text-link text-link-muted" href="work.html">All work <span>×</span></a></div>
      <h1>${project.title}</h1>
      <div class="project-meta">
        <p>Scope<b>${project.category}</b></p>
        <p>Role<b>${project.role}</b></p>
        <p>Year<b>${project.year}</b></p>
      </div>
    </section>
    <img class="project-lead-image" src="${project.lead}" alt="${project.title} project hero image" />
    <section class="project-summary">
      <div class="reveal"><h2>Context</h2><p>${project.context}</p></div>
      <div class="reveal"><h2>Concept</h2><p>${project.concept}</p></div>
    </section>
    <section class="project-gallery">
      <div class="gallery-grid">
        ${project.images.map((image, index) => `<button class="gallery-item reveal" type="button" data-lightbox="pdf_preview/${image}" data-caption="${project.title} · Visual ${String(index + 1).padStart(2,"0")}"><img src="pdf_preview/${image}" alt="${project.title} visual ${index + 1}" loading="lazy" /></button>`).join("")}
      </div>
    </section>
    <a class="project-next" href="project.html?slug=${project.next}"><b>Next project</b><span>${next.title} →</span></a>`;
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
  document.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
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
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
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
setupCursor();
setupReveals();

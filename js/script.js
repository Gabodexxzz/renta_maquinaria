// Terramax - Maqueta JS (catálogo, filtro, modal, formulario, tema)
(() => {
  const machines = [
    {
      id: "exc-20t",
      name: "Excavadora 20T",
      category: "movimiento",
      categoryLabel: "Movimiento de tierra",
      tag: "Alta potencia",
      capacity: "Cuchara 0.9–1.2 m³",
      weight: "20 toneladas",
      eta: "24h (según zona)",
      desc: "Ideal para excavación, zanjas y movimiento de material. Opcional martillo hidráulico.",
      img: "https://images.unsplash.com/photo-1623952263370-86b0a36b3a7a?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "exc-30t",
      name: "Excavadora 30T",
      category: "movimiento",
      categoryLabel: "Movimiento de tierra",
      tag: "Obra pesada",
      capacity: "Cuchara 1.4–1.8 m³",
      weight: "30 toneladas",
      eta: "24–48h",
      desc: "Para proyectos exigentes: excavación profunda, carga y trabajo continuo.",
      img: "https://images.unsplash.com/photo-1581091870627-3a27a0f1a1f7?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "retro",
      name: "Retroexcavadora 4x4",
      category: "movimiento",
      categoryLabel: "Movimiento de tierra",
      tag: "Versátil",
      capacity: "Balde + brazo posterior",
      weight: "Clase 8–10T",
      eta: "Mismo día",
      desc: "Solución multiuso para obras urbanas y faenas medianas.",
      img: "https://images.unsplash.com/photo-1600697395546-4a1a082d5a35?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "grua-rt",
      name: "Grúa RT 35T",
      category: "izaje",
      categoryLabel: "Izaje",
      tag: "Terreno difícil",
      capacity: "35 toneladas",
      weight: "RT (todo terreno)",
      eta: "24–48h",
      desc: "Grúa todo terreno para montaje, estructuras y maniobras en faena.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "manlift",
      name: "Alza Hombre 18m",
      category: "izaje",
      categoryLabel: "Izaje",
      tag: "Trabajo en altura",
      capacity: "18 metros",
      weight: "Plataforma",
      eta: "24h",
      desc: "Plataforma elevadora para mantención, instalaciones y trabajos en altura.",
      img: "https://images.unsplash.com/photo-1601397216714-77d85d5117e1?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "rodillo",
      name: "Rodillo Compactador",
      category: "compactacion",
      categoryLabel: "Compactación",
      tag: "Terminaciones",
      capacity: "8–12 toneladas",
      weight: "Vibratorio",
      eta: "24h",
      desc: "Compactación de subbase y asfalto. Ideal para caminos y plataformas.",
      img: "https://images.unsplash.com/photo-1563720220299-3ab94f6f8bfe?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "cargador",
      name: "Cargador Frontal",
      category: "carga",
      categoryLabel: "Carga",
      tag: "Producción",
      capacity: "Balde 2.5–3.5 m³",
      weight: "Clase 15–18T",
      eta: "24h",
      desc: "Carga y traslado de material con gran eficiencia en cantera y obra.",
      img: "https://images.unsplash.com/photo-1504306661519-4c3b0f9a1fb8?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "minicargador",
      name: "Minicargador",
      category: "carga",
      categoryLabel: "Carga",
      tag: "Espacios reducidos",
      capacity: "Balde 0.4–0.6 m³",
      weight: "Clase 3–4T",
      eta: "Mismo día",
      desc: "Perfecto para obras pequeñas, movimiento de escombros y nivelación.",
      img: "https://images.unsplash.com/photo-1618843479313-40f2b97d7e0f?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "motoniveladora",
      name: "Motoniveladora",
      category: "movimiento",
      categoryLabel: "Movimiento de tierra",
      tag: "Caminos",
      capacity: "Hoja 12–14 ft",
      weight: "Clase 14–18T",
      eta: "24–48h",
      desc: "Perfilado y nivelación para caminos, plataformas y accesos.",
      img: "https://images.unsplash.com/photo-1520975958220-b70b1f297d69?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "bulldozer",
      name: "Bulldozer D6",
      category: "movimiento",
      categoryLabel: "Movimiento de tierra",
      tag: "Empuje",
      capacity: "Hoja 3.2–3.8 m³",
      weight: "Clase 20T",
      eta: "24–48h",
      desc: "Empuje y despeje de terreno con excelente tracción en faena.",
      img: "https://images.unsplash.com/photo-1558980664-10ea8b8d7d0a?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "camion-pluma",
      name: "Camión Pluma",
      category: "izaje",
      categoryLabel: "Izaje",
      tag: "Logística",
      capacity: "8–15 toneladas",
      weight: "Camión + pluma",
      eta: "24h",
      desc: "Carga, descarga y montaje liviano. Ideal para obra urbana.",
      img: "https://images.unsplash.com/photo-1597001257985-3cbcc8b7e08b?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "torre-iluminacion",
      name: "Torre de Iluminación",
      category: "izaje",
      categoryLabel: "Izaje",
      tag: "Faena nocturna",
      capacity: "LED / Generador",
      weight: "Remolcable",
      eta: "Mismo día",
      desc: "Iluminación para faena, eventos o emergencias. Fácil de transportar.",
      img: "https://images.unsplash.com/photo-1501843508755-af0829d48681?auto=format&fit=crop&w=1400&q=80"
    }
  ];

  // UI elements
  const grid = document.getElementById("catalogGrid");
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const btnLoadMore = document.getElementById("btnLoadMore");

  // Modal elements
  const modalEl = document.getElementById("machineModal");
  const modal = modalEl ? new bootstrap.Modal(modalEl) : null;

  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modalImg");
  const modalCat = document.getElementById("modalCat");
  const modalTag = document.getElementById("modalTag");
  const modalDesc = document.getElementById("modalDesc");
  const modalCap = document.getElementById("modalCap");
  const modalWeight = document.getElementById("modalWeight");
  const modalEta = document.getElementById("modalEta");

  // Render state
  let visibleCount = 6;

  const normalize = (s) => (s || "").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

  const getFiltered = () => {
    const q = normalize(searchInput?.value || "");
    const cat = categorySelect?.value || "all";

    return machines.filter(m => {
      const matchCat = cat === "all" ? true : m.category === cat;
      const matchText = !q
        ? true
        : normalize(m.name).includes(q) || normalize(m.desc).includes(q) || normalize(m.categoryLabel).includes(q);
      return matchCat && matchText;
    });
  };

  const badgeForCat = (cat) => {
    switch(cat){
      case "movimiento": return "text-bg-primary";
      case "izaje": return "text-bg-warning";
      case "compactacion": return "text-bg-success";
      case "carga": return "text-bg-info";
      default: return "text-bg-secondary";
    }
  };

  const cardTemplate = (m) => `
    <div class="col-md-6 col-lg-4">
      <div class="catalog-card h-100">
        <div class="ratio ratio-16x9">
          <img class="card-img-top w-100 h-100 object-fit-cover" src="${m.img}" alt="${m.name}">
        </div>
        <div class="p-3 p-md-4">
          <div class="d-flex flex-wrap gap-2 mb-2">
            <span class="badge ${badgeForCat(m.category)}">${m.categoryLabel}</span>
            <span class="badge badge-soft">${m.tag}</span>
          </div>
          <h3 class="h5 fw-bold mb-2">${m.name}</h3>
          <p class="text-muted small mb-3">${m.desc}</p>

          <div class="d-flex flex-wrap gap-2 justify-content-between align-items-center">
            <div class="small text-muted"><i class="bi bi-truck"></i> Entrega: ${m.eta}</div>
            <button class="btn btn-outline-light btn-sm" data-machine="${m.id}">
              Ver detalles <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const render = () => {
    if (!grid) return;
    const items = getFiltered();
    const shown = items.slice(0, visibleCount);

    grid.innerHTML = shown.map(cardTemplate).join("");

    // bind buttons
    grid.querySelectorAll("button[data-machine]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-machine");
        const m = machines.find(x => x.id === id);
        if (!m || !modal) return;

        modalTitle.textContent = m.name;
        modalImg.src = m.img;
        modalImg.alt = m.name;
        modalCat.textContent = m.categoryLabel;
        modalCat.className = "badge " + badgeForCat(m.category);
        modalTag.textContent = m.tag;

        modalDesc.textContent = m.desc;
        modalCap.textContent = m.capacity;
        modalWeight.textContent = m.weight;
        modalEta.textContent = m.eta;

        modal.show();
      });
    });

    // load more behavior
    if (btnLoadMore){
      btnLoadMore.classList.toggle("d-none", visibleCount >= items.length);
    }
  };

  // Events
  searchInput?.addEventListener("input", () => {
    visibleCount = 6;
    render();
  });

  categorySelect?.addEventListener("change", () => {
    visibleCount = 6;
    render();
  });

  btnLoadMore?.addEventListener("click", () => {
    visibleCount += 6;
    render();
  });

  // Form validation (demo)
  const form = document.getElementById("quoteForm");
  const alertBox = document.getElementById("formAlert");

  const showAlert = (type, msg) => {
    if (!alertBox) return;
    alertBox.className = `alert alert-${type}`;
    alertBox.textContent = msg;
    alertBox.classList.remove("d-none");
  };

  const validPhone = (v) => {
    const s = (v || "").replace(/\s+/g, "");
    // Simple Chile-like validation: must have 8+ digits (ignore + and non-digits)
    const digits = s.replace(/\D/g, "");
    return digits.length >= 8;
  };

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const fd = new FormData(form);
    const phone = fd.get("phone");
    let ok = form.checkValidity();
    if (!validPhone(phone)) ok = false;

    // Custom phone validity
    const phoneInput = form.querySelector('input[name="phone"]');
    if (phoneInput){
      if (!validPhone(phone)) phoneInput.classList.add("is-invalid");
      else phoneInput.classList.remove("is-invalid");
    }

    if (!ok){
      form.classList.add("was-validated");
      showAlert("danger", "Revisa los campos marcados. Con eso puedo cotizarte mejor 🙂");
      return;
    }

    // Demo behavior: create a summary and "simulate" sending
    const wantsOperator = document.getElementById("operatorCheck")?.checked ? "Sí" : "No";
    const summary =
      `Solicitud recibida ✅\n` +
      `Equipo(s): ${fd.get("machines")} · Días: ${fd.get("days")} · Operador: ${wantsOperator}\n` +
      `Te contactaremos a ${fd.get("email")} / ${fd.get("phone")}.`;

    showAlert("success", summary);
    form.reset();
    form.classList.remove("was-validated");
  });

  // Theme toggle
  const btnTheme = document.getElementById("btnTheme");
  const THEME_KEY = "tm_theme";

  const applyTheme = (t) => {
    document.body.classList.toggle("light", t === "light");
    if (btnTheme){
      btnTheme.innerHTML = t === "light" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
    }
  };

  const saved = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(saved);

  btnTheme?.addEventListener("click", () => {
    const next = document.body.classList.contains("light") ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Initial render
  render();
})();

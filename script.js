const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const colourOptions = [
  { name: "Dover White", hex: "#f4f1e8" },
  { name: "Surfmist", hex: "#d8d8d1" },
  { name: "Southerly", hex: "#d6d2ca" },
  { name: "Shale Grey", hex: "#b6b7b0" },
  { name: "Bluegum", hex: "#6f7d7c" },
  { name: "Windspray", hex: "#8f9692" },
  { name: "Basalt", hex: "#5f6462" },
  { name: "Classic Cream", hex: "#e9ddb8" },
  { name: "Paperbark", hex: "#c9bd9a" },
  { name: "Evening Haze", hex: "#c9c2aa" },
  { name: "Dune", hex: "#b4ad9e" },
  { name: "Gully", hex: "#8d8065" },
  { name: "Jasper", hex: "#6d5142" },
  { name: "Manor Red", hex: "#5b2e2e" },
  { name: "Wallaby", hex: "#746f63" },
  { name: "Woodland Grey", hex: "#4b4f46" },
  { name: "Pale Eucalypt", hex: "#7f8c75" },
  { name: "Cottage Green", hex: "#345144" },
  { name: "Ironstone", hex: "#3f4f5a" },
  { name: "Deep Ocean", hex: "#314555" },
  { name: "Night Sky", hex: "#111111" },
  { name: "Monument", hex: "#323333" }
];

const colourGrid = document.querySelector("[data-colour-grid]");

if (colourGrid) {
  colourOptions.forEach((colour) => {
    const card = document.createElement("button");
    card.className = "colour-card";
    card.type = "button";
    card.innerHTML = `
      <span class="colour-chip" style="background:${colour.hex}"></span>
      <span>Classic roofing colour</span>
      <strong>${colour.name}</strong>
      <small>Use this colour in my quote</small>
    `;
    card.addEventListener("click", () => {
      localStorage.setItem("mjdPreferredColour", colour.name);
      window.location.href = `quote.html?colour=${encodeURIComponent(colour.name)}`;
    });
    colourGrid.appendChild(card);
  });
}

const colourSelect = document.querySelector("#colour-select");
const selectedColour = document.querySelector("[data-selected-colour]");

function updateSelectedColour(name) {
  if (!selectedColour) return;
  const colour = colourOptions.find((item) => item.name === name);
  const chip = selectedColour.querySelector("span");
  const label = selectedColour.querySelector("strong");
  chip.style.background = colour?.hex || "#fff";
  label.textContent = colour ? colour.name : "No colour selected yet";
}

if (colourSelect) {
  const params = new URLSearchParams(window.location.search);
  const savedColour = params.get("colour") || localStorage.getItem("mjdPreferredColour") || "";

  colourSelect.innerHTML = `<option value="">Select colour or need advice</option>
    <option>Need advice</option>
    ${colourOptions.map((colour) => `<option>${colour.name}</option>`).join("")}`;

  if (savedColour) {
    colourSelect.value = savedColour;
  }

  updateSelectedColour(colourSelect.value);

  colourSelect.addEventListener("change", () => {
    localStorage.setItem("mjdPreferredColour", colourSelect.value);
    updateSelectedColour(colourSelect.value);
  });
}

const serviceSelect = document.querySelector("#service-select");

if (serviceSelect) {
  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  const needsAdvice = params.get("advice");

  if (service) serviceSelect.value = service;
  if (needsAdvice) {
    const adviceSelect = document.querySelector("#advice-select");
    if (adviceSelect) adviceSelect.value = "Yes, please advise size and layout";
  }
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  const note = form.querySelector(".form-note");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (note) {
      note.textContent = "Thanks. This demo captured the enquiry locally; connect email, CRM or Google Sheets before launch.";
    }
    form.reset();
    updateSelectedColour("");
  });
});

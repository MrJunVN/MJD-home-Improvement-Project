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

const suburbOptions = [
  { name: "Melbourne", postcode: "3000" },
  { name: "Docklands", postcode: "3008" },
  { name: "Southbank", postcode: "3006" },
  { name: "Port Melbourne", postcode: "3207" },
  { name: "St Kilda", postcode: "3182" },
  { name: "Brighton", postcode: "3186" },
  { name: "Caulfield", postcode: "3162" },
  { name: "Malvern", postcode: "3144" },
  { name: "Toorak", postcode: "3142" },
  { name: "Richmond", postcode: "3121" },
  { name: "Hawthorn", postcode: "3122" },
  { name: "Kew", postcode: "3101" },
  { name: "Camberwell", postcode: "3124" },
  { name: "Box Hill", postcode: "3128" },
  { name: "Doncaster", postcode: "3108" },
  { name: "Ringwood", postcode: "3134" },
  { name: "Croydon", postcode: "3136" },
  { name: "Bundoora", postcode: "3083" },
  { name: "Preston", postcode: "3072" },
  { name: "Reservoir", postcode: "3073" },
  { name: "Epping", postcode: "3076" },
  { name: "Craigieburn", postcode: "3064" },
  { name: "Roxburgh Park", postcode: "3064" },
  { name: "Broadmeadows", postcode: "3047" },
  { name: "Essendon", postcode: "3040" },
  { name: "Moonee Ponds", postcode: "3039" },
  { name: "Footscray", postcode: "3011" },
  { name: "Yarraville", postcode: "3013" },
  { name: "Altona", postcode: "3018" },
  { name: "Altona North", postcode: "3025" },
  { name: "Williamstown", postcode: "3016" },
  { name: "Newport", postcode: "3015" },
  { name: "Point Cook", postcode: "3030" },
  { name: "Werribee", postcode: "3030" },
  { name: "Hoppers Crossing", postcode: "3029" },
  { name: "Tarneit", postcode: "3029" },
  { name: "Truganina", postcode: "3029" },
  { name: "Williams Landing", postcode: "3027" },
  { name: "Laverton", postcode: "3028" },
  { name: "Seabrook", postcode: "3028" },
  { name: "Caroline Springs", postcode: "3023" },
  { name: "Deer Park", postcode: "3023" },
  { name: "St Albans", postcode: "3021" },
  { name: "Sunshine", postcode: "3020" },
  { name: "Melton", postcode: "3337" },
  { name: "Dandenong", postcode: "3175" },
  { name: "Noble Park", postcode: "3174" },
  { name: "Springvale", postcode: "3171" },
  { name: "Clayton", postcode: "3168" },
  { name: "Glen Waverley", postcode: "3150" },
  { name: "Mulgrave", postcode: "3170" },
  { name: "Rowville", postcode: "3178" },
  { name: "Narre Warren", postcode: "3805" },
  { name: "Berwick", postcode: "3806" },
  { name: "Cranbourne", postcode: "3977" },
  { name: "Frankston", postcode: "3199" },
  { name: "Mornington", postcode: "3931" },
  { name: "Geelong", postcode: "3220" }
];

function suburbValue(suburb) {
  return `${suburb.name} VIC ${suburb.postcode}`;
}

function parseSuburb(value) {
  const normalised = value.trim().toLowerCase();
  const match = suburbOptions.find((suburb) => {
    const fullValue = suburbValue(suburb).toLowerCase();
    return fullValue === normalised ||
      suburb.name.toLowerCase() === normalised ||
      suburb.postcode === normalised;
  });

  if (match) return match;

  const postcode = value.match(/\b\d{4}\b/)?.[0] || "";
  const name = value.replace(/\b(VIC|Victoria)\b/gi, "").replace(/\b\d{4}\b/g, "").trim();
  return { name, postcode };
}

function ensureHiddenInput(form, name) {
  let input = form.querySelector(`input[name="${name}"]`);
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }
  return input;
}

const suburbInputs = document.querySelectorAll('input[name="suburb"]');

if (suburbInputs.length) {
  const datalist = document.createElement("datalist");
  datalist.id = "melbourne-suburb-options";
  datalist.innerHTML = suburbOptions
    .map((suburb) => `<option value="${suburbValue(suburb)}">${suburb.name} - ${suburb.postcode}</option>`)
    .join("");
  document.body.appendChild(datalist);

  suburbInputs.forEach((input) => {
    input.setAttribute("list", "melbourne-suburb-options");
    input.setAttribute("inputmode", "search");
    input.setAttribute("autocomplete", "postal-code");

    input.addEventListener("change", () => {
      const suburb = parseSuburb(input.value);
      if (suburb.name && suburb.postcode) {
        input.value = suburbValue(suburb);
      }
    });
  });
}

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
    const suburbInput = form.querySelector('input[name="suburb"]');

    if (suburbInput) {
      const suburb = parseSuburb(suburbInput.value);
      ensureHiddenInput(form, "suburb_name").value = suburb.name;
      ensureHiddenInput(form, "postcode").value = suburb.postcode;
      if (suburb.name && suburb.postcode) {
        suburbInput.value = suburbValue(suburb);
      }
    }

    if (note) {
      const suburbName = form.querySelector('input[name="suburb_name"]')?.value;
      const postcode = form.querySelector('input[name="postcode"]')?.value;
      const locationText = suburbName && postcode ? ` Location saved as ${suburbName}, ${postcode}.` : "";
      note.textContent = `Thanks. This demo captured the enquiry locally; connect email, CRM or Google Sheets before launch.${locationText}`;
    }
    form.reset();
    updateSelectedColour("");
  });
});

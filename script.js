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
  { name: "Mornington", postcode: "3931" }
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

function formatAddress(properties = {}) {
  const street = [properties.housenumber, properties.street || properties.name].filter(Boolean).join(" ");
  const locality = properties.district || properties.city || properties.town || properties.village || properties.locality;
  const state = properties.state;
  const postcode = properties.postcode;
  return [street, locality, state, postcode].filter(Boolean).join(", ");
}

function addressDetails(feature) {
  const properties = feature.properties || {};
  const [longitude, latitude] = feature.geometry?.coordinates || [];
  return {
    label: formatAddress(properties),
    suburb: properties.district || properties.city || properties.town || properties.village || properties.locality || "",
    postcode: properties.postcode || "",
    state: properties.state || "",
    latitude: latitude ?? "",
    longitude: longitude ?? ""
  };
}

function saveAddressDetails(form, details) {
  ensureHiddenInput(form, "suburb_name").value = details.suburb;
  ensureHiddenInput(form, "postcode").value = details.postcode;
  ensureHiddenInput(form, "state").value = details.state;
  ensureHiddenInput(form, "latitude").value = details.latitude;
  ensureHiddenInput(form, "longitude").value = details.longitude;
}

document.querySelectorAll(".address-field").forEach((field, fieldIndex) => {
  const input = field.querySelector('input[name="address"]');
  const suggestions = field.querySelector(".address-suggestions");
  const status = field.querySelector(".address-status");
  const gpsButton = field.querySelector("[data-use-location]");
  const form = field.closest("form");
  let results = [];
  let activeIndex = -1;
  let debounceTimer;
  let requestController;

  suggestions.id = `address-suggestions-${fieldIndex + 1}`;
  input.setAttribute("aria-controls", suggestions.id);

  function closeSuggestions() {
    suggestions.hidden = true;
    input.setAttribute("aria-expanded", "false");
    activeIndex = -1;
  }

  function chooseAddress(details) {
    input.value = details.label;
    saveAddressDetails(form, details);
    status.textContent = `Address selected: ${details.label}`;
    closeSuggestions();
  }

  function renderSuggestions(features) {
    suggestions.replaceChildren();
    results = features.map(addressDetails).filter((item) => item.label);

    results.forEach((details, index) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "address-option";
      option.id = `${suggestions.id}-option-${index}`;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");

      const main = document.createElement("strong");
      main.textContent = details.label;
      const source = document.createElement("small");
      source.textContent = "Address suggestion · OpenStreetMap";
      option.append(main, source);
      option.addEventListener("mousedown", (event) => event.preventDefault());
      option.addEventListener("click", () => chooseAddress(details));
      suggestions.appendChild(option);
    });

    suggestions.hidden = results.length === 0;
    input.setAttribute("aria-expanded", String(results.length > 0));
    status.textContent = results.length ? `${results.length} address suggestions available.` : "No matching address found. You can keep typing or enter it manually.";
  }

  async function searchAddress(query) {
    requestController?.abort();
    requestController = new AbortController();
    status.textContent = "Finding matching Australian addresses…";

    try {
      const url = new URL("https://photon.komoot.io/api/");
      url.searchParams.set("q", `${query}, Australia`);
      url.searchParams.set("limit", "6");
      url.searchParams.set("bbox", "112.9,-43.8,153.7,-10.6");
      const response = await fetch(url, { signal: requestController.signal });
      if (!response.ok) throw new Error("Address lookup failed");
      const data = await response.json();
      renderSuggestions(data.features || []);
    } catch (error) {
      if (error.name === "AbortError") return;
      closeSuggestions();
      status.textContent = "Address suggestions are temporarily unavailable. Please enter the full address manually.";
    }
  }

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    saveAddressDetails(form, { suburb: "", postcode: "", state: "", latitude: "", longitude: "" });
    if (input.value.trim().length < 4) {
      closeSuggestions();
      status.textContent = input.value ? "Keep typing to see full address suggestions." : "";
      return;
    }
    debounceTimer = setTimeout(() => searchAddress(input.value.trim()), 350);
  });

  input.addEventListener("keydown", (event) => {
    const options = [...suggestions.querySelectorAll(".address-option")];
    if (!options.length || suggestions.hidden) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = event.key === "ArrowDown"
        ? (activeIndex + 1) % options.length
        : (activeIndex - 1 + options.length) % options.length;
      options.forEach((option, index) => option.setAttribute("aria-selected", String(index === activeIndex)));
      input.setAttribute("aria-activedescendant", options[activeIndex].id);
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      chooseAddress(results[activeIndex]);
    } else if (event.key === "Escape") {
      closeSuggestions();
    }
  });

  input.addEventListener("blur", () => setTimeout(closeSuggestions, 120));

  gpsButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
      status.textContent = "GPS location is not supported by this browser. Please enter the address manually.";
      return;
    }

    gpsButton.disabled = true;
    gpsButton.textContent = "Locating…";
    status.textContent = "Your browser will ask permission before sharing your location.";

    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      try {
        const url = new URL("https://photon.komoot.io/reverse");
        url.searchParams.set("lat", coords.latitude);
        url.searchParams.set("lon", coords.longitude);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Reverse lookup failed");
        const data = await response.json();
        const details = addressDetails(data.features?.[0] || {});
        if (!details.label) throw new Error("No address found");
        chooseAddress(details);
      } catch {
        saveAddressDetails(form, { suburb: "", postcode: "", state: "", latitude: coords.latitude, longitude: coords.longitude });
        status.textContent = "Location found, but the street address could not be loaded. Please enter it manually.";
      } finally {
        gpsButton.disabled = false;
        gpsButton.textContent = field.classList.contains("compact-address") ? "GPS" : "Use GPS";
      }
    }, (error) => {
      const messages = {
        1: "Location permission was not granted. You can still enter the address manually.",
        2: "Your location is unavailable. Please enter the address manually.",
        3: "Location lookup timed out. Please try again or enter the address manually."
      };
      status.textContent = messages[error.code] || "We could not access your location. Please enter the address manually.";
      gpsButton.disabled = false;
      gpsButton.textContent = field.classList.contains("compact-address") ? "GPS" : "Use GPS";
    }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
  });
});

document.querySelectorAll("[data-photo-input]").forEach((input) => {
  const preview = input.closest(".upload-field").querySelector("[data-photo-preview]");
  let previewUrls = [];

  input.addEventListener("change", () => {
    previewUrls.forEach(URL.revokeObjectURL);
    previewUrls = [];
    preview.replaceChildren();
    const files = [...input.files];
    const invalidFile = files.find((file) => !file.type.startsWith("image/") || file.size > 10 * 1024 * 1024);
    input.setCustomValidity(files.length > 6 ? "Please select no more than 6 images." : invalidFile ? "Each file must be an image no larger than 10 MB." : "");

    files.slice(0, 6).forEach((file) => {
      const url = URL.createObjectURL(file);
      previewUrls.push(url);
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = url;
      image.alt = "Selected project photo preview";
      const caption = document.createElement("figcaption");
      caption.textContent = file.name;
      figure.append(image, caption);
      preview.appendChild(figure);
    });
  });

  input.form?.addEventListener("reset", () => {
    previewUrls.forEach(URL.revokeObjectURL);
    previewUrls = [];
    preview.replaceChildren();
    input.setCustomValidity("");
  });
});

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
const colourModeSelect = document.querySelector("#colour-mode-select");
const singleColourPanel = document.querySelector("[data-single-colour-panel]");
const multiColourPanel = document.querySelector("[data-multi-colour-panel]");
const colourPartGrid = document.querySelector("[data-colour-part-grid]");
const addColourPartButton = document.querySelector("[data-add-colour-part]");
const remainingColourToggle = document.querySelector("[data-remaining-colour-toggle]");
const remainingColourField = document.querySelector("[data-remaining-colour-field]");
const remainingColourSelect = document.querySelector("[data-remaining-colour-select]");
const colourDetailsInput = document.querySelector("[data-colour-details]");

const colourPartOptions = [
  "Frame",
  "Roof sheet",
  "Gutter",
  "Downpipe",
  "Flashing",
  "Posts",
  "Beam",
  "Fence panels",
  "Gate frame",
  "Other"
];

const defaultColourParts = ["Frame", "Roof sheet", "Gutter", "Downpipe"];

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

function colourOptionsMarkup(includeAdvice = true) {
  return `${includeAdvice ? '<option value="">Select colour or need advice</option><option>Need advice</option>' : '<option value="">Select colour</option>'}
    ${colourOptions.map((colour) => `<option>${colour.name}</option>`).join("")}`;
}

function colourPartOptionsMarkup(selectedPart = "") {
  return colourPartOptions
    .map((part) => `<option${part === selectedPart ? " selected" : ""}>${part}</option>`)
    .join("");
}

function createColourPartRow(part = "Other", colour = "") {
  if (!colourPartGrid) return;

  const row = document.createElement("div");
  row.className = "colour-part-row";
  row.innerHTML = `
    <label>Part
      <select name="colour_part[]">${colourPartOptionsMarkup(part)}</select>
    </label>
    <label>Colour
      <select name="colour_part_colour[]">${colourOptionsMarkup()}</select>
    </label>
    <button class="button secondary outline" type="button" aria-label="Remove colour part">X</button>
  `;

  const colourSelectForRow = row.querySelector('select[name="colour_part_colour[]"]');
  colourSelectForRow.value = colour;

  row.querySelector("button").addEventListener("click", () => {
    row.remove();
    updateColourDetails();
  });

  row.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", updateColourDetails);
  });

  colourPartGrid.appendChild(row);
  updateColourDetails();
}

function updateColourPanels() {
  const isMultiple = colourModeSelect?.value === "multiple";

  if (singleColourPanel) singleColourPanel.hidden = isMultiple;
  if (multiColourPanel) multiColourPanel.hidden = !isMultiple;

  if (isMultiple && colourPartGrid && !colourPartGrid.children.length) {
    const savedColour = colourSelect?.value || localStorage.getItem("mjdPreferredColour") || "";
    defaultColourParts.forEach((part, index) => createColourPartRow(part, index === 1 ? savedColour : ""));
  }

  updateColourDetails();
}

function updateColourDetails() {
  if (!colourDetailsInput) return;

  if (colourModeSelect?.value !== "multiple") {
    colourDetailsInput.value = colourSelect?.value ? `Single colour: ${colourSelect.value}` : "";
    return;
  }

  const rows = [...document.querySelectorAll(".colour-part-row")].map((row) => {
    const part = row.querySelector('select[name="colour_part[]"]')?.value;
    const colour = row.querySelector('select[name="colour_part_colour[]"]')?.value;
    return part && colour ? `${part}: ${colour}` : "";
  }).filter(Boolean);

  if (remainingColourToggle?.checked && remainingColourSelect?.value) {
    rows.push(`All remaining parts: ${remainingColourSelect.value}`);
  }

  colourDetailsInput.value = rows.join("; ");
}

if (remainingColourSelect) {
  remainingColourSelect.innerHTML = colourOptionsMarkup();
}

colourModeSelect?.addEventListener("change", updateColourPanels);

addColourPartButton?.addEventListener("click", () => {
  createColourPartRow();
});

remainingColourToggle?.addEventListener("change", () => {
  if (remainingColourField) remainingColourField.hidden = !remainingColourToggle.checked;
  updateColourDetails();
});

remainingColourSelect?.addEventListener("change", updateColourDetails);

const serviceSelect = document.querySelector("#service-select");
const adviceSelect = document.querySelector("#advice-select");
const sizeFields = document.querySelectorAll("[data-size-field]");

function updateSizeFields() {
  const showSizeFields = !adviceSelect || adviceSelect.value === "No, I have rough measurements";

  sizeFields.forEach((field) => {
    field.hidden = !showSizeFields;

    if (!showSizeFields) {
      const input = field.querySelector("input");
      if (input) input.value = "";
    }
  });
}

if (serviceSelect) {
  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  const needsAdvice = params.get("advice");

  if (service) serviceSelect.value = service;
  if (needsAdvice) {
    if (adviceSelect) adviceSelect.value = "Yes, please advise size and layout";
  }
}

adviceSelect?.addEventListener("change", updateSizeFields);
updateSizeFields();
updateColourPanels();

document.querySelectorAll(".quote-form.detailed > fieldset").forEach((fieldset, index) => {
  const legend = fieldset.querySelector("legend");
  if (!legend) return;

  const title = legend.textContent.trim();
  const button = document.createElement("button");
  button.className = "fieldset-toggle";
  button.type = "button";
  button.textContent = title;
  button.setAttribute("aria-expanded", index === 0 ? "true" : "false");

  legend.textContent = "";
  legend.appendChild(button);
  fieldset.classList.add("is-collapsible");

  if (index !== 0) {
    fieldset.classList.add("is-collapsed");
  }

  button.addEventListener("click", () => {
    const isCollapsed = fieldset.classList.toggle("is-collapsed");
    button.setAttribute("aria-expanded", String(!isCollapsed));
  });
});

const projectFilterButtons = document.querySelectorAll("[data-project-filter]");
const projectCards = document.querySelectorAll("[data-project-category]");

projectFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.projectFilter;

    projectFilterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.projectCategory === filter;
      card.hidden = !shouldShow;
    });
  });
});

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  const note = form.querySelector(".form-note");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (note) {
      const address = form.querySelector('input[name="address"]')?.value;
      const suburbName = form.querySelector('input[name="suburb_name"]')?.value;
      const postcode = form.querySelector('input[name="postcode"]')?.value;
      const locationText = address ? ` Project address saved as ${address}${suburbName && postcode ? ` (${suburbName} ${postcode})` : ""}.` : "";
      note.textContent = `Thanks. This demo captured the enquiry locally; connect email, CRM or Google Sheets before launch.${locationText}`;
    }
    form.reset();
    updateSelectedColour("");
  });
});

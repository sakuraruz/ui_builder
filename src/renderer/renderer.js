const paletteItems = [
  { type: "button", icon: "B", title: "Кнопка", hint: "Нативная button" },
  { type: "text", icon: "T", title: "Текст", hint: "Поддерживает переносы" },
  { type: "image", icon: "I", title: "Изображение", hint: "Плейсхолдер с alt" },
  { type: "container", icon: "[]", title: "Контейнер", hint: "Можно вкладывать элементы" },
  { type: "form", icon: "F", title: "Форма", hint: "Строки ввода" },
  { type: "input", icon: "_", title: "Поле ввода", hint: "Однострочный input" }
];

const defaults = {
  button: {
    width: 140,
    height: 44,
    text: "Кнопка",
    style: {
      color: "#ffffff",
      backgroundColor: "#007f75",
      borderColor: "#007f75",
      borderWidth: 1,
      fontFamily: "Arial",
      fontSize: 15,
      fontWeight: "700",
      textAlign: "center",
      borderRadius: 8,
      opacity: 100,
      boxShadow: "small",
      textShadow: "none",
      gradient: "none",
      padding: { top: 10, right: 14, bottom: 10, left: 14 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    }
  },
  text: {
    width: 240,
    height: 72,
    text: "Текстовый блок\nНовая строка",
    style: {
      color: "#1f2523",
      backgroundColor: "#ffffff",
      borderColor: "#ffffff",
      borderWidth: 0,
      fontFamily: "Georgia",
      fontSize: 22,
      fontWeight: "700",
      textAlign: "left",
      borderRadius: 0,
      opacity: 100,
      boxShadow: "none",
      textShadow: "none",
      gradient: "none",
      padding: { top: 4, right: 4, bottom: 4, left: 4 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    }
  },
  image: {
    width: 220,
    height: 140,
    text: "Изображение",
    alt: "Описание изображения",
    src: "",
    style: {
      color: "#78817b",
      backgroundColor: "#f4f6f2",
      borderColor: "#b8c1bd",
      borderWidth: 1,
      fontFamily: "Arial",
      fontSize: 14,
      fontWeight: "400",
      textAlign: "center",
      borderRadius: 8,
      opacity: 100,
      boxShadow: "none",
      textShadow: "none",
      gradient: "none",
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    }
  },
  container: {
    width: 320,
    height: 210,
    text: "Контейнер",
    style: {
      color: "#69726d",
      backgroundColor: "#f7f8f5",
      borderColor: "#b9c2b4",
      borderWidth: 1,
      fontFamily: "Arial",
      fontSize: 14,
      fontWeight: "600",
      textAlign: "left",
      borderRadius: 8,
      opacity: 100,
      boxShadow: "none",
      textShadow: "none",
      gradient: "none",
      padding: { top: 14, right: 14, bottom: 14, left: 14 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    }
  },
  form: {
    width: 320,
    height: 260,
    text: "Форма",
    formFields: ["Имя", "Email", "Сообщение"],
    submitButton: {
      text: "Отправить форму",
      width: 180,
      height: 40,
      style: {
        color: "#ffffff",
        backgroundColor: "#007f75",
        borderColor: "#007f75",
        borderWidth: 1,
        fontFamily: "Arial",
        fontSize: 14,
        fontWeight: "700",
        textAlign: "center",
        borderRadius: 8,
        opacity: 100,
        boxShadow: "small",
        textShadow: "none",
        gradient: "none",
        padding: { top: 9, right: 14, bottom: 9, left: 14 },
        margin: { top: 10, right: 0, bottom: 0, left: 0 }
      }
    },
    style: {
      color: "#1f2523",
      backgroundColor: "#ffffff",
      borderColor: "#d8ddd5",
      borderWidth: 1,
      fontFamily: "Arial",
      fontSize: 16,
      fontWeight: "700",
      textAlign: "left",
      borderRadius: 8,
      opacity: 100,
      boxShadow: "small",
      textShadow: "none",
      gradient: "none",
      padding: { top: 18, right: 18, bottom: 18, left: 18 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    }
  },
  input: {
    width: 220,
    height: 42,
    text: "Введите текст",
    style: {
      color: "#1f2523",
      backgroundColor: "#ffffff",
      borderColor: "#b9c2b4",
      borderWidth: 1,
      fontFamily: "Arial",
      fontSize: 14,
      fontWeight: "400",
      textAlign: "left",
      borderRadius: 6,
      opacity: 100,
      boxShadow: "none",
      textShadow: "none",
      gradient: "none",
      padding: { top: 8, right: 12, bottom: 8, left: 12 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    }
  }
};

const shadowMap = {
  none: "none",
  small: "0 4px 12px rgba(31, 37, 35, 0.12)",
  medium: "0 10px 24px rgba(31, 37, 35, 0.14)",
  large: "0 18px 42px rgba(31, 37, 35, 0.18)"
};

const textShadowMap = {
  none: "none",
  soft: "0 1px 2px rgba(31, 37, 35, 0.22)",
  strong: "0 2px 4px rgba(31, 37, 35, 0.36)"
};

const gradientMap = {
  none: "",
  teal: "linear-gradient(135deg, #007f75, #64b6ac)",
  coral: "linear-gradient(135deg, #e86846, #f3aa68)",
  ink: "linear-gradient(135deg, #202624, #5d6862)"
};

const formLayout = {
  titleHeight: 22,
  fieldHeight: 34,
  fieldGap: 10,
  submitGap: 10,
  minWidth: 240
};

const state = {
  name: "Новый проект.fld",
  canvas: { width: 1200, height: 800 },
  elements: [],
  selectedIds: [],
  zoom: 100,
  grid: true,
  activeTab: "style"
};

const dom = {
  projectName: document.querySelector("#projectName"),
  paletteList: document.querySelector("#paletteList"),
  canvas: document.querySelector("#canvas"),
  canvasScale: document.querySelector("#canvasScale"),
  emptyState: document.querySelector("#emptyState"),
  zoomRange: document.querySelector("#zoomRange"),
  zoomValue: document.querySelector("#zoomValue"),
  gridToggle: document.querySelector("#gridToggle"),
  selectionCount: document.querySelector("#selectionCount"),
  fileInput: document.querySelector("#projectFileInput"),
  stylePanel: document.querySelector("#stylePanel"),
  geometryPanel: document.querySelector("#geometryPanel"),
  advancedPanel: document.querySelector("#advancedPanel")
};

let pointerMode = null;
let selectionBox = null;
let currentInspectorTargetIds = "";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createId(prefix = "el") {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function snap(value) {
  return state.grid ? Math.round(value / 10) * 10 : Math.round(value);
}

function normalizeParentId(parentId) {
  return parentId || null;
}

function findElement(id) {
  return state.elements.find((element) => element.id === id) || null;
}

function getChildren(parentId = null) {
  const normalized = normalizeParentId(parentId);
  return state.elements.filter((element) => normalizeParentId(element.parentId) === normalized);
}

function getSelectedElements() {
  return state.selectedIds.map(findElement).filter(Boolean);
}

function getPrimaryElement() {
  return getSelectedElements()[0] || null;
}

function getDescendantIds(elementId) {
  const ids = [];
  for (const child of getChildren(elementId)) {
    ids.push(child.id, ...getDescendantIds(child.id));
  }
  return ids;
}

function getElementDepth(element) {
  let depth = 1;
  let parent = findElement(element.parentId);
  while (parent) {
    depth += 1;
    parent = findElement(parent.parentId);
  }
  return depth;
}

function createElement(type, x = 60, y = 60, parentId = null) {
  const base = clone(defaults[type]);
  return {
    id: createId(type),
    type,
    parentId,
    x: snap(x),
    y: snap(y),
    width: base.width,
    height: base.height,
    text: base.text,
    alt: base.alt || "",
    src: base.src || "",
    href: "",
    classes: "",
    formFields: base.formFields || [],
    submitButton: base.submitButton || null,
    style: base.style
  };
}

function normalizeElement(element) {
  const fallback = defaults[element.type] || defaults.text;
  const normalized = {
    ...createElement(element.type || "text"),
    ...element,
    parentId: element.parentId || null,
    style: {
      ...clone(fallback.style),
      ...(element.style || {}),
      padding: { ...fallback.style.padding, ...(element.style?.padding || {}) },
      margin: { ...fallback.style.margin, ...(element.style?.margin || {}) }
    }
  };

  if (normalized.type === "form" && !Array.isArray(normalized.formFields)) {
    normalized.formFields = clone(defaults.form.formFields);
  }
  if (normalized.type === "form") {
    normalized.submitButton = normalizeSubmitButton(normalized.submitButton);
  }

  return normalized;
}

function normalizeSubmitButton(submitButton = {}) {
  const fallback = defaults.form.submitButton;
  return {
    ...clone(fallback),
    ...submitButton,
    style: {
      ...clone(fallback.style),
      ...(submitButton.style || {}),
      padding: { ...fallback.style.padding, ...(submitButton.style?.padding || {}) },
      margin: { ...fallback.style.margin, ...(submitButton.style?.margin || {}) }
    }
  };
}

function renderPalette() {
  dom.paletteList.innerHTML = paletteItems
    .map(
      (item) => `
        <button class="palette-item" type="button" draggable="true" data-type="${item.type}">
          <span class="palette-icon" aria-hidden="true">${item.icon}</span>
          <span>
            <strong>${item.title}</strong>
            <small>${item.hint}</small>
          </span>
        </button>
      `
    )
    .join("");
}

function applyVisualStyle(node, element) {
  const style = element.style;
  node.style.color = style.color;
  node.style.backgroundColor = style.gradient === "none" ? style.backgroundColor : "transparent";
  node.style.backgroundImage = gradientMap[style.gradient] || "";
  node.style.borderColor = style.borderColor;
  node.style.borderStyle = style.borderWidth > 0 ? "solid" : "none";
  node.style.borderWidth = `${style.borderWidth}px`;
  node.style.borderRadius = `${style.borderRadius}px`;
  node.style.fontFamily = style.fontFamily;
  node.style.fontSize = `${style.fontSize}px`;
  node.style.fontWeight = style.fontWeight;
  node.style.textAlign = style.textAlign;
  node.style.opacity = `${style.opacity / 100}`;
  node.style.boxShadow = shadowMap[style.boxShadow] || "none";
  node.style.textShadow = textShadowMap[style.textShadow] || "none";
  node.style.padding = `${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px`;
}

function applyCanvasLayoutStyle(node, element) {
  const margin = element.style.margin;
  node.style.margin = `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`;
}

function elementMarkup(element) {
  if (element.type === "button") {
    return `<button class="element-content" type="button">${escapeHtml(element.text)}</button>`;
  }

  if (element.type === "image") {
    if (element.src) {
      return `<img class="element-content" src="${escapeAttr(element.src)}" alt="${escapeAttr(element.alt)}" />`;
    }
    return `<div class="element-content element-placeholder">${escapeHtml(element.alt || element.text)}</div>`;
  }

  if (element.type === "input") {
    return `<div class="element-content">${escapeHtml(element.text)}</div>`;
  }

  if (element.type === "form") {
    const submitStyle = inlineStyleFromStyle(element.submitButton.style, {
      width: `${element.submitButton.width}px`,
      height: `${element.submitButton.height}px`
    });
    return `
      <div class="element-content form-preview">
        <strong class="form-title">${escapeHtml(element.text)}</strong>
        ${element.formFields.map((field) => `<span class="form-row-preview">${escapeHtml(field)}</span>`).join("")}
        <button class="form-submit-preview" type="button" style="${escapeAttr(submitStyle)}">${escapeHtml(element.submitButton.text)}</button>
      </div>
    `;
  }

  return `<div class="element-content">${escapeHtml(element.text)}</div>`;
}

function renderCanvas(options = {}) {
  dom.projectName.textContent = state.name;
  dom.canvas.style.width = `${state.canvas.width}px`;
  dom.canvas.style.height = `${state.canvas.height}px`;
  dom.canvas.classList.toggle("has-grid", state.grid);
  dom.emptyState.hidden = state.elements.length > 0;

  dom.canvas.querySelectorAll(".canvas-element").forEach((node) => node.remove());
  getChildren(null).forEach((element) => renderElement(element, dom.canvas));

  dom.canvasScale.style.transform = `scale(${state.zoom / 100})`;
  dom.zoomRange.value = String(state.zoom);
  dom.zoomValue.textContent = `${state.zoom}%`;
  dom.gridToggle.checked = state.grid;

  if (!options.skipInspector) {
    renderInspector();
  }
}

function renderElement(element, parentNode) {
  const node = document.createElement("div");
  node.className = `canvas-element element-${element.type}`;
  node.dataset.id = element.id;
  node.style.left = `${element.x}px`;
  node.style.top = `${element.y}px`;
  node.style.width = `${element.width}px`;
  node.style.height = `${element.height}px`;
  applyCanvasLayoutStyle(node, element);
  node.innerHTML = elementMarkup(element);

  const content = node.querySelector(".element-content");
  applyVisualStyle(content, element);

  if (state.selectedIds.includes(element.id)) {
    node.classList.add(state.selectedIds.length > 1 ? "is-multi-selected" : "is-selected");
    if (state.selectedIds.length === 1) {
      node.insertAdjacentHTML(
        "beforeend",
        `<span class="resize-handle" data-handle="nw"></span>
         <span class="resize-handle" data-handle="ne"></span>
         <span class="resize-handle" data-handle="sw"></span>
         <span class="resize-handle" data-handle="se"></span>`
      );
    }
  }

  parentNode.appendChild(node);
  getChildren(element.id).forEach((child) => renderElement(child, node));
}

function renderInspector() {
  const selected = getSelectedElements();
  dom.selectionCount.textContent =
    selected.length === 0 ? "Нет выбора" : selected.length === 1 ? "1 элемент" : `${selected.length} элементов`;

  if (selected.length === 0) {
    currentInspectorTargetIds = "";
    const empty = `<div class="empty-inspector">Выберите элемент или протяните рамку по холсту, чтобы редактировать свойства.</div>`;
    dom.stylePanel.innerHTML = empty;
    dom.geometryPanel.innerHTML = empty;
    dom.advancedPanel.innerHTML = empty;
    return;
  }

  const element = selected[0];
  const style = element.style;
  currentInspectorTargetIds = selected.map((selectedElement) => selectedElement.id).join(",");
  dom.stylePanel.innerHTML = `
    <section class="field-group">
      <h3>Цвета</h3>
      ${field("Цвет текста", "color", style.color, "color", "style.color")}
      ${field("Фон", "background", style.backgroundColor, "color", "style.backgroundColor")}
      ${field("Граница", "border", style.borderColor, "color", "style.borderColor")}
      ${selectField("Градиент", "style.gradient", style.gradient, [
        ["none", "Нет"],
        ["teal", "Бирюзовый"],
        ["coral", "Коралловый"],
        ["ink", "Графит"]
      ])}
    </section>
    <section class="field-group">
      <h3>Типографика</h3>
      ${selectField("Шрифт", "style.fontFamily", style.fontFamily, [
        ["Arial", "Arial"],
        ["Georgia", "Georgia"],
        ["Verdana", "Verdana"],
        ["Courier New", "Courier New"]
      ])}
      ${field("Размер", "fontSize", style.fontSize, "number", "style.fontSize", 8, 96)}
      ${selectField("Жирность", "style.fontWeight", style.fontWeight, [
        ["400", "Обычная"],
        ["600", "Полужирная"],
        ["700", "Жирная"],
        ["800", "Очень жирная"]
      ])}
      ${selectField("Выравнивание", "style.textAlign", style.textAlign, [
        ["left", "Слева"],
        ["center", "По центру"],
        ["right", "Справа"]
      ])}
    </section>
    <section class="field-group">
      <h3>Эффекты</h3>
      ${field("Скругление", "radius", style.borderRadius, "number", "style.borderRadius", 0, 80)}
      ${field("Граница, px", "borderWidth", style.borderWidth, "number", "style.borderWidth", 0, 12)}
      ${field("Прозрачность", "opacity", style.opacity, "range", "style.opacity", 10, 100)}
      ${selectField("Тень блока", "style.boxShadow", style.boxShadow, [
        ["none", "Нет"],
        ["small", "Малая"],
        ["medium", "Средняя"],
        ["large", "Большая"]
      ])}
      ${selectField("Тень текста", "style.textShadow", style.textShadow, [
        ["none", "Нет"],
        ["soft", "Мягкая"],
        ["strong", "Сильная"]
      ])}
    </section>
  `;

  dom.geometryPanel.innerHTML = `
    <section class="field-group">
      <h3>Позиция и размер</h3>
      <div class="pair-grid">
        ${compactField("X", "x", element.x, 0, getBounds(element).width)}
        ${compactField("Y", "y", element.y, 0, getBounds(element).height)}
        ${compactField("W", "width", element.width, getMinSize(element).width, getBounds(element).width)}
        ${compactField("H", "height", element.height, getMinSize(element).height, getBounds(element).height)}
      </div>
    </section>
    <section class="field-group">
      <h3>Padding</h3>
      <div class="quad-grid">
        ${compactField("Top", "style.padding.top", style.padding.top, 0, 200)}
        ${compactField("Right", "style.padding.right", style.padding.right, 0, 200)}
        ${compactField("Bottom", "style.padding.bottom", style.padding.bottom, 0, 200)}
        ${compactField("Left", "style.padding.left", style.padding.left, 0, 200)}
      </div>
    </section>
    <section class="field-group">
      <h3>Margin</h3>
      <div class="quad-grid">
        ${compactField("Top", "style.margin.top", style.margin.top, 0, 200)}
        ${compactField("Right", "style.margin.right", style.margin.right, 0, 200)}
        ${compactField("Bottom", "style.margin.bottom", style.margin.bottom, 0, 200)}
        ${compactField("Left", "style.margin.left", style.margin.left, 0, 200)}
      </div>
    </section>
  `;

  dom.advancedPanel.innerHTML = `
    <section class="field-group">
      <h3>Контент</h3>
      ${textareaField("Текст", "text", element.text)}
      ${field("ID элемента", "id", element.id, "text", "id")}
      ${field("CSS классы", "classes", element.classes, "text", "classes")}
      ${element.type === "image" ? field("Alt текст", "alt", element.alt, "text", "alt") : ""}
      ${element.type === "image" ? field("URL изображения", "src", element.src || "", "text", "src") : ""}
      ${element.type === "button" ? field("Ссылка", "href", element.href, "text", "href") : ""}
    </section>
    ${element.type === "form" ? formFieldsPanel(element) : ""}
    <section class="field-group">
      <h3>Холст</h3>
      ${field("Ширина", "canvasWidth", state.canvas.width, "number", "canvas.width", 800, 5000)}
      ${field("Высота", "canvasHeight", state.canvas.height, "number", "canvas.height", 600, 5000)}
    </section>
  `;
}

function formFieldsPanel(element) {
  return `
    <section class="field-group">
      <h3>Строки ввода</h3>
      <div class="form-fields-editor">
        ${element.formFields
          .map(
            (fieldValue, index) => `
              <div class="form-field-row">
                <input type="text" value="${escapeAttr(fieldValue)}" data-prop="formFields.${index}" data-target-ids="${escapeAttr(currentInspectorTargetIds)}" />
                <button type="button" data-form-action="remove" data-index="${index}" data-target-id="${escapeAttr(element.id)}" title="Удалить строку">-</button>
              </div>
            `
          )
          .join("")}
      </div>
      <button class="inline-action" type="button" data-form-action="add" data-target-id="${escapeAttr(element.id)}">Добавить строку ввода</button>
    </section>
    <section class="field-group">
      <h3>Кнопка отправки</h3>
      ${field("Текст", "submitText", element.submitButton.text, "text", "submitButton.text")}
      <div class="pair-grid">
        ${compactField("W", "submitButton.width", element.submitButton.width, 80, element.width)}
        ${compactField("H", "submitButton.height", element.submitButton.height, 28, 120)}
      </div>
      ${field("Цвет текста", "submitColor", element.submitButton.style.color, "color", "submitButton.style.color")}
      ${field("Фон", "submitBg", element.submitButton.style.backgroundColor, "color", "submitButton.style.backgroundColor")}
      ${field("Граница", "submitBorder", element.submitButton.style.borderColor, "color", "submitButton.style.borderColor")}
      ${selectField("Градиент", "submitButton.style.gradient", element.submitButton.style.gradient, [
        ["none", "Нет"],
        ["teal", "Бирюзовый"],
        ["coral", "Коралловый"],
        ["ink", "Графит"]
      ])}
      ${selectField("Шрифт", "submitButton.style.fontFamily", element.submitButton.style.fontFamily, [
        ["Arial", "Arial"],
        ["Georgia", "Georgia"],
        ["Verdana", "Verdana"],
        ["Courier New", "Courier New"]
      ])}
      ${field("Размер", "submitFontSize", element.submitButton.style.fontSize, "number", "submitButton.style.fontSize", 8, 48)}
      ${selectField("Жирность", "submitButton.style.fontWeight", element.submitButton.style.fontWeight, [
        ["400", "Обычная"],
        ["600", "Полужирная"],
        ["700", "Жирная"],
        ["800", "Очень жирная"]
      ])}
      ${field("Скругление", "submitRadius", element.submitButton.style.borderRadius, "number", "submitButton.style.borderRadius", 0, 60)}
      ${field("Граница, px", "submitBorderWidth", element.submitButton.style.borderWidth, "number", "submitButton.style.borderWidth", 0, 12)}
      ${selectField("Тень", "submitButton.style.boxShadow", element.submitButton.style.boxShadow, [
        ["none", "Нет"],
        ["small", "Малая"],
        ["medium", "Средняя"],
        ["large", "Большая"]
      ])}
    </section>
  `;
}

function field(label, name, value, type, prop, min = "", max = "") {
  const targetAttr = currentInspectorTargetIds ? ` data-target-ids="${escapeAttr(currentInspectorTargetIds)}"` : "";
  return `
    <div class="field-row">
      <label for="${name}">${label}</label>
      <input id="${name}" type="${type}" value="${escapeAttr(value)}" data-prop="${prop}"${targetAttr} ${min !== "" ? `min="${min}"` : ""} ${max !== "" ? `max="${max}"` : ""} />
    </div>
  `;
}

function textareaField(label, prop, value) {
  const targetAttr = currentInspectorTargetIds ? ` data-target-ids="${escapeAttr(currentInspectorTargetIds)}"` : "";
  return `
    <div class="field-row">
      <label for="${prop}">${label}</label>
      <textarea id="${prop}" data-prop="${prop}"${targetAttr}>${escapeHtml(value)}</textarea>
    </div>
  `;
}

function selectField(label, prop, value, options) {
  const targetAttr = currentInspectorTargetIds ? ` data-target-ids="${escapeAttr(currentInspectorTargetIds)}"` : "";
  return `
    <div class="field-row">
      <label>${label}</label>
      <select data-prop="${prop}"${targetAttr}>
        ${options.map(([optionValue, title]) => `<option value="${optionValue}" ${optionValue === value ? "selected" : ""}>${title}</option>`).join("")}
      </select>
    </div>
  `;
}

function compactField(label, prop, value, min, max) {
  const targetAttr = currentInspectorTargetIds ? ` data-target-ids="${escapeAttr(currentInspectorTargetIds)}"` : "";
  return `
    <label class="compact-field">
      <span>${label}</span>
      <input type="number" value="${escapeAttr(value)}" data-prop="${prop}"${targetAttr} min="${min}" max="${max}" />
    </label>
  `;
}

function setByPath(target, path, rawValue) {
  const keys = path.split(".");
  let pointer = target;
  for (let index = 0; index < keys.length - 1; index += 1) {
    pointer = pointer[keys[index]];
  }
  const last = keys[keys.length - 1];
  const current = pointer[last];
  pointer[last] = typeof current === "number" ? Number(rawValue) : rawValue;
}

function getTargetElementsFromControl(control) {
  const rawIds = control.dataset.targetIds;
  if (rawIds === undefined) {
    return getSelectedElements();
  }
  const ids = rawIds
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  return ids.map(findElement).filter(Boolean);
}

function handlePropertyInput(event) {
  const prop = event.target.dataset.prop;
  if (!prop) {
    return;
  }

  const value = event.target.value;
  if (prop.startsWith("canvas.")) {
    setByPath(state, prop, value);
    state.canvas.width = clamp(Number(state.canvas.width), 800, 5000);
    state.canvas.height = clamp(Number(state.canvas.height), 600, 5000);
    renderCanvas({ skipInspector: true });
    return;
  }

  const selected = getTargetElementsFromControl(event.target);
  if (selected.length === 0) {
    return;
  }

  if (prop === "id") {
    const previousId = selected[0].id;
    selected[0].id = value.trim() || selected[0].id;
    state.selectedIds = state.selectedIds.map((id) => (id === previousId ? selected[0].id : id));
    updateInspectorTargetIds(previousId, selected[0].id);
    for (const element of state.elements) {
      if (element.parentId === previousId) {
        element.parentId = selected[0].id;
      }
    }
  } else if (["text", "alt", "href", "classes", "src"].includes(prop) || prop.startsWith("formFields.") || prop.startsWith("submitButton.")) {
    setByPath(selected[0], prop, value);
    normalizeElementConstraints(selected[0]);
  } else if (["x", "y", "width", "height"].includes(prop)) {
    selected[0][prop] = Number(value);
    keepElementInBounds(selected[0]);
  } else {
    for (const element of selected) {
      setByPath(element, prop, value);
      normalizeElementConstraints(element);
    }
  }

  renderCanvas({ skipInspector: true });
}

function syncLiveGeometryControls() {
  const element = getPrimaryElement();
  if (!element) {
    return;
  }

  const liveProps = {
    x: element.x,
    y: element.y,
    width: element.width,
    height: element.height
  };

  document.querySelectorAll("[data-prop]").forEach((control) => {
    if (Object.hasOwn(liveProps, control.dataset.prop) && control.value !== String(liveProps[control.dataset.prop])) {
      control.value = liveProps[control.dataset.prop];
    }
  });
}

function updateInspectorTargetIds(previousId, nextId) {
  document.querySelectorAll("[data-target-ids]").forEach((control) => {
    const ids = control.dataset.targetIds
      .split(",")
      .map((id) => (id === previousId ? nextId : id));
    control.dataset.targetIds = ids.join(",");
  });
  document.querySelectorAll("[data-target-id]").forEach((control) => {
    if (control.dataset.targetId === previousId) {
      control.dataset.targetId = nextId;
    }
  });
  currentInspectorTargetIds = currentInspectorTargetIds
    .split(",")
    .map((id) => (id === previousId ? nextId : id))
    .join(",");
}

function handleInspectorClick(event) {
  const action = event.target.dataset.formAction;
  if (!action) {
    return;
  }

  const element = findElement(event.target.dataset.targetId) || getPrimaryElement();
  if (!element || element.type !== "form") {
    return;
  }

  if (action === "add") {
    element.formFields.push(`Поле ${element.formFields.length + 1}`);
  }

  if (action === "remove") {
    element.formFields.splice(Number(event.target.dataset.index), 1);
  }

  normalizeElementConstraints(element);
  renderCanvas();
}

function getBounds(element) {
  const parent = findElement(element.parentId);
  return parent ? { width: parent.width, height: parent.height } : state.canvas;
}

function keepElementInBounds(element) {
  const bounds = getBounds(element);
  const minSize = getMinSize(element);
  element.width = clamp(Number(element.width), minSize.width, bounds.width);
  element.height = clamp(Number(element.height), minSize.height, bounds.height);
  element.x = clamp(Number(element.x), 0, bounds.width - element.width);
  element.y = clamp(Number(element.y), 0, bounds.height - element.height);
}

function normalizeElementConstraints(element) {
  if (element.type === "form") {
    element.submitButton.width = clamp(Number(element.submitButton.width), 80, Math.max(80, element.width - element.style.padding.left - element.style.padding.right));
    element.submitButton.height = clamp(Number(element.submitButton.height), 28, 120);
  }
  keepElementInBounds(element);
}

function getMinSize(element) {
  if (element.type !== "form") {
    return { width: 20, height: 20 };
  }

  const style = element.style;
  const submit = element.submitButton;
  const horizontalPadding = style.padding.left + style.padding.right;
  const verticalPadding = style.padding.top + style.padding.bottom;
  const fieldCount = element.formFields.length;
  const fieldsHeight = fieldCount * formLayout.fieldHeight + fieldCount * formLayout.fieldGap;
  const submitHeight = submit.height + submit.style.margin.top + submit.style.margin.bottom;
  const minWidth = Math.max(formLayout.minWidth, submit.width + horizontalPadding);
  const minHeight = verticalPadding + formLayout.titleHeight + fieldsHeight + submitHeight;

  return {
    width: Math.ceil(minWidth),
    height: Math.ceil(minHeight)
  };
}

function handleToolbar(event) {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) {
    return;
  }

  if (action === "new") {
    state.name = "Новый проект.fld";
    state.elements = [];
    state.selectedIds = [];
    renderCanvas();
  }

  if (action === "open") {
    dom.fileInput.click();
  }

  if (action === "save") {
    download(`${trimExtension(state.name)}.fld`, JSON.stringify(serializeProject(), null, 2), "application/json");
  }

  if (action === "save-as") {
    const fileName = window.prompt("Имя файла проекта", trimExtension(state.name));
    if (fileName) {
      state.name = `${trimExtension(fileName)}.fld`;
      download(state.name, JSON.stringify(serializeProject(), null, 2), "application/json");
      renderCanvas();
    }
  }

  if (action === "export") {
    exportProjectFolder();
  }

  if (action === "preview") {
    const previewHtml = exportPreviewHtml();
    renderCanvas();
    const preview = window.open("", "_blank");
    if (preview) {
      preview.document.write(previewHtml);
      preview.document.close();
    }
  }

  if (action === "delete") {
    deleteSelected();
  }

  if (action.startsWith("align-")) {
    alignSelected(action.replace("align-", ""));
  }

  if (action.startsWith("layer-")) {
    moveLayer(action.replace("layer-", ""));
  }
}

function alignSelected(mode) {
  const primary = getPrimaryElement();
  if (!primary) {
    return;
  }

  const selected = getSelectedElements().filter((element) => normalizeParentId(element.parentId) === normalizeParentId(primary.parentId));
  if (selected.length < 2) {
    return;
  }

  const left = Math.min(...selected.map((element) => element.x));
  const right = Math.max(...selected.map((element) => element.x + element.width));
  const center = (left + right) / 2;

  for (const element of selected) {
    if (mode === "left") {
      element.x = left;
    }
    if (mode === "center") {
      element.x = snap(center - element.width / 2);
    }
    if (mode === "right") {
      element.x = right - element.width;
    }
    keepElementInBounds(element);
  }
  renderCanvas();
}

function moveLayer(mode) {
  const element = getPrimaryElement();
  if (!element) {
    return;
  }

  const siblingIds = state.elements
    .filter((candidate) => normalizeParentId(candidate.parentId) === normalizeParentId(element.parentId))
    .map((candidate) => candidate.id);
  const siblingIndex = siblingIds.indexOf(element.id);
  if (siblingIndex === -1) {
    return;
  }

  if (mode === "forward" && siblingIndex < siblingIds.length - 1) {
    swapById(element.id, siblingIds[siblingIndex + 1]);
  }

  if (mode === "back" && siblingIndex > 0) {
    swapById(element.id, siblingIds[siblingIndex - 1]);
  }

  if (mode === "top") {
    moveElementNearSibling(element.id, siblingIds[siblingIds.length - 1], "after");
  }

  if (mode === "bottom") {
    moveElementNearSibling(element.id, siblingIds[0], "before");
  }

  renderCanvas();
}

function swapById(firstId, secondId) {
  const firstIndex = state.elements.findIndex((element) => element.id === firstId);
  const secondIndex = state.elements.findIndex((element) => element.id === secondId);
  if (firstIndex === -1 || secondIndex === -1) {
    return;
  }
  [state.elements[firstIndex], state.elements[secondIndex]] = [state.elements[secondIndex], state.elements[firstIndex]];
}

function moveElementNearSibling(elementId, siblingId, placement) {
  if (elementId === siblingId) {
    return;
  }
  const elementIndex = state.elements.findIndex((element) => element.id === elementId);
  const siblingIndex = state.elements.findIndex((element) => element.id === siblingId);
  if (elementIndex === -1 || siblingIndex === -1) {
    return;
  }
  const [element] = state.elements.splice(elementIndex, 1);
  const targetIndex = state.elements.findIndex((candidate) => candidate.id === siblingId);
  state.elements.splice(placement === "after" ? targetIndex + 1 : targetIndex, 0, element);
}

function deleteSelected() {
  if (state.selectedIds.length === 0) {
    return;
  }
  const idsToDelete = new Set(state.selectedIds.flatMap((id) => [id, ...getDescendantIds(id)]));
  state.elements = state.elements.filter((element) => !idsToDelete.has(element.id));
  state.selectedIds = [];
  renderCanvas();
}

function handleCanvasPointerDown(event) {
  const handle = event.target.closest(".resize-handle");
  const node = event.target.closest(".canvas-element");
  const startPoint = getCanvasPoint(event);

  if (!node) {
    pointerMode = {
      type: "select",
      startPoint,
      currentPoint: startPoint,
      keepExisting: event.shiftKey,
      initialSelectedIds: [...state.selectedIds]
    };
    if (!event.shiftKey) {
      state.selectedIds = [];
    }
    updateSelectionBox();
    event.preventDefault();
    return;
  }

  const id = node.dataset.id;
  if (event.shiftKey) {
    state.selectedIds = state.selectedIds.includes(id)
      ? state.selectedIds.filter((selectedId) => selectedId !== id)
      : [...state.selectedIds, id];
  } else if (!state.selectedIds.includes(id)) {
    state.selectedIds = [id];
  }

  const selected = getSelectedElements();
  pointerMode = {
    type: handle ? "resize" : "move",
    handle: handle?.dataset.handle || "",
    startPoint,
    startElements: selected.map((element) => ({ id: element.id, x: element.x, y: element.y, width: element.width, height: element.height }))
  };

  event.preventDefault();
  renderCanvas();
}

function handlePointerMove(event) {
  if (!pointerMode) {
    return;
  }

  const point = getCanvasPoint(event);
  const dx = point.x - pointerMode.startPoint.x;
  const dy = point.y - pointerMode.startPoint.y;

  if (pointerMode.type === "select") {
    pointerMode.currentPoint = point;
    updateSelectionBox();
    updateSelectionFromBox();
    return;
  }

  const selected = getSelectedElements();
  selected.forEach((element) => {
    const start = pointerMode.startElements.find((item) => item.id === element.id);
    if (!start) {
      return;
    }
    if (pointerMode.type === "move") {
      element.x = snap(start.x + dx);
      element.y = snap(start.y + dy);
    } else {
      resizeElement(element, start, dx, dy, pointerMode.handle);
    }
    keepElementInBounds(element);
  });

  renderCanvas({ skipInspector: true });
  syncLiveGeometryControls();
}

function resizeElement(element, start, dx, dy, handle) {
  if (handle.includes("e")) {
    element.width = snap(start.width + dx);
  }
  if (handle.includes("s")) {
    element.height = snap(start.height + dy);
  }
  if (handle.includes("w")) {
    element.x = snap(start.x + dx);
    element.width = snap(start.width - dx);
  }
  if (handle.includes("n")) {
    element.y = snap(start.y + dy);
    element.height = snap(start.height - dy);
  }
  const minSize = getMinSize(element);
  element.width = Math.max(minSize.width, element.width);
  element.height = Math.max(minSize.height, element.height);
}

function handlePointerUp() {
  if (pointerMode?.type === "select") {
    hideSelectionBox();
    renderCanvas();
  }
  pointerMode = null;
}

function updateSelectionBox() {
  if (!selectionBox || !pointerMode || pointerMode.type !== "select") {
    return;
  }

  const rect = rectFromPoints(pointerMode.startPoint, pointerMode.currentPoint);
  selectionBox.hidden = false;
  selectionBox.style.left = `${rect.x}px`;
  selectionBox.style.top = `${rect.y}px`;
  selectionBox.style.width = `${rect.width}px`;
  selectionBox.style.height = `${rect.height}px`;
}

function hideSelectionBox() {
  if (selectionBox) {
    selectionBox.hidden = true;
  }
}

function updateSelectionFromBox() {
  const rect = rectFromPoints(pointerMode.startPoint, pointerMode.currentPoint);
  const selectedIds = state.elements
    .filter((element) => intersects(rect, getAbsoluteRect(element)))
    .map((element) => element.id);

  state.selectedIds = pointerMode.keepExisting
    ? [...new Set([...pointerMode.initialSelectedIds, ...selectedIds])]
    : selectedIds;

  renderCanvas({ skipInspector: true });
  updateSelectionBox();
}

function rectFromPoints(first, second) {
  const x = Math.min(first.x, second.x);
  const y = Math.min(first.y, second.y);
  return {
    x,
    y,
    width: Math.abs(first.x - second.x),
    height: Math.abs(first.y - second.y)
  };
}

function intersects(first, second) {
  return (
    first.x <= second.x + second.width &&
    first.x + first.width >= second.x &&
    first.y <= second.y + second.height &&
    first.y + first.height >= second.y
  );
}

function getCanvasPoint(event) {
  const rect = dom.canvas.getBoundingClientRect();
  const scale = state.zoom / 100;
  return {
    x: (event.clientX - rect.left) / scale,
    y: (event.clientY - rect.top) / scale
  };
}

function getAbsoluteRect(element) {
  let x = element.x;
  let y = element.y;
  let parent = findElement(element.parentId);
  while (parent) {
    x += parent.x;
    y += parent.y;
    parent = findElement(parent.parentId);
  }
  return { x, y, width: element.width, height: element.height };
}

function getTopmostContainerAt(point, type, excludeIds = []) {
  const excluded = new Set(excludeIds);
  return [...state.elements]
    .reverse()
    .find((element) => {
      if (element.type !== "container" || excluded.has(element.id)) {
        return false;
      }
      if (type === "container" && getElementDepth(element) >= 9) {
        return false;
      }
      const rect = getAbsoluteRect(element);
      return point.x >= rect.x && point.x <= rect.x + rect.width && point.y >= rect.y && point.y <= rect.y + rect.height;
    });
}

function toLocalPoint(point, parentId) {
  const parent = findElement(parentId);
  if (!parent) {
    return point;
  }
  const rect = getAbsoluteRect(parent);
  return { x: point.x - rect.x, y: point.y - rect.y };
}

function handleDrop(event) {
  event.preventDefault();
  const type = event.dataTransfer.getData("text/plain");
  if (!defaults[type]) {
    return;
  }

  const point = getCanvasPoint(event);
  const container = getTopmostContainerAt(point, type);
  const localPoint = toLocalPoint(point, container?.id || null);
  const element = createElement(type, localPoint.x, localPoint.y, container?.id || null);
  keepElementInBounds(element);
  state.elements.push(element);
  state.selectedIds = [element.id];
  renderCanvas();
}

function addElementFromPalette(type) {
  const selectedContainer = getSelectedElements().find((element) => element.type === "container");
  const offset = getChildren(selectedContainer?.id || null).length * 18;
  const element = createElement(type, 70 + offset, 70 + offset, selectedContainer?.id || null);
  if (selectedContainer) {
    element.x = snap(20 + offset);
    element.y = snap(42 + offset);
  }
  keepElementInBounds(element);
  state.elements.push(element);
  state.selectedIds = [element.id];
  renderCanvas();
}

function serializeProject() {
  enforceAllConstraints();
  return {
    version: 1,
    name: state.name,
    canvas: state.canvas,
    elements: state.elements
  };
}

function loadProject(project, fileName = "Проект.fld") {
  state.name = project.name || fileName;
  state.canvas = project.canvas || { width: 1200, height: 800 };
  state.elements = Array.isArray(project.elements) ? project.elements.map(normalizeElement) : [];
  state.selectedIds = [];
  renderCanvas();
}

function exportProjectFiles() {
  enforceAllConstraints();
  const css = exportStyles();
  const html = exportHtml();
  return { html, css };
}

function enforceAllConstraints() {
  for (const element of state.elements) {
    normalizeElementConstraints(element);
  }
}

function exportHtml() {
  enforceAllConstraints();
  const html = getChildren(null).map(exportElement).join("\n      ");
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(trimExtension(state.name))}</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main class="page">
      ${html}
    </main>
  </body>
</html>`;
}

function exportPreviewHtml() {
  enforceAllConstraints();
  const html = getChildren(null).map(exportElement).join("\n      ");
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(trimExtension(state.name))}</title>
    <style>${exportStyles()}</style>
  </head>
  <body>
    <main class="page">
      ${html}
    </main>
  </body>
</html>`;
}

function exportStyles() {
  return `* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; background: #f4f6f2; }
.page { position: relative; width: ${state.canvas.width}px; height: ${state.canvas.height}px; margin: 0 auto; background: #fff; }
.form-title { display: block; min-height: ${formLayout.titleHeight}px; line-height: ${formLayout.titleHeight}px; }
.form-row { display: block; width: 100%; height: ${formLayout.fieldHeight}px; margin-top: ${formLayout.fieldGap}px; border: 1px solid #d8ddd5; border-radius: 6px; padding: 8px 10px; font: inherit; font-weight: 400; }
.form-submit { display: inline-grid; place-items: center; cursor: pointer; appearance: none; }
${state.elements.map(exportCss).join("\n")}
${state.elements.filter((element) => element.type === "form").map(exportSubmitCss).join("\n")}`;
}

function exportCss(element) {
  const style = element.style;
  return `
#${cssIdent(element.id)} {
  position: absolute;
  left: ${element.x}px;
  top: ${element.y}px;
  width: ${element.width}px;
  height: ${element.height}px;
  color: ${style.color};
  background: ${style.gradient === "none" ? style.backgroundColor : gradientMap[style.gradient]};
  border: ${style.borderWidth}px solid ${style.borderColor};
  border-radius: ${style.borderRadius}px;
  font-family: ${style.fontFamily}, sans-serif;
  font-size: ${style.fontSize}px;
  font-weight: ${style.fontWeight};
  text-align: ${style.textAlign};
  opacity: ${style.opacity / 100};
  box-shadow: ${shadowMap[style.boxShadow]};
  text-shadow: ${textShadowMap[style.textShadow]};
  padding: ${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px;
  margin: ${style.margin.top}px ${style.margin.right}px ${style.margin.bottom}px ${style.margin.left}px;
  white-space: pre-wrap;
  overflow: hidden;
  ${element.type === "form" ? "display: grid;\n  align-content: start;" : ""}
}`;
}

function exportSubmitCss(element) {
  const style = element.submitButton.style;
  return `
#${cssIdent(element.id)} .form-submit {
  width: ${element.submitButton.width}px;
  height: ${element.submitButton.height}px;
  color: ${style.color};
  background: ${style.gradient === "none" ? style.backgroundColor : gradientMap[style.gradient]};
  border: ${style.borderWidth}px solid ${style.borderColor};
  border-radius: ${style.borderRadius}px;
  font-family: ${style.fontFamily}, sans-serif;
  font-size: ${style.fontSize}px;
  font-weight: ${style.fontWeight};
  text-align: ${style.textAlign};
  opacity: ${style.opacity / 100};
  box-shadow: ${shadowMap[style.boxShadow]};
  text-shadow: ${textShadowMap[style.textShadow]};
  padding: ${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px;
  margin: ${style.margin.top}px ${style.margin.right}px ${style.margin.bottom}px ${style.margin.left}px;
}`;
}

function exportElement(element) {
  const id = escapeAttr(element.id);
  const classes = element.classes ? ` class="${escapeAttr(element.classes)}"` : "";
  const text = escapeHtml(element.text);
  const children = getChildren(element.id).map(exportElement).join("\n        ");

  if (element.type === "button") {
    return `<button id="${id}"${classes} type="button">${text}</button>`;
  }
  if (element.type === "image") {
    if (element.src) {
      return `<img id="${id}"${classes} src="${escapeAttr(element.src)}" alt="${escapeAttr(element.alt)}" />`;
    }
    return `<div id="${id}"${classes} role="img" aria-label="${escapeAttr(element.alt)}">${escapeHtml(element.alt || element.text)}</div>`;
  }
  if (element.type === "input") {
    return `<input id="${id}"${classes} placeholder="${escapeAttr(element.text)}" />`;
  }
  if (element.type === "form") {
    const fields = element.formFields.map((field) => `<input class="form-row" placeholder="${escapeAttr(field)}" />`).join("\n        ");
    return `<form id="${id}"${classes}><strong class="form-title">${text}</strong>\n        ${fields}\n        <button class="form-submit" type="submit">${escapeHtml(element.submitButton.text)}</button>${children ? `\n        ${children}` : ""}</form>`;
  }
  return `<div id="${id}"${classes}>${text}${children ? `\n        ${children}` : ""}</div>`;
}

async function exportProjectFolder() {
  const folderName = `${trimExtension(state.name) || "project"}-export`;
  const files = exportProjectFiles();

  try {
    if (window.builderApi?.exportProject) {
      const result = await window.builderApi.exportProject({ folderName, files });
      if (result?.canceled) {
        return;
      }
      return;
    }

    if (window.showDirectoryPicker) {
      const directory = await window.showDirectoryPicker({ mode: "readwrite" });
      const exportDirectory = await directory.getDirectoryHandle(folderName, { create: true });
      await writeFileToDirectory(exportDirectory, "index.html", files.html);
      await writeFileToDirectory(exportDirectory, "styles.css", files.css);
      return;
    }
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }
    console.error(error);
  }

  download("index.html", files.html, "text/html");
  download("styles.css", files.css, "text/css");
}

async function writeFileToDirectory(directory, fileName, content) {
  const file = await directory.getFileHandle(fileName, { create: true });
  const writable = await file.createWritable();
  await writable.write(content);
  await writable.close();
}

function download(fileName, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function trimExtension(fileName) {
  return fileName.replace(/\.[^.]+$/, "");
}

function cssIdent(value) {
  return String(value).replace(/[^a-zA-Z0-9_-]/g, "-");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#039;");
}

function inlineStyleFromStyle(style, extra = {}) {
  return [
    `color:${style.color}`,
    `background:${style.gradient === "none" ? style.backgroundColor : gradientMap[style.gradient]}`,
    `border:${style.borderWidth}px solid ${style.borderColor}`,
    `border-radius:${style.borderRadius}px`,
    `font-family:${style.fontFamily}, sans-serif`,
    `font-size:${style.fontSize}px`,
    `font-weight:${style.fontWeight}`,
    `text-align:${style.textAlign}`,
    `opacity:${style.opacity / 100}`,
    `box-shadow:${shadowMap[style.boxShadow]}`,
    `text-shadow:${textShadowMap[style.textShadow]}`,
    `padding:${style.padding.top}px ${style.padding.right}px ${style.padding.bottom}px ${style.padding.left}px`,
    `margin:${style.margin.top}px ${style.margin.right}px ${style.margin.bottom}px ${style.margin.left}px`,
    ...Object.entries(extra).map(([key, value]) => `${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}:${value}`)
  ].join(";");
}

function bindEvents() {
  selectionBox = document.createElement("div");
  selectionBox.className = "selection-box";
  selectionBox.hidden = true;
  dom.canvas.appendChild(selectionBox);

  document.addEventListener("click", handleToolbar);
  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointerup", handlePointerUp);
  document.addEventListener("keydown", (event) => {
    if ((event.key === "Delete" || event.key === "Backspace") && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      deleteSelected();
    }
  });

  dom.paletteList.addEventListener("click", (event) => {
    const item = event.target.closest(".palette-item");
    if (item) {
      addElementFromPalette(item.dataset.type);
    }
  });

  dom.paletteList.addEventListener("dragstart", (event) => {
    const item = event.target.closest(".palette-item");
    if (item) {
      event.dataTransfer.setData("text/plain", item.dataset.type);
    }
  });

  dom.canvas.addEventListener("pointerdown", handleCanvasPointerDown);
  dom.canvas.addEventListener("dragover", (event) => event.preventDefault());
  dom.canvas.addEventListener("drop", handleDrop);

  dom.zoomRange.addEventListener("input", (event) => {
    state.zoom = Number(event.target.value);
    renderCanvas();
  });

  dom.gridToggle.addEventListener("change", (event) => {
    state.grid = event.target.checked;
    renderCanvas();
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeTab = tab.dataset.tab;
      document.querySelectorAll(".tab").forEach((node) => node.classList.toggle("is-active", node === tab));
      document
        .querySelectorAll(".property-panel")
        .forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === state.activeTab));
    });
  });

  [dom.stylePanel, dom.geometryPanel, dom.advancedPanel].forEach((panel) => {
    panel.addEventListener("input", handlePropertyInput);
    panel.addEventListener("change", handlePropertyInput);
    panel.addEventListener("click", handleInspectorClick);
  });

  dom.fileInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const text = await file.text();
    loadProject(JSON.parse(text), file.name);
    dom.fileInput.value = "";
  });
}

renderPalette();
bindEvents();
renderCanvas();

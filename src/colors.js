// colors.js - Centralized color palette management

const yoruPalette = {
  // Foreground colors
  fg: {
    default: "#ccd4dcff",
    muted: "#7e8aa5",
    subtle: "#5e667a",
    inactive: "#5c5c72",
    onEmphasis: "#ffffff",
    active: "#dee6fc",
  },

  // Background/Canvas colors
  canvas: {
    default: "#181a23", // Main editor
    subtle: "#243041", // Line highlight.
    inset: "#14161f", // Sidebar, 
    darker: "#0f1118", // Activity bar, title bar
    overlay: "#26293b", // Widgets
    input: "#1a1d27", // Input fields
  },

  // Border colors
  border: {
    default: "#465563",
    muted: "#2d2f49",
    active: "#52546e",
  },

  // Accent colors (yellow/gold)
  accent: {
    fg: "#f9ee98",
    emphasis: "#d6c73d",
    muted: "#f9ee9880",
    subtle: "#f9ee9840",
  },

  // Success colors (green)
  success: {
    fg: "#5ebe86",
    emphasis: "#76c5a4",
    muted: "#5ebe8680",
    subtle: "#1f3834",
    string: "#a6d885",
  },

  // Attention colors (orange/yellow)
  attention: {
    fg: "#e9b76c",
    emphasis: "#cda869",
    muted: "#e9b76c80",
    subtle: "#3b4d66a8",
    find: "#d6c73d",
  },

  // Danger colors (red/pink)
  danger: {
    fg: "#f3495d",
    emphasis: "#ff5370",
    muted: "#d67272",
    subtle: "#352232",
    removed: "#5f283aff",
  },

  // Info/primary colors (blue)
  info: {
    fg: "#92b4df",
    light: "#b0d2ff",
    medium: "#82aaff",
    cyan: "#89ddff",
    hover: "#459bd4",
    badge: "#a6c4e9",
  },

  // Secondary colors (pink/purple)
  secondary: {
    pink: "#fb7da7",
    purple: "#c792ea",
    lightPurple: "#ac92e9",
    darkPurple: "#c5a0f0",
  },

  // Tertiary colors
  tertiary: {
    orange: "#f29e74",
    gold: "#e6bc74",
    yellow: "#ffcb6b",
    teal: "#4ac2d4",
    cyan: "#5ccfe6",
    lightCyan: "#4ac2d4",
  },

  // Syntax highlighting colors
  syntax: {
    comment: "#515e6aff",
    keyword: "#fb7da7",
    storage: "#f9ee98",
    string: "#a6d885",
    number: "#c5a0f0",
    function: "#76c5a4",
    variable: "#b3cae8ff",
    variableBlock: "#76c5a4",
    class: "#fb7da7",
    operator: "#c8a15dff",
    tag: "#fb7da7",
    attribute: "#4ac2d4",
    regex: "#89ddff",
    escape: "#89ddff",
    invalid: "#ff5370",
    punctuation: "#596369",
  },
};

// Light palette (for reference if you want to create a light version)
const lightPalette = {
  fg: {
    default: "#24292f",
    muted: "#57606a",
    subtle: "#6e7781",
    onEmphasis: "#ffffff",
  },
  canvas: {
    default: "#ffffff",
    subtle: "#f6f8fa",
    inset: "#f6f8fa",
    overlay: "#ffffff",
  },
  border: {
    default: "#d0d7de",
    muted: "#d8dee4",
    subtle: "#d0d7de",
  },
  accent: {
    fg: "#0969da",
    emphasis: "#0969da",
    muted: "#ddf4ff",
    subtle: "#ddf4ff",
  },
  success: {
    fg: "#1a7f37",
    emphasis: "#2da44e",
    muted: "#dafbe1",
    subtle: "#dafbe1",
  },
  attention: {
    fg: "#9a6700",
    emphasis: "#bf8700",
    muted: "#fff8c5",
    subtle: "#fff8c5",
  },
  danger: {
    fg: "#d1242f",
    emphasis: "#cf222e",
    muted: "#ffebe9",
    subtle: "#ffebe9",
  },
  syntax: {
    comment: "#6e7781",
    constant: "#0550ae",
    entity: "#8250df",
    storage: "#cf222e",
    string: "#0a3069",
    support: "#953800",
    variable: "#e36209",
  },
};

// Export function to get colors by theme name
function getColors(theme) {
  const palettes = {
    yoru: yoruPalette,
    light: lightPalette,
  };

  return palettes[theme] || palettes.yoru;
}

module.exports = {
  getColors,
  yoruPalette,
  lightPalette,
};

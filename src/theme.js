// theme.js - Main theme generator (Yoru refactored)
const { getColors } = require("./colors");

/**
 * Creates a theme configuration
 * @param {Object} config - Theme configuration
 * @param {string} config.theme - Theme name (yoru, light, etc.)
 * @param {string} config.name - Display name for the theme
 * @param {string} config.type - UI theme type (vs, vs-dark, hc-black)
 */
function getTheme({ theme, name, type = "dark" }) {
  // Get color palette for this theme
  const color = getColors(theme);

  return {
    name: name,
    type: type,

    // ========================================
    // WORKBENCH COLORS (UI Elements)
    // ========================================
    colors: {
      // === General Colors ===
      focusBorder: color.canvas.inset,
      "selection.background": "#5e7aa1a8",
      "window.activeBorder": color.canvas.inset,

      // === Title Bar ===
      "titleBar.activeBackground": color.canvas.darker,
      "titleBar.activeForeground": color.fg.muted,
      "titleBar.inactiveBackground": color.canvas.darker,
      "titleBar.inactiveForeground": color.fg.inactive,

      // === Status Bar ===
      "statusBar.background": color.canvas.darker,
      "statusBar.foreground": color.fg.subtle,
      "statusBar.noFolderBackground": color.canvas.inset,
      "statusBar.noFolderForeground": color.fg.subtle,

      // === Editor ===
      "editorCursor.foreground": color.info.light,
      "editor.background": color.canvas.default,
      "editor.foreground": color.fg.default,
      "editor.symbolHighlightBackground": "#d7d7d7",
      "editor.selectionBackground": color.canvas.subtle,
      "editor.selectionHighlightBackground": color.canvas.subtle,
      "editor.findMatchBorder": color.attention.find,
      "editor.findMatchBackground": color.attention.subtle,
      "editor.findMatchHighlightBackground": "#234475a8",
      "editor.lineHighlightBorder": color.canvas.subtle,
      "editor.lineHighlightBackground": color.canvas.subtle,

      // === Editor Line Numbers ===
      "editorLineNumber.activeForeground": "#4895deff",
      "editorLineNumber.foreground": color.border.default,

      // === Editor Indentation Guides ===
      "editorIndentGuide.background": color.border.muted,
      "editorIndentGuide.activeBackground": color.border.active,

      // === Editor Tabs ===
      "editorGroupHeader.tabsBackground": color.canvas.default,
      "tab.border": color.canvas.default,
      "tab.activeBorder": color.accent.fg,
      "tab.activeBackground": color.canvas.default,
      "tab.inactiveBackground": color.canvas.default,
      "tab.inactiveForeground": "#95a2c0",

      // === Editor Widgets ===
      "editorWidget.background": color.canvas.overlay,
      "editorSuggestWidget.foreground": "#ccd9ff",
      "editorSuggestWidget.background": "#2d3146",
      "editorSuggestWidget.highlightForeground": "#ccd9ff",

      // === Peek View ===
      "peekViewTitle.background": "#363c5e",
      "peekViewTitleDescription.foreground": "#cccccc",
      "peekView.border": "#4d5c6e",
      "peekViewEditor.background": "#202635",
      "peekViewEditorGutter.background": "#202635",
      "peekViewEditor.matchHighlightBackground": "#4f498b",
      "peekViewResult.background": color.canvas.default,
      "peekViewResult.matchHighlightBackground": "#4f498b",
      "peekViewResult.lineForeground": "#d7d7d7",
      "peekViewResult.selectionBackground": "#495b86",

      // === Activity Bar ===
      "activityBar.background": color.canvas.darker,
      "activityBar.foreground": color.info.fg,
      "activityBar.inactiveForeground": "#3e4b64",
      "activityBarBadge.background": color.info.badge,
      "activityBarBadge.foreground": "#000000",

      // === Sidebar ===
      "sideBar.background": color.canvas.inset,
      "sideBar.foreground": color.fg.muted,
      "sideBarTitle.foreground": color.fg.muted,
      "sideBarSectionHeader.background": color.canvas.inset,

      // === Lists ===
      "list.activeSelectionBackground": color.canvas.default,
      "list.activeSelectionForeground": color.fg.active,
      "list.inactiveSelectionBackground": color.canvas.default,
      "list.inactiveSelectionForeground": color.fg.active,
      "list.dropBackground": "#2e3247",
      "list.hoverBackground": color.canvas.default,
      "list.hoverForeground": color.fg.active,
      "list.errorForeground": color.danger.muted,
      "listFilterWidget.background": color.canvas.input,
      "listFilterWidget.outline": "#4169e1",
      "listFilterWidget.noMatchesOutline": color.danger.muted,
      "list.filterMatchBackground": "#263d83",
      "list.highlightForeground": color.info.hover,
      "tree.indentGuidesStroke": "#353756",

      // === Quick Input ===
      "quickInputTitle.background": "#2e3247",

      // === Menu ===
      "menu.background": color.canvas.darker,
      "menu.foreground": color.fg.muted,
      "menu.separatorBackground": "#2e3247",

      // === Overview Ruler ===
      "editorOverviewRuler.border": color.canvas.default,

      // === Links ===
      "textLink.foreground": color.accent.fg,
      "textLink.activeForeground": color.accent.fg,

      // === Buttons ===
      "button.background": "#1e2235",
      "button.foreground": color.fg.onEmphasis,
      "button.hoverBackground": "#2a2f4b",

      // === Input ===
      "input.background": color.canvas.input,
      "input.foreground": color.fg.onEmphasis,
      "input.placeholderForeground": color.fg.muted,
      "inputValidation.errorBackground": "#963340",
      "inputValidation.errorForeground": "#dadada",
      "inputValidation.errorBorder": "#3d1a1f",

      // === Dropdown ===
      "dropdown.background": color.canvas.input,
      "dropdown.foreground": color.fg.onEmphasis,
      "dropdown.border": "#4169e1",
      "dropdown.listBackground": color.canvas.input,

      // === Notifications ===
      "notificationToast.border": "#202835",
      "notificationCenter.border": "#1f2835",
      "notificationCenterHeader.background": "#23263a",

      // === Banner ===
      "banner.background": "#344a7a",
      "banner.foreground": "#d7d7d7",
      "banner.iconForeground": "#ffd483",

      // === Panel ===
      "panel.border": color.border.default,
      "panelTitle.activeForeground": "#d7d7d7",
      "panelTitle.inactiveForeground": "#8c99a5",

      // === Extensions ===
      "extensionButton.prominentBackground": "#3c4870",
      "extensionIcon.starForeground": "#f1c83e",
      "quickInputList.focusForeground": "#d7d7d7",

      // === Scrollbar ===
      "scrollbar.shadow": color.canvas.inset,
      "scrollbarSlider.activeBackground": "#586386",
      "scrollbarSlider.background": "#3a425c",
      "scrollbarSlider.hoverBackground": "#4b5472",

      // === Git Decorations ===
      "gitDecoration.ignoredResourceForeground": "#3e4563",
      "gitDecoration.untrackedResourceForeground": color.success.fg,
      "gitDecoration.modifiedResourceForeground": color.attention.fg,

      // === Editor Gutter (Git) ===
      "editorGutter.addedBackground": color.success.fg,
      "editorGutter.modifiedBackground": color.attention.fg,
      "editorGutter.deletedBackground": color.danger.fg,
      "editorGutter.foldingControlForeground": "#d7d7d7",

      // === Diff Editor ===
      "diffEditor.insertedLineBackground": "#0b203aff",
      "diffEditor.insertedTextBackground": "#142a46ff",
      "diffEditor.removedLineBackground": color.danger.subtle,
      "diffEditor.removedTextBackground": color.danger.removed,
      "diffEditor.diagonalFill": "#3a4364",

      // === Settings ===
      "settings.dropdownBackground": color.canvas.input,
      "settings.dropdownBorder": "#131822",
      "settings.checkboxBorder": "#6b707a",
      "settings.focusedRowBackground": color.canvas.input,
      "settings.rowHoverBackground": "#2c3144",

      // === Welcome Page ===
      "welcomePage.background": "#1c1f2c",
      "welcomePage.tileBackground": "#23283d",
      "welcomePage.tileHoverBackground": "#2b2f44",
      "welcomePage.progress.background": "#3a3e52",
      "welcomePage.progress.foreground": color.accent.fg,
    },

    // ========================================
    // TOKEN COLORS (Syntax Highlighting)
    // ========================================
    tokenColors: [
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          fontStyle: "italic",
          foreground: color.syntax.comment,
        },
      },
      {
        name: "Colors",
        scope: ["constant.other.color"],
        settings: {
          foreground: color.fg.onEmphasis,
        },
      },
      {
        name: "Storage",
        scope: ["storage", "storage.type", "storage.modifier"],
        settings: {
          fontStyle: "italic",
          foreground: color.syntax.storage,
        },
      },
      {
        name: "Variables",
        scope: [
          "variable",
          "string constant.other.placeholder",
          "meta.delimiter.comma.js",
        ],
        settings: {
          foreground: color.syntax.variable,
        },
      },
      {
        name: "Block Level Variables",
        scope: ["meta.block variable.other"],
        settings: {
          foreground: color.syntax.variableBlock,
        },
      },
      {
        name: "Other Variable, String Link",
        scope: ["support.other.variable", "string.other.link"],
        settings: {
          foreground: color.syntax.variable,
        },
      },
      {
        name: "Entity Types",
        scope: ["support.type"],
        settings: {
          foreground: color.syntax.variable,
        },
      },
      {
        name: "Class, Support",
        scope: [
          "entity.name",
          "support.type",
          "support.class",
          "support.other.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types",
        ],
        settings: {
          foreground: color.syntax.class,
        },
      },
      {
        name: "Keyword",
        scope: ["keyword"],
        settings: {
          foreground: color.syntax.keyword,
        },
      },
      {
        name: "Function, Special Method",
        scope: [
          "entity.name.function",
          "meta.function-call",
          "variable.function",
          "support.function",
          "keyword.other.special-method",
        ],
        settings: {
          foreground: color.syntax.function,
        },
      },
      {
        name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
        scope: [
          "constant.numeric",
          "constant.language",
          "constant.character",
          "constant.escape",
          "keyword.other.unit",
          "keyword.other",
        ],
        settings: {
          foreground: color.syntax.number,
        },
      },
      {
        name: "Param",
        scope: ["variable.parameter"],
        settings: {
          foreground: "#d7d7d7",
        },
      },
      {
        name: "Operator, Misc",
        scope: [
          "keyword.control",
          "constant.other.color",
          "punctuation",
          "meta.tag",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution",
        ],
        settings: {
          foreground: color.syntax.operator,
        },
      },
      {
        name: "Tag",
        scope: [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter",
        ],
        settings: {
          foreground: color.syntax.tag,
        },
      },
      {
        name: "String, Symbols, Inherited Class, Markup Heading",
        scope: [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "entity.other.inherited-class",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          foreground: color.syntax.string,
          fontStyle: "italic",
        },
      },
      {
        name: "Regular Expressions",
        scope: ["string.regexp"],
        settings: {
          foreground: color.syntax.regex,
        },
      },
      {
        name: "Escape Characters",
        scope: ["constant.character.escape"],
        settings: {
          foreground: color.syntax.escape,
        },
      },
      {
        name: "URL",
        scope: ["*url*", "*link*", "*uri*"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
          foreground: color.syntax.invalid,
        },
      },
      {
        name: "Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          fontStyle: "italic",
          foreground: color.syntax.attribute,
        },
      },
      {
        name: "Language methods",
        scope: ["variable.language"],
        settings: {
          fontStyle: "italic",
          foreground: color.syntax.keyword,
        },
      },
      {
        name: "HTML - Punctuation tag",
        scope: [
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.definition.tag.begin.tsx",
          "punctuation.definition.tag.end.tsx",
          "punctuation.definition.tag.jsx",
        ],
        settings: {
          foreground: color.syntax.punctuation,
        },
      },
      {
        name: "HTML - Tag Content",
        scope: ["JSXNested", "text.html.derivative"],
        settings: {
          foreground: "#d7d7d7",
        },
      },
      {
        name: "HTML - Attributes",
        scope: ["entity.other.attribute-name.html"],
        settings: {
          foreground: color.accent.fg,
        },
      },
      {
        name: "CSS - ID",
        scope: [
          "source.sass keyword.control",
          "entity.other.attribute-name.id.css",
        ],
        settings: {
          foreground: color.tertiary.orange,
        },
      },
      {
        name: "CSS - Classes",
        scope: ["entity.other.attribute-name.class"],
        settings: {
          foreground: color.tertiary.yellow,
        },
      },
      {
        name: "CSS - Pseudo Elements",
        scope: [
          "entity.other.attribute-name.pseudo-element.css",
          "entity.other.attribute-name.pseudo-class.css",
        ],
        settings: {
          foreground: color.tertiary.cyan,
        },
      },
      {
        name: "CSS - Property Key",
        scope: [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name",
          "entity.name.tag.css",
        ],
        settings: {
          foreground: "#d7d7d7",
        },
      },
      {
        name: "CSS - Property Value",
        scope: [
          "meta.identifier.css",
          "meta.property-values.css",
          "source.css.scss",
          "support.constant.property-value.css",
          "support.constant.font-name.css",
          "support.constant.color.w3c-standard-color-name.css",
          "support.constant.color.w3c-extended-color-name.css",
        ],
        settings: {
          foreground: color.syntax.string,
        },
      },
      {
        name: "CSS - Units",
        scope: [
          "constant.length.units.css",
          "keyword.other.unit.px.css",
          "keyword.other.unit.percentage.css",
          "keyword.other.unit.rem.css",
          "keyword.other.unit.em.css",
          "keyword.other.unit.vh.css",
          "keyword.other.unit.vw.css",
        ],
        settings: {
          foreground: color.secondary.pink,
        },
      },
      {
        name: "CSS - Method Names",
        scope: [
          "support.function.css",
          "support.function.transform.css",
          "support.function.gradient.css",
          "support.function.url.css",
          "meta.property-values.css",
          "source.css.scss",
        ],
        settings: {
          foreground: color.tertiary.teal,
        },
      },
      {
        name: "CSS - @ Rule",
        scope: ["meta.preprocessor.at-rule", "keyword.control.at-rule"],
        settings: {
          foreground: color.secondary.pink,
        },
      },
      {
        name: "CSS - Keyframe Percentage",
        scope: ["entity.other.keyframe-offset.percentage.css"],
        settings: {
          foreground: "#d7d7d7",
        },
      },
      {
        name: "JS - Keywords",
        scope: [
          "keyword.control.flow.js",
          "keyword.control.module.js",
          "keyword.operator.typeof.js",
          "keyword.operator.logical.js",
          "keyword.control.conditional.js",
          "keyword.operator.comparison.js",
          "keyword.operator.relational.js",
          "keyword.operator.assignment.js",
          "storage.type.function.arrow.js",
        ],
        settings: {
          foreground: color.tertiary.orange,
        },
      },
      {
        name: "JS - Variables Object Key",
        scope: ["string.unquoted.js"],
        settings: {
          foreground: color.tertiary.gold,
        },
      },
      {
        name: "JS - Variables Object properties",
        scope: [
          "meta.property.object.js",
          "meta.property.object.jsx",
          "meta.property.member.js",
          "meta.property.member.jsx",
          "meta.property.member.ts",
          "meta.property.member.tsx",
          "variable.other.object.ts",
          "variable.other.object.tsx",
          "variable.other.constant.ts",
          "variable.other.constant.tsx",
        ],
        settings: {
          foreground: color.syntax.variable,
        },
      },
      {
        name: "JS - Import Final Constants",
        scope: ["variable.other.constant.js", "meta.function.js", "source.js"],
        settings: {
          foreground: color.secondary.lightPurple,
        },
      },
      {
        name: "JS - Sub-methods",
        scope: [
          "entity.name.module.js",
          "variable.import.parameter.js",
          "variable.other.class.js",
        ],
        settings: {
          foreground: color.syntax.invalid,
        },
      },
      {
        name: "JS - entity.name.method.js",
        scope: ["entity.name.method.js"],
        settings: {
          fontStyle: "italic",
          foreground: color.info.medium,
        },
      },
      {
        name: "Decorators",
        scope: [
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: color.info.medium,
        },
      },
      {
        name: "JSON Key - Level 0",
        scope: [
          "source.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: "#d7d7d7",
        },
      },
      {
        name: "Markdown - Heading Name",
        scope: ["entity.name.section.markdown"],
        settings: {
          foreground: color.accent.fg,
        },
      },
      {
        name: "Markdown - Link",
        scope: ["string.other.link.title.markdown"],
        settings: {
          foreground: color.info.medium,
        },
      },
      {
        name: "Markdown - Link Description",
        scope: ["string.other.link.description.title.markdown"],
        settings: {
          foreground: color.secondary.purple,
        },
      },
    ],
  };
}

module.exports = { getTheme };

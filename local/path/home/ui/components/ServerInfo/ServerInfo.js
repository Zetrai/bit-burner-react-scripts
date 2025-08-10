var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// react:react
var require_react = __commonJS({
  "react:react"(exports, module) {
    module.exports = React;
  }
});

// servers/home/ui/components/ServerInfo/ServerInfo.tsx
var import_react2 = __toESM(require_react());

// servers/home/ui/components/Button/Button.tsx
var import_react = __toESM(require_react());

// servers/home/ui/components/Button/Button.styles.tsx
var styles = {
  crossBtn: {
    padding: "6px 10px",
    background: "rgba(0,0,0,0.6)",
    border: "2px solid rgba(0,255,200,0.8)",
    color: "#0fffc3",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: '"Share Tech Mono", monospace',
    transition: "all 0.2s ease-in-out",
    position: "absolute",
    top: "10px",
    right: "10px"
  },
  crossBtnHover: {
    background: "rgba(0,255,200,0.1)",
    boxShadow: "0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)"
  },
  successBtn: {
    padding: "6px 12px",
    background: "rgba(10, 20, 10, 0.85)",
    border: "2px solid rgba(0,255,140,0.8)",
    color: "#00ff8c",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: '"Share Tech Mono", monospace',
    transition: "all 0.2s ease-in-out"
  },
  successBtnHover: {
    background: "rgba(0,255,140,0.1)",
    boxShadow: "0 0 4px rgba(0,255,140,0.5), 0 0 8px rgba(0,255,140,0.3)"
  }
};

// servers/home/ui/components/Button/Button.tsx
function Button({ variant, onClick, children }) {
  const [isHovering, setIsHovering] = (0, import_react.useState)(false);
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      style: {
        ...styles[variant],
        ...isHovering && styles[`${variant}Hover`]
      },
      onClick,
      onMouseEnter: () => setIsHovering(true),
      onMouseLeave: () => setIsHovering(false)
    },
    children
  );
}

// servers/home/ui/components/ServerInfo/ServerInfo.styles.tsx
var styles2 = {
  container: {
    background: "rgba(10,15,30,0.95)",
    border: "2px solid rgba(0,255,200,0.6)",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 0 12px rgba(0,255,200,0.3)",
    position: "relative",
    minHeight: "200px"
  },
  header: {
    display: "flex",
    justifyContent: "flex-start"
  },
  content: {
    marginTop: "10px",
    marginBottom: "20px"
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px"
  }
};

// servers/home/ui/components/ServerInfo/ServerInfo.tsx
function ServerInfo({ info, variant, waitFor, children }) {
  const [visible, setVisible] = (0, import_react2.useState)(true);
  import_react2.default.useEffect(() => {
    if (waitFor) {
      const timer = setTimeout(() => setVisible(false), waitFor);
      return () => clearTimeout(timer);
    }
  }, [waitFor]);
  const closeModal = () => {
    setVisible(false);
  };
  if (!visible) return null;
  return /* @__PURE__ */ import_react2.default.createElement("div", { style: styles2.container }, /* @__PURE__ */ import_react2.default.createElement(Button, { variant: "crossBtn", onClick: closeModal }, "\u2715"), /* @__PURE__ */ import_react2.default.createElement("div", { style: styles2.modalContent }, /* @__PURE__ */ import_react2.default.createElement("div", { style: styles2.header }, /* @__PURE__ */ import_react2.default.createElement("h2", null, "Server Info")), /* @__PURE__ */ import_react2.default.createElement("table", { style: { width: "100%", borderCollapse: "collapse" } }, /* @__PURE__ */ import_react2.default.createElement("thead", null, /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement("th", { style: { textAlign: "left", borderBottom: "1px solid #ccc", padding: "8px" } }, "Key"), /* @__PURE__ */ import_react2.default.createElement("th", { style: { textAlign: "left", borderBottom: "1px solid #ccc", padding: "8px" } }, "Value"))), /* @__PURE__ */ import_react2.default.createElement("tbody", null, Object.entries(info).map(([key, value]) => /* @__PURE__ */ import_react2.default.createElement("tr", { key, style: { borderBottom: "1px solid #eee" } }, /* @__PURE__ */ import_react2.default.createElement("td", { style: { padding: "8px", fontWeight: "bold" } }, key), /* @__PURE__ */ import_react2.default.createElement("td", { style: { padding: "8px" } }, typeof value === "object" ? JSON.stringify(value) : value.toString()))))), children));
}
export {
  ServerInfo
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9TZXJ2ZXJJbmZvL1NlcnZlckluZm8udHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIi4vc2VydmVycy9ob21lL3VpL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5zdHlsZXMudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9TZXJ2ZXJJbmZvL1NlcnZlckluZm8uc3R5bGVzLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCLElBQUFBLGdCQUFnQzs7O0FDQWhDLG1CQUFnQzs7O0FDRXpCLElBQU0sU0FBd0M7QUFBQSxFQUNuRCxVQUFVO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsSUFDWixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxjQUFjO0FBQUEsSUFDZCxRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUVBLFlBQVk7QUFBQSxJQUNWLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxFQUNiO0FBQ0Y7OztBRHpCTyxTQUFTLE9BQU8sRUFBRSxTQUFTLFNBQVMsU0FB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
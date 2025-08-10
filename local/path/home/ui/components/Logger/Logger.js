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

// servers/home/ui/components/Logger/Logger.tsx
var import_react = __toESM(require_react());

// servers/home/ui/components/Logger/Logger.styles.tsx
var cyberpunkBorder = "2px solid rgba(0,255,200,0.8)";
var neonGlow = "0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)";
var styles = {
  logInfo: {
    background: "rgba(10, 15, 30, 0.85)",
    padding: "12px 16px",
    border: "2px solid rgba(0, 180, 255, 0.8)",
    borderRadius: "6px",
    width: "fit-content",
    maxWidth: "80%",
    marginBottom: "5px",
    color: "#4fd4ff",
    fontWeight: 700,
    fontSize: "15px",
    fontFamily: '"Share Tech Mono", monospace',
    boxShadow: "0 0 4px rgba(0,180,255,0.5), 0 0 8px rgba(0,180,255,0.3)",
    letterSpacing: "1px"
  },
  logSuccess: {
    background: "rgba(10, 20, 10, 0.85)",
    padding: "12px 16px",
    border: "2px solid rgba(0,255,140,0.8)",
    borderRadius: "6px",
    width: "fit-content",
    maxWidth: "80%",
    marginBottom: "5px",
    color: "#00ff8c",
    fontWeight: 700,
    fontSize: "15px",
    fontFamily: '"Share Tech Mono", monospace',
    boxShadow: "0 0 4px rgba(0,255,140,0.5), 0 0 8px rgba(0,255,140,0.3)",
    letterSpacing: "1px"
  },
  logFail: {
    background: "rgba(74, 15, 15, 0.85)",
    padding: "14px 18px",
    border: "2px solid rgba(255, 60, 60, 0.8)",
    borderRadius: "6px",
    width: "fit-content",
    maxWidth: "80%",
    marginBottom: "5px",
    color: "#ff4c4c",
    fontWeight: 700,
    fontSize: "15px",
    fontFamily: '"Share Tech Mono", monospace',
    boxShadow: "0 0 4px rgba(255, 60, 60, 0.5), 0 0 8px rgba(255, 60, 60, 0.3)",
    letterSpacing: "1px"
  },
  logWarning: {
    background: "rgba(30, 20, 5, 0.85)",
    padding: "14px 18px",
    border: "2px solid rgba(255, 180, 0, 0.9)",
    borderRadius: "6px",
    width: "fit-content",
    maxWidth: "80%",
    marginBottom: "5px",
    color: "#ffb400",
    fontWeight: 700,
    fontSize: "15px",
    fontFamily: '"Share Tech Mono", monospace',
    boxShadow: "0 0 6px rgba(255, 180, 0, 0.8), 0 0 12px rgba(255, 180, 0, 0.4)",
    letterSpacing: "1px",
    textTransform: "uppercase"
  },
  logError: {
    background: "rgba(30, 0, 0, 0.85)",
    padding: "14px 18px",
    border: "2px solid rgba(255, 0, 80, 0.9)",
    borderRadius: "6px",
    width: "fit-content",
    maxWidth: "80%",
    marginBottom: "5px",
    color: "#ff2050",
    fontWeight: 700,
    fontSize: "15px",
    fontFamily: '"Share Tech Mono", monospace',
    boxShadow: "0 0 5px rgba(255, 0, 80, 0.7), 0 0 10px rgba(255, 0, 80, 0.5)",
    letterSpacing: "1px",
    textShadow: "0 0 4px rgba(255, 0, 80, 0.7)"
  },
  logLoader: {
    background: "rgba(5, 5, 15, 0.85)",
    padding: "8px 14px",
    border: cyberpunkBorder,
    borderRadius: "6px",
    minWidth: "200px",
    textAlign: "center",
    color: "#0fffc3",
    fontFamily: '"Share Tech Mono", monospace',
    fontSize: "14px",
    boxShadow: neonGlow,
    position: "fixed",
    bottom: "50px",
    right: "20px",
    letterSpacing: "1px"
  }
};

// servers/home/ui/components/Logger/Logger.tsx
function Model({ text, variant, waitFor, children }) {
  switch (variant) {
    case "info":
      return /* @__PURE__ */ import_react.default.createElement("div", { style: styles.logInfo }, text);
    case "success":
      return /* @__PURE__ */ import_react.default.createElement("div", { style: styles.logSuccess }, text);
    case "fail":
      return /* @__PURE__ */ import_react.default.createElement("div", { style: styles.logFail }, text);
    case "warning":
      return /* @__PURE__ */ import_react.default.createElement("div", { style: styles.logWarning }, "\u26A0 ", text);
    case "error":
      return /* @__PURE__ */ import_react.default.createElement("div", { style: styles.logError }, "\u26A0 ", text);
    case "loader":
      const [bars, setBars] = (0, import_react.useState)("");
      const [visible, setVisible] = (0, import_react.useState)(true);
      (0, import_react.useEffect)(() => {
        let elapsed = 0;
        const interval = setInterval(() => {
          elapsed += 300;
          setBars((prev) => prev + "|");
          if (elapsed >= waitFor) {
            clearInterval(interval);
            setTimeout(() => setVisible(false), 500);
          }
        }, 300);
        return () => clearInterval(interval);
      }, [waitFor]);
      if (!visible) return null;
      return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { style: styles.logLoader }, text, " ", bars));
    default:
      return /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "red", padding: "20px", border: "2px", borderRadius: "10px" } }, `[ERROR] Unknown Variant: ${variant}`);
  }
}
export {
  Model
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9Mb2dnZXIvTG9nZ2VyLnRzeCIsIi4vc2VydmVycy9ob21lL3VpL2NvbXBvbmVudHMvTG9nZ2VyL0xvZ2dlci5zdHlsZXMudHN4Il0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNBakIsbUJBQTJDOzs7QUNFM0MsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSxXQUFXO0FBQ1YsSUFBTSxTQUF3QztBQUFBLEVBQ25ELFNBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxJQUNkLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxJQUNWLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLElBQ2QsT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEs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
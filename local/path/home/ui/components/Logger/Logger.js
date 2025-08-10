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
function Model({ text, variant, waitFor, children }) {
  const cyberpunkBorder = "2px solid rgba(0,255,200,0.8)";
  const neonGlow = "0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)";
  switch (variant) {
    case "info":
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
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
          }
        },
        text
      );
    case "success":
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
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
          }
        },
        text
      );
    case "fail":
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
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
          }
        },
        text
      );
    case "warning":
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
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
          }
        },
        "\u26A0 ",
        text
      );
    case "error":
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
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
          }
        },
        "\u26A0 ",
        text
      );
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
      return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
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
        },
        text,
        " ",
        bars
      ));
    default:
      return /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "red", padding: "20px", border: "2px", borderRadius: "10px" } }, `[ERROR] Unknown Variant: ${variant}`);
  }
}
export {
  Model
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9Mb2dnZXIvTG9nZ2VyLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCLG1CQUEyQztBQVNwQyxTQUFTLE1BQU0sRUFBRSxNQUFNLFNBQVMsU0FBUyxTQUFTLEdBQWdCO0FBQ3ZFLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sV0FBVztBQUVqQixVQUFRLFNBQVM7QUFBQSxJQUNmLEtBQUs7QUFDSCxhQUNFLDZCQUFBQSxRQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFPO0FBQUEsWUFDTCxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxVQUFVO0FBQUEsWUFDVixjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxZQUFZO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixZQUFZO0FBQUEsWUFDWixXQUFXO0FBQUEsWUFDWCxlQUFlO0FBQUEsVUFDakI7QUFBQTtBQUFBLFFBQ0M7QUFBQSxNQUNIO0FBQUEsSUFHSixLQUFLO0FBQ0gsYUFDRSw2QkFBQUEsUUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsT0FBTztBQUFBLFlBQ0wsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsVUFBVTtBQUFBLFlBQ1YsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsZUFBZTtBQUFBLFVBQ2pCO0FBQUE7QUFBQSxRQUNDO0FBQUEsTUFDSDtBQUFBLElBRUosS0FB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
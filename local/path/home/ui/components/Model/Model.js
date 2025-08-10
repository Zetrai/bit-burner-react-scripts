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

// servers/home/ui/components/Model/Model.tsx
var import_react = __toESM(require_react());
function Model({ text, variant, waitFor, children }) {
  const cyberpunkBorder = "2px solid rgba(0,255,200,0.8)";
  const neonGlow = "0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)";
  switch (variant) {
    case "normal":
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
            background: "rgba(10, 10, 20, 0.85)",
            padding: "14px 18px",
            border: cyberpunkBorder,
            borderRadius: "6px",
            width: "fit-content",
            maxWidth: "80%",
            marginBottom: "5px",
            color: "#0fffc3",
            fontWeight: 700,
            fontSize: "15px",
            fontFamily: '"Share Tech Mono", monospace',
            boxShadow: neonGlow,
            letterSpacing: "1px"
          }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbC50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0FqQixtQkFBMkM7QUFTcEMsU0FBUyxNQUFNLEVBQUUsTUFBTSxTQUFTLFNBQVMsU0FBUyxHQUFnQjtBQUN2RSxRQUFNLGtCQUFrQjtBQUN4QixRQUFNLFdBQVc7QUFFakIsVUFBUSxTQUFTO0FBQUEsSUFDZixLQUFLO0FBQ0gsYUFDRSw2QkFBQUEsUUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsT0FBTztBQUFBLFlBQ0wsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsVUFBVTtBQUFBLFlBQ1YsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsZUFBZTtBQUFBLFVBQ2pCO0FBQUE7QUFBQSxRQUNDO0FBQUEsTUFDSDtBQUFBLElBRUosS0FBSztBQUNILFlBQU0sQ0FBQyxNQUFNLE9BQU8sUUFBSSx1QkFBUyxFQUFFO0FBQ25DLFlBQU0sQ0FBQyxTQUFTLFVBQVUsUUFBSSx1QkFBUyxJQUFJO0FBRTNDLGtDQUFVLE1BQU07QUFDZCxZQUFJLFVBQVU7QUFDZCxjQUFNLFdBQVcsWUFBWSxNQUFNO0FBQ2pDLHFCQUFXO0FBQ1gsa0JBQVEsQ0FBQyxTQUFTLE9BQU8sR0FBRztBQUM1QixjQUFJLFdBQVcsU0FBUztBQUN0QiwwQkFBYyxRQUFRO0FBQ3RCLHVCQUFXLE1BQU0sV0FBVyxLQUFLLEdBQUcsR0FBRztBQUFBLFVBQ3pDO0FBQUEsUUFDRixHQUFHLEdBQUc7QUFDTixlQUFPLE1BQU0sY0FBYyxRQUFRO0FBQUEsTUFDckMsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUVaLFVBQUksQ0FBQyxRQUFTLFFBQU87QUFFckIsYUFDRSw2QkFBQUEsUUFBQSwyQkFBQUEsUUFBQSxnQkFDRSw2QkFBQUEsUUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsT0FBTztBQUFBLFlBQ0wsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsY0FBYztBQUFBLFlBQ2QsVUFBVTtBQUFBLFlBQ1YsV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLFlBQ1AsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsV0FBVztBQUFBLFlBQ1gsVUFBVTtBQUFBLFlBQ1YsUUFBUTtBQUFBLFlBQ1IsT0FBTztBQUFBLFlBQ1AsZUFBZTtBQUFBLFVBQ2pCO0FBQUE7QUFBQSxRQUNDO0FBQUEsUUFBSztBQUFBLFFBQUU7QUFBQSxNQUNWLENBQ0Y7QUFBQSxJQUVKO0FBQ0UsYUFBTyw2QkFBQUEsUUFBQSxjQUFDLFNBQUksT0FBTyxFQUFFLFlBQVksT0FBTyxTQUFTLFFBQVEsUUFBUSxPQUFPLGNBQWMsT0FBTyxLQUFJLDRCQUE0QixPQUFPLEVBQUc7QUFBQSxFQUMzSTtBQUNGOyIsIm5hbWVzIjpbIlJlYWN0Il19
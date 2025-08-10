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
function Model({ text, variant, children }) {
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
    case "loading":
      const [bars, setBars] = (0, import_react.useState)("");
      const [visible, setVisible] = (0, import_react.useState)(true);
      (0, import_react.useEffect)(() => {
        let seconds = 0;
        const interval = setInterval(() => {
          seconds++;
          setBars((prev) => prev + "|");
          if (seconds >= 10) {
            clearInterval(interval);
            setTimeout(() => setVisible(false), 500);
          }
        }, 300);
        return () => clearInterval(interval);
      }, []);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbC50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0FqQixtQkFBMkM7QUFRcEMsU0FBUyxNQUFNLEVBQUUsTUFBTSxTQUFTLFNBQVMsR0FBZ0I7QUFDOUQsUUFBTSxrQkFBa0I7QUFDeEIsUUFBTSxXQUFXO0FBRWpCLFVBQVEsU0FBUztBQUFBLElBQ2YsS0FBSztBQUNILGFBQ0UsNkJBQUFBLFFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU87QUFBQSxZQUNMLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxZQUNSLGNBQWM7QUFBQSxZQUNkLE9BQU87QUFBQSxZQUNQLFVBQVU7QUFBQSxZQUNWLGNBQWM7QUFBQSxZQUNkLE9BQU87QUFBQSxZQUNQLFlBQVk7QUFBQSxZQUNaLFVBQVU7QUFBQSxZQUNWLFlBQVk7QUFBQSxZQUNaLFdBQVc7QUFBQSxZQUNYLGVBQWU7QUFBQSxVQUNqQjtBQUFBO0FBQUEsUUFDQztBQUFBLE1BQ0g7QUFBQSxJQUVKLEtBQUs7QUFDSCxZQUFNLENBQUMsTUFBTSxPQUFPLFFBQUksdUJBQVMsRUFBRTtBQUNuQyxZQUFNLENBQUMsU0FBUyxVQUFVLFFBQUksdUJBQVMsSUFBSTtBQUUzQyxrQ0FBVSxNQUFNO0FBQ2QsWUFBSSxVQUFVO0FBQ2QsY0FBTSxXQUFXLFlBQVksTUFBTTtBQUNqQztBQUNBLGtCQUFRLENBQUMsU0FBUyxPQUFPLEdBQUc7QUFDNUIsY0FBSSxXQUFXLElBQUk7QUFDakIsMEJBQWMsUUFBUTtBQUN0Qix1QkFBVyxNQUFNLFdBQVcsS0FBSyxHQUFHLEdBQUc7QUFBQSxVQUN6QztBQUFBLFFBQ0YsR0FBRyxHQUFHO0FBQ04sZUFBTyxNQUFNLGNBQWMsUUFBUTtBQUFBLE1BQ3JDLEdBQUcsQ0FBQyxDQUFDO0FBRUwsVUFBSSxDQUFDLFFBQVMsUUFBTztBQUVyQixhQUNFLDZCQUFBQSxRQUFBLDJCQUFBQSxRQUFBLGdCQUNFLDZCQUFBQSxRQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFPO0FBQUEsWUFDTCxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxVQUFVO0FBQUEsWUFDVixXQUFXO0FBQUEsWUFDWCxPQUFPO0FBQUEsWUFDUCxZQUFZO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixXQUFXO0FBQUEsWUFDWCxVQUFVO0FBQUEsWUFDVixRQUFRO0FBQUEsWUFDUixPQUFPO0FBQUEsWUFDUCxlQUFlO0FBQUEsVUFDakI7QUFBQTtBQUFBLFFBQ0M7QUFBQSxRQUFLO0FBQUEsUUFBRTtBQUFBLE1BQ1YsQ0FDRjtBQUFBLElBRUo7QUFDRSxhQUFPLDZCQUFBQSxRQUFBLGNBQUMsU0FBSSxPQUFPLEVBQUUsWUFBWSxPQUFPLFNBQVMsUUFBUSxRQUFRLE9BQU8sY0FBYyxPQUFPLEtBQUksNEJBQTRCLE9BQU8sRUFBRztBQUFBLEVBQzNJO0FBQ0Y7IiwibmFtZXMiOlsiUmVhY3QiXX0=
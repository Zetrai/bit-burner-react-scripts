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

// servers/home/game/v0/index.tsx
var import_react2 = __toESM(require_react());

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

// servers/home/game/v0/index.tsx
function resetData(ns) {
  ns.write("/game/v0/data/dynamicModelText.txt", "", "w");
}
var waitForCrawler = async (ns) => {
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: "Crawler: ", variant: "loading" }));
  while (true) {
    const text = ns.read("/game/v0/data/dynamicModelText.txt");
    if (text === "Crawling Done") {
      ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text, variant: "normal" }));
      break;
    }
    await ns.sleep(1e3);
  }
};
async function main(ns) {
  await resetData(ns);
  ns.exec("/game/v0/helpers/crawler.js", "home", 1, ns.getHostname());
  await waitForCrawler(ns);
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9pbmRleC50c3giLCIuL3NlcnZlcnMvaG9tZS91aS9jb21wb25lbnRzL01vZGVsL01vZGVsLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQ2pCLElBQUFBLGdCQUFrQjs7O0FDRGxCLG1CQUEyQztBQVFwQyxTQUFTLE1BQU0sRUFBRSxNQUFNLFNBQVMsU0FBUyxHQUFnQjtBQUM5RCxRQUFNLGtCQUFrQjtBQUN4QixRQUFNLFdBQVc7QUFFakIsVUFBUSxTQUFTO0FBQUEsSUFDZixLQUFLO0FBQ0gsYUFDRSw2QkFBQUMsUUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsT0FBTztBQUFBLFlBQ0wsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsVUFBVTtBQUFBLFlBQ1YsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsZUFBZTtBQUFBLFVBQ2pCO0FBQUE7QUFBQSxRQUNDO0FBQUEsTUFDSDtBQUFBLElBRUosS0FBSztBQUNILFlBQU0sQ0FBQyxNQUFNLE9BQU8sUUFBSSx1QkFBUyxFQUFFO0FBQ25DLFlBQU0sQ0FBQyxTQUFTLFVBQVUsUUFBSSx1QkFBUyxJQUFJO0FBRTNDLGtDQUFVLE1BQU07QUFDZCxZQUFJLFVBQVU7QUFDZCxjQUFNLFdBQVcsWUFBWSxNQUFNO0FBQ2pDO0FBQ0Esa0JBQVEsQ0FBQyxTQUFTLE9BQU8sR0FBRztBQUM1QixjQUFJLFdBQVcsSUFBSTtBQUNqQiwwQkFBYyxRQUFRO0FBQ3RCLHVCQUFXLE1BQU0sV0FBVyxLQUFLLEdBQUcsR0FBRztBQUFBLFVBQ3pDO0FBQUEsUUFDRixHQUFHLEdBQUc7QUFDTixlQUFPLE1BQU0sY0FBYyxRQUFRO0FBQUEsTUFDckMsR0FBRyxDQUFDLENBQUM7QUFFTCxVQUFJLENBQUMsUUFBUyxRQUFPO0FBRXJCLGFBQ0UsNkJBQUFBLFFBQUEsMkJBQUFBLFFBQUEsZ0JBQ0UsNkJBQUFBLFFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU87QUFBQSxZQUNMLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxZQUNSLGNBQWM7QUFBQSxZQUNkLFVBQVU7QUFBQSxZQUNWLFdBQVc7QUFBQSxZQUNYLE9BQU87QUFBQSxZQUNQLFlBQVk7QUFBQSxZQUNaLFVBQVU7QUFBQSxZQUNWLFdBQVc7QUFBQSxZQUNYLFVBQVU7QUFBQSxZQUNWLFFBQVE7QUFBQSxZQUNSLE9BQU87QUFBQSxZQUNQLGVBQWU7QUFBQSxVQUNqQjtBQUFBO0FBQUEsUUFDQztBQUFBLFFBQUs7QUFBQSxRQUFFO0FBQUEsTUFDVixDQUNGO0FBQUEsSUFFSjtBQUNFLGFBQU8sNkJBQUFBLFFBQUEsY0FBQyxTQUFJLE9BQU8sRUFBRSxZQUFZLE9BQU8sU0FBUyxRQUFRLFFBQVEsT0FBTyxjQUFjLE9BQU8sS0FBSSw0QkFBNEIsT0FBTyxFQUFHO0FBQUEsRUFDM0k7QUFDRjs7O0FEMUVBLFNBQVMsVUFBVSxJQUFJO0FBQ3JCLEtBQUcsTUFBTSxzQ0FBc0MsSUFBSSxHQUFHO0FBQ3hEO0FBRUEsSUFBTSxpQkFBaUIsT0FBTyxPQUFXO0FBQ3ZDLEtBQUcsVUFBVSw4QkFBQUMsUUFBQSxjQUFDLFNBQU0sTUFBSyxhQUFZLFNBQVEsV0FBVSxDQUFFO0FBQ3pELFNBQU8sTUFBTTtBQUNYLFVBQU0sT0FBTyxHQUFHLEtBQUssb0NBQW9DO0FBQ3pELFFBQUksU0FBUyxpQkFBaUI7QUFDNUIsU0FBRyxVQUFVLDhCQUFBQSxRQUFBLGNBQUMsU0FBTSxNQUFZLFNBQVEsVUFBUyxDQUFFO0FBQ25EO0FBQUEsSUFDRjtBQUNBLFVBQU0sR0FBRyxNQUFNLEdBQUk7QUFBQSxFQUNyQjtBQUNGO0FBRUEsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxRQUFNLFVBQVUsRUFBRTtBQUNsQixLQUFHLEtBQUssK0JBQStCLFFBQVEsR0FBRyxHQUFHLFlBQVksQ0FBQztBQUVsRSxRQUFNLGVBQWUsRUFBRTtBQUN6QjsiLCJuYW1lcyI6WyJpbXBvcnRfcmVhY3QiLCJSZWFjdCIsIlJlYWN0Il19
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
  switch (variant) {
    case "normal":
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          style: {
            background: "purple",
            padding: "20px",
            border: "4px solid #fff",
            borderRadius: "10px",
            width: "50%",
            marginBottom: "5px"
          }
        },
        text
      );
    default:
      return /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "red", padding: "20px", border: "2px", borderRadius: "10px" } }, `[ERROR] Unknown Variant: ${variant}`);
  }
}

// servers/home/game/v0/index.tsx
function resetData(ns) {
  ns.write("/game/v0/data/dynamicModelText.txt", "", "w");
}
var waitForCrawler = async (ns) => {
  ns.print("Waiting for Crawler to finish...");
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
  ns.print("Index running...");
  await resetData(ns);
  ns.exec("/game/v0/helpers/crawler.js", "home", 1, ns.getHostname());
  await waitForCrawler(ns);
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9pbmRleC50c3giLCIuL3NlcnZlcnMvaG9tZS91aS9jb21wb25lbnRzL01vZGVsL01vZGVsLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQ2pCLElBQUFBLGdCQUFrQjs7O0FDRGxCLG1CQUFrQjtBQVFYLFNBQVMsTUFBTSxFQUFFLE1BQU0sU0FBUyxTQUFTLEdBQWdCO0FBQzlELFVBQVEsU0FBUztBQUFBLElBQ2YsS0FBSztBQUNILGFBQ0UsNkJBQUFDLFFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU87QUFBQSxZQUNMLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxZQUNSLGNBQWM7QUFBQSxZQUNkLE9BQU87QUFBQSxZQUNQLGNBQWM7QUFBQSxVQUNoQjtBQUFBO0FBQUEsUUFDQztBQUFBLE1BQ0g7QUFBQSxJQUVKO0FBQ0UsYUFBTyw2QkFBQUEsUUFBQSxjQUFDLFNBQUksT0FBTyxFQUFFLFlBQVksT0FBTyxTQUFTLFFBQVEsUUFBUSxPQUFPLGNBQWMsT0FBTyxLQUFJLDRCQUE0QixPQUFPLEVBQUc7QUFBQSxFQUMzSTtBQUNGOzs7QUR0QkEsU0FBUyxVQUFVLElBQUk7QUFDckIsS0FBRyxNQUFNLHNDQUFzQyxJQUFJLEdBQUc7QUFDeEQ7QUFFQSxJQUFNLGlCQUFpQixPQUFPLE9BQVc7QUFDdkMsS0FBRyxNQUFNLGtDQUFrQztBQUMzQyxTQUFPLE1BQU07QUFDWCxVQUFNLE9BQU8sR0FBRyxLQUFLLG9DQUFvQztBQUN6RCxRQUFJLFNBQVMsaUJBQWlCO0FBQzVCLFNBQUcsVUFBVSw4QkFBQUMsUUFBQSxjQUFDLFNBQU0sTUFBWSxTQUFRLFVBQVMsQ0FBRTtBQUNuRDtBQUFBLElBQ0Y7QUFDQSxVQUFNLEdBQUcsTUFBTSxHQUFJO0FBQUEsRUFDckI7QUFDRjtBQUVBLGVBQXNCLEtBQUssSUFBdUI7QUFDaEQsS0FBRyxNQUFNLGtCQUFrQjtBQUUzQixRQUFNLFVBQVUsRUFBRTtBQUNsQixLQUFHLEtBQUssK0JBQStCLFFBQVEsR0FBRyxHQUFHLFlBQVksQ0FBQztBQUVsRSxRQUFNLGVBQWUsRUFBRTtBQVd6QjsiLCJuYW1lcyI6WyJpbXBvcnRfcmVhY3QiLCJSZWFjdCIsIlJlYWN0Il19
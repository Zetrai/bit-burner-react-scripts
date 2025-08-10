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
  const cyberpunkBorder2 = "2px solid rgba(0,255,200,0.8)";
  const neonGlow2 = "0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)";
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

// servers/home/game/v0/index.tsx
function resetData(ns) {
  ns.write("/game/v0/data/dynamicModelText.txt", "", "w");
}
var waitForCrawler = async (ns) => {
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: "Crawler: ", waitFor: 2 * 1e3, variant: "loader" }));
  while (true) {
    const text = ns.read("/game/v0/data/dynamicModelText.txt");
    if (text === "Crawling Done") {
      ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: `[SUCCESS] ${text}`, variant: "success" }));
      break;
    }
    await ns.sleep(1e3);
  }
};
async function main(ns) {
  await resetData(ns);
  ns.exec("/game/v0/helpers/crawler.js", "home", 1, ns.getHostname());
  await waitForCrawler(ns);
  ns.exec("/game/v0/helpers/purchaseServers.js", "home", 1, 8);
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9pbmRleC50c3giLCIuL3NlcnZlcnMvaG9tZS91aS9jb21wb25lbnRzL0xvZ2dlci9Mb2dnZXIudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9Mb2dnZXIvTG9nZ2VyLnN0eWxlcy50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0NqQixJQUFBQSxnQkFBa0I7OztBQ0RsQixtQkFBMkM7OztBQ0UzQyxJQUFNLGtCQUFrQjtBQUN4QixJQUFNLFdBQVc7QUFDVixJQUFNLFNBQXdDO0FBQUEsRUFDbkQsU0FBUztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLElBQ2QsT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsRUFDakI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLE9BQU87QUFBQSxJQUNQ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LGNBQUMsU0FBSSxPQUFPLEVBQUUsWUFBWSxPQUFPLFNBQVMsUUFBUSxRQUFRLE9BQU8sY0FBYyxPQUFPLEtBQUksNEJBQTRCLE9BQU8sRUFBRztBQUFBLEVBQzNJO0FBQ0Y7OztBRG5EQSxTQUFTLFVBQVUsSUFBSTtBQUNyQixLQUFHLE1BQU0sc0NBQXNDLElBQUksR0FBRztBQUN4RDtBQUVBLElBQU0saUJBQWlCLE9BQU8sT0FBVztBQUN2QyxLQUFHLFVBQVUsOEJBQUFDLFFBQUEsY0FBQyxTQUFNLE1BQUssYUFBWSxTQUFTLElBQUksS0FBTSxTQUFRLFVBQVMsQ0FBRTtBQUMzRSxTQUFPLE1BQU07QUFDWCxVQUFNLE9BQU8sR0FBRyxLQUFLLG9DQUFvQztBQUN6RCxRQUFJLFNBQVMsaUJBQWlCO0FBQzVCLFNBQUcsVUFBVSw4QkFBQUEsUUFBQSxjQUFDLFNBQU0sTUFBTSxhQUFhLElBQUksSUFBSSxTQUFRLFdBQVUsQ0FBRTtBQUNuRTtBQUFBLElBQ0Y7QUFDQSxVQUFNLEdBQUcsTUFBTSxHQUFJO0FBQUEsRUFDckI7QUFDRjtBQUVBLGVBQXNCLEtBQUssSUFBdUI7QUFDaEQsUUFBTSxVQUFVLEVBQUU7QUFDbEIsS0FBRyxLQUFLLCtCQUErQixRQUFRLEdBQUcsR0FBRyxZQUFZLENBQUM7QUFFbEUsUUFBTSxlQUFlLEVBQUU7QUFFdkIsS0FBRyxLQUFLLHVDQUF1QyxRQUFRLEdBQUcsQ0FBQztBQUM3RDsiLCJuYW1lcyI6WyJpbXBvcnRfcmVhY3QiLCJjeWJlcnB1bmtCb3JkZXIiLCJuZW9uR2xvdyIsIlJlYWN0IiwiUmVhY3QiXX0=
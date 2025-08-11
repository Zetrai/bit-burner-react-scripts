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

// servers/home/game/v0/helpers/helpers.tsx
var import_react4 = __toESM(require_react());

// servers/home/ui/components/TableModal/TableModal.tsx
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

// servers/home/ui/components/TableModal/TableModal.styles.tsx
var styles2 = {
  container: {
    background: "rgba(10,15,30,0.95)",
    border: "2px solid rgba(0,255,200,0.6)",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 0 12px rgba(0,255,200,0.3)",
    position: "relative",
    minHeight: "200px",
    marginBottom: "20px"
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

// servers/home/ui/components/TableModal/TableModal.tsx
function TableModal({ info, variant, name, value, heading, waitFor, children }) {
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
  return /* @__PURE__ */ import_react2.default.createElement("div", { style: styles2.container }, /* @__PURE__ */ import_react2.default.createElement(Button, { variant: "crossBtn", onClick: closeModal }, "\u2715"), /* @__PURE__ */ import_react2.default.createElement("div", { style: styles2.modalContent }, /* @__PURE__ */ import_react2.default.createElement("div", { style: styles2.header }, /* @__PURE__ */ import_react2.default.createElement("h2", null, heading)), /* @__PURE__ */ import_react2.default.createElement("table", { style: { width: "100%", borderCollapse: "collapse" } }, /* @__PURE__ */ import_react2.default.createElement("thead", null, /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement("th", { style: { textAlign: "left", borderBottom: "1px solid #ccc", padding: "8px" } }, name), /* @__PURE__ */ import_react2.default.createElement("th", { style: { textAlign: "left", borderBottom: "1px solid #ccc", padding: "8px" } }, value))), /* @__PURE__ */ import_react2.default.createElement("tbody", null, Object.entries(info).map(([key, value2]) => /* @__PURE__ */ import_react2.default.createElement("tr", { key, style: { borderBottom: "1px solid #eee" } }, /* @__PURE__ */ import_react2.default.createElement("td", { style: { padding: "8px", fontWeight: "bold" } }, key), /* @__PURE__ */ import_react2.default.createElement("td", { style: { padding: "8px" } }, typeof value2 === "object" ? JSON.stringify(value2) : value2.toString()))))), children));
}

// servers/home/ui/components/Logger/Logger.tsx
var import_react3 = __toESM(require_react());

// servers/home/ui/components/Logger/Logger.styles.tsx
var cyberpunkBorder = "2px solid rgba(0,255,200,0.8)";
var neonGlow = "0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)";
var styles3 = {
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
function Logger({ text, variant, waitFor, children }) {
  switch (variant) {
    case "info":
      return /* @__PURE__ */ import_react3.default.createElement("div", { style: styles3.logInfo }, text);
    case "success":
      return /* @__PURE__ */ import_react3.default.createElement("div", { style: styles3.logSuccess }, text);
    case "fail":
      return /* @__PURE__ */ import_react3.default.createElement("div", { style: styles3.logFail }, text);
    case "warning":
      return /* @__PURE__ */ import_react3.default.createElement("div", { style: styles3.logWarning }, "\u26A0 ", text);
    case "error":
      return /* @__PURE__ */ import_react3.default.createElement("div", { style: styles3.logError }, "\u26A0 ", text);
    case "loader":
      const [bars, setBars] = (0, import_react3.useState)("");
      const [visible, setVisible] = (0, import_react3.useState)(true);
      (0, import_react3.useEffect)(() => {
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
      return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", { style: styles3.logLoader }, text, " ", bars));
    default:
      return /* @__PURE__ */ import_react3.default.createElement("div", { style: { background: "red", padding: "20px", border: "2px", borderRadius: "10px" } }, `[ERROR] Unknown Variant: ${variant}`);
  }
}

// servers/home/game/v0/helpers/helpers.tsx
var getOptimalTarget = async (hackableServers, ns) => {
  let cores = ns.getServer("home").cpuCores;
  let serversProfit = [];
  for (let server of hackableServers) {
    if (ns.getServerRequiredHackingLevel(server) > ns.getHackingLevel()) continue;
    let maxMoney = ns.getServerMaxMoney(server);
    if (maxMoney <= 0) continue;
    let hackChance = ns.hackAnalyzeChance(server);
    let hackFraction = ns.hackAnalyze(server);
    let moneyPerHack = hackFraction * maxMoney * hackChance;
    let growThreads = ns.growthAnalyze(server, 2, cores);
    let growTime = ns.getGrowTime(server) / 1e3;
    let profitPerSecond = moneyPerHack / (growThreads * growTime);
    serversProfit.push({
      name: server,
      profit: profitPerSecond
    });
  }
  serversProfit.sort((a, b) => b.profit - a.profit);
  let info = {}, i = 1;
  for (let serv of serversProfit) {
    info[serv.name] = `$${serv.profit.toFixed(2)}`;
    if (i++ > 10) break;
  }
  ns.tprintRaw(/* @__PURE__ */ import_react4.default.createElement(TableModal, { info, name: "server", value: "profit", variant: "info", heading: "Most Profitable Server" }));
  ns.tprintRaw(/* @__PURE__ */ import_react4.default.createElement(Logger, { text: `[SUCESS] Optimal target: ${serversProfit[0].name}`, variant: "success" }));
  ns.write("/game/v0/data/optimalTarget.txt", serversProfit[0].name || "", "w");
  return serversProfit.length > 0 ? serversProfit[0].name : null;
};

// servers/home/game/v0/controller.tsx
async function main(ns) {
  const hackableServers = ns.read("/game/v0/data/serversHacked.txt").split(",").filter(Boolean);
  const target = await getOptimalTarget(hackableServers, ns);
  const homeRam = ns.getServerMaxRam("home") - ns.getServerUsedRam("home");
  const scriptRam = ns.getScriptRam("weakenB.js");
  const weakenTime = ns.getWeakenTime(target);
  const growTime = ns.getGrowTime(target);
  const hackTime = ns.getHackTime(target);
  const hackThreads = Math.floor(ns.hackAnalyzeThreads(target, ns.getServerMoneyAvailable(target) * 0.25));
  const growThreads = Math.ceil(ns.growthAnalyze(target, 1 / (1 - 0.25)));
  const weakenThreadsHack = Math.ceil(hackThreads * 2e-3 / ns.weakenAnalyze(1));
  const weakenThreadsGrow = Math.ceil(growThreads * 4e-3 / ns.weakenAnalyze(1));
  const hackDelay = weakenTime - hackTime - 200;
  const growDelay = weakenTime - growTime + 200;
  const weakenDelayHack = 0;
  const weakenDelayGrow = 200;
  ns.scriptKill("hackB.js", "home");
  ns.scriptKill("growB.js", "home");
  ns.scriptKill("weakenB.js", "home");
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9oZWxwZXJzL2hlbHBlcnMudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9UYWJsZU1vZGFsL1RhYmxlTW9kYWwudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIi4vc2VydmVycy9ob21lL3VpL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5zdHlsZXMudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9UYWJsZU1vZGFsL1RhYmxlTW9kYWwuc3R5bGVzLnRzeCIsIi4vc2VydmVycy9ob21lL3VpL2NvbXBvbmVudHMvTG9nZ2VyL0xvZ2dlci50c3giLCIuL3NlcnZlcnMvaG9tZS91aS9jb21wb25lbnRzL0xvZ2dlci9Mb2dnZXIuc3R5bGVzLnRzeCIsIi4vc2VydmVycy9ob21lL2dhbWUvdjAvY29udHJvbGxlci50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0NqQixJQUFBQSxnQkFBa0I7OztBQ0RsQixJQUFBQyxnQkFBZ0M7OztBQ0FoQyxtQkFBZ0M7OztBQ0V6QixJQUFNLFNBQXdDO0FBQUEsRUFDbkQsVUFBVTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsUUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFFQSxZQUFZO0FBQUEsSUFDVixTQUFTO0FB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QyxjQUFjLENBQUMsRUFBRSxRQUFRLElBQUksR0FBRztBQUc1RSxTQUFPLGNBQWMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxFQUFFLE9BQU87QUFDNUQ7OztBTzVEQSxlQUFzQixLQUFLLElBQXVCO0FBQ2hELFFBQU0sa0JBQWtCLEdBQUcsS0FBSyxpQ0FBaUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxPQUFPLE9BQU87QUFFNUYsUUFBTSxTQUFTLE1BQU0saUJBQWlCLGlCQUFpQixFQUFFO0FBR3pELFFBQU0sVUFBVSxHQUFHLGdCQUFnQixNQUFNLElBQUksR0FBRyxpQkFBaUIsTUFBTTtBQUN2RSxRQUFNLFlBQVksR0FBRyxhQUFhLFlBQVk7QUFHOUMsUUFBTSxhQUFhLEdBQUcsY0FBYyxNQUFNO0FBQzFDLFFBQU0sV0FBVyxHQUFHLFlBQVksTUFBTTtBQUN0QyxRQUFNLFdBQVcsR0FBRyxZQUFZLE1BQU07QUFHdEMsUUFBTSxjQUFjLEtBQUssTUFBTSxHQUFHLG1CQUFtQixRQUFRLEdBQUcsd0JBQXdCLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFDdkcsUUFBTSxjQUFjLEtBQUssS0FBSyxHQUFHLGNBQWMsUUFBUSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ3RFLFFBQU0sb0JBQW9CLEtBQUssS0FBTSxjQUFjLE9BQVMsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUMvRSxRQUFNLG9CQUFvQixLQUFLLEtBQU0sY0FBYyxPQUFTLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFHL0UsUUFBTSxZQUFZLGFBQWEsV0FBVztBQUMxQyxRQUFNLFlBQVksYUFBYSxXQUFXO0FBQzFDLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sa0JBQWtCO0FBR3hCLEtBQUcsV0FBVyxZQUFZLE1BQU07QUFDaEMsS0FBRyxXQUFXLFlBQVksTUFBTTtBQUNoQyxLQUFHLFdBQVcsY0FBYyxNQUFNO0FBQ3BDOyIsIm5hbWVzIjpbImltcG9ydF9yZWFjdCIsImltcG9ydF9yZWFjdCIsIlJlYWN0Iiwic3R5bGVzIiwiUmVhY3QiLCJzdHlsZXMiLCJ2YWx1ZSIsImltcG9ydF9yZWFjdCIsInN0eWxlcyIsIlJlYWN0Iiwic3R5bGVzIiwiUmVhY3QiXX0=
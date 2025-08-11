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

// servers/home/game/v0/helpers/serverInfo.tsx
var import_react5 = __toESM(require_react());

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
var formatMoney = (amount) => {
  if (amount >= 1e9) return (amount / 1e9).toFixed(2) + "B";
  if (amount >= 1e6) return (amount / 1e6).toFixed(2) + "M";
  if (amount >= 1e3) return (amount / 1e3).toFixed(2) + "K";
  return amount.toString();
};
var formatRam = (ram) => {
  if (ram >= 1) return ram.toFixed(2) + " GB";
  return (ram * 1024).toFixed(0) + " MB";
};

// servers/home/game/v0/helpers/serverInfo.tsx
async function main(ns) {
  const target = `${ns.args[0]}` || ns.getHostname();
  const server = ns.getServer(target);
  const ramMaxFormatted = formatRam(server.maxRam);
  const ramUsedFormatted = formatRam(server.ramUsed);
  const info = {
    hostname: server.hostname,
    ip: server.ip,
    organizationName: server.organizationName,
    requiredHackingSkill: server.requiredHackingSkill,
    minDifficulty: server.minDifficulty,
    hackDifficulty: ns.nFormat(server.hackDifficulty || 0, "0.00"),
    moneyMax: ns.nFormat(server.moneyMax || 0, "$0.000a"),
    moneyAvailable: formatMoney(server.moneyAvailable || 0),
    serverGrowth: server.serverGrowth,
    cpuCores: server.cpuCores,
    ramMax: ramMaxFormatted,
    ramUsed: ramUsedFormatted,
    hasAdminRights: server.hasAdminRights,
    backdoorInstalled: server.backdoorInstalled,
    numOpenPortsRequired: server.numOpenPortsRequired,
    openPortCount: server.openPortCount
  };
  ns.tprintRaw(/* @__PURE__ */ import_react5.default.createElement(Logger, { text: "Fetching Server Info...", variant: "loader", waitFor: 1200 }));
  await ns.sleep(2e3);
  ns.tprintRaw(/* @__PURE__ */ import_react5.default.createElement(TableModal, { info, name: "Key", value: "Value", heading: `${info.hostname} Info`, variant: "info" }));
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9oZWxwZXJzL3NlcnZlckluZm8udHN4IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9oZWxwZXJzL2hlbHBlcnMudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9UYWJsZU1vZGFsL1RhYmxlTW9kYWwudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIi4vc2VydmVycy9ob21lL3VpL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5zdHlsZXMudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9UYWJsZU1vZGFsL1RhYmxlTW9kYWwuc3R5bGVzLnRzeCIsIi4vc2VydmVycy9ob21lL3VpL2NvbXBvbmVudHMvTG9nZ2VyL0xvZ2dlci50c3giLCIuL3NlcnZlcnMvaG9tZS91aS9jb21wb25lbnRzL0xvZ2dlci9Mb2dnZXIuc3R5bGVzLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQ2pCLElBQUFBLGdCQUFrQjs7O0FDQWxCLElBQUFDLGdCQUFrQjs7O0FDRGxCLElBQUFDLGdCQUFnQzs7O0FDQWhDLG1CQUFnQzs7O0FDRXpCLElBQU0sU0FBd0M7QUFBQSxFQUNuRCxVQUFVO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsSUFDWixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxjQUFjO0FBQUEsSUFDZCxRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLEVBQ2I7QUFB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QWMsT0FBTyxLQUFJLDRCQUE0QixPQUFPLEVBQUc7QUFBQSxFQUMzSTtBQUNGOzs7QUwvQ08sSUFBTSxjQUFjLENBQUMsV0FBMkI7QUFDckQsTUFBSSxVQUFVLElBQUssU0FBUSxTQUFTLEtBQUssUUFBUSxDQUFDLElBQUk7QUFDdEQsTUFBSSxVQUFVLElBQUssU0FBUSxTQUFTLEtBQUssUUFBUSxDQUFDLElBQUk7QUFDdEQsTUFBSSxVQUFVLElBQUssU0FBUSxTQUFTLEtBQUssUUFBUSxDQUFDLElBQUk7QUFDdEQsU0FBTyxPQUFPLFNBQVM7QUFDekI7QUFFTyxJQUFNLFlBQVksQ0FBQyxRQUF3QjtBQUNoRCxNQUFJLE9BQU8sRUFBRyxRQUFPLElBQUksUUFBUSxDQUFDLElBQUk7QUFDdEMsVUFBUSxNQUFNLE1BQU0sUUFBUSxDQUFDLElBQUk7QUFDbkM7OztBRFJBLGVBQXNCLEtBQUssSUFBdUI7QUFDaEQsUUFBTSxTQUFpQixHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDekQsUUFBTSxTQUFTLEdBQUcsVUFBVSxNQUFNO0FBRWxDLFFBQU0sa0JBQWtCLFVBQVUsT0FBTyxNQUFNO0FBQy9DLFFBQU0sbUJBQW1CLFVBQVUsT0FBTyxPQUFPO0FBRWpELFFBQU0sT0FBTztBQUFBLElBQ1gsVUFBVSxPQUFPO0FBQUEsSUFDakIsSUFBSSxPQUFPO0FBQUEsSUFDWCxrQkFBa0IsT0FBTztBQUFBLElBQ3pCLHNCQUFzQixPQUFPO0FBQUEsSUFDN0IsZUFBZSxPQUFPO0FBQUEsSUFDdEIsZ0JBQWdCLEdBQUcsUUFBUSxPQUFPLGtCQUFrQixHQUFHLE1BQU07QUFBQSxJQUM3RCxVQUFVLEdBQUcsUUFBUSxPQUFPLFlBQVksR0FBRyxTQUFTO0FBQUEsSUFDcEQsZ0JBQWdCLFlBQVksT0FBTyxrQkFBa0IsQ0FBQztBQUFBLElBQ3RELGNBQWMsT0FBTztBQUFBLElBQ3JCLFVBQVUsT0FBTztBQUFBLElBQ2pCLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULGdCQUFnQixPQUFPO0FBQUEsSUFDdkIsbUJBQW1CLE9BQU87QUFBQSxJQUMxQixzQkFBc0IsT0FBTztBQUFBLElBQzdCLGVBQWUsT0FBTztBQUFBLEVBQ3hCO0FBRUEsS0FBRyxVQUFVLDhCQUFBRSxRQUFBLGNBQUMsVUFBTyxNQUFLLDJCQUEwQixTQUFRLFVBQVMsU0FBUyxNQUFNLENBQUU7QUFHdEYsUUFBTSxHQUFHLE1BQU0sR0FBSTtBQUVuQixLQUFHLFVBQVUsOEJBQUFBLFFBQUEsY0FBQyxjQUFXLE1BQVksTUFBSyxPQUFNLE9BQU0sU0FBUSxTQUFTLEdBQUcsS0FBSyxRQUFRLFNBQVMsU0FBUSxRQUFPLENBQUU7QUFDbkg7IiwibmFtZXMiOlsiaW1wb3J0X3JlYWN0IiwiaW1wb3J0X3JlYWN0IiwiaW1wb3J0X3JlYWN0IiwiUmVhY3QiLCJzdHlsZXMiLCJSZWFjdCIsInN0eWxlcyIsInZhbHVlIiwiaW1wb3J0X3JlYWN0Iiwic3R5bGVzIiwiUmVhY3QiLCJzdHlsZXMiLCJSZWFjdCJdfQ==
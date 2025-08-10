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

// servers/home/game/v0/helpers/purchaseServers.tsx
var import_react2 = __toESM(require_react());

// servers/home/ui/components/Logger/Model.tsx
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

// servers/home/game/v0/helpers/purchaseServers.tsx
async function main(ns) {
  const ram = ns.args[0] || 8;
  const maxServers = ns.getPurchasedServerLimit();
  if (ns.getPurchasedServers().length >= maxServers) {
    ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: "[FAIL] Maximum number of servers already purchased.", variant: "fail" }));
    return;
  }
  ns.disableLog("sleep");
  ns.disableLog("getServerMoneyAvailable");
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: `[INFO] Auto-purchase script started with ${ram}GB RAM per server`, variant: "info" }));
  ns.tprint(`Auto-purchase script started. Target RAM: ${ram}GB per server`);
  while (true) {
    const ownedServers = ns.getPurchasedServers();
    if (ownedServers.length < maxServers) {
      const cost = ns.getPurchasedServerCost(ram);
      if (ns.getServerMoneyAvailable("home") >= cost) {
        const newName = `pserv-${ownedServers.length}`;
        const server = ns.purchaseServer(newName, ram);
        ns.tprintRaw(
          /* @__PURE__ */ import_react2.default.createElement(
            Model,
            {
              text: `\u2705 Purchased ${server} (${ram}GB) for ${ns.nFormat(cost, "$0.00a")} || ownedServers: ${ownedServers.length + 1}/${maxServers}`,
              variant: "info"
            }
          )
        );
      }
    }
    await ns.sleep(1e3);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9oZWxwZXJzL3B1cmNoYXNlU2VydmVycy50c3giLCIuL3NlcnZlcnMvaG9tZS91aS9jb21wb25lbnRzL0xvZ2dlci9Nb2RlbC50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0VqQixJQUFBQSxnQkFBa0I7OztBQ0ZsQixtQkFBMkM7QUFTcEMsU0FBUyxNQUFNLEVBQUUsTUFBTSxTQUFTLFNBQVMsU0FBUyxHQUFnQjtBQUN2RSxRQUFNLGtCQUFrQjtBQUN4QixRQUFNLFdBQVc7QUFFakIsVUFBUSxTQUFTO0FBQUEsSUFDZixLQUFLO0FBQ0gsYUFDRSw2QkFBQUMsUUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsT0FBTztBQUFBLFlBQ0wsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsVUFBVTtBQUFBLFlBQ1YsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsZUFBZTtBQUFBLFVBQ2pCO0FBQUE7QUFBQSxRQUNDO0FBQUEsTUFDSDtBQUFBLElBR0osS0FBSztBQUNILGFBQ0UsNkJBQUFBLFFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU87QUFBQSxZQUNMLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxZQUNSLGNBQWM7QUFBQSxZQUNkLE9BQU87QUFBQSxZQUNQLFVBQVU7QUFBQSxZQUNWLGNBQWM7QUFBQSxZQUNkLE9BQU87QUFBQSxZQUNQLFlBQVk7QUFBQSxZQUNaLFVBQVU7QUFBQSxZQUNWLFlBQVk7QUFBQSxZQUNaLFdBQVc7QUFBQSxZQUNYLGVBQWU7QUFBQSxVQUNqQjtBQUFBO0FBQUEsUUFDQztBQUFBLE1BQ0g7QUFBQSxJQUVKLEtBQUs7QUFDSCxhQUNFLDZCQUFBQSxRQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFPO0FBQUEsWUFDTCxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxVQUFVO0FBQUEsWUFDVixjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxZQUFZO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixZQUFZO0FBQUEsWUFDWixXQUFXO0FBQUEsWUFDWCxlQUFlO0FBQUEsVUFDakI7QUFBQTtBQUFBLFFBQ0M7QUFBQSxNQUNIO0FBQUEsSUFFSixLQUFLO0FBQ0gsYUFDRSw2QkFBQUEsUUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsT0FBTztBQUFBLFlBQ0wsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsVUFBVTtBQUFBLFlBQ1YsY0FBYztBQUFBLFlBQ2QsT0FBTztBQUFBLFlBQ1AsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsZUFBZTtBQUFBLFlBQ2YsZUFBZTtBQUFBLFVBQ2pCO0FBQUE7QUFBQSxRQUFHO0FBQUEsUUFDQTtBQUFBLE1BQ0w7QUFBQSxJQUVKLEtBQUs7QUFDSCxhQUNFLDZCQUFBQSxRQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFPO0FBQUEsWUFDTCxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxVQUFVO0FBQUEsWUFDVixjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxZQUFZO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixZQUFZO0FBQUEsWUFDWixXQUFXO0FBQUEsWUFDWCxlQUFlO0FBQUEsWUFDZixZQUFZO0FBQUEsVUFDZDtBQUFBO0FBQUEsUUFBRztBQUFBLFFBQ0E7QUFBQSxNQUNMO0FBQUEsSUFFSixLQUFLO0FBQ0gsWUFBTSxDQUFDLE1BQU0sT0FBTyxRQUFJLHVCQUFTLEVBQUU7QUFDbkMsWUFBTSxDQUFDLFNBQVMsVUFBVSxRQUFJLHVCQUFTLElBQUk7QUFFM0Msa0NBQVUsTUFBTTtBQUNkLFlBQUksVUFBVTtBQUNkLGNBQU0sV0FBVyxZQUFZLE1BQU07QUFDakMscUJBQVc7QUFDWCxrQkFBUSxDQUFDLFNBQVMsT0FBTyxHQUFHO0FBQzVCLGNBQUksV0FBVyxTQUFTO0FBQ3RCLDBCQUFjLFFBQVE7QUFDdEIsdUJBQVcsTUFBTSxXQUFXLEtBQUssR0FBRyxHQUFHO0FBQUEsVUFDekM7QUFBQSxRQUNGLEdBQUcsR0FBRztBQUNOLGVBQU8sTUFBTSxjQUFjLFFBQVE7QUFBQSxNQUNyQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRVosVUFBSSxDQUFDLFFBQVMsUUFBTztBQUVyQixhQUNFLDZCQUFBQSxRQUFBLDJCQUFBQSxRQUFBLGdCQUNFLDZCQUFBQSxRQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFPO0FBQUEsWUFDTCxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxVQUFVO0FBQUEsWUFDVixXQUFXO0FBQUEsWUFDWCxPQUFPO0FBQUEsWUFDUCxZQUFZO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixXQUFXO0FBQUEsWUFDWCxVQUFVO0FBQUEsWUFDVixRQUFRO0FBQUEsWUFDUixPQUFPO0FBQUEsWUFDUCxlQUFlO0FBQUEsVUFDakI7QUFBQTtBQUFBLFFBQ0M7QUFBQSxRQUFLO0FBQUEsUUFBRTtBQUFBLE1BQ1YsQ0FDRjtBQUFBLElBR0o7QUFDRSxhQUFPLDZCQUFBQSxRQUFBLGNBQUMsU0FBSSxPQUFPLEVBQUUsWUFBWSxPQUFPLFNBQVMsUUFBUSxRQUFRLE9BQU8sY0FBYyxPQUFPLEtBQUksNEJBQTRCLE9BQU8sRUFBRztBQUFBLEVBQzNJO0FBQ0Y7OztBRGxLQSxlQUFzQixLQUFLLElBQVE7QUFDakMsUUFBTSxNQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUs7QUFDL0IsUUFBTSxhQUFhLEdBQUcsd0JBQXdCO0FBRTlDLE1BQUksR0FBRyxvQkFBb0IsRUFBRSxVQUFVLFlBQVk7QUFDakQsT0FBRyxVQUFVLDhCQUFBQyxRQUFBLGNBQUMsU0FBTSxNQUFLLHVEQUFzRCxTQUFRLFFBQU8sQ0FBRTtBQUNoRztBQUFBLEVBQ0Y7QUFFQSxLQUFHLFdBQVcsT0FBTztBQUNyQixLQUFHLFdBQVcseUJBQXlCO0FBRXZDLEtBQUcsVUFBVSw4QkFBQUEsUUFBQSxjQUFDLFNBQU0sTUFBTSw0Q0FBNEMsR0FBRyxxQkFBcUIsU0FBUSxRQUFPLENBQUU7QUFFL0csS0FBRyxPQUFPLDZDQUE2QyxHQUFHLGVBQWU7QUFFekUsU0FBTyxNQUFNO0FBRVgsVUFBTSxlQUFlLEdBQUcsb0JBQW9CO0FBQzVDLFFBQUksYUFBYSxTQUFTLFlBQVk7QUFDcEMsWUFBTSxPQUFPLEdBQUcsdUJBQXVCLEdBQUc7QUFFMUMsVUFBSSxHQUFHLHdCQUF3QixNQUFNLEtBQUssTUFBTTtBQUM5QyxjQUFNLFVBQVUsU0FBUyxhQUFhLE1BQU07QUFDNUMsY0FBTSxTQUFTLEdBQUcsZUFBZSxTQUFTLEdBQUc7QUFFN0MsV0FBRztBQUFBLFVBQ0QsOEJBQUFBLFFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLE1BQU0sb0JBQWUsTUFBTSxLQUFLLEdBQUcsV0FBVyxHQUFHLFFBQVEsTUFBTSxRQUFRLENBQUMscUJBQXFCLGFBQWEsU0FBUyxDQUFDLElBQUksVUFBVTtBQUFBLGNBQ2xJLFNBQVE7QUFBQTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxVQUFNLEdBQUcsTUFBTSxHQUFJO0FBQUEsRUFDckI7QUFDRjsiLCJuYW1lcyI6WyJpbXBvcnRfcmVhY3QiLCJSZWFjdCIsIlJlYWN0Il19
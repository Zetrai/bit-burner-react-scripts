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

// servers/home/game/v0/helpers/crawler.tsx
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

// servers/home/game/v0/helpers/crawler.tsx
var IGNORE = ["darkweb"];
function disable_logs(ns) {
  var logs = ["scan", "run", "getServerRequiredHackingLevel", "getHackingLevel"];
  for (var i in logs) {
    ns.disableLog(logs[i]);
  }
}
function resetServers(ns) {
  ns.write("/game/v0/data/servers.txt", "", "w");
  ns.write("/game/v0/data/serversHacked.txt", "", "w");
  ns.write("/game/v0/data/serversNotHacked.txt", "", "w");
  ns.write("/game/v0/data/dynamicModelText.txt", "", "w");
}
async function main(ns) {
  ns.print("Crawler running...");
  disable_logs(ns);
  resetServers(ns);
  const visited = /* @__PURE__ */ new Set();
  const servers = [];
  async function scan(host) {
    if (visited.has(host)) return;
    visited.add(host);
    servers.push(host);
    if (!ns.hasRootAccess(host) && ns.getServerRequiredHackingLevel(host) <= ns.getHackingLevel() && !IGNORE.includes(host)) {
      ns.print("Attempting to hack ", host);
      ns.exec("/game/v0/helpers/worm.js", "home", 1, host);
      await ns.sleep(300);
    } else if (ns.hasRootAccess(host)) {
      ns.write("/game/v0/data/serversHacked.txt", `${host},`, "a");
    } else if (ns.getServerRequiredHackingLevel(host) > ns.getHackingLevel()) {
      ns.write("/game/v0/data/serversNotHacked.txt", `${host},`, "a");
    }
    const neighbors = ns.scan(host);
    for (const neighbor of neighbors) {
      await scan(neighbor);
    }
  }
  await scan("home");
  await ns.write("/game/v0/data/servers.txt", JSON.stringify(servers), "w");
  const dynamicModelText = ns.read("/game/v0/data/dynamicModelText.txt");
  const serversHacked = ns.read("/game/v0/data/serversHacked.txt").split(",");
  const serversnotHacked = ns.read("/game/v0/data/serversNotHacked.txt").split(",");
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: `[INFO] Crawled ${servers.length} servers`, variant: "normal" }));
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: `[INFO] Total Hacked Servers: ${serversHacked.length}`, variant: "normal" }));
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: `[INFO] Total Not Hacked Servers: ${serversnotHacked.length}`, variant: "normal" }));
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: `[INFO] Hacked Servers: ${serversHacked}`, variant: "normal" }));
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: dynamicModelText, variant: "normal" }));
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9oZWxwZXJzL2NyYXdsZXIudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbC50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0NqQixJQUFBQSxnQkFBa0I7OztBQ0RsQixtQkFBa0I7QUFRWCxTQUFTLE1BQU0sRUFBRSxNQUFNLFNBQVMsU0FBUyxHQUFnQjtBQUM5RCxVQUFRLFNBQVM7QUFBQSxJQUNmLEtBQUs7QUFDSCxhQUNFLDZCQUFBQyxRQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFPO0FBQUEsWUFDTCxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxjQUFjO0FBQUEsVUFDaEI7QUFBQTtBQUFBLFFBQ0M7QUFBQSxNQUNIO0FBQUEsSUFFSjtBQUNFLGFBQU8sNkJBQUFBLFFBQUEsY0FBQyxTQUFJLE9BQU8sRUFBRSxZQUFZLE9BQU8sU0FBUyxRQUFRLFFBQVEsT0FBTyxjQUFjLE9BQU8sS0FBSSw0QkFBNEIsT0FBTyxFQUFHO0FBQUEsRUFDM0k7QUFDRjs7O0FEdEJBLElBQU0sU0FBUyxDQUFDLFNBQVM7QUFFekIsU0FBUyxhQUFhLElBQUk7QUFDeEIsTUFBSSxPQUFPLENBQUMsUUFBUSxPQUFPLGlDQUFpQyxpQkFBaUI7QUFDN0UsV0FBUyxLQUFLLE1BQU07QUFDbEIsT0FBRyxXQUFXLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDdkI7QUFDRjtBQUVBLFNBQVMsYUFBYSxJQUFJO0FBQ3hCLEtBQUcsTUFBTSw2QkFBNkIsSUFBSSxHQUFHO0FBQzdDLEtBQUcsTUFBTSxtQ0FBbUMsSUFBSSxHQUFHO0FBQ25ELEtBQUcsTUFBTSxzQ0FBc0MsSUFBSSxHQUFHO0FBQ3RELEtBQUcsTUFBTSxzQ0FBc0MsSUFBSSxHQUFHO0FBQ3hEO0FBRUEsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxLQUFHLE1BQU0sb0JBQW9CO0FBRTdCLGVBQWEsRUFBRTtBQUNmLGVBQWEsRUFBRTtBQUVmLFFBQU0sVUFBVSxvQkFBSSxJQUFZO0FBQ2hDLFFBQU0sVUFBb0IsQ0FBQztBQUUzQixpQkFBZSxLQUFLLE1BQWM7QUFDaEMsUUFBSSxRQUFRLElBQUksSUFBSSxFQUFHO0FBQ3ZCLFlBQVEsSUFBSSxJQUFJO0FBQ2hCLFlBQVEsS0FBSyxJQUFJO0FBQ2pCLFFBQUksQ0FBQyxHQUFHLGNBQWMsSUFBSSxLQUFLLEdBQUcsOEJBQThCLElBQUksS0FBSyxHQUFHLGdCQUFnQixLQUFLLENBQUMsT0FBTyxTQUFTLElBQUksR0FBRztBQUN2SCxTQUFHLE1BQU0sdUJBQXVCLElBQUk7QUFDcEMsU0FBRyxLQUFLLDRCQUE0QixRQUFRLEdBQUcsSUFBSTtBQUNuRCxZQUFNLEdBQUcsTUFBTSxHQUFHO0FBQUEsSUFDcEIsV0FBVyxHQUFHLGNBQWMsSUFBSSxHQUFHO0FBQ2pDLFNBQUcsTUFBTSxtQ0FBbUMsR0FBRyxJQUFJLEtBQUssR0FBRztBQUFBLElBQzdELFdBQVcsR0FBRyw4QkFBOEIsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLEdBQUc7QUFDeEUsU0FBRyxNQUFNLHNDQUFzQyxHQUFHLElBQUksS0FBSyxHQUFHO0FBQUEsSUFDaEU7QUFDQSxVQUFNLFlBQVksR0FBRyxLQUFLLElBQUk7QUFDOUIsZUFBVyxZQUFZLFdBQVc7QUFDaEMsWUFBTSxLQUFLLFFBQVE7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLEtBQUssTUFBTTtBQUNqQixRQUFNLEdBQUcsTUFBTSw2QkFBNkIsS0FBSyxVQUFVLE9BQU8sR0FBRyxHQUFHO0FBRXhFLFFBQU0sbUJBQW1CLEdBQUcsS0FBSyxvQ0FBb0M7QUFDckUsUUFBTSxnQkFBZ0IsR0FBRyxLQUFLLGlDQUFpQyxFQUFFLE1BQU0sR0FBRztBQUMxRSxRQUFNLG1CQUFtQixHQUFHLEtBQUssb0NBQW9DLEVBQUUsTUFBTSxHQUFHO0FBRWhGLEtBQUcsVUFBVSw4QkFBQUMsUUFBQSxjQUFDLFNBQU0sTUFBTSxrQkFBa0IsUUFBUSxNQUFNLFlBQVksU0FBUSxVQUFTLENBQUU7QUFDekYsS0FBRyxVQUFVLDhCQUFBQSxRQUFBLGNBQUMsU0FBTSxNQUFNLGdDQUFnQyxjQUFjLE1BQU0sSUFBSSxTQUFRLFVBQVMsQ0FBRTtBQUNyRyxLQUFHLFVBQVUsOEJBQUFBLFFBQUEsY0FBQyxTQUFNLE1BQU0sb0NBQW9DLGlCQUFpQixNQUFNLElBQUksU0FBUSxVQUFTLENBQUU7QUFDNUcsS0FBRyxVQUFVLDhCQUFBQSxRQUFBLGNBQUMsU0FBTSxNQUFNLDBCQUEwQixhQUFhLElBQUksU0FBUSxVQUFTLENBQUU7QUFDeEYsS0FBRyxVQUFVLDhCQUFBQSxRQUFBLGNBQUMsU0FBTSxNQUFNLGtCQUFrQixTQUFRLFVBQVMsQ0FBRTtBQUNqRTsiLCJuYW1lcyI6WyJpbXBvcnRfcmVhY3QiLCJSZWFjdCIsIlJlYWN0Il19
// servers/home/home/home/test.js
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
var require_react = __commonJS({
  "react:react"(exports, module) {
    module.exports = React;
  }
});
var import_react = __toESM(require_react());
function MyComponent() {
  const [count, setCount] = (0, import_react.useState)(0);
  return /* @__PURE__ */ import_react.default.createElement("div", null, "Count ", count, " ", /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setCount(count + 1) }, "Add to count"));
}
async function main(ns) {
  const target = `${ns.args[0]}`;
  const server = ns.getServer(target);
  const ramAvailable = server.maxRam - server.ramUsed;
  const ramPerThread = ns.getScriptRam("/scripts/hack.js");
  const maxThreads = Math.floor(ramAvailable / ramPerThread);
  ns.tprint("------------------------------------");
  ns.tprint("Server Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Host Name: " + server.hostname);
  ns.tprint("IP: " + server.ip);
  ns.tprint("Owned By: " + server.organizationName);
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Security Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Required Hacking Level: " + server.requiredHackingSkill);
  ns.tprint("Min Security level: " + server.minDifficulty);
  ns.tprint(
    "Current security: " + ns.nFormat(server.hackDifficulty || 0, "0.00")
  );
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Money Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Max Money: " + ns.nFormat(server.moneyMax || 0, "$0.000a"));
  ns.tprint(
    "Current Money: " + ns.nFormat(server.moneyAvailable || 0, "$0.000a")
  );
  ns.tprint("Server Growth: " + server.serverGrowth);
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Hardware Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Cores: " + server.cpuCores);
  ns.tprint("Max RAM: " + server.maxRam);
  ns.tprint("Used RAM: " + server.ramUsed);
  ns.tprint("Max Threads: " + maxThreads);
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Hacking Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Rooted: " + server.hasAdminRights);
  ns.tprint("Backdoored: " + server.backdoorInstalled);
  ns.tprint("Required Open Ports: " + server.numOpenPortsRequired);
  ns.tprint("Ports Currently Open: " + server.openPortCount);
  ns.tprint("------------------------------------");
  ns.tprintRaw(/* @__PURE__ */ import_react.default.createElement(MyComponent, null));
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zZXJ2ZXJzL2hvbWUvaG9tZS9yZWFjdDpyZWFjdCIsIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zZXJ2ZXJzL2hvbWUvaG9tZS9zZXJ2ZXJzL2hvbWUvdGVzdC50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBLGdCQUFBLFdBQUE7RUFBQSxjQUFBLFNBQUEsUUFBQTtBQUFBLFdBQU8sVUFBVTtFQUFBO0FBQUEsQ0FBQTtBQ0VqQixJQUFBLGVBQWdDLFFBQUEsY0FBQSxDQUFBO0FBRWhDLFNBQVMsY0FBYztBQUNyQixRQUFNLENBQUMsT0FBTyxRQUFRLEtBQUEsR0FBSSxhQUFBLFVBQVMsQ0FBQztBQUVwQyxTQUNFLDZCQUFBQSxRQUFBLGNBQUMsT0FBQSxNQUFJLFVBQ0ksT0FBTyxLQUNkLDZCQUFBQSxRQUFBLGNBQUMsVUFBQSxFQUFPLFNBQVMsTUFBTSxTQUFTLFFBQVEsQ0FBQyxFQUFBLEdBQUcsY0FBWSxDQUMxRDtBQUVKO0FBRUEsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxRQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVCLFFBQU0sU0FBaUIsR0FBRyxVQUFVLE1BQU07QUFFMUMsUUFBTSxlQUFlLE9BQU8sU0FBUyxPQUFPO0FBQzVDLFFBQU0sZUFBZSxHQUFHLGFBQWEsa0JBQWtCO0FBQ3ZELFFBQU0sYUFBYSxLQUFLLE1BQU0sZUFBZSxZQUFZO0FBRXpELEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLG1CQUFtQjtBQUM3QixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxnQkFBZ0IsT0FBTyxRQUFRO0FBQ3pDLEtBQUcsT0FBTyxTQUFTLE9BQU8sRUFBRTtBQUM1QixLQUFHLE9BQU8sZUFBZSxPQUFPLGdCQUFnQjtBQUNoRCxLQUFHLE9BQU8sRUFBRTtBQUNaLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLHFCQUFxQjtBQUMvQixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyw2QkFBNkIsT0FBTyxvQkFBb0I7QUFDbEUsS0FBRyxPQUFPLHlCQUF5QixPQUFPLGFBQWE7QUFDdkQsS0FBRztJQUNELHVCQUF1QixHQUFHLFFBQVEsT0FBTyxrQkFBa0IsR0FBRyxNQUFNO0VBQ3RFO0FBQ0EsS0FBRyxPQUFPLEVBQUU7QUFDWixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxrQkFBa0I7QUFDNUIsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sZ0JBQWdCLEdBQUcsUUFBUSxPQUFPLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDckUsS0FBRztJQUNELG9CQUFvQixHQUFHLFFBQVEsT0FBTyxrQkFBa0IsR0FBRyxTQUFTO0VBQ3RFO0FBQ0EsS0FBRyxPQUFPLG9CQUFvQixPQUFPLFlBQVk7QUFDakQsS0FBRyxPQUFPLEVBQUU7QUFDWixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxxQkFBcUI7QUFDL0IsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sWUFBWSxPQUFPLFFBQVE7QUFDckMsS0FBRyxPQUFPLGNBQWMsT0FBTyxNQUFNO0FBQ3JDLEtBQUcsT0FBTyxlQUFlLE9BQU8sT0FBTztBQUN2QyxLQUFHLE9BQU8sa0JBQWtCLFVBQVU7QUFDdEMsS0FBRyxPQUFPLEVBQUU7QUFDWixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxvQkFBb0I7QUFDOUIsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sYUFBYSxPQUFPLGNBQWM7QUFDNUMsS0FBRyxPQUFPLGlCQUFpQixPQUFPLGlCQUFpQjtBQUNuRCxLQUFHLE9BQU8sMEJBQTBCLE9BQU8sb0JBQW9CO0FBQy9ELEtBQUcsT0FBTywyQkFBMkIsT0FBTyxhQUFhO0FBQ3pELEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxVQUFVLDZCQUFBQSxRQUFBLGNBQUMsYUFBQSxJQUFZLENBQUU7QUFDOUI7IiwibmFtZXMiOlsiUmVhY3QiXX0=
// servers/home/home/test.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvcmVhY3Q6cmVhY3QiLCIuL3NlcnZlcnMvaG9tZS9ob21lL3NlcnZlcnMvaG9tZS90ZXN0LnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsZ0JBQUEsV0FBQTtFQUFBLGNBQUEsU0FBQSxRQUFBO0FBQUEsV0FBTyxVQUFVO0VBQUE7QUFBQSxDQUFBO0FDRWpCLElBQUEsZUFBZ0MsUUFBQSxjQUFBLENBQUE7QUFFaEMsU0FBUyxjQUFjO0FBQ3JCLFFBQU0sQ0FBQyxPQUFPLFFBQVEsS0FBQSxHQUFJLGFBQUEsVUFBUyxDQUFDO0FBRXBDLFNBQ0UsNkJBQUFBLFFBQUEsY0FBQyxPQUFBLE1BQUksVUFDSSxPQUFPLEtBQ2QsNkJBQUFBLFFBQUEsY0FBQyxVQUFBLEVBQU8sU0FBUyxNQUFNLFNBQVMsUUFBUSxDQUFDLEVBQUEsR0FBRyxjQUFZLENBQzFEO0FBRUo7QUFFQSxlQUFzQixLQUFLLElBQXVCO0FBQ2hELFFBQU0sU0FBUyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDNUIsUUFBTSxTQUFpQixHQUFHLFVBQVUsTUFBTTtBQUUxQyxRQUFNLGVBQWUsT0FBTyxTQUFTLE9BQU87QUFDNUMsUUFBTSxlQUFlLEdBQUcsYUFBYSxrQkFBa0I7QUFDdkQsUUFBTSxhQUFhLEtBQUssTUFBTSxlQUFlLFlBQVk7QUFFekQsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sbUJBQW1CO0FBQzdCLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLGdCQUFnQixPQUFPLFFBQVE7QUFDekMsS0FBRyxPQUFPLFNBQVMsT0FBTyxFQUFFO0FBQzVCLEtBQUcsT0FBTyxlQUFlLE9BQU8sZ0JBQWdCO0FBQ2hELEtBQUcsT0FBTyxFQUFFO0FBQ1osS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8scUJBQXFCO0FBQy9CLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLDZCQUE2QixPQUFPLG9CQUFvQjtBQUNsRSxLQUFHLE9BQU8seUJBQXlCLE9BQU8sYUFBYTtBQUN2RCxLQUFHO0lBQ0QsdUJBQXVCLEdBQUcsUUFBUSxPQUFPLGtCQUFrQixHQUFHLE1BQU07RUFDdEU7QUFDQSxLQUFHLE9BQU8sRUFBRTtBQUNaLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLGtCQUFrQjtBQUM1QixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxnQkFBZ0IsR0FBRyxRQUFRLE9BQU8sWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUNyRSxLQUFHO0lBQ0Qsb0JBQW9CLEdBQUcsUUFBUSxPQUFPLGtCQUFrQixHQUFHLFNBQVM7RUFDdEU7QUFDQSxLQUFHLE9BQU8sb0JBQW9CLE9BQU8sWUFBWTtBQUNqRCxLQUFHLE9BQU8sRUFBRTtBQUNaLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLHFCQUFxQjtBQUMvQixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxZQUFZLE9BQU8sUUFBUTtBQUNyQyxLQUFHLE9BQU8sY0FBYyxPQUFPLE1BQU07QUFDckMsS0FBRyxPQUFPLGVBQWUsT0FBTyxPQUFPO0FBQ3ZDLEtBQUcsT0FBTyxrQkFBa0IsVUFBVTtBQUN0QyxLQUFHLE9BQU8sRUFBRTtBQUNaLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLG9CQUFvQjtBQUM5QixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxhQUFhLE9BQU8sY0FBYztBQUM1QyxLQUFHLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCO0FBQ25ELEtBQUcsT0FBTywwQkFBMEIsT0FBTyxvQkFBb0I7QUFDL0QsS0FBRyxPQUFPLDJCQUEyQixPQUFPLGFBQWE7QUFDekQsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLFVBQVUsNkJBQUFBLFFBQUEsY0FBQyxhQUFBLElBQVksQ0FBRTtBQUM5QjsiLCJuYW1lcyI6WyJSZWFjdCJdfQ==
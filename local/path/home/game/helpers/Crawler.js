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

// servers/home/game/helpers/Crawler.tsx
var import_react2 = __toESM(require_react());

// servers/home/ui/components/Model/Model.tsx
var import_react = __toESM(require_react());
function Model({ text, children }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { background: "purple", padding: "20px", border: "2px", borderRadius: "10px" } }, text);
}

// servers/home/game/helpers/Crawler.tsx
var IGNORE = ["darkweb"];
function disable_logs(ns) {
  var logs = ["scan", "run", "getServerRequiredHackingLevel", "getHackingLevel"];
  for (var i in logs) {
    ns.disableLog(logs[i]);
  }
}
async function main(ns) {
  ns.ui.openTail();
  ns.print("Crawler running...");
  disable_logs(ns);
  let servers = Array(ns.scan())[0];
  let serv_set = Array(...servers);
  serv_set.push("home");
  let i = 0;
  while (i < servers.length) {
    let server = servers[i];
    if (!ns.hasRootAccess(server) && ns.getServerRequiredHackingLevel(server) <= ns.getHackingLevel() && !IGNORE.includes(server)) {
      await ns.sleep(200);
    }
    let s = ns.scan(server);
    for (let j in s) {
      let con = s[j];
      if (!serv_set.includes(con)) {
        serv_set.push(con);
        servers.push(con);
      }
    }
    i += 1;
  }
  ns.tprintRaw(/* @__PURE__ */ import_react2.default.createElement(Model, { text: `Crawled ${serv_set.length} servers` }));
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS9oZWxwZXJzL0NyYXdsZXIudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbC50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0NqQixJQUFBQSxnQkFBa0I7OztBQ0RsQixtQkFBa0I7QUFPWCxTQUFTLE1BQU0sRUFBRSxNQUFNLFNBQVMsR0FBZ0I7QUFDckQsU0FBTyw2QkFBQUMsUUFBQSxjQUFDLFNBQUksT0FBTyxFQUFFLFlBQVksVUFBVSxTQUFTLFFBQVEsUUFBUSxPQUFPLGNBQWMsT0FBTyxLQUFJLElBQUs7QUFDM0c7OztBREpBLElBQU0sU0FBUyxDQUFDLFNBQVM7QUFFekIsU0FBUyxhQUFhLElBQUk7QUFDeEIsTUFBSSxPQUFPLENBQUMsUUFBUSxPQUFPLGlDQUFpQyxpQkFBaUI7QUFDN0UsV0FBUyxLQUFLLE1BQU07QUFDbEIsT0FBRyxXQUFXLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDdkI7QUFDRjtBQUVBLGVBQXNCLEtBQUssSUFBdUI7QUFDaEQsS0FBRyxHQUFHLFNBQVM7QUFDZixLQUFHLE1BQU0sb0JBQW9CO0FBSTdCLGVBQWEsRUFBRTtBQUNmLE1BQUksVUFBVSxNQUFNLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNoQyxNQUFJLFdBQVcsTUFBTSxHQUFHLE9BQU87QUFDL0IsV0FBUyxLQUFLLE1BQU07QUFFcEIsTUFBSSxJQUFJO0FBQ1IsU0FBTyxJQUFJLFFBQVEsUUFBUTtBQUN6QixRQUFJLFNBQVMsUUFBUSxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxHQUFHLGNBQWMsTUFBTSxLQUFLLEdBQUcsOEJBQThCLE1BQU0sS0FBSyxHQUFHLGdCQUFnQixLQUFLLENBQUMsT0FBTyxTQUFTLE1BQU0sR0FBRztBQUc3SCxZQUFNLEdBQUcsTUFBTSxHQUFHO0FBQUEsSUFDcEI7QUFDQSxRQUFJLElBQUksR0FBRyxLQUFLLE1BQU07QUFDdEIsYUFBUyxLQUFLLEdBQUc7QUFDZixVQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsVUFBSSxDQUFDLFNBQVMsU0FBUyxHQUFHLEdBQUc7QUFFM0IsaUJBQVMsS0FBSyxHQUFHO0FBQ2pCLGdCQUFRLEtBQUssR0FBRztBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUNBLFNBQUs7QUFBQSxFQUNQO0FBRUEsS0FBRyxVQUFVLDhCQUFBQyxRQUFBLGNBQUMsU0FBTSxNQUFNLFdBQVcsU0FBUyxNQUFNLFlBQVksQ0FBRTtBQUNwRTsiLCJuYW1lcyI6WyJpbXBvcnRfcmVhY3QiLCJSZWFjdCIsIlJlYWN0Il19
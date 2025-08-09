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

// servers/home/context/serverContext.tsx
var import_react = __toESM(require_react());
var ServerContext = (0, import_react.createContext)({
  servers: [],
  setServers: () => {
  }
});
var ServerProvider = ({ children }) => {
  const [servers, setServers] = import_react.default.useState([
    "n00dles",
    "foodnstuff",
    "sigma-cosmetics",
    "joesguns",
    "harakiri-sushi",
    "hong-fang-tea",
    "zer0",
    "max-hardware",
    "the-hub",
    "CSEC",
    "avmnite-02h",
    "I.I.I.I",
    "run4theh111z",
    "w0r1d_d43m0n",
    "silver-helix",
    "phantasy",
    "crush-fitness",
    "comptek",
    "netlink"
  ]);
  return /* @__PURE__ */ import_react.default.createElement(ServerContext.Provider, { value: { servers, setServers } }, children);
};
var useServerContext = () => import_react.default.useContext(ServerContext);
export {
  ServerContext,
  ServerProvider,
  useServerContext
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvY29udGV4dC9zZXJ2ZXJDb250ZXh0LnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCLG1CQUFxQztBQUU5QixJQUFNLG9CQUFnQiw0QkFHMUI7QUFBQSxFQUNELFNBQVMsQ0FBQztBQUFBLEVBQ1YsWUFBWSxNQUFNO0FBQUEsRUFBQztBQUNyQixDQUFDO0FBQ00sSUFBTSxpQkFBMEQsQ0FBQyxFQUFFLFNBQVMsTUFBTTtBQUN2RixRQUFNLENBQUMsU0FBUyxVQUFVLElBQUksYUFBQUEsUUFBTSxTQUFtQjtBQUFBLElBQ3JEO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBRUQsU0FBTyw2QkFBQUEsUUFBQSxjQUFDLGNBQWMsVUFBZCxFQUF1QixPQUFPLEVBQUUsU0FBUyxXQUFXLEtBQUksUUFBUztBQUMzRTtBQUNPLElBQU0sbUJBQW1CLE1BQU0sYUFBQUEsUUFBTSxXQUFXLGFBQWE7IiwibmFtZXMiOlsiUmVhY3QiXX0=
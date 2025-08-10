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

// servers/home/game/v0/helpers/states.tsx
var import_react = __toESM(require_react());
function States({ text, type, action, children }) {
  const [servers, setServers] = (0, import_react.useState)([]);
  const [dynamicText, setDynamicText] = (0, import_react.useState)("");
  switch (type) {
    case "servers-insert":
      setServers((prevServers) => [...JSON.parse(text)]);
      return servers;
    case "servers-fetch":
      return servers;
    case "dynamicText-fetch":
      return dynamicText;
  }
}
export {
  States
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC9oZWxwZXJzL3N0YXRlcy50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0FqQixtQkFBZ0M7QUFTekIsU0FBUyxPQUFPLEVBQUUsTUFBTSxNQUFNLFFBQVEsU0FBUyxHQUFnQjtBQUNwRSxRQUFNLENBQUMsU0FBUyxVQUFVLFFBQUksdUJBQW1CLENBQUMsQ0FBQztBQUNuRCxRQUFNLENBQUMsYUFBYSxjQUFjLFFBQUksdUJBQWlCLEVBQUU7QUFFekQsVUFBUSxNQUFNO0FBQUEsSUFDWixLQUFLO0FBQ0gsaUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUssTUFBTSxJQUFJLENBQUMsQ0FBQztBQUNqRCxhQUFPO0FBQUEsSUFDVCxLQUFLO0FBQ0gsYUFBTztBQUFBLElBQ1QsS0FBSztBQUNILGFBQU87QUFBQSxFQUNYO0FBQ0Y7IiwibmFtZXMiOltdfQ==
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

// servers/home/ui/ui.tsx
var import_react = __toESM(require_react());
function MyComponent() {
  const [count, setCount] = (0, import_react.useState)(0);
  return /* @__PURE__ */ import_react.default.createElement("div", null, "Count ", count, " ", /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setCount(count + 1) }, "Add to count"));
}
async function main(ns) {
  ns.tprintRaw(/* @__PURE__ */ import_react.default.createElement(MyComponent, null));
}
export {
  MyComponent,
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvdWkudHN4Il0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNFakIsbUJBQWdDO0FBRXpCLFNBQVMsY0FBYztBQUM1QixRQUFNLENBQUMsT0FBTyxRQUFRLFFBQUksdUJBQVMsQ0FBQztBQUVwQyxTQUNFLDZCQUFBQSxRQUFBLGNBQUMsYUFBSSxVQUNJLE9BQU8sS0FDZCw2QkFBQUEsUUFBQSxjQUFDLFlBQU8sU0FBUyxNQUFNLFNBQVMsUUFBUSxDQUFDLEtBQUcsY0FBWSxDQUMxRDtBQUVKO0FBRUEsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxLQUFHLFVBQVUsNkJBQUFBLFFBQUEsY0FBQyxpQkFBWSxDQUFFO0FBQzlCOyIsIm5hbWVzIjpbIlJlYWN0Il19
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
export {
  Model
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbC50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0FqQixtQkFBa0I7QUFRWCxTQUFTLE1BQU0sRUFBRSxNQUFNLFNBQVMsU0FBUyxHQUFnQjtBQUM5RCxVQUFRLFNBQVM7QUFBQSxJQUNmLEtBQUs7QUFDSCxhQUNFLDZCQUFBQSxRQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFPO0FBQUEsWUFDTCxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsWUFDZCxPQUFPO0FBQUEsWUFDUCxjQUFjO0FBQUEsVUFDaEI7QUFBQTtBQUFBLFFBQ0M7QUFBQSxNQUNIO0FBQUEsSUFFSjtBQUNFLGFBQU8sNkJBQUFBLFFBQUEsY0FBQyxTQUFJLE9BQU8sRUFBRSxZQUFZLE9BQU8sU0FBUyxRQUFRLFFBQVEsT0FBTyxjQUFjLE9BQU8sS0FBSSw0QkFBNEIsT0FBTyxFQUFHO0FBQUEsRUFDM0k7QUFDRjsiLCJuYW1lcyI6WyJSZWFjdCJdfQ==
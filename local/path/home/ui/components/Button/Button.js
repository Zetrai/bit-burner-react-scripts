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

// servers/home/ui/components/Button/Button.tsx
var import_react = __toESM(require_react());
function Button({ label, onClick, children }) {
  const [count, setCount] = (0, import_react.useState)(0);
  return /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setCount(count + 1) }, count);
}
export {
  Button
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCLG1CQUFnQztBQVF6QixTQUFTLE9BQU8sRUFBRSxPQUFPLFNBQVMsU0FBUyxHQUFnQjtBQUNoRSxRQUFNLENBQUMsT0FBTyxRQUFRLFFBQUksdUJBQVMsQ0FBQztBQUNwQyxTQUFPLDZCQUFBQSxRQUFBLGNBQUMsWUFBTyxTQUFTLE1BQU0sU0FBUyxRQUFRLENBQUMsS0FBSSxLQUFNO0FBQzVEOyIsIm5hbWVzIjpbIlJlYWN0Il19
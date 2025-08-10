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

// servers/home/ui/components/Button/Button.styles.tsx
var styles = {
  crossBtn: {
    padding: "6px 10px",
    background: "rgba(0,0,0,0.6)",
    border: "2px solid rgba(0,255,200,0.8)",
    color: "#0fffc3",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: '"Share Tech Mono", monospace',
    transition: "all 0.2s ease-in-out",
    position: "absolute",
    top: "10px",
    right: "10px"
  },
  crossBtnHover: {
    background: "rgba(0,255,200,0.1)",
    boxShadow: "0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)"
  },
  successBtn: {
    padding: "6px 12px",
    background: "rgba(10, 20, 10, 0.85)",
    border: "2px solid rgba(0,255,140,0.8)",
    color: "#00ff8c",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: '"Share Tech Mono", monospace',
    transition: "all 0.2s ease-in-out"
  },
  successBtnHover: {
    background: "rgba(0,255,140,0.1)",
    boxShadow: "0 0 4px rgba(0,255,140,0.5), 0 0 8px rgba(0,255,140,0.3)"
  }
};

// servers/home/ui/components/Button/Button.tsx
function Button({ variant, onClick, children }) {
  const [isHovering, setIsHovering] = (0, import_react.useState)(false);
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      style: {
        ...styles[variant],
        ...isHovering && styles[`${variant}Hover`]
      },
      onClick,
      onMouseEnter: () => setIsHovering(true),
      onMouseLeave: () => setIsHovering(false)
    },
    children
  );
}

// servers/home/game/v0/test.tsx
var import_react2 = __toESM(require_react());
async function main(ns) {
  ns.ui.openTail();
  ns.print("Test script running...");
  ns.tprintRaw(
    /* @__PURE__ */ import_react2.default.createElement(Button, { label: "Click Me", onClick: () => ns.tprint("Button clicked!") }, /* @__PURE__ */ import_react2.default.createElement("span", null, "Custom Button Content"))
  );
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIi4vc2VydmVycy9ob21lL3VpL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5zdHlsZXMudHN4IiwiLi9zZXJ2ZXJzL2hvbWUvZ2FtZS92MC90ZXN0LnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCLG1CQUFnQzs7O0FDRXpCLElBQU0sU0FBd0M7QUFBQSxFQUNuRCxVQUFVO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsSUFDWixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxjQUFjO0FBQUEsSUFDZCxRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsSUFDVixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUVBLFlBQVk7QUFBQSxJQUNWLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxFQUNiO0FBQ0Y7OztBRHpCTyxTQUFTLE9BQU8sRUFBRSxTQUFTLFNBQVMsU0FBUyxHQUFnQjtBQUNsRSxRQUFNLENBQUMsWUFBWSxhQUFhLFFBQUksdUJBQVMsS0FBSztBQUNsRCxTQUNFLDZCQUFBQSxRQUFBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxPQUFPO0FBQUEsUUFDTCxHQUFHLE9BQU8sT0FBTztBQUFBLFFBQ2pCLEdBQUksY0FBYyxPQUFPLEdBQUcsT0FBTyxPQUE4QjtBQUFBLE1BQ25FO0FBQUEsTUFDQTtBQUFBLE1BQ0EsY0FBYyxNQUFNLGNBQWMsSUFBSTtBQUFBLE1BQ3RDLGNBQWMsTUFBTSxjQUFjLEtBQUs7QUFBQTtBQUFBLElBQ3RDO0FBQUEsRUFDSDtBQUVKOzs7QUV0QkEsSUFBQUMsZ0JBQWtCO0FBRWxCLGVBQXNCLEtBQUssSUFBdUI7QUFDaEQsS0FBRyxHQUFHLFNBQVM7QUFDZixLQUFHLE1BQU0sd0JBQXdCO0FBQ2pDLEtBQUc7QUFBQSxJQUNELDhCQUFBQyxRQUFBLGNBQUMsVUFBTyxPQUFNLFlBQVcsU0FBUyxNQUFNLEdBQUcsT0FBTyxpQkFBaUIsS0FDakUsOEJBQUFBLFFBQUEsY0FBQyxjQUFLLHVCQUFxQixDQUM3QjtBQUFBLEVBQ0Y7QUFDRjsiLCJuYW1lcyI6WyJSZWFjdCIsImltcG9ydF9yZWFjdCIsIlJlYWN0Il19
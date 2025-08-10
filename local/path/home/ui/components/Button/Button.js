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
export {
  Button
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0OnJlYWN0IiwiLi9zZXJ2ZXJzL2hvbWUvdWkvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIi4vc2VydmVycy9ob21lL3VpL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5zdHlsZXMudHN4Il0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNBakIsbUJBQWdDOzs7QUNFekIsSUFBTSxTQUF3QztBQUFBLEVBQ25ELFVBQVU7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxJQUNWLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsRUFDYjtBQUFBLEVBRUEsWUFBWTtBQUFBLElBQ1YsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsUUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2YsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLEVBQ2I7QUFDRjs7O0FEekJPLFNBQVMsT0FBTyxFQUFFLFNBQVMsU0FBUyxTQUFTLEdBQWdCO0FBQ2xFLFFBQU0sQ0FBQyxZQUFZLGFBQWEsUUFBSSx1QkFBUyxLQUFLO0FBQ2xELFNBQ0UsNkJBQUFBLFFBQUE7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE9BQU87QUFBQSxRQUNMLEdBQUcsT0FBTyxPQUFPO0FBQUEsUUFDakIsR0FBSSxjQUFjLE9BQU8sR0FBRyxPQUFPLE9BQThCO0FBQUEsTUFDbkU7QUFBQSxNQUNBO0FBQUEsTUFDQSxjQUFjLE1BQU0sY0FBYyxJQUFJO0FBQUEsTUFDdEMsY0FBYyxNQUFNLGNBQWMsS0FBSztBQUFBO0FBQUEsSUFDdEM7QUFBQSxFQUNIO0FBRUo7IiwibmFtZXMiOlsiUmVhY3QiXX0=
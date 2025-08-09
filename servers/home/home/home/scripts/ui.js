// servers/home/home/scripts/ui.js
var cheatyWindow = eval("window");
var cheatyDocument = eval("document");
var React = cheatyWindow.React;
var ReactDOM = cheatyWindow.ReactDOM;
var useState = React.useState;
var style = `.bb-button { background-color: rgb(51, 51, 51) }
.bb-button:hover { background-color: rgb(0, 0, 0) }
.bb-button:active { background-color: rgb(5, 61, 2) }`;
function Button({ children, onClick, disabled, margin }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("style", null, style),
    React.createElement("button", { className: "bb-button", onClick, style: {
      fontSize: "14px",
      padding: "6px 8px",
      color: "rgb(0, 204, 0)",
      border: "1px solid rgb(34, 34, 34)",
      borderRadius: "0px",
      fontFamily: "JetBrainsMono, 'Courier New', monospace",
      fontWeight: 500,
      lineHeight: 1.75,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      boxSizing: "border-box",
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
      outline: "none",
      margin: margin || "8px 0px 0px",
      verticalAlign: "middle",
      appearance: "none",
      transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    }, disabled }, children)
  );
}
async function main(ns) {
  const clickHandler = () => {
    ns.print("Button clicked!");
  };
  while (true) {
    ns.printRaw(React.createElement(Button, { onClick: async () => {
      await clickHandler();
    } }, "tertrf"));
    await ns.sleep(5e3);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL3VpLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBUUEsSUFBTSxlQUFlLEtBQUssUUFBUTtBQUNsQyxJQUFNLGlCQUFpQixLQUFLLFVBQVU7QUFJdEMsSUFBTSxRQUFRLGFBQWE7QUFDM0IsSUFBTSxXQUFXLGFBQWE7QUFDOUIsSUFBTSxXQUFXLE1BQU07QUFFdkIsSUFBTSxRQUFROzs7QUFJZCxTQUFTLE9BQU8sRUFDZCxVQUNBLFNBQ0EsVUFDQSxPQUFNLEdBTVA7QUFDQyxTQUNFLE1BQUE7SUFBQSxNQUFBO0lBQUE7SUFDRSxNQUFBLGNBQUEsU0FBQSxNQUFRLEtBQUs7SUFDYixNQUFBLGNBQUEsVUFBQSxFQUNFLFdBQVUsYUFDVixTQUNBLE9BQU87TUFDTCxVQUFVO01BQ1YsU0FBUztNQUNULE9BQU87TUFDUCxRQUFRO01BQ1IsY0FBYztNQUNkLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsU0FBUztNQUNULFFBQVEsVUFBVTtNQUNsQixlQUFlO01BQ2YsWUFBWTtNQUNaLFlBQ0U7T0FFSixTQUFrQixHQUNqQixRQUFRO0VBQ0Y7QUFHZjtBQUVBLGVBQXNCLEtBQUssSUFBTTtBQVMvQixRQUFNLGVBQWUsTUFBSztBQUN4QixPQUFHLE1BQU0saUJBQWlCO0VBQzVCO0FBRUEsU0FBTyxNQUFNO0FBQ1gsT0FBRyxTQUNELE1BQUEsY0FBQyxRQUFNLEVBQ0wsU0FBUyxZQUFXO0FBQ2xCLFlBQU0sYUFBWTtJQUNwQixFQUFDLEdBQUEsUUFBQSxDQUVNO0FBRVgsVUFBTSxHQUFHLE1BQU0sR0FBSTs7QUFFdkI7IiwibmFtZXMiOltdfQ==
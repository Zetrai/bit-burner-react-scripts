// servers/home/home/home/scripts/ui.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy91aS50c3giXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQVFBLElBQU0sZUFBZSxLQUFLLFFBQVE7QUFDbEMsSUFBTSxpQkFBaUIsS0FBSyxVQUFVO0FBSXRDLElBQU0sUUFBUSxhQUFhO0FBQzNCLElBQU0sV0FBVyxhQUFhO0FBQzlCLElBQU0sV0FBVyxNQUFNO0FBRXZCLElBQU0sUUFBUTs7O0FBSWQsU0FBUyxPQUFPLEVBQ2QsVUFDQSxTQUNBLFVBQ0EsT0FBTSxHQU1QO0FBQ0MsU0FDRSxNQUFBO0lBQUEsTUFBQTtJQUFBO0lBQ0UsTUFBQSxjQUFBLFNBQUEsTUFBUSxLQUFLO0lBQ2IsTUFBQSxjQUFBLFVBQUEsRUFDRSxXQUFVLGFBQ1YsU0FDQSxPQUFPO01BQ0wsVUFBVTtNQUNWLFNBQVM7TUFDVCxPQUFPO01BQ1AsUUFBUTtNQUNSLGNBQWM7TUFDZCxZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7TUFDWixRQUFRO01BQ1IsU0FBUztNQUNULFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLFNBQVM7TUFDVCxRQUFRLFVBQVU7TUFDbEIsZUFBZTtNQUNmLFlBQVk7TUFDWixZQUNFO09BRUosU0FBa0IsR0FDakIsUUFBUTtFQUNGO0FBR2Y7QUFFQSxlQUFzQixLQUFLLElBQU07QUFTL0IsUUFBTSxlQUFlLE1BQUs7QUFDeEIsT0FBRyxNQUFNLGlCQUFpQjtFQUM1QjtBQUVBLFNBQU8sTUFBTTtBQUNYLE9BQUcsU0FDRCxNQUFBLGNBQUMsUUFBTSxFQUNMLFNBQVMsWUFBVztBQUNsQixZQUFNLGFBQVk7SUFDcEIsRUFBQyxHQUFBLFFBQUEsQ0FFTTtBQUVYLFVBQU0sR0FBRyxNQUFNLEdBQUk7O0FBRXZCOyIsIm5hbWVzIjpbXX0=
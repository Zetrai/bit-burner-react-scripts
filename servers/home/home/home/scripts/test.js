// servers/home/home/scripts/test.js
var MyContent = ({ name }) => React.createElement(
  "span",
  null,
  "Hello ",
  name
);
async function main(ns) {
  ns.printRaw(React.createElement(MyContent, { name: "Your name" }));
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL3Rlc3QudHN4Il0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFNQSxJQUFNLFlBQVksQ0FBQyxFQUFFLEtBQUksTUFBd0IsTUFBQTtFQUFBO0VBQUE7O0VBQWE7QUFBSTtBQUVsRSxlQUFzQixLQUFLLElBQU07QUFDL0IsS0FBRyxTQUFTLE1BQUEsY0FBQyxXQUFTLEVBQUMsTUFBSyxZQUFXLENBQUEsQ0FBYTtBQUN0RDsiLCJuYW1lcyI6W119
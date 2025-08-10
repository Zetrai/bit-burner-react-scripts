// servers/home/game/v0/index.tsx
async function main(ns) {
  ns.print("Index running...");
  ns.exec("/game/v0/helpers/crawler.js", "home", 1, ns.getHostname());
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2dhbWUvdjAvaW5kZXgudHN4Il0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFFQSxlQUFzQixLQUFLLElBQXVCO0FBQ2hELEtBQUcsTUFBTSxrQkFBa0I7QUFFM0IsS0FBRyxLQUFLLCtCQUErQixRQUFRLEdBQUcsR0FBRyxZQUFZLENBQUM7QUFDcEU7IiwibmFtZXMiOltdfQ==
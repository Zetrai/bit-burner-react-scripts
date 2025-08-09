// servers/home/game/index.tsx
async function main(ns) {
  ns.print("Index running...");
  ns.exec("/game/helpers/Crawler.js", "home", 1, ns.getHostname());
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2dhbWUvaW5kZXgudHN4Il0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFHQSxlQUFzQixLQUFLLElBQXVCO0FBQ2hELEtBQUcsTUFBTSxrQkFBa0I7QUFFM0IsS0FBRyxLQUFLLDRCQUE0QixRQUFRLEdBQUcsR0FBRyxZQUFZLENBQUM7QUFDakU7IiwibmFtZXMiOltdfQ==
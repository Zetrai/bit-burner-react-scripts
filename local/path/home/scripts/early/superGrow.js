// servers/home/scripts/early/superGrow.ts
async function main(ns) {
  const server = `${ns.args[0]}`;
  const target = `${ns.args[1]}`;
  const ramAvailable = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);
  const ramPerThread = ns.getScriptRam("/scripts/grow.js");
  const threads = Math.floor(ramAvailable / ramPerThread);
  ns.tprint("Super growing on " + target + " with " + threads + " threads.");
  ns.exec("/scripts/grow.js", server, threads, target);
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvZWFybHkvc3VwZXJHcm93LnRzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFHQSxlQUFzQixLQUFLLElBQXVCO0FBQ2hELFFBQU0sU0FBUyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDNUIsUUFBTSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM1QixRQUFNLGVBQWUsR0FBRyxnQkFBZ0IsTUFBTSxJQUFJLEdBQUcsaUJBQWlCLE1BQU07QUFDNUUsUUFBTSxlQUFlLEdBQUcsYUFBYSxrQkFBa0I7QUFDdkQsUUFBTSxVQUFVLEtBQUssTUFBTSxlQUFlLFlBQVk7QUFFdEQsS0FBRyxPQUFPLHNCQUFzQixTQUFTLFdBQVcsVUFBVSxXQUFXO0FBRXpFLEtBQUcsS0FBSyxvQkFBb0IsUUFBUSxTQUFTLE1BQU07QUFDckQ7IiwibmFtZXMiOltdfQ==
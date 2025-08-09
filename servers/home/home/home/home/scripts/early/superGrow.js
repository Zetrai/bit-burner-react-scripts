// servers/home/home/home/scripts/early/superGrow.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL2Vhcmx5L3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy9lYXJseS9zdXBlckdyb3cudHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUdBLGVBQXNCLEtBQUssSUFBTTtBQUMvQixRQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVCLFFBQU0sU0FBUyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDNUIsUUFBTSxlQUFlLEdBQUcsZ0JBQWdCLE1BQU0sSUFBSSxHQUFHLGlCQUFpQixNQUFNO0FBQzVFLFFBQU0sZUFBZSxHQUFHLGFBQWEsa0JBQWtCO0FBQ3ZELFFBQU0sVUFBVSxLQUFLLE1BQU0sZUFBZSxZQUFZO0FBRXRELEtBQUcsT0FBTyxzQkFBc0IsU0FBUyxXQUFXLFVBQVUsV0FBVztBQUV6RSxLQUFHLEtBQUssb0JBQW9CLFFBQVEsU0FBUyxNQUFNO0FBQ3JEOyIsIm5hbWVzIjpbXX0=
// servers/home/game/v0/hackB.ts
async function main(ns) {
  const targetServer = `${ns.args[0]}`;
  const waitTime = ns.args[1];
  await ns.sleep(waitTime);
  await ns.hack(targetServer);
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2dhbWUvdjAvaGFja0IudHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUVBLGVBQXNCLEtBQUssSUFBdUI7QUFDaEQsUUFBTSxlQUF1QixHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDMUMsUUFBTSxXQUFnQixHQUFHLEtBQUssQ0FBQztBQUMvQixRQUFNLEdBQUcsTUFBTSxRQUFRO0FBQ3ZCLFFBQU0sR0FBRyxLQUFLLFlBQVk7QUFDNUI7IiwibmFtZXMiOltdfQ==
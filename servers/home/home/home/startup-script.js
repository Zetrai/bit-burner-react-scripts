// servers/home/home/startup-script.js
async function main(ns) {
  const servers0Port = [
    "sigma-cosmetics",
    "joesguns",
    "nectar-net",
    "hong-fang-tea",
    "harakiri-sushi"
  ];
  const servers1Port = [
    "neo-net",
    "zer0",
    "max-hardware",
    "iron-gym"
  ];
  while (!ns.fileExists("BruteSSH.exe")) {
    await ns.sleep(6e4);
  }
  for (let i = 0; i < servers1Port.length; ++i) {
    const serv = servers1Port[i];
    ns.scp("early-hack-template.js", serv);
    ns.brutessh(serv);
    ns.nuke(serv);
    ns.exec("early-hack-template.js", serv, 12);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvc3RhcnR1cC1zY3JpcHQuanMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUNBLGVBQXNCLEtBQUssSUFBSTtBQUczQixRQUFNLGVBQWU7QUFBQSxJQUFDO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQWdCO0FBSXBDLFFBQU0sZUFBZTtBQUFBLElBQUM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUFVO0FBYzlCLFNBQU8sQ0FBQyxHQUFHLFdBQVcsY0FBYyxHQUFHO0FBQ25DLFVBQU0sR0FBRyxNQUFNLEdBQUs7QUFBQSxFQUN4QjtBQUtBLFdBQVMsSUFBSSxHQUFHLElBQUksYUFBYSxRQUFRLEVBQUUsR0FBRztBQUMxQyxVQUFNLE9BQU8sYUFBYSxDQUFDO0FBRTNCLE9BQUcsSUFBSSwwQkFBMEIsSUFBSTtBQUNyQyxPQUFHLFNBQVMsSUFBSTtBQUNoQixPQUFHLEtBQUssSUFBSTtBQUNaLE9BQUcsS0FBSywwQkFBMEIsTUFBTSxFQUFFO0FBQUEsRUFDOUM7QUFDSjsiLCJuYW1lcyI6W119
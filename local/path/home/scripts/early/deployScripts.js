// servers/home/scripts/early/deployScripts.ts
async function main(ns) {
  let deployServers = [];
  const serverFarm = [];
  let serverName;
  const hostNamePrefix = "pserv-";
  const numOfServers = 25;
  const knownServers = [
    "n00dles",
    "foodnstuff",
    "nectar-net",
    "joesguns",
    "harakiri-sushi",
    "hong-fang-tea",
    "iron-gym",
    "neo-net",
    "zer0",
    "phantasy",
    "max-hardware",
    "omega-net",
    "netlink",
    "crush-fitness",
    "silver-helix",
    "the-hub",
    "rothman-uni",
    "syscore",
    "johnson-ortho",
    "sigma-cosmetics",
    "computek",
    "I.I.I.I",
    "aevum-police",
    "summit-uni",
    "rho-construction",
    ".",
    "alpha-ent",
    "syscore",
    "zb-institute",
    "lexo-corp",
    "catalyst",
    "millenium-fitness"
  ];
  const scripts = [
    "/scripts/early/hack.js",
    "/scripts/early/deployscripts.js",
    "/scripts/grow.js",
    "/scripts/supergrow.js",
    "scripts/serverInfo.ts"
  ];
  const disablePrivateServers = ns.args[0];
  if (disablePrivateServers) {
    for (let index = 1; index <= numOfServers; index++) {
      serverName = hostNamePrefix + index.toString();
      serverFarm.push(serverName);
    }
    deployServers = deployServers.concat(knownServers, serverFarm);
  }
  for (const server of deployServers) {
    await ns.scp(scripts, server);
    ns.tprint("Scripts deployed to " + server);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvZWFybHkvZGVwbG95U2NyaXB0cy50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBSUEsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxNQUFJLGdCQUFxQixDQUFDO0FBQzFCLFFBQU0sYUFBYSxDQUFDO0FBQ3BCLE1BQUk7QUFDSixRQUFNLGlCQUFpQjtBQUN2QixRQUFNLGVBQWU7QUFFckIsUUFBTSxlQUFlO0FBQUEsSUFDbkI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQVNBLFFBQU0sVUFBVTtBQUFBLElBQ2Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUVBLFFBQU0sd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLE1BQUksdUJBQXVCO0FBQ3pCLGFBQVMsUUFBUSxHQUFHLFNBQVMsY0FBYyxTQUFTO0FBQ2xELG1CQUFhLGlCQUFpQixNQUFNLFNBQVM7QUFDN0MsaUJBQVcsS0FBSyxVQUFVO0FBQUEsSUFDNUI7QUFFQSxvQkFBZ0IsY0FBYyxPQUFPLGNBQWMsVUFBVTtBQUFBLEVBQy9EO0FBU0EsYUFBVyxVQUFVLGVBQWU7QUFDbEMsVUFBTSxHQUFHLElBQUksU0FBUyxNQUFNO0FBRzVCLE9BQUcsT0FBTyx5QkFBeUIsTUFBTTtBQUFBLEVBQzNDO0FBQ0Y7IiwibmFtZXMiOltdfQ==
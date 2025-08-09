// servers/home/home/scripts/early/deployScripts.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL2Vhcmx5L2RlcGxveVNjcmlwdHMudHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUlBLGVBQXNCLEtBQUssSUFBTTtBQUMvQixNQUFJLGdCQUFxQixDQUFBO0FBQ3pCLFFBQU0sYUFBYSxDQUFBO0FBQ25CLE1BQUk7QUFDSixRQUFNLGlCQUFpQjtBQUN2QixRQUFNLGVBQWU7QUFFckIsUUFBTSxlQUFlO0lBQ25CO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0FBVUYsUUFBTSxVQUFVO0lBQ2Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7QUFHRixRQUFNLHdCQUF3QixHQUFHLEtBQUssQ0FBQztBQUN2QyxNQUFJLHVCQUF1QjtBQUN6QixhQUFTLFFBQVEsR0FBRyxTQUFTLGNBQWMsU0FBUztBQUNsRCxtQkFBYSxpQkFBaUIsTUFBTSxTQUFRO0FBQzVDLGlCQUFXLEtBQUssVUFBVTs7QUFHNUIsb0JBQWdCLGNBQWMsT0FBTyxjQUFjLFVBQVU7O0FBVS9ELGFBQVcsVUFBVSxlQUFlO0FBQ2xDLFVBQU0sR0FBRyxJQUFJLFNBQVMsTUFBTTtBQUc1QixPQUFHLE9BQU8seUJBQXlCLE1BQU07O0FBRTdDOyIsIm5hbWVzIjpbXX0=
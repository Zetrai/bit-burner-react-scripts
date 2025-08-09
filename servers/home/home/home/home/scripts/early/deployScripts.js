// servers/home/home/home/scripts/early/deployScripts.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL2Vhcmx5L3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy9lYXJseS9kZXBsb3lTY3JpcHRzLnRzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFJQSxlQUFzQixLQUFLLElBQU07QUFDL0IsTUFBSSxnQkFBcUIsQ0FBQTtBQUN6QixRQUFNLGFBQWEsQ0FBQTtBQUNuQixNQUFJO0FBQ0osUUFBTSxpQkFBaUI7QUFDdkIsUUFBTSxlQUFlO0FBRXJCLFFBQU0sZUFBZTtJQUNuQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztBQVVGLFFBQU0sVUFBVTtJQUNkO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0FBR0YsUUFBTSx3QkFBd0IsR0FBRyxLQUFLLENBQUM7QUFDdkMsTUFBSSx1QkFBdUI7QUFDekIsYUFBUyxRQUFRLEdBQUcsU0FBUyxjQUFjLFNBQVM7QUFDbEQsbUJBQWEsaUJBQWlCLE1BQU0sU0FBUTtBQUM1QyxpQkFBVyxLQUFLLFVBQVU7O0FBRzVCLG9CQUFnQixjQUFjLE9BQU8sY0FBYyxVQUFVOztBQVUvRCxhQUFXLFVBQVUsZUFBZTtBQUNsQyxVQUFNLEdBQUcsSUFBSSxTQUFTLE1BQU07QUFHNUIsT0FBRyxPQUFPLHlCQUF5QixNQUFNOztBQUU3QzsiLCJuYW1lcyI6W119
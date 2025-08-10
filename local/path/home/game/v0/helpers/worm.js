// servers/home/game/v0/helpers/worm.tsx
var BACKDOOR_SERVS = ["CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z"];
var DISABLED_LOGS = ["scan", "run", "getServerRequiredHackingLevel", "getHackingLevel", "getServerNumPortsRequired", "fileExists", "hasRootAccess"];
function disable_logs(ns) {
  for (let log of DISABLED_LOGS) {
    ns.disableLog(log);
  }
}
function run_hacks(ns, server, hacks_dict) {
  let hacks = 0;
  for (let hack in hacks_dict) {
    if (hacks_dict[hack]) {
      hacks += 1;
      switch (hack) {
        case "brute":
          ns.brutessh(server);
          break;
        case "ftp":
          ns.ftpcrack(server);
          break;
        case "http":
          ns.httpworm(server);
          break;
        case "sql":
          ns.sqlinject(server);
          break;
        case "smtp":
          ns.relaysmtp(server);
          break;
      }
    }
  }
  return hacks;
}
async function main(ns) {
  disable_logs(ns);
  let hacks_dict = {
    brute: ns.fileExists("BruteSSH.exe"),
    ftp: ns.fileExists("FTPCrack.exe"),
    http: ns.fileExists("HTTPWorm.exe"),
    sql: ns.fileExists("SQLInject.exe"),
    smtp: ns.fileExists("relaySMTP.exe")
  };
  const server = `${ns.args[0]}`;
  let modelText = "";
  let req_ports = ns.getServerNumPortsRequired(server);
  if (req_ports > 0 && run_hacks(ns, server, hacks_dict) < req_ports) {
    modelText = `Not enough ports open to hack ${server}. Required: ${req_ports}, Opened: ${Object.values(hacks_dict).filter(Boolean).length} 
`;
    ns.write("/game/v0/data/dynamicModelText.txt", modelText, "a");
    ns.write("/game/v0/data/serversNotHacked.txt", `${server},`, "a");
    ns.exit();
  } else {
    ns.write("/game/v0/data/serversHacked.txt", `${server},`, "a");
  }
  ns.nuke(server);
  if (ns.hasRootAccess(server)) {
    ns.toast(server + " has been hacked");
    if (BACKDOOR_SERVS.includes(server)) ns.exec("hacking/backdoor.js", "home", 1, server);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2dhbWUvdjAvaGVscGVycy93b3JtLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBR0EsSUFBTSxpQkFBaUIsQ0FBQyxRQUFRLGVBQWUsV0FBVyxjQUFjO0FBQ3hFLElBQU0sZ0JBQWdCLENBQUMsUUFBUSxPQUFPLGlDQUFpQyxtQkFBbUIsNkJBQTZCLGNBQWMsZUFBZTtBQUdwSixTQUFTLGFBQWEsSUFBSTtBQUN4QixXQUFTLE9BQU8sZUFBZTtBQUM3QixPQUFHLFdBQVcsR0FBRztBQUFBLEVBQ25CO0FBQ0Y7QUFHQSxTQUFTLFVBQVUsSUFBSSxRQUFRLFlBQVk7QUFDekMsTUFBSSxRQUFRO0FBQ1osV0FBUyxRQUFRLFlBQVk7QUFDM0IsUUFBSSxXQUFXLElBQUksR0FBRztBQUNwQixlQUFTO0FBQ1QsY0FBUSxNQUFNO0FBQUEsUUFDWixLQUFLO0FBQ0gsYUFBRyxTQUFTLE1BQU07QUFDbEI7QUFBQSxRQUNGLEtBQUs7QUFDSCxhQUFHLFNBQVMsTUFBTTtBQUNsQjtBQUFBLFFBQ0YsS0FBSztBQUNILGFBQUcsU0FBUyxNQUFNO0FBQ2xCO0FBQUEsUUFDRixLQUFLO0FBQ0gsYUFBRyxVQUFVLE1BQU07QUFDbkI7QUFBQSxRQUNGLEtBQUs7QUFDSCxhQUFHLFVBQVUsTUFBTTtBQUNuQjtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUVBLGVBQXNCLEtBQUssSUFBdUI7QUFHaEQsZUFBYSxFQUFFO0FBRWYsTUFBSSxhQUFhO0FBQUEsSUFDZixPQUFPLEdBQUcsV0FBVyxjQUFjO0FBQUEsSUFDbkMsS0FBSyxHQUFHLFdBQVcsY0FBYztBQUFBLElBQ2pDLE1BQU0sR0FBRyxXQUFXLGNBQWM7QUFBQSxJQUNsQyxLQUFLLEdBQUcsV0FBVyxlQUFlO0FBQUEsSUFDbEMsTUFBTSxHQUFHLFdBQVcsZUFBZTtBQUFBLEVBQ3JDO0FBQ0EsUUFBTSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztBQU01QixNQUFJLFlBQVk7QUFFaEIsTUFBSSxZQUFZLEdBQUcsMEJBQTBCLE1BQU07QUFDbkQsTUFBSSxZQUFZLEtBQUssVUFBVSxJQUFJLFFBQVEsVUFBVSxJQUFJLFdBQVc7QUFDbEUsZ0JBQVksaUNBQWlDLE1BQU0sZUFBZSxTQUFTLGFBQWEsT0FBTyxPQUFPLFVBQVUsRUFBRSxPQUFPLE9BQU8sRUFBRSxNQUFNO0FBQUE7QUFDeEksT0FBRyxNQUFNLHNDQUFzQyxXQUFXLEdBQUc7QUFDN0QsT0FBRyxNQUFNLHNDQUFzQyxHQUFHLE1BQU0sS0FBSyxHQUFHO0FBQ2hFLE9BQUcsS0FBSztBQUFBLEVBQ1YsT0FBTztBQUNMLE9BQUcsTUFBTSxtQ0FBbUMsR0FBRyxNQUFNLEtBQUssR0FBRztBQUFBLEVBQy9EO0FBQ0EsS0FBRyxLQUFLLE1BQU07QUFDZCxNQUFJLEdBQUcsY0FBYyxNQUFNLEdBQUc7QUFDNUIsT0FBRyxNQUFNLFNBQVMsa0JBQWtCO0FBRXBDLFFBQUksZUFBZSxTQUFTLE1BQU0sRUFBRyxJQUFHLEtBQUssdUJBQXVCLFFBQVEsR0FBRyxNQUFNO0FBQUEsRUFDdkY7QUFDRjsiLCJuYW1lcyI6W119
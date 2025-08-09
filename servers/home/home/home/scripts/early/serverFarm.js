// servers/home/home/scripts/early/serverFarm.js
async function main(ns) {
  const ram = 8;
  const numOfServers = ns.getPurchasedServerLimit();
  const hostNamePrefix = "pserv-";
  const buy = true;
  let serverName;
  const serversCost = ns.getPurchasedServerCost(ram) * numOfServers;
  const totalCost = serversCost * numOfServers;
  ns.tprint("Total Cost is " + ns.nFormat(totalCost, "$0.000a."));
  if (buy) {
    let i = 21;
    while (i < numOfServers) {
      ns.clearLog();
      ns.print(`INFO Purchase Limit: ${ns.getPurchasedServerLimit()}`);
      ns.print(`INFO Purchase Cost: ${ns.getPurchasedServerCost(ram)}`);
      ns.print(`INFO Total Purchased Servers: ${ns.getPurchasedServers().length}`);
      if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
        serverName = hostNamePrefix + i.toString();
        ns.tprint("Buying " + serverName);
        ns.purchaseServer(serverName, ram);
        const scripts = [
          "/scripts/early/hack.js",
          "/scripts/early/deployscripts.js",
          "/scripts/grow.js",
          "/scripts/supergrow.js",
          "scripts/serverInfo.ts"
        ];
        ns.scp(scripts, serverName);
        const ramAvailable = ns.getServerMaxRam(serverName) - ns.getServerUsedRam(serverName);
        const script = "/scripts/early/hack.js";
        const ramPerThread = ns.getScriptRam(script);
        const threads = Math.floor(ramAvailable / ramPerThread);
        const programsCount = await getProgramsAndInstall(false, ns);
        const myInfo = {
          level: ns.getHackingLevel(),
          portsUnlocked: programsCount,
          moneyAvailable: await ns.getServerMoneyAvailable("home")
        };
        const targetServer = await getTargetServer(myInfo, ns);
        ns.exec(script, serverName, threads, targetServer);
        ++i;
      }
      await ns.sleep(1e3);
    }
  }
}
async function getProgramsAndInstall(installCheck, ns) {
  if (!installCheck) {
    let count = 1;
    if (ns.fileExists("FTPCrack.exe", "home"))
      count++;
    if (ns.fileExists("relaySMTP.exe", "home"))
      count++;
    if (ns.fileExists("HTTPWorm.exe", "home"))
      count++;
    if (ns.fileExists("SQLInject.exe", "home"))
      count++;
    return count;
  }
  if (ns.fileExists("BruteSSH.exe", "home"))
    ns.brutessh(installCheck);
  if (ns.fileExists("FTPCrack.exe", "home"))
    ns.ftpcrack(installCheck);
  if (ns.fileExists("relaySMTP.exe", "home"))
    ns.relaysmtp(installCheck);
  if (ns.fileExists("HTTPWorm.exe", "home"))
    ns.httpworm(installCheck);
  if (ns.fileExists("SQLInject.exe", "home"))
    ns.sqlinject(installCheck);
  return;
}
async function getTargetServer(myInfo, ns) {
  let target = "foodnstuff";
  if (myInfo.level < 40) {
    return "foodnstuff";
  } else if (myInfo.level > 40 && myInfo.level < 100 || myInfo.portsUnlocked == 1) {
    target = "harakiri-sushi";
  } else if (myInfo.portsUnlocked == 2 || myInfo.portsUnlocked > 2 && myInfo.level < 500) {
    if (myInfo.level < 292)
      target = "phantasy";
    else
      target = "phantasy";
  } else if (myInfo.portsUnlocked == 3 || myInfo.portsUnlocked > 3 && myInfo.level < 800) {
    target = "phantasy";
  } else if (myInfo.portsUnlocked == 4 || myInfo.portsUnlocked > 4 && myInfo.level < 900) {
    target = "phantasy";
  } else if (myInfo.portsUnlocked == 5) {
    target = "phantasy";
  }
  ns.tprint("Target Server : " + target);
  return target;
}
export {
  getProgramsAndInstall,
  getTargetServer,
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL2Vhcmx5L3NlcnZlckZhcm0udHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUdBLGVBQXNCLEtBQUssSUFBTTtBQUUvQixRQUFNLE1BQU07QUFDWixRQUFNLGVBQWUsR0FBRyx3QkFBdUI7QUFDL0MsUUFBTSxpQkFBaUI7QUFDdkIsUUFBTSxNQUFNO0FBR1osTUFBSTtBQUNKLFFBQU0sY0FBYyxHQUFHLHVCQUF1QixHQUFHLElBQUk7QUFDckQsUUFBTSxZQUFZLGNBQWM7QUFHaEMsS0FBRyxPQUFPLG1CQUFtQixHQUFHLFFBQVEsV0FBVyxVQUFlLENBQUM7QUFJbkUsTUFBSSxLQUFLO0FBTVAsUUFBSSxJQUFJO0FBQ1IsV0FBTyxJQUFJLGNBQWM7QUFFdkIsU0FBRyxTQUFRO0FBQ1gsU0FBRyxNQUFNLHdCQUF3QixHQUFHLHdCQUF1QixDQUFFLEVBQUU7QUFDL0QsU0FBRyxNQUFNLHVCQUF1QixHQUFHLHVCQUF1QixHQUFHLENBQUMsRUFBRTtBQUNoRSxTQUFHLE1BQ0QsaUNBQWlDLEdBQUcsb0JBQW1CLEVBQUcsTUFBTSxFQUFFO0FBR3BFLFVBQUksR0FBRyx3QkFBd0IsTUFBTSxJQUFJLEdBQUcsdUJBQXVCLEdBQUcsR0FBRztBQUN2RSxxQkFBYSxpQkFBaUIsRUFBRSxTQUFRO0FBQ3hDLFdBQUcsT0FBTyxZQUFZLFVBQVU7QUFJaEMsV0FBRyxlQUFlLFlBQVksR0FBRztBQUNqQyxjQUFNLFVBQVU7VUFDZDtVQUNBO1VBQ0E7VUFDQTtVQUNBOztBQUVGLFdBQUcsSUFBSSxTQUFTLFVBQVU7QUFDMUIsY0FBTSxlQUNKLEdBQUcsZ0JBQWdCLFVBQVUsSUFBSSxHQUFHLGlCQUFpQixVQUFVO0FBRWpFLGNBQU0sU0FBUztBQUNmLGNBQU0sZUFBZSxHQUFHLGFBQWEsTUFBTTtBQUMzQyxjQUFNLFVBQVUsS0FBSyxNQUFNLGVBQWUsWUFBWTtBQUV0RCxjQUFNLGdCQUFnQixNQUFNLHNCQUFzQixPQUFPLEVBQUU7QUFDM0QsY0FBTSxTQUFTO1VBQ2IsT0FBTyxHQUFHLGdCQUFlO1VBQ3pCLGVBQWU7VUFDZixnQkFBZ0IsTUFBTSxHQUFHLHdCQUF3QixNQUFNOztBQUV6RCxjQUFNLGVBQWUsTUFBTSxnQkFBZ0IsUUFBUSxFQUFFO0FBQ3JELFdBQUcsS0FBSyxRQUFRLFlBQVksU0FBUyxZQUFZO0FBRWpELFVBQUU7O0FBRUosWUFBTSxHQUFHLE1BQU0sR0FBSTs7O0FBR3pCO0FBRUEsZUFBc0Isc0JBQXNCLGNBQW1CLElBQU07QUFDbkUsTUFBSSxDQUFDLGNBQWM7QUFDakIsUUFBSSxRQUFRO0FBQ1osUUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU07QUFBRztBQUMzQyxRQUFJLEdBQUcsV0FBVyxpQkFBaUIsTUFBTTtBQUFHO0FBQzVDLFFBQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNO0FBQUc7QUFDM0MsUUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU07QUFBRztBQUU1QyxXQUFPOztBQUVULE1BQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNO0FBQUcsT0FBRyxTQUFTLFlBQVk7QUFDbkUsTUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU07QUFBRyxPQUFHLFNBQVMsWUFBWTtBQUNuRSxNQUFJLEdBQUcsV0FBVyxpQkFBaUIsTUFBTTtBQUFHLE9BQUcsVUFBVSxZQUFZO0FBQ3JFLE1BQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNO0FBQUcsT0FBRyxTQUFTLFlBQVk7QUFDbkUsTUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU07QUFBRyxPQUFHLFVBQVUsWUFBWTtBQUVyRTtBQUNGO0FBQ0EsZUFBc0IsZ0JBQWdCLFFBQWEsSUFBTTtBQUN2RCxNQUFJLFNBQVM7QUFDYixNQUFJLE9BQU8sUUFBUSxJQUFJO0FBQ3JCLFdBQU87YUFFTixPQUFPLFFBQVEsTUFBTSxPQUFPLFFBQVEsT0FDckMsT0FBTyxpQkFBaUIsR0FDeEI7QUFDQSxhQUFTO2FBRVQsT0FBTyxpQkFBaUIsS0FDdkIsT0FBTyxnQkFBZ0IsS0FBSyxPQUFPLFFBQVEsS0FDNUM7QUFDQSxRQUFJLE9BQU8sUUFBUTtBQUFLLGVBQVM7O0FBQzVCLGVBQVM7YUFFZCxPQUFPLGlCQUFpQixLQUN2QixPQUFPLGdCQUFnQixLQUFLLE9BQU8sUUFBUSxLQUM1QztBQUNBLGFBQVM7YUFFVCxPQUFPLGlCQUFpQixLQUN2QixPQUFPLGdCQUFnQixLQUFLLE9BQU8sUUFBUSxLQUM1QztBQUNBLGFBQVM7YUFDQSxPQUFPLGlCQUFpQixHQUFHO0FBQ3BDLGFBQVM7O0FBRVgsS0FBRyxPQUFPLHFCQUFxQixNQUFNO0FBQ3JDLFNBQU87QUFDVDsiLCJuYW1lcyI6W119
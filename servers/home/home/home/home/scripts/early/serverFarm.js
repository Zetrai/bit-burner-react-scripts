// servers/home/home/home/scripts/early/serverFarm.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL2Vhcmx5L3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy9lYXJseS9zZXJ2ZXJGYXJtLnRzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFHQSxlQUFzQixLQUFLLElBQU07QUFFL0IsUUFBTSxNQUFNO0FBQ1osUUFBTSxlQUFlLEdBQUcsd0JBQXVCO0FBQy9DLFFBQU0saUJBQWlCO0FBQ3ZCLFFBQU0sTUFBTTtBQUdaLE1BQUk7QUFDSixRQUFNLGNBQWMsR0FBRyx1QkFBdUIsR0FBRyxJQUFJO0FBQ3JELFFBQU0sWUFBWSxjQUFjO0FBR2hDLEtBQUcsT0FBTyxtQkFBbUIsR0FBRyxRQUFRLFdBQVcsVUFBZSxDQUFDO0FBSW5FLE1BQUksS0FBSztBQU1QLFFBQUksSUFBSTtBQUNSLFdBQU8sSUFBSSxjQUFjO0FBRXZCLFNBQUcsU0FBUTtBQUNYLFNBQUcsTUFBTSx3QkFBd0IsR0FBRyx3QkFBdUIsQ0FBRSxFQUFFO0FBQy9ELFNBQUcsTUFBTSx1QkFBdUIsR0FBRyx1QkFBdUIsR0FBRyxDQUFDLEVBQUU7QUFDaEUsU0FBRyxNQUNELGlDQUFpQyxHQUFHLG9CQUFtQixFQUFHLE1BQU0sRUFBRTtBQUdwRSxVQUFJLEdBQUcsd0JBQXdCLE1BQU0sSUFBSSxHQUFHLHVCQUF1QixHQUFHLEdBQUc7QUFDdkUscUJBQWEsaUJBQWlCLEVBQUUsU0FBUTtBQUN4QyxXQUFHLE9BQU8sWUFBWSxVQUFVO0FBSWhDLFdBQUcsZUFBZSxZQUFZLEdBQUc7QUFDakMsY0FBTSxVQUFVO1VBQ2Q7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7QUFFRixXQUFHLElBQUksU0FBUyxVQUFVO0FBQzFCLGNBQU0sZUFDSixHQUFHLGdCQUFnQixVQUFVLElBQUksR0FBRyxpQkFBaUIsVUFBVTtBQUVqRSxjQUFNLFNBQVM7QUFDZixjQUFNLGVBQWUsR0FBRyxhQUFhLE1BQU07QUFDM0MsY0FBTSxVQUFVLEtBQUssTUFBTSxlQUFlLFlBQVk7QUFFdEQsY0FBTSxnQkFBZ0IsTUFBTSxzQkFBc0IsT0FBTyxFQUFFO0FBQzNELGNBQU0sU0FBUztVQUNiLE9BQU8sR0FBRyxnQkFBZTtVQUN6QixlQUFlO1VBQ2YsZ0JBQWdCLE1BQU0sR0FBRyx3QkFBd0IsTUFBTTs7QUFFekQsY0FBTSxlQUFlLE1BQU0sZ0JBQWdCLFFBQVEsRUFBRTtBQUNyRCxXQUFHLEtBQUssUUFBUSxZQUFZLFNBQVMsWUFBWTtBQUVqRCxVQUFFOztBQUVKLFlBQU0sR0FBRyxNQUFNLEdBQUk7OztBQUd6QjtBQUVBLGVBQXNCLHNCQUFzQixjQUFtQixJQUFNO0FBQ25FLE1BQUksQ0FBQyxjQUFjO0FBQ2pCLFFBQUksUUFBUTtBQUNaLFFBQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNO0FBQUc7QUFDM0MsUUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU07QUFBRztBQUM1QyxRQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTTtBQUFHO0FBQzNDLFFBQUksR0FBRyxXQUFXLGlCQUFpQixNQUFNO0FBQUc7QUFFNUMsV0FBTzs7QUFFVCxNQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTTtBQUFHLE9BQUcsU0FBUyxZQUFZO0FBQ25FLE1BQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNO0FBQUcsT0FBRyxTQUFTLFlBQVk7QUFDbkUsTUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU07QUFBRyxPQUFHLFVBQVUsWUFBWTtBQUNyRSxNQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTTtBQUFHLE9BQUcsU0FBUyxZQUFZO0FBQ25FLE1BQUksR0FBRyxXQUFXLGlCQUFpQixNQUFNO0FBQUcsT0FBRyxVQUFVLFlBQVk7QUFFckU7QUFDRjtBQUNBLGVBQXNCLGdCQUFnQixRQUFhLElBQU07QUFDdkQsTUFBSSxTQUFTO0FBQ2IsTUFBSSxPQUFPLFFBQVEsSUFBSTtBQUNyQixXQUFPO2FBRU4sT0FBTyxRQUFRLE1BQU0sT0FBTyxRQUFRLE9BQ3JDLE9BQU8saUJBQWlCLEdBQ3hCO0FBQ0EsYUFBUzthQUVULE9BQU8saUJBQWlCLEtBQ3ZCLE9BQU8sZ0JBQWdCLEtBQUssT0FBTyxRQUFRLEtBQzVDO0FBQ0EsUUFBSSxPQUFPLFFBQVE7QUFBSyxlQUFTOztBQUM1QixlQUFTO2FBRWQsT0FBTyxpQkFBaUIsS0FDdkIsT0FBTyxnQkFBZ0IsS0FBSyxPQUFPLFFBQVEsS0FDNUM7QUFDQSxhQUFTO2FBRVQsT0FBTyxpQkFBaUIsS0FDdkIsT0FBTyxnQkFBZ0IsS0FBSyxPQUFPLFFBQVEsS0FDNUM7QUFDQSxhQUFTO2FBQ0EsT0FBTyxpQkFBaUIsR0FBRztBQUNwQyxhQUFTOztBQUVYLEtBQUcsT0FBTyxxQkFBcUIsTUFBTTtBQUNyQyxTQUFPO0FBQ1Q7IiwibmFtZXMiOltdfQ==
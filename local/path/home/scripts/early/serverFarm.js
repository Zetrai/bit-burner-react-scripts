// servers/home/scripts/early/serverFarm.ts
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
      ns.print(
        `INFO Total Purchased Servers: ${ns.getPurchasedServers().length}`
      );
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
    if (ns.fileExists("FTPCrack.exe", "home")) count++;
    if (ns.fileExists("relaySMTP.exe", "home")) count++;
    if (ns.fileExists("HTTPWorm.exe", "home")) count++;
    if (ns.fileExists("SQLInject.exe", "home")) count++;
    return count;
  }
  if (ns.fileExists("BruteSSH.exe", "home")) ns.brutessh(installCheck);
  if (ns.fileExists("FTPCrack.exe", "home")) ns.ftpcrack(installCheck);
  if (ns.fileExists("relaySMTP.exe", "home")) ns.relaysmtp(installCheck);
  if (ns.fileExists("HTTPWorm.exe", "home")) ns.httpworm(installCheck);
  if (ns.fileExists("SQLInject.exe", "home")) ns.sqlinject(installCheck);
  return;
}
async function getTargetServer(myInfo, ns) {
  let target = "foodnstuff";
  if (myInfo.level < 40) {
    return "foodnstuff";
  } else if (myInfo.level > 40 && myInfo.level < 100 || myInfo.portsUnlocked == 1) {
    target = "harakiri-sushi";
  } else if (myInfo.portsUnlocked == 2 || myInfo.portsUnlocked > 2 && myInfo.level < 500) {
    if (myInfo.level < 292) target = "phantasy";
    else target = "phantasy";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvZWFybHkvc2VydmVyRmFybS50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBR0EsZUFBc0IsS0FBSyxJQUF1QjtBQUVoRCxRQUFNLE1BQU07QUFDWixRQUFNLGVBQWUsR0FBRyx3QkFBd0I7QUFDaEQsUUFBTSxpQkFBaUI7QUFDdkIsUUFBTSxNQUFNO0FBR1osTUFBSTtBQUNKLFFBQU0sY0FBYyxHQUFHLHVCQUF1QixHQUFHLElBQUk7QUFDckQsUUFBTSxZQUFZLGNBQWM7QUFHaEMsS0FBRyxPQUFPLG1CQUFtQixHQUFHLFFBQVEsV0FBVyxVQUFlLENBQUM7QUFJbkUsTUFBSSxLQUFLO0FBTVAsUUFBSSxJQUFJO0FBQ1IsV0FBTyxJQUFJLGNBQWM7QUFFdkIsU0FBRyxTQUFTO0FBQ1osU0FBRyxNQUFNLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDLEVBQUU7QUFDL0QsU0FBRyxNQUFNLHVCQUF1QixHQUFHLHVCQUF1QixHQUFHLENBQUMsRUFBRTtBQUNoRSxTQUFHO0FBQUEsUUFDRCxpQ0FBaUMsR0FBRyxvQkFBb0IsRUFBRSxNQUFNO0FBQUEsTUFDbEU7QUFFQSxVQUFJLEdBQUcsd0JBQXdCLE1BQU0sSUFBSSxHQUFHLHVCQUF1QixHQUFHLEdBQUc7QUFDdkUscUJBQWEsaUJBQWlCLEVBQUUsU0FBUztBQUN6QyxXQUFHLE9BQU8sWUFBWSxVQUFVO0FBSWhDLFdBQUcsZUFBZSxZQUFZLEdBQUc7QUFDakMsY0FBTSxVQUFVO0FBQUEsVUFDZDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQ0EsV0FBRyxJQUFJLFNBQVMsVUFBVTtBQUMxQixjQUFNLGVBQ0osR0FBRyxnQkFBZ0IsVUFBVSxJQUFJLEdBQUcsaUJBQWlCLFVBQVU7QUFFakUsY0FBTSxTQUFTO0FBQ2YsY0FBTSxlQUFlLEdBQUcsYUFBYSxNQUFNO0FBQzNDLGNBQU0sVUFBVSxLQUFLLE1BQU0sZUFBZSxZQUFZO0FBRXRELGNBQU0sZ0JBQWdCLE1BQU0sc0JBQXNCLE9BQU8sRUFBRTtBQUMzRCxjQUFNLFNBQVM7QUFBQSxVQUNiLE9BQU8sR0FBRyxnQkFBZ0I7QUFBQSxVQUMxQixlQUFlO0FBQUEsVUFDZixnQkFBZ0IsTUFBTSxHQUFHLHdCQUF3QixNQUFNO0FBQUEsUUFDekQ7QUFDQSxjQUFNLGVBQWUsTUFBTSxnQkFBZ0IsUUFBUSxFQUFFO0FBQ3JELFdBQUcsS0FBSyxRQUFRLFlBQVksU0FBUyxZQUFZO0FBRWpELFVBQUU7QUFBQSxNQUNKO0FBQ0EsWUFBTSxHQUFHLE1BQU0sR0FBSTtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUNGO0FBRUEsZUFBc0Isc0JBQXNCLGNBQW1CLElBQVE7QUFDckUsTUFBSSxDQUFDLGNBQWM7QUFDakIsUUFBSSxRQUFRO0FBQ1osUUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU0sRUFBRztBQUMzQyxRQUFJLEdBQUcsV0FBVyxpQkFBaUIsTUFBTSxFQUFHO0FBQzVDLFFBQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNLEVBQUc7QUFDM0MsUUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU0sRUFBRztBQUU1QyxXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNLEVBQUcsSUFBRyxTQUFTLFlBQVk7QUFDbkUsTUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU0sRUFBRyxJQUFHLFNBQVMsWUFBWTtBQUNuRSxNQUFJLEdBQUcsV0FBVyxpQkFBaUIsTUFBTSxFQUFHLElBQUcsVUFBVSxZQUFZO0FBQ3JFLE1BQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNLEVBQUcsSUFBRyxTQUFTLFlBQVk7QUFDbkUsTUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU0sRUFBRyxJQUFHLFVBQVUsWUFBWTtBQUVyRTtBQUNGO0FBQ0EsZUFBc0IsZ0JBQWdCLFFBQWEsSUFBUTtBQUN6RCxNQUFJLFNBQVM7QUFDYixNQUFJLE9BQU8sUUFBUSxJQUFJO0FBQ3JCLFdBQU87QUFBQSxFQUNULFdBQ0csT0FBTyxRQUFRLE1BQU0sT0FBTyxRQUFRLE9BQ3JDLE9BQU8saUJBQWlCLEdBQ3hCO0FBQ0EsYUFBUztBQUFBLEVBQ1gsV0FDRSxPQUFPLGlCQUFpQixLQUN2QixPQUFPLGdCQUFnQixLQUFLLE9BQU8sUUFBUSxLQUM1QztBQUNBLFFBQUksT0FBTyxRQUFRLElBQUssVUFBUztBQUFBLFFBQzVCLFVBQVM7QUFBQSxFQUNoQixXQUNFLE9BQU8saUJBQWlCLEtBQ3ZCLE9BQU8sZ0JBQWdCLEtBQUssT0FBTyxRQUFRLEtBQzVDO0FBQ0EsYUFBUztBQUFBLEVBQ1gsV0FDRSxPQUFPLGlCQUFpQixLQUN2QixPQUFPLGdCQUFnQixLQUFLLE9BQU8sUUFBUSxLQUM1QztBQUNBLGFBQVM7QUFBQSxFQUNYLFdBQVcsT0FBTyxpQkFBaUIsR0FBRztBQUNwQyxhQUFTO0FBQUEsRUFDWDtBQUNBLEtBQUcsT0FBTyxxQkFBcUIsTUFBTTtBQUNyQyxTQUFPO0FBQ1Q7IiwibmFtZXMiOltdfQ==
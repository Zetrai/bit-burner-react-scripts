// servers/home/home/scripts/early/startupScript.js
async function main(ns) {
  ns.tprint("------------------------------------");
  ns.tprint("Deploying Scripts...");
  ns.tprint("------------------------------------");
  const programsCount = await getProgramsAndInstall(false, ns);
  const myInfo = {
    level: ns.getHackingLevel(),
    portsUnlocked: programsCount,
    moneyAvailable: await ns.getServerMoneyAvailable("home")
  };
  const targetServer = await getTargetServer(myInfo, ns);
  await getProgramsAndInstall(targetServer, ns);
  await ns.nuke(targetServer);
  const runningServer = "home";
  const script = "/scripts/early/hack.js";
  const ramAvailable = ns.getServerMaxRam(runningServer) - ns.getServerUsedRam(runningServer);
  const ramPerThread = ns.getScriptRam(script);
  const threads = Math.floor(ramAvailable / ramPerThread);
  ns.tprint("ramAvailable: ", ramAvailable);
  ns.tprint("ramPerThread: ", ramPerThread);
  ns.tprint("threads: ", threads);
  ns.tprint(threads + " threads can be runned on " + runningServer + ".");
  if (threads > 0) {
    ns.tprint("Starting " + script + " on " + targetServer + " with " + runningServer + ".");
    ns.exec(script, runningServer, threads, targetServer);
  }
  ns.tprint("------------------------------------");
  ns.tprint("Running hack scripts on other servers...");
  ns.tprint("------------------------------------");
  const servers0Port = [
    "sigma-cosmetics",
    "joesguns",
    "nectar-net",
    "hong-fang-tea",
    "harakiri-sushi"
  ];
  const servers1Port = ["neo-net", "zer0", "max-hardware", "iron-gym"];
  for (let i = 0; i < servers0Port.length; ++i) {
    const serv = servers0Port[i];
    ns.nuke(serv);
  }
  if (ns.fileExists("BruteSSH.exe")) {
    for (let i = 0; i < servers1Port.length; ++i) {
      const serv = servers1Port[i];
      ns.nuke(serv);
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
  if (myInfo.level == 1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL2Vhcmx5L3N0YXJ0dXBTY3JpcHQudHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUdBLGVBQXNCLEtBQUssSUFBTTtBQUMvQixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxzQkFBc0I7QUFDaEMsS0FBRyxPQUFPLHNDQUFzQztBQUVoRCxRQUFNLGdCQUFnQixNQUFNLHNCQUFzQixPQUFPLEVBQUU7QUFDM0QsUUFBTSxTQUFTO0lBQ2IsT0FBTyxHQUFHLGdCQUFlO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0IsTUFBTSxHQUFHLHdCQUF3QixNQUFNOztBQUV6RCxRQUFNLGVBQWUsTUFBTSxnQkFBZ0IsUUFBUSxFQUFFO0FBQ3JELFFBQU0sc0JBQXNCLGNBQWMsRUFBRTtBQUM1QyxRQUFNLEdBQUcsS0FBSyxZQUFZO0FBRTFCLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sU0FBUztBQUVmLFFBQU0sZUFDSixHQUFHLGdCQUFnQixhQUFhLElBQUksR0FBRyxpQkFBaUIsYUFBYTtBQUN2RSxRQUFNLGVBQWUsR0FBRyxhQUFhLE1BQU07QUFDM0MsUUFBTSxVQUFVLEtBQUssTUFBTSxlQUFlLFlBQVk7QUFDdEQsS0FBRyxPQUFPLGtCQUFrQixZQUFZO0FBQ3hDLEtBQUcsT0FBTyxrQkFBa0IsWUFBWTtBQUN4QyxLQUFHLE9BQU8sYUFBYSxPQUFPO0FBRTlCLEtBQUcsT0FBTyxVQUFVLCtCQUErQixnQkFBZ0IsR0FBRztBQUV0RSxNQUFJLFVBQVUsR0FBRztBQUNmLE9BQUcsT0FDRCxjQUNFLFNBQ0EsU0FDQSxlQUNBLFdBQ0EsZ0JBQ0EsR0FBRztBQUVQLE9BQUcsS0FBSyxRQUFRLGVBQWUsU0FBUyxZQUFZOztBQUV0RCxLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTywwQ0FBMEM7QUFDcEQsS0FBRyxPQUFPLHNDQUFzQztBQUloRCxRQUFNLGVBQWU7SUFDbkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7QUFLRixRQUFNLGVBQWUsQ0FBQyxXQUFXLFFBQVEsZ0JBQWdCLFVBQVU7QUFDbkUsV0FBUyxJQUFJLEdBQUcsSUFBSSxhQUFhLFFBQVEsRUFBRSxHQUFHO0FBQzVDLFVBQU0sT0FBTyxhQUFhLENBQUM7QUFDM0IsT0FBRyxLQUFLLElBQUk7O0FBRWQsTUFBSSxHQUFHLFdBQVcsY0FBYyxHQUFHO0FBQ2pDLGFBQVMsSUFBSSxHQUFHLElBQUksYUFBYSxRQUFRLEVBQUUsR0FBRztBQUM1QyxZQUFNLE9BQU8sYUFBYSxDQUFDO0FBQzNCLFNBQUcsS0FBSyxJQUFJOzs7QUFTbEI7QUFFQSxlQUFzQixzQkFBc0IsY0FBbUIsSUFBTTtBQUNuRSxNQUFJLENBQUMsY0FBYztBQUNqQixRQUFJLFFBQVE7QUFDWixRQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTTtBQUFHO0FBQzNDLFFBQUksR0FBRyxXQUFXLGlCQUFpQixNQUFNO0FBQUc7QUFDNUMsUUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU07QUFBRztBQUMzQyxRQUFJLEdBQUcsV0FBVyxpQkFBaUIsTUFBTTtBQUFHO0FBRTVDLFdBQU87O0FBRVQsTUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU07QUFBRyxPQUFHLFNBQVMsWUFBWTtBQUNuRSxNQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTTtBQUFHLE9BQUcsU0FBUyxZQUFZO0FBQ25FLE1BQUksR0FBRyxXQUFXLGlCQUFpQixNQUFNO0FBQUcsT0FBRyxVQUFVLFlBQVk7QUFDckUsTUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU07QUFBRyxPQUFHLFNBQVMsWUFBWTtBQUNuRSxNQUFJLEdBQUcsV0FBVyxpQkFBaUIsTUFBTTtBQUFHLE9BQUcsVUFBVSxZQUFZO0FBRXJFO0FBQ0Y7QUFFQSxlQUFzQixnQkFBZ0IsUUFBYSxJQUFNO0FBQ3ZELE1BQUksU0FBUztBQUNiLE1BQUksT0FBTyxTQUFTLEdBQUc7QUFDckIsV0FBTzthQUVOLE9BQU8sUUFBUSxNQUFNLE9BQU8sUUFBUSxPQUNyQyxPQUFPLGlCQUFpQixHQUN4QjtBQUNBLGFBQVM7YUFFVCxPQUFPLGlCQUFpQixLQUN2QixPQUFPLGdCQUFnQixLQUFLLE9BQU8sUUFBUSxLQUM1QztBQUNBLFFBQUksT0FBTyxRQUFRO0FBQUssZUFBUzs7QUFDNUIsZUFBUzthQUVkLE9BQU8saUJBQWlCLEtBQ3ZCLE9BQU8sZ0JBQWdCLEtBQUssT0FBTyxRQUFRLEtBQzVDO0FBQ0EsYUFBUzthQUVULE9BQU8saUJBQWlCLEtBQ3ZCLE9BQU8sZ0JBQWdCLEtBQUssT0FBTyxRQUFRLEtBQzVDO0FBQ0EsYUFBUzthQUNBLE9BQU8saUJBQWlCLEdBQUc7QUFDcEMsYUFBUzs7QUFFWCxLQUFHLE9BQU8scUJBQXFCLE1BQU07QUFDckMsU0FBTztBQUNUOyIsIm5hbWVzIjpbXX0=
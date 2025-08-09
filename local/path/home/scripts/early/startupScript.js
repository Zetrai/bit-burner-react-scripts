// servers/home/scripts/early/startupScript.ts
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
    ns.tprint(
      "Starting " + script + " on " + targetServer + " with " + runningServer + "."
    );
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
  if (myInfo.level == 1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvZWFybHkvc3RhcnR1cFNjcmlwdC50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBR0EsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxzQkFBc0I7QUFDaEMsS0FBRyxPQUFPLHNDQUFzQztBQUVoRCxRQUFNLGdCQUFnQixNQUFNLHNCQUFzQixPQUFPLEVBQUU7QUFDM0QsUUFBTSxTQUFTO0FBQUEsSUFDYixPQUFPLEdBQUcsZ0JBQWdCO0FBQUEsSUFDMUIsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCLE1BQU0sR0FBRyx3QkFBd0IsTUFBTTtBQUFBLEVBQ3pEO0FBQ0EsUUFBTSxlQUFlLE1BQU0sZ0JBQWdCLFFBQVEsRUFBRTtBQUNyRCxRQUFNLHNCQUFzQixjQUFjLEVBQUU7QUFDNUMsUUFBTSxHQUFHLEtBQUssWUFBWTtBQUUxQixRQUFNLGdCQUFnQjtBQUN0QixRQUFNLFNBQVM7QUFFZixRQUFNLGVBQ0osR0FBRyxnQkFBZ0IsYUFBYSxJQUFJLEdBQUcsaUJBQWlCLGFBQWE7QUFDdkUsUUFBTSxlQUFlLEdBQUcsYUFBYSxNQUFNO0FBQzNDLFFBQU0sVUFBVSxLQUFLLE1BQU0sZUFBZSxZQUFZO0FBQ3RELEtBQUcsT0FBTyxrQkFBa0IsWUFBWTtBQUN4QyxLQUFHLE9BQU8sa0JBQWtCLFlBQVk7QUFDeEMsS0FBRyxPQUFPLGFBQWEsT0FBTztBQUU5QixLQUFHLE9BQU8sVUFBVSwrQkFBK0IsZ0JBQWdCLEdBQUc7QUFFdEUsTUFBSSxVQUFVLEdBQUc7QUFDZixPQUFHO0FBQUEsTUFDRCxjQUNFLFNBQ0EsU0FDQSxlQUNBLFdBQ0EsZ0JBQ0E7QUFBQSxJQUNKO0FBQ0EsT0FBRyxLQUFLLFFBQVEsZUFBZSxTQUFTLFlBQVk7QUFBQSxFQUN0RDtBQUNBLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLDBDQUEwQztBQUNwRCxLQUFHLE9BQU8sc0NBQXNDO0FBSWhELFFBQU0sZUFBZTtBQUFBLElBQ25CO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFJQSxRQUFNLGVBQWUsQ0FBQyxXQUFXLFFBQVEsZ0JBQWdCLFVBQVU7QUFDbkUsV0FBUyxJQUFJLEdBQUcsSUFBSSxhQUFhLFFBQVEsRUFBRSxHQUFHO0FBQzVDLFVBQU0sT0FBTyxhQUFhLENBQUM7QUFDM0IsT0FBRyxLQUFLLElBQUk7QUFBQSxFQUNkO0FBQ0EsTUFBSSxHQUFHLFdBQVcsY0FBYyxHQUFHO0FBQ2pDLGFBQVMsSUFBSSxHQUFHLElBQUksYUFBYSxRQUFRLEVBQUUsR0FBRztBQUM1QyxZQUFNLE9BQU8sYUFBYSxDQUFDO0FBQzNCLFNBQUcsS0FBSyxJQUFJO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFPRjtBQUVBLGVBQXNCLHNCQUFzQixjQUFtQixJQUFRO0FBQ3JFLE1BQUksQ0FBQyxjQUFjO0FBQ2pCLFFBQUksUUFBUTtBQUNaLFFBQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNLEVBQUc7QUFDM0MsUUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU0sRUFBRztBQUM1QyxRQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTSxFQUFHO0FBQzNDLFFBQUksR0FBRyxXQUFXLGlCQUFpQixNQUFNLEVBQUc7QUFFNUMsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTSxFQUFHLElBQUcsU0FBUyxZQUFZO0FBQ25FLE1BQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNLEVBQUcsSUFBRyxTQUFTLFlBQVk7QUFDbkUsTUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU0sRUFBRyxJQUFHLFVBQVUsWUFBWTtBQUNyRSxNQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTSxFQUFHLElBQUcsU0FBUyxZQUFZO0FBQ25FLE1BQUksR0FBRyxXQUFXLGlCQUFpQixNQUFNLEVBQUcsSUFBRyxVQUFVLFlBQVk7QUFFckU7QUFDRjtBQUVBLGVBQXNCLGdCQUFnQixRQUFhLElBQVE7QUFDekQsTUFBSSxTQUFTO0FBQ2IsTUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQixXQUFPO0FBQUEsRUFDVCxXQUNHLE9BQU8sUUFBUSxNQUFNLE9BQU8sUUFBUSxPQUNyQyxPQUFPLGlCQUFpQixHQUN4QjtBQUNBLGFBQVM7QUFBQSxFQUNYLFdBQ0UsT0FBTyxpQkFBaUIsS0FDdkIsT0FBTyxnQkFBZ0IsS0FBSyxPQUFPLFFBQVEsS0FDNUM7QUFDQSxRQUFJLE9BQU8sUUFBUSxJQUFLLFVBQVM7QUFBQSxRQUM1QixVQUFTO0FBQUEsRUFDaEIsV0FDRSxPQUFPLGlCQUFpQixLQUN2QixPQUFPLGdCQUFnQixLQUFLLE9BQU8sUUFBUSxLQUM1QztBQUNBLGFBQVM7QUFBQSxFQUNYLFdBQ0UsT0FBTyxpQkFBaUIsS0FDdkIsT0FBTyxnQkFBZ0IsS0FBSyxPQUFPLFFBQVEsS0FDNUM7QUFDQSxhQUFTO0FBQUEsRUFDWCxXQUFXLE9BQU8saUJBQWlCLEdBQUc7QUFDcEMsYUFBUztBQUFBLEVBQ1g7QUFDQSxLQUFHLE9BQU8scUJBQXFCLE1BQU07QUFDckMsU0FBTztBQUNUOyIsIm5hbWVzIjpbXX0=
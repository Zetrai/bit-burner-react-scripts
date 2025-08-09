// servers/home/home/home/scripts/early/startupScript.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL2Vhcmx5L3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy9lYXJseS9zdGFydHVwU2NyaXB0LnRzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFHQSxlQUFzQixLQUFLLElBQU07QUFDL0IsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sc0JBQXNCO0FBQ2hDLEtBQUcsT0FBTyxzQ0FBc0M7QUFFaEQsUUFBTSxnQkFBZ0IsTUFBTSxzQkFBc0IsT0FBTyxFQUFFO0FBQzNELFFBQU0sU0FBUztJQUNiLE9BQU8sR0FBRyxnQkFBZTtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCLE1BQU0sR0FBRyx3QkFBd0IsTUFBTTs7QUFFekQsUUFBTSxlQUFlLE1BQU0sZ0JBQWdCLFFBQVEsRUFBRTtBQUNyRCxRQUFNLHNCQUFzQixjQUFjLEVBQUU7QUFDNUMsUUFBTSxHQUFHLEtBQUssWUFBWTtBQUUxQixRQUFNLGdCQUFnQjtBQUN0QixRQUFNLFNBQVM7QUFFZixRQUFNLGVBQ0osR0FBRyxnQkFBZ0IsYUFBYSxJQUFJLEdBQUcsaUJBQWlCLGFBQWE7QUFDdkUsUUFBTSxlQUFlLEdBQUcsYUFBYSxNQUFNO0FBQzNDLFFBQU0sVUFBVSxLQUFLLE1BQU0sZUFBZSxZQUFZO0FBQ3RELEtBQUcsT0FBTyxrQkFBa0IsWUFBWTtBQUN4QyxLQUFHLE9BQU8sa0JBQWtCLFlBQVk7QUFDeEMsS0FBRyxPQUFPLGFBQWEsT0FBTztBQUU5QixLQUFHLE9BQU8sVUFBVSwrQkFBK0IsZ0JBQWdCLEdBQUc7QUFFdEUsTUFBSSxVQUFVLEdBQUc7QUFDZixPQUFHLE9BQ0QsY0FDRSxTQUNBLFNBQ0EsZUFDQSxXQUNBLGdCQUNBLEdBQUc7QUFFUCxPQUFHLEtBQUssUUFBUSxlQUFlLFNBQVMsWUFBWTs7QUFFdEQsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sMENBQTBDO0FBQ3BELEtBQUcsT0FBTyxzQ0FBc0M7QUFJaEQsUUFBTSxlQUFlO0lBQ25CO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0FBS0YsUUFBTSxlQUFlLENBQUMsV0FBVyxRQUFRLGdCQUFnQixVQUFVO0FBQ25FLFdBQVMsSUFBSSxHQUFHLElBQUksYUFBYSxRQUFRLEVBQUUsR0FBRztBQUM1QyxVQUFNLE9BQU8sYUFBYSxDQUFDO0FBQzNCLE9BQUcsS0FBSyxJQUFJOztBQUVkLE1BQUksR0FBRyxXQUFXLGNBQWMsR0FBRztBQUNqQyxhQUFTLElBQUksR0FBRyxJQUFJLGFBQWEsUUFBUSxFQUFFLEdBQUc7QUFDNUMsWUFBTSxPQUFPLGFBQWEsQ0FBQztBQUMzQixTQUFHLEtBQUssSUFBSTs7O0FBU2xCO0FBRUEsZUFBc0Isc0JBQXNCLGNBQW1CLElBQU07QUFDbkUsTUFBSSxDQUFDLGNBQWM7QUFDakIsUUFBSSxRQUFRO0FBQ1osUUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU07QUFBRztBQUMzQyxRQUFJLEdBQUcsV0FBVyxpQkFBaUIsTUFBTTtBQUFHO0FBQzVDLFFBQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNO0FBQUc7QUFDM0MsUUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU07QUFBRztBQUU1QyxXQUFPOztBQUVULE1BQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNO0FBQUcsT0FBRyxTQUFTLFlBQVk7QUFDbkUsTUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU07QUFBRyxPQUFHLFNBQVMsWUFBWTtBQUNuRSxNQUFJLEdBQUcsV0FBVyxpQkFBaUIsTUFBTTtBQUFHLE9BQUcsVUFBVSxZQUFZO0FBQ3JFLE1BQUksR0FBRyxXQUFXLGdCQUFnQixNQUFNO0FBQUcsT0FBRyxTQUFTLFlBQVk7QUFDbkUsTUFBSSxHQUFHLFdBQVcsaUJBQWlCLE1BQU07QUFBRyxPQUFHLFVBQVUsWUFBWTtBQUVyRTtBQUNGO0FBRUEsZUFBc0IsZ0JBQWdCLFFBQWEsSUFBTTtBQUN2RCxNQUFJLFNBQVM7QUFDYixNQUFJLE9BQU8sU0FBUyxHQUFHO0FBQ3JCLFdBQU87YUFFTixPQUFPLFFBQVEsTUFBTSxPQUFPLFFBQVEsT0FDckMsT0FBTyxpQkFBaUIsR0FDeEI7QUFDQSxhQUFTO2FBRVQsT0FBTyxpQkFBaUIsS0FDdkIsT0FBTyxnQkFBZ0IsS0FBSyxPQUFPLFFBQVEsS0FDNUM7QUFDQSxRQUFJLE9BQU8sUUFBUTtBQUFLLGVBQVM7O0FBQzVCLGVBQVM7YUFFZCxPQUFPLGlCQUFpQixLQUN2QixPQUFPLGdCQUFnQixLQUFLLE9BQU8sUUFBUSxLQUM1QztBQUNBLGFBQVM7YUFFVCxPQUFPLGlCQUFpQixLQUN2QixPQUFPLGdCQUFnQixLQUFLLE9BQU8sUUFBUSxLQUM1QztBQUNBLGFBQVM7YUFDQSxPQUFPLGlCQUFpQixHQUFHO0FBQ3BDLGFBQVM7O0FBRVgsS0FBRyxPQUFPLHFCQUFxQixNQUFNO0FBQ3JDLFNBQU87QUFDVDsiLCJuYW1lcyI6W119
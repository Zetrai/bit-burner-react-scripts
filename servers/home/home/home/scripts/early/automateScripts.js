// servers/home/home/scripts/early/automateScripts.js
async function main(ns) {
  let servers = [
    "n00dles",
    "foodnstuff",
    "joesguns",
    "harakiri-sushi",
    "hong-fang-tea",
    "iron-gym",
    "neo-net",
    "zer0",
    "phantasy",
    "max-hardware",
    "omega-net",
    "silver-helix",
    "the-hub",
    "rothman-uni",
    "sigma-cosmetics",
    "aevum-police",
    "summit-uni",
    "rho-construction",
    ".",
    "alpha-ent",
    "zb-institute",
    "lexo-corp",
    "catalyst",
    "millenium-fitness"
  ];
  const disablePrivateServers = ns.args[0];
  if (disablePrivateServers) {
    const hostNamePrefix = "pserv-";
    const numOfServers = 25;
    const serverFarm = [];
    let serverName;
    for (let index = 1; index <= numOfServers; index++) {
      serverName = hostNamePrefix + index.toString();
      serverFarm.push(serverName);
    }
    servers = servers.concat(serverFarm);
  }
  const programsCount = await getProgramsAndInstall(false, ns);
  const myInfo = {
    level: ns.getHackingLevel(),
    portsUnlocked: programsCount,
    moneyAvailable: await ns.getServerMoneyAvailable("home")
  };
  ns.tprint("My Info: ", myInfo);
  const targetServer = await getTargetServer(myInfo, ns);
  await getProgramsAndInstall(targetServer, ns);
  await ns.nuke(targetServer);
  const script = "/scripts/early/hack.js";
  let totalRAMavailable = 0;
  let serverRAM = 0;
  for (let index = 0; index < servers.length; index++) {
    ns.killall(servers[index]);
    serverRAM = ns.getServerMaxRam(servers[index]);
    totalRAMavailable += serverRAM;
  }
  for (let index = 0; index < servers.length; index++) {
    const ramAvailable = ns.getServerMaxRam(servers[index]) - ns.getServerUsedRam(servers[index]);
    const ramPerThread = ns.getScriptRam(script);
    const threads = Math.floor(ramAvailable / ramPerThread);
    ns.tprint("ramAvailable: ", ramAvailable);
    ns.tprint("ramPerThread: ", ramPerThread);
    ns.tprint("threads: ", threads);
    ns.tprint(threads + " threads can be runned on " + servers[index] + ".");
    if (threads > 0) {
      ns.tprint("Starting " + script + " on " + targetServer + " with " + servers[index] + ".");
      ns.exec(script, servers[index], threads, targetServer);
    } else {
      ns.tprint("NOT ENOUGH MEMORY ON " + servers[index] + ".");
    }
  }
  ns.tprint("Total RAM available = " + totalRAMavailable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL2Vhcmx5L2F1dG9tYXRlU2NyaXB0cy50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBR0EsZUFBc0IsS0FBSyxJQUFNO0FBRS9CLE1BQUksVUFBVTtJQUNaO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7QUFRRixRQUFNLHdCQUF3QixHQUFHLEtBQUssQ0FBQztBQUN2QyxNQUFJLHVCQUF1QjtBQUN6QixVQUFNLGlCQUFpQjtBQUN2QixVQUFNLGVBQWU7QUFDckIsVUFBTSxhQUFhLENBQUE7QUFDbkIsUUFBSTtBQUVKLGFBQVMsUUFBUSxHQUFHLFNBQVMsY0FBYyxTQUFTO0FBQ2xELG1CQUFhLGlCQUFpQixNQUFNLFNBQVE7QUFDNUMsaUJBQVcsS0FBSyxVQUFVOztBQUc1QixjQUFVLFFBQVEsT0FBTyxVQUFVOztBQUlyQyxRQUFNLGdCQUFnQixNQUFNLHNCQUFzQixPQUFPLEVBQUU7QUFDM0QsUUFBTSxTQUFTO0lBQ2IsT0FBTyxHQUFHLGdCQUFlO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0IsTUFBTSxHQUFHLHdCQUF3QixNQUFNOztBQUV6RCxLQUFHLE9BQU8sYUFBYSxNQUFNO0FBQzdCLFFBQU0sZUFBZSxNQUFNLGdCQUFnQixRQUFRLEVBQUU7QUFDckQsUUFBTSxzQkFBc0IsY0FBYyxFQUFFO0FBQzVDLFFBQU0sR0FBRyxLQUFLLFlBQVk7QUFFMUIsUUFBTSxTQUFTO0FBSWYsTUFBSSxvQkFBb0I7QUFDeEIsTUFBSSxZQUFZO0FBR2hCLFdBQVMsUUFBUSxHQUFHLFFBQVEsUUFBUSxRQUFRLFNBQVM7QUFDbkQsT0FBRyxRQUFRLFFBQVEsS0FBSyxDQUFDO0FBQ3pCLGdCQUFZLEdBQUcsZ0JBQWdCLFFBQVEsS0FBSyxDQUFDO0FB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
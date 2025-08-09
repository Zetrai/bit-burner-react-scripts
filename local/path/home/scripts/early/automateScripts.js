// servers/home/scripts/early/automateScripts.ts
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
      ns.tprint(
        "Starting " + script + " on " + targetServer + " with " + servers[index] + "."
      );
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvZWFybHkvYXV0b21hdGVTY3JpcHRzLnRzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFHQSxlQUFzQixLQUFLLElBQXVCO0FBRWhELE1BQUksVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFPQSxRQUFNLHdCQUF3QixHQUFHLEtBQUssQ0FBQztBQUN2QyxNQUFJLHVCQUF1QjtBQUN6QixVQUFNLGlCQUFpQjtBQUN2QixVQUFNLGVBQWU7QUFDckIsVUFBTSxhQUFhLENBQUM7QUFDcEIsUUFBSTtBQUVKLGFBQVMsUUFBUSxHQUFHLFNBQVMsY0FBYyxTQUFTO0FBQ2xELG1CQUFhLGlCQUFpQixNQUFNLFNBQVM7QUFDN0MsaUJBQVcsS0FBSyxVQUFVO0FBQUEsSUFDNUI7QUFFQSxjQUFVLFFBQVEsT0FBTyxVQUFVO0FBQUEsRUFDckM7QUFHQSxRQUFNLGdCQUFnQixNQUFNLHNCQUFzQixPQUFPLEVBQUU7QUFDM0QsUUFBTSxTQUFTO0FBQUEsSUFDYixPQUFPLEdBQUcsZ0JBQWdCO0FBQUEsSUFDMUIsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCLE1BQU0sR0FBRyx3QkFBd0IsTUFBTTtBQUFBLEVBQ3pEO0FBQ0EsS0FBRyxPQUFPLGFBQWEsTUFBTTtBQUM3QixRQUFNLGVBQWUsTUFBTSxnQkFBZ0IsUUFBUSxFQUFFO0FBQ3JELFFBQU0sc0JBQXNCLGNBQWMsRUFBRTtBQUM1QyxRQUFNLEdBQUcsS0FB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
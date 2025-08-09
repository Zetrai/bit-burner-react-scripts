// servers/home/home/home/scripts/early/automateScripts.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL2Vhcmx5L3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy9lYXJseS9hdXRvbWF0ZVNjcmlwdHMudHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUdBLGVBQXNCLEtBQUssSUFBTTtBQUUvQixNQUFJLFVBQVU7SUFDWjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0FBUUYsUUFBTSx3QkFBd0IsR0FBRyxLQUFLLENBQUM7QUFDdkMsTUFBSSx1QkFBdUI7QUFDekIsVUFBTSxpQkFBaUI7QUFDdkIsVUFBTSxlQUFlO0FBQ3JCLFVBQU0sYUFBYSxDQUFBO0FBQ25CLFFBQUk7QUFFSixhQUFTLFFBQVEsR0FBRyxTQUFTLGNBQWMsU0FBUztBQUNsRCxtQkFBYSxpQkFBaUIsTUFBTSxTQUFRO0FBQzVDLGlCQUFXLEtBQUssVUFBVTs7QUFHNUIsY0FBVSxRQUFRLE9BQU8sVUFBVTs7QUFJckMsUUFBTSxnQkFBZ0IsTUFBTSxzQkFBc0IsT0FBTyxFQUFFO0FBQzNELFFBQU0sU0FBUztJQUNiLE9BQU8sR0FBRyxnQkFBZTtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCLE1BQU0sR0FBRyx3QkFBd0IsTUFBTTs7QUFFekQsS0FBRyxPQUFPLGFBQWEsTUFBTTtBQUM3QixRQUFNLGVBQWUsTUFBTSxnQkFBZ0IsUUFBUSxFQUFFO0FBQ3JELFFBQU0sc0JBQXNCLGNBQWMsRUFBRTtBQUM1QyxRQUFNLEdBQUcsS0FBSyxZQUFZO0FBRTFCLFFBQU0sU0FBUztBQUlmLE1BQUksb0JBQW9CO0FBQ3hCLE1BQUksWUFBWTtBQUdoQixXQUFTLFFBQVEsR0FBRyxRQUFRLFFBQVEsUUFBUSxTQUFTO0FBQ25ELE9BQUcsUUFBUSxRQUFRLEtBQUssQ0FBQztBQUN6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
/* eslint-disable no-constant-condition */
import { NS } from 'NetscriptDefinitions';

export async function main(ns: NS): Promise<void> {
  // Globals
  const ram = 8;
  const numOfServers = ns.getPurchasedServerLimit();
  const hostNamePrefix = 'pserv-';
  const buy = true; // Check prices or simulate the purchase before you actually buy

  // Variables
  let serverName;
  const serversCost = ns.getPurchasedServerCost(ram) * numOfServers; // Comment out * numOfServers if needed
  const totalCost = serversCost * numOfServers;

  // Quick total purchase cost dry calculation
  ns.tprint('Total Cost is ' + ns.nFormat(totalCost, '$0.000a' + '.'));

  // Main Script
  // Toggle buy flag in Globals to enable actual purchase
  if (buy) {
    // You have to kill all scripts on servers before you can delete or buy new ones

    // For buying a Server Farm uncomment this below and set the proper number of servers to purchase in the header.
    // This will buy a group of servers with a common name and number, which makes it easier to manage and automate.
    //
    let i = 21;
    while (i < numOfServers) {
      // Check if we have enough money to purchase a server
      ns.clearLog();
      ns.print(`INFO Purchase Limit: ${ns.getPurchasedServerLimit()}`);
      ns.print(`INFO Purchase Cost: ${ns.getPurchasedServerCost(ram)}`);
      ns.print(
        `INFO Total Purchased Servers: ${ns.getPurchasedServers().length}`
      );

      if (ns.getServerMoneyAvailable('home') > ns.getPurchasedServerCost(ram)) {
        serverName = hostNamePrefix + i.toString();
        ns.tprint('Buying ' + serverName);

        // ns.killall(serverName);
        // ns.deleteServer(serverName);
        ns.purchaseServer(serverName, ram);
        const scripts = [
          '/scripts/early/hack.js',
          '/scripts/early/deployscripts.js',
          '/scripts/grow.js',
          '/scripts/supergrow.js',
          'scripts/serverInfo.ts',
        ];
        ns.scp(scripts, serverName);
        const ramAvailable =
          ns.getServerMaxRam(serverName) - ns.getServerUsedRam(serverName);

        const script = '/scripts/early/hack.js';
        const ramPerThread = ns.getScriptRam(script);
        const threads = Math.floor(ramAvailable / ramPerThread);

        const programsCount = await getProgramsAndInstall(false, ns);
        const myInfo = {
          level: ns.getHackingLevel(),
          portsUnlocked: programsCount,
          moneyAvailable: await ns.getServerMoneyAvailable('home'),
        };
        const targetServer = await getTargetServer(myInfo, ns);
        ns.exec(script, serverName, threads, targetServer);

        ++i;
      }
      await ns.sleep(1000);
    }
  }
}

export async function getProgramsAndInstall(installCheck: any, ns: NS) {
  if (!installCheck) {
    let count = 1; //BruteSSH.exe is always installed due to the augmentation
    if (ns.fileExists('FTPCrack.exe', 'home')) count++;
    if (ns.fileExists('relaySMTP.exe', 'home')) count++;
    if (ns.fileExists('HTTPWorm.exe', 'home')) count++;
    if (ns.fileExists('SQLInject.exe', 'home')) count++;

    return count;
  }
  if (ns.fileExists('BruteSSH.exe', 'home')) ns.brutessh(installCheck);
  if (ns.fileExists('FTPCrack.exe', 'home')) ns.ftpcrack(installCheck);
  if (ns.fileExists('relaySMTP.exe', 'home')) ns.relaysmtp(installCheck);
  if (ns.fileExists('HTTPWorm.exe', 'home')) ns.httpworm(installCheck);
  if (ns.fileExists('SQLInject.exe', 'home')) ns.sqlinject(installCheck);

  return;
}
export async function getTargetServer(myInfo: any, ns: NS) {
  let target = 'foodnstuff';
  if (myInfo.level < 40) {
    return 'foodnstuff';
  } else if (
    (myInfo.level > 40 && myInfo.level < 100) ||
    myInfo.portsUnlocked == 1
  ) {
    target = 'harakiri-sushi';
  } else if (
    myInfo.portsUnlocked == 2 ||
    (myInfo.portsUnlocked > 2 && myInfo.level < 500)
  ) {
    if (myInfo.level < 292) target = 'phantasy';
    else target = 'phantasy';
  } else if (
    myInfo.portsUnlocked == 3 ||
    (myInfo.portsUnlocked > 3 && myInfo.level < 800)
  ) {
    target = 'phantasy';
  } else if (
    myInfo.portsUnlocked == 4 ||
    (myInfo.portsUnlocked > 4 && myInfo.level < 900)
  ) {
    target = 'phantasy';
  } else if (myInfo.portsUnlocked == 5) {
    target = 'phantasy';
  }
  ns.tprint('Target Server : ' + target);
  return target;
}

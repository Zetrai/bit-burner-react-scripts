/* eslint-disable no-constant-condition */
import { NS } from 'NetscriptDefinitions';

export async function main(ns: NS): Promise<void> {
  ns.tprint('------------------------------------');
  ns.tprint('Deploying Scripts...');
  ns.tprint('------------------------------------');
  //getTargetServer
  const programsCount = await getProgramsAndInstall(false, ns);
  const myInfo = {
    level: ns.getHackingLevel(),
    portsUnlocked: programsCount,
    moneyAvailable: await ns.getServerMoneyAvailable('home'),
  };
  const targetServer = await getTargetServer(myInfo, ns);
  await getProgramsAndInstall(targetServer, ns);
  await ns.nuke(targetServer);

  const runningServer = 'home';
  const script = '/scripts/early/hack.js';

  const ramAvailable =
    ns.getServerMaxRam(runningServer) - ns.getServerUsedRam(runningServer);
  const ramPerThread = ns.getScriptRam(script);
  const threads = Math.floor(ramAvailable / ramPerThread);
  ns.tprint('ramAvailable: ', ramAvailable);
  ns.tprint('ramPerThread: ', ramPerThread);
  ns.tprint('threads: ', threads);

  ns.tprint(threads + ' threads can be runned on ' + runningServer + '.');

  if (threads > 0) {
    ns.tprint(
      'Starting ' +
        script +
        ' on ' +
        targetServer +
        ' with ' +
        runningServer +
        '.'
    );
    ns.exec(script, runningServer, threads, targetServer);
  }
  ns.tprint('------------------------------------');
  ns.tprint('Running hack scripts on other servers...');
  ns.tprint('------------------------------------');

  // Array of all servers that don't need any ports opened
  // to gain root access. These have 16 GB of RAM
  const servers0Port = [
    'sigma-cosmetics',
    'joesguns',
    'nectar-net',
    'hong-fang-tea',
    'harakiri-sushi',
  ];

  // Array of all servers that only need 1 port opened
  // to gain root access. These have 32 GB of RAM
  const servers1Port = ['neo-net', 'zer0', 'max-hardware', 'iron-gym'];
  for (let i = 0; i < servers0Port.length; ++i) {
    const serv = servers0Port[i];
    ns.nuke(serv);
  }
  if (ns.fileExists('BruteSSH.exe')) {
    for (let i = 0; i < servers1Port.length; ++i) {
      const serv = servers1Port[i];
      ns.nuke(serv);
    }
  }

  // ns.tprint('------------------------------------');
  // ns.tprint('Deploying server farm purchase script...');
  // ns.tprint('------------------------------------');
  // script = '/scripts/early/serverFarm.js';
  // ns.exec(script, runningServer, threads, targetServer);
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
  if (myInfo.level == 1) {
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

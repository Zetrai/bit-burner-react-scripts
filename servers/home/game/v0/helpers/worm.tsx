import { NS } from '@/NetscriptDefinitions';
import React from 'react';

const BACKDOOR_SERVS = ['CSEC', 'avmnite-02h', 'I.I.I.I', 'run4theh111z'];
const DISABLED_LOGS = ['scan', 'run', 'getServerRequiredHackingLevel', 'getHackingLevel', 'getServerNumPortsRequired', 'fileExists', 'hasRootAccess'];

/** @param {NS} ns */
function disable_logs(ns) {
  for (let log of DISABLED_LOGS) {
    ns.disableLog(log);
  }
}

/** @param {NS} ns */
function run_hacks(ns, server, hacks_dict) {
  let hacks = 0;
  for (let hack in hacks_dict) {
    if (hacks_dict[hack]) {
      hacks += 1;
      switch (hack) {
        case 'brute':
          ns.brutessh(server);
          break;
        case 'ftp':
          ns.ftpcrack(server);
          break;
        case 'http':
          ns.httpworm(server);
          break;
        case 'sql':
          ns.sqlinject(server);
          break;
        case 'smtp':
          ns.relaysmtp(server);
          break;
      }
    }
  }
  return hacks;
}

export async function main(ns: NS): Promise<void> {
  // ns.ui.openTail();

  disable_logs(ns);

  let hacks_dict = {
    brute: ns.fileExists('BruteSSH.exe'),
    ftp: ns.fileExists('FTPCrack.exe'),
    http: ns.fileExists('HTTPWorm.exe'),
    sql: ns.fileExists('SQLInject.exe'),
    smtp: ns.fileExists('relaySMTP.exe'),
  };
  const server = `${ns.args[0]}`;
  ns.tprint(`Worm running on ${server}...`);

  // Running assumption that hacking level is high enough. This is checked in crawler.js
  ns.tprint(server, ' hacking level:', ns.getServerRequiredHackingLevel(server));

  let modelText = '';

  let req_ports = ns.getServerNumPortsRequired(server);
  if (req_ports > 0 && run_hacks(ns, server, hacks_dict) < req_ports) {
    modelText = `Not enough ports open to hack ${server}. Required: ${req_ports}, Opened: ${Object.values(hacks_dict).filter(Boolean).length} \n`;
    ns.write('/game/v0/data/dynamicModelText.txt', modelText, 'a');
    ns.write('/game/v0/data/serversNotHacked.txt', `${server},`, 'a');
    ns.exit();
  } else {
    ns.write('/game/v0/data/serversHacked.txt', `${server},`, 'a');
  }
  ns.nuke(server);
  if (ns.hasRootAccess(server)) {
    ns.toast(server + ' has been hacked');
    // ----Singularity Required----
    if (BACKDOOR_SERVS.includes(server)) ns.exec('hacking/backdoor.js', 'home', 1, server);
  }
}

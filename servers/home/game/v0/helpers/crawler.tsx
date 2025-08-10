import { NS } from '@/NetscriptDefinitions';
import React from 'react';

import { Model } from '@ui/components/Model/Model';

const IGNORE = ['darkweb'];

function disable_logs(ns) {
  var logs = ['scan', 'run', 'getServerRequiredHackingLevel', 'getHackingLevel'];
  for (var i in logs) {
    ns.disableLog(logs[i]);
  }
}

function resetData(ns) {
  ns.write('/game/v0/data/servers.txt', '', 'w');
  ns.write('/game/v0/data/serversHacked.txt', '', 'w');
  ns.write('/game/v0/data/serversNotHacked.txt', '', 'w');
  ns.write('/game/v0/data/dynamicModelText.txt', '', 'w');
}

export async function main(ns: NS): Promise<void> {
  ns.print('Crawler running...');

  disable_logs(ns);
  resetData(ns);

  const visited = new Set<string>();
  const servers: string[] = [];

  async function scan(host: string) {
    if (visited.has(host)) return;
    visited.add(host);
    servers.push(host);
    if (!ns.hasRootAccess(host) && ns.getServerRequiredHackingLevel(host) <= ns.getHackingLevel() && !IGNORE.includes(host)) {
      ns.print('Attempting to hack ', host);
      ns.exec('/game/v0/helpers/worm.js', 'home', 1, host);
      await ns.sleep(300);
    } else if (ns.hasRootAccess(host)) {
      ns.write('/game/v0/data/serversHacked.txt', `${host},`, 'a');
    } else if (ns.getServerRequiredHackingLevel(host) > ns.getHackingLevel()) {
      ns.write('/game/v0/data/serversNotHacked.txt', `${host},`, 'a');
    }
    const neighbors = ns.scan(host);
    for (const neighbor of neighbors) {
      await scan(neighbor);
    }
  }

  await scan('home');
  await ns.write('/game/v0/data/servers.txt', JSON.stringify(servers), 'w');

  const dynamicModelText = ns.read('/game/v0/data/dynamicModelText.txt');
  const serversHacked = ns.read('/game/v0/data/serversHacked.txt').split(',').filter(Boolean);
  const serversnotHacked = ns.read('/game/v0/data/serversNotHacked.txt').split(',').filter(Boolean);

  ns.tprintRaw(
    <Model
      text={`[INFO] Crawled ${servers.length} servers\n[INFO] Total Hacked Servers: ${serversHacked.length}\n[INFO] Total Not Hacked Servers: ${serversnotHacked.length}`}
      variant='normal'
    />
  );

  // ns.tprintRaw(<Model text={`[INFO] Total Hacked Servers: ${serversHacked.length}`} variant='normal' />);
  // ns.tprintRaw(<Model text={`[INFO] Total Not Hacked Servers: ${serversnotHacked.length}`} variant='normal' />);
  ns.tprintRaw(<Model text={`[INFO] Hacked Servers: ${serversHacked}`} variant='normal' />);
  ns.tprintRaw(<Model text={`[WARNING]\n${dynamicModelText}`} variant='normal' />);

  ns.write('/game/v0/data/dynamicModelText.txt', 'Crawling Done', 'w');
}

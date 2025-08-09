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

export async function main(ns: NS): Promise<void> {
  ns.ui.openTail();
  ns.print('Crawler running...');
  // let servers: any = ns.read('/game/data/servers.txt');
  // servers = servers ? servers.split(',') : [];

  disable_logs(ns);
  let servers = Array(ns.scan())[0];
  let serv_set = Array(...servers);
  serv_set.push('home');

  let i = 0;
  while (i < servers.length) {
    let server = servers[i];
    if (!ns.hasRootAccess(server) && ns.getServerRequiredHackingLevel(server) <= ns.getHackingLevel() && !IGNORE.includes(server)) {
      // ns.tprint('attempting to hack ', server);
      // ns.run('hacking/worm.js', 1, server);
      await ns.sleep(200);
    }
    let s = ns.scan(server);
    for (let j in s) {
      let con = s[j];
      if (!serv_set.includes(con)) {
        //if (serv_set.indexOf(con) < 0) {
        serv_set.push(con);
        servers.push(con);
      }
    }
    i += 1;
  }

  ns.tprintRaw(<Model text={`Crawled ${serv_set.length} servers`} />);
}

/** @param {NS} ns **/
import { NS } from '@/NetscriptDefinitions';
import React from 'react';

import { Model } from '@/servers/home/ui/components/Logger/Logger';

export async function main(ns: NS) {
  const ram: any = ns.args[0] || 8; // GB RAM per server
  const maxServers = ns.getPurchasedServerLimit();

  if (ns.getPurchasedServers().length >= maxServers) {
    ns.tprintRaw(<Model text='[FAIL] Maximum number of servers already purchased.' variant='fail' />);
    return;
  }

  ns.disableLog('sleep');
  ns.disableLog('getServerMoneyAvailable');

  ns.tprintRaw(<Model text={`[INFO] Auto-purchase script started with ${ram}GB RAM per server`} variant='info' />);

  ns.tprint(`Auto-purchase script started. Target RAM: ${ram}GB per server`);

  while (true) {
    // Check if we still have room for more servers
    const ownedServers = ns.getPurchasedServers();
    if (ownedServers.length < maxServers) {
      const cost = ns.getPurchasedServerCost(ram);

      if (ns.getServerMoneyAvailable('home') >= cost) {
        const newName = `pserv-${ownedServers.length}`;
        const server = ns.purchaseServer(newName, ram);

        ns.tprintRaw(
          <Model
            text={`✅ Purchased ${server} (${ram}GB) for ${ns.nFormat(cost, '$0.00a')} || ownedServers: ${ownedServers.length + 1}/${maxServers}`}
            variant='info'
          />
        );
      }
    }

    await ns.sleep(1000); // check every second
  }
}

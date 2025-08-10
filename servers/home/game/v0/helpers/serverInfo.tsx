import { NS } from '@/NetscriptDefinitions';
import React from 'react';

import { formatMoney, formatRam } from './helpers';

import { Model } from '@/servers/home/ui/components/Logger/Logger';
import { ServerInfo } from '@/servers/home/ui/components/ServerInfo/ServerInfo';

export async function main(ns: NS): Promise<void> {
  const target: string = `${ns.args[0]}` || ns.getHostname();
  const server = ns.getServer(target);

  const ramMaxFormatted = formatRam(server.maxRam);
  const ramUsedFormatted = formatRam(server.ramUsed);

  const info = {
    hostname: server.hostname,
    ip: server.ip,
    organizationName: server.organizationName,
    requiredHackingSkill: server.requiredHackingSkill,
    minDifficulty: server.minDifficulty,
    hackDifficulty: ns.nFormat(server.hackDifficulty || 0, '0.00'),
    moneyMax: ns.nFormat(server.moneyMax || 0, '$0.000a'),
    moneyAvailable: formatMoney(server.moneyAvailable || 0),
    serverGrowth: server.serverGrowth,
    cpuCores: server.cpuCores,
    ramMax: ramMaxFormatted,
    ramUsed: ramUsedFormatted,
    hasAdminRights: server.hasAdminRights,
    backdoorInstalled: server.backdoorInstalled,
    numOpenPortsRequired: server.numOpenPortsRequired,
    openPortCount: server.openPortCount,
  };

  ns.tprintRaw(<Model text='Fetching Server Info...' variant='loader' waitFor={1200} />);

  // Simulate fetching server info
  await ns.sleep(2000);

  ns.tprintRaw(<ServerInfo info={info} variant='info' />);
}

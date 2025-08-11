import { NS } from '@/NetscriptDefinitions';
import React from 'react';

import { TableModal } from '@/servers/home/ui/components/TableModal/TableModal';
import { Logger } from '@/servers/home/ui/components/Logger/Logger';

export const formatMoney = (amount: number): string => {
  if (amount >= 1e9) return (amount / 1e9).toFixed(2) + 'B';
  if (amount >= 1e6) return (amount / 1e6).toFixed(2) + 'M';
  if (amount >= 1e3) return (amount / 1e3).toFixed(2) + 'K';
  return amount.toString();
};

export const formatRam = (ram: number): string => {
  if (ram >= 1) return ram.toFixed(2) + ' GB';
  return (ram * 1024).toFixed(0) + ' MB';
};

export const getOptimalTarget = async (hackableServers, ns: NS) => {
  let cores = ns.getServer('home').cpuCores;
  let serversProfit = [];

  for (let server of hackableServers) {
    // Skip if too hard
    if (ns.getServerRequiredHackingLevel(server) > ns.getHackingLevel()) continue;

    let maxMoney = ns.getServerMaxMoney(server);
    if (maxMoney <= 0) continue; // Skip empty servers

    // Hack analysis
    let hackChance = ns.hackAnalyzeChance(server);
    let hackFraction = ns.hackAnalyze(server);
    let moneyPerHack = hackFraction * maxMoney * hackChance;

    // Growth analysis - bring from 50% money to 100%
    let growThreads = ns.growthAnalyze(server, 2, cores);
    let growTime = ns.getGrowTime(server) / 1000; // in seconds

    // Simple profit metric: money per second
    let profitPerSecond = moneyPerHack / (growThreads * growTime);

    serversProfit.push({
      name: server,
      profit: profitPerSecond,
    });
  }

  // Sort by best profit/sec
  serversProfit.sort((a, b) => b.profit - a.profit);

  // Print for debugging
  // let pad = serversProfit.reduce((acc, elem) => Math.max(acc, elem.name.length), 0);
  // for (let serv of serversProfit) {
  //   ns.tprint(`Server: ${serv.name.padEnd(pad)} | Profit/sec: $${serv.profit.toFixed(2)}`);
  // }
  let info = {},
    i = 1;
  for (let serv of serversProfit) {
    info[serv.name] = `$${serv.profit.toFixed(2)}`;
    if (i++ > 10) break; // Limit to top 10 for display
  }
  ns.tprintRaw(<TableModal info={info} name='server' value='profit' variant='info' heading='Most Profitable Server' />);
  ns.tprintRaw(<Logger text={`[SUCESS] Optimal target: ${serversProfit[0].name}`} variant='success' />);
  ns.write('/game/v0/data/optimalTarget.txt', serversProfit[0].name || '', 'w');

  // Return best target
  return serversProfit.length > 0 ? serversProfit[0].name : null;
};

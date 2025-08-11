import { NS } from '@/NetscriptDefinitions';
import React from 'react';

import { getOptimalTarget } from '@v0/helpers/helpers';

import { Logger } from '@/servers/home/ui/components/Logger/Logger';

export async function main(ns: NS): Promise<void> {
  const hackableServers = ns.read('/game/v0/data/serversHacked.txt').split(',').filter(Boolean);

  const target = await getOptimalTarget(hackableServers, ns);

  // Server & RAM setup
  const homeRam = ns.getServerMaxRam('home') - ns.getServerUsedRam('home');
  const scriptRam = ns.getScriptRam('weakenB.js');

  // Timings
  const weakenTime = ns.getWeakenTime(target);
  const growTime = ns.getGrowTime(target);
  const hackTime = ns.getHackTime(target);

  // Thread counts (basic formula)
  const hackThreads = Math.floor(ns.hackAnalyzeThreads(target, ns.getServerMoneyAvailable(target) * 0.25));
  const growThreads = Math.ceil(ns.growthAnalyze(target, 1 / (1 - 0.25)));
  const weakenThreadsHack = Math.ceil((hackThreads * 0.002) / ns.weakenAnalyze(1));
  const weakenThreadsGrow = Math.ceil((growThreads * 0.004) / ns.weakenAnalyze(1));

  // Delays so they finish in sync
  const hackDelay = weakenTime - hackTime - 200;
  const growDelay = weakenTime - growTime + 200;
  const weakenDelayHack = 0;
  const weakenDelayGrow = 200;

  // Kill any existing batches before starting
  ns.scriptKill('hackB.js', 'home');
  ns.scriptKill('growB.js', 'home');
  ns.scriptKill('weakenB.js', 'home');
}

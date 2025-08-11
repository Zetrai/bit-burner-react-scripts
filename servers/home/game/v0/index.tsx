import { NS } from '@/NetscriptDefinitions';
import React from 'react';

import { getOptimalTarget } from '@v0/helpers/helpers';

import { Logger } from '@/servers/home/ui/components/Logger/Logger';

function resetData(ns) {
  ns.write('/game/v0/data/dynamicModelText.txt', '', 'w');
}

const waitForCrawler = async (ns: NS) => {
  ns.tprintRaw(<Logger text='Crawler: ' waitFor={2 * 1000} variant='loader' />);
  while (true) {
    const text = ns.read('/game/v0/data/dynamicModelText.txt');
    if (text === 'Crawling Done') {
      ns.tprintRaw(<Logger text={`[SUCCESS] ${text}`} variant='success' />);
      break;
    }
    await ns.sleep(1000);
  }
};

export async function main(ns: NS): Promise<void> {
  await resetData(ns);
  ns.exec('/game/v0/helpers/crawler.js', 'home', 1, ns.getHostname());

  await waitForCrawler(ns);

  ns.exec('/game/v0/helpers/purchaseServers.js', 'home', 1, 8);

  ns.exec('/game/v0/controller.tsx', 'home', 1);
}

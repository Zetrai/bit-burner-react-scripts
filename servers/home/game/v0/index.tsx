import { NS } from '@/NetscriptDefinitions';
import React from 'react';

import { Model } from '@/servers/home/ui/components/Logger/Model';

function resetData(ns) {
  ns.write('/game/v0/data/dynamicModelText.txt', '', 'w');
}

const waitForCrawler = async (ns: NS) => {
  ns.tprintRaw(<Model text='Crawler: ' waitFor={2 * 1000} variant='loader' />);
  while (true) {
    const text = ns.read('/game/v0/data/dynamicModelText.txt');
    if (text === 'Crawling Done') {
      ns.tprintRaw(<Model text={`[SUCCESS] ${text}`} variant='success' />);
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
}

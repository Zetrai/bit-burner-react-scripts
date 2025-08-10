import { NS } from '@/NetscriptDefinitions';
import React from 'react';

import { Model } from '@ui/components/Model/Model';

function resetData(ns) {
  ns.write('/game/v0/data/dynamicModelText.txt', '', 'w');
}

const waitForCrawler = async (ns: NS) => {
  ns.tprintRaw(<Model text='Crawler: ' variant='loading' />);
  while (true) {
    const text = ns.read('/game/v0/data/dynamicModelText.txt');
    if (text === 'Crawling Done') {
      ns.tprintRaw(<Model text={text} variant='normal' />);
      break;
    }
    await ns.sleep(1000);
  }
};

export async function main(ns: NS): Promise<void> {
  await resetData(ns);
  ns.exec('/game/v0/helpers/crawler.js', 'home', 1, ns.getHostname());

  await waitForCrawler(ns);
}

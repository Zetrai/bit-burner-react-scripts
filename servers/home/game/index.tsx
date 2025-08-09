import { NS } from '@/NetscriptDefinitions';
import React from 'react';

export async function main(ns: NS): Promise<void> {
  ns.print('Index running...');

  ns.exec('/game/helpers/Crawler.js', 'home', 1, ns.getHostname());
}

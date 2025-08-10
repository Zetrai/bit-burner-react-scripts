import { NS } from '@/NetscriptDefinitions';

export async function main(ns: NS): Promise<void> {
  ns.print('Index running...');

  ns.exec('/game/v0/helpers/crawler.js', 'home', 1, ns.getHostname());
}

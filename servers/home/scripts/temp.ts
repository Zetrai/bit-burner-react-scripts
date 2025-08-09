/* eslint-disable no-constant-condition */
import { NS } from 'NetscriptDefinitions';

export async function main(ns: NS): Promise<void> {
  const prefix = 'pserv-';

  for (let i = 17; i <= 20; i++) {
    ns.renamePurchasedServer(`${prefix}${i}-0`, `${prefix}${i + 4}`);
  }
}

import { NS } from '@/NetscriptDefinitions';

export async function main(ns: NS): Promise<void> {
  const targetServer: string = `${ns.args[0]}`;
  const waitTime: any = ns.args[1];
  await ns.sleep(waitTime);
  await ns.weaken(targetServer);
}

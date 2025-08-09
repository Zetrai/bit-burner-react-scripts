import { NS } from '@/NetscriptDefinitions';
import { Button } from '@ui/components/Button/Button';
import React from 'react';

export async function main(ns: NS): Promise<void> {
  ns.ui.openTail();
  ns.print('Index running...');
}

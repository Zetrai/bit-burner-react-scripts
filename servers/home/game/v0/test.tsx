import { NS } from '@/NetscriptDefinitions';
import { Button } from '@ui/components/Button/Button';
import React from 'react';

export async function main(ns: NS): Promise<void> {
  ns.ui.openTail();
  ns.print('Test script running...');
  ns.tprintRaw(
    <Button label='Click Me' onClick={() => ns.tprint('Button clicked!')}>
      <span>Custom Button Content</span>
    </Button>
  );
}

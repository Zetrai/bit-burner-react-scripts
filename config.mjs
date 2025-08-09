import { context } from 'esbuild';
import { BitburnerPlugin } from 'esbuild-bitburner-plugin';

const createContext = async () =>
  await context({
    entryPoints: ['servers/**/*.js', 'servers/**/*.jsx', 'servers/**/*.ts', 'servers/**/*.tsx', 'servers/**/*.json', 'servers/**/*.txt'],
    outbase: './servers',
    outdir: './build',
    plugins: [
      BitburnerPlugin({
        port: 12525,
        types: 'NetscriptDefinitions.d.ts',
        mirror: {
          'local/path': ['home'],
        },
        distribute: {
          'build/home/dist': ['home'],
        },
        remoteDebugging: true,
      }),
    ],
    bundle: true,
    format: 'esm',
    platform: 'browser',
    logLevel: 'debug',
  });

const ctx = await createContext();
ctx.watch();

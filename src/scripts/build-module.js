const esbuild = require('esbuild');
const name    = 'navbar';

async function buildScript( format = 'esm' ) {
  return esbuild.build( {
    entryPoints: [ `./src/app/index.ts` ],
    bundle     : true,
    outfile    : `./dist/js/${ name }.${ format }.js`,
    format,
    external   : ['react', 'react-dom', 'next/router'],
  } );
}

async function buildModule() {
  return Promise.all( [
    buildScript(),
    buildScript('cjs'),
  ] );
}

buildModule().catch( e => console.error( e ) );
exports.buildScript = buildScript;
exports.buildModule = buildModule;
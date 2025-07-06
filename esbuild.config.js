const { build } = require('esbuild');

const shared = {
	entryPoints: ['./src/index.ts'],
	bundle: true,
	minify: true
}

build({
	...shared,
	format: 'cjs',
	target: 'node22',
	outdir: 'dist/cjs'
});

build({
	...shared,
	format: 'esm',
	target: 'es2015',
	outdir: 'dist/esm'
});

console.log('build complete!');
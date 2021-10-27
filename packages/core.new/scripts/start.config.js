export default {
    dev: true,
	port: 3000,
    prefix: 'plus',
    cache: '.cache',
	include: './src/**/*.tsx',
    preprocess: {
        scss: {
            includePaths: ['./src/styles']
        }
    }
}
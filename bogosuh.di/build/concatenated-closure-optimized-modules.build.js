({
	baseUrl: '../js',
	mainConfigFile: '../js/main.js',
	name: '../js/main',
	out: '../js/concatenated-closure-optimized-modules.js',
	optimize: 'closure'
})
// exclude jquery from build.
/*
({
    baseUrl: '../js',
    mainConfigFile: '../js/main.js',
    name: '../js/main',
    out: '../js/concatenated-modules.js',
    optimize: 'none',
    paths: {
        jquery: "empty:"
    }
})*/

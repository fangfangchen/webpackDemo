var webpack = require('webpack');
var webpackDev = require('webpack-dev-server');
var webpackConfig = require('./webpack.js');

var compiler = webpack(webpackConfig);

new webpackDev(compiler, {
	hot: true
}).listen('8089', function () {
	console.log('webpack dev server!')
});

// compiler.watch({
// 	aggregateTimeout: 300
// }, (err, stats) => {
// 	console.log(err ? err : '[webpack]: build done!');
// 	console.log(stats.toString({
// 		colors: true
// 	}));
// });
var webpack = require('webpack');
var webpackDev = require('webpack-dev-server');
var webpackConfig = require('./webpack.js');

var compiler = webpack(webpackConfig);

new webpackDev(compiler, {
	hot: true
}).listen('8085', function () {
	console.log('webpack dev server!')
});

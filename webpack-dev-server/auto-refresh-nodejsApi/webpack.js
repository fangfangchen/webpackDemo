var path = require('path');
var webpack = require('webpack');

var config = {
	entry: [
		'webpack-dev-server/client?http://localhost:8085',
		'webpack/hot/dev-server',
		'./app.js'
	],
	output: {
		path: path.resolve(__dirname, '/js'),
		publicPath: '/dist/',
		filename: 'app.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;
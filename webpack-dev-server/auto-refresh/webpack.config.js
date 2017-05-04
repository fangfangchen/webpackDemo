var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./app.js'
	],
	output: {
		path: path.resolve(__dirname, '/js'),
		publicPath: '/dist/',
		filename: 'app.js'
	}
};

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
	entry: [
		'webpack-dev-server/client?http://localhost:8089',
		'webpack/hot/dev-server',
		'./javascript/app.js'
	],
	output: {
		path: path.resolve(__dirname, '../asset/'),
		publicPath: '../asset/',
		filename: 'app.js'
	},
	// resolveLoader: {
	// 	// loader的配置
	// 	moduleExtensions: ['-loader']
	// },
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
			{
				test: /\.(sass|scss)$/,
				// use: ['css-loader', 'sass-loader']
				loader: ExtractTextPlugin.extract({
					loader: 'sass-loader'
				})
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				})
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: 'app.css'
		}),
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: './index.html'
		})
	]
};

module.exports = webpackConfig;
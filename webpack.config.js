const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifier = require('webpack-notifier');

const production = process.env.NODE_ENV === 'production';
const path = require('path');

module.exports = {
	watch: production ? false : true,
	entry: {
		dist: path.resolve(__dirname, 'src/index.js'),
		docs: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		library: 'Age',
		libraryTarget: 'umd',
		path: path.resolve(__dirname),
		filename: '[name]/main.js'
	},
	devServer: {
		contentBase: path.resolve('/'),
		compress: true,
		port: 9000,
		inline: true,
		disableHostCheck: true
	},
	resolve: {
		alias: {
			Utils: path.resolve(__dirname, 'src/utils'),
			src: path.resolve(__dirname, 'src/')
		}
	},
	module: {
		rules: [
		{
			enforce: 'pre',
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader'
		},
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new WebpackNotifier(),
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'docs/index.html' ),
			template: path.resolve(__dirname, 'index.html' ),
			inject: false,
		})
	],
	devtool: production ? false : 'source-map',
};

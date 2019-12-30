const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			title: 'example',
			appMountId: 'page',
			lang: 'zh-CN',
		}),
		new VueLoaderPlugin()
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'awesome-dynamic-form.bundle.js',
	}
}
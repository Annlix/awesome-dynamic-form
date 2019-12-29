const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'example'
		})
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'awesome-dynamic-form.bundle.js',
	}
}
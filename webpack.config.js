const Path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
	entry: './src/index.js',
	output: {
		path: Path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve:{
		extensions: ['.js', '.jsx', '.scss']
	},
	module:{
		rules:[
			{
				test: /\.(jsx|js)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|gif|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/[hash].[ext]',
						}
					}
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/style/[name].css'
		})
	]
}
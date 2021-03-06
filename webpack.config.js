const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpack = require('webpack');

function resolve (dir) {
	return path.join(__dirname, './', dir)
}

module.exports = {
	entry: {
		ieCSSVariables_head: './src/ie11CustomProperties.js',
		app: './src/main.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		port: 3005,
		contentBase: './'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss'],
		alias: {
			'src': resolve('src'),
			'_mixins_': resolve('./src/mixins'),
			'_scss_': resolve('./src/assets/scss'),
			'_icomoon_': resolve('./src/assets/icomoon'),
			'_images_': resolve('./src/assets/image/'),
			'_store_': resolve('./src/store')
		}
	},
	// optimization: {
	// 	runtimeChunk: 'single',
	// 	splitChunks: {
	// 		chunks: 'all',
	// 		cacheGroups: {
	// 			// lodash: {
	// 			// 	test: /[\\/]node_modules[\\/](lodash)[\\/]/,
	// 			// 	name: 'lodash',
	// 			// 	chunks: 'all',
	// 			// 	priority: 2
	// 			// },
	// 			node: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				name: 'node',
	// 				chunks: 'all'
	// 			}
	// 		}
	// 	}
	// },
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: "file-loader"
			},
			{
				test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: 'src/index.html',
			chunks: ['ieCSSVariables_head', 'app']
		}),
		new HtmlWebpackInjector(),
		new HtmlWebpackHarddiskPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/'),
		publicPath: ''
	}
};
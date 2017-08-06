var path = require('path');

module.exports = options => {
	return {
		entry: './app.jsx',
		output: {
			filename: './public/bundle.js',
		},
		resolve: {
			alias: {
				MyAwesomeReactComponent: './src/MyAwesomeReactComponent',
				appStyles: './src/styles/app.css',
			}
		},
		module: {
			rules: [
				{
					test: /.jsx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								cacheDirectory: true,
							}
						}
					]
				},
				{
					test: /\.css$/,
					loader: "style-loader!css-loader"
				},
			]
		},
		devtool: 'cheap-module-eval-devtool-map'
	}
};
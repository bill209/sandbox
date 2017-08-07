var path = require('path');

module.exports = options => {
	return {
		entry: './index.jsx',
		output: {
			filename: './public/bundle.js',
		},
		resolve: {
			alias: {
				Mainz: './src/Main.jsx',
				Navz: './src/Nav.jsx',
				MyAwesomeReactComponent: './MyAwesomeReactComponent',
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
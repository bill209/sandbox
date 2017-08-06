var path = require('path');

module.exports = options => {
	return {
		entry: './index.js',
		output: {
			filename: './public/bundle.js',
		},
		resolve: {
			alias: {
				MyAwesomeReactComponent: path.resolve(__dirname, 'src/MyAwesomeReactComponent'),
				appStyles: path.resolve(__dirname, 'src/styles/app.css'),
			}
		},
		module: {
			rules: [
				{
					test: /.js?$/,
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
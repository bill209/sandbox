var path = require('path');

module.exports = options => {
	return {
		entry: './public/index.jsx',
		output: {
			path: path.resolve(__dirname, "public"),
			filename: 'bundle.js',
		},
		resolve: {
			alias: {
				Mainz: './src/Main.jsx',
				Navz: './src/Nav.jsx',
				MyAwesomeReactComponent: './MyAwesomeReactComponent',
				appStyles: './styles/app.css',
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
				{
					test: /\.(woff|woff2|eot|ttf|svg)$/,
					loader: 'file-loader?name=[name].[ext]&outputPath=fonts/'
				}
			]
		},
		devtool: 'source-map'
	}
};
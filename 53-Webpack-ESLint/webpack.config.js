const path = require('path');

module.exports =
{
	//Archivo principal y la entrada y salida establecida con la carpeta indicada para facilidad
	entry: './js/app.js',
	output:
	{
		//Ruta Salida y nombre del archivo
		path: path.resolve(__dirname, 'public/js'),
		filename: 'bundle.js'
	},
	//Modo desarrollo
	mode: 'development',
	devserver:
	{
		//Carpeta principal del proyecto
		contentBase: path.join(__dirname, '/'),
		compress: true,
		port: 9000,
		publicPath: "/public/js/",
		watchContentBase: true
	},

	module: 
	{
		rules:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use:
				{
					loader: 'babel-loader',
					options:
					{
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}
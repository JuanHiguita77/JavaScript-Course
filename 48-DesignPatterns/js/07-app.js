//NameSPACE: Evitar que choquen nombres en proyectos grandes

const restaurantApp = {};

restaurantApp.platillos = [
	{
		platillo: 'Pizza',
		precio: 25
	},
	{
		platillo: 'Hamburguesa',
		precio: 34
	},
	{
		platillo: 'nepe',
		precio: 23
	}
];

restaurantApp.funciones =
{
	mostrarMenu: platillos =>
	{
		platillos.forEach((platillo, index) =>
		{
			console.log(`N.${index} Platillo: ${platillo.platillo} Precio:$${platillo.precio}`);
		});
	}
}

const {platillos} = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);
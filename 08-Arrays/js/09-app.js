const car = 
[
	{nombre: 'televisor', precio: 123},
	{nombre: 'celular', precio: 433},
	{nombre: 'audifonos', precio: 123},
	{nombre: 'tablet', precio: 313},
	{nombre: 'ps5', precio: 453},
	{nombre: 'computador', precio: 3123},
];


for(let i = 0; i < car.length; i++)
{
	console.log(`Producto: ${car[i].nombre} - - - Precio: ${car[i].precio}`);
}


//Funcion que reemplaza el for para mostrar los datos

					//La funcion accede como nombre del arreglo
car.forEach( function(producto)
{
	console.log(`Producto: ${producto.nombre} - - - Precio: ${producto.precio}`);
});
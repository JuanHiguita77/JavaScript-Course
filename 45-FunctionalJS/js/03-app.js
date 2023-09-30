const carrito = [
	{nombre: 'Monitor' , precio:500},
	{nombre: 'Televisión' , precio:700},
	{nombre: 'Tablet', precio:300},
	{nombre: 'Teclado', precio:200},
	{nombre: 'Celular', precio:50},
];

/*
const resultado = carrito.filter(producto => 
{
	return producto.precio > 400;
});

console.log(resultado);
*/
//Otra forma, que es la correcta
const mayor400 = producto => 
{
	return producto.precio > 400;
}

const resultado = carrito.filter(mayor400);
//Agregar objeto a un arreglo, ejemplo un carrito
const carrito = [];

const producto = 
{
	nombre: 'televisor',
	precio: 246
}

const producto1 = 
{
	nombre: 'celular',
	precio: 466
}

const producto2 = 
{
	nombre: 'teclado',
	precio: 848
}


carrito.push(producto);
carrito.push(producto1);

//Agrega el objeto al principio del arreglo
carrito.unshift(producto2);

console.table(carrito);
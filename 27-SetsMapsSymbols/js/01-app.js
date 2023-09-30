const carrito = new Set();

//Agregar elementos al arreglo, son elementos basicos, no se repiten elementos
carrito.add('camisa');
carrito.add('camisa1');
carrito.add('camisa2');
carrito.add('camisa3');

//Tamaño del arreglo
console.log(carrito.size);

//Saber si tiene un valor
console.log(carrito.has('camisa'));

//Borrar un elemento
carrito.delete('camisa2');//Devuelve booleanos tambien

//Los arreglos set son iterables
carrito.forEach((producto, index)=>
{
	console.log(producto);

	//EL index muestra lo mismo al no ser un arreglo por indices
	console.log(producto);
});


//Arreglo solo
console.log(carrito);

//borrar todo el arreglo
carrito.clear();

//Arreglo solo
console.log(carrito);

//Ejemplo uso
//Eliminar los repetidos
const numeros = [12,12,34,35,46,45,65,55,55,55];

console.log(numeros);

const NoDuplicados = new Set(numeros);

console.log(NoDuplicados);


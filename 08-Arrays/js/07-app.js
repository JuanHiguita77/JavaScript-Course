//Eliminar elementos con splice
const arreglo5 = [123];

const objeto8 =
{
	nombre: 'producto',
	precio: 213
}

const objeto9 =
{
	nombre: 'producto2',
	precio: 21363
}

arreglo5.unshift(objeto8);
arreglo5.push(objeto9);

console.table(arreglo5);

//Quita el ultimo elemento del arreglo
arreglo5.pop();

console.table(arreglo5);

//Eliminar elemento del inicio de un arreglo
arreglo5.shift();

console.table(arreglo5);

//Elimina la cantidad de datos indicados desde una posicion por indice
			//indice, cantidad de datos a borrar
arreglo5.splice(0,2);


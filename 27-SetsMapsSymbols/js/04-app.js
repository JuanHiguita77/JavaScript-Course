//WeakMap
const producto =
{
	idProducto: 12
}

const weakmap = new WeakMap();

//Metodos
weakmap.set(producto, 'televisor');

//No se muestran los primeros datos del objeto, pero se pueden obtener igual
console.log(weakmap.get(producto));

console.log(weakmap);

weakmap.delete();

console.log(weakmap);

//weakmap.size; No se puede ver el tamaño
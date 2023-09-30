//Iteradores
function crearIterador(carrito)
{
	let i = 0;

	//Funcion que retorna otra funcion
	return{

		siguiente: ()=> 
		{
			//Se debe tener en cuenta para crear el iterador

			const fin = (i >= carrito.length);//Tamaño del arreglo a iterar
			const valor = !fin ? carrito[i++] : undefined ;//Valor que se itera

			return{
				fin,
				valor
			}

		}
	}
}

const carrito = ['producto 1', 'Producto 2', 'Producto 3', 'Nuevo'];

//Usar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
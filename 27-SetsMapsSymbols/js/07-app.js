//Generadores, retornar iteradores
//Se usa * para crearlo y en este caso se le dan valores estaticos
function *crearGenerador()
{
	yield 1;
	yield 'Juan';
	yield 3+9;
	yield true;
}

//Acceder a los valores
const iterador = crearGenerador();

//Con el next se avanza entre valores por cada llamado
console.log(iterador);//Suspendido
console.log(iterador.next());//Hace una accion solamente
console.log(iterador.next().value);//Ingresar al valor
console.log(iterador.next().done);//Ingresar al valor de finalizado
console.log(iterador);


//Generador para carrito
function *generadorCarrito(carrito)
{
	for(let i = 0; i < carrito.length; i++)
	{
		yield carrito[i];
	}
}

const carrito = ['producto1', 'producto2' ,'producto3'];

const iterador1 = generadorCarrito(carrito);

console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());//Terminado
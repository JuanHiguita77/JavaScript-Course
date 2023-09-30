//Scope: alcance de las variables
const cliente1 = 'Juanf';//Global

function mostrarCliente()
{
	//Se pueden nombrar variables igual por fuera delas funciones
	const cliente2 = 'Juan';//Variable encerrada en la funcion
}

console.log(cliente1);
console.log(cliente2);//No esta definida por fuera de la funcion
mostrarCliente();
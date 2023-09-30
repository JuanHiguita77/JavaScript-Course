//Housting: Primero se crean las variables y luego se ejecuta el codigo

//Declarar una funcion normal la cual se puede llamar en cualquier parte del codigo
obtenerCliente('pedrito');
function obtenerCliente(nombre)
{
	console.log(nombre);
}

//Declarar una funcion como variable no permite llamarmo por encima de su declaracion
mostrarCliente('juan');

const mostrarCliente = function(nombre)
{
	console.log(nombre);
}
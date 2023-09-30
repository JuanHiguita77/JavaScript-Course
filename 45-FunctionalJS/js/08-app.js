const obtenerCliente = ()=>
{
	const nombre = 'Juan';

	function mostrarNombre()
	{
		console.log(nombre);
	}

	return mostrarNombre;
}

const cliente = obtenerCliente();

cliente();
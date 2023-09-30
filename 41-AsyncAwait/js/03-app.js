function descargarCliente()
{
	return new Promise((resolve, reject) =>
	{
		const error = false;

		setTimeout(()=>
		{
			if (!error)
			{
				resolve('Listado de clientes decargado');
			}
			else 
			{
				reject('Error en la descarga');	
			}
		},3000);
	});
}

//usar Asyn con una function expression
const ejecutar = async ()=>
{
	//llamamos la funcion como una variable
	try {
		const respuesta = await descargarCliente();

		console.log(65+546);

		console.log(respuesta);
	} catch(e) {
		console.log(e);
	}
}

ejecutar();
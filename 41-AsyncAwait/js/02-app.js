//Simular descarga desde una API
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

//Async Await
//Async: la funcion sobre la cual se ejecuta el promise
//await: detiene el siguiente codigo hasta que se resuelva el promise
async function ejecutar()
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
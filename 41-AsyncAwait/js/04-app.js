//Usar varias promises en un Async
function descargarNuevosClientes()
{
	return new Promise( resolve => 
	{
		console.log('Descargando clientes');

		setTimeout(()=>
		{
			resolve('clientes descargados');
		}, 5000);
	});
}

//Simular descarga desde una API
function descargarNuevosPedidos ()
{
	const error = false;
	return new Promise(resolve =>
	{
		console.log('Descargando pedidos');
		setTimeout(()=>
		{
			if (!error)
			{
				resolve('Pedidos descargados');
			}
		},3000);
	});
}

const app = async()=>
{
	try 
	{
		//Ejecutar varias promises al mismo tiempo, usar solo cuando son cosas independientes
		const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);

		//Nos entrega un arreglo con los datos solicitados
		console.log(respuesta);

		console.log(respuesta[0]);
		console.log(respuesta[1]);
	} 
	catch(e) 
	{
		console.log(e);
	}
}

app();
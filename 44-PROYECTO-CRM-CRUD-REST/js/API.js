const url = 'http://localhost:4000/clientes';

//Mandar clientes a la API
export const nuevoCliente = async (cliente) =>
{
	try 
	{
		await fetch(url, {
			method: 'POST',
			body: JSON.stringify(cliente),
			headers: {
				'content-Type': 'application/json'
			}
		});
		window.location.href = 'index.html';
	} 
	catch(e) 
	{
		console.log(e);
	}
}

//Obtener los clientes de la bd
export const obtenerClientes = async ()=>
{
	try 
	{
		const resultado = await fetch(url);
		const clientes = await resultado.json();
		return clientes;
	} 
	catch(e) 
	{
		console.log(e);
	}
}

export const eliminarCliente = async id => 
{
	try 
	{
		await fetch(`${url}/${id}`,
		{
			method: 'DELETE'
		});	
	} 
	catch(e) 
	{
		
		console.log(e);
	}
}

export const obtenerCliente = async id =>
{
	try 
	{
		const resultado = await fetch(`${url}/${id}`);
		const cliente = await resultado.json();

		return;			
	} 
	catch(e) 
	{
		console.log(e);
	}
}

//Actualiza un registro
export const editarCliente = async cliente =>
{
	try 
	{
		await fetch(`${url}/${cliente.id}`, 
		{
			method:'PUT',
			body: JSON.stringify(cliente),
			headers: {
				'content-Type': 'application/json'
			}
		});
		
		windows.location.href = 'index.html';

	} 
	catch(e) 
	{
		console.log(e);
	}
}
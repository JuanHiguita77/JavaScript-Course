const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);


function obtenerDatos()
{
	//Nos dice el error tambien
	fetch(url)
		.then(respuesta => respuesta.json())
		.then(resultado => console.log(resultado))
		.catch(error => console.log('error'));
}

async function obtenerDatos()
{
	//Necesitamos usar try-catch para tener los errores en caso tal

	try 
	{
		//Usaremos doble await y no con Promise por la necesidad en este caso
		const respuesta = await fetch(url);
		const resultado = await resultado.json();

		console.log(resultado);
	} 
	catch(e) 
	{
		console.log(e);
	}
}

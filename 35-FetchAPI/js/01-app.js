//Cargar desde un txt
const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);

//Fetch usa promesas para funcionar
function obtenerDatos()
{
	const url = 'data/datos.txt';

	fetch(url)
		//Obtener datos
		.then(respuesta =>
		{
			console.log(respuesta);
			console.log(respuesta.status);
			console.log(respuesta.statusText);
			console.log(respuesta.url);
			console.log(respuesta.type);

			return respuesta.text();

			//return respuesta.json();Segun el caso
		})
		//Mostrar los datos
		.then(datos =>
		{
			console.log(datos);
		})
		//En caso de error
		.catch(error =>{
			console.log(error);
		});
}
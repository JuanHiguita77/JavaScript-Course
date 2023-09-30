import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e)
{
 	e.preventDefault();

 	//Obtener datos del formulario
 	const artista = document.querySelector('#artista').value;
 	const cancion = document.querySelector('#cancion').value;

 	//Validacion 
 	if (artista === '' || cancion === '')
 	{
 		UI.divMensajes.textContent = 'Faltan campos por llenar';
 		UI.divMensajes.classList.add('error');

	 	setTimeout(()=>
	 	{
	 		UI.divMensajes.textContent = '';
	 		UI.divMensajes.classList.remove('error');
	 	},3000);

	 	return;
 	};

 	//Consultar despues de la validacion
 	//						Se le pasan los dos datos
 	const busqueda = new API(artista, cancion);

 	busqueda.consultarAPI();

}

//Consumir una API, su respuesta
//https://picsum.photos/list

const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', cargarDatos);

function cargarDatos()
{
	const url = 'https://picsum.photos/list';

	fetch(url)
		.then(respuesta => respuesta.json())
		.then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(datos)
{
	const contenido = document.querySelector('.contenido');

	let html = '';

	datos.forEach(perfil =>
	{
		const {autor, post_url} = perfil;

		html += `
		<p>Author: ${autor}</p>
		<a href="${post_url}" target= "_blank">Ver imagen</a>	
		`
	});

	contenido.innerHTML = html;
}
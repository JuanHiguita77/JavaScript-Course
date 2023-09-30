const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos()
{
	fetch('data/empleado.json')
		.then(respuesta =>
		{
			return respuesta.json();
		})
		.then(datos =>
		{
			mostrarResultado(datos);
		})
}

function mostrarResultado({empresa, id, nombre, trabajo})
{
	const contenido = document.querySelector('.contenido');

	contenido.innerHTML = `<p>Empleado: ${nombre}</p>
							<p>id: ${id}</p>
							<p>Empresa: ${empresa}</p>
							<p>${trabajo}</p>`
}
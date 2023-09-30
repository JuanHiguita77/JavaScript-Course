const cargarJsonArray = document.querySelector('#cargarJSONArray');

cargarJsonArray.addEventListener('click', cargarDatos);

function cargarDatos()
{
	fetch('data/empleados.json')
		.then( respuesta => respuesta.json())
		.then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados)
{
	const contenido = document.querySelector('.contenido');

	let html = '';

	empleados.forEach(empleado =>
	{
		const { id, nombre, empresa, trabajo } = empleado;

		html += `<p>Empleado: ${nombre}</p>
				<p>id: ${id}</p>
				<p>Empresa: ${empresa}</p>
				<p>${trabajo}</p>`
	});

	contenido.innerHTML = html;
}
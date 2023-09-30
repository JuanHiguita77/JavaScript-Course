(function()
{
	let DB;
	const formulario = document.querySelector('#formulario');

	document.addEventListener('DOMContentLoaded',()=>
	{
		conectarDB();

		formulario.addEventListener('submit', validarCliente);
	});



	function validarCliente(e)
	{
		e.preventDefault();

		//Leer inputs de forma local
		const nombre = document.querySelector('#nombre').value;
		const correo = document.querySelector('#email').value;
		const telefono = document.querySelector('#telefono').value;
		const empresa = document.querySelector('#empresa').value;


		if (nombre === '' || correo === '' || telefono === '' || empresa === '')
		{
			imprimirAlerta('Todos los campos son obligatorios', 'error');
			return;
		}

		//ObJETO DE INFORMACION(object literal)
		const cliente =
		{
			nombre,
			correo,
			telefono,
			empresa,
			id: Date.now()
		}

		crearNuevoCliente(cliente);
	}

	function crearNuevoCliente(cliente)
	{
		//CONEXION
		const transaction = DB.transaction(['crm'], 'readwrite');

		const objectStore = transaction.objectStore('crm');

		objectStore.add(cliente);

		transaction.onerror = ()=>
		{
			imprimirAlerta('No se creo al nuevo cliente','error');
		}

		transaction.oncomplete = ()=>
		{
			imprimirAlerta('Nuevo cliente creado exitosamente');
		}
	}
})();




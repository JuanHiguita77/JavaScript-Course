(function()
{
	let DB; 
	let idCliente;//Global

	const nombreInput = document.querySelector('#nombre');
	const telefonoInput = document.querySelector('#telefono');
	const empresaInput = document.querySelector('#empresa');
	const correoInput = document.querySelector('#email');

	const formulario = document.querySelector('#formulario');


	document.addEventListener('DOMContentLoaded', () =>
	{
		conectarDB();

		//Actualiza el registro con los nuevos datos
		formulario.addEventListener('submit',actualizarCliente);

		//Verificar id de url
		const parametrosURL = new URLSearchParams(window.location.search);
		//Trae el id de cada cliente
		idCliente = parametrosURL.get('id');//Global

		if (idCliente)
		{
			setTimeout(()=>
			{
				obtenerCliente(idCliente);
			}, 100)
			
		};
	});


	function obtenerCliente(id)
	{
		//CONEXION
		const transaction  = DB.transaction(['crm'], 'readonly');

		const objectStore = transaction.objectStore('crm');

		const cliente = objectStore.openCursor();

		cliente.onsuccess = function(e)
		{
			const cursor = e.target.result;

			if (cursor)
			{

				if (cursor.value.id === Number(id))
				{
					llenarFormulario(cursor.value);
				};
				cursor.continue;
			};
		}
	}

	function llenarFormulario(datosCliente)
	{
		const {nombre,empresa,telefono,correo} = datosCliente;

		nombreInput.value = nombre;
		telefonoInput.value = telefono;
		empresaInput.value = empresa;
		correoInput.value = correo;
	}

	function conectarDB()
	{
		//Si no conecta con la base de datos, crea una nueva
		const abrirConexion = window.indexedDB.open('crm',1);

		abrirConexion.onerror = function()
		{
			console.log('Hubo en error');
		}

		abrirConexion.onsuccess = function()
		{
			DB = abrirConexion.result;
		}
	}

	function actualizarCliente(e)
	{
		e.preventDefault();

		//Validar los campos
		if (nombreInput === '' || correoInput === '' || telefonoInput === '' || empresaInput === '')
		{
			imprimirAlerta('Faltan campos por llenar!','error');
			return;
		}

		//Actualizar cliente despues de validar
		const clienteActualizado =
		{
			nombre: nombreInput.value,
			empresa: empresaInput.value,
			correo: correoInput.value,
			telefono: telefono.value,
			id: Number(idCliente)//cambia a numero
		}

		const transaction = DB.transaction(['crm'], 'readwrite');
		const objectStore = transaction.objectStore('crm');

		objectStore.put(clienteActualizado);

		transaction.oncomplete = function()
		{
			imprimirAlerta('Editado correctamente');

			setTimeout(()=>
			{
				window.location.href = 'index.html';
			},2000);
			
		}

		transaction.onerror = function()
		{
			imprimirAlerta('Hubo un error','error');
		}
	}
})();
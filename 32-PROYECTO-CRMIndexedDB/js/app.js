//Efee

(function()
{
	let DB; //Variable que guarda el valor de la bd
	const listadoClientes = document.querySelector('#listado-clientes');

	document.addEventListener('DOMContentLoaded', ()=>
	{
		//Llamamos la creacion de base de datos
		crearDB();

		if (window.indexedDB.open('crm',1)) 
		{
			obtenerClientes();
		};

		listadoClientes.addEventListener('click',eliminarRegistro);
	});

	function eliminarRegistro(e)
	{
		if (e.target.classList.contains('eliminar')) 
		{
			const idEliminar = Number(e.target.dataset.cliente);//Tomar el id para saber cual eliminar

			const confirmacion = confirm('Desea eliminarlo?');

			if (confirmar)
			{
				const transaction = DB.transaction(['crm'],'readwrite');
				const objectStore = transaction.objectStore('crm');

				objectStore.delete(idEliminar);

				transaction.oncomplete = function()
				{
					imprimirAlerta('Cliente borrado exitosamente');

					e.target.parentElement.parentElement.remove();
				}

				transaction.onerror = function() 
				{
					imprimirAlerta('Error al borrar el cliente');
				}
			};
		};
	}

	function crearDB()
	{
		const crearDB = window.indexedDB.open('crm', 1);

		crearDB.onerror = function()
		{
			console.log('Hubo un error');
		}

		crearDB.onsuccess = () =>
		{
			DB = crearDB.result;
		}

		crearDB.onupgradeneeded = function(e)
		{
			const db = e.target.result;

			const objectStore = db.createObjectStore('crm', {keypath:'id', autoIncrement: true});

			objectStore.createIndex('nombre','nombre', {unique: false});
			objectStore.createIndex('email','email', {unique: true});
			objectStore.createIndex('telefono','telefono', {unique: false});
			objectStore.createIndex('empresa','empresa', {unique: false});
			objectStore.createIndex('id','id', {unique: true});

		}
	};

	function obtenerClientes()
	{
		const abrirConexion = window.indexedDB.open('crm',1);

		abrirConexion.onerror = ()=>
		{
			console.log('Hubo un error en la conexion');
		}

		abrirConexion.onsuccess = ()=>
		{
			DB = abrirConexion.result;

			const objectStore = DB.transaction('crm').objectStore('crm');

			objectStore.openCursor().onsuccess = function(e)
			{
				//Resultado del evento
				const cursor = e.target.result;
			

				if (cursor)
				{
					const {nombre, telefono, empresa, correo, id} = cursor.value;

					const listadoClientes = document.querySelector('#listado-clientes');

					listadoClientes.innerHTML += `  
						<td class="px-6 py-4 whiteSpace-no-wrap border-b border-gray-200">
							<p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${nombre}</p>	
							<p class="text-sm leading-10 text-gray-700 text-lg font-bold">${correo}</p>
						</td>
						<td class="px-6 py-4 whiteSpace-no-wrap border-b border-gray-200>
							<p class="text-gray-200">${telefono}</p>	
						</td>		
						<td class="px-6 py-4 whiteSpace-no-wrap border-b border-gray-200">
							<p class="text-gray-600">${empresa}</p>		
						</td> 
						<td class="px-6 py-4 whiteSpace-no-wrap border-b border-gray-200">
							<a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
							<a href="# data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
						</td> 
					<tr>`;
					cursor.continue();
				}
				else 
				{
					console.log('No hay mas registros');							
				};
			}	
		}
	}
}());
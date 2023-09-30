let DB;

document.addEventListener('DOMContentLoaded', () =>
{
	crmDB();

	//Crear un registro por transaccion
	setTimeout(() =>
	{
		crearCliente();
	}, 5000);
});

function crmDB()
{
	//Crear base de datos version 1.0
								//String y valor inicial
	let crmDB = window.indexedDB.open('crm', 1);

	//Si hay un error
	crmDB.onerror = function()
	{
		console.log('Hubo un error a la hora de crear la BD');
	}


	//Si se creo bien
	crmDB.onsuccess = function()
	{
		console.log('Se creo la base de datos');

		DB = crmDB.result;
	}

	//Configuracion de la base de datos
	crmDB.onupgradeneeded = function(e)
	{
		const db = e.target.result;

		//Creando las columnas de la BD, agrega un id desde 1 incrementandose
		const objectStore = db.createObjectStore('crm', 
		{	
			//Referencia para consultar la BD
			keyPath: 'crm',
			autoIncrement: true //incremento
		});

//Definir las columnas  dato(nombre columna)  ,	keypath
		objectStore.createIndex('nombre','nombre', {unique: false});//Pueden haber nombres iguales
		objectStore.createIndex('email', 'email', {unique: true});//El email es unico
		objectStore.createIndex('telefono','telefono',{unique: false});

		console.log('Base de datos creada');
	}
}

function crearCliente()
{
	//						base de datos	//modo
	let transaction = DB.transaction(['crm'], 'readwrite');

	transaction.oncomplete = function()
	{
		console.log('Transaccion completada');
	}

	//En caso de error
	transaction.onerror = function()
	{
		console.log('Error en la transaccion');
	}

	const objectStore = transaction.objectStore('crm');

	const nuevoCliente = 
	{
		telefono: 213132132,
		nombre: 'Juan',
		email: 'juansito@gamil.com'
	}

	const peticion = objectStore.add(nuevoCliente);
	//Existen metodos para borrar(.delete) y actualizar(.put)

	console.log(peticion);
}
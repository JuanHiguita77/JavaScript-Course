//Funciones que se pueden compartir para no repetir codigo

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

function imprimirAlerta(mensaje, tipo)
{
	const alerta = document.querySelector('.alerta');

	if (!alerta)
	{
		const divMensaje = document.createElement('div');

		divMensaje.classList.add('px-4','max-w-lg', 'rounded', 'mt-6', 'text-center', 'mx-auto', 'border','alerta');

		if (tipo === 'error')
		{
			divMensaje.classList.add('bg-red-100','border-red-400', 'text-red-700');
		}
		else 
		{
			divMensaje.classList.add('bg-green-100','border-green-400', 'text-green-700');
		};

		divMensaje.textContent = mensaje;

		formulario.appendChild(divMensaje);

		setTimeout(()=>
		{
			divMensaje.remove();
		},3000);
	};
}


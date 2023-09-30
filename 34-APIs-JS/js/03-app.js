window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);



function actualizarEstado()
{
	//Solo se actualiza cuando destecta el cambio de conexion
	if (navigator.onLine)
	{
		console.log('Si estas conectado');
	}
	else
	{
		console.log('No estas conectado');
	}
}
//APIS
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', ()=>
{
	//Notificacion API: Notificacion de permiso
	Notification
		.requestPermission()//Se guarda el resultado de la decision
		.then(resultado =>
		{
			console.log('El resultado es' + resultado);
		});
});

//Ver notificacion, personalizada incluso
const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', ()=>
{
	if (Notification.permission === 'granted') 
	{
		//Objeto
		const notificacion = new Notification('Esta es la notificacion', 
		{
			//Icono personalizado para la noti
			icon: 'img/ccj.png',
			//Texto
			body: 'Codigo con papi Juanfer'
		});

		//Al dar clic en la notificacion
		notificacion.onclick = function()
		{
			window.open('https://google.com');
		}
	}
});
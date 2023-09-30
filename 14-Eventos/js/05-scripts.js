//Eventos de Scroll

//Se le da en este caso al elemento de la ventana
window.addEventListener('scroll', () =>
{
	/*console.log('Scrolling...');

//							Muestra los pixeles al bajar o subir
	const scrollPixelsY = window.scrollY;

	console.log(scrollPixelsY);*/


	const premium = document.querySelector('.premium');

	//getBoundingClientRect: Nos dice donde esta un elemento
	const ubicacion = premium.getBoundingClientRect();

	console.log(ubicacion);

	//validacion sencilla para saber cuando el usuario esta viendo un elemento o apartado en especifico
	if (ubicacion.top < 300) //pixeles faltantes para el elemento
	{
		console.log('Elemento visible');
	}
	else 
	{
		console.log('Aun no, da mas scroll');	
	};
});


document.addEventListener('DOMContentLoaded', ()=>
{
	//Creacion del observer
	const observer = new IntersectionObserver(entries =>
	{
		console.log(entries[0]);//Posicion 0

		if (entries[0].isIntersecting)
		{
			console.log('Ya esta visible');
		};
	});

	//Nos diga si tal elemento esta visible o no en pantalla
	observer.observe(document.querySelector('.premium'));
});
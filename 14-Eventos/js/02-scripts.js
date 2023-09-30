//Evento del mouse

const nav = document.querySelector('.navegacion');

//registrar el evento

//Cuando se da clic
nav.addEventListener('click', () =>{
	console.log('clic en nav');
});

//Cuando se entra a un area
nav.addEventListener('mouseenter', () =>{
	console.log('Entrando en nav');
});


//Cuando se sale de un area
nav.addEventListener('mouseout', ()=>
{
	console.log('saliendo del nav');
});

//Cuando el mouse se levanta despues del clic
nav.addEventListener('mouseup', ()=>
{
	console.log('soltando el nav');
});
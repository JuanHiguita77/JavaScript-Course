//Eventos del teclado

const busqueda = document.querySelector('.busqueda');

//Cuando se presiona la tecla
busqueda.addEventListener('keydown', ()=>
{
	console.log('Tecla presionada');
});

//Cuando se levanta la tecla
busqueda.addEventListener('keyup', ()=>
{
	console.log('Tecla levantada');
});

//Cuando se sale del cuadro de texto
busqueda.addEventListener( 'blur',()=>
{
	console.log('saliendo de cuadro de texto');
});

//Saber que copia el usuario
//								Esta variable nos guarda la informacion que se va ingresando
busqueda.addEventListener( 'input',(variable)=>
{
	console.log(variable);
});

//Se puede dar parametros para saber tipo de informacion en especifico, ideal para busquedas
busqueda.addEventListener('input', (texto)=>
{
	//Nos guarda solo lo que copiamos
	console.log(texto.target.value);
});
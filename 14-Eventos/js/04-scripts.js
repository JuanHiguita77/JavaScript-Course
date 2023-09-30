//Evento de formularios

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e)=>
{

	console.log('Accion antes de enviar el formulario');
	//Previene que haga lo normal, enviar el formulario o ir a un enlace que le indicamos
	//Se usa para hacer acciones en estas pausas
	e.preventDefault();

	console.log(e);
});


//otra manera de hacerlo
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(variable)
{
	console.log('Accion antes de enviar el formulario');
	
	variable.preventDefault();

	console.log(variable);
};
//Variables

//Boton enviar
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//Expresione regular para validar un correo
const regularExpression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Iniciar la app
eventos();

function eventos()
{
	//Cuando inicia la app
	document.addEventListener('DOMContentLoaded', iniciarApp);


	//Campos del formulario
	//					Blur: Valida cuando se sale del campo
	email.addEventListener('blur', validarFormulario);
	asunto.addEventListener('blur', validarFormulario);
	mensaje.addEventListener('blur', validarFormulario);

	btnReset.addEventListener('click',resetFormulario);
	formulario.addEventListener('submit', enviarEmail);


}

function iniciarApp()
{
	//Desactivando el boton de enviar
	btnEnviar.disabled = true;
	btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}


//Validar los campos obligatorios
function validarFormulario(e)
{
	
	if (e.target.value.length > 0)
	{
		const eliminarError = document.querySelector('p.error');
		
		if (eliminarError) 
		{
			eliminarError.remove();
		};

		e.target.classList.remove('border','border-red-500');
		e.target.classList.add('border','border-green-500');
	}
	else 
	{
		e.target.classList.remove('border','border-green-500');
		e.target.classList.add('border','border-red-500');

		mostrarError('Todos los campos son Obligatorios');
	};

	if (e.target.type === 'email')
	{

		if (regularExpression.test(e.target.value))
		{
			const eliminarError = document.querySelector('p.error');

			if (eliminarError) 
			{
				eliminarError.remove();
			};

			e.target.classList.remove('border','border-red-500');
			e.target.classList.add('border','border-green-500');
		}
		else 
		{
			e.target.classList.remove('border','border-green-500');
			e.target.classList.add('border','border-red-500');

			mostrarError('No es un correo valido');
		};
	};

	//Validacion del correo hecha anteriormente
	if (regularExpression.test(email.value) && asunto.value !== '' && mensaje.value !== '')
	{
		btnEnviar.disabled = false;
		btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
	}
	else 
	{
		btnEnviar.disabled = true;
		btnEnviar.classList.add('cursor-not-allowed','opacity-50');
	};
}

//Mensaje de error en caso tal
function mostrarError(mensaje)
{
	const mensajeError = document.createElement('p');
	mensajeError.textContent = mensaje;

	mensajeError.classList.add('border', 'border-red-400','text-red-500','p-3', 'mt-4', 'text-center', 'error');

	//querySelectorAll lo usamos para revisar un solo valor
	const errores = document.querySelectorAll('.error');
	//El .length solo se usa en el querySelectorAll y no en uerySelector
	if (errores.length === 0)
	{
		formulario.appendChild(mensajeError);
	};	
}

function enviarEmail(e)
{
	e.preventDefault();

	//Mostrar spinner oculto desde css
	const spinner = document.querySelector('#spinner');
	spinner.style.display = 'flex';

	//Despues de un tiempo mostrar el mensaje adecuado
	
	/*setTimeout:Tiempo antes de ejecutar el codigo
	setInterval: Ciclo cada cierto tiempo indicado*/

	setTimeout(()=>
	{
		//Spinner desaparece en cierto tiempo
		spinner.style.display = 'none';

		//Mensaje de envio exitoso
		const parrafo = document.createElement('p');
		parrafo.textContent = 'Correo enviado exitosamente';
		parrafo.classList.add('text-center', 'text-white', 'my-10', 'p-2', 'bg-green-500', 'font-bold');

		//Insertar antes del spinner
		formulario.insertBefore(parrafo, spinner);

		setTimeout(()=>
		{
			parrafo.remove();
			resetFormulario();
		}, 2000);
	}, 3000);
}

function resetFormulario(e)
{
	e.preventDefault();
	formulario.reset();

	iniciarApp();
}


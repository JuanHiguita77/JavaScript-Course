import {obtenerCliente} from './API.js';
import {validar} from './funciones.js';

(function()
{
	const nombreInput = document.querySelector('#nombre');
	const correoInput = document.querySelector('#email');
	const telefonoInput = document.querySelector('#telefono');
	const empresaInput = document.querySelector('#empresa');

	document.addEventListener('DOMContentLoaded', async ()=>
	{
		const parametrosURL = new URLSearchParams(window.location.search);

		const idCliente = parseInt(parametrosURL.get('id'));

		const cliente = await obtenerCliente(idCliente);
	});

	function mostrarCliente(cliente)
	{
		const {nombre, correo, telefono, empresa, id} = cliente;

		nombreInput.value = nombre;
		correoInput.value = correo;
		telefonoInput.value = telefono;
		empresaInput.value = empresa;
		idInput.value = id;
	}

	function validarCliente(e)
	{
		e.preventDefault();

		const cliente = 
		{
			nombre: nombreInput.value,
			correo: correoInput.value,
			telefono: telefonoInput.value,
			empresa: empresaInput.value,
			id: parseInt(idInput.value)
		};

		if (validar(cliente))
		{
			alerta('falta un campo');
			return;
		};

		editarCliente(cliente);
	}
})();
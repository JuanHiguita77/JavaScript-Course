//Todo de forma local en un EFI
import {alerta, alerta} from './funciones.js';
import {nuevoCliente} from './API.js';
(function()
{
	const formulario = document.querySelector('#formulario');
	formulario.addEventListener('submit', validarCliente);

	function validarCliente(e)
	{
		e.preventDefault();

		const nombre = document.querySelector('#nombre').value;
		const correo = document.querySelector('#email').value;
		const telefono = document.querySelector('#telefono').value;
		const empresa = document.querySelector('#empresa').value;

		const cliente = 
		{
			nombre,
			correo,
			telefono,
			empresa
		}

		;
		if (validar(cliente))
		{
			alerta('falta un campo');
			return;
		};

		nuevoCliente(cliente);
	}

	//Nueva manera de validar campos
	function validar(obj)
	{
		return !Object.values(obj).every(input => input !== '');
	}
})();
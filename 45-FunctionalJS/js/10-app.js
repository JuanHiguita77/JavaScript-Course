//Funcion para usar en varias partes
const obtenerNombre = info => (
{
	mostrarNombre()
	{
		console.log(`Nombre: ${info.nombre}`);
	}
});

const guardarEmail = info => (
{
	agregarEmail(email)
	{
		console.log(`Guardando email... `);
		info.email = email;
	}
});

const obtenerEmail = info => (
{
	mostrarEmail()
	{
		console.log(`Correo: ${info.email}`);
	}
});

function Cliente(nombre, email, empresa)
{
	let info = 
	{
		nombre,
		email,
		empresa
	}

	//asignando funciones
	return Object.assign(
		info,
		obtenerNombre(info),
		guardarEmail(info),
		obtenerEmail(info)
	);
}

function Empleado(nombre, email, puesto)
{
	let info = 
	{
		nombre, 
		email,
		puesto
	}

	//asignando funciones
	return Object.assign(
		info,
		obtenerNombre(info),
		guardarEmail(info),
		obtenerEmail(info)
	);
}

const cliente = Cliente('Juan', 'prrito@gmail.com', 'google');
cliente.mostrarNombre();
cliente.agregarEmail('EmAIL@DDD');
cliente.mostrarEmail();
const empleado = Empleado('Pedro', 'empleadopobre@fa.com', 'jefe');
empleado.mostrarNombre();
empleado.agregarEmail('EMAILNUEVO@DAS.COM');
empleado.mostrarEmail();

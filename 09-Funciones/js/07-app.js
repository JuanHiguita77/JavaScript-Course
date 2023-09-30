//COmunicacion entre funciones

function iniciarApp()
{
	console.log('iniciando app...');

	segundaFuncion();
};

function segundaFuncion()
{
	console.log('Segunda funcion en proceso...');

	final('Juan');
};

function final(usuario)
{
	console.log('Terminando espere...');
	console.log(`Usuario autentificado: ${usuario}`);
};


//Inicia todo la cadena de funciones
iniciarApp();
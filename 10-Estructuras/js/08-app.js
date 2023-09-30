const autentificar = true;
const puntaje = 450;

if (autentificar) 
{
	console.log('Usuario iniciando sesion');
};


function revisarPuntaje () 
{
	//Solo dentro de funciones
	if (puntaje > 400) 
	{
		console.log('Excelente');
		return;//Se usa para ejecutar el codido dentro de una función hasta este punto
	};

	//Ya no se ejecutara esta parte en tal caso
	if (puntaje > 300) 
	{
		console.log('Buen puntaje');
		return;
	}; 
}

revisarPuntaje();
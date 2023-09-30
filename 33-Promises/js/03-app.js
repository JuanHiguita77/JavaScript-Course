//Promises para evitar el callback hell

const aplicarDescuento = new Promise((resolve, reject) =>
{
	const descuento = true;

	if (descuento)
	{
		resolve('Descuento aplicado');
	}
	else 
	{
		reject('No se pudo aplicar el descuento');
	};
});

//Sintaxis promise
aplicarDescuento
	//Simplificada y tambien puede llamar funciones
	.then(resultado => descuento(resultado))
	//Si falla
	.catch(error =>console.log(error));

function descuento(mensaje)
{
	console.log(mensaje);
}


	//Si cumple
/*	.then(resultado =>
	{
		console.log(resultado);
	})
	//Si falla
	.catch(error =>
	{
		console.log(error);
	});*/


//3 valores posibles
//fulfilled: El promise se cumplio
//rejected: El promise no  se cumplio
//pendind: Ni se ha cumplido ni rechazado
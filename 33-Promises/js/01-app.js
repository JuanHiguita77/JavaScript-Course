//Callbacks

const paises = ['españa', 'portugal', 'inglaterra'];

//callback: Nuevo pais
function nuevoPais(pais, callback)
{
	setTimeout(()=>
	{
		paises.push(pais);
 		callback();
	},2000);
}

//Extrayendo lista de paises ejemplo, pero se agrega algo mas mientras
function mostrarPaises()
{
	setTimeout(()=>
	{
		paises.forEach((pais)=>
		{
			console.log(pais);
		});
	},1000);
}
//Podemos usar callbacks para evitar que la lista quede incompleta
mostrarPaises();
//		pais 			callback
nuevoPais('Alemania', mostrarPaises);
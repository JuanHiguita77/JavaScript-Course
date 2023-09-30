'use strict'
//Algunos metodos para objetos
const objeto12 = 
{
	nombre:"juan",
	edad:23,
	sexo:'masculino'
}

//Nos devuelve las llaves del objeto o el nombre de las propiedades tal cual
//tambien el tamaño del objeto
console.log(Object.keys(objeto12));

//Devuelve los valores de las llaves
console.log(Object.values(objeto12));

//Nos devuelve todo en pares por propiedades
console.log(Object.entries(objeto12));

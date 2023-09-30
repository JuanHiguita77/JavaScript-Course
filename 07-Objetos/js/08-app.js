//Congelar objetos para no poder modificarlo

//Habilitamos el modo estricto para mejorar nuestras practicas de programación

'use strict';

const objeto7 =
{
	nombre: "juansito",
	edad: 22,
	iq: 242
}

//congelar el objeto para evitar cambios de ningun tipo

Object.freeze(objeto7);

console.log(objeto7);

//comando para consola, saber si un objeto esta congelado
console.log(Object.isFrozen(objeto7));

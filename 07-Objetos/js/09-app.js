'use strict';

//Sellar un objeto
const objeto8 =
{
	nombre: "juansito",
	edad: 22,
	iq: 242
}

//No se puede agregar ni eliminar, pero se pueden modificar las existentes

Object.seal(objeto8);

objeto8.nombre = 'perrito';

console.log(objeto8);

//comando para consola, saber si esta sellado

console.log(Object.isSealed(objeto8));
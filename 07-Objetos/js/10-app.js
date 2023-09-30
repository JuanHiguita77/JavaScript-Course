'use strict';

//Unir dos objetos
const objeto9 =
{
	nombre: "juansito",
	edad: 22,
	iq: 242
}

const objetoSecundario =
{
	pais: "colombia",
	ciudad: "medellin"
}

//Guarda todo en una misma variable
const objetoNuevo = Object.assign(objeto9, objetoSecundario);

//operador spread o rest
//los tres puntos significa copiar tal variable o objeto
const objetoNuevo2 = {...objeto9, ...objetoSecundario };

console.log(objetoNuevo);
console.log(objetoNuevo2);
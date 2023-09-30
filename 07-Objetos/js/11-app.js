'use strict';

//Operador this, hace referencia a las propiedades dentro del objeto que se llaman
//si no se usara, se utilizarian variables por fuera de los objetos o metodos
const objeto10 =
{
	nombre: "juansito",
	edad: 22,
	iq: 242,

	mostrarInfo: function()
	{
		console.log(`La persona llamada ${this.nombre} tiene una edad de ${this.edad}`);
	}
}

const objetoN =
{
	nombre: "Claudia",
	edad: 28,
	iq: 242,

	mostrarInfo: function()
	{
		console.log(`La persona llamada ${this.nombre} tiene una edad de ${this.edad}`);
	}
}


//LLamar la funcion, se pueden crear funciones con mismo nombre dentro de los metodos o objetos
objeto10.mostrarInfo();
objetoN.mostrarInfo();
'use strict'

//Nueva manera de construir objetos
//constructor de objeto, con los datos que va a contener a futuro
function Producto(nombre, edad, sexo)
{
	this.nombre = nombre;
	this.edad = edad;
	this.sexo = sexo;
}

//Se le dan los datos en orden
const object = new Producto('Juanito',231,'Masculino');

console.log(object);
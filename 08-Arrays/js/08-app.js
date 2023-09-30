//Destructuring en objetos
const objeto3 = 
{
	nombre: "Juan",
	personalidad: "Perfecta",
	altura: 222
}

//Crear una variable en base a la propiedad dentro del objeto
const { nombre } = objeto3;

//Destructuring con arreglos
const numeros = [21,6,88,48,51,2];

//Creamos las variables en base al orden de cada dato
const [primero, segundo, tercero] = numeros; 

//Podemos extraer el dato que queramos sin crear mas variable innecesarias
const [, , , cuarto] = numeros;

const [, , ...restoDatos] = numeros;

console.log(primero,  segundo,  tercero, cuarto);

console.table(restoDatos);
//Extraer informacion de un objeto
const objeto3 = 
{
	nombre: "Juan",
	personalidad: "Perfecta",
	altura: 222
}


//const nombre = obtejo3.nombre;

//Nos extrae el valor y crea una variable
//const { nombre } = objeto3;
//const { altura } = objeto3;

//Si pertenece al mismo objeto podemos usar una sola linea
const { nombre, altura } = objeto3;

console.log(nombre);
console.log(altura);
const suma = (a,b,c) = a + b + c;

//Dividido en 2 partes
const parcial = a =>(b,c) => suma(a,b,c);

const primerNumero = parcial(5);//Pasamos el primer valor de la funcion
const resultado = primerNumero(3,4);//Pasamos los siguientes valores de la funcion restante

console.log(resultado);


//Dividido en 3 partes
const parcial = a => b => c => suma(a, b, c);

/*
const primerNumero = parcial(5);
const segundoNumero = primerNumero(34);
const tercerNumero = segundoNumero(3);
*/

//Manera correcta y corta

const resultadoParcial = parcial(12)(32)(54);

console.log(resultadoParcial);
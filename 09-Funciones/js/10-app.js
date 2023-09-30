//Funciones flecha
const aprendiendo = function()
{
	console.log('Aprendiendo Javascript 1');
}

//Flecha

const aprendiendo2 = () =>
{
	console.log('Aprendiendo Javascript 2');
}

//Acortando la funcion, cuando es una sola linea
const aprendiendo3 = () => console.log('Aprendiendo Javascript 3');

//Se toma el valor del retorno automaticamente y cuando es una sola linea
const aprendiendo4 = () => 'Aprendiendo Javascript 4';

aprendiendo();
aprendiendo2();
aprendiendo3();
console.log(aprendiendo4());
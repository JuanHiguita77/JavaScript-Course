//Funciones flecha, pasarle parametros
const learning = function(tecnologia)
{
	console.log(`Aprendiendo ${tecnologia}`);
}

//Se toma el valor del retorno automaticamente y cuando es una sola linea
const learning1 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

//cuando es una funcion flecha podemos quitar los parentesis cuando solo es un parametro
const learning2 = tecnologia => `Aprendiendo ${tecnologia}`;


learning('sistemas');
console.log(learning1('civil','redes'));
console.log(learning2('artes'));
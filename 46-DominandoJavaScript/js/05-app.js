//Explicit binding
function persona(el1, el2)
{
	console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion =
{
	nombre: 'Juan'
}

const musicaFav = ['metal', 'pop'];

persona.call(informacion, musicaFav[0], musicaFav[1]);//Especificamos cada posicion
persona.apply(informacion, musicaFav);//No hace falta decirle la posicion

//De manera especifica con bind
const nuevaFn = persona.bind(informacion, musicaFav[0], musicaFav[1]);
nuevaFn();
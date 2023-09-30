//Objetos dinamicos y reutilizables

//objeto literal
const Cliente =
{
	nombre:'Juan',
	saldo: 876
}

console.log(Cliente);


//constructor de objeto

function cliente(nombre,saldo)
{
	this.nombre = nombre;
	this.saldo = saldo;
}

const juan = new cliente('Juan', 982);
console.log(juan);
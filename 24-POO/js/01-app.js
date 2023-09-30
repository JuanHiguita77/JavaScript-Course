//Primera manera de crear las clases
class Cliente 
{

	//Se le pasan los valores que van a llegar al instanciarlo
	constructor(nombre, saldo)
	{
		this.nombre = nombre;
		this.saldo = saldo;
	}

	//Agregar prototypes a las clases
	mostrarInfo()
	{
		return `Cliente: ${this.nombre} con saldo de: ${this.saldo}`;
	}

	//Propiedades estaticas: Se llaman desde la clase y no desde la instancia
	static bienvenida()
	{
		return `Bienvenido al cajero`;
	}

}

//Instanciar la clase
const clase = new Cliente('Juan', 4646);


console.log(clase);
//Acceder a las funciones
console.log(clase.mostrarInfo());
//Acceder funciones estaticas
console.log(Cliente.bienvenida());


//Segunda forma no tan famosa
const Cliente2 = class
{
	//Se le pasan los valores que van a llegar al instanciarlo
	constructor(nombre, saldo)
	{
		this.nombre = nombre;
		this.saldo = saldo;
	}
}

//Instanciar la clase
const clase2 = new Cliente2('Angie',444);
console.log(clase2);
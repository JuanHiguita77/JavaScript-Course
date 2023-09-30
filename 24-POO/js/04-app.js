//Variables privadas
class Cliente 
{
	//Se vuelve privada y solo puede acceder desde otro metodo get o set
	#nombre;

	//Se le pasan los valores que van a llegar al instanciarlo
	constructor(nombre, saldo)
	{
		this.#nombre = nombre;
		this.saldo = saldo;
	}

	//Agregar prototypes a las clases
	mostrarInfo()
	{
		return `Cliente: ${this.#nombre} con saldo de: ${this.saldo}`;
	}

	//Propiedades estaticas: Se llaman desde la clase y no desde la instancia
	static bienvenida()
	{
		return `Bienvenido al cajero`;
	}

}


//Instanciar la clase
const clase = new Cliente('Juan', 4646);
console.log(clase.mostrarInfo());
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

//Herencia: Se pasan las propiedades del contructor de otra clase
class Empresa extends Cliente
{
	//agregar mas atributos
	constructor(nombre, saldo, telefono, categoria)
	{
		super(nombre,saldo);
		/*this.nombre = nombre;
		this.saldo = saldo;*/
		this.telefono = telefono;
		this.categoria = categoria;
	}

	static bienvenida()//Reescribir un metodo, solo llamarlo igual
	{
		return `Bienvenido al cajero modificado`;
	}
}

//Instanciar la clase
const clase = new Cliente('Juan', 4646);
const empresa = new Empresa('Amazon',4611, 112123212, 'servicio');

console.log(empresa.mostrarInfo());
console.log(Empresa.bienvenida());

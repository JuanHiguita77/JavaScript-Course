//Class pattern

class Persona
{
	constructor(nombre, email)
	{
		this.nombre = nombre;
		this.email = email;
	}
}

//Nuevo objeto
const persona = new Persona('juan', 'asd@gas.com');

console.log(persona)
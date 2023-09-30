//Singleton: Impide crear varias instancias con la misma clase

class Persona
{
	
	constructor(nombre, email)
	{
		let instancia = null;

		if (!instancia) 
		{
			this.nombre = nombre;
			this.email = email;
		}
		else 
		{
			return instancia;
		}
		
	}
}

//Nuevo objeto
const persona = new Persona('juan', 'asd@gas.com');

console.log(persona)
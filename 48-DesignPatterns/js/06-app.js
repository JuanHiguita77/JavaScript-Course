//MIXING: AGREGAR FUNCIONES A UNA CLASE YA CREADA
class Persona
{
	constructor(nombre, email)
	{
		this.nombre = nombre;
		this.email = email;
	}
}

const funcionesPersona = 
{
	mostrarInformacion()
	{
		console.log(`Nombre Persona: ${this.nombre} y correo: ${this.email}`);
	}
}

const cliente = new Persona('aajuan', 'dsa@dsa.com');

Object.assign(Persona.prototype, funcionesPersona);

cliente.mostrarInformacion();
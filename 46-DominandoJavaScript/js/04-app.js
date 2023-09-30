//Implicit binding
const usuario =
{
	nombre: 'juan',
	edad: 22,

	informacion()
	{
		//Debemos decirle en donde encuentra los valores con el this.
		console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);	
	},

	mascota:
	{
		nombre: 'Angie',
		edad: 26,
		informacion()
		{
			console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);	
		}
	}
}

usuario.informacion();

usuario.mascota.informacion();
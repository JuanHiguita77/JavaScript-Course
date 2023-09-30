//Variables privadas
class Cliente 
{
	//Se vuelve privada y solo puede acceder desde otro metodo get o set
	#nombre;

	//Se le pasan los valores que van a llegar al instanciarlo
	setNombre(nombre)
	{
		this.#nombre = nombre;
	}

	getNombre()
	{
		return this.#nombre;
	}

}


//Instanciar la clase
const clase = new Cliente('Juan');

//Setear nuevo nombre
clase.setNombre('Nuevo nombre');
//obtener el dato
console.log(clase.getNombre());

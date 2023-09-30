//Factory: Crea objetos basado en ciertas condiciones

class InputHTML
{
	constructor(type, nombre)
	{
		this.type = type;
		this.nombre = nombre;
	}

	crearInput()
	{
		return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
	}
}

class HTMLFactory
{
	crearElemento(tipo,nombre)
	{
		switch(tipo)
		{
			case 'text':
				return new InputHTML(tipo,nombre)
			case 'tel':
				return new InputHTML(tipo,nombre)
			default:
				return;	
		}
	}
}

const elemento = new HTMLFactory();
const InputText = elemento.crearElemento('text','juansito');

console.log(InputText.crearInput());

const elemento2 = new HTMLFactory();
const InputText2 = elemento2.crearElemento('tel','tel-cliente');

console.log(InputText2.crearInput());
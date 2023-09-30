//Importar subclases
import {Cliente} from './app.js';

export class Empresa extends Cliente
{
	constructor(nombre, ahorro, categoria)
	{
		super(nombre. ahorro);
		this.categoria = categoria;
	}

		mostrarInformacion()
	{
		return `Cliente: ${this.nombre} saldo: ${this.ahorro} Categoria: ${this.categoria}`;
	}
}

//Por default su importacion se hace fuera de los corchetes
//Solo puede haber uno e incluso no hay necesidad de llevar un nombre cuando se crea
export default function nuevaFuncion() 
{
	 console.log('nueva funcion');
}
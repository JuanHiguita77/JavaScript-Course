//IIFE
//Mantiene todo el codigo localmente, para evitar problemas al usar varios archivos
/*(function() {
	console.log('Desde un IIFE');

	//Solo puede ser visible en todos los archivos de la siguiente manera
	window.nombreCliente = 'Juan';

})();*/

//Manera con modulos
//export solo no funciona sin agregar el atributo type a la direccion del archivo js html
export const nombreC = 'juan';
export const saldo = 2123;

//Exportar funciones
export function mostrarInformacion(cliente, saldo)
{
	return `Cliente${cliente} con saldo ${saldo}`;
}

export function saldoV(ahorro)
{
	if (ahorro > 0)
	{
		console.log('Tiene saldo');
	}
	else 
	{
		console.log('No tiene saldo pta');	
	};
}

//Exportar una clase
export class Cliente
{
	constructor(nombre, ahorro)
	{
		this.nombre = nombre;
		this.ahorro = ahorro;
	}

	mostrarInformacion()
	{
		return `Cliente: ${this.nombre} saldo: ${this.ahorro}`;
	}
} 




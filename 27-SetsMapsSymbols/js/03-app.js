//Maps

const cliente = new Map();

cliente.set('nombre','Karen');
cliente.set('tipo','premium');
cliente.set('saldo',11000);

//metodos

console.log(cliente.size);

console.log(cliente.has('Karen'));

console.log(cliente.get('tipo'));

cliente.delete('saldo');

console.log(cliente);

cliente.clear();

console.log(cliente);

//Se pueden crear con valores por default 

const paciente = new Map([['nombre', 'apellido']]);

//Agregar valores despues de haberlo inicializado
paciente.set('doctor', 'dr.asignado');
paciente.set('nombre', 'Jose Antonio');

//Se le puede pasar la llave de cada arreglo
paciente.forEach((datos, index) =>
{
	console.log(`${index}--${datos}`);
});

console.log(paciente);
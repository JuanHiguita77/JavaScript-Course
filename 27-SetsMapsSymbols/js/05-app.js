//Symbols
//LOS SIMBOLOS NO SE PUEDEN ITERAR
const simbolo = Symbol(1);
const simbolo1 = Symbol(1);

//Ningun simbolo es igual
if (simbolo === simbolo1)
{
	console.log('son iguales');
}
else 
{
	console.log('No son iguales');
};

//Caracteristicas
const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar como simbolos
persona[nombre] = 'Juan';
persona[apellido] = 'Yepes';

//Manera normal
persona.tipoCuenta = 'premiun';
persona.saldo = 231;

//Acceder normal
console.log(persona.tipoCuenta);

//Acceder a un simbolo
console.log(persona[nombre]);

//Definir descripcion de un symbol
const nombreCliente = Symbol('Nombre cliente');
const cliente = {}

cliente[nombreCliente] = 'Juan';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);


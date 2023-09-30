const pendientes = ['tarea', 'comer', 'Gimnasio', 'Estudiar'];

pendientes.forEach( (pendiente, indice) => console.log(`${indice}: ${pendiente}`));


const staff = 
[
	{nombre: 'televisor', precio: 123},
	{nombre: 'celular', precio: 433},
	{nombre: 'audifonos', precio: 123},
	{nombre: 'tablet', precio: 313},
	{nombre: 'ps5', precio: 453},
	{nombre: 'computador', precio: 3123},
];


const nuevoArreglo = staff.forEach( (producto, index) => `${index}--producto.nombre`);

const nuevoArreglo2 = staff.map( (producto, index) => `${index}--producto.nombre`);

console.log(nuevoArreglo);//undefined, el forEach no es capaz de crar una variable nueva o arreglo
console.log(nuevoArreglo2);
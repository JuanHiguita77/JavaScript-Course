const pendientes = ['tarea', 'comer', 'Gimnasio', 'Estudiar'];

const staff = 
[
	{nombre: 'televisor', precio: 123},
	{nombre: 'celular', precio: 433},
	{nombre: 'audifonos', precio: 123},
	{nombre: 'tablet', precio: 313},
	{nombre: 'ps5', precio: 453},
	{nombre: 'computador', precio: 3123},
];

//For of opera sobre arreglos
for(let pendiente of pendientes)
{
	console.log(pendiente);
};

	//variable     arreglo
for(let producto of staff)
{
	console.log(producto);
	console.log(producto.nombre);
};
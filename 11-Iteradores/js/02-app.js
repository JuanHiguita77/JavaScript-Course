//Break y continue

for (let i = 0;i <= 10; i++) 
{
	if (i === 5) 
	{
		console.log(`Esto es el ${i}`);
		break;
	};

	console.log(`Numero ${i}`);	
};

const car = 
[
	{nombre: 'televisor', precio: 123},
	{nombre: 'celular', precio: 433},
	{nombre: 'audifonos', precio: 123},
	{nombre: 'tablet', precio: 313, descuento: true},
	{nombre: 'ps5', precio: 453},
	{nombre: 'computador', precio: 3123},
];


for(let i = 0; i < car.length; i++)
{
	if (car[i].descuento) 
	{
		console.log(`Producto ${car[i].nombre} tiene descuento`);
		continue;//Evita que se repita la variable con el nombre
	};

	console.log(`Producto: ${car[i].nombre}`);
};
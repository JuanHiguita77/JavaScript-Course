for (let i = 0;i <= 10; i++) 
{
	console.log(`Numero ${i}`);	
};

for(let i = 0; i <= 20; i++)
{
	if (i % 2 === 0) 
	{
		console.log(`Numero par ${i}`);
	}
	else 
	{
		console.log(`Numero impar ${i}`);	
	};
};

const car = 
[
	{nombre: 'televisor', precio: 123},
	{nombre: 'celular', precio: 433},
	{nombre: 'audifonos', precio: 123},
	{nombre: 'tablet', precio: 313},
	{nombre: 'ps5', precio: 453},
	{nombre: 'computador', precio: 3123},
];


for(let i = 0; i < car.length; i++)
{
	console.log(`Producto: ${car[i].nombre} - - - Precio: ${car[i].precio}`);
}
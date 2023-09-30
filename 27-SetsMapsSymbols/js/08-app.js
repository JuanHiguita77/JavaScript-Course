//Iteradores

const ciudades = ['Londres','New York', 'Madrid', 'Paris'];
const ordenes = new Set([123,132, 468, 124]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion','guapo');

//Default
for(let ciudad of ciudades)//UN forEach practicamente
{
	console.log(ciudad);
}

for(let orden of ordenes)//UN forEach practicamente
{
	console.log(orden);
}

for(let dato of datos)//UN forEach practicamente
{
	console.log(dato);
}


//values Iterator
for(let values of ciudades.values())//Itera solo con los valores
{
	console.log(values);
}

//Keys iterator
for(let keys of ciudades.keys())//llaves
{
	console.log(keys);
}

for(let keys of ordenes.keys())//llave en el set es el mismo valor
{
	console.log(keys);
}

for(let keys of datos.keys())
{
	console.log(keys);
}


//Entries iterator
for(let entry of ciudades.entries())//Muestra el valor y llave
{
	console.log(entry);
}

for(let entry of ordenes.entries())
{
	//Muestra el valor y llave, los sets no tiene llave, pero se muestra el mismo valor en ambos casos
	console.log(entry);
}

for(let entry of datos.entries())//Muestra el valor y llave
{
	console.log(entry);
}
//Otras maneras de agregar datos al arreglo
const carro = [];

const product = 
{
	nombre: 'televisor',
	precio: 246
}

const product1 = 
{
	nombre: 'celular',
	precio: 466
}

const product2 = 
{
	nombre: 'teclado',
	precio: 848
}
//variable que contendra el nuevo arreglo
let resultado;

//Aqui se agrega el elemento en orden
resultado = [product, ...carro, product1, product2];

//Aqui se agrega el elemento de primeras
//resultado = [product, ...resultado];

console.table(resultado);
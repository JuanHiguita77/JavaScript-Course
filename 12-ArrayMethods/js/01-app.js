const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Metodos de arreglos

//includes verifica si hay o no tal valor en booleano
const resultado = meses.includes('Enero');

console.log(resultado);

//En un arreglo de objetos se usa .some
const existe = carrito.some(producto => 
{
    //devuelve el valor a verificar
    return producto.nombre === 'Celular';
});

console.log(existe);


//Arreglo normal
const existe1 = meses.some( mes => 
{
    return mes === 'Enero';
});

console.log(existe1);
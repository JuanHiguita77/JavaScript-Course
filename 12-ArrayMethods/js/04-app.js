const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

//Podemos filtrar en base a una condición              === > < !==
resultado = carrito.filter( producto => producto.precio > 200 );

//Se puede usar para crear un arreglo con nuevos datos
resultado = carrito.filter( producto => producto.nombre !== 'Teclado');
console.log(resultado);
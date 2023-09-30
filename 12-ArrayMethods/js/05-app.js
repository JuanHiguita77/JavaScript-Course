const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//.find sirve para encontrar un dato con tales caracteristicas, solo nos trae el 
//primer dato encontrado
const resultado = carrito.find( producto => producto.nombre === 'Televisión' );

console.log(resultado);
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//every nos devuelve un booleano segun la condición, se debe cumplir en todos los
//datos

//                                          Todos deben ser igual a 200 en este caso
const resultado = carrito.every( producto => producto.precio === 200 );
console.log(resultado);

//Al contrario some confirma si por lo menos hay uno que cumpla la condición
const resultado1 = carrito.some( producto => producto.precio === 200 );
console.log(resultado1);
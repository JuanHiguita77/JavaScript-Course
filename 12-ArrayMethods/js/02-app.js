//Saber indice de un elemento

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


const indice = meses.findIndex( mes => mes === 'Abril' );
console.log(indice);

//Arreglo de objetos
//Solo muestra el primer objeto encontrado, en caso de haber repetidos
const indice1 = carrito.findIndex( producto => producto.precio === 700);
console.log(indice1);

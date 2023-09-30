const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Spread operator no modifica los datos orginales del arregloa diferencia de push
const meses1 = [...meses, 'Agosto'];
console.log(meses1);



//Agregar datos nuevos a la copia de un arreglo de objetos
const producto = {nombre: 'Grafica1060', precio: 1200000};

//Se agrega la nueva propiedad solo con el nombre de la variable
//                  Importa el orden
const carrito1 = [producto, ...carrito, producto];
console.log(carrito1);
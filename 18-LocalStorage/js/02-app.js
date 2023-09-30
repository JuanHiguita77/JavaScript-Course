//Obtener los datos del localStorage
//									Variable con el dato en memoria
const producto = localStorage.getItem('producto');
console.log(producto);

//Tranformar a objeto o arreglo desde una cadena, si esta bien escrito
const productoObjeto = localStorage.getItem('producto');
console.log(JSON.parse(productoObjeto));
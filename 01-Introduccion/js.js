alert("Mensaje de alerta");

const nombre = prompt("INGRESA TU NOMBRE");

/*Seleccionar clase o id              Mostrar el html blanco con el nuevo mensaje*/
document.querySelector('.contenido').innerHTML = '${nombre}'; 

console.log('consolaaaaaa');
console.error('Erroooor');
console.warn('precaucion')
//Elminar elementos
const elemento = document.querySelector('a');
elemento.remove();

//Desde el padre

const navegacion = document.querySelector('.navegacion');

navegacion.removeChild( navegacion.children[2] );
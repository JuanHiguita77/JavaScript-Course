//Traversing

//Navegacion por los elementos
const card = document.querySelector('.card');

console.log(card.children[1].children[1].textContent);

card.children[1].children[1].textContent = 'Nuevo texto';

console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer2.jpg';

console.log(card.children[0]);

//Otras maneras

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
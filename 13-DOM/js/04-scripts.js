//Queryselector

//Retorna el primero que encuentre y solo un elemento
const card = document.querySelector('.card');
console.log(card);


//Selector tipo css donde info esta como hijo de premiun
const info = document.querySelector('.premium .info');
console.log(info);

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Por id
const form = document.querySelector('#formulario');
console.log(form); 

//Selecciona elementos por etiqueta html
const navegacion = document.querySelector('nav');
console.log(navegacion);
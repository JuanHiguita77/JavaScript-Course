//Estilos css con js

const encabezado = document.querySelector('h1');
/*
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'small-caption';*/

//Agregar clases

const card = document.querySelector('.card');
//Añadir
card.classList.add('primeraClaseNueva', 'segundaClaseNueva');
//Retirar
card.classList.remove('card');


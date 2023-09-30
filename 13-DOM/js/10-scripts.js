//Creacion de elementos

const enlace = document.createElement('a');
enlace.textContent = 'NuevoEnlace';

//añadir href o atributos
enlace.href = '#';

//Añadir atributo
enlace.setAttribute('atributohtml', 'atributoparaetiqueta');

//Añadir clase
enlace.classList.add('claseNueva');

enlace.onclick = miFuncion;


function miFuncion () 
{
	alert('Click actived');
};

console.log(enlace);

//Agregar el elemento creado a otro
const navegacion = document.querySelector('.navegacion');

//Agregar hijo nuevo como ultimo elemento
navegacion.appendChild(enlace);

//Agregar hijo nuevo en la posicion que queramos
					//Elemento a agregar   ,  Posicion
navegacion.insertBefore(enlace, navegacion.children[2]);

//Ejemplo como crear una tarjeta desde js

//Creamos un parrafo
const parrafo1 = document.createElement('p');
//Le damos texto a la etiqueta creada antes
parrafo1.textContent = 'Concierto';
//Agregamos clases
parrafo1.classList.add('categoria', 'concierto');



const parrafo2 = document.createElement('p');
//Le damos texto a la etiqueta creada antes
parrafo2.textContent = 'Concierto De Rock'
//Agregamos clases
parrafo2.classList.add('titulo');



const parrafo3 = document.createElement('p');
//Le damos texto a la etiqueta creada antes
parrafo3.textContent = '800$ Persona';
//Agregamos clases
parrafo3.classList.add('precio');



const info = document.createElement('div');
info.classList.add('info');

//Agregamos los parrafos
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


//Crear imagen
const imagen = document.createElement('img');
//Asignamos la imagen
imagen.src = 'img/hacer2.jpg';
//atributo alt
imagen.alt = 'TextoAlternativo';


//Crear el contenedor card
const card = document.createElement('div');
card.classList.add('card');

//Agregamos la imagen
card.appendChild(imagen);
//Agregamos los parrafos
card.appendChild(info);

//Insertar en el HTML haciendolo visible
const contenedor = document.querySelector('.hacer .contenedor-cards');

						//Recordar que la variable contenedor contiene la posicion dada por clases como en css
contenedor.insertBefore(card, contenedor.children[0]);
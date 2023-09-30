//Acceder a los elementos desde javaScript
 let elemento;


//Son html collection en arreglos, por lo tanto se puede usar indices


elemento = document;//Todo el html
elemento = document.all; //Todos los elementos
elemento = document.head; //head y todo lo que hay adentro
elemento = document.body; //Body y todo 
elemento = document.domain; //dominio donde esta alojada la web
elemento = document.forms; //formularios del html
elemento = document.forms[0]; //primer formulario
elemento = document.forms[0].id; //Nos trae el id del formulario en este caso
elemento = document.forms[0].method; //Metodo usado en el formulario
elemento = document.forms[0].classList; //clases del formulario en un arreglo
elemento = document.forms[0].className; //Clases deñ formulario en string solo
elemento = document.forms[0].action; //Action del formulario
elemento = document.links; //Links en total de la web
elemento = document.images; //Todas las imagenes
elemento = document.scripts;//Colleccion de Scripts

console.log(elemento);
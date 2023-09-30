//Modificar texto o imagenes con js

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//Mostrar contenido
console.log(encabezado.innerText);//Si el texto esta oculto desde css, este no se mostrara


console.log(encabezado.textContent);

//Trae el codigo html interno en la etiqueta
console.log(encabezado.innerHTML);


//Se ve directamente en el DOM 							//Se puede usar variable tambien
document.querySelector('.contenido-hero h1').textContent = 'Nuevo texto';


const imagen = document.querySelector('.card img');
console.log(imagen);
//reemplazar
imagen.src = 'img/hacer2.jpg';
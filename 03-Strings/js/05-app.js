const text = "Texto de prueba";

console.log(text);

//reemplazar
console.log(text.replace("prueba", "test"));
console.log(text.replace("Texto", "Nuevo texto"));

//Cortar cadenas

//Muestra lo que se encuentre en esta posicion
console.log(text.slice(6, 8));
//lo mismo
console.log(text.substring(6, 8));

//Elimina la cantidad de caracteres indicados empezando desde 1, izquierda a derecha
console.log(text.slice(5));

//Mostrar caracteres por posicion
console.log(text.charAt(0));


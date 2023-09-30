//Eliminar espacios en cadenas

const texto = '  Eliminando espacios    ';

console.log(texto.trimStart());
console.log(texto.trimEnd());


//Eliminar al principio y final los espacios
console.log(texto.trim());

//Juntar funciones con misma utilidad
console.log(texto.trimStart().trimEnd());
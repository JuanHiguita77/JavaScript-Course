//Concatenar cadenas
const product = 'Monitor 24 pulgadas';
const precio = 232;

console.log("El producto: " + product + " cuesta: " + precio);

//no tan usada
console.log("El producto: " , product , " cuesta: " , precio);

//otra manera y mas util cuando tenemos muchas variables
console.log(`El producto ${product} cuesta: $${precio}`);
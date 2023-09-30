//Coercion

const n1 = 123;
const n2 = '23';


console.log(n1 + n2);//Implicita: No realiza operaciones al ser un string con un numero, pero si lo muestra tal cual
console.log(Number(n2)+n1);//Explicita: ambia a numero

//Cambia a strings
console.log(n1.toString());

const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));
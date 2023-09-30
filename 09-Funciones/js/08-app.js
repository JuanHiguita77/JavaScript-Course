//Funciones que retornan parametros
function restar(a,b)
{
	return a - b;
}

const resultado = restar(44,54);

console.log(resultado);
console.log(restar(44,54));

//Ejemplo

let total = 0;

function agregarCompra(precio)
{
	return total += precio;
}

function calcularImpuesto(total)
{
	return total * 1.19;
}


total = agregarCompra(214);
total = agregarCompra(24);
total = agregarCompra(2164);

console.log(`Total de la compra ${calcularImpuesto(total)}`);
console.log(total);
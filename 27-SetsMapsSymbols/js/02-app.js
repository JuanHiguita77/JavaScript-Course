//weakSet

const weakSet = new WeakSet();

const cliente =
{
	nombre: 'Juan',
	saldo: 100
} 

/*Solo admiten objetos y no valores solos
const ahorro = 1231;*/

//Metodos
weakSet.add(cliente);

console.log(weakSet.has(cliente));//Booleano


weakSet.delete(cliente);

console.log(weakSet);
/*No hay .size ni son iterables
weakSet.size();
*/
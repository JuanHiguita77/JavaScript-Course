//Importamos
//Los export default pueden llamarse diferente
import funcionDefault, {nombreC, saldo, mostrarInformacion, saldoV, Cliente} from './app.js';
import {Empresa} from './empresa.js';


console.log(nombreC);
console.log(saldo);

console.log(mostrarInformacion(nombre, saldo));
console.log(saldo(saldo));
console.log(Cliente);

//Instanciar
const empresa = new Empresa('Codigo con yo mismo', 24234, 'Cursos');
console.log(empresa);
console.log(empresa.mostrarInformacion());

//Incluso cambiar el nombre varias veces
funcionD();
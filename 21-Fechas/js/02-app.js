const diaActual = new Date();

moment.locale('es');//Español para fechas

//						   dia  mes  año
console.log(moment().format('Do MMMM YYYY'));

console.log(moment().format('LLLL'), diaActual);

console.log(moment().add(2,'days').calendar());
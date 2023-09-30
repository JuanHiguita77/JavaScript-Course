const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses1 = ['Agosto', 'Septiembre'];
const meses2 = ['Noviembre, Diciembre'];


//En todos el orden importa a la hora de mostrar los datos

//.concat, nos junta varios arreglos o agrega nuevos datos
const resultado = meses.concat(meses1, meses2, 'otro mes');
console.log(resultado);

//spread operator, nos copia los arreglos

const resultado1 = [...meses, ...meses1,...meses2, 'otro mes con spread'];
console.log(resultado1);
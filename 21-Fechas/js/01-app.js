const diaHoy = new Date();

let valor;

valor = diaHoy;



valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();

valor = diaHoy.getTime();//Number of milliseconds since January 1, 1970

//Establecer un año en concreto
valor = diaHoy.setFullYear(2000);



console.log(valor);
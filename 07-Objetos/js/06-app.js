//Extraer objetos
const objeto5 = 
{
	nombr: "Juan",
	personalidad: "Perfecta",
	altura: 222,

		informacion: 
		{
			peso: 978,
			altura: 88,

			informacion2:
			{
				velocidad: 33,
				fuerza: "Alta"
			}
		},//separar objetos

		origen:
		{
			pais: "china",
			fecha:234
		}
}

//Ingresa y crea la variable de subObjeto informacion2
const {nombr, informacion: {informacion2} ,informacion: {informacion2:{fuerza}}} = objeto5;

console.log(informacion2);
console.log(`Fuerza del objeto: ${fuerza}`);
//Crear objeto dentro de otros
const objeto4 = 
{
	nombre: "Juan",
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


console.log(objeto4);


//Ingresar a alguna propiedad o otro objeto
console.log(objeto4.informacion);
//Con mensaje incluido
console.log( `Altura: ${objeto4.informacion.altura}`);
console.log(`Pais de origen: ${objeto4.origen.pais}`);

console.log(objeto4.informacion.informacion2);

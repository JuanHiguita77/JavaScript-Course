//Agregar propiedades nuevas al objeto
const objeto2 =
{
	nombre: "pedrito",
	precio: 2522,
	estatus: "pobre",
}

objeto2.nuevaPropiedad = "DatosNuevos";

console.log(objeto2);

//Borrar elementos
delete objeto2.nuevaPropiedad;

console.log(objeto2);
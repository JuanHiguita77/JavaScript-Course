const reproductor =
{
	cancion: '', 

	reproducir: (id) => console.log('Reproduciendo musica...'),

	pausar: (id) => console.log('pausando'),

	borrar: (id) => console.log('Borrando cancion...'),

	crearPlaylist: (nombre) => console.log(`Creando playlist ${nombre}`),

	reproducirPlaylist: (nombre)=> console.log(`Reproduciendo playlist ${nombre}...`),


	//metodos get y set, otra manera de crear una funcion
	set nuevaCancion(cancion)
	{
		this.cancion = cancion;
		console.log(`Agregando cancion ${cancion}`);
	},

	get obtenerCancion()
	{
		console.log(`${this.cancion}...`);
	}
}




reproductor.reproducir(32);
reproductor.reproducir(23);
reproductor.pausar();
reproductor.borrar(3);
reproductor.crearPlaylist('TurroIntenso');
reproductor.reproducirPlaylist('turroIntenso');


reproductor.nuevaCancion = 'phonk hardcore';
reproductor.obtenerCancion;
const reproductor =
{
	reproducir: function(id)
	{
		console.log('Reproduciendo musica...');
	},

	pausar: function(id) 
	{
		console.log('pausando');
	},

	borrar: function(id)
	{
		console.log('Borrando cancion...');
	},

	crearPlaylist: function(nombre)
	{
		console.log(`Creando playlist ${nombre}`);
	},

	reproducirPlaylist: function(nombre)
	{
		console.log(`Reproduciendo playlist ${nombre}...`);
	}
}


reproductor.reproducir(32);
reproductor.reproducir(23);
reproductor.pausar();
reproductor.borrar(3);
reproductor.crearPlaylist('TurroIntenso');
reproductor.reproducirPlaylist('turroIntenso');


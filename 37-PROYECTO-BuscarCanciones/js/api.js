import * as UI from './interfaz.js';

class API
{
	constructor(artista, cancion)
	{
		this.cancion = cancion;
		this.artista = artista;
	}

	consultarAPI()
	{
		const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

		fetch(url)
			.then(respuesta =>respuesta.json())
			.then(resultado => 
			{
				if (resultado.lyrics)
				{
					const {lyrics} = resultado;

					UI.divResultado.textContent = lyrics;
					UI.hResultado.textContent = `Letra de la cancion ${this.cancion} de ${this.artista}`;
				}
				else
				{
					UI.divMensajes.textContent = 'La cancion no existe, try other';
					UI.divMensajes.classList.add('error');

					setTimeout(()=>
					{
						UI.divMensajes.textContent = '';
						UI.divMensajes.classList.remove('error');
					},3000);
				}
			})		
	}		
}

export default API;
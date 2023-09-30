//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];




//Eventos
eventListeners();


function eventListeners()
{
	//Cuando el usuario agrega un tweet
	formulario.addEventListener('submit', agregarTweet);

	//Cuando el documento este listo
	document.addEventListener('DOMContentLoaded', ()=>
	{
		tweets = JSON.parse(localStorage.getItem('tweets')) || [];

		crearHTML();
	});
}



//Funciones
function agregarTweet(e)
{
	e.preventDefault();

	//variable local: textArea

	const tweet = document.querySelector('#tweet').value;

	if (tweet === '')
	{
		mostrarError('No puede ir vacio');

		return;//Evita que el resto de lineas se ejecute
		//Funciona en un if solo si esta dentro de una funcion
	}

	const tweetObj =
	{
		id: Date.now(),
		tweet //cuando la propiedad y la variable son las mismas tweet: tweet
	}

	//Agregando los tweets
	tweets = [...tweets, tweetObj];

	crearHTML();

	//Reiniciar el formulario
	formulario.reset();
}


//mostrar mensaje de error
function mostrarError(error)
{
	const errorMensaje = document.createElement('p');

	errorMensaje.textContent = error;
	errorMensaje.classList.add('error');

	//Mostrar en html insertando
	const contenido = document.querySelector('#contenido');
	contenido.appendChild(errorMensaje);	


	//Eliminar  mensaje de error en cierto tiempo
	setTimeout(()=>
	{
		errorMensaje.remove();	
	},3000);
}

function crearHTML()
{
	limpiarHTML();

	if (tweets.length > 0)
	{
		tweets.forEach(tweet =>
		{
			//Agregar boton para eliminar
			const btnEliminar = document.createElement('a');
			btnEliminar.classList.add('borrar-tweet');
			btnEliminar.textContent = 'X';

			//Funcion de eliminar
			btnEliminar.onclick = ()=>
			{
				borrarTweet(tweet.id);
			}


			const li = document.createElement('li');

			//añadir texto
			li.textContent = tweet.tweet;


			//Asignar boton
			li.appendChild(btnEliminar);

			listaTweets.appendChild(li);
		});
	}

	sincronizarStorage();
}

function sincronizarStorage()  
{
	localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Limpiar html
function limpiarHTML()
{
	while (listaTweets.firstChild)
	{
		listaTweets.removeChild(listaTweets.firstChild);
	}
}

function borrarTweet(id)
{
	tweets = tweets.filter(tweet => tweet.id !== id);

	crearHTML();
}
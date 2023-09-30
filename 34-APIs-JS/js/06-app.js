//API para reconocer la voz del usuario
const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeech);

function ejecutarSpeech()
{
	const speech = webkitSpeechRecognition;
	//Instanciarlo
	const recognition = new speechRecognition();


	recognition.start();

	//Empieza a grabar
	recognition.onStart = function() 
	{
		salida.classList.add('mostrar');
		salida.textContent = 'Escuchando';
	}

	//Cuando se termine de escuchar
	recognition.onspeechend = function()
	{
		salida.textContent = 'Se dejo de grabar...';
		recognition.stop();
	}

	recognition.onresult = function(e)
	{
		console.log(e.results);//Mostrar lo que se grabo en cadena dentro de un arreglo

		const {confidence, transcript} = e.results;

		//Insertar en la pagina
		const speech = document.createElement('P');
		speech.innerHTML = `Grabado: ${transcript}`;

		salida.appendChild(speech);
	}
}
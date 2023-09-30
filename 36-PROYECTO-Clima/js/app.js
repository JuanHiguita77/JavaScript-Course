const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const contenedor = document.querySelector('.container');

//Similar a DOMContendloaded, solo que es por ventana
window.addEventListener('load', ()=>
{
	formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e)
{
	e.preventDefault();

	//validar formulario
	const ciudad = document.querySelector('#ciudad').value;
	const pais = document.querySelector('#pais').value;

	if (ciudad === '' && pais === '')
	{
		mostrarError('campos oblitarios');
		return;
	}

	//consultar la API del clima
	consultarAPI(ciudad, pais);
}


function mostrarError(mensaje)
{
	//Evitar que se creen multiples alertas al tiempo
	const alerta = document.querySelector('.verificarhtml');

	if (!alerta)
	{
		const alerta = document.createElement('div');
		alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3','rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'verificarhtml');

		alerta.innerHTML = `
			<strong class="font-bold">Error!</strong>	
			<span class="block">${mensaje}</span>
		`;

		contenedor.appendChild(alerta);

		setTimeout(()=>
		{
			alerta.remove();
		},3000);
	};
}

function consultarAPI(ciudad, pais)
{
	//API KEY
	const appId = 'ac37be9778039b0b7430dc87fb0ce579';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;//Lo que nos pide la web que lo mandemos de esta manera

	spinner();

	//Consulta de datos y validacion de ciudades
	fetch(url)
		.then(respuesta => respuesta.json())
		.then (datos => 
		{
			limpiarHTML();
			if (datos.cod === "404")
			{
				mostrarError('Ciudad no encontrada');
			}

			mostrarClima(datos);
		});
}

function mostrarClima(datos)
{
	//Destructuring dentro de un objeto
	const {name, main: {temp, temp_max, temp_min}} = datos;

	const actual = document.createElement('p');

	actual.innerHTML = `${transformarGrados(temp)} &#8451;`;

	actual.classList.add('font-bold', 'text-6xl');

	const nombreC = document.createElement('p');
	nombreC.classList.add('font-bold', 'text-2xl');
	nombreC.textContent = `Clima en ${name}`;

	const tempMaxima = document.createElement('p');
	tempMaxima.innerHTML = `Max: ${transformarGrados(temp_max)} &#8451;`;
	tempMaxima.classList.add('text-xl');

	const tempMinima = document.createElement('p');
	tempMinima.innerHTML = `Min: ${transformarGrados(temp_min)} &#8451;`;
	tempMinima.classList.add('text-xl');

	const resultadoDiv = document.createElement('div');
	resultadoDiv.classList.add('text-center','text-white');
	resultadoDiv.appendChild(nombreC);
	resultadoDiv.appendChild(actual);
	resultadoDiv.appendChild(tempMaxima);
	resultadoDiv.appendChild(tempMinima);

	resultado.appendChild(resultadoDiv);
}

function transformarGrados(grados)
{
	return parseInt(grados - 273.15);
}

function limpiarHTML()
{
	while(resultado.firstChild)
	{
		resultado.removeChild(resultado.firstChild);
	}
}

function spinner()
{
	const spiner = document.createElement('div');
	spiner.classList.add('spinner');

	spiner.innerHTML = `
			              <div class="double-bounce1"></div>
			              <div class="double-bounce2"></div>
			           `

	resultado.appendChild(spiner);		           
}
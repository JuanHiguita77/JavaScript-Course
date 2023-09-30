const monedaSelect = document.querySelector('#moneda');
const criptomonedasSelect = document.querySelector('#criptomonedas');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

//Objeto de monedas
const objBusqueda =
{
	moneda: '',
	criptomoneda: ''
}

//New promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve =>
{
	resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', ()=>
{
	consultarCriptomonedas();

	formulario.addEventListener('submit', submitFormulario);

	criptomonedasSelect.addEventListener('change', leerValor);
	monedaSelect.addEventListener('change', leerValor);
});

async function consultarCriptomonedas()
{
	const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=COP';

	/*fetch(url)
		.then( respuesta => respuesta.json())//obtenemos la respuesta como json de la url
		.then( resultado => obtenerCriptomonedas(resultado.Data))//Obtenemos las criptomonedas
		.then( criptomonedas => selectCriptomonedas(criptomonedas));//Creamos el seleccionador de las cripto
	*/

	try 
	{
		/*const respuesta = await fetch(url);
		const respuestaJson = await respuesta.json();
		const resultado = await obtenerCriptomonedas(respuestaJson.Data);
		const criptomonedas = await selectCriptomonedas(criptomonedas);*/

		const respuesta = await fetch(url);
		const resultado = await respuesta.json();
		const criptomonedas = await obtenerCriptomonedas(resultado.Data);
		selectCriptomonedas(criptomonedas);
	} 
	catch(e) 
	{
		console.log(e);
	}

}		

function selectCriptomonedas(criptomonedas)
{
	criptomonedas.forEach( cripto =>
	{
		const {FullName, Name } = cripto.CoinInfo;

		//Mostrar las opciones en html
		const option = document.createElement('option');
		option.value = Name;
		option.textContent = FullName;
		criptomonedasSelect.appendChild(option);
	});
}

function submitFormulario (e) 
{
	e.preventDefault();

	const {moneda , criptomoneda} = objBusqueda;

	if (moneda === '' || criptomoneda === '')
	{
		mostrarAlerta('Ambos campos obligatorios');
		return;
	};


	//Consultar API con los resultados
	consultarAPI();
}

function mostrarAlerta(msg)
{
	const divMensaje = document.createElement('div');
	const existeAlerta = document.querySelector('.error');

	//Validacion para mostrar una sola alerta
	if (!existeAlerta)
	{
		divMensaje.classList.add('error');//Clase hecha en css previamente

		divMensaje.textContent = msg; 

		formulario.appendChild(divMensaje);
	};
	
	setTimeout(()=>
	{
		divMensaje.remove();
	}, 3000);

}

function leerValor(e)
{
	objBusqueda[e.target.name] = e.target.value;
}

async function consultarAPI()
{
	const {moneda , criptomoneda} = objBusqueda;

	const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

	//Mostrar spinner
	mostrarSpinner();
/*
	fetch(url)
		.then(respuesta => respuesta.json())
		.then(cotizacion =>
		{
			mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
		});*/

	try 
	{
		const respuesta = await fetch(url);
		const resultado = await respuesta.json();
		mostrarCotizacionHTML(resultado.DISPLAY[criptomoneda][moneda]);
	} 
	catch(e) 
	{
		console.log(e);
	}
}

function mostrarCotizacionHTML(cotizacion)
{
	limpiarHTML();
	const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

	const precio = document.createElement('p');
	precio.classList.add('precio');
	precio.innerHTML = `El precio es: <span> ${PRICE} </span>`

	const precioAlto = document.createElement('p');
	precioAlto.innerHTML = `Precio mas alto del dia: <span>${HIGHDAY}</span>`;

	const precioBajo = document.createElement('p');
	precioBajo.innerHTML = `Precio mas bajo del dia: <span>${LOWDAY}</span>`;

	const ultimasHoras = document.createElement('p');
	ultimasHoras.innerHTML = `Variacion ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

	const ultimaActualizacion = document.createElement('p');
	ultimaActualizacion.innerHTML = `Ultima Actualizacion: <span>${LASTUPDATE}</span>`;



	resultado.appendChild(precio);
	resultado.appendChild(precioAlto);
	resultado.appendChild(precioBajo);
	resultado.appendChild(ultimasHoras);
	resultado.appendChild(ultimaActualizacion);

}

function  limpiarHTML()
{
	while(resultado.firstChild)
	{
		resultado.removeChild(resultado.firstChild);
	}
}

function mostrarSpinner()
{
	limpiarHTML();

	const spinner = document.createElement('div');
	spinner.classList.add('spinner');
	spinner.appendChild = `
		  <div class="rect1"></div>
		  <div class="rect2"></div>
		  <div class="rect3"></div>
		  <div class="rect4"></div>
		  <div class="rect5"></div>`;

	resultado.appendChild(spinner);
}
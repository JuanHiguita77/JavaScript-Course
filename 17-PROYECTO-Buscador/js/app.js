//variables

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');


//Variables de fecha
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//Generar objeto con la busqueda
const datosBusqueda = 
{
	marca: '',
	year: '',
	minimo: '',
	maximo: '',
	puertas: '',
	color: '',
	transmision: ''
}



//Eventos

document.addEventListener('DOMContentLoaded', ()=>
{
	mostrarAutos(autos);

	//Llenar opcion de años
	llenarSelect();
});

//EventListeners

//Llenar el arreglo de busqueda
marca.addEventListener('change', e =>
{
	datosBusqueda.marca = e.target.value;
	filtrarAuto();
});

year.addEventListener('change', e =>
{
	datosBusqueda.year = parseInt(e.target.value);
	filtrarAuto();
});

minimo.addEventListener('change', e =>
{
	datosBusqueda.minimo = parseInt(e.target.value);
	filtrarAuto();
});

maximo.addEventListener('change', e =>
{
	datosBusqueda.maximo = parseInt(e.target.value);
	filtrarAuto();
});

puertas.addEventListener('change', e =>
{
	datosBusqueda.puertas = parseInt(e.target.value);
	filtrarAuto();
});

transmision.addEventListener('change', e =>
{
	datosBusqueda.transmision = e.target.value;
	filtrarAuto();
});

color.addEventListener('change', e =>
{
	datosBusqueda.color = e.target.value;
	filtrarAuto();
});

//Funciones

function mostrarAutos(autos)
{
	//Limpiar html
	limpiarHTML();

	autos.forEach( auto =>
	{
	 	const {marca,modelo,year,precio,puertas,color,transmision} = auto;
	 	const autoHTML = document.createElement('p');

	 	autoHTML.textContent =
	 	`
	 		${marca}---${modelo}---${year}---Precio: ${precio}---${puertas} Puertas---Color: ${color}---${transmision}
	 	`
	 	resultado.appendChild(autoHTML);
	});
}

function limpiarHTML()
{
	while (resultado.firstChild) 
	{
		resultado.removeChild(resultado.firstChild);
	}
}

function llenarSelect()
{
	//El orden a mostrar los años
	for (let i = maxYear; i > minYear; i--) 
	{
		const opcion = document.createElement('option');
		opcion.value = i;
		opcion.textContent = i;

		year.appendChild(opcion);
	};
}

//Filtra en base a la busqueda
function filtrarAuto()
{	
	//						Funciones aparte
	const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision);

	if (resultado.length )
	{
		mostrarAutos(resultado);
	}
	else 
	{
		noResultado();
	};
	 
}

function noResultado() 
{
	limpiarHTML();

 	const noResultado = document.createElement('div');

 	noResultado.classList.add('alerta', 'error');

 	noResultado.textContent = 'No hay resultado.';

 	resultado.appendChild(noResultado);
} 

function filtrarMarca(auto)
{
	//Saber si tiene algo
	if (datosBusqueda.marca) 
	{
		return auto.marca === datosBusqueda.marca;
	};
	return auto;
}

function filtrarYear(auto)
{
	if (datosBusqueda.year) 
	{
		return auto.year === datosBusqueda.year;
	};
	return auto;
}

function filtrarMinimo(auto)
{
	if (datosBusqueda.minimo) 
	{
		return auto.precio >= datosBusqueda.minimo;
	};
	return auto;
}

function filtrarMaximo(auto)
{
	if (datosBusqueda.maximo) 
	{
		return auto.precio <= datosBusqueda.maximo;
	};
	return auto;
}

function filtrarPuertas(auto)
{
	if (datosBusqueda.puertas) 
	{
		return auto.puertas === datosBusqueda.puertas;
	};
	return auto;
}

function filtrarColor(auto)
{
	if (datosBusqueda.color) 
	{
		return auto.color === datosBusqueda.color;
	};
	return auto;
}

function filtrarTransmision(auto)
{
	if (datosBusqueda.transmision) 
	{
		return auto.transmision === datosBusqueda.transmision;
	};
	return auto;
}
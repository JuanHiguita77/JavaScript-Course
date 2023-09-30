const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


addEventListener('DOMContentLoaded', ()=>
{
	formulario.addEventListener('submit', validarBusqueda);
});

function validarBusqueda(e)
{
	e.preventDefault();

	const busqueda = document.querySelector('#busqueda').value;

	if (busqueda === '' )
	{
		alertaError('Inserte busqueda');
		return;
	}

	consultarAPI(busqueda);
}

function consultarAPI(busqueda)
{
	//Es una api protegida para evitar uso sin control, vamos a saltar el control
	const githubURL = `https://jobs.github.com/positions.json?search=${busqueda}`;
	const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(githubURL)}`; //Funcion nativa

	axios.get(URL)
		.then(respuesta => mostrarVacantes(JSON.parse(respuesta.data.contents)));
}

function alertaError(mensaje)
{
	const alertaPrevia = document.querySelector('.alerta');

	if(!alertaPrevia)
	{
		const alerta = document.createElement('div');
		alerta.classList.add('bg-gray-100', 'text-center', 'mt-3', 'p-3', 'alerta');

		alerta.textContent = mensaje;

		formulario.appendChild(alerta);

		setTimeout(()=>
		{
			alerta.remove();
		},3000);
	}
}

function mostrarVacantes(vacantes)
{
	while(resultado.firstChild)
	{
		resultado.removeChild(resultado.firstChild);
	}

	if (vacantes.length > 0)
	{
		resultado.classList.add('grid');

		//forEach al ser un arreglo, vacante
		vacantes.forEach(vacante =>
		{
			const {company} = vacante;

			resultado.innerHTML += `
				<div class="shadow">
					<h2 class="text-2xl font-light mb-4">${company} </h2>	
				</div>

			`
			//Incompleto por pagina borrada de github
		});

		
	}
	else 
	{
		const noResultado = document.createElement('p');

		resultado.classList.remove('grid');
		noResultado.classList.add('text-center', 'mt-10', 'text-gray', 'w-full');
		noResultado.textContent = 'No hubo resultados';

		resultado.appendChild(noResultado);
	}
}
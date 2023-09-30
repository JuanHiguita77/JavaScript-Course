
//constructores
function seguro(marca, year, tipo)
{
	this.marca = marca;
	this.year = year;
	this.tipo = tipo;
}

							//Se usa function ya que accedemos a otros datos
seguro.prototype.cotizarSeguro = function()
{
	let total;
	const base = 2000;

	switch (this.marca) 
	{
		case '1':
			total = base * 1.15;
		break;

		case '2':
			total = base * 1.05;
		break;

		case '3':
			total = base * 1.35;
		break;

		default:
		break;
	}

	//Leer el año
	const diferencia = new Date().getFullYear() - this.year;

	//Cada año de diferencia el costo se reduce un 3%;
	total -= ((diferencia * 3) * total) /100;

	/*
		Siel seguro es basico se multiplica por un 30% mas.
		Siel seguro es completo se multiplica por un 50% mas.
	*/

	if (this.tipo === 'basico')
	{
		total *= 1.30;
	}
	else 
	{
		total *= 1.50;
	}

	return total;

}

function UI(){}




//Llenar las opciones de los años
UI.prototype.llenarOpciones = ()=>
{
	const max = new Date().getFullYear(),
	min = max - 20;

	const selectYear = document.querySelector('#year');

	//Llenar las opciones de los años
	for(let i = max; i > min; i--)
	{
		let option = document.createElement('option');
		option.value = i;
		option.textContent = i;
		selectYear.appendChild(option); 
	}
}

UI.prototype.mostrarMensaje = (mensaje, tipo)=>
{
	const div = document.createElement('div');

	if (tipo === 'error')
	{
		div.classList.add('error');
	}
	else 
	{
		div.classList.add('correcto');
	}

	div.classList.add('mensaje','mt-10');
	div.textContent = mensaje;

	//HTML insert
	const formulario = document.querySelector('#cotizar-seguro');

	formulario.insertBefore(div, document.querySelector('#resultado'));

	setTimeout(()=>
	{
		div.remove();
	}, 3000);
}


UI.prototype.mostrarResultado = (total,safe)=>
{
	const div = document.createElement('div');
	div.classList.add('mt-10');


	const {marca, year, tipo} = safe;
	let textoMarca;

	switch (marca) 
	{
		case '1':
			textoMarca = 'Americano';
		break;

		case '2':
			textoMarca = 'Asiatico';
		break;

		case '3':
			textoMarca = 'Europeo';
		break;

		default:
		break;
	}

	

	div.innerHTML =
	`
		<p class= "header">Tu Resumen</p>
		<p class= "font-bold">Marca: <span class="font-normal">${textoMarca}</span> </p>
		<p class= "font-bold">Año: <span class="font-normal">${year}</span> </p>
		<p class= "font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span> </p>
		<p class= "font-bold">Total: <span class="font-normal">$ ${total}</span> </p>
	`;

	const resultadoDiv = document.querySelector('#resultado');
	

	//Mostrar animacion de carga
	const spinner = document.querySelector('#cargando');
	spinner.style.display = 'block';

	setTimeout(()=>
	{
		spinner.style.display = 'none';
		//Se borra el spinner y despues se muestra el codigo
		resultadoDiv.appendChild(div);
	}, 3000);
}


//Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', ()=>
{
	ui.llenarOpciones();
});

eventListeners();

function eventListeners()
{
	const formulario = document.querySelector('#cotizar-seguro');
	formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e)
{
	e.preventDefault();

	//Leer la marca seleccionada
	const marca = document.querySelector('#marca').value;

	//Leer el año seleccionado
	const year = document.querySelector('#year').value;

	//Leer tipo
	const tipo = document.querySelector('input[name = "tipo"]:checked').value;

	if (marca === '' || year === '' || tipo === '')
	{
		ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
		return;
	}

	const resultados = document.querySelector('#resultado div');

	if (resultados != null)
	{
		resultados.remove();
	};


	//Instanciar el seguro
	const safe = new seguro(marca, year, tipo);
	const total = safe.cotizarSeguro();


	ui.mostrarResultado(total,safe);
}
//Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




//Eventos

eventListeners();
function eventListeners()
{
	document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
	formulario.addEventListener('submit', agregarGasto);
}




//Clases
class Presupuesto
{
	constructor(presupuesto)
	{
						//Pasar a numero
		this.presupuesto = Number(presupuesto);
		this.restante = Number(presupuesto);
		this.gastos = [];
	}

	nuevoGasto(gasto)
	{
		this.gastos = [...this.gastos, gasto];
		this.calcularRestante();
	}

	eliminarGasto(id)
	{
		this.gastos = this.gastos.filter( gasto => gasto.id !== id);
		this.calcularRestante();
	}

	calcularRestante()
	{
		//Iteramos en el arreglo para ir sumando los gastos y obtener un total
		const gastado = this.gastos.reduce( (total, gasto)=> total + gasto.cantidad, 0);
		this.restante = this.presupuesto - gastado;

	}
	
}

class UI
{
	insertarPresupuesto(cantidad)
	{
		const {presupuesto, restante} = cantidad;
		document.querySelector('#total').textContent = presupuesto;
		document.querySelector('#restante').textContent = restante;
	}

	imprimirAlerta(mensaje, tipo)
	{
		const divMensaje = document.createElement('div');

		divMensaje.classList.add('tex-center', 'alert');


		if (tipo === 'error')
		{
			divMensaje.classList.add('alert-danger');
		}
		else 
		{
			divMensaje.classList.add('alert-success');	
		};


		divMensaje.textContent = mensaje;

		//										Elemento a agregar 	 lugar donde se agrega
		document.querySelector('.primario').insertBefore(divMensaje, formulario);

		//Quitar el html
		setTimeout(()=>
		{
			divMensaje.remove();
		},3000)
	}

	agregarGastoLista(gastos)
	{
		this.limpiarHtml();

		//Iterar sobre gastos
		gastos.forEach(gasto =>
		{
			const {nombre, cantidad, id} = gasto;

			//Crear lista
			const nuevoGasto = document.createElement('li');
			//Agregar clases con className
			nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';

			/*Forma vieja de agregar el dataid

			nuevoGasto.setAttribute('data-id', id);

			*/


			//Nueva forma
			nuevoGasto.dataset.id = id;

			//Agregar al html
			nuevoGasto.innerHTML = `${nombre} <span class = "badge-primary badge-pill">  $${cantidad} </span> `

			const btnBorrar = document.createElement('button');

			//Agregar clases con classList
			btnBorrar.classList.add('btn','btn-danger', 'borrar-gasto');
			btnBorrar.textContent = 'x';

			btnBorrar.onclick = ()=>
			{
				eliminarGasto(id);
			}

			nuevoGasto.appendChild(btnBorrar);
			gastoListado.appendChild(nuevoGasto);

		});

	}

	//Limpiar los elementos anteriores del html
	limpiarHtml()
	{
		while (gastoListado.firstChild) 
		{
			gastoListado.removeChild(gastoListado.firstChild);
		}
	}

	actualizarRestante(restante)
	{
		document.querySelector('#restante').textContent = restante;

	}

	comprobarPresupuesto(presupuestoObj)
	{
		const {presupuesto, restante} = presupuestoObj;
		const restanteDiv = document.querySelector('.restante');

		//25%
		if ((presupuesto / 4) > restante)  
		{
			restanteDiv.classList.remove('alert-success', 'alert-warning');
			restanteDiv.classList.add('alert-danger');
		}
		else if (true)//50%
		{
			restanteDiv.classList.remove('alert-success');
			restanteDiv.classList.add('alert-warning');
		}
		else 
		{
			restanteDiv.classList.remove('alert-danger', 'alert-warning');
			restanteDiv.classList.add('alert-success');
		}


		//Si es menor a cero o igual
		if (restante <= 0)
		{
			ui.imprimirAlerta('El presupuesto se ha agotado', 'error');

			formulario.querySelector('button[type = "submit"]').disabled = true;
		}
	}
}

//Instanciar
const ui = new UI();
let presupuesto;

//Funciones
function preguntarPresupuesto()
{
	const presupuestoU = prompt('Cual es tu presupuesto?');
	Number(presupuestoU);

	//Evitamos que no ingresen nada
	if (presupuestoU === '' || presupuestoU === null || isNaN(presupuestoU) || presupuestoU <= 0)
	{
		window.location.reload();
	}

	presupuesto = new Presupuesto(presupuestoU);

	ui.insertarPresupuesto(presupuesto);


}

function agregarGasto(e)
{
	e.preventDefault();

	const nombre = document.querySelector('#gasto').value;
	const cantidad = document.querySelector('#cantidad').value;

	if (nombre === '' || cantidad === '')
	{
		ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

		return;
	}
	else if(cantidad <= 0 || isNaN(cantidad))
	{
		ui.imprimirAlerta('Cantidad no valida', 'error');

		return;
	}

	//Mejora del objeto o object enhancement(lo contrario a disruption)
	//Asignda los objetos a una misma variable

	const gasto = {nombre, cantidad, id: Date.now()}
	
	presupuesto.nuevoGasto(gasto);

	ui.imprimirAlerta('Gasto agregado correctamente');

	//Imprimir los gastos
	//Para pasarle solo los gastos se hace disruption
	const {gastos, restante} = presupuesto;

	ui.agregarGastoLista(gastos);


	ui.actualizarRestante(restante);

	ui.comprobarPresupuesto(presupuesto);
	//Reiniciar formulario
	formulario.reset();
}

function eliminarGasto(id)
{
	presupuesto.eliminarGasto(id);

	//Elimina de la lista en el html
	const { gastos, restante } = presupuesto;

	//Elimina del arreglo
	ui.agregarGastoLista(gastos);
	ui.actualizarRestante(restante);
	ui.comprobarPresupuesto(presupuesto);
}
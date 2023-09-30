const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

const mascotaInput = document.querySelector('#mascota');
const propietarioInput= document.querySelector('#propietario');
const telefonoInput= document.querySelector('#telefono');
const fechaInput= document.querySelector('#fecha');
const horaInput= document.querySelector('#hora');
const sintomasInput= document.querySelector('#sintomas');

let editando;


class Citas
{
	constructor()
	{
		this.citas = [];
	}

	agregarCita(cita)
	{
		this.citas = [...this.citas, cita];
	}

	eliminarCita(id)
	{
		this.citas = this.citas.filter(cita => cita.id !== id);
	}

	editarCita(citaActualizada)
	{
		this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
	}
}


class UI
{
	//El tipo es depende a como lo estructuremos
	imprimirAlerta(mensaje, tipo)
	{
		//crear div
		const divAlerta = document.createElement('div');
		divAlerta.classList.add('text-center', 'alert', 'd-block', 'col-12');

		//agregar clase en base al tipo de error, se puede dejar incluso con vacio
		if (tipo === 'error') 
		{
			divAlerta.classList.remove('alert-success');
			divAlerta.classList.add('alert-danger');
		}
		else 
		{
			divAlerta.classList.remove('alert-danger');
			divAlerta.classList.add('alert-success');
		}

		//Mensaje segun sea el caso
		divAlerta.textContent = mensaje;

		//agregar al DOM
		document.querySelector('#contenido').insertBefore(divAlerta, document.querySelector('.agregar-cita'));

		//Timer quitar alerta
		setTimeout(()=>
		{
			divAlerta.remove();
		},3000);
	}

	agregarCitaHtml({citas})
	{
		
		this.limpiarHtml();

		citas.forEach(cita =>
		{
			const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

			const divCita = document.createElement('div');
			divCita.classList.add('cita','p-3');
			divCita.dataset.id = id;

			//Scripting elementos de la cita

			const mascotaParrafo = document.createElement('h2');
			mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
			mascotaParrafo.textContent = mascota;

			const propietarioParrafo = document.createElement('p');
			propietarioParrafo.innerHTML = ` <span class= "font-weight-bolder"> Propietario: </span>${propietario}`;

			const telefonoParrafo = document.createElement('p');
			telefonoParrafo.innerHTML = ` <span class= "font-weight-bolder"> Telefono: </span>${telefono}`;

			const fechaParrafo = document.createElement('p');
			fechaParrafo.innerHTML = ` <span class= "font-weight-bolder"> Fecha: </span>${fecha}`;

			const horaParrafo = document.createElement('p');
			horaParrafo.innerHTML = ` <span class= "font-weight-bolder"> Hora: </span>${hora}`;

			const sintomasParrafo = document.createElement('p');
			sintomasParrafo.innerHTML = ` <span class= "font-weight-bolder"> Sintomas: </span>${sintomas}`;

			//Boton para eliminar cita
			const btnBorrarCita = document.createElement('button');
			btnBorrarCita.classList.add('btn', 'btn-danger', 'mr-2');
			btnBorrarCita.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
  												
			//Funcion para eliminar con el boton
			btnBorrarCita.onclick = ()=> eliminarCita(id);

			//Boton para editar citas
			const btnEditar = document.createElement('button');
			btnEditar.classList.add('btn','btn-info');
			btnEditar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
 								 	<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
									</svg>`;

			//Se le pasa la cita completa
			btnEditar.onclick = ()=> cargarEdicion(cita);


			//Agregando el html a la cita
			divCita.appendChild(mascotaParrafo);
			divCita.appendChild(propietarioParrafo);
			divCita.appendChild(telefonoParrafo);
			divCita.appendChild(fechaParrafo);
			divCita.appendChild(horaParrafo);
			divCita.appendChild(sintomasParrafo);
			divCita.appendChild(btnBorrarCita);
			divCita.appendChild(btnEditar);

			//Agregar citas al html
			contenedorCitas.appendChild(divCita);
		});
	}

	limpiarHtml()
	{
		while (contenedorCitas.firstChild) 
		{
			contenedorCitas.removeChild(contenedorCitas.firstChild);
		}
	}
}

//Instanciar las clases
const ui = new UI();
const administrarCitas = new Citas();

//eventlistener
eventListeners();
function eventListeners()
{
	mascotaInput.addEventListener('change', datosCita);
	propietarioInput.addEventListener('change', datosCita);
	telefonoInput.addEventListener('change', datosCita);
	fechaInput.addEventListener('change', datosCita);
	horaInput.addEventListener('change', datosCita);
	sintomasInput.addEventListener('change', datosCita);

	formulario.addEventListener('submit', nuevaCita);
}


//Objeto cita
const citaObj =
{
	mascota: '',
	propietario: '',
	telefono: '',
	hora: '',
	sintomas: ''
}

//Funciones
function datosCita(e)
{
	
	//Agrega datos al objeto de cita
	citaObj[e.target.name] = e.target.value;

}

function nuevaCita(e)
{
	e.preventDefault();

	//Informacion que llega del objeto cita
	const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

	//Validacion de campos
	if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '')
	{
		ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
		return; //Para evitar que se siga ejecutando
	}


	//Editando cita
	if (editando)
	{
		//Mensaje de cambios hechos
		ui.imprimirAlerta('Se guardaron los cambios correctamente');

		//Pasar el objeto de la cita a editar
		administrarCitas.editarCita({...citaObj});

		//cambiar texto del boton
		formulario.querySelector('button[type="submit"]').textContent = 'CREAR CITA';

		//Cambiar el modo
		editando = false;
	}
	else 
	{
		//Al poder editar la informacion ya escrita debemos darle una id para esto
		citaObj.id = Date.now();


		//Creando nueva cita
		/*Le pasamos una copia para evitar que todos los datos se reescriban con 
		los ultimos datos ingresados*/
		administrarCitas.agregarCita({...citaObj});

		ui.imprimirAlerta('Se agregó correctamente la cita');
	}




	//Reinicia el objeto
	reiniciarObjeto();
	//Reiniciar el formulario pero NOOO los datos del objeto, toca reiniciar el objeto tambien
	formulario.reset();

	//Mostrar la cita en el html
	//Le pasamos el arreglo con las citas "administrarCitas"
	ui.agregarCitaHtml(administrarCitas);
}

//Reiniciamos el objeto
function reiniciarObjeto()
{
	citaObj.mascota = '';
	citaObj.propietario = '';
	citaObj.telefono = '';
	citaObj.hora = '';
	citaObj.sintomas = '';
}

function eliminarCita(id)
{
	administrarCitas.eliminarCita(id);

	//Mostrar el mensaje
	ui.imprimirAlerta('La cita se eliminó correctamente');

	//Actualizar HTML de citas
	ui.agregarCitaHtml(administrarCitas);

}

function cargarEdicion(cita)
{
	const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

	mascotaInput.value = mascota;
	propietarioInput.value = propietario;
	telefonoInput.value = telefono;
	fechaInput.value = fecha;
	horaInput.value = hora;
	sintomasInput.value = sintomas;

	//Llenar el objeto con la nueva informacion
	citaObj.mascota = mascota;
	citaObj.propietario = propietario;
	citaObj.telefono = telefono;
	citaObj.fecha = fecha;
	citaObj.hora = hora;
	citaObj.sintomas = sintomas;
	citaObj.id = id;

	//Cambiar texto del boton
	formulario.querySelector('button[type="submit"]').textContent = 'GUARDAR CAMBIOS';

	editando = true;
}
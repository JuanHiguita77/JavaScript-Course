//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
//Arreglo de la compra
let articulosCarrito = [];

//Cargar todos los eventos
cargarEventos();
function cargarEventos()
{
	//Agregar un curso cuando se da clic 
	listaCursos.addEventListener('click', agregarCurso);

	//Elimina los cursos con el boton X
	carrito.addEventListener('click', eliminarCurso);

	//Vaciar el carrito
	vaciarCarritoBtn.addEventListener('click', ()=>
	{
		articulosCarrito = [];//Reseteamos el arreglo

		//Eliminamos el html usando una funcion ya creada
		limpiarHTML();
	});
};


//Funciones

//Se recomienda hacer funciones cortas y dividir el trabajo en varias
function agregarCurso(e)
{
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito'))
	{
		//Vamos de un hijo a un padre con esta variable
		const cursoSeleccionado = e.target.parentElement.parentElement;

		leerDatos(cursoSeleccionado);
	};
};

function eliminarCurso(e) 
{
	if (e.target.classList.contains('borrar-curso')) 
	{
		//Obtener el id del curso
		const cursoId = e.target.getAttribute('data-id');

		//Eliminarlo						Nos trae el que no tenga esa id
		articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

		//Se vuelve a llamar el creador del HTML para actualizar la lista
		carritoHTML();
	};
}


function leerDatos(curso)
{
	const infoCurso =
	{
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}

	//Verificacion si existe un curso o no
	const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

	if (existe)
	{
		//Aumentar la cantidad, el map necesita retornar el objeto actualizado
		const cursos = articulosCarrito.map(curso =>
		{
			if (curso.id === infoCurso.id)
			{
				curso.cantidad++;
				return curso;//Retorna objeto actualizado
			}
			else 
			{
				return curso;//Retorna objetos por default 
			};
		});
		articulosCarrito = [...cursos];
	}
	else 
	{
		//Agregar elementos al carrito de compra
		/*Se usa el spread para no perder los cursos ya guardados, se crea una
		copia del arreglo anterior*/
		articulosCarrito = [...articulosCarrito, infoCurso];
	}



	carritoHTML();
};


//Muestra el carrito con los productos en HTML
function carritoHTML()
{
	//Limpiar el html antes de agregar mas articulos
	limpiarHTML();

	articulosCarrito.forEach(curso =>
	{
		const {imagen, titulo, precio, cantidad, id} = curso;
		const row = document.createElement('tr');
		row.innerHTML =
		`
			<td>
				<img src="${imagen}" width = '150px'>
			</td>
			<td>	
				${titulo}
			</td>
			<td>	
				${precio}
			</td>
			<td>	
				${cantidad}
			</td>
			<td>	
				<a href="#" class="borrar-curso" data-id="${id}"> X </a>
			</td>
		`	

		//Agregar al HTML
		contenedorCarrito.appendChild(row);
	});
};

//Debemos eliminar el html que se repite en el carrito de compras
function limpiarHTML() 
{
	//Forma lenta de limpiar
	//contenedorCarrito.innerHTML = '';

	//Ciclo que se ejecuta mientras el carrito tenga cursos
	while (contenedorCarrito.firstChild) 
	{
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
};
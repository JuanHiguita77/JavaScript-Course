//Importar la clase de citas
import Citas from '../js/classes/Citas';


describe('Probar la clase de class', ()=>
{
	const id = Date.now();

	test('Agregar una nueva cita', ()=>
	{
		const citaObj = 
		{
			id,
		    mascota: 'sekki',
		    propietario: 'juan',
		    telefono: '234234',
		    fecha: '10-56-6563',
		    hora:'13:56',
		    sintomas: 'nada'
		}

		citas.agregarCita(citaObj);

		//Comparar el snapshot
		expect(citas).toMatchSnapshot();
	});


	test('Actualizar cita', ()=>
	{
		const citaActualizada = 
		{
			id,
		    mascota: 'hanna',
		    propietario: 'juan',
		    telefono: '234234',
		    fecha: '10-56-6563',
		    hora:'13:56',
		    sintomas: 'nada'
		}

		citas.editarCita(citaActualizada);

		//Comparar el snapshot
		expect(citas).toMatchSnapshot();
	});

	test('eliminar cita',()=>
	{
		citas.eliminarCita(id);

		expect(citas).toMatchSnapshot();
	});
});
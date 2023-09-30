const pendientes = ['tarea', 'comer', 'Gimnasio', 'Estudiar'];

const auto =
{
	modelo: 'camaro',
	año: 2024,
	motor: 1600
};

//For in opera sobre objetos
for(let datos in auto)
{
	//Solo nos muestra el titulo de la propiedad
	console.log(datos);

	console.log(`${auto[datos]}`);
};

//Otra manera de acceder a los datos

		//los 2 datos en el objeto			//objeto
for(let [propiedad, valor] of Object.entries(auto))
{
	console.log(propiedad);
	console.log(valor);
};
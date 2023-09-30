const cliente =
{
	nombre: 'juan',
	balance: 800
}

describe('Testing al cliente',()=>
{
	test('El cliente es premiun',()=>
	{
		//Metodo para comparar un numero mayor a otro
		expect(cliente.balance).toBeGreaterThan(600);
	});

	test('Es Juan papi',()=>
	{
		//Metodo para comparar un string
		expect(cliente.nombre).toBe('juan');
	});

	test('No es otro cliente', ()=>
	{
		//Metodo para comparar un string en inverso
		expect(cliente.nombre).not.toBe('fernando');
	});

	test('No tiene 800',()=>
	{
		//Metodo para saber si tiene cierto valor especifico
		expect(cliente.balance).not.toBe(600);
	});
});
const cliente =
{
	nombre: 'juan',
	balance: 800,
	tipo: 'premium'
}

describe('Prueba de snapshot',()=>
{
	test('Es Juan Pablo',()=>
	{
		expect(cliente).toMatchSnapshot();
	});
});

//Se puede reescribir los snapshots en la terminal: npm t -- -u
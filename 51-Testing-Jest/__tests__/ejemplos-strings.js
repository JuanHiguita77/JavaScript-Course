const password = '234223';

describe('Valida que el pass sea valido y tenga 6 caracteres', ()=>
{
	test('Password de 6 digitos', ()=>
	{
		//El valor a comparar y un metodo para decir cantidad
		expect(password).toHaveLength(6);
	});

	test('Pass no vacio', ()=>
	{
		//Negar la condicion para decir que tiene caracteres
		expect(password).not.toHaveLength(0);
	});
});
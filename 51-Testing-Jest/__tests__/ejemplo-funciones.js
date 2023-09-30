function sumar(a,b)
{
	return a + b;
}

function restar(a,b)
{
	return a - b;
}

describe('Prueba de funciones',()=>
{
	test('Prueba de suma 23 y 45',()=>
	{
		expect(sumar(23,45)).toBe(68);
	});

	test('Prueba de restar 23 y 45',()=>
	{
		expect(restar(23,45)).toBe(-22);
	});

	test('Que no de tal valor entre la suma 23 y 45',()=>
	{
		expect(sumar(23,45)).not.toBe(60);
	});

	test('Que no sea tal valor restar 23 y 45',()=>
	{
		expect(restar(23,45)).not.toBe(22);
	});
});

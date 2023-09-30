const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

describe('Carrito de compras test', ()=>
{
	test('Probar que tenga compras',()=>
	{
		expect(carrito).toHaveLength(3);
	});

	test('Carrito no vacio',()=>
	{
		expect(carrito).not.toHaveLength(0);
	});
});
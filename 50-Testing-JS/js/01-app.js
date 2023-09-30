function sumar(a,b)
{
	return a + b;
}

function restar(a,b)
{
	return a - b;
}

async function sumaAsync(a,b)
{
	return Promise(resolve(sumar(a,b)))
}

test('suma dos valores', async ()=>
{
	const resultado = await sumaAsync(2,32);
	const esperado = 34;

	expected(esperado).toBe(resultado);
});

async function test(mensaje, callback)
{
	try {
		await callback();
	} catch(e) {
		// statements
		console.log(e);
	}
} 
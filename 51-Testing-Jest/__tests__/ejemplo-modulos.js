import { suma } from '../js/funciones.js';

describe('Sume de 2 numeros', ()=>
{
	test('Sumar 10 y 20, resultado 30',()=>
	{
		expect(suma(20,10)).toBe(30);
	});
});
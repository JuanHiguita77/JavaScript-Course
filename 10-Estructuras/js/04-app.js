const dinero = 500;
const totalAPagar = 600;
const tarjeta = true;

if (dinero >= totalAPagar)
{
	console.log('Puede pagar');
}
else if (tarjeta) 
{
	console.log('Puede pagar con tarjeta');	
}
else 
{
	console.log('No puede pagar');	
};
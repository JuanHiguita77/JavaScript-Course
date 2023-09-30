const usuario = true;
const puedePagar = false;

if (usuario && puedePagar) 
{
	console.log('Si puedes comprar');
}
else if (usuario) 
{
	console.log('Inicia sesion o crea cuenta')
}
else if (puedePagar) 
{
	console.log('Fondos insuficientes');
}
else 
{
	console.log('No puedes comprar');	
};
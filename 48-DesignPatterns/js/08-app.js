//Mediador

function Vendedor(nombre)
{
	this.nombre = nombre;
	this.sala = null;
}

Vendedor.prototype = 
{
	oferta: (articulo, precio) =>
	{
		console.log(`Tenemos el siguiente articulo: ${articulo}, iniciamos con un predio de ${precio}`);
	},
	vendido: comprador =>
	{
		console.log(`Vendido a ${comprador}`);
	}
	
}

function Comprador(nombre)
{
	this.nombre = nombre;
	this.sala = null;
}

Comprador.prototype = 
{
	oferta: (cantidad, comprador) =>
	{
		console.log(`${comprador.nombre} : ${cantidad}`);
	}
}

function Subasta()
{
	let compradores = {};

	return 
	{
		registrar: usuario =>
		{
			compradores[usuario.nombre] = usuario;
			usuario.sala = this;
		}
	}
}

const juan = new Comprador('juan');
const pablo = new Comprador('pablito');
const vendedor = new Vendedor('vendocasas');
const subasta = new Subasta();

subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('pc gamer', 464);

juan.oferta(350, juan);
vendedor.vendido('juan');
pablo.oferta(380, pablo);

vendedor.vendido('pablo');


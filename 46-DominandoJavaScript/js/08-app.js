//self: Se usa para llamar una propiedad de la ventana global
self.onload = ()=>
{
	console.log('Ventana lista');
}

window.nombre = 'monitor 23asd';//Se le asigna a la ventana global

const producto = 
{
	precio: 3032,
	disponible: true,
	mostrarInfo: function()
	{
		return `El producto ${self.nombre} tiene un precio de ${this.precio}`;
	}
}

console.log(producto.mostrarInfo());
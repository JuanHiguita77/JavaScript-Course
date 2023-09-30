//Agregar elementos al localStorage
//LocalStorage: Guarda los datos mucho tiempo
//SessionStorage: Solo guarda los datos durante la instancia en la web

//Solo guarda cadenas

localStorage.setItem('nombre','Juan');

const producto =
{
	nombre: 'ferrari',
	precio: 132
}

const objetoCadena = JSON.stringify(producto);

localStorage.setItem('producto', objetoCadena);

const meses = ['Enero', 'Febrero', 'marzo'];
localStorage.setItem('meses', JSON.stringify(meses));
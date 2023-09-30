//New binding
function Auto(modelo,color)
{
	this.nombre = modelo;
	this.color = color;
}

const auto = new Auto('camaro', 'gris');
console.log(auto);

//window binding
window.color = 'negro';//Una propiedad de ventana global

function hola()
{
	console.log(color);//Por eso lo identifica
}

hola();
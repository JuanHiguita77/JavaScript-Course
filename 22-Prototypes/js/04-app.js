//Heredar protoypes

function cliente(nombre,saldo)
{
	this.nombre = nombre;
	this.saldo = saldo;
}


//No se puede usar arrow functions
//La funcion flecha busca en la ventana global, y el function solo en la parte actual
cliente.prototype.tipoCliente = function()
{
	 let tipo;

	 if (this.saldo > 10000)
	 {
	 	tipo = 'gold';
	 }
	 else if(this.saldo > 5000) 
	 {
	 	tipo = 'Platinum';	
	 }
	 else 
	 {
	 	tipo = 'Normal';
	 };
	 return tipo;
}


cliente.prototype.nombreClienteSaldo = function()
{
	return `Nombre: ${this.nombre}---Saldo: ${this.saldo}---Tipo Cliente: ${this.tipoCliente()}`;
}

cliente.prototype.clienteRetira = function(retira)
{
	this.saldo -= retira; 
}

//Este constructor tiene algunas de las mismas propiedades de cliente
function persona(nombre, saldo, telefono)
{
	//Se llaman las propiedades de cliente para ahorrar codigo
	cliente.call(this, nombre, saldo);
	this.telefono = telefono;
}

//Como pasar las funciones a otro prototype
persona.prototype = Object.create(cliente.prototype);
persona.prototype.constructor = cliente;
//Se debe hacer antes de instanciar el objeto

persona.prototype.mostrarTelefono = function()
{
	return `Telefono de la persona: ${this.telefono}`;
}

//Instanciar objeto
const juan = new persona('juan', 444, 8798764);


console.log(juan);

//Usamos la funcion ya heredada de cliente.tipocliente
console.log(juan.nombreClienteSaldo());
console.log(juan.mostrarTelefono());




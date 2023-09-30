//Los prototypes se usan para cuando son muchos objetos o proyectos grandes

function cliente(nombre,saldo)
{
	this.nombre = nombre;
	this.saldo = saldo;
}


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
};


cliente.prototype.nombreClienteSaldo = function()
{
	return `Nombre: ${this.nombre}---Saldo: ${this.saldo}---Tipo Cliente: ${this.tipoCliente()}`;
};

cliente.prototype.clienteRetira = function(retira)
{
	this.saldo -= retira; 
};


//Instanciarlo
const juan = new cliente('juan',9999);
console.log(juan.tipoCliente());
console.log(juan.nombreClienteSaldo());
juan.clienteRetira(444);
console.log(juan.nombreClienteSaldo());

console.log(juan);


//Parametros por default
//En caso que no se ingrese información o no tengamos esta
function saludar(nombre = '', apellido = 'Desconocido') 
{
	console.log(`Bienvenido ${nombre} ${apellido}`);
};

saludar('Juan');
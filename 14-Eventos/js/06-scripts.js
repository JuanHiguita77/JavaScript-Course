//Event Bubbling: El evento se propaga hacia otros elementos padres o hijos


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


//Este rebote indeseado se elimina con el stopPropagation
cardDiv.addEventListener('click', (variable)=>
{
	variable.stopPropagation();
	console.log('Clic en card');
});

infoDiv.addEventListener('click', (variable)=>
{
	variable.stopPropagation();
	console.log('Clic en info');
});

titulo.addEventListener('click', (variable)=>
{
	variable.stopPropagation();
	console.log('Clic en titulo');
});



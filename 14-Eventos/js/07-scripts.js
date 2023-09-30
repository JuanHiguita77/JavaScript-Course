//Event Bubbling con delegation
//Se trata de usar una sola variable para indicar un evento en base al elemento asignado a esa variable
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (variable)=>
{
	if (variable.target.classList.contains('titulo'))
	{
		console.log('clic en titulo');
	};

	if (variable.target.classList.contains('info'))
	{
		console.log('clic en info');
	};

	if (variable.target.classList.contains('card'))
	{
		console.log('clic en card');
	};
});
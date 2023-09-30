const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', togglerFooter);

function togglerFooter()
{
	
	if (footer.classList.contains('activo')) 
	{
		footer.classList.remove('activo');
		//Se puede reemplazar por this.classList.remove
		btnFlotante.classList.remove('activo');
		btnFlotante.textContent = 'Idioma y Moneda';
	}
	else 
	{
		footer.classList.add('activo');	
		btnFlotante.classList.add('activo');
		btnFlotante.textContent = 'X Cerrar';
	};
};
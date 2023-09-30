//API visibilidad: Saber cuando el usuario no ve la web

document.addEventListener('visibilitychange', ()=>
{
	if (document.visibilityState === 'visible')
	{
		console.log('Video play');
	}
	else 
	{
		console.log('Video Stop');	
	}
});
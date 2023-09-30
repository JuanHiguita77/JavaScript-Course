

//Usar la app sin internet, le decimos que paginas guardar en cache
const nombreCache = 'apv-v4';
const archivos =
[
	'/',
	'index.html',
	'error.html',
	'/css/bootstrap.css',
	'/css/style.css',
	'/js/app.js',
	'/js/apv.js'
];

//Cuando se instala el service Worket
self.addEventListener('install', e =>
{
	//Espera a todas las caches
	e.waitUntil(
		caches.open(nombreCache)
			.then(cache =>
			{
				cache.addAll(archivos);
			})
	);
});

//Activarlo
self.addEventListener('activate', e =>
{
	console.log('Service activate');
	console.log(e);

	//ACTUALIZAR LA CACHE AL ULTIMO CAMBIO Y ELIMINAR EL RESTO
	e.waitUntil
	(
		caches.keys()
			.then(keys =>
			{
				return Promise.all
				(
					keys.filter(key => key !== nombreCache)
					.map(key => caches.delete(key))
				)
			})
	)
});

//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e =>
{
	console.log('fetch..',e);

	e.respondWith
	(
		//revisar que sean los mismos archivos de cache
		caches.match(e.request)
			.then(respuestaCache =>
			{
				return respuestaCache
			})
			.catch(() => caches.match('/error.html'))
	)
});
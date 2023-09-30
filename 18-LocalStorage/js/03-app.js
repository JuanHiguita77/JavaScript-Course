//Eliminar y actualizar datos del localStorage

const mesesArreglo = JSON.parse(localStorage.getItem('meses'));
mesesArreglo.push('Abril');


//Vuelve y se mandan los datos para actualizar
localStorage.setItem('meses', JSON.stringify(mesesArreglo));

//Borrar los datos
localStorage.clear();
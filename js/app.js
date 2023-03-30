function cambiarTitulo(){
    console.log('Debe cambiar el titulo');
    //* Traer el h1 del html en una forma de objeto
    let titulo = document.querySelector('h1');
    // let titulo = document.querySelector('.container') busqueda por clase
    // let titulo = document.querySelector('#nombreID') busqueda por ID
    // devuelve un arreglo de nodos del dom
    // let titulo = document.getElementsByTagName('h1'); // devuelve un htmlCollection
    // let titulo = document.getElementById('tituloPrincipal'); //devuelve un objeto
    // let titulo = document.getElementsByClassName('container'); //devuelve un htmlColection
    console.log(titulo.className)
    titulo.className += ' text-primary';
    titulo.innerHTML = 'Nuevo titulo desde <b>JS</b>' // no usarla en imputs
    // titulo.innerText = 'Nuevo titulo desde JS' //añade unicamente texto, sin html
}
let botonVerMas = document.getElementById('btnVerMas');
// console.log(botonVerMas);
botonVerMas.addEventListener('click', verMas) //agregador de eventos
//TODO Sitengo que enviar argumentos
// botonVerMas.addEventListener('click', ()=>{verMas(param1,param2)}) 

function cambiarTitulo(){
    console.log('Debe cambiar el titulo');
    //* Traer el h1 del html en una forma de objeto
    let titulo = document.querySelector('h1');
    // let titulo = document.querySelector('.container') busqueda por clase
    // let titulo = document.querySelector('#nombreID') busqueda por ID
    // devuelve un arreglo de nodos del dom
    // let titulo = document.getElementsByTagName('h1'); // devuelve un htmlCollection
    // let titulo = document.getElementsByClassName('container'); //devuelve un htmlColection
    // let titulo = document.getElementById('tituloPrincipal'); //devuelve un objeto
    console.log(titulo.className)
    titulo.className += ' text-primary';
    titulo.innerHTML = 'Nuevo titulo desde <b>JS</b>' //Modifica textos no usarla en imputs
    // titulo.innerText = 'Nuevo titulo desde JS' //añade unicamente texto, sin html
}
function verMas(){
    console.log('Desde la funcion ver mas');
    // Traemos el section padre
    let seccionPadre = document.querySelector('#contenedorPadre');
    // Creamos el nuevo elemento y lo maquillamos
    let parrafo = document.createElement('p')
    console.log(parrafo);
    parrafo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum accusantium, distinctio optio sequi recusandae voluptas voluptate molestiae. Vel ad dolorem sapiente veniam incidunt? Voluptatem debitis quisquam nisi asperiores eius, sequi atque aspernatur voluptatibus, animi dignissimos amet consequuntur quidem numquam reiciendis, dolore adipisci eveniet modi. Et cumque doloribus repellat esse earum odio, est hic impedit obcaecati, ad nisi beatae eos soluta odit labore aut perferendis sed voluptates alias iure voluptatibus laborum ullam. Dicta, libero placeat itaque iure adipisci, in assumenda deserunt minima ducimus est vel sit quaerat incidunt possimus et nisi eum dolores vitae molestiae error a excepturi quos unde.'
    parrafo.className = 'lead';
    // Insertar el nodo HIJO
    // seccionPadre.appendChild(parrafo); // agrega el nodo ALFINAL del padre
    // seccionPadre.prepend(parrafo); // agrega al principio de todos los hijos
    seccionPadre.insertBefore(parrafo,botonVerMas); //agrega el parrafo antes del hijo button
}
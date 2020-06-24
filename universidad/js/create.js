//crear enlace

// const enlace =document.createElement('a')

// //agregamos una clase

// enlace.className= 'enlace';

// //añadir Id

// enlace.id='nuevo-id';

// //atributo de href

// enlace.setAttribute('href','#')

// //Añadir texto
// enlace.textContent='Nuevo enlace'

// //Agregarlo al HTML
// document.querySelector('#secundaria').appendChild(enlace);

// console.log(enlace)


//Crear modificaciones en el DOM

//Reemplazar elementos

// const nuevoEncabezado= document.createElement('h2');

// //agregar un id
// nuevoEncabezado.id= 'encabezado';

// //agregar nuevo texto
// nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

// //Elemento anterior será reemplazado

// const anterior= document.querySelector('#encabezado');

// const elPadre= document.querySelector('#lista-cursos');

// //Reemplazar
// elPadre.replaceChild(nuevoEncabezado,anterior);

// console.log(nuevoEncabezado)


//ULTIMA CLASEEEEEEEEEEEE

//ELiminar elementos

// const enlaces= document.querySelectorAll('.enlace');

// const navegacion =document.querySelector('#principal');

// //enlaces[0].remove(); //con esto puedo remover un elemento usando el método remove

// navegacion.removeChild(enlaces[0]); //las dos opciones hacen lo mismo

// console.log(navegacion)


const primerLi =document.querySelector('.enlace');

let elemento;

//Obtener una clase de CSS

elemento = primerLi.className;
elemento=primerLi.classList.add('nueva-clase');
elemento=primerLi.classList.remove('nueva-clase');
elemento=primerLi.classList;

//Leer atributos
elemento=primerLi.getAttribute('href');
primerLi.setAttribute('href','http://facebook.com')
primerLi.setAttribute('data-id',20)

elemento=primerLi
console.log(elemento)


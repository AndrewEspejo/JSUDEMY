//El traversing consiste en recorrer distintos

// const navegacion= document.querySelector('#principal');

// console.log(navegacion.nodeName);

// console.log(navegacion.children);


//Usando nodeType
// 1=Elementos HTML
// //2=Atributos
// //3= Text node
// //8= comentarios
// //9=documentos
// //10=doctype

// //Ahora modificaremos algo en la barra

// const barra= document.querySelector('.barra');

// console.log(barra.children);


// const cursos= document.querySelectorAll('.card');

// console.log(cursos[0].childElementCount);


//Segunca clase traversing

// const enlaces= document.querySelectorAll('.enlace');

// console.log(enlaces[0].parentElement.parentElement);


const cursos= document.querySelectorAll('.card')

console.log(cursos[0].parentElement.parentElement.parentElement.children[0])



//otra forma de accder

const enlaces = document.querySelectorAll('.enlace')

//console.log(enlaces[4].previousElementSibling.previousElementSibling)

console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4])

// let enlaces = document.getElementsByClassName('enlace')[3]


// //Modificando css

// enlaces.style.background= '#333'

// console.log(enlaces)


// const listaEnlaces=document.querySelector('#principal').getElementsByClassName('enlace')

// console.log(listaEnlaces)

// const links= document.getElementsByTagName('a')


// links[18].style.color='red'
// links[18].textContent= 'New enlace'

// let enlaces= Array.from(links);

// enlaces.forEach(function(enlace) {
//    console.log(enlace.textContent)
// });


const enlaces= document.querySelectorAll('#principal a:nth-child(odd)');

enlaces.forEach(function(impares) {
   impares.style.backgroundColor='red';
   impares.style.color='white';
});
console.log(enlaces)


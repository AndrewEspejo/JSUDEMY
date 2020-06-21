// creación de variables 

let nombre, mensaje;

nombre = 'Juan diego ' ;
mensaje = "y entonces dije: que buen curso"
console.log(nombre+mensaje);

let aprendiendo = 'Aprendiendo',
   tecnologia = 'Javascript';

console.log(`${aprendiendo} ${tecnologia}`)

let message = 'if you wanna learn javascript, you need to do more for you and your education like a future programer';

let framework = 'React '
//Strings o cadenas 

//primer método length

console.log(tecnologia.length);

//segundo método, uppercase

console.log(tecnologia.toUpperCase());

//tercer método, lowercase

console.log(tecnologia.toLocaleLowerCase());

//cuarto método indexof , nos permite buscar en una cadena de texto

console.log(message.indexOf('javascript'));

//quinto método substring

console.log(message.substring(3,12))

//sexto método, split
//según lo que entendi, split devuelve un array
console.log(message.split(', '));

//séptimo método, replace
console.log(message.replace('javascript','web development'))

//octavo método, includes
console.log(message.includes('learn'))

//noveno método
console.log(framework.repeat(5))
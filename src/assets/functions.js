//funciones en javascript

// function saludar() {
//    console.log('Hello world')
// };

// saludar();

// //un poco más avanzado

// function greeting(name) {
//    console.log(`Hello ${name}, is it all ok?`)
// };

// greeting('Andi');

// function sumar(a,b) {
//    console.log(a+b)
// };

// sumar(5,6);

// function summar(a,b) {
//    return a+b;
// }

// let suma =summar(8,10)

// console.log(suma)

//función en caso de que no haya argumento

// function comer(comida) {
//    if (typeof comida === 'undefined') {comida= 'Pan'}
//    return `Vamos a comer ${comida}`
// }

// let almuerzo;

// almuerzo = comer('Hamburguesa');

// console.log(almuerzo)

//forma nueva 
function comer(comida='Pan') {
   return `Vamos a comer ${comida}`
}
let almuerzo;

almuerzo = comer();

console.log(almuerzo)


//Function expression

const suma = function(a=3,b=8) {
   return a+b
}
console.log(suma(1,2));

const saludar = function(nombre='Visitant', edad=20,trabajo='web developer') {
   return `Hola ${nombre}, tienes ${edad} y trabajas como ${trabajo}`
};

console.log(saludar('Andres',24,))
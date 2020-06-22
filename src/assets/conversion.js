//declaramos las variables

const number1= "50",
      number2= 10,
      number3='tres';

//en este caso JS intenta concatenar, pero nos da un error
// console.log(number1+number2);


console.log(Number(number1)+number2);

//la función number se encarga de convertir nuestro string en un número

console.log(parseInt(number1)+number2);
//Parseint es otra función que nos permite realizar lo mismo :3 

// console.log(typeof parseInt(number1));

let dato;
date = Number("20");
dato= Number("20.10952");
dato= Number(true);
dato=Number(false);
// dato=Number(undefined)


//ParseInt y ParseFLoat
dato= parseInt('100');
dato =parseFloat('100.5')


//toFixed me permite poner una cantidad máxima de decimales
dato = 251545465.54455;

console.log(dato.toFixed(3));
console.log(dato);




//Conversión de números a strings
let cp = 15457;

cp=String(cp);

//console.log(typeof cp)

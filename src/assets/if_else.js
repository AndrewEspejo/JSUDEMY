
const edad=18;

if(edad>=18) {
   console.log('Si puedes entrar');
} else {
   console.log('No puedes entrar')
}

//comprobar que una variable tiene un valor

// let puntaje =1000;

// if(puntaje){
//    console.log(`El puntaje fue de ${puntaje}`);
// } else {
//    console.log(`No hay puntaje`);

// }

// // 
// let efectivo =500;
// let totalCarrito= 300;

// if(efectivo> totalCarrito) {
//    console.log('Pago correcto');
// } else {
//    console.log('Fondos insuficientes')
// }

// //estructuras elseif

// let hora=25;
// if(hora >0 && hora <=12) {
//    console.log('Buenos días');
// } else if (hora <=18) {
//    console.log('Buenas tardes')
// } else if (hora>18 && hora <=24) {
//    console.log('Buenas noches')
// } else {
//    console.log('Hora fuera del rango')
// }

//operador or

let efectivo =300,
      credito =250,
      disponible=efectivo+credito
      totalCarrito=500;

if(totalCarrito < efectivo || totalCarrito <credito) {
   console.log('Puedo pagar')
} else if (totalCarrito < disponible) {
   console.log('Pague con ambos')
} else {
   console.log('No puedo pagar')
}


//Ternario

const logueado = true;
console.log( logueado === true ? 'Si se logueo': 'No se logueo')

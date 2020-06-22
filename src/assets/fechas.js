
//Función que no existe

// try {
//    algo()
// } catch(error) {
//    console.log(error);
// } finally {
//    console.log('No le importa, ejecuta de todos modos')
// }

// obtenerClientes();


// function obtenerClientes() {
//    console.log('Descargando....');

//    setTimeout(function() {
//       console.log('Completo')
//    },3000)
// }


//En Javascript existe un objeto llamado Data

const diaHoy = new Date();

//fecha en especifico Mes, día y año

let navidad2017= new Date('2017-12-25');
console.log(navidad2017);

//métodos con fechas en JS
let valor;
valor= diaHoy.getMonth();

//
valor=diaHoy.getDate();
valor=diaHoy.getDay(); //getDay arroja el día de la semana
//Obtener el año
valor=diaHoy.getFullYear();
//Obtener los minutos de la hora en la que se encuentra
valor=diaHoy.getMinutes();

//Hora
valor=diaHoy.getHours();

//Milisegundos desde 1970 
valor=diaHoy.getTime();

//
valor=diaHoy.setFullYear(2017); //reescribe
valor=diaHoy.getFullYear();

console.log(valor)
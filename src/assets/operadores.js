
const ciudades=['Londres','New york','Madrid','París'];
const ordenes =new Set([123,231,131,102]);

const datos =new Map();
datos.set('nombre','juan');
datos.set('profesion','desarrollador web')

console.log(ciudades);
console.log(ordenes);
console.log(datos);

//Entries iterador

for(let entrada of ciudades.entries()) {
   console.log(entrada)
}
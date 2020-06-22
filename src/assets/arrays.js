//Crear un arreglo
const numbers = [25,15,20,5];

console.log(numbers);

//Arreglo de strings 

const meses = new Array('Enero','Febrero','Marzo','Abril');

console.log(meses);


//Array mixed

const mixed= ["Hello",20,true,null,undefined]

console.log(mixed.length);

console.log(Array.isArray(mixed))

console.log(meses[1])

//Añadir valores al array
meses[4]= 'Mayo';

meses.push('Junio')
console.log(meses)

//Añadir al inicio del array
meses.unshift('Mes 0')
console.log(meses);

//Eliminar elemento del array
meses.pop();
console.log(meses)

//Eliminar elemento al comienzo del arreglo

meses.shift();
console.log(meses)

//Eliminar un rango del array
meses.splice(2,1);
console.log(meses)

//revertir
meses.reverse();
console.log(meses)

//Encontrar un elemento en el array

console.log(meses.indexOf('Abril'));


//concatenar dos arrays 

//console.log(meses.concat(numbers));

//Ordenar un arreglo
//sort() es un método que nos permite ordenar alfabeticamente
console.log(meses.sort());

//Ordenar numericamente

array1 = [2,45,98,4,7,6];

array1.sort(function (x,y) {
   return x-y;
});
console.log(array1);
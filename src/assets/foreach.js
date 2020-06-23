//Recorrer un arreglo con for each

const pendientes = ['Tarea','comer','Proyecto'];

//for 
for(let i=0;i < pendientes.length;i++) {
   console.log(pendientes[i]);
}

//for each

pendientes.forEach(function(pendientes,index) {
   console.log(`${index}:${pendientes}`)
})

//Map para recorrer un arreglo de objetos

const carrito = [
   {id:1, producto:'libro'},
   {id:2, producto:'Camisa'},
   {id:3, producto:'jeans'},
   {id:4, producto:'Tenis'}
]

const nombreProducto= carrito.map(function(carrito) {
   return carrito.producto;
})

console.log(nombreProducto);

//Imprimir con el for un objeto

const automovil = {
   modelo: 'Camaro',
   motor: 6.1,
   año: 1970
}

for(let auto in automovil) {
   console.log(`${auto}: ${automovil[auto]}`)
}
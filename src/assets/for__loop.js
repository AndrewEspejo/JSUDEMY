//Estructuras for loop

// for(let i=1;i<100;i++) {
//    console.log(`Número: ${i}`);
// }

for(let i=0;i<20;i++) {
   if (i==5) {
      console.log('Voy en el cinco')
      break;
   }
   console.log(`Número: ${i}`)
}


const arregloProductos =['Camisa','Boleto','Guitarra','Piano']
console.log(arregloProductos)
for(let i=0;i<arregloProductos.length;i++) {
   console.log(`Tu producto ${arregloProductos[i]} fue agregado`)
}
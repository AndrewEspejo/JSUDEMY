// const name ='Jeff';

// const numbers= [1,2,3];

// numbers[0]=4;
// numbers.push(5)

// console.log(numbers);

//Objetos en Javascript

const person = {
   name: 'Andi',
   lastname: 'Espejo',
   job: 'Engineer',
   email: 'jefferson.espejo@gmail.com',
   age: 24,
   music: ['pop','rock','vallenato'],
   home: {
      city: 'Medellín',
      country: 'Colombia'
   },
   fechaCumple: function() {
      return new Date().getFullYear()-this.age;
   }
}

console.log(person.fechaCumple())


//Arreglo de objetos

const autos = [
   {modelo :'Mustang', motor:6.0},
   {modelo :'Camaro', motor:8.0},
   {modelo :'Ferrari', motor:7.0},
]


for(let i=0; i<autos.length; i++) {
   console.log(autos[i])
}



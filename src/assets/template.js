//template literals 
const producto1='pizza',
      precio1= 30,
      producto2='Hamburguesa',
      precio2=40;


let html;

//antigua forma
// html=    '<ul>' +
//          '<li>Orden: ' +producto1 + '</li>' +
//          '<li>Precio: ' + precio1 + '</li>' +
//          '<li>Orden: ' +producto2 + '</li>' +
//          '<li>Precio: ' + precio2+ '</li>'  +
//          '</ul>';

//nueva forma
html= `
      <ul>
         <li> Orden: ${producto1} </li>
         <li> Precio: ${precio1} </li>
         <li> Orden: ${producto2} </li>
         <li> Precio: ${precio2} </li>
         <li> Total: ${total(precio2,precio1)} </li>
      </ul>
      `

function total(precio1,precio2) {
   return precio1 +precio2;
}




document.getElementById('template').innerHTML=html;
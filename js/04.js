//String o cadena de texto
/*const producto = 'Monitor de 20 pulgadas'
const producto2 = String('Monitor 30 pulgadas')
const producto3 = new String('Monitor de 50 pulgadas') //Esto crea un objeto

console.log(typeof producto)
console.log(typeof producto2)
console.log(typeof producto3) //typeof para saber que tipo de valor tengo*/

const tweet = 'Monitor de 20"';
const producto2 = 'Monitor HD';

console.log(tweet.length); //Con esa funcion de length se sabe la extension de cadena de texto

console.log(producto2)

//IndexOf da posicion
console.log(tweet.indexOf('de'))
console.log(producto2.indexOf('de'))

//Includes da ture o false
console.log(tweet.includes('de'))
console.log(producto2.includes('de'))
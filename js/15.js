//Array methods

const meses = ["Enero", "Febrero", "Marzo", "Abril"]; //Arreglo plano

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 600},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
]

//ForEach
meses.forEach(function(mes) {
    //console.log(meses); //For each general
    if(mes == 'Marzo') { //Estructura de control
        console.log('Marzo si existe');
    }
});

//Includes
let resultado = meses.includes('Diciembre'); //Para esto se emplea let y no const
console.log(resultado); //Esta es la otra manera//

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular Pro'
})
console.log(resultado);


resultado = carrito.some(producto => producto.nombre === 'Celular X'); //Arrow function
console.log(resultado);

//Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0); //Con todo esos umamos carrito

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //Con arrow function

//Filter
resultado = carrito.filter(function(producto) {
    return producto.precio !== 400
});

console.log(resultado);
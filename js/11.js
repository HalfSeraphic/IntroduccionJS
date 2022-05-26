//Objetos 
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}


//Forma anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;
//console.log(precioProducto)
//console.log(nombreProducto)

//Destructuring
//const {precio} = producto;
//const {nombrePoducto} = producto;//Paso por paso

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
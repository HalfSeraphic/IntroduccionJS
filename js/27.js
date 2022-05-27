//POO, clase es el general, la plantilla y el objeto es el hijo

//Object literal, es duro
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object constructor, es dinamico pero se usa poco
function Producto(nombre, precio) { //Parametros
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto('Monitor curvo de 49"', 800); //Instancia
const producto3 = new Producto('Laptop', 1200); //Instancia

console.log(producto2);
console.log(producto3);
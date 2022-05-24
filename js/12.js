'use strict'; //Corre JS en modo estricto
//Objetos 
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}

Object.freeze(producto); //Esto congela el objeto
//producto.imagen = 'imagen.jpg';

//Freeze bloquea el agregar y eliminar nuevas propiedades asi como bloquear propiedades, seal solo las dos primeras pero si modifica propiedades 
console.log(producto);
console.log(Object.isFrozen(producto)); //Nos avisa que un objeto esta congelado

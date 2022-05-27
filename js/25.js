
const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Television 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 600 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];

//For each permite entrar a cada elemento sin un loop
//carrito.forEach(producto => producto);

//Map funciona para crear nuevos arreglos
//carrito.map( producto => producto.nombre);

//For each permite entrar a cada elemento sin un loop y aparte para generar arreglos y mostrarlos
const arreglo1 = carrito.forEach(producto => console.log(producto));

//Map funciona para crear nuevos arreglos pero no imprime en consola
const arreglo2 = carrito.map( producto => producto.nombre);

//For each para iterar o mostrar en consol, map para crear un nuevo arreglo.

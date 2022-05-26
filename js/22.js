//Estructuras de control

const puntaje = 1001;

if (puntaje === 1000) { //1 igual es aginar, dos es comparar y 3 es igual, mas iguales quiere decir que checa mas especificamente
    console.log('Si el puntaje es 1000')
} else {
    console.log('No es igual')
}

const puntaje2 = 1000;

if (puntaje2 !== 1000) { //En este caso revisa que sea diferente
    console.log('No es igual')
} else {
    console.log('Si el puntaje es 1000')
}

const efectivo = 1000;
const carrito = 800;

if ( efectivo > carrito) {
    console.log('Proceder con el pago')
} else {
    console.log('Fondos insuficientes')
}

const rol = 'Editor'

if(rol === 'administrador') {
    console.log('Acceso completo');
} else if(rol === 'Editor') {
    console.log('Solo eres editor'); //Con esto se revisa una segunda condicion
} else {
    console.log('No tienes acceso');
}
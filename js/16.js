//Funciones

sumar()
function sumar() {
    console.log(10 + 10);
}

//Expresion de la funcion
const sumar2 = function() {
    console.log (3 + 3);
}
sumar2(); //Esta funcion solo se manda a llamar escribiendola despues debido a que al comenzar con CONST se considera una variable aun siendo funcion


//IIFE
(function() {
    console.log('Esto es una funcion')
})();
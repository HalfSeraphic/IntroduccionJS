sumar(10, 10)//Argumentos o valores reales
sumar(3, 13) 
sumar(10, 120) 
sumar(10, 154) 
sumar(6, 8) 
function sumar(numero1, numero2) { //1 y 2 son parametros van dentro del cuerpo de la funcion
    console.log(numero1 + numero2);
}

multiplicar(10, 10)//Argumentos o valores reales
multiplicar(3, 13) 
multiplicar(10, 120) 
multiplicar(10, 154) 
multiplicar(6, 8) 
function multiplicar(a, b) { //1 y 2 son parametros van dentro del cuerpo de la funcion
    console.log(a * b);
}

const sumar2 = function(n1 = 0, n2 = 0) {
    console.log (n1 + n2);
}
sumar2(5, 10); //
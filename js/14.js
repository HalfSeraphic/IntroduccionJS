//Arreglos o arrays, objetos con llaves y arreglos con corchetes

const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

/* console.table(meses)

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];
console.log(arreglo)

//Acceder a valores de un arreglo
console.log(numeros[2]);
console.log(numeros[4]);

//Conocer la extension de un arreglo
console.log(meses.length);

numeros.forEach( function(numeros) {
    console.log(numeros)
}) //Con este en lugar  */

// numeros[5] = 60; //Si agregas una posicion que no existe en el arreglo lo va a agregar y si ya existe lo va a modificar
numeros.push(60);
numeros.push(70);
numeros.push(2, 3, 4); //Este agrega varios elementos a la vez
numeros.unshift(-10, -20, -30); //Agrega los elementos al inicio del arreglo.
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril"); //Este es el constructor

//meses.pop(); //Elimina el ultimo elemento
//meses.shift(); //Elimina del inicio del arreglo

meses.splice(2, 1); //Selecciona un elemento en el primero numero y elimina la cantidad de elementos con el segundo a partir de ahi
console.table(meses);

//Rest operator o spread operator

const nuevoArreglo = [...meses, 'Junio']; //Modifica un arreglo a partir de uno nuevo para mantener el original, si se pone el nuevo valor antes de meses lo agrega antes
console.log(nuevoArreglo);

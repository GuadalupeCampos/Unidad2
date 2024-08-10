/*
//función para sumar dos números
//Declaración de la función
function sumar(a, b){
    let resultado = a + b;
    return resultado;
}
//Llamar a la función
console.log(sumar(12, 4));

//Otra forma de imprimirlo
// let respuesta = sumar(12, 4);
//console.log(respuesta);

console.log()

function resta(a, b){
    let resultado = a - b;
    return resultado;
}

console.log(resta(50, 20));

console.log();

//ejercicios

//multiplicar
function multiplicar(a, b){
    let resultado = a * b;
    return resultado;
}
console.log(multiplicar(5, 3));


//dividir
function dividir(a, b){
    let resultado = a / b;
    return resultado;
}
console.log(dividir(20, 2));

// Dividendo con 0
function dividir(a, b){
   if(b != 0){
    let resultado = a / b;
    return resultado;
   }
   return "ERROR: DIVIENDO CERO"
}
console.log(dividir(20, 0));
*/

let sumar = (a, b) => a + b;
console.log(sumar(20, 10));
 
let resta = (a, b) => {
    let resultado = a - b;
    return resultado;
}

console.log(resta(50, 20));

//multiplicación
let multiplicación = (a, b) => a*b;
console.log(multiplicación(10, 5));

//Dividir
let dividir = (a, b) => {
    if(b != 0){
     let resultado = a / b;
     return resultado;
    }
    return "ERROR: DIVIENDO CERO"
 }
 console.log(dividir(20, 0));




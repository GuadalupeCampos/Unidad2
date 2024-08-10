/*¡
//Ejercicio 1
//Declaramos nuestra variable (esta ira cambiando con el bucle)
let number = 0;

//Bucle while

while(number <=5){
    //Bloque de codigo a repetir
    console.log(number);
    //Incrementar la variable number 
    number++;
}

console.log("");

*/
/*
let number = 1;
while(number <=100){
  if(number  % 2 === 0){
    console.log(number);
  }
  number++;
}
*/
/*
let number = 1;
while(number <=12){
  if(number  % 2 != 0){
    console.log(number);
  }
  number++;
}
*/
//Do while
/*
let number = 12;
do{
    console.log(number);
    number++;
}while(number <=5)
*/

//Prompt
/*
let nombre = prompt('Ingresa tu nombre');
console.log(nombre);

let edad = prompt('Ingresa tu edad');
console.log(edad);
*/

//REGEX
const patron = /hola/;
// const patron = /hola[0-9]mundo/;
// const patron = /hola[0-9]+mundo/;
// const patron = /^hola$/;
// const patron = /^[0-9]+$/;
let dato;
do {
  dato = prompt('Ingresa el valor: ');
} while(!patron.test(dato));
console.log('Coincidencia');
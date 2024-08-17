
//Ejercicio 1 
//Hacer un conteo desde 135 a 36 (inclusive) de 6 en 6
/*for(let i = 135; i >= 36; i-= 6){
    console.log(i)
}
*/
//Ejercicio 2 
//llenar datos en el dom apartir de un array de animales
let mascotas = ["Perro", "gato", "loro", "hamster"];
let listaMascotas = document.getElementById("lista-mascotas");
listaMascotas.innerHTML = "";

for ( let i = 0; i < mascotas.length; i++){
    listaMascotas.innerHTML += `${mascotas[i]} <br />`;
}





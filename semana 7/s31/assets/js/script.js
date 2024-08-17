//Validador de tarjetas bancarias
// Dato: La mayoria de tarjetas tienen 16 digitos ...
function validarTarjeta(){

let alerta= document.getElementById("alerta");

alerta.innerText ="";
alerta.className="";

let numero = document.getElementById ("numero-tarjeta")


let digitosTC = numero.value;


if (digitosTC.length == 0) {

   alerta.innerText = "tarjeta invalida";
   alerta.className = "alerta-error";

   
   return false;
}
let arrTC = Array.from(digitosTC);
let arrInverso = arrTC.reverse();


let digitoPar;

for (let i = 1; i <= arrInverso.length; i += 2) {
    digitoPar = parseInt(arrInverso[i])
    digitoPar *= 2;

    if(digitoPar >= 10){
        digitoPar = digitoPar.toString();
        digitoPar = parseInt(digitoPar[0]) + parseInt(digitoPar[1])
    }
    arrInverso[i] = digitoPar.toString();
}

    let suma = 0;
    for (let i = 0; i < arrInverso.length; i++){
        suma += parseInt(arrInverso[i]);
    } if(suma % 10 == 0){
        alerta.innerText = "Tarjeta Válida";
        alerta.className = "alerta-valida";
        return true;
    } else {
        alerta.innerText = "Tarjeta inválida";
        alerta.className = "alerta-error";
        return false;
    }

}
function enmascarar(){
    let numero = document.getElementById("numero-tarjeta");
    let digitosTC = numero.value;
    let cantidadDigitos = digitosTC.length;

    if(cantidadDigitos > 4){
        let digitosEnmascarar = cantidadDigitos - 4;
    for (let i = 0; i < digitosEnmascarar ; i++){
        digitosTC = digitosTC.replace(digitosTC[i],"*");
    }
    }
    document.getElementById("svgnumber").innerHTML = digitosTC;
}

document.getElementById("btn-validar").addEventListener("click",function() {
let valida = validarTarjeta();
if(valida){
    enmascarar();
    document.getElementById("numero-tarjeta").value ="";
    this.hidden = true;
}
});

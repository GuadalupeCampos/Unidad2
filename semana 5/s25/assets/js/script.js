//ejemplo 1

//alert () sirve para mostrar un mensaje en el navegador
function mostrarMensaje(){
  //  alert('Hola desde el navegador');
  for(let i = 1; i <=10;i++){
    alert(i);
  }
}
// ejemplo 2
let texto = "";

//obtenemos el conteo como texto HTML
for(let i = 1; i <=10;i++){
  texto += `${i} <br />`;
  }
//Asignamos al elemento
document.getElementById('demo').innerHTML = texto;

//ejemplo 3
//limpiamos la variable texto
texto ="";

const autos = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//Acceder a los elementos de la lista mediante un bucle
for(let i = 0; i < autos.length; i++){
    texto += `${autos[i]} <br />`;
    }
//asignamos al elemento
    document.getElementById('autos').innerHTML = texto;

//ejemplo 4
texto ="";

//Recorrer una lista por elemento
for(let auto of autos){
    texto += `${auto} <br />`;
    }
//asignamos al elemento
    document.getElementById('autos2').innerHTML = texto;

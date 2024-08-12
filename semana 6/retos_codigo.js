  //Invertir mi arreglo
const reverse = (array) => {
  let start = 0;
  let end = array.length -1;
  while (start < end){
    let posi = array[start];
    array[start] = array[end];
     array[end] = posi;
    
    start++;
    end--;
  }
  return array;
  };
  
  module.exports = reverse;

  //Contar Vocales
  const countVowels = (str) => {
  
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    
     for (let i = 0; i < str.length; i++) {
      if (vocales.indexOf(str[i]) >= 0) {
        counter++;
      }
    }
    
    return counter;
  };

  // Función par o impar
  const evenOrOdd =(n)=>{
    if(  n != 0){
      let resultado = n % 2;
     return resultado;
    }
    return 1;
    };
    
    module.exports = evenOrOdd;

    // Numero mayo que otro
    const max = (A, B, C) => {
      let mayor;
    if(A > B && A > C) {
      mayor = A;
      return mayor;
    } if (B>A && B>C){
      mayor = B;
      return mayor;
    }
    return C;
    };
    
    module.exports = max;

    // Determinar si un numero es primo
    const isPrime = (n) => {
      if (n <= 2){
      return false ;
      }
      for( let i = 2; i<n ; i++){
      if(n % i === 0){
      return false;
      }
        }
      return true;
      };
      
      module.exports = isPrime;

    // Puedes conducir y votar?
    const canDriveAndVote = (edad) => {
      return edad >= 18;
      };
      console.log(canDriveAndVote(15));
      console.log(canDriveAndVote(16)); 
      console.log(canDriveAndVote(17));
      console.log(canDriveAndVote(18)); 
      console.log(canDriveAndVote(20));
      module.exports = canDriveAndVote;

    // Determinar si dos numeros son pares
    const areOdd = (n, m)=> {
      if (n % 2 === 0 && m % 2 === 0) {
      return true;
      } else {
      return false;
      }
      };
      module.exports = are0dd;

// de la actividad 1
//import firstLaboratoryProblem from  "./problems/firstLaboratoryProblem";
//firstLaboratoryProblem();

//de la actividad 2 para adelante
//import main from "./problems/destructuring";
//main();


//actividad 4 desafios

//ejercicio 1

function orderDesc(Numeros){
  return "El digito en orden desendente es  "+Numeros.split('').sort((a,b)=>b-a).join('');
}
console.log(orderDesc("42145"));
console.log(orderDesc("145263"));
console.log(orderDesc("987654321"));

//ejercicio 2 de actividad 4
function findNextSquare(n){
    let valor1;
    let valor2;
    if(Math.sqrt(n)%1 ===0){
         valor1=Math.sqrt(n)
         valor2=valor1+1
    }else{
        return "el cuadrado siguiente no existe: "+-1;
    }
    return "cuadrado siguiente es : "+valor2*valor2;
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114)); 



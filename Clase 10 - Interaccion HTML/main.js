/*  console.log(window);
alert("Hola Nucbers")    //Solo tiene un okey y es un alerta
prompt("Introduce algo que pienses") // Es como un imput
confirm("Estas seguro ser programador?") // Es como un alert pero con cancel y aceptar */

//? Para hacer number un prompt es parseInt(prompt("10"))
//? getElementsByClassName -> Devuelve un Array
//? getElementsByID -> Devuelve un elemento


function prueba(){
   let num1 = parseInt(prompt("Escribe un numero"))
   let num2 = parseInt(prompt("Escribe otro numero"))
   console.log(num1 + num2);
   /* document.getElementById("resultado").innerHTML = num1 + num2  */
   document.getElementsByClassName("resultado")[0].innerHTML = num1 + num2 
}


prueba()
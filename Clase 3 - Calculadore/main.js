                                    /* Calculadora */

// Calculadora que reciba 2 numeros y el tipo de operación aritmética

const calculator = (num1, num2, operation) => {
    /*  if (!num1 || !num2){                     ACA SE REPRESENTA CON LOS IF Y ELSE IF
         console.log("Ingrese números")
     }
     else if (operation === "sumar"){
         console.log(num1 + num2)
     }
     else if (operation === "restar"){
         console.log(num1 - num2)
     }
     else if (operation === "multiplicar"){
         console.log(num1 * num2)
     }
     else if (operation === "dividir"){
         console.log(num1 / num2)
     }
     else {
         console.log("Operación invalida")
     } */
     
     switch(operation){
         case "sumar":
             console.log(num1 + num2)
             break;
         case "restar":
             console.log(num1 - num2)
             break;
         case "multiplicar":
             console.log(num1 * num2)
             break;
         case "dividir":
             console.log(num1 / num2)
             break;
         
         default:
             console.log("Operación invalida")
     }
 }
 
 calculator(10, 20, "sumar") 
 calculator(10, 20, "restar") 
 calculator(10, 20, "multiplicar") 
 calculator(10, 20, "dividir") 
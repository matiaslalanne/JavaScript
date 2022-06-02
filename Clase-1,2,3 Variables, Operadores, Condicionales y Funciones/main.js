/* Primer opcion de declarar una variable */
var nombre ="Luis";

console.log(nombre)

/* Segunda opcion de declarar una variable */
apellido = "Lopez"

console.log(apellido)
console.log(nombre, apellido,)

/* Tercer opcion de declarar una variable */
let nombre2 = "Luis" /* Puede mutar */
const nombre3 ="luis" /* No se puede mutar, es constante*/


            /* Tipos de Datos: Number, String, Boolean and Undefined */

                                    /* Dato Booleano */
console.log(2+2 == 4)
var verdad = true;
var mentira = false;

                                    /* Dato Number */
let edad = 35;

                                    /* Dato String */

var word ="Luis"

console.log(word)

                                    /* Dato Undefined */

var nucba

console.log(nucba)

                                     /* Operadores */

                /* Aritmeticos --> sumar, restar, dividir y multiplicar */

var num1 = 10
var num2 = 20

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

/* Type Of */

console.log(typeof num1)

                                    /* Booleano */
/* Ejemplo */
var esVerdad = true;
var esMentira = false;

                            /* Operador Booleano de negación (!, !!) */
const nucba007 = 38
console.log(!nucba007) /* Le pregunto si el dato es lo contrario, osea si NO es un numero */

console.log(!esVerdad) /* El símbolo "!" hace lo contrario a la variable */

const valor1 = 2

                        /* Identidad o Igualdad (=== , !== , == ) */

console.log(2 + 2 === 4) /* Si es exactamente igual */
console.log(2 + 2 !== 4) /* Si es diferente a 4 */
console.log(2 + 2 == 4) /* Si el valor es igual solamente */

                            /* Comparación (> , <, >= , <=) */

const comparador = () => {
    if(valor1 == 2){
        console.log("Que te pasa soy verdadero")
    } else{
        console.log("Soy falso")
    }
}
console.log(comparador())

/*Ejemplos comparacion */
console.log(5 > 3)
console.log(5 < 3)
console.log(5 >= 3)
console.log(5 <=3)

                        /* Operadores Lógicos --> and (&&) o or (||) */

/* And (Se tienen que cumplir las 2, sino es falso) */

console.log( 2 + 2 === 4 && 5 + 2 === 7)

/* Or (Compara que alguna de las 2 operaciones se cumpla) */

console.log( 2 + 2 === 4 || 5 + 2 === 7)

                            /* Condicionales */

/* If */
const condicionalIf = () => {
    if(10 + 10 === 20){
        console.log("Eso es cierto")
    }
    
}

console.log(condicionalIf())

/* If Else */

const condicionalIfElse = () => {
    if(10 + 10 === 20){
        console.log("Eso es cierto")
    } else{
        console.log("Valor invalido")
    }
    
}
console.log(condicionalIfElse())

/* If else If */

const condicionalIfIelseElse = () => {
    if(10 + 10 === 1000){
        console.log("Eso es cierto")
    } else if (10 + 10 === 1){
        console.log("Valor invalido")
    } else {
        console.log("No sabes nada")
    }
    
}
console.log(condicionalIfIelseElse())

/* Ternario */

const ternario = 10 + 10 === 20? console.log("Esta ok") : console.log("No esta bien")
/* El simbolo ? sería el IF y el simbolo : el Else */
console.log(ternario)

/* Concatenación */

const cinco = "5"
console.log(`5 no es esto ${cinco}`)
console.log(`5 no es esto` + cinco)

                                    /* Funciones */

/* Old School Funtion */

function saludar(name){
    return console.log(`Hola ${name} `)
}

saludar("luis") 
saludar("Esteban") 
saludar("Rosa") 

/* Ecma 6 en adelante */
// Arrow Functions

const chau = (name, lastname) => {
    return console.log(`Hola ${name} ${lastname} `)
} 
chau(`agustin`, `pereyra`)

/* Call Back (Devolver varias funciones) */

const despedida = message => {
    let result;
    return result = message
}

const presentacion = (name, message) => {
    let part1 = saludar(name)
    let part2 = despedida(message)

    return `${part1} ${part2}`
}

presentacion(`Luis`, `Hasta luego, vuelva pronto`) 


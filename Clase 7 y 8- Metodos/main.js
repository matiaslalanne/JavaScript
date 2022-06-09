                            // ! Metodos Number 


/* ParseInt */
const tranformar = parseInt(`1111`)

console.log(typeof tranformar)

/* ParseFloat */

console.log(parseFloat("5e3"))

/* ToFixed --> redondea segun la cantidad de decimales que le digas a mayor*/

const n = 2.5674
console.log(n.toFixed(2)) 

/* Math --> Resumir calculos matematicos complejos */

console.log(Math.random(10))

console.log(Math.max(5,9,1))

/* Arrays */

const myArrays = [1,2,3,4,5,6] 

console.log(myArrays[0])

const myArray = [{nombre : "Luis"}, {apellido : "Salazar"}, {edad : 35}]
console.log(myArray[0].nombre)

                            // ! Arrays Metodos 

// Sort, Push, Filter, Find, Revers, Map, Join, Slice

//El metodo Sort ordena numeros en el array
console.log(myArrays.sort()) 

//El metodo Push Agrega un nuevo elemento en el array
console.log(myArrays.push(7), myArrays) 

//El metodo Filter, filtrar o buscar elementos dentro de un array
const myArray1 = [{nombre : "Luis"}, {nombre : "Pepe"}, {nombre : "Jose"},{nombre : "Rober"}]
console.log(myArray1.filter(item => item.nombre === "Pepe")) 

//El metodo Find, filtrar y buscar elementos dentro de un array
console.log(myArray1.find(item => item.nombre === "Pepe")) 

// El metodo Reverse, intercambia el orden del array

console.log(myArrays.reverse())

// El metodo Maps, recorrer un array de objetos para manipular la data - Devuelve un array
console.log(myArray.map(item => item.edad + 10))

// El metodo Slice, devuelve segun la posicion que tienen
console.log(myArrays.slice(0,2))

// el metodo Map recorre cada uno de los elementos y va a hacer algo

const mapArrays = () => {
    myArrays.map(item => {
        return console.log(item * 2)
    })
}

mapArrays() 

const numbers = [10, 11, 12, 13, 14, 15]

// El metedo Concat - une dos arrays

const numbersComplete = myArrays.concat(numbers)
console.log(numbersComplete);

// El metodo Join agrega lo que quieras entre medio de cada variable, es decir, une todo

const joinExample = [ "hola",  "chau" , "Como va"]
console.log(joinExample.join(","));

                                    // ! Metodos para Strings

const nucba = "Nucba es un instituto"
const saludoGlobal = "Hola como estas my friend"
console.log(nucba[0]);

console.log(nucba.length > 10);

console.log(nucba.substring(1,3)); //Es como el Slice de los numbers

console.log(nucba.split(" ")); // te devuelve un array y te lo devuelve con lo que le pidas

console.log(saludoGlobal.split(" "));

console.log(saludoGlobal.substring(4));
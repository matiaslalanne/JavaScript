/* JSON (JavaScript Object Notation) */

const person = {
    "name" : "Luis Salazar",
    "age" : 35,
    "addres" : "Versalles, Caba",
    "Career" : "Software Engineer",
    "Homebanking" : {
        "banco" : "Santander",
        "cash" : {
            "dolares" : 100,
            "pesos" : 0 ,
        }
    }
}

console.log(person)
console.log(Object.values(person))
console.log(Object.keys(person))


const objetIteracion = () => {
    for(let item in person){
        //console.log(item) /* Este accede a las Keys de Person */
        console.log(`${person[item]}`) /* Este accede a los valores de Person */
    }
}

objetIteracion()



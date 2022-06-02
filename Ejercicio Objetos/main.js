                        /* Supermercado */

let supermarket = [
    "verduras",
    "frutas", 
    "limpieza", 
    "carne", 
    "golosinas", 
    "baño", 
    "snaks", 
    "perfumeria", 
    "lacteos", 
    "electronica",]

/* 1-. ¿Qué tenés que comprar primero? */

console.log(`El tipo de producto que tenes que comprar primero es de ${supermarket[0]}`)

/* 2. ¿Qué tenés que comprar último? */

console.log(`El tipo de producto que tenes que comprar último es de ${supermarket[9]}`)


/* 3. ¿Cuántos productos tenés que comprar? */

console.log(`La cantidad de productos que tenes que comprar son ${supermarket.length}`)


                            /* Datos de mi usuario */

let user = {
    "Username" : "Matilalanne",
    "Name" : "Matias",
    "Age" : 25,
    "Hobbies" : [
        "programacion ",
        "tenis ",
        "y futbol",
    ],
    "City" : "Versalles",
    "Student" : true,
}

console.log(user)


/* 1.¿Cómo es tu username? */

console.log(`Mi username es ${user["Username"]}`)

/* 2. ¿Cómo es tu nombre? */

console.log(`Mi nombre es ${user["Name"]}`)

/* 3. ¿Cuál es tu edad? */
 
console.log(`Mi edad es ${user["Age"]} años`)

/* 4. ¿Cuáles son tus hobbies? ¿Cuántos tenés? */

console.log(`Mis hobbies son ${user["Hobbies"]} y en total son ${user["Hobbies"].length} hobbies.`)

/* 5. ¿Estás estudiando actualmente? */

const estudiante = () => {
    if (user["Student"]){
        console.log(`Si, estoy estudiando la carrera de programacion`)
    }
    else{
        console.log(`No, no estoy estudiando actualmente`)
    }

}
console.log(estudiante())

/* 6.  ¿De dónde sos? */

console.log(`Yo soy de ${user["City"]}`)



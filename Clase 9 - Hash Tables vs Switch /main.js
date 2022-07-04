/* const enemigo = "Iron-Man" */
/* let loki  */

//? Haciendolo con IF
/* if (adversario === "Iron-Man") {
    loki = "Thanos"
} else if (adversario === "Thor"){
    loki = "Odin"
} else if (adversario === "Hulk"){
    loki = "Spider-Man"
} else if(adversario === "Wolverine"){
    loki = "Magneto"
} */

//? Haciendolo con Switch-Case
/* switch(adversario){
    case "Iron-Man":
        loki ="Thanos"
        break;
    
    case "Thor":
        loki = "Odin"
        break;
    
    case "Hulk":
        loki = "Spider-Man"
        break;
    
    case "Wolverine":
        loki = "Magneto"
        break;

    default:
         loki = "loki"
} */
// Hasta aca vimos 2 formar de cambiarle el disfraz a loki con estos 2 condicionales

                            
                                    //* Hash Tables
const enemigo = "Iron-Man"
//?Ahora vamos a crear un objeto con los disfraces
const loki_disfraces = {
    "Iron-Man" : "Thanos",
    Thor : "Odin",
    Hulk : "Spider-Man",
    Wolverine : "Magneto",
}

const loki_default_disfraz = "loki"
const loki = loki_disfraces[enemigo] ? loki_disfraces[enemigo] : loki_default_disfraz // es un ternario
//? La estructura es loki = 1 ? 2 : 3 --> 1(esto existe?) 2(entonces esto) 3(si existe pero no coincidde, va esto)


/* const loki = loki_disfraces[adversario] || loki_default_disfraz */ //Es otra opcion
//! Cuando pone loki_disfraces[adversario] esta iterando un objeto sin necesidad de un IF
console.log(loki);

//? Arrow Funcion
const lokiEnemies = (lokiDisfraces, enemigo) => {
    const loki_default_disfraz = "loki"
    let loki
    
    loki = lokiDisfraces[enemigo] ? lokiDisfraces[enemigo] : loki_default_disfraz

    return loki
}
console.log(lokiEnemies(loki_disfraces, "Hulk"));





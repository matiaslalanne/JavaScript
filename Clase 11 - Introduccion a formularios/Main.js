/* addBg = () => {
   const cuadrado = document.getElementById("cuadrado")
   cuadrado.classList.add("extra")
}

ResetBg = () => {
   const cuadrado = document.getElementById("cuadrado")
   cuadrado.classList.remove("extra")
} */
const cuadrado = document.getElementById("cuadrado")

updateBg = (reset) => {
    
    if(reset){
        cuadrado.classList.remove("extra")
    } else{
        cuadrado.classList.add("extra")
    }
    /* Opcion ternario
    reset ? cuadrado.classList.remove("extra") :
    cuadrado.classList.add("extra")
    */
}


// Form


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

myForm = (event) => {
    event.preventDefault();
    let name =  document.getElementById("nombre").value;
    let lastname =  document.getElementById("apellido").value;
    let email =  document.getElementById("email").value;
    
    /* if(!name || !lastname || !email){
        name.classList.add("error")
        lastname.classList.add("error")
        email.classList.add("error")

    } */
    return !name.value ? name.classList.add("error") : null

} 
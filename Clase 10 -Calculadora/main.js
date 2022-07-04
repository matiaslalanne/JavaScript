calculadora = () => {
    let numAction = prompt("¿Que operación aritmética queres hacer?")
    let num1 = parseInt(prompt("Ingresa el primer numero"))
    let num2 = parseInt(prompt("Ingresa el segundo numero"))

    if(numAction === "sumar" || numAction === "+"){
        document.getElementById("resultado").innerHTML = num1 + num2
    } 
    else if(numAction === "restar" || numAction === "-"){
        document.getElementById("resultado").innerHTML = num1 - num2
    } 
    else if(numAction === "multiplicar" || numAction === "*"){
        document.getElementById("resultado").innerHTML = num1 * num2
    } 
    else if(numAction === "dividir" || numAction === "/"){
        document.getElementById("resultado").innerHTML = num1 / num2
    } 
    else{
        alert("Por favor ingresa números de forma correcta o una operación válida!")
    }
}


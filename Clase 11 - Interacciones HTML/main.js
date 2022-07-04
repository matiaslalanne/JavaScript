mySelect = () =>{
    const x = document.getElementById("mySelect").value
    document.getElementById("resultado").innerHTML = x
    
}

input = () => {
    let inputValue = document.getElementById("input")
    inputValue.value = inputValue.value.toUpperCase()
}

const selectElement = document.querySelector('.helado')

selectElement.addEventListener('change', (event) =>{
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = event.target.value
})
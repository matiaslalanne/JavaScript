// * NOMBRE Y OPERACIONES:

/* const nombre = prompt("Cual es tu nombre")
alert("Tu nombre es " + nombre)

let numero = prompt("Elige un numero y se sumaran 5")
let total = parseFloat(numero) + 5

alert("Elegiste el número " + total)

let numero2 = prompt("Elige un numero y se restaran 7")
let total2 = parseFloat(numero2) - 7

alert("Elegiste el número " + total2)

let numero3 = prompt("Ahora elegi otro numero")
let numero4 = prompt("Y este numero se sumara al anterior")
let total3 = parseFloat(numero3) + parseFloat(numero4)
alert("El total de los dos numeros es " + total3)  */

//* SINTAXIS Y VARIABLES: CALCULADORA

/* alert("Vamos a crear una calculadora")

const num1 = prompt("Ingrese un primer valor a la calculadora")
const num2 = prompt("Ingrese un segundo valor a la calculadora")

alert("Ahora te vamos a mostrar los resultados de los dos valores segun suma, resta, multiplicacion y division")

let sumaNum = parseFloat(num1) + parseFloat(num2)
let restaNum = parseFloat(num1) - parseFloat(num2)
let multiplicacionNum = parseFloat(num1) * parseFloat(num2)
let divisionNum = parseFloat(num1) / parseFloat(num2)

alert("El resultado entre el primer numero mas el segundo es " + sumaNum)
alert("El resultado entre el primer numero mas el segundo es " + restaNum)
alert("El resultado entre el primer numero mas el segundo es " + multiplicacionNum)
alert("El resultado entre el primer numero mas el segundo es " + divisionNum) */

//*  DÍAS DE LA SEMANA:

/* const DiasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]


for(item = 0; item < DiasSemana.length; item++){ 
   if(DiasSemana[item] === "Sabado"  || DiasSemana[item] === "Domingo"){
       console.log("Es findesemanuki");
   }
   else{
       console.log("Es Semanuki");
   }
    }
     */


//* NTEGRADOR FÁCIL:

/* const dia = prompt("Ingrese un día de la semana: ")

for(item = 0; item < dia.length; dia++){
       if(dia === "Lunes"){
           alert("El día es hábil.")
       }
       else if (dia === "Martes"){
           alert("El día es hábil")
       }
       else if(dia === "Miercoles"){
        alert("El día es hábil")}
       else if(dia === "Jueves"){
        alert("El día es hábil")}
       else if(dia === "Viernes"){
        alert("El día es hábil")}
       else if(dia === "Sabado"){
        alert("El día es fin de semana")}
       else if(dia === "Domingo"){
        alert("El día es fin de semana")}
    
        else{
            console.log("Ingrese un día valido");
        }
      
    }
    */
//? Otra forma de resolver este ejercicio es asi:
/* let diaIngresado = prompt("Ingrese un día");

const semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const diasArray = () =>{
    for(let dia = diaIngresado; dia != 1; dia++){
        if(dia === semana[0] || dia === semana[1] || dia === semana[2] || dia === semana[3] || dia === semana[4]){
            return console.log("El día es hábil");
            break;
        }
        else if (dia === semana[5] || dia === semana[6]){
            return console.log("El día es fin de semana.");
            break;
        }
        else {
            console.log("Ingrese un día por favor");
            break;
        }
    }
}
  */

//* PEQUEÑAS FUNCIONES:

/* nombreApellido = () =>{
    const nYa = prompt("Ingrese su nombre y apellido");
    return console.log(`El nombre y apellido es ${nYa}`);
}

nombreApellido()  */

/* diasSemana = () => {
    const habiles = ("Lunes, Martes, Miercoles, Jueves y Viernes")
    const inhabiles = ("Sabado y Domingo.") 
    return console.log(`Los días habiles son ${habiles} y los días inhábiles son ${inhabiles}`);
}

diasSemana()
 */

//* CREAR UN ARRAY DE PELÍCULAS:

/* 

let peliculas = [
    peli1 = {
        ID: 2,
        Titulo: "Tarzan"
    }
]

//! Funcion para añadir pelicula nueva OK
añadir = () => {
    peliculas.push(peli2 = {ID: 1, Titulo: "Rey leon"})
}

añadir() */



//! Funcion de evaluar si se repiten (NO OK)

/* peliAgregar = [
    pelinueva = {
        ID: 3,
        Titulo: "Nemo"
    }
]

evaluar = () => {
    if(peliculas[0].Titulo === peliAgregar[0].Titulo){
        console.log("La pelicula ya fue agregada");
    }
    else if(peliculas[1].Titulo === peliAgregar[0].Titulo){
        console.log("La pelicula ya fue agregada");
    }
    else{
        peliculas.push(pelinueva)
    }
}

evaluar() */


//! Crear una función que ordene las películas por Título y por ID
/* 
ordenTitulo = [
    peliculas[0].Titulo,
    peliculas[1].Titulo,
    peliculas[2].Titulo,
]

funcionOrdenTitulo = () => {
    ordenTitulo.sort();
    console.log(ordenTitulo);
}

funcionOrdenTitulo()

ordenID = [
    peliculas[0].ID,
    peliculas[1].ID,
    peliculas[2].ID,
]

funcionOrdenID = () => {
    ordenID.sort();
    console.log(ordenID);
}

funcionOrdenID()

console.log(peliculas); */

//! Crear una funcion que elimine por ID
/* const IDEliminar = 1;

eliminarID = () => {
    const index = peliculas.findIndex( x => x.ID === IDEliminar );

    peliculas.splice( index, 1 );
    console.log( peliculas );
}

console.log(peliculas);

eliminarID() */

//* PEQUEÑAS FUNCIONES:

//! Funcion que pida nombre y apellido y lo muestre en consola

/* nombreYapellido = () => {
    let nombre10 = prompt("Ingrese su nombre y apellido");
    console.log("Su nombre y apellido es: " + nombre10);
}

nombreYapellido()  */

//! función que en base a un parámetro muestre los días hábiles o de fines de semana en consola.

/* parametrosSemana = () => {
    alert("Queres saber que dias son habiles y cuales de semana?")
    let parametros11 = prompt("Ingrese 1 para días habiles y 2 para fin de semana:")
    if(parametros11 === "1"){
        console.log("Los días hábiles son: Lunes, Martes, Miercoles, Jueves y Viernes");
    }
    else if(parametros11 === "2"){
        console.log("Los días de fin de semana son: Sabado y Domingo");
    }
    else{
        console.log("Ingrese un número correcto");
    }

} 

parametrosSemana() */

//* MEJORAR LA CALCULADORA SEPARANDO EN FUNCIONES CADA OPERACIÓN:

calculadoraPro = () => {
    alert("Vamos a hacer cuentas matematicas");
    num1 = prompt("Ingrese el primer valor.");
    numberNum1 = Number(num1)
    num2 = prompt("Ingrese el segundo valor.")
    numberNum2 = Number(num2)
    alert("Para sumar los valores ingrese `+`, para restar `-`, para multiplicar `*` y para dividir `/`")
    operacion = prompt("Ingrese el tipo de operacion.")
    
    sumar = () =>{
        console.log(numberNum1 + numberNum2);
    
    }
    restar = () =>{
        console.log(numberNum1 - numberNum2);
    }
    multiplicar = () =>{
        console.log(numberNum1 * numberNum2);
    }
    dividir = () =>{
        console.log(numberNum1 / numberNum2);
    }

     if(operacion === "+"){
        console.log(sumar());
    } 
     else if(operacion === "-"){
        console.log(restar());
    } 
     else if(operacion === "*"){
        console.log(multiplicar());
    } 
     else if(operacion === "/"){
        console.log(dividir());
    } 
    else{
        console.log("Ingresaste todo mal!");
    }
    
    
}

calculadoraPro()    






// Mover un robot durante 4 instrucciones ( UP - DOWN - LEFT - RIGHT)
// La función que ayudara al robot debe recibir los parametros de movimiento Eje: robot(`RRLLDDUU`)
// La función debe avisarme cuando el robot regrese a su punto inicial

const robot = moves => {
    let initialPositionY = 0
    let initialPositionX = 0

    for( let i = 0; i < moves.length; i++){
        if(moves[i] === "U"){
            initialPositionY = initialPositionY + 1;
        }
        else if(moves[i] === "D"){
            initialPositionY = initialPositionY - 1;
        }
        else if(moves[i] === "R"){
            initialPositionX = initialPositionX +1
        }
        else if(moves[i] === "L"){
            initialPositionX = initialPositionX -1
        }
        else{
            console.log("Datos incorrectos");
        }
    }

    return initialPositionY === 0 && initialPositionX === 0 && console.log("Estas en el punto inicial");
}

console.log(robot(`RRLLDDUU`));

prompt()
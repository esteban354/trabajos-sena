function lanzarDado() {
    return Math.floor(Math.random() * 4) + 1;
}

let numero = lanzarDado()

switch(true){
    case numero == 1:
        console.log("Su numero es 1")
    break

    case numero == 2:
        console.log("Su numero es 2")
    break

    case numero == 3:
        console.log("Su numero es 3")
    break

    default:
        console.log("Su numero es 4")
    break
}
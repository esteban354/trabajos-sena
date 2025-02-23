function lanzarDado() {
    return Math.floor(Math.random() * 4) + 1;
}

let numero = lanzarDado()


if (numero == 1){
    console.log("Su numero es 1")
}else if (numero == 2){
    console.log("Su numero es 2")
}else if (numero == 3){
    console.log("Su numero es 3")
}else{
    console.log("Su numero es 4")
}
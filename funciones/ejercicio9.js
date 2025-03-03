function lanzarDado() {
    return Math.floor(Math.random() * 4) + 1
}

function obtenerMensaje(numero) {
    return `Su número es ${numero}`
}


let numero = lanzarDado()
console.log(obtenerMensaje(numero))




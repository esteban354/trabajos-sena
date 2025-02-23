let colorsemaforo = "rojo"
let intervalo = null

function actualizarSemaforo() {
    let mensaje = colorsemaforo === "verde" ? "🟢" : colorsemaforo === "amarillo" ? "🟡" : "🔴"
    document.getElementById("mensaje").innerText = mensaje
}

function cambiarSemaforo() {
    if (colorsemaforo === "rojo") {
        colorsemaforo = "amarillo"
    } else if (colorsemaforo === "amarillo") {
        colorsemaforo = "verde"
    } else {
        colorsemaforo = "rojo"
    }
    actualizarSemaforo()
}

function toggleAuto() {
    if (intervalo) {
        clearInterval(intervalo)
        intervalo = null;
    } else {
        intervalo = setInterval(cambiarSemaforo, 5000);
    }
}

actualizarSemaforo()
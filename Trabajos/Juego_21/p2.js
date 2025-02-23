function lanzar() {
    return Math.floor(Math.random() * 10) + 1
}

function jugarTurno(jugador, total) {
    let respuesta = prompt(`¿Jugador ${jugador}, deseas seguir jugando? (si/no)`).toLowerCase()
    if (respuesta === "si"){
        total += lanzar()
        if (total > 21) {
            alert(`Jugador ${jugador} perdió por superar los 21 puntos.`)
            return 0
        }
    }
    return total
}

function iniciarJuego() {
    let j1T1 = lanzar()
    let j1T2 = lanzar()
    let totalJ1 = j1T1 + j1T2

    let j2T1 = lanzar()
    let j2T2 = lanzar()
    let totalJ2 = j2T1 + j2T2

    alert(`primer turno:\nJugador 1:${j1T1}\nJugador 2: ${j2T1}`)
    alert(`Segundo turno:\nJugador 1:${j1T2}\nJugador 2: ${j2T2}`)
    alert(`Puntaje inicial:\nJugador 1: ${totalJ1}\nJugador 2: ${totalJ2}`)

    totalJ1 = jugarTurno(1, totalJ1)
    totalJ2 = jugarTurno(2, totalJ2)

    if (totalJ1 > 0 && totalJ2 > 0) {
        let mensaje = alert(`El puntaje total del primer jugador fue de ${totalJ1}\nEl puntaje total del segundo jugador fue de ${totalJ2}`)
        if (totalJ1 > totalJ2) {
            mensaje += alert("¡Jugador 1 gana!")
        } else if (totalJ2 > totalJ1) {
            mensaje += alert("¡Jugador 2 gana!")
        } else {
            mensaje += alert("¡Jugador 1 gana!")
        }
    }
}
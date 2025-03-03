function estadoLinterna(encendido) {
    if (encendido === false) return "Su linterna está apagada";
    if (encendido === true) return "Su linterna está encendida";
    return "Su linterna está dañada";
}

console.log(estadoLinterna(true))



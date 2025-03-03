function obtenerModelo() {
    return Number(prompt("Ingrese el modelo de su automóvil").trim())
}

function verificarDefecto(modelo) {
    let modelosDefectuosos = [179, 119, 189, 190, 191, 192, 193, 194, 195, 221, 780]
    return modelosDefectuosos.includes(modelo) ? "Su modelo de automóvil es defectuoso" : "Su modelo de automóvil está bien"
}

function ejecutarVerificacion() {
    let modelo = obtenerModelo()
    alert(verificarDefecto(modelo))
}

ejecutarVerificacion()

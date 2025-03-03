function verificarCredenciales(tipoDoc, numDoc, pass, tipoIngresado, numIngresado, passIngresado) {
    return tipoDoc === tipoIngresado && numDoc === numIngresado && pass === passIngresado
        ? "Bienvenido a la página del SENA"
        : "Acceso denegado"
}

console.log(verificarCredenciales("T.I", "1094912060", "101723", "T.I", "1094912060", "101723"))

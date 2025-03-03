function verificar(tipoDocumento, numeroDocumento, contraseña) {
    return tipoDocumento === "T.I" && numeroDocumento === "1094912060" && contraseña === "101723" 
        ? "Sus datos son correctos" 
        : "Sus datos son incorrectos"
}

console.log(verificar("T.I", "1094912060", "101723"))

function generarEdad() {
    return Math.floor(Math.random() * 60) + 1
}

function verificarEdad(edad) {
    return edad <= 18 ? "Usted es menor de edad" : "Usted es mayor de edad"
}

console.log(`Edad generada: ${generarEdad()}`)
console.log(verificarEdad(edad))

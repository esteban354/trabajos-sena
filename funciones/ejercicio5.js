function verificarNumero(numero) {
    if (numero === "3" || numero === "1.5") {
        return `El número ${numero} es impar`
    } else if (numero === 2) {
        return "El número es par"
    } else {
        return "El número es de otro tipo"
    }
}

console.log(verificarNumero(2))

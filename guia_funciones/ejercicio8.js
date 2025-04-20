function calcularPotencia(base, exponente) {
    let resultado = 1
    for (let i = 0; i < exponente; i++) {
        resultado *= base
    }
    return resultado
}
console.log(calcularPotencia(2, 3))

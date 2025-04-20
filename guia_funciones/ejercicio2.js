function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) 
        return false
    }
    return true
}

console.log(esPrimo(5))


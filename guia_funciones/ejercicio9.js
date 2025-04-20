function esPalindromo(numero) {
    let str = numero.toString()
    let invertido = ''
    for (let i = str.length - 1; i >= 0; i--) {
        invertido += str[i]
    }

    if (str === invertido) {
        return true
    } else {
        return false
    }
}

console.log(esPalindromo(434))
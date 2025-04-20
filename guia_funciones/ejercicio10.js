function sumaDivisores(numero) {
    let suma = 0
    for (let i = 1; i < numero; i++) { 
        if (numero % i === 0) { 
            suma += i
        }
    }
    return suma
}

console.log(sumaDivisores(12))


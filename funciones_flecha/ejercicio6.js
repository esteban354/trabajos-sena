let sumaImpares = n => {
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i
    }
    return suma
}

console.log(sumaImpares(4))
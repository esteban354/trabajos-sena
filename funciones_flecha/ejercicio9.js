let sumaPares = n => {
    let suma = 0
    for (let i = 2; i <= n; i += 2) {
        suma += i
    }
    return suma
}

console.log(sumaPares(8))
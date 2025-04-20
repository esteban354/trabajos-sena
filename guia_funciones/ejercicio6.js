function calcular(a, b) {
    while (b !== 0) { 
        let c = b 
        b = a % b         
        a = c
    }
    return a
}

console.log(calcular(150, 50))
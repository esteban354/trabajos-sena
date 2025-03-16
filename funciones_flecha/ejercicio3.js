const sumaDigitos = num => {
    const numString = Math.abs(num).toString()
    let suma = 0
    
    for (let i = 0; i < numString.length; i++) {
        let digito = parseInt(numString[i], 10)
        suma += digito
    }
    
    return suma
};

console.log(sumaDigitos(4))    
console.log(sumaDigitos(-67))
console.log(sumaDigitos(0))
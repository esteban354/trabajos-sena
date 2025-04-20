function calcularFactorial(numero){
    let factorial = 1
    for (let i = 2; i <= numero; i++){
        factorial *= i 
    }
    console.log(`El factorial de ${numero} es de ${factorial}`)
}
calcularFactorial(5)


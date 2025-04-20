function sumaDigitos(numero){
    let digito = 1
    for (let i = 0; i <= numero; i++) {
        digito+= i
    }
    console.log(digito)
}

sumaDigitos(4)
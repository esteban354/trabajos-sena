while(true){
    
    let numero = Number(prompt("Ingrese el numero"))
    let deter = numero % 2

    switch(true){
        case deter == 0:
            alert("El numero es par")
        break

        case deter == 1:
            alert("El numero es impar")
        break

        default:
            alert("Valor ingresado incorrecto")
        break
    }
}

while(true){
    let numero = Number(prompt("Por favor ingrese un numero"))
    let deter = numero % 2

    switch(true){
        case deter = 0:
        alert("El numero es par")
        break
        case deter = 1:
        alert("El numero es impar")
        break
        default:
        alert("ocurrio un error")
        break
    }
}
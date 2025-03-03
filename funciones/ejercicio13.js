function determinar(numero){
    return numero % 2 == 0 ? alert("el numero es par") : alert("el numero es impar")
} 

determinar(
    numero = prompt("Ingrese un numero")
)
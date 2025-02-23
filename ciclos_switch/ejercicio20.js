do {     
    let n1 = Number(prompt("Ingrese el primer angulo"))
    let n2 = Number(prompt("Ingrese el segundo angulo"))
    let n3 = Number(prompt("Ingrese el tercer angulo"))

    let sum = n1 + n2 + n3
    switch(sum){
        case 180:
            alert("La suma de los tres ángulos es igual a 180")
        break

        default:
            alert("La suma de los tres ángulos no es igual a 180")
        break
    }
} while (true)

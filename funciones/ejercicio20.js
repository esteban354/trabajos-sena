function preguntar(numero){
    return parseInt(prompt(`Ingrese el ${numero}`))
}

function definirTriangulo(){
    numero = ["primer numero", "segundo numero", "tercer numero"]
    suma = preguntar(numero[0]) +  preguntar(numero[1]) +  preguntar(numero[2])

    sum == 180 ? alert("La suma de los tres ángulos es igual a 180") : 
    alert("La suma de los tres ángulos no es igual a 180")
}

definirTriangulo()
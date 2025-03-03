function preguntar() {
    let copias = Number(prompt("Ingrese el número de copias"))
    return copias <= 0 ? null : copias
}

function calcularPrecio(valor) {
    let precioPorCopia;
    
    if (valor < 499) precioPorCopia = 120
    else if (valor < 749) precioPorCopia = 100
    else if (valor < 999) precioPorCopia = 80
    else precioPorCopia = 50
    
    let total = valor * precioPorCopia
    alert(`El precio total sería $${total}`)
}

let copias = preguntar()
calcularPrecio(copias)

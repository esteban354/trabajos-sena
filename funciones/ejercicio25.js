function elegirTamaño() {
    let tamaño = prompt("Elija el tamaño del sándwich (pequeño o grande):").trim().toLowerCase()
    return tamaño === "pequeño" ? 6000 : 12000;
}

function agregarIngrediente(precio, ingrediente, costo) {
    return prompt(`¿Desea agregar ${ingrediente}? (sí o no)`).trim().toLowerCase() === "si" ? precio + costo : precio
}

function calcularPrecioTotal() {
    let precio = elegirTamaño()
    precio = agregarIngrediente(precio, "tocineta", 3000)
    precio = agregarIngrediente(precio, "pavo", 3000)
    precio = agregarIngrediente(precio, "queso", 2500)
    
    alert("El precio total es: $" + precio)
}

calcularPrecioTotal()

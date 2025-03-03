function obtenerOperador() {
    return prompt("¿A qué tipo de operador pertenece?").trim().toLowerCase()
}

function obtenerMinutos() {
    return Number(prompt("¿Cuántos minutos internacionales consumió?"))
}

function calcularCosto(operador, minutos) {
    let tarifas = {
        "tigo": 200,
        "claro": 100,
        "movistar": 250
    };
    
    return tarifas[operador] ? minutos * tarifas[operador] : null
}

function ejecutarCalculo() {
    let operador = obtenerOperador()
    let minutos = obtenerMinutos()
    let costo = calcularCosto(operador, minutos)
    
   
    alert(`Con el operador ${operador} el precio total a pagar es de $${costo}`)
}

ejecutarCalculo()

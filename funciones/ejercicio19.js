function preguntarMensualidad(){
    mensualidad = prompt("Ingrese el numero de dias de su mensulidad (15/30/90)")
}

function definirCosto(costo){
    costo = mensualidad === "15" ? 18000 : 
    mensualidad === "30" ? 35000 : 
    mensualidad === "90" ? 86000 : 
    "Opción no válida" 
    
    alert(`El valor a pagar es de $${costo}`)
}

definirCosto(preguntarMensualidad())
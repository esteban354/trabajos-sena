function calcularCosto(tipo, cantidad, horas) {
    let precioPorHora;
    if (tipo === "grande") {
        precioPorHora = 4000
    } else if (tipo === "pequeña") {
        precioPorHora = 3000
    } else {
        alert("El tipo de lavadora es incorrecto")
        return
    }
    
    let total = horas * precioPorHora
    let descuento = precioPorHora * 0.03
    let totalConDescuento = total - descuento
    
    if (cantidad >= 3) {
        alert(`Con el descuento, el total sería ${totalConDescuento}`)
    } else {
        alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas: ${total}`);
    }
}

function solicitarDatos() {
    tipoLavadora = prompt("¿El tipo de lavadora es grande o pequeña?").toLowerCase();
    cantidad = Number(prompt("Ingrese el número de lavadoras alquiladas"))
    horas = Number(prompt("Ingrese el número de horas"))
    
    calcularCosto(tipoLavadora, cantidad, horas)
}

solicitarDatos()
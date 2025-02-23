for (let repetir = true; repetir;) {
    let tiOpe = prompt("¿A qué tipo de operador pertenece?").trim().toLowerCase()
    let canMi = Number(prompt("¿Cuántos minutos internacionales consumió?"))
    
    let pago = 0

    switch (tiOpe) {
        case "tigo":
            pago = canMi * 200
            break
        case "claro":
            pago = canMi * 100
            break
        case "movistar":
            pago = canMi * 250
            break
        default:
            alert("Operador no válido. Intente nuevamente.")
            continue // Reinicia el ciclo sin preguntar si desea repetir
    }

    alert(`Con el operador ${tiOpe} el precio total a pagar es de ${pago}`)
    repetir = confirm("¿Desea realizar otra prueba?")
}

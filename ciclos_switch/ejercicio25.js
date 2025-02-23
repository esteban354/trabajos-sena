for (let repetir = true; repetir;) {
        
    let tamaño = prompt("Elija el tamaño del sándwich (pequeño o grande):")
    let precio = tamaño === "pequeño" ? 6000 : 12000

    switch(tamaño){
        case "pequeño":        
        if (prompt("¿Desea agregar tocineta? (sí o no)") === "si") precio += 3000
        if (prompt("¿Desea agregar pavo? (sí o no)") === "si") precio += 3000
        if (prompt("¿Desea agregar queso? (sí o no)") === "si") precio += 2500
        break

        case "grande":              
        if (prompt("¿Desea agregar tocineta? (sí o no)") === "si") precio += 3000
        if (prompt("¿Desea agregar pavo? (sí o no)") === "si") precio += 3000
        if (prompt("¿Desea agregar queso? (sí o no)") === "si") precio += 2500
        break
    }

    alert("El precio total es: $" + precio)
    repetir = confirm("¿Desea realizar otra prueba?")
}

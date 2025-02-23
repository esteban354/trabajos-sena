for (let repetir = true; repetir;) {
    
    let pro1 = prompt("¿Emite un pitido? (si/no)").trim()
    let pro2 = prompt("¿El disco duro gira? (si/no)").trim()
    let pro3 = prompt("¿La unidad gira? (si/no)")

    let mensaje = "Entrada no válida"
   
        switch (true) {
            case pro1 === "si" && pro2=== "si":
                mensaje = "Está averiada"
                break
            case pro1 === "si" && pro3 === "si":
                mensaje = "Póngase en contacto con el técnico de apoyo"
                break
            case pro1 === "si" && pro3 === "no":
                mensaje = "Verificar contactos de la unidad"
                break
            case pro1 === "no" && pro2 === "no":
                mensaje = "Traiga la computadora a la central para arreglarla"
                break
            case pro1 === "no" && pro3 === "si":
                mensaje = "Compruebe las conexiones de los altavoces"
                break
            default:
                mensaje = "valores incorrectos"
            break
        }
    
    alert(mensaje)
    repetir = confirm("¿Desea realizar otra prueba?")
}

function obtenerRespuesta(pregunta) {
    return prompt(pregunta)
}

function diagnosticarProblema() {
    let pitido = obtenerRespuesta("¿Emite un pitido? (si/no)")
    let discoGira = obtenerRespuesta("¿El disco duro gira? (si/no)")
    let unidadGira = obtenerRespuesta("¿La unidad gira? (si/no)")
    
    let mensaje = (pitido === "si" && discoGira === "si") ? "Está averiada" :
                  (pitido === "si" && unidadGira === "si") ? "Póngase en contacto con el técnico de apoyo" :
                  (pitido === "si" && unidadGira === "no") ? "Verificar contactos de la unidad" :
                  (pitido === "no" && discoGira === "no") ? "Traiga la computadora a la central para arreglarla" :
                  (pitido === "no" && unidadGira === "si") ? "Compruebe las conexiones de los altavoces" :
                  "Entrada no válida"
    
    alert(mensaje)
}

diagnosticarProblema()

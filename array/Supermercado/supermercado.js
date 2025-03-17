let cola = []
const capacidadMaxima = 7
let agregarCliente = () => {
    if (cola.length < capacidadMaxima) {
        let nombre = prompt("Ingresa el nombre del cliente:")
        if (nombre) {
            cola.push(nombre)
            alert(`Cliente ${nombre} agregado a la cola.`)
        } else {
            alert("Nombre inválido. Inténtalo de nuevo.")
        }
    } else {
        alert("La cola está llena. No se pueden agregar más clientes.")
    }
}
let atenderCliente = () => {
    if (cola.length > 0) {
        let clienteAtendido = cola.shift()
        alert(`Cliente ${clienteAtendido} ha sido atendido.\n`)
    } else {
        alert("La cola está vacía. No hay clientes para atender.")
    }
}
let EstadoCola = () => {
    if (cola.length > 0) {
        alert(`Estado actual de la cola: ${cola}`)
    } else {
        alert("La cola está vacía.")
    }
}
let continuar = true
while (continuar) {
    let opcion = prompt("Bienvenido a la cola del supermercado\n1. Agregar cliente\n2. Atender cliente\n3. Ver estado de la cola\n4. Salir\nElige una opción:")
    switch(opcion){
        case "1":
            agregarCliente()
            break
        case "2":
            atenderCliente()
            break
        case "3":
            EstadoCola()
            break
        case "4":
            alert("Gracias por usar el sistema de la cola. ¡Hasta pronto!")
            continuar = false
            break
        default:
            alert("Opción inválida. Por favor, elige una opción entre 1 y 4.")
            break
    }
}

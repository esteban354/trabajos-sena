const precioB = 2000
const precioP = 4000
const opcionB = 1
const opcionP = 2
let opcionSeleccionada = parseInt(prompt("Seleccione tipo de servicio:\n1. Básico ($2000 c/u)\n2. Premium ($4000 c/u)"))

if (opcionSeleccionada === opcionB || opcionSeleccionada === opcionP) {
    let piezas = parseInt(prompt("Ingrese cantidad de piezas (1-20): "))
    let costoUnitario = (opcionSeleccionada === opcionB) ? precioB : precioP
    if (piezas < 1 || piezas > 20) {
        alert("Cantidad de piezas inválida")
    } else {
        alert(`Costo total: $${costoUnitario * piezas}`)
    }
} else {
    alert("Opción inválida")
}

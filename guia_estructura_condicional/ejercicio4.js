const modelos = ["Escoba dura", "Escoba suave", "Cepillo"]
const materiales = ["Cerdas sintéticas", "Cerdas naturales"]
const precios = {
    "Escoba dura Cerdas sintéticas": 8000,
    "Escoba dura Cerdas naturales": 10000,
    "Cepillo Cerdas sintéticas": 12000,
    "Cepillo Cerdas naturales": 15000
}

let modT = Number(prompt("Seleccione el modelo:\n1. Escoba dura\n2. Escoba suave\n3. Cepillo"))
let matT = Number(prompt("Seleccione el material:\n1. Cerdas sintéticas\n2. Cerdas naturales"))
let opcAdicional = Number(prompt("Opción adicional:\n1. Mango largo (+$2000)\n2. Gancho en punta (+$500)\n3. Ninguno"))
let cantidad = Number(prompt("Cantidad de escobas (3-30):"))

if (![1, 2, 3].includes(modT) || ![1, 2].includes(matT) || ![1, 2, 3].includes(opcAdicional) || cantidad < 3 || cantidad > 30) {
    alert("Selección inválida.")
} else {
    let tipoEscoba = `${modelos[modT - 1]} ${materiales[matT - 1]}`
    let precioBase = precios[tipoEscoba] || 0
    let adicional = opcAdicional === 1 ? 2000 : opcAdicional === 2 ? 500 : 0
    let total = (precioBase + adicional) * cantidad

    alert(`Modelo: ${tipoEscoba}\nOpción adicional: ${opcAdicional === 1 ? "Mango largo" : opcAdicional === 2 ? "Gancho en punta" : "Ninguno"}\nCantidad: ${cantidad}\nTotal a pagar: $${total}`)
}

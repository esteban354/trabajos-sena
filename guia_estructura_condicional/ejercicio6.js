
let restaurante = prompt("Elige un restaurante:\n1. Hamburguesas\n2. Pizzería\n3. Comida China")

let nombreRestaurante = "";
let opcion1 = "";
let precio1 = 0;
let opcion2 = "";
let precio2 = 0;

if (restaurante === "1") {
nombreRestaurante = "Hamburguesas"
opcion1 = "Hamburguesa simple"
precio1 = 25000
opcion2 = "Hamburguesa doble"
precio2 = 32000
} else if (restaurante === "2") {
nombreRestaurante = "Pizzería"
opcion1 = "Pizza personal"
precio1 = 40000
opcion2 = "Pizza familiar"
precio2 = 85000
} else if (restaurante === "3") {
nombreRestaurante = "Comida China"
opcion1 = "Fideos con pollo"
precio1 = 18000
opcion2 = "Arroz tres delicias"
precio2 = 22000
} else {
alert("Restaurante inválido.")
}

if (nombreRestaurante !== "") {
let seleccion = prompt(
    `Menú de ${nombreRestaurante}:\n` +
    `1. ${opcion1} - $${precio1}\n` +
    `2. ${opcion2} - $${precio2}\n\n` +
    "Elige una opción:"
)
let cantidad = parseInt(prompt("¿Cuántas unidades deseas?"))
if ((seleccion === "1" || seleccion === "2") && cantidad > 0) {
    let nombrePlato = seleccion === "1" ? opcion1 : opcion2;
    let precioPlato = seleccion === "1" ? precio1 : precio2;
    let subtotal = precioPlato * cantidad;

    if (subtotal < 23000) {
    alert("El pedido mínimo es de $23000.")
    } else {
    let total = subtotal + 5000;
    let pago = prompt("¿Cómo deseas pagar?\n1. Efectivo\n2. Tarjeta")

    if (pago === "1" || pago === "2") {
        alert(
        `Resumen del pedido:\n` +
        `${cantidad} x ${nombrePlato} = $${subtotal}\n` +
        `Envío: $5000\n` +
        `Total: $${total}\n` +
        `Método de pago: ${pago === "1" ? "Efectivo" : "Tarjeta"}\n` +
        `Tiempo estimado: 45 minutos a 1 hora.`
        )
    } else {
        alert("Método de pago inválido.")
    }
    }
} else {
    alert("Selección o cantidad inválida.")
}
}
  
let disponiblesGeneral = 100;
let disponiblesPreferencial = 50;
let disponiblesVIP = 20;

let precioGeneral = 50000;
let precioPreferencial = 150000;
let precioVIP = 300000;

let localidad = prompt(
  "Selecciona la localidad:\n1. General ($50000)\n2. Preferencial ($150000)\n3. VIP ($300000)"
)

let cantidad = parseInt(prompt("¿Cuántas boletas deseas comprar? (Máximo 5)"))

if (isNaN(cantidad) || cantidad < 1 || cantidad > 5) {
  alert("Cantidad inválida. Solo se permiten de 1 a 5 boletas.")
} else if (localidad !== "1" && localidad !== "2" && localidad !== "3") {
  alert("Localidad no válida.")
} else {

let nombreLocalidad = localidad === "1" ? "General" : localidad === "2" ? "Preferencial" : "VIP"
let precioUnitario = localidad === "1" ? precioGeneral : localidad === "2" ? precioPreferencial : precioVIP
let disponibles = localidad === "1" ? disponiblesGeneral : localidad === "2" ? disponiblesPreferencial : disponiblesVIP

  if (cantidad > disponibles) {
    alert(`No hay suficientes entradas disponibles para ${nombreLocalidad}. Quedan ${disponibles}.`)
  } else {
    let subtotal = precioUnitario * cantidad;
    let impuesto = subtotal * 0.10;
    let cargoServicio = 5000 * cantidad;
    let total = subtotal + impuesto + cargoServicio;
    let metodoPago = prompt("Selecciona método de pago:\n1. Efectivo\n2. Tarjeta de crédito");
    let metodoTexto = metodoPago === "1" ? "Efectivo" : metodoPago === "2" ? "Tarjeta de crédito" : null;
    if (!metodoTexto) {
      alert("Método de pago no válido.")
    } else {
      alert(`Resumen de compra:\nLocalidad: ${nombreLocalidad}\nBoletas: ${cantidad}\nPrecio unitario: $${precioUnitario}\nSubtotal: $${subtotal}\nImpuesto (10%): $${impuesto}\nCargo por servicio ($5000 x ${cantidad}): $${cargoServicio}\nTotal a pagar: $${total}\nMétodo de pago: ${metodoTexto}`)
    }
  }
}

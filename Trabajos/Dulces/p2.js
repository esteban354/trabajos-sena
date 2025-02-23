function comprar() {
    let producto = document.getElementById("producto").value
    let pago = document.getElementById("pago").value;
    
    if (producto == "1" && pago >= 1000) {
        alert("comprado Chocolate. Cambio: $" + (pago - 1000))
    } else if (producto == "2" && pago >= 1500) {
        alert("comprado Caramelo. Cambio: $" + (pago - 1500))
    } else {
        alert("No tienes suficiente dinero o el producto no es válido.")
    }
}

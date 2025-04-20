let modT = Number(prompt("Seleccione el modelo:\n1. Clásicos\n2. Running\n3. Basketball"))
let canT = Number(prompt("Cantidad de tenis (1-5):"))
let tall = Number(prompt("Talla (35-44):"))

let precio;

switch (modT) {
    case 1: precio = 500000 
    break
    case 2: precio = 800000 
    break
    case 3: precio = 1000000
    break
    default: alert("Opción inválida")
}

if (canT < 1 || canT > 5 || tall < 35 || tall > 44) {
    alert("Valores ingresados fuera de rango.")
} else {
    let total = canT >= 3 ? precio * canT * 0.9 : precio * canT
    alert(`Total a pagar: $${total}`)
}

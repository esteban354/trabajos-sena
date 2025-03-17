const productos = ["Gaseosa", "Chocolate", "Galletas", "Agua", "Chicle"]
const cantidades = [5, 3, 4, 0, 2]

let mostrarInventario = ()=> {
    let inventario = "Inventario de la máquina:\n"
    productos.forEach((producto, index) => {
        inventario += `${producto} ${cantidades[index]}\n`
    })
    alert(inventario)
}
let procesarCompra = () => {
    let codigo = parseInt(prompt("1. Gaseosa\n 2. Chocolate\n 3. Galletas\n 4. Caramelos\n 5. Chicle\n Introduce el número del producto que deseas comprar (1-5):"))
    const indice = codigo - 1

    if (cantidades[indice] > 0) {
        cantidades[indice]--
        alert(`Has comprado: ${productos[indice]}`)
    } else {
        alert(`${productos[indice]} está agotado.`)
        if (codigo) {
            alert(`Producto sugerido: ${productos[codigo]}`)
        } else {
            alert("Lo sentimos, no hay productos disponibles.")
        }
    }
}
continuar = true
while(continuar){
    let opcion = parseInt(prompt("Menú de la máquina expendedora:\n 1. Ver inventario\n 2. Comprar un producto\n 3. Salir\n Selecciona una opción (1-3):"))

    switch (opcion) {
        case 1:
            mostrarInventario()
            break
        case 2:
            procesarCompra()           
            break
        case 3:
            alert("Saliendo...")
            continuar = false
            break
        default:
            alert("Opción inválida. Inténtelo nuevamente.")
            break
    }
}

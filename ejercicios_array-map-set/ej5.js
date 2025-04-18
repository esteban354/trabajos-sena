const productosVendidos = new Set([1001, 1002, 1003])

const existeProducto = codigo => productosVendidos.has(codigo)
console.log(existeProducto(1002))
console.log(existeProducto(1004))

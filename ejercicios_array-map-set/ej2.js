const preciosProductos = [500, 1200, 300, 1500, 800];
const PreciosAltos = preciosProductos.some(precio => precio > 1000)
console.log(PreciosAltos)
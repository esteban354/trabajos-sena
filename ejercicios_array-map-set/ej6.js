const sociosActivos = new Set([5001, 5002, 5003])

const agregarSocio = codigo => sociosActivos.add(codigo)
agregarSocio(5004)
agregarSocio(5001)
console.log(sociosActivos)

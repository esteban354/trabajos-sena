const asistentesConferencia = new Map([
    [101, "Carlos"],
    [102, "María"],
    [103, "José"]
])

const existeCodigo = codigo => asistentesConferencia.has(codigo)
console.log(existeCodigo(102))
console.log(existeCodigo(104))

const proyectos = [
    { nombre: "Proyecto A", presupuesto: 5000 },
    { nombre: "Proyecto B", presupuesto: 8000 }
]

const agregarProyecto = (arr, nuevoProyecto) => arr.push(nuevoProyecto)

agregarProyecto(proyectos, { nombre: "Proyecto C", presupuesto: 6000 })

console.log(proyectos)

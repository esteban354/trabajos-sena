function ingresarNota(materia) {
    return Number(prompt(`Ingrese su nota de ${materia}`))
    
}

function calcularCalificacion() {
    materia = ["Fisica", "Quimica", "Biologia", "Matematicas", "Informatica"]
    
    let caliT = ((ingresarNota(materia[0]) + ingresarNota(materia[1]) + ingresarNota(materia[2]) + ingresarNota(materia[3]) + ingresarNota(materia[4])) / 50) * 100
    
    let mensaje = `tu porcentaje es ${caliT}% y tu calificación es `
    
    let resultado = caliT >= 80 ? "excelente" : caliT >= 60 ? "buena" : caliT >= 0 ? "mala" : "Las notas ingresadas son incorrectas";
    alert(resultado === "Las notas ingresadas son incorrectas" ? resultado : mensaje + resultado);

}

calcularCalificacion()

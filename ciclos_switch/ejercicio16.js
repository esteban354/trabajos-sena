while (true) {
    let fisica = parseInt(prompt("Por favor ingrese su nota de Física (0-10)"))
    let quimica = parseInt(prompt("Por favor ingrese su nota de Química (0-10)"))
    let biologia = parseInt(prompt("Por favor ingrese su nota de Biología (0-10)"))    
    let matematica = parseInt(prompt("Por favor ingrese su nota de Matemática (0-10)"))
    let informatica = parseInt(prompt("Por favor ingrese su nota de Informática (0-10)"))
   
    let sumaNotas = fisica + quimica + biologia + matematica + informatica
    let caliT = (sumaNotas / 50) * 100

    switch (true) {
        case caliT >= 80:
            alert(`Tu porcentaje es ${caliT}% y tu calificación es Excelente`)
        break
        case caliT >= 60:
            alert(`Tu porcentaje es ${caliT}% y tu calificación es Buena`)
        break
        case caliT >= 0:
            alert(`Tu porcentaje es ${caliT}% y tu calificación es Mala`)
        break
        default:
            alert("Las notas ingresadas son incorrectas")
        break
    }
}

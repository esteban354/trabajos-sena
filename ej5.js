function ingresar() {
    prompt("Por favor ingrese su nota")
}

let fisica = ingresar()
let quimica = ingresar()
let biologia = ingresar()
let matematica = ingresar()
let informatica = ingresar()

let caliT = (fisica + quimica + biologia + matematica + informatica / 50) * 100
if (caliT >= 80 ){
    alert(`tu porcentaje es ${caliT}% y tu calificacion es excelente`)
}

else if (calificaciones >= 60 && calificaciones <= 79) {
    alert(`tu porcentaje es ${caliT}% y tu calificacion es buena`)
}

else if (calificaciones >= 0 && calificaciones <= 59){
    alert(`tu porcentaje es ${caliT}% y tu calificacion es mala`)
}

else{
    alert("Las notas ingresadas son incorrectas")
}
for (let repetir = true; repetir;) {
    let defecto = Number(prompt("Ingrese el modelo de su automovil"))
    let problema =  [179, 119 , 189 , 190 , 191 , 192 , 193 , 194 , 195 , 221 , 780]

    switch(true){
        case problema.includes(defecto):
            mensaje = "Su modelo de automovil es defectuoso"
        break

        default:
            mensaje = "Su modelo de automovil está bien"
        break
    }
    alert(mensaje)
    repetir = confirm("¿Desea realizar otra prueba?")
}
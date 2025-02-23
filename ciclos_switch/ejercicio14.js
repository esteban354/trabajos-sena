while(true){
    let tiLava = prompt("¿El tipo de lavadora es grande o pequeña?")
    let cant = Number(prompt("Ingrese el numero de lavadoras alquiladas"))
    let hor =  Number(prompt("Ingrese el numero de horas"))

    switch(true){
        case tiLava == "grande":
            let total = hor * 4000
            let total2 = 4000 * 0.03
            let pag = total - total2
            if (cant >= 3) {
                alert(`Con el descuento seria un total de ${pag}`)
            }else{
                alert(`Costo total por alquilar ${cant} lavadoras tipo ${tiLava} por ${hor} horas: ${total}`)
            }
        break

        case tiLava =="pequeña":
            let total1= hor * 3000
            let total3 = 3000 * 0.03
            let pag2 = total1 - total3
            if (cant >= 3) {
                alert(`Con el descuento seria un total de ${pag2}`)
            }else{
                alert(`Costo total por alquilar ${cant} lavadoras tipo ${tiLava} por ${hor} horas: ${total1}`)
            }
        break

        default :
        alert("El tipo de lavadora es incorrecto")
        break
    }
}

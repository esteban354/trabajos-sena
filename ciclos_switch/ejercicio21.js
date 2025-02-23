let cop, pre, tot
do {
    cop = Number(prompt("Por favor ingrese la cantidad de copias. De 1 a 1000"))
    
    switch (true) {
        case cop >= 1 && cop < 499:
            pre = 120
            break
        case cop >= 500 && cop < 749:
            pre = 100
            break
        case cop >= 750 && cop < 999:
            pre = 80
            break
        case cop >= 1000:
            pre = 50
            break
        default:
            alert("Valor no válido. Ingrese un número entre 1 y 1000.")
            break
    }
    
    tot = cop * pre
    alert(`Por ${cop} copias, el precio por unidad es $${pre}, dando un total de $${tot}.`)    
} while (true)

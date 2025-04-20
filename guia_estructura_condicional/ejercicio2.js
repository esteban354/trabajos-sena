let forpag = Number(prompt("Selecciona el numero de la forma de pago de su matricula universitaria: \n1. Pago completo (5% de descuento)\n2. Pago en 2 cuotas\n3. pago en 3 cuotas"))
let pago = 7000000

switch(forpag){
    case 1:
        des = pago * 0.05
        tot = pago - des
        alert(`El pago total seria de $${tot}`)
    break

    case 2:
        pago /= 2
        ext = pago * 0.02
        tot = pago + ext
        alert(`El pago por dos cuotas tendria un total de $${tot}`)
    break

    case 3:
        pago /= 3
        ext = pago * 0.02
        tot = pago + ext
        alert(`El pago por tres cuotas tendria un total de $${tot}`)
    break

    default:
        alert("Ingreso un valor incorrecto")
    break
}
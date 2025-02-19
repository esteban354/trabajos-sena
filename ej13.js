let tiOpe = prompt("¿A que tipo de operador pertenece?")
let canMi = prompt("¿Cuantos minutos internacionales consumio?")

if (tiOpe === "tigo"){
    canMi *= 200
    alert(`Con el operador ${tiOpe} el precio total a pagar es de  ${canMi}`)
}
else if (tiOpe === "claro"){
    canMi *= 100
    alert(`Con el operador ${tiOpe} el precio total a pagar es de  ${canMi}`)
}
else if  (tiOpe === "movistar"){
    canMi *= 100
    alert(`Con el operador ${tiOpe} el precio total a pagar es de  ${canMi}`)
}
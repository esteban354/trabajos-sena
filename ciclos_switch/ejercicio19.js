let cos
do{
let di = Number(prompt("Ingrese la cantidad de días de su mensualidad (15, 30 o 90):"))

switch(di){
    case 15:
        cos = 18000
        alert(`El costo de su mensualidad es de ${cos}`)
    break

    case 30:
        cos = 35000
        alert(`El costo de su mensualidad es de ${cos}`)
    break

    case 90:
        cos = 86000
        alert(`El costo de su mensualidad es de ${cos}`)
    break

    default:
        alert("Opción no válida")
    break 
}
}while(cos)

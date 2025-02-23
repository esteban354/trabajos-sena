let di = prompt("Ingrese la cantidad de días de su mensualidad (15, 30 o 90):")
let cos = di === "15" ? 18000 : di === "30" ? 35000 : di === "90" ? 86000 : "Opción no válida"  

alert(`El costo de su mensualidad es de ${cos}`)
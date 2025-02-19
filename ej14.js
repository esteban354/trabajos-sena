let tamaño = prompt("Elija el tamaño del sándwich (pequeño o grande):")
let precio = tamaño === "pequeño" ? 6000 : 12000


if (prompt("¿Desea agregar tocineta? (sí o no)") === "si") precio += 3000
if (prompt("¿Desea agregar pavo? (sí o no)") === "si") precio += 3000
if (prompt("¿Desea agregar queso? (sí o no)") === "si") precio += 2500

alert("El precio total es: $" + precio)
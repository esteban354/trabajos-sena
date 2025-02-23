let pro1 = prompt("¿Emite un pitido? (si/no)").trim()
let pro2 = prompt("¿El disco duro gira? (si/no)").trim()
let pro3 = prompt("¿La unidad gira? (si/no)")

let mensaje = (pro1 === "si" && pro2 === "si") ? "Está averiada" :
              (pro1 === "si" && pro3 === "si") ? "Póngase en contacto con el técnico de apoyo" :
              (pro1 === "si" && pro3 === "no") ? "Verificar contactos de la unidad" :
              (pro1 === "no" && pro2 === "no") ? "Traiga la computadora a la central para arreglarla" :
              (pro1 === "no" && pro3 === "si") ? "Compruebe las conexiones de los altavoces" :
              "Entrada no válida";

alert(mensaje);
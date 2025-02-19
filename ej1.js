let nombre = prompt("Ingrese su nombre")
let horas = prompt("Ingrese el numero de horas trabajadas")

let pago1 = horas * 30000
let pago2 = horas * 33000


if (horas < 10){
    alert(`${nombre}, el numero de horas es ${horas} y su salario equivale a $ ${pago1} `)
} else if (horas > 10){
    alert(`${nombre}, el numero de horas es ${horas} y su salario equivale a $ ${pago2} `)
}


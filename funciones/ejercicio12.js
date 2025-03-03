
function calcularPago(nombre, horas){
        if (horas <= 10){            
            pago = horas * 30000            
            alert(`${nombre}, el numero de horas es ${horas} y su salario equivale a $ ${pago} `)
        }
        else (horas > 10) 
            pago = horas * 33000            
        alert(`${nombre}, el numero de horas es ${horas} y su salario equivale a $ ${pago} `)
}

calcularPago(
    nombre = prompt("Ingrese su nombre"),
    horas =Number(prompt("Ingrese el numero de horas trabajadas"))
)
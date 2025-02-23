while (true){
    let nombre = prompt("Por favor ingrese su nombre")
    let horas = Number(prompt("Ingrese el número de horas trabajadas"))

    switch (true) {
        case horas <= 10:
            pago = horas * 30000
            alert(`${nombre}, el número de horas es ${horas} y su salario equivale a $${pago}`)
            break
        case horas > 10:
            pago = horas * 33000
            alert(`${nombre}, el número de horas es ${horas} y su salario equivale a $${pago}`)
            break
        default:
            alert("Valor incorrecto. Intente de nuevo.")
        break
    }
}


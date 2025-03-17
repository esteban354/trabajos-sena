let transacciones = [0, 0, 0, 0, 0]
let saldo = 1000
let consultarSaldo = () => {
    alert(`tu saldo es de ${saldo}`)
}
let depositarDinero = (num) =>{
    saldo += num
    alert(`Has depositado ${num}. Tu nuevo saldo es: ${saldo}`)
    registrarTransacciones(num)
}
let retirarDinero = (num) =>{
    if (num > 0) {
        if (num > 500 ){
            alert("No puedes retirar más de $500 en una sola transacción.") 
        }else if(num <= saldo){
            saldo -= num
            alert(`Has retirado $${num}. Tu nuevo saldo es: $${saldo}`)
            registrarTransacciones(-num)
        }
    }else{
        alert("El monto a retirar debe ser mayor que 0.")
    }

}
let registrarTransacciones = (num) =>{
    if (transacciones.length >= 5) {
        transacciones.shift()
    }
    transacciones.push(num)
}
let mostrarTransacciones = () => {
    if (transacciones.length === 0) {
        alert("No hay transacciones registradas.")
    } else {
        let historial = "Últimas transacciones:\n"
        transacciones.forEach((t) => {
            historial += `${t > 0 ? "Depósito: " : "Retiro: "} $${Math.abs(t)}\n`
        })
        alert(historial)
    }
}
continuar = true
while(continuar){
    let opcion = parseInt(prompt("1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Mostrar transacciones\n5. Salir\nElige una opción:"))
    switch(opcion){
        case 1:
            consultarSaldo()  
        break
        case 2:
            let depositar = parseInt(prompt("Ingrese el valor a depositar: "))
            depositarDinero(depositar)
        break
        case 3:
            let retirar = parseInt(prompt("Ingrese el valor que desea retirar: "))
            retirarDinero(retirar)
        break
        case 4:
            mostrarTransacciones()
        break
        case 5:
            alert("saliendo...")
            continuar = false
        break
        case 6:
            alert("Opción inválida. Inténtelo nuevamente.")
        break
    }
}
let habitaciones = [0, 0, 0, 0, 0]

const mostrarEstado = () => { 
 let estado = "Estado de habitaciones:\n"; 
    for (let i = 0; i < habitaciones.length; i++) { 
        estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n` 
    } 
    alert(estado)
}
let habitacionesLibres = habitaciones.filter(habitaciones => habitaciones === 0).length


const reservarHabitacion = (num) => { 
    switch(num){

        case (num < 1 || num > 5):
            alert("Número de habitación inválido. Usa 1-5.") 
            mostrarEstado()
        break
        case (habitaciones[num - 1] === 1):
            alert("Habitación ya ocupada.")
            alert(`Total de habitaciones libres: ${habitacionesLibres}`)
        break
        default:
            habitaciones[num - 1] = 1
            alert(`Habitación ${num} reservada con éxito.`)
            alert(`Total de habitaciones libres: ${habitacionesLibres}`)
        break
    }
} 
const liberarHabitacion = (num) => {
    switch(num){
        case (num < 1 || num > 5):
            alert("Número de habitación inválido. Usa 1-5.")
        break
        case (habitaciones[num - 1] === 0):
            alert("Habitación ya está libre.")
            alert(`Total de habitaciones libres: ${habitacionesLibres}`)
        break
        default:
            habitaciones[num - 1] = 0; 
            alert(`Habitación ${num} liberada con éxito.`)
            alert(`Total de habitaciones libres: ${habitacionesLibres}`)
        break
    }
} 

continuar = true
while (continuar) { 
    let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:")
    switch(opcion){
        case "1":
            mostrarEstado()
        break
        case "2":
            let num2 = parseInt(prompt("Ingresa el número de habitación (1-5):"))
            reservarHabitacion(num2)
        break
        case "3":
            let num3 = parseInt(prompt("Ingresa el número de habitación 1-5):")) 
            liberarHabitacion(num3)
        break
        case "4":
            alert("Saliendo...") 
            continuar= false
        break
        default:
            alert("Opción inválida.")   
        break    
    }
} 
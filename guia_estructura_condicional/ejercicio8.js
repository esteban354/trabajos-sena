let edad = parseInt(prompt("Ingrese su edad:"));
if (isNaN(edad) || edad < 18) {
  alert("Solo los mayores de edad pueden apostar.")
} else {
  alert("Carrera disponible: Carrera 1")
  alert("Pilotos:\nA. Piloto A (cuota 1.5)\nB. Piloto B (cuota 2.3)\nC. Piloto C (cuota 1.8)")

  let tipoApuesta = prompt("Tipo de apuesta:\n1. Ganador\n2. Posiciones exactas")
  let monto = parseInt(prompt("Ingresa el monto a apostar:"))

  if (isNaN(monto) || monto < 10000 || monto > 1000000) {
    alert("Monto inválido. Debe estar entre $10.000 y $1.000.000")
  } else if (tipoApuesta === "1") {
    let piloto = prompt("Selecciona el piloto ganador (A, B o C):").toUpperCase()
    let cuota = piloto === "A" ? 1.5 :
                piloto === "B" ? 2.3 :
                piloto === "C" ? 1.8 : 0

    if (cuota === 0) {
      alert("Piloto inválido.")
    } else {
      let ganadorReal = "B" 
      let gano = piloto === ganadorReal
      let ganancia = gano ? monto * cuota : 0
      alert(
        `Resultado: El ganador fue el piloto ${ganadorReal}.\n` + (gano ? `¡Ganaste! Tu ganancia es $${ganancia}` : "Lo sentimos, perdiste."))
    }

  } else if (tipoApuesta === "2") {
    let primero = prompt("Selecciona el 1er puesto (A, B o C):").toUpperCase();
    let segundo = prompt("Selecciona el 2do puesto (A, B o C):").toUpperCase();
    let cuota1 = primero === "A" ? 1.5 :
                 primero === "B" ? 2.3 :
                 primero === "C" ? 1.8 : 0;

    let cuota2 = segundo === "A" ? 1.5 :
                 segundo === "B" ? 2.3 :
                 segundo === "C" ? 1.8 : 0;
    if (cuota1 === 0 || cuota2 === 0 || primero === segundo) {
      alert("Selección inválida. No puedes repetir pilotos o usar letras inválidas.");
    } else {
      let resultado1 = "B";
      let resultado2 = "C";
      let acierto = (primero === resultado1 && segundo === resultado2);
      let ganancia = acierto ? monto * (cuota1 + cuota2) : 0;
      alert(
        `Resultado:\n1ro: ${resultado1}\n2do: ${resultado2}\n` +
        (acierto ? `¡Ganaste! Tu ganancia es $${ganancia}` : "Lo sentimos, perdiste.")
      )
    }

  } else {
    alert("Tipo de apuesta inválido.");
  }
}

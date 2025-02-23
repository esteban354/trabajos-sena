let gen = prompt("Eres hombre o mujer")
let ed = Number(prompt("Digite su edad"))

if (gen === "mujer"){
    if (ed >= 50) alert("El valor de ayuda que recibes es de $120.000")
    else if (ed >= 30 && ed < 49) alert("El valor de ayuda que recibes es de $100.000")
    else alert("No recibes ayuda")
}
else if (gen === "hombre"){
    alert("El valor de ayuda de es $40.000")
}
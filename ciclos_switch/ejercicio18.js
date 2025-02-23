do{
let gen = prompt("Por favor ingrese su genero (hombre/mujer)")
let ed = Number(prompt("Digite su edad"));

    switch(gen){
        case "mujer":
            if (ed >= 50) alert("El valor de ayuda que recibes es de $120.000")
            else if (ed >= 30 && ed < 49) alert("El valor de ayuda que recibes es de $100.000")
            else alert("No recibes ayuda")
        break

        case "hombre":
            alert("El valor de ayuda de es $40.000")
        break

        default:
            alert("Valores ingresados incorrectos")
        break
    }      
} while(true)


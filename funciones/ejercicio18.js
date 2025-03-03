function definirPago(genero, edad){
    switch(genero){
    case "femenino":
        edad >= 50 ? alert("El valor de ayuda que recibes es de $120.000") :
        edad >= 30 && edad < 49 ? alert("El valor de ayuda que recibes es de $100.000") :
        alert("No recibes ayuda")  
        break

    case "masculino":
        alert("El valor de ayuda de es $40.000")
        break
    }        
}

function preguntar(){
    genero = prompt("ingrese su genero (masculino/femenino)"),
    edad = parseInt(prompt("Ingrese su edad actual"))

    definirPago(genero,edad)
}

preguntar()
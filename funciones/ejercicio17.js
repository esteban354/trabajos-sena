function ingresarNumero(numero) {
    return Number(prompt(`Ingrese el ${numero} numero`))
}

function determinarMayor(){
    
let num1 = ingresarNumero("primer")
let num2 = ingresarNumero("segundo")
let num3 = ingresarNumero("tercer")


let mayor = (num1 >= num2 && num1 >= num3) ? num1 : 
            (num2 >= num3) ? num2 : 
            num3

alert(`El numero ${mayor} es el mayor`)
}

determinarMayor()

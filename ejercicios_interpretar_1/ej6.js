
let num1 = Number(prompt("Ingrese el primer número"))
let num2 = Number(prompt("Ingrese el segundo número"))
let num3 = Number(prompt("Ingrese el tercer número"))

let mayor = (num1 >= num2 && num1 >= num3) ? num1 : 
            (num2 >= num3) ? num2 : 
            num3;

alert(`El número ${mayor} es el mayor`)
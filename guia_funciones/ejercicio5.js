function invertirCadena(palabra) {
    let cadenaInvertida = ""

    for (let i = palabra.length - 1; i >= 0; i--) {
        cadenaInvertida += palabra[i]
    }

    return cadenaInvertida
}

console.log(invertirCadena("Hola mundo"))

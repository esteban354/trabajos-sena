function contarVocales(palabra) {
    let contador = 0
    let vocales = "aeiouAEIOU"
    for (let i = 0; i < palabra.length; i++) { 
        if (vocales.includes(palabra[i])) { 
            contador++
        }
    }
    return contador
}

console.log(contarVocales("el mundo"))

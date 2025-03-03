function verificarMesa(numeroMesa, ocupacionMesa) {
    return ocupacionMesa ? `La mesa ${numeroMesa} está ocupada` : `La mesa ${numeroMesa} está libre`
}

let ocupacionMesa = false;
let numeroMesa = 4;

console.log(verificarMesa(numeroMesa, ocupacionMesa))

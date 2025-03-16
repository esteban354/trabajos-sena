let raizCuadrada = n => {
    let x = n
    let y = (x + n / x) / 2
    while (Math.abs(x - y) >= 0.00001) {
        x = y;
        y = (x + n / x) / 2
    }
    return y
}

console.log(raizCuadrada(3))
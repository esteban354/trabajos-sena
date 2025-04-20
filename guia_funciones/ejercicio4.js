function fibonacci(n) {
    if (n <= 0) return "El número debe ser mayor que 0"
    
    let serie = [0, 1]
    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2])
    }
    return serie.slice(0, n)
}

console.log(fibonacci(10))

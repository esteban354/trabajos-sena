let generarSerieTriangular = n => {
    let serie = []
    for (let i = 1; i <= n; i++) {
        serie.push((i * (i + 1)) / 2)
    }
    return serie
}

console.log(generarSerieTriangular(4))
let plat = "debe plata"

function debePagar(plat) {
    return plat === "debe plata" ? "tiene que pagar" : "puede gastar plata"
}

console.log(debePagar(plat))

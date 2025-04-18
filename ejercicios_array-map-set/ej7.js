const puntajes = [85, 92, 78, 95, 88];
const mapPuntajes = new Map(puntajes.map((p, i) => [i, p]))

mapPuntajes.set(puntajes.length, 90)

console.log(mapPuntajes)

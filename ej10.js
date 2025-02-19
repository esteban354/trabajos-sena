let cop = Number(prompt("Ingrese el número de copias"))

let pre = (cop < 499) ? 120 :
             (cop >= 500 && cop < 749) ? 100 :
             (cop >= 750 && cop < 999) ? 80 :
             (cop >= 1000) ? 50 :
             "Valor no válido"

let tot = cop * pre
alert(`Por la cantidad de ${cop} copias el precio por copia es de $${pre}, el precio total seria $${tot} `)

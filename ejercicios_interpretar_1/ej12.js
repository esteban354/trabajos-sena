let defecto = Number(prompt("Ingrese el modelo de su automóvil").trim());

let modelosDefectuosos = [179, 119, 189, 190, 191, 192, 193, 194, 195, 221, 780];

if (modelosDefectuosos.includes(defecto)) {
    alert("Su modelo de automóvil es defectuoso");
} else {
    alert("Su modelo de automóvil está bien");
}

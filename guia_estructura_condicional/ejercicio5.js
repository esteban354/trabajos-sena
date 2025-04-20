let categorias = {
    1: { nombre: "Bestsellers", tarifa: 500 },
    2: { nombre: "Literatura", tarifa: 100 },
    3: { nombre: "Académicos", tarifa: 0 }
  }

  let maxLibros = 5;
  let libros = [];
  
  let cantidadLibros = parseInt(prompt(`¿Cuántos libros deseas solicitar? (Máx. ${maxLibros})`))
  
  if (isNaN(cantidadLibros) || cantidadLibros < 1 || cantidadLibros > maxLibros) {
    alert("Cantidad inválida. Debe ser entre 1 y 5 libros.")
  } else {
    for (let i = 0; i < cantidadLibros; i++) {
      let titulo = prompt(`Libro #${i + 1} - Ingresa el título:`);
  
      let seleccion = parseInt(prompt(`Libro #${i + 1} - Selecciona categoría:\n1. Bestsellers\n2. Literatura\n3. Académicos`))

      if (seleccion>3 || seleccion<1) {
        alert("Selección de categoría inválida.")
        break
      }
  
      let categoria = categorias[seleccion];
      libros.push({ titulo: titulo, categoria: categoria.nombre, tarifa: categoria.tarifa })
    }

    let dias = parseInt(prompt("¿Por cuántos días deseas el préstamo? (1 a 30 días)"))
  
    if (isNaN(dias) || dias < 1 || dias > 30) {
      alert("Cantidad de días inválida.")
    } else {
      let total = 0
      let resumen = `Resumen del préstamo por ${dias} días:\n\n`
      for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        let costo = libro.tarifa * dias;
        resumen += `${i + 1}. ${libro.titulo} [${libro.categoria}] → $${costo}\n`
        total += costo;
      }
  
      if (dias > 10) {
        let descuento = total * 0.10
        resumen += `\nDescuento aplicado (10%): -$${descuento.toFixed(2)}\n`
        total -= descuento
      }
  
      resumen += `\nTotal a pagar: $${total.toFixed(2)}`
      alert(resumen);
    }
  }
  
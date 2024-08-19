function calcularCostoAlquiler (tipoLavadora, horas, cantidad) {
    let costoPorHora;

    if (tipoLavadora === 1) {
        costoPorHora = 4000;
    } else if (tipoLavadora === 2) {
        costoPorHora = 3000;
    } else {
        console.log("Tipo de lavadora no válido");
        return;
    }
    let costoTotal = costoPorHora * horas * cantidad;

    if (cantidad > 3) {
        costoTotal-= costoPorHora * 0.03; // Aplicando descuento del 3%  
    }
    console.log(`El costo total a pagar por el alquiler es de ${costoTotal}pesos.`);
}
// Ejemplo de uso:
calcularCostoAlquiler(1, 5, 4,) // Lavadora grande, 5 horas, 4 lavadoras
calcularCostoAlquiler(2, 3, 2); // Lavadora pequeña, 3 horas, 2 lavadoras

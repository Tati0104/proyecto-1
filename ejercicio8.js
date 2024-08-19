function calcularCostosMensualidad(dias, meses) {
    let costos;

    const tarifa15Dias = 18000;
    const tarifa30Dias = 35000;
    const tarifa3Meses = 86000;

    if (dias > 0) {
        const costoPorDia = tarifa15Dias / 15;
        costos = costoPorDia * dias;
    } else if (meses > 0) {
        const costoPorMes = tarifa3Meses / 3;
        costos = costoPorMes * meses;
    } else {
        costos = "No definido";
    }

    console.log(`El costo para ${dias} días o ${meses} meses es: ${costos.toFixed(2)} pesos.`);
}

calcularCostosMensualidad(20, 0);  
calcularCostosMensualidad(0, 5);  

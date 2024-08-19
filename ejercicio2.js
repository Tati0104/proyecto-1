function verificarNumero(numero) {
    if (numero > 0) {
        console.log(`El número ${numero} es positivo.`);
    } else if (numero < 0) {
        console.log(`El número ${numero} es negativo.`);
    } else {
        console.log(`El número es 0.`);
    }
}

// Ejemplo de uso
verificarNumero(8);    // El número 8 es positivo.
verificarNumero(-30);   // El número -30 es negativo.
verificarNumero(0);    // El número es 0.

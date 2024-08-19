function determinarParImpar(número){
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El numero es impar";
    }
}

// Ejemplo de uso
const numero = 4;
console.log(determinarParImpar(numero));

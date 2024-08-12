const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Objeto "tarifas" contiene los valores para cada operador
const tarifas = {
    Tigo: {
        cargoFijo: 45000,
        valorMinutoInternacional: 200,
        valorPaqueteDatos: 12000
    },
    Claro: {
        cargoFijo: 30000,
        valorMinutoInternacional: 100,
        valorPaqueteDatos: 18000
    },
    Movistar: {
        cargoFijo: 40000,
        valorMinutoInternacional: 250,
        valorPaqueteDatos: 8000
    }
};

// Solicitar al usuario que seleccione su operador
rl.question('Ingrese su operador (Tigo, Claro, Movistar): ', (operador) => {
    operador = operador.trim().charAt(0).toUpperCase() + operador.trim().slice(1).toLowerCase();

    // Verificar si el operador es válido
    if (tarifas[operador]) {
        // Solicitar la cantidad de minutos internacionales consumidos
        rl.question('Ingrese la cantidad de minutos internacionales consumidos: ', (minutos) => {
            minutos = parseInt(minutos);

            if (isNaN(minutos) || minutos < 0) {
                console.log("Por favor, ingrese un número válido de minutos.");
            } else {
                // Calcular el costo total
                const cargoFijo = tarifas[operador].cargoFijo;
                const costoMinutosInternacionales = minutos * tarifas[operador].valorMinutoInternacional;
                const valorPaqueteDatos = tarifas[operador].valorPaqueteDatos;
                const costoTotal = cargoFijo + costoMinutosInternacionales + valorPaqueteDatos;

                // Mostrar el costo total al usuario
                console.log(`Operador: ${operador}`);
                console.log(`Cargo fijo: $${cargoFijo}`);
                console.log(`Costo por ${minutos} minutos internacionales: $${costoMinutosInternacionales}`);
                console.log(`Costo del paquete de datos: $${valorPaqueteDatos}`);
                console.log(`Costo total: $${costoTotal}`);
            }

            // Cerrar la interfaz readline
            rl.close();
        });
    } else {
        console.log("Operador no válido. Por favor, ingrese 'Tigo', 'Claro' o 'Movistar'.");
        rl.close();
    }
});
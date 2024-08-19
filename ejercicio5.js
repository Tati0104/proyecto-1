const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularCalificacion(promedio) {
    if (promedio >= 0 && promedio <= 5.9) {
        return "Mala";
    } else if (promedio >= 6 && promedio <= 8) {
        return "Buena";
    } else if (promedio > 8) {
        return "Excelente";
    } else {
        return "Nota inválida";
    }
}

function obtenerCalificaciones() {
    const materias = ['Física', 'Química', 'Biología', 'Matemáticas', 'Informática'];
    let suma = 0;
    let index = 0;

    function preguntarCalificacion() {
        if (index < materias.length) {
            rl.question(`Ingrese la calificación de ${materias[index]} (0-10): `, (respuesta) => {
                let calificacion = parseFloat(respuesta);
                if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
                    console.log("Calificación inválida. Debe estar entre 0 y 10.");
                    preguntarCalificacion(); // Repetir la pregunta si la calificación es inválida
                } else {
                    suma += calificacion;
                    index++;
                    preguntarCalificacion(); // Continuar con la siguiente materia
                }
            });
        } else {
            let promedio = suma / materias.length;
            let calificacion = calcularCalificacion(promedio);
            console.log(`Promedio: ${promedio.toFixed(2)}`);
            console.log(`Calificación: ${calificacion}`);
            rl.close(); // Cerrar la interfaz de readline
        }
    }

    preguntarCalificacion(); // Iniciar el proceso de preguntas
}

obtenerCalificaciones();

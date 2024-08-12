const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];// Declaramos los modelos defectuosos.

rl.question('Ingrese el número de modelo de su automóvil: ', (input) => {//Muestra mensaje en la consola y guarda el dato en "input"
    const numeroModelo = parseInt(input);//"let numeroModelo" Declaro la variable "numeroModelo" para almacenar el numero que escriba el usuario.
    // "parseInt(input)" Convierte el dato que escribe el usuario que es una cadena de texto en un numero entero.

    // vamos a generar con if else if las condiciones de comparacion entre los modelos defectuosos vs el que escribio el usuario.
    if (modelosDefectuosos.includes(numeroModelo)) {
        console.log("El automóvil está defectuoso, llevar a garantía.");//Imprime mensaje
    } else {
        console.log("Su automóvil no está defectuoso.");//Imprime mensaje
    }

    // Cerrar la interfaz readline
    rl.close();
});
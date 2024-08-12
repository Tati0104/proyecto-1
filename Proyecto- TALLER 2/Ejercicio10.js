const readline = require('readline');//Esta línea me permite llamar el módulo readline 
//que se utiliza para manejar la entrada y salida de texto en la consola. 

const rl = readline.createInterface({//Crea una nueva interfaz de entrada/salida. //const rl= permite declara la variable rl como la interfaz que usaremos para interactuar con el usuario.
    input: process.stdin,//input: process.stdin: Establece la entrada de la consola para leer lo que el usuario escribe.
    output: process.stdout//output: process.stdout: Establece la salida de la consola para mostrar el texto que el programa imprime.
});
rl.question('Ingrese el número de copias que desea imprimir: ', (input) => {//Muestra mensaje en la consola y guarda el dato en "input"
    let n = parseInt(input);//"let n" Declaro la variable "n" para almacenar el numero de copias que escriba el usuario.
                            // "parseInt(input)" Convierte el dato que escribe el usuario que es una cadena de texto en un numero entero.
    let p;//"let p" Declaro la variable "p" para almacenar el costo por copias.

    if (n >= 0 && n <= 499) {// al usar if-else if: Puedo darle valor por rangos a la variable "n" y darle un precio a la variable "p".
        p = 120;//Recordar!!! Usar "if" para decir SI esta condicion es cierta haga esto...
        // Usar "else if" para decir si "if" no se cumplio, entonces de OTRO MODO haga esto...
        // Usar "else" se usa solo al cerrar la condicion, significa SI NO SE CUMPLIO haga esto...
    } else if (n >= 500 && n <= 749) {
        p = 100;
    } else if (n >= 750 && n <= 999) {
        p = 80;
    } else if (n >= 1000) {
        p = 50;
    } else {
        console.log("Número de copias no válido.");//Muestra el mensaje por consola de que no es un valor valido.
        rl.close();// finaliza el programa
        return;//retorna
    }

    let pTotal = n * p;//"let pTotal" Declaro la variable "pTotal" para calcular el costo total multiplicando "n" x "p"

    console.log("El precio por copia es: $" + p);// Muestra el mensaje en consola del precio por copia que es el valor guardado en "p"
    console.log("El precio total es: $" + pTotal);//Muestra el mensaje en consola del precio total que es el resultado de multiplicar "n" x "p"

    rl.close();// cierra el programa
});
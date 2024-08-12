const readline = require('readline');//Esta línea me permite llamar el módulo readline 
//que se utiliza para manejar la entrada y salida de texto en la consola.

const rl = readline.createInterface({//Crea una nueva interfaz de entrada/salida. //const rl= permite declara la variable rl como la interfaz que usaremos para interactuar con el usuario.
    input: process.stdin,//input: process.stdin: Establece la entrada de la consola para leer lo que el usuario escribe.
    output: process.stdout//output: process.stdout: Establece la salida de la consola para mostrar el texto que el programa imprime.
});

rl.question('¿La computadora emite un pitido al iniciarse? (si/no): ', (pitido) => {//Muestra mensaje en la consola y guarda el dato en "pitido"
    
    // Usaremos "toLowerCase" para convertir todas las letras de una cadena de texto a minúsculas
    pitido = pitido.toLowerCase();
    
    // Mostrar el mensaje de pregunta al usuario si el disco duro gira so o no. y lo guarda en "gira"
    rl.question('¿El disco duro gira? (si/no): ', (gira) => {
        
        gira = gira.toLowerCase();
        
        // vamos a generar con if else if los 4 cosas que nos dan en el ejercicio para todo lo demas saldra el mensaje de entrada no valida.
        if (pitido === 'si' && gira === 'si') {
            console.log("Póngase en contacto con el técnico de apoyo.");
        } else if (pitido === 'si' && gira === 'no') {
            console.log("Verificar contactos de la unidad.");
        } else if (pitido === 'no' && gira === 'no') {
            console.log("Traiga la computadora para repararla en la central.");
        } else if (pitido === 'no' && gira === 'si') {
            console.log("Compruebe las conexiones de altavoces.");
        } else {
            console.log("Entrada no válida. Por favor, responda con 'si' o 'no'.");
        }
        
        // Cerrar la interfaz readline
        rl.close();
    });
});
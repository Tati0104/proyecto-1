const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para obtener un número aleatorio entre min y max (ambos incluidos)
function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para repartir una carta
function repartirCarta() {
  return obtenerNumeroAleatorio(1, 10);
}

// Función para calcular el puntaje
function calcularPuntaje(cartas) {
  return cartas.reduce((total, carta) => total + carta, 0);
}

// Función para imprimir las cartas y el puntaje del usuario
function mostrarCartasYpuntuacion(nombreJugador, cartas) {
  console.log(`${nombreJugador} cartas: ${cartas.join(', ')}`);
  console.log(`${nombreJugador} puntaje: ${calcularPuntaje(cartas)}`);
}

// Función para determinar el ganador
function determinarGanador(puntuacionUsuario, puntuacionComputadora) {
  if (puntuacionUsuario > 21 && puntuacionComputadora > 21) {
    console.log('Ambos jugadores superaron 21. No hay ganador.');
  } else if (puntuacionUsuario > 21) {
    console.log('El usuario superó 21. La computadora gana.');
  } else if (puntuacionComputadora > 21) {
    console.log('La computadora superó 21. El usuario gana.');
  } else if (puntuacionUsuario > puntuacionComputadora) {
    console.log('El usuario gana.');
  } else if (puntuacionComputadora > puntuacionUsuario) {
    console.log('La computadora gana.');
  } else {
    console.log('Es un empate.');
  }
}

// Función principal para jugar
function jugar() {
  // Repartir cartas iniciales al usuario y a la computadora
  let cartasUsuario = [repartirCarta(), repartirCarta()];
  let cartasComputadora = [repartirCarta(), repartirCarta()];

  console.log('Cartas iniciales del usuario:');
  mostrarCartasYpuntuacion('Usuario', cartasUsuario);

  console.log('\nLa computadora ha recibido sus cartas.');

  // Lógica del juego para el usuario
  function turnoUsuario() {
    rl.question('¿Deseas tomar otra carta? (s/n): ', (respuesta) => {
      if (respuesta.toLowerCase() === 's') {
        cartasUsuario.push(repartirCarta());
        mostrarCartasYpuntuacion('Usuario', cartasUsuario);

        if (calcularPuntaje(cartasUsuario) > 21) {
          console.log('El usuario superó 21.');
          finalizarJuego();
        } else {
          turnoUsuario(); // Permitir otra ronda si el usuario no ha excedido 21
        }
      } else {
        finalizarJuego();
      }
    });
  }

  // Finalizar el juego y determinar el ganador
  function finalizarJuego() {
    const cartaOcultaComputadora = repartirCarta();
    cartasComputadora.push(cartaOcultaComputadora);
    console.log('\nCarta oculta de la computadora revelada.');
    mostrarCartasYpuntuacion('Computadora', cartasComputadora);

    const puntuacionUsuario = calcularPuntaje(cartasUsuario);
    const puntuacionComputadora = calcularPuntaje(cartasComputadora);

    determinarGanador(puntuacionUsuario, puntuacionComputadora);
    rl.close();
  }

  turnoUsuario(); // Iniciar el turno del usuario
}

// Iniciar el juego
jugar();
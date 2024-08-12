const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Precios de los sándwiches
const precios = {
  pequeno: 6000,
  grande: 12000,
  jalapeno: 0,
  tocineta: 3000,
  pavo: 3000,
  queso: 2500
};

// Función para calcular el costo total del sándwich
function calcularCosto(tamano, ingredientes) {
  let costoTotal = precios[tamano];

  ingredientes.forEach(ingrediente => {
    costoTotal += precios[ingrediente] || 0;
  });

  return costoTotal;
}

// Función para solicitar información del usuario
function solicitarOrden() {
  rl.question('Seleccione el tamaño del sándwich (pequeno/grande): ', (tamano) => {
    tamano = tamano.toLowerCase();
    
    if (tamano !== 'pequeno' && tamano !== 'grande') {
      console.log('Tamaño no válido. Inténtalo de nuevo.');
      return solicitarOrden();
    }

    rl.question('Ingrese los ingredientes adicionales separados por comas (tocineta, jalapeno, pavo, queso): ', (ingredientesStr) => {
      const ingredientes = ingredientesStr.split(',').map(ing => ing.trim().toLowerCase());

      const costoTotal = calcularCosto(tamano, ingredientes);

      console.log(`El costo total de tu sándwich es: $${costoTotal}`);

      rl.close();
    });
  });
}

// Iniciar el proceso de solicitud
solicitarOrden();
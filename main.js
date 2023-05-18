function calcularPena() {
    while (true) {
      // Obtener el monto ingresado por el usuario
      var monto = parseFloat(prompt("Ingrese el monto a depositar:"));
  
      // Obtener la opción de tiempo del plazo fijo
      var opcion = parseInt(prompt("Opciones de tiempo del plazo fijo:\n1. 30 días\n2. 60 días\n3. 90 días\n4. 180 días\nSeleccione una opción:"));
  
      // Calcular la tasa de interés
      var tasaInteres = 0.97;
  
      // Calcular el monto final
      var montoFinal = calcularMontoFinal(monto, opcion, tasaInteres);
  
      // Mostrar el resultado
      alert("El monto final al finalizar el plazo fijo será: " + montoFinal);
  
      // Preguntar al usuario si desea calcular nuevamente
      var continuar = prompt("¿Desea calcular nuevamente? (S/N)").toUpperCase();
  
      // Salir del ciclo si el usuario no desea continuar
      if (continuar !== "S") {
        break;
      }
    }
  }
  
  function calcularMontoFinal(monto, opcion, tasaInteres) {
    var montoFinal = monto;
  
    // Calcular el tiempo en días según la opción elegida
    var tiempoEnDias = 0;
    if (opcion === 1) {
      tiempoEnDias = 30;
    } else if (opcion === 2) {
      tiempoEnDias = 60;
    } else if (opcion === 3) {
      tiempoEnDias = 90;
    } else if (opcion === 4) {
      tiempoEnDias = 180;
    } else {
      alert("Opción inválida.");
      return; // Salir de la función
    }
  
    // Calcular el monto final
    var i = 0;
    while (i < tiempoEnDias) {
      montoFinal *= tasaInteres;
      i++;
    }
  
    return montoFinal;
  }

  
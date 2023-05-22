function calcularMonto() {
  while (true) {
    // Obtener el monto de dinero con el que se quiere simular el plazo fijo
    let monto = parseFloat(prompt("Ingrese el monto a depositar:"));

    // Obtener la opción de tiempo del plazo fijo
    let opcion = parseInt(prompt("Opciones de tiempo del plazo fijo:\n1. 30 días\n2. 60 días\n3. 90 días\n4. 180 días\nSeleccione una opción:"));

    // Calcular la tasa de interés según la opción elegida, teniendo en cuanta una TNA del 97%
    let tasaInteres = 0;
    if (opcion === 1) {
      tasaInteres = 0.0808; // Tasa de interés para 30 días
    } else if (opcion === 2) {
      tasaInteres = 0.1616; // Tasa de interés para 60 días
    } else if (opcion === 3) {
      tasaInteres = 0.2424; // Tasa de interés para 90 días
    } else if (opcion === 4) {
      tasaInteres = 0.4848; // Tasa de interés para 180 días
    } else {
      alert("Opción inválida.");
      continue; // Volver al inicio del ciclo
    }

    // Calcular el monto final según la opción elegida
    let montoFinal = calcularMontoFinal(monto, tasaInteres);

    // Mostrar el resultado del rendimiento segun las opciones ingresadas
    alert("El rendimiento al finalizar el plazo fijo será: $" + montoFinal);

    // Preguntar al usuario si desea calcular nuevamente
    let continuar = prompt("¿Desea calcular nuevamente? (S/N)").toUpperCase();

    // Salir del ciclo si el usuario no desea continuar
    if (continuar !== "S") {
      break;
    }
  }
}

function calcularMontoFinal(monto, tasaInteres) {
  // Calcular el monto final
  let montoFinal = monto * tasaInteres;
  return montoFinal;
}


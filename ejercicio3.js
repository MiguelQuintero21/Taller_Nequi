// Ejercicio 3 · El menú de la app
const prompt = require('prompt-sync')();

let opcion = "";


do {
  console.log("\n=============================");
  console.log("       MENÚ DE NEQUI");
  console.log("=============================");
  console.log("1) Ver saldo");
  console.log("2) Enviar dinero");
  console.log("3) Recargar");
  console.log("4) Salir");
  console.log("=============================");

  opcion = prompt("Seleccione una opción (1-4): ");

  
  switch (opcion) {
    case "1":
      console.log("Su saldo actual es: $150,000 COP");
      break;
    case "2":
      console.log("Módulo para enviar dinero activado.");
      break;
    case "3":
      console.log("Módulo de recarga PSE / Corresponsal.");
      break;
    case "4":
      console.log("Gracias por usar Nequi. ¡Hasta pronto!");
      break;
    default:
      console.log("Opción no válida. Elija un número entre 1 y 4.");
  }

} while (opcion !== "4"); //El menú se mantiene mientras la opción no sea 4
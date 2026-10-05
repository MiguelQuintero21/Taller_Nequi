// Ejercicio 2 · Validar el PIN

const prompt = require('prompt-sync')();


const pinCorrecto = "7777";
let numeroIntentos = 1;


let intento = prompt("Ingrese su PIN de Nequi: ");


while (intento !== pinCorrecto) {
    
  console.log("PIN incorrecto. Inténtelo de nuevo.");
  intento = prompt("Ingrese su PIN nuevamente: ");
  numeroIntentos++;
}

// 14. Bienvenida al acertar
console.log(`PIN correcto!!!!! Bienvenido a Nequi. (Intentos: ${numeroIntentos})`);
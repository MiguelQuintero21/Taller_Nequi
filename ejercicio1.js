// Ejercicio 1 · Los movimientos del mes


const movimientos = [50000, -12000, 20000, -5000, -30000, 15000];


let total = 0;
let cantidadRetiros = 0;


for (let i = 0; i < movimientos.length; i++) {

  total += movimientos[i];

  
  if (movimientos[i] < 0) {
    cantidadRetiros++;
  }
}


console.log("=== RESUMEN DE MOVIMIENTOS DEL MES ===");
console.log(`Total acumulado en cuenta: $${total}`);
console.log(`Cantidad de retiros realizados: ${cantidadRetiros}`);
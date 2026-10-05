// Ejercicio 4 · Buscar y filtrar movimientos

const movimientos = [
  { tipo: "recarga", monto: 50000 },
  { tipo: "vacio", monto: 0 },
  { tipo: "retiro", monto: -20000 },
  { tipo: "pago_comercio", monto: -15000 }, // Primer pago a comercio
  { tipo: "vacio", monto: 0 },
  { tipo: "pago_comercio", monto: -8000 }
];

console.log("=== RECORRIDO DE MOVIMIENTOS ===");

for (let i = 0; i < movimientos.length; i++) {
  const mov = movimientos[i];

  // Parte A 
  if (mov.monto === 0) {
    console.log(`[Posición ${i}] Movimiento de $0 ignorado.`);
    continue; // Salta el resto de esta iteración
  }

  // Parte B 
  if (mov.tipo === "pago_comercio") {
    console.log(`Primer pago a comercio encontrado en la posición ${i}! Monto: $${mov.monto}`);
    break; // aqui se rompe el bucle por completo
  }

  console.log(`[Posición ${i}] Procesado: ${mov.tipo} por $${mov.monto}`);
}
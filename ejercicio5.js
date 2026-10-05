// Ejercicio 5 · Varias cuentas a la vez

//Arreglo de usuarios con sus respectivos movimientos
const usuarios = [
  { nombre: "Miguel", movimientos: [20000, -5000, -12000] },
  { nombre: "pedro", movimientos: [100000, -45000, -30000] },
  { nombre: "Jesus", movimientos: [15000, -15000, -2000] }
];



console.log("=======================================");

console.log("=== BALANCE FINAL POR USUARIO ===\n");

// Bucle externo, recorre la lista de usuarios
for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  
  // Reinicia acumulador por cada usuario
  let totalUsuario = 0;

  // Bucle interno, recorre los movimientos del usuario actual
  for (let j = 0; j < usuario.movimientos.length; j++) {
    totalUsuario += usuario.movimientos[i] !== undefined ? usuario.movimientos[j] : 0;
  }

  // Mostrar balance individual
  console.log(` Usuario: ${usuario.nombre} | Balance Total: $${totalUsuario}`);
}
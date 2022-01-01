/**
 * Code Tips #01 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Uso de Tuplas com Spread Operator em TypeScript

let frutas: [string, ...string[]] = ['🍎', '🍊', '🍌', '🍓', '🍏', '🍉'];
console.log(...frutas);

// ==> Resultado
// 🍎 🍊 🍌 🍓 🍏 🍉
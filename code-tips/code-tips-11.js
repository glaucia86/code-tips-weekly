/**
 * Code Tips #11 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Uso do: Array.fill

// ==> O método fill() preenche todos os valores do array a partir do
// índice inicial a um índice final com um valor estático.

let plantarCenouras = ['🌱', '🌱', '🌱', '🌱', '🌱'];
plantarCenouras.fill('🥕', 1, 4);

console.log(plantarCenouras);

// ==> Resultado:
// [ '🌱', '🥕', '🥕', '🥕', '🌱' ]



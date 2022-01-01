/**
 * Code Tips #02 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Usando o objeto 'Set' com Spread Operator para remover valores
// duplicados num determinado array

const listaArray = ['🍩', '🍎', 2, '🍎', '🍩', 2, '🍩', '🍎', 2];

const listaArraySemValoresDuplicados = [... new Set(listaArray)];

console.log(listaArraySemValoresDuplicados);

// ==> Resultado 
// [ '🍩', '🍎', 2 ]
/**
 * Code Tips #02 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de cรณdigo!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Usando o objeto 'Set' com Spread Operator para remover valores
// duplicados num determinado array

const listaArray = ['๐ฉ', '๐', 2, '๐', '๐ฉ', 2, '๐ฉ', '๐', 2];

const listaArraySemValoresDuplicados = [... new Set(listaArray)];

console.log(listaArraySemValoresDuplicados);

// ==> Resultado 
// [ '๐ฉ', '๐', 2 ]
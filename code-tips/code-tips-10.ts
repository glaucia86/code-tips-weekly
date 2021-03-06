/**
 * Code Tips #10 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de cΓ³digo!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Exemplo 01 - Exemplo de Tuplas (lista heterogΓͺnea)

let listFruitsTupleMixed: [string, ...string[], number] = ['π', 'π', 'π', 'π', 'π₯­', 5];
console.log(...listFruitsTupleMixed);
//  Resultado: π π π π π₯­ 5


// ==> Exemplo 02 - Exemplo de Arrays (lista homogΓͺnea)

let listFruitsArrayFixed: string[] = ['π', 'π', 'π', 'π', 'π₯­'];
console.log(listFruitsArrayFixed);
//  Resultado: π π π π π₯­

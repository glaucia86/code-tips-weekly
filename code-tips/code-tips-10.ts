/**
 * Code Tips #10 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Exemplo 01 - Exemplo de Tuplas (lista heterogênea)

let listFruitsTupleMixed: [string, ...string[], number] = ['🍍', '🍊', '🍎', '🍉', '🥭', 5];
console.log(...listFruitsTupleMixed);
//  Resultado: 🍍 🍊 🍎 🍉 🥭 5


// ==> Exemplo 02 - Exemplo de Arrays (lista homogênea)

let listFruitsArrayFixed: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(listFruitsArrayFixed);
//  Resultado: 🍍 🍊 🍎 🍉 🥭

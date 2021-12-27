/**
 * Code Tips #08 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Uso do método: 'flat'

/**
 * O método flat() cria um novo array com todos elementos sub-arrays
 * concatenados nele de forma recursiva até a profundidade especificada.
 */

// ==> Exemplo 01: Uso do flat com Infinity
const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]].flat(Infinity);

console.log(numbers);

// ==> Resultado:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ==> Exemplo 02: uso simples do 'flat'
const vaca = ["🐮", ["🐮", "🐮"], ["🐮", "🐮"], [[["🥛"]]]];
const copoLeite = vaca.flat(3)

console.log(copoLeite);

// ==> Resultado:
// [ '🐮', '🐮', '🐮', '🐮', '🐮', '🥛' ]



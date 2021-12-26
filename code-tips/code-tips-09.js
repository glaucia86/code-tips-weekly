/**
 * Code Tips #09 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Inúmeros usos de arrays com os métodos:

const array1 = ['🐼', '🦀', '🦊'].find(x => x == '🦊');
console.log(array1);
// ==> Resultado: 🦊

const array2 = ['🐼', '🦀', '🦊'].findIndex(x => x == '🦊');
console.log(array2);
// ==> Resultado: 2

const array3 = ['🐼', '🦀', '🦊'].map(x => x == '🦊' ? "🐸" : x);
console.log(array3);
// ==> Resultado: [ '🐼', '🦀', '🐸' ]

const array4 = ['🐼', '🦀', '🦊'].filter(x => x == '🦊');
console.log(array4);
// ==> Resultado: [ '🦊' ]

const array5 = ['🐼', '🦀', '🦊'].reduce((x, y) => x + y)
console.log(array5);
// ==> Resultado: 🐼🦀🦊


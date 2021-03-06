/**
 * Code Tips #09 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de cรณdigo!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Inรบmeros usos de arrays com os mรฉtodos:

const array1 = ['๐ผ', '๐ฆ', '๐ฆ'].find(x => x == '๐ฆ');
console.log(array1);
// ==> Resultado: ๐ฆ

const array2 = ['๐ผ', '๐ฆ', '๐ฆ'].findIndex(x => x == '๐ฆ');
console.log(array2);
// ==> Resultado: 2

const array3 = ['๐ผ', '๐ฆ', '๐ฆ'].map(x => x == '๐ฆ' ? "๐ธ" : x);
console.log(array3);
// ==> Resultado: [ '๐ผ', '๐ฆ', '๐ธ' ]

const array4 = ['๐ผ', '๐ฆ', '๐ฆ'].filter(x => x == '๐ฆ');
console.log(array4);
// ==> Resultado: [ '๐ฆ' ]

const array5 = ['๐ผ', '๐ฆ', '๐ฆ'].reduce((x, y) => x + y)
console.log(array5);
// ==> Resultado: ๐ผ๐ฆ๐ฆ


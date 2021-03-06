/**
 * Code Tips #06 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de cรณdigo!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Uso do mรฉtodo 'concat'
// se precisar juntar dois arrays, basta usar o mรฉtodo 'concat'

const arrayAnimais = [
  ['cachorro', '๐ถ'],
  ['gato', '๐ฑ'],
  ['sapo', '๐ธ'],
];

const arrayFrutas = [
  ['uva', '๐'],
  ['maca', '๐'],
  ['banana', '๐']
];

const combinacaoArrays = arrayAnimais.concat(arrayFrutas);
console.log(combinacaoArrays);
/**
 *[
    [ 'cachorro', '๐ถ' ],
    [ 'gato', '๐ฑ' ],
    [ 'sapo', '๐ธ' ],
    [ 'uva', '๐' ],
    [ 'maca', '๐' ],
    [ 'banana', '๐' ]
  ]
 */
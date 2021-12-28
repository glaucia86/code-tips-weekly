/**
 * Code Tips #06 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Uso do método 'concat'
// se precisar juntar dois arrays, basta usar o método 'concat'

const arrayAnimais = [
  ['cachorro', '🐶'],
  ['gato', '🐱'],
  ['sapo', '🐸'],
];

const arrayFrutas = [
  ['uva', '🍇'],
  ['maca', '🍎'],
  ['banana', '🍌']
];

const combinacaoArrays = arrayAnimais.concat(arrayFrutas);
console.log(combinacaoArrays);
/**
 *[
    [ 'cachorro', '🐶' ],
    [ 'gato', '🐱' ],
    [ 'sapo', '🐸' ],
    [ 'uva', '🍇' ],
    [ 'maca', '🍎' ],
    [ 'banana', '🍌' ]
  ]
 */
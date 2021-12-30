/**
 * Code Tips #04 - TypeScript/JavaScript (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Uso do método 'fromEntries'

// O método: Object.fromEntries() ajuda a converter um array com key pair 
// para objeto. (array -> object)

const arrayAnimais = [
  ['cachorro', '🐶'],
  ['gato', '🐱'],
  ['sapo', '🐸'],
];

const objetoAnimais = Object.fromEntries(arrayAnimais);
console.log(objetoAnimais);

/**
 * Resultado:
 * { cachorro: '🐶', gato: '🐱', sapo: '🐸' }
*/

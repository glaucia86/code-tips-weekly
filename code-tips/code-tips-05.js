/**
 * Code Tips #05 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Uso do método: 'Object.entries'
// server para converter de object para array

// Objeto de animais
const listaAnimais = { cachorro : '🐶', raposa: '🦊', ovelha: '🐏' };

// Usamos o 'Object.entries' para converter object -> array
const arrayAnimais = Object.entries(listaAnimais);
console.log(arrayAnimais);

/**
 * Resultado:
 * [ [ 'cachorro', '🐶' ], [ 'raposa', '🦊' ], [ 'ovelha', '🐏' ] ]
*/

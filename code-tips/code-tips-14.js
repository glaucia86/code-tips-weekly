/**
 * Code Tips #14 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> apply()

/**
 * O método apply() adiciona todos os elementos em um segundo array.
 */

// ==> Exemplo 01: Fusão de dois Arrays!

let comidaSaudavel = ['🌽', '🥑', '🍄']
let vegetais = ['🥦', '🥕', '🥔']


Array.prototype.push.apply(comidaSaudavel, vegetais);
console.log(comidaSaudavel);
// ==> Resultado:
// [ '🌽', '🥑', '🍄', '🥦', '🥕', '🥔' ]


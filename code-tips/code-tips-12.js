/**
 * Code Tips #12 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> split()
/**
 * Este método divide sua string em substrings separadas.
 */

// ==> Exemplo 01: uso simples do uso do método split()

let nome = 'Glaucia Lemos';
let substrings = nome.split(' ');

console.log(substrings);

// ==> Resultado:
// [ 'Glaucia', 'Lemos' ]


// ==> Exemplo 02: usando o split() para expressões regulares

let data = "05-01-2022";
dataArray = data.split(/[.,\/ -]/);

console.log(dataArray);
// ==> Resultado:
// [ '05', '01', '2022' ]
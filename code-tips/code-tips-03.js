/**
 * Code Tips #03 - TypeScript/JavaScript (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86 
 */

const pessoa01 = { nome: 'Glaucia', idade: 30, vacinado: true };
const pessoa02 = { nome: 'Jurema', idade: 40, vacinado: true };
const cachorro = { nome: 'Prince', idade: 1, vacinado: false };

console.table([pessoa01, pessoa02, cachorro]);

 //Resultado:
/*
┌─────────┬───────────┬───────┬──────────┐
│ (index) │   nome    │ idade │ vacinado │
├─────────┼───────────┼───────┼──────────┤
│    0    │ 'Glaucia' │  30   │   true   │
│    1    │ 'Jurema'  │  40   │   true   │
│    2    │ 'Prince'  │   1   │  false   │
└─────────┴───────────┴───────┴──────────┘
*/
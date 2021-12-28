/**
 * Code Tips #07 - TypeScript/JavaScript
 * (todas as quartas-feiras dicas de código!)
 * Twitter: @glaucia_lemos86
 * Lintree: linktree.ee/glaucia_lemos86
 */

// ==> Uso do método 'Object.assign() & Spread Operator'
// se você precisar mergear vários objetos em um só, basta usar o método 'assign'

let pessoa = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 34,
  contato: {
    twitter: '@glaucia_lemos86',
    email: 'glaucia.lemos@examplo.com'
  }
};

let trabalho = {
  funcao: 'Cloud Advocate',
  empresa: 'Microsoft',
  localizacao: 'Brasil/USA'
};

const mergeObjetos = Object.assign(pessoa, trabalho);
console.log(mergeObjetos);

// ==> Usando spread operator!

let pessoa = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 34,
  contato: {
    twitter: '@glaucia_lemos86',
    email: 'glaucia.lemos@examplo.com'
  }
};

let trabalho = {
  funcao: 'Cloud Advocate',
  empresa: 'Microsoft',
  localizacao: 'Brasil/USA'
};

let pessoaFuncionario = { ...pessoa, ...trabalho };
console.log(pessoaFuncionario);


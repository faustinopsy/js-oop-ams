import { pessoaFactory } from './pessoaFactory.js';

function adicionarAoDOM(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    document.getElementById('app').appendChild(div);
}

const pessoa1 = {nome: "Carlos",idade: 20, tipo: "Aluno"};
const pessoa2 = {nome: "Maria", idade: 20, tipo: "Professor"};
const pessoa3 = {nome: "Luiza", idade: 20, tipo: "Coordenador"};

const person = pessoaFactory.criarPessoa(pessoa3);
adicionarAoDOM(person.render());

import { Aluno } from './models/aluno.js';
import { Professor } from './models/professor.js';
import { Coordenador } from './models/coordenador.js';


export class pessoaFactory {

    static criarPessoa(pessoa) {
      const tipo = {
        Aluno: new Aluno(pessoa),
        Professor: new Professor(pessoa),
        Coordenador: new Coordenador(pessoa)
      }

     return tipo[pessoa.tipo] || new Error('Tipo de pessoa desconhecido.');
    } 
}

import { Aluno } from './models/aluno.js';
import { Professor } from './models/professor.js';
import { Coordenador } from './models/coordenador.js';

export class pessoaFactory {
    static criarPessoa(pessoa) {
        switch (pessoa.tipo) {
            case 'Aluno':
                return new Aluno(pessoa);
            case 'Professor':
                return new Professor(pessoa);
            case 'Coordenador':
                return new Coordenador(pessoa);
            default:
                throw new Error('Tipo de pessoa desconhecido.');
        }
    }
}

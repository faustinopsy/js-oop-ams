import { Pessoa } from './pessoa.js';

export class Coordenador extends Pessoa {
    constructor(pessoa) {
        super(pessoa.nome, pessoa.idade);
        this.tipo = pessoa.tipo;
    }

    info() {
        return `${this.cumprimentar()} Eu sou ${this.tipo}.`;
    }
    render() {
      const div = super.render();
      const alunodiv = document.createElement('div');
      alunodiv.innerHTML = this.info();
      div.appendChild(alunodiv);
    }
}

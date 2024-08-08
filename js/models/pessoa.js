export class Pessoa {
  constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
  }

  cumprimentar() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
  render() {
    const div = document.querySelector('#app');
    return div;
}
}

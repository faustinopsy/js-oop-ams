# Projeto SPA - OOP

## Descrição

Este é um projeto didático desenvolvido com o objetivo de ensinar conceitos de Programação Orientada a Objetos (OOP) e padrões de projeto aplicados ao frontend. O projeto implementa uma Single Page Application (SPA) simples, onde diferentes perfis de usuários (Aluno, Professor, Coordenador) são criados e exibidos dinamicamente na interface usando classes em JavaScript.

## Estrutura do Projeto

O projeto é composto por uma série de arquivos organizados da seguinte maneira:

```
/js
  pessoaFactory.js
  app.js
    /models
        pessoa.js
        aluno.js
        professor.js
        coordenador.js
index.html
```
## Arquivos Principais
- index.html: Estrutura básica da aplicação, onde o conteúdo é exibido no elemento #app.
- pessoa.js: Define a classe base Pessoa, que serve como modelo para os outros tipos de perfis.
- aluno.js, professor.js, coordenador.js: Implementam as classes Aluno, Professor e Coordenador, que herdam de Pessoa.
- pessoaFactory.js: Implementa o padrão Factory, responsável por criar instâncias de Aluno, Professor ou Coordenador com base nos dados fornecidos.
- app.js: Arquivo principal que coordena a criação e exibição das pessoas na interface.
## Conceitos Envolvidos
### Programação Orientada a Objetos (OOP)
A Programação Orientada a Objetos é uma abordagem de desenvolvimento de software que organiza o código em objetos, que são instâncias de classes. Cada objeto pode conter dados (atributos) e funcionalidades (métodos) que operam sobre esses dados.

No projeto, as classes Pessoa, Aluno, Professor e Coordenador são exemplos de como a OOP é aplicada no frontend para criar diferentes perfis de usuários.

## Padrões de Projeto
- 1. Factory Pattern (Padrão de Fábrica)
O padrão Factory é utilizado para criar objetos sem expor a lógica de criação ao cliente e referenciando a nova instância usando uma interface comum. No projeto, a classe pessoaFactory é responsável por criar instâncias de Aluno, Professor ou Coordenador, dependendo do tipo de pessoa fornecido.

- 2. Herança
As classes Aluno, Professor e Coordenador herdam da classe base Pessoa, aproveitando e estendendo as funcionalidades da classe pai.

## Vantagens de Usar OOP e Padrões de Projeto no Frontend
Reutilização de Código: Com a OOP, é possível criar classes reutilizáveis e herdar suas propriedades e métodos, evitando repetição de código.

### Manutenção: 
Com uma estrutura bem organizada e modular, a manutenção do código se torna mais fácil. Alterações em uma classe base se propagam para todas as classes que a herdam.

### Flexibilidade: 
Usando o padrão Factory, é possível adicionar novos tipos de pessoas sem modificar o código existente, seguindo o princípio de extensão sem modificação.

### Escalabilidade: 
O código se torna mais fácil de escalar e estender com a aplicação correta de padrões de projeto e OOP, permitindo a adição de novas funcionalidades e tipos de objetos de forma simples.

## Conclusão

Este projeto serve como um ponto de partida para entender como aplicar conceitos de OOP e padrões de projeto no desenvolvimento frontend. A prática desses conceitos no contexto de uma SPA ajuda a solidificar o entendimento e demonstra como esses padrões podem ser aplicados em situações reais de desenvolvimento.
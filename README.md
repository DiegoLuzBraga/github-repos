## Git Repos

## :arrow_forward: Como executar

1. Tenha certeza de que tem [instalado o npm na sua máquina](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/#:~:text=Para%20verificar%20se%20o%20node,comando%20conforme%20a%20imagem%20abaixo.).
2. Após isso, pelo terminal, vá até o diretório onde baixou o projeto;
3. Agora, execute o comando `npm i` para baixar todas as dependências do projeto;
4. Após a instalação das dependências, execute o comando `npm run start` e será aberta uma aba no seu navegador padrão com o endereço [http://localhost:8080/](http://localhost:8080/);
5. A aplicação necessita de internet para funcionar;

## :computer: Tecnologias utilizadas

**Bibliotecas**

- React;
- Typescript;
- Mobx;
- SASS;
- jest;
- react testing library;

**Linguagem**: Javascript

**Arquitetura:** Redux-Like

## :scroll: Features

- [x]
- []

## :bar_chart: Justificativa para o uso das tecnologias

**Decisões técnicas:**
Alguns fatores chave nortearam a maioria das decisões técnicas feitas no desenvolvimento dessa aplicação: código reutilizável, testável e facilmente substituível sem grandes refatorações a aplicação. Mesmo sendo uma aplicação pequena, as decisões foram tomadas visualizando um desenvolvimento contínuo e escalável.

**Redux-Like e Mobx**

- Optei por utilizar Typescript por ter maior familiaridade.
- A arquitetura em questão foi escolhida devido a sua testabilidade, separação de responsabilidade e fácil integração com os componentes React e outros recursos utilizados no projeto como Hooks e injeção de dependência. Utilizar uma arquitetura Redux-Like facilitou a implementação desses processos e facilitando a substituição dos métodos em caso de testes ou até na troca por outra API sem a necessidade de grande refatoração no código.

**Injeção de dependência**

- Além de ser uma prática que auxilia na criação de uma boa arquitetura, a injeção de dependência apresenta as vantagens que nortearam a maioria das decisões técnicas feitas no desenvolvimento dessa aplicação: código reutilizável, testável e de facil refatoração.

**Jest e RTL**

- As bibliotecas Jest e React Testing Library (RTL) são open-source e possuem confiabilidade dentro da comunidade React, possuem atualizações frequentes e usos em diversas aplicações comerciais.

## :interrobang: Observações

- Caso o usuário tenha definido suas preferências e clique em alguma categoria, serão mostradas as preferências e a categoria selecionada.

## :thought_balloon: Será que esqueci alguma coisa?

Caso tenha alguma dúvida, sugestão ou melhoria é só falar! (ou abrir um PR).

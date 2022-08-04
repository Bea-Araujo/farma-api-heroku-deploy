# :computer: Introdução ao projeto:
   
   Como trabalho final do módulo 4 do curso de Web Dev. Full Stack, oferecido pela Resília Educação, foi proposta a criação de uma API *(Application Programming Interface)* para um estabelecimento, tendo como requisitos: 
- Padrão Rest de criação de API's;
- Implementação de arquitetura MVC;
- Design Pattern DAO *(Data Access Object)*;
- Operações CRUD;
- Utilização de uma metodologia ágil para a realização do projeto.

# Tema do projeto:

Foram sinalizados alguns temas para serem abordarmos em nossa API, no qual cada equipe deveria escolher uma opção, entre eles:Escola

- Restaurante;
- Farmácia;
- Agência de publicidade;
- Academia;
- Garagem de veículos;
- Loja de informática;
- Pub;
- Oficina mecânica;
- Hamburgueria;
- Dentista;
- Auto-escola;
- Transportadora;
- Estúdio de tatuagem;
- Hotel;
- Imobiliária;
- Livraria;
- Posto de Combustível;
- Salão de beleza;
- Cinema. 

Ao decorrer do módulo, avistamos que seria interessante planejar uma API sobre farmácia devido as várias opções de rotas que seriam possíveis de serem planejadas e por possuirmos o senso sobre o funcionamento dentro desse tipo de comércio, facilitando assim, nosso projeto.



# :wrench: Tecnologias utilizadas:
- JavaScript.
- NodeJS;
- Express;
- Sequelize;
- SQLite.


# Metodologia ágil utilizada:

Para melhor qualidade e distribuição de atividades, utilizamos como procedimento a Metodologia Scrum, que consiste em um framework com a finalidade de entregar um projeto mais rápido, otimizando os recursos. Nesse modelo, potencializamos o trabalho em equipe, cumprindo prazos e acompanhando com mais visibilidade a evolução do projeto. Com o tema escolhido, nos reunimos e abordamos como seria o processo do trabalho, a partir disso iniciamos um arquivo, que funciona como um gerenciador de projetos, na plataforma Azure DevOps Server da empresa Microsoft, e nomeamos cada sessão de atividades e o tempo diário que cada um teria disponível para realizar evoluções na atividade proposta. Após isso, iniciamos uma contagem de esforço e tempo necessário para a realização de cada exercício no Planning Poker, sendo uma técnica utilizada para que os desenvolvedores possam estimar um número em segredo, revelado logo em seguida, devendo justificar o porquê daquele número ter sido escolhido dentre os demais. Com o gerenciador, o tempo e esforço já criados, iniciamos de fato a realização por códigos, devendo sempre a se atentar em transferir o status da atividade, de do, para doing, e em seguida para done. Ao decorrer do projeto também foram realizadas dailys pelas manhãs para que além de acompanhar na plataforma, fosse possível conversar sobre o trabalho e o que cada um executou no dia anterior e iria realizar no dia em questão. Utilizando essa metodologia ágil analisamos que o projeto obteve grande evolução em um curto prazo de tempo e que as atividades foram cumpridas dentro do prazo determinado, além disso foi possível examinar também que a equipe conseguiu se consolidar de maneira mais precisa sobre o que seria essencial ser desempenhado.

# :seedling: Utilizando a aplicação:
#### **1º passo:** Clonar o projeto.
Para isso, abra o terminal e rode o seguinte comando: 

    $ git clone  https://github.com/VeronicaRibas/Projeto_Final.git

#### **2° passo:** Instalação das dependências do projeto:

:warning: Para executar essa aplicação é exigida a instalação prévia do NodeJS. Sua documentação, contendo o link de instalação pode ser acessada [aqui](https://nodejs.dev/download/).

#### :point_right: As dependências necessárias para executar a aplicação são:

 - [Express](https://expressjs.com/pt-br/starter/installing.html): É um framework para NodeJS que tem a função de fornecer recursos que são utilizados no desenvolvimento de servidores web;
- [Sequelize](https://sequelize.org/docs/v6/getting-started/): Framework com a função de facilitar a comunicação do banco de dados com a aplicação e automatizando processos;
- [SQLite3](https://www.npmjs.com/package/sqlite3): Banco de dados utilizado na aplicação.

*(Para acessar a documentação de cada dependência, clique nos links em destaque)*


---
Para instalar as dependências rode o seguinte comando no terminal para cada uma delas:

     npm install <nome da dependência>
:bulb: Para salvar as dependências no arquivo package.json, basta adicionar " --save " após o nome da dependência.

---
#### **3° passo:** Rodando o projeto:
Após a instalação das dependências, rode o seguinte comando no terminal para executar a aplicação:

    node app.js

# Rotas Possíveis
Em nosso projeto, realizamos a criação das rotas: Costumer, Category, Product, Pharmacist, Supplier. Para a realização dessas rotas se fez necessário a instalação do Node.js com o Express. Essas rotas são compostas por 4 divisões sendo elas a instância do express, o método de requisição (GET, POST, PUT, DELETE) e a função que será executada.


# Autores

Ana Paula Fedechem: Coordenadora
Ana Luiza Ferreira: Colaboradora
Nahla Valentina: Gestora de Conhecimento
Patrick Patchelli: Gestor de Gente e Engajamento
Verônica Ribas: Colaboradora





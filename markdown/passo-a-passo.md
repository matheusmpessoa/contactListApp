## passo-a-passo

Confira aqui o passo a passo de como criar uma aplicação MEAN.

### Passo a passo de como criar uma aplicação Express

1. Ter Git instalado
2. Ter o Node.js instalado
3. Criar uma pasta vazia
4. Abrir o diretorio através do 'Git bash'
5. Digite: npm install express
6. Crie o script com o nome: 'server.js'
7. Para executar digite o comando 'node server'

### Utilizando AngularJS

1. Importação do AngularJS no body do index.html
2. Criar ng-app
3. Definir um nome para a ng-app
4. Criar uma pasta com o nome de 'controllers'
5. Criar arquivo controller.js
6. Criar controller
7. Inserir Bootstrap (opcional)
8. Criar conteúdo da aplicação

### Instalação MongoDB e mongojs

1. Baixar e instalar o mongodb no computador
2. Criar as pastas necessárias para a execução do banco
3. Abrir a raiz do projeto dentro do terminal
4. Digitar 'npm install nodejs' para instalar o mongo js ("os arquivos da instalação se encontrarão dentro da pasta node_modules")
5. Adicionar as variáveis de configuração de comunicação do node-express com o mongo no header do arquivo server.js

### Criação das entradas do usuário na aplicação

1. Criar os inputs no index.html
2. Criar no controller.js o método 'addContact' que terá como funcionalidade adicionar os contatos
3. Criar no server.js o get e post do método adicionar

### Instalação body-parser

1. Abrir a raiz do projeto dentro do terminal
2. Digitar 'npm install body-parser' para instalar body-parser
3. Adicionar as variáveis de configuração de comunicação do body-parser no header do arquivo server.js

### Inserção no mongodb

1. Declarar dentro do método post a inserção da informação que será gravada no banco

### Refresh

1. Refresh adicionado para atualizar os contatos a cada inserção
2. Criar a variável 'refresh' que recebe o GET da agenda, realizando assim a atualização
3. A cada ação realizada o refresh será chamado

### Deletar, editar e atualizar

1. Criar um método para cada ação
2. Todas as ações são criadas através da manipulação da id do mongo
3. A remoção do contato é criada pela função nativa do js, o 'delete'
4. A edição de uma informação do contato é manipulada pelo get
5. A atualização é feita pela interação com a id
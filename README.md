# Este projeto é um sistema web completo para gerenciamento de clientes, pedidos e produtos.
# O sistema permite gerenciar categorias de produtos, criar pedidos e associá-los a clientes, com uma interface intuitiva e moderna.
# A aplicação inclui um frontend responsivo desenvolvido em Angular e um backend robusto em .NET Core com banco de dados SQLite.

# Frontend
Navegação dinâmica: Com botões que redirecionam para as páginas "Início", "Categoria", "Cardápio".
Sistema de Cardápio:
Exibição de até 3 cards por vez, com a opção de ver mais.
Responsividade garantida para dispositivos móveis.
Integração com o backend para carregar produtos.

Componentes Reutilizáveis:
app-header: Componente do cabeçalho.
app-card: Exibição de produtos.
app-button: Botões reutilizáveis para ações no sistema.
app-detalhes: Visualização de detalhes dos produtos

# backend
Estrutura Relacional:
Clientes, Pedidos e Produtos são integrados por tabelas intermediárias:
ClientePedido: Relaciona clientes com pedidos.
PedidoProduto: Relaciona produtos com pedidos.
Categorias associadas a produtos.
Status para gerenciar o estado dos pedidos.

API RESTful:
Endpoints para CRUD de clientes, pedidos e produtos.
Banco de Dados SQLite:
Gerenciamento eficiente com migrações do Entity Framework.


# Como instalar
1. Clone o repositório: https://github.com/1Sander/ApiCrudTic36.git
2. Restaure as dependências do .NET Core: dotnet restore
3. Execute as migrações para configurar o banco de dados: dotnet ef database update
4. Inicie o Servidor: dotnet run
5. Clone o repositório: https://github.com/1Sander/BurguerManiaTic36.git
6. Instale as dependências do Angular: npm install
7. Inicie o servidor de desenvolvimento: ng serve
8. Acesse a aplicação em http://localhost:4200.
# Sistema de Gerenciamento de Músicas

## Descrição

Este projeto consiste em um sistema completo de gerenciamento de músicas, desenvolvido com:

* **Frontend:** React
* **Backend:** Node.js com Express
* **Banco de Dados:** MySQL

O sistema permite realizar operações de **CRUD** (Create, Read, Update, Delete) sobre músicas.

##  Funcionalidades

* Listar músicas
* Visualizar detalhes de uma música
* Cadastrar nova música
* Editar música existente
* Deletar música
* Paginação na listagem

---

## Banco de Dados

O projeto inclui um arquivo `.sql` para criação do banco e inserção de dados.

### Importar o banco de dados

1. Abra o **MySQL Workbench**
2. Vá em:

   * `Server` → `Data Import`
3. Selecione:

   * **Import from Self-Contained File**
4. Escolha o arquivo `.sql` do projeto
5. Clique em **Start Import**

---

##  Importante sobre o arquivo `.sql`

O arquivo exportado pelo MySQL Workbench **não inclui automaticamente a criação do banco de dados**.

Por isso, foram adicionadas manualmente as seguintes linhas no início do arquivo:

```sql
DROP DATABASE IF EXISTS musicas_db;
CREATE DATABASE musicas_db;
USE musicas_db;
```

Isso foi necessário, pois durante os testes foi observado que sem essas linhas, o script pode falhar
O erro ocorre porque o banco de dados pode não existir ainda

---

## Como rodar o projeto

### Backend

1. Acesse a pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados no arquivo `server.js`:

```js
host: 'localhost',
user: 'root',
password: '',
database: 'musicas_db'
```

> Caso necessário, ajuste usuário e senha conforme seu MySQL.

4. Inicie o servidor:

```bash
node server.js
```

O servidor será iniciado na porta **3001**.

---

### Frontend

1. Acesse a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm run dev
```

O sistema estará disponível no navegador (geralmente em `http://localhost:5173`).

# Desaﬁo Full-Stack Evah.io

# Sumário

- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Desenvolvimento](#desenvolvimento)
- [Instruções](#instruções)
- [Data de Entrega](#data-de-entrega)

---

## Habilidades
Este projeto demonstra que sou capaz de:

  * Desenvolver aplicações Front-End utilizando React;

  * Manipular estado global utilizando ContextApi;

  * Autenticar usuário por meio de JWT;

  * Manter segurança do JWT no local storage (secureLocalStorage); 

  * Desenvolver aplicações Back-End utilizando Node.js+Express;

  * Manter comunicação com banco de dados sql via ORM - neste caso, Sequelize;

  * Construir API's utilizando arquitetura MSC;

  * Construir API's com política saudável de cors.

---

## Desenvolvimento

### Front-End (React):

* Uma tela página de login seguindo o escopo passado no link do [figma](https://www.figma.com/file/Fnbf8y5IInAZVhrtyw0B2U/Untitled?node-id=0%3A1)

* Uma tela após o login que só pode ser acessada depois de ter feito autenticação, contendo apenas um botão para fazer logout.

* A tela de login tem um formulário e deverá fazer validação dos campos (utilizar lib que achar melhor, react-hook-forms, uniform , etc ...).

* Esse formulário deverá fazer uma requisição ao backend montado em nodeJs que terá somente uma rota de autenticação utilizando axios para tal ação.

* Utilizar Redux ou ContextApi para controlar autenticação da plataforma

### Back-End (NodeJs):

* Um servidor em NodeJS que utilizará express para suportar requisições HTTP

* Deverá ter somente uma rota que será a autenticação requisitada pelo front-end onde receberá os campos email e senha e retorna os seguintes campos:

```json
{
  "user": {
    "name":"nome que você escolher",
    "email":"email vindo do login"
  },
  "token":"TOKEN JWT obrigatório"
}
```

---

## Instruções

### 1. Ao baixar e entrar no repositório, instale as dependências do Back-End:

```sh
cd back-end
npm install
```

### 2. Copie o conteúdo do exemplo .env

```sh
cp .env.example .env
```

E altere para as variáveis de sua preferência.

Obs.: Caso queira testar sem utilizar a conexão com banco de dados, apenas adicione `MOCK_DB=true` ao seu .env e pule para o [passo 4](#4-inicie-a-api).

### 3. Inicie o banco de dados

```sh
npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all 
```

### 4. Inicie a API

```sh
npm start 
```

### 5. Instale as dependências do Front-End

```sh
cd ../front-end
npm install 
```

### 6. Copie o conteúdo do exemplo .env

```sh
cp .env.example .env
```

E altere para as variáveis de sua preferência.

### 7. Inicie o Front-End

```sh
npm run dev
```

Obs.: Considerando que o modelo escolhido seja utilizando o banco de dados, é possível realizar login e logout com as credenciais do usuário teste:

```javascript
{
  email: 'user@test.com',
  password: 'senha-definida-no-.env'
}
```

---

## Data de Entrega

  - Data de entrega para avaliação final: `25/08/2023 - 23:59h`.

---

# NLW Valoriza

## Sobre

O projeto NLW Valoriza é uma API para dar e receber elogios entre os usuários. A ideia do projeto é dar reconhecimento aos usuários pelas suas boas ações.

## Tabela de conteúdos

<!--ts-->

- [Sobre](#sobre)
- [Status do projeto](#status-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Endpoints](#endpoints)
- [Pré-requisitos e como rodar a aplicação/testes](#pre-requisitos)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Autor](#autor)

<!--te-->

## Status do projeto

🚧 Em construção 🚧

## Funcionalidades

- [x] Cadastro de usuários
- [x] Cadastro de tags
- [x] Cadastro de elogios
- [x] Autenticação JWT de usuário
- [x] Listagem de usuários
- [x] Listagem de tags
- [x] Listagem de elogios

## Endpoints

---

### Para acessar as rotas que precisam do token de autenticação, faça:

| Header        |                  |
| ------------- | ---------------- |
| authorization | Bearer JWT_Token |

### /users

#### GET: lista os usuários cadastrados. Requer autenticação.

Retorno:

```JSON
[
  {
    "id": "002b2513-9519-4c68-9211-1495d8a96722",
    "name": "User1",
    "email": "user1@mail.com",
    "admin": true,
    "created_at": "2021-06-24T15:08:42.000Z",
    "updated_at": "2021-06-24T15:08:42.000Z"
  },
  {
    "id": "5ff4d6a6-f341-4923-8b44-69a130ef1516",
    "name": "User2",
    "email": "user2@mail.com",
    "admin": false,
    "created_at": "2021-06-24T18:46:04.000Z",
    "updated_at": "2021-06-24T18:46:04.000Z"
  },
  {
    "id": "58996970-38f2-41eb-84cb-5b6d8d084b45",
    "name": "User3",
    "email": "user3@mail.com",
    "admin": false,
    "created_at": "2021-06-24T18:57:19.000Z",
    "updated_at": "2021-06-24T18:57:19.000Z"
  }
]
```

#### POST: Criar um usuário.

```typescript
{
	"name": string,
	"email": string,
	"password": string
}
```

### /tags

#### GET: Lista as tags criadas. Requer autenticação.

Retorno:

```JSON
[
  {
    "id": "2d6e2507-2d39-4681-b42f-e286bd3f9a4b",
    "name": "inspiração",
    "created_at": "2021-06-23T17:14:49.000Z",
    "updated_at": "2021-06-23T17:14:49.000Z",
    "name_custom": "#inspiração"
  },
  {
    "id": "23aab460-cbe5-4d84-ba4e-e83adfffb873",
    "name": "Atencioso",
    "created_at": "2021-06-25T14:43:03.000Z",
    "updated_at": "2021-06-25T14:43:03.000Z",
    "name_custom": "#Atencioso"
  }
]
```

#### POST: Criar uma tag. Requer autenticação.

```typescript
{
	"name": string
}
```

### /compliments

#### POST: Criar um elogio. Requer autenticação.

```ts
{
	"tag_id": string,
	"user_receiver": string,
	"message": string
}
```

### /login

#### POST: Autenticação.

```ts
{
	"email": string,
	"password": string
}
```

### /users/compliments/sent

#### GET: Lista os elogios enviados pelo seu usuário. Requer autenticação.

```JSON
[
  {
    "id": "fbc00d1a-536a-48f7-945c-0d40623023a5",
    "user_sender": "002b2513-9519-4c68-9211-1495d8a96722",
    "user_receiver": "5ff4d6a6-f341-4923-8b44-69a130ef1516",
    "tag_id": "2d6e2507-2d39-4681-b42f-e286bd3f9a4b",
    "message": "Um elogio para você!",
    "created_at": "2021-06-24T18:48:23.000Z"
  },
  {
    "id": "ec981e42-2ac0-4736-8b3e-f32d72b01d00",
    "user_sender": "002b2513-9519-4c68-9211-1495d8a96722",
    "user_receiver": "5ff4d6a6-f341-4923-8b44-69a130ef1516",
    "tag_id": "2d6e2507-2d39-4681-b42f-e286bd3f9a4b",
    "message": "Outro elogio!",
    "created_at": "2021-06-25T14:48:56.000Z"
  }
]
```

### /users/compliments/received

#### GET: Lista os elogios recebidos pelo seu usuário. Requer autenticação.

```JSON
[
  {
    "id": "fbc00d1a-536a-48f7-945c-0d40623023a5",
    "user_sender": "002b2513-9519-4c68-9211-1495d8a96722",
    "user_receiver": "5ff4d6a6-f341-4923-8b44-69a130ef1516",
    "tag_id": "2d6e2507-2d39-4681-b42f-e286bd3f9a4b",
    "message": "Um elogio para você!",
    "created_at": "2021-06-24T18:48:23.000Z"
  },
  {
    "id": "ec981e42-2ac0-4736-8b3e-f32d72b01d00",
    "user_sender": "002b2513-9519-4c68-9211-1495d8a96722",
    "user_receiver": "5ff4d6a6-f341-4923-8b44-69a130ef1516",
    "tag_id": "2d6e2507-2d39-4681-b42f-e286bd3f9a4b",
    "message": "Outro elogio!",
    "created_at": "2021-06-25T14:48:56.000Z"
  }
]
```

<h2 id="pre-requisitos">Pré-requisitos e como rodar a aplicação/testes</h2>

Você vai precisar ter instalado no seu computador:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/) (opcional)
- [Yarn](https://yarnpkg.com/) (opcional)

Para rodar esse projeto:

```
# Abra o seu terminal

# Clone esse repositório para a sua máquina

$ git clone https://github.com/HalexV/nlw-valoriza.git

# Entre na pasta do projeto

$ cd pasta_do_projeto

# Rode o seguinte comando para instalar as dependências do projeto

$ yarn install

# Rode o seguinte comando para executar o projeto em modo de desenvolvimento

$ yarn dev
```

## Tecnologias utilizadas

- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Node.js](https://nodejs.org/en/)
- [TypeORM](https://typeorm.io/#/)
- [TypeScript](https://www.typescriptlang.org/)

# Autor

<div>
  <img src="https://avatars.githubusercontent.com/u/14897195?s=96&v=4" alt="Hálex Viotto Gomes" title="Hálex Viotto Gomes" />
  <p>Hálex Viotto Gomes</p>
</div>

<div>
  <a href="https://github.com/HalexV">
    <img src="https://img.shields.io/static/v1?label=GitHub&message=HalexV&color=181717&style=for-the-badge&logo=GitHub"/>
  </a>

  <a href="https://www.linkedin.com/in/halexviottogomes/">
    <img src="https://img.shields.io/static/v1?label=LinkedIn&message=Hálex Viotto Gomes&color=0A66C2&style=for-the-badge&logo=LinkedIn"/>
  </a>

  <a href="https://app.rocketseat.com.br/me/halex-viotto-gomes-1594515532">
    <img src="https://img.shields.io/static/v1?label=App&message=Rocketseat&color=7159c1&style=for-the-badge&logo="/>
  </a>
</div>

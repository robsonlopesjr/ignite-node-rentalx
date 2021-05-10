<h1>Ignite NodeJS - Rentx</h1>

> Status do Projeto: :construction: (Em construção)

### 📖 Tópicos

:small_blue_diamond: [Descrição do projeto](#-descrição-do-projeto)

:small_blue_diamond: [Requisitos do projeto](#-requisitos-do-projeto)

:small_blue_diamond: [Funcionalidades](#-funcionalidades)

:small_blue_diamond: [Rotas](#-rotas)

:small_blue_diamond: [Pré-requisitos](#-pré-requisitos)

:small_blue_diamond: [Como execultar a aplicação](#-como-execultar-a-aplicação)

:small_blue_diamond: [Tecnologias](#-tecnologias)

:small_blue_diamond: [Aluno](#-aluno)

---

## 💻 Descrição do projeto

<p align="justify">
Aplicação de um sistema de aluguel de carros, desenvolvida durante o curso Ignite (Trilha NodeJS) da Rocketseat.
</p>

---

## ⚙️ Requisitos do projeto

## Cadastro de carro

### Requisitos Funcionais

- Deve ser possível cadastrar um novo carro.

### Regras de Negócio

- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

## Listagem de carros

### Requisitos Funcionais

- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

### Regras de Negócio

- O usuário não precisa estar logado no sistema.

## Cadastro de especificação no carro

### Requisitos Funcionais

- Deve ser possível cadastrar uma especificação para um carro.

### Regras de Negócio

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

## Cadastro de imagens do carro

### Requisitos Funcionais

- Deve ser possível cadastrar a imagem do carro.

### Requisitos Não Funcionais

- Utilizar o multer para upload dos arquivos.

### Regras de Negócio

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

## Aluguel de carro

### Requisitos Funcionais

- Deve ser possível cadastrar um aluguel.

### Regras de Negócio

- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação.

## Devolução de carro

### Requisitos Funcionais

- Deve ser possível realizar a devolução de um carro

### Regras de Negócio

- Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do - aluguel.
- Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação

## Listagem de Alugueis para usuário

### Requisitos Funcionais

- Deve ser possível realizar a busca de todos os alugueis para o usuário.

### Regras de Negócio

- O usuário deve estar logado na aplicação.

## Recuperar Senha

### Requisitos Funcionais

- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

### Regras de Negócio

- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas

---

## ⚙️ Funcionalidades

:heavy_check_mark: Cadastrar um novo usuário.

:heavy_check_mark: Atualizar a foto de um usuário.

:heavy_check_mark: Autenticação de usuário utilizando token.

:heavy_check_mark: Cadastrar categorias dos carros.

:heavy_check_mark: Listar todas as categorias cadastradas.

:heavy_check_mark: Cadastrar especificação dos carros.

---

## :world_map: Rotas

### POST `/users`

A rota deve receber `name`, `email`, `password` e `driver_license` pelo corpo da requisição e retornar um objeto com as informações do usuário criado e um status `201`.

### PATCH `/users/avatar`

A rota deve receber `avatar_file` pelo corpo da requisição e retornar um objeto com as informações do usuário atualizado e um status `201`.

### POST `/sessions`

A rota deve receber `email` e `password` pelo corpo da requisição e retornar um objeto com as informações do token do usuário.

### POST `/categories`

A rota deve receber `name` e `description` pelo corpo da requisição e retornar um objeto com as informações da categoria criada e um status `201`.

### GET `/categories`

A rota deve retornar uma lista contendo todas as categorias cadastradas.

### POST `/specifications`

A rota deve receber `name` e `description` pelo corpo da requisição e retornar um objeto com as informações da especificação criada e um status `201`.

### POST `/cars`

A rota deve receber `name`, `description`, `daily_rate`, `license_plate`, `fine_amount`, `brand`, `category_id` pelo corpo da requisição e retornar um objeto com as informações do carro criado e um status `201`.

---

## 🎯 Pré-requisitos

:warning: [NodeJS](https://nodejs.org/en/)

:warning: [Yarn](https://yarnpkg.com/)

:warning: [Vscode](https://code.visualstudio.com/download)

---

## ▶️ Como execultar a aplicação

No terminal, clone o projeto:

```bash

# Faça o clone da aplicação
git clone https://github.com/robsonlopesjr/ignite-node-rentalx

# Instale as dependências
yarn

# Execute a aplicação em modo de desenvolvimento. O servidor inciará na porta:3333 - acesse http://localhost:3333
yarn dev

# Execute os testes da aplicação
yarn test

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[NodeJs](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[Jest](https://www.npmjs.com/package/jest)**
- **[uuidv4](https://www.npmjs.com/package/uuid)**

---

## :man_technologist: Aluno

<a href="https://www.instagram.com/robson.junior.184/">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/69487360?s=400&u=7956928a6764b5ab125fccfa6350c58e3414e2ff&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Robson Júnior</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-Robson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/robsonlopesjr)](https://www.linkedin.com/in/robsonlopesjr)

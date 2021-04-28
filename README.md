<head>
  <p align="center">
    <img src=https://img.shields.io/badge/last%20commit-24%2F04%2F2021-03BB85/>
    <img src=https://img.shields.io/badge/license-MIT-03BB85/>
  </p>
  <p align="center">
    <img src="./assets/icon.png" height="200" width="200"/>
  </p>
  <h1 align="center">
    PlantManager
  </h1>
</head>

<p align="center">
<a href="#books-descrição-do-projeto">Descrição do Projeto</a>
|
<a href="#computer-tecnologias">Tecnologias</a>
|
<a href="#rocket-execução">Execução</a>
|
<a href="#camera-interfaces-do-app">Interfaces do App</a>
</p>

## :books: Descrição do Projeto

   O PlantManager é um App que permite o cadastro de plantinhas dos usuários, associando-as aos ambientes da casa em que estão distribuídas e lembrando o usuário do horário de regá-las através de notificações no próprio dispositivo.

## :computer: Tecnologias

A stack utilizada para criar o plantManager está em constante atualização. Até o presente momento, as seguintes tecnologias foram escolhidas:

- React Native
- Expo
- TypeScript

## :rocket: Execução

- ### **Pré-requisitos**

  - É necessário ter instalado em sua máquina o **[Expo](https://expo.io/)** e no seu dispositivo móvel, caso utilize.
  - É necessário a instalação da biblioteca **[React Native](https://reactnative.dev/)** na versão mais recente.
  - É **necessário** ter o **[Git](https://git-scm.com/)** (v2.29.0 for Windows) instalado e configurado no computador.
  - Para a configuração e instalação usaremos um gerenciador de pacotes. Recomendamos o uso do **[Yarn](https://yarnpkg.com/)**.

1. Clone o repositório

```sh
  $ git clone https://github.com/luqiborges/plantManager.git
```

2. Execute o App:

```sh
  $ expo start
```

3. Execute a Fake API para receber os dados que o App consome, através do JsonServer:

```sh
  $ json-server ./src/services/server.json --host <IP da sua máquina> --port 3333 <Porta utilizada no projeto>
```

4. Selecione, através da aba do Expo aberta no navegador, onde deseja abrir o App:
```sh
  Emulador IOS/Android
  Dispositivo Móvel
```

5. Prontinho. 😁


## :camera: Interfaces do App


<p align="center">
  <img src="./github/teladeentrada.jpeg" alt="Tela de Entrada" height="400" width="180"/>
  <img src="./github/telainicial.jpeg" alt="Tela Inicial" height="400" width="180"/>
  <img src="./github/nome.jpeg" alt="Tela de Nome" height="400" width="180"/>
  <img src="./github/telaprincipal.jpeg" alt="Tela Principal" height="400" width="180"/>
  <img src="./github/minhasplantas.jpeg" alt="Minhas Plantas" height="400" width="180"/>
</p>

---

> O PlantManager foi construído durante a Next Level Week #05, promovida pela Rocketseat em 2021.

  

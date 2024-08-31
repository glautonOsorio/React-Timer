# Template Garcia React

Este projeto é um template React configurado com Vite, styled-components, Emotion, Material UI e várias outras utilidades para acelerar seu desenvolvimento.

## Índice

- [Introdução](#introdução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Dependências](#dependências)
- [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
- [Licença](#licença)

## Introdução

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- Node.js >= 14
- npm ou yarn

### Instalação

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/glautonOsorio/TemplateGarcia-React.git
cd template-garcia-react
npm install
```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Vite, e você poderá visualizar o projeto em `http://localhost:3000`.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
template-garcia-react
│
├── public/             # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e outros ativos
│   ├── components/     # Componentes reutilizáveis
│   ├── contexts/       # Implementações da API de Contexto do React
│   ├── helper/         # Funções utilitárias
│   ├── hooks/          # Hooks personalizados do React
│   ├── layout/         # Componentes de layout (cabeçalho, rodapé, etc.)
│   ├── pages/          # Páginas da aplicação
│   ├── routes/         # Definições de rotas
│   ├── server/         # Servidor mock com json-server
│   ├── services/       # Implementações de serviços de API
│   ├── App.jsx         # Componente raiz da aplicação
│   ├── Global.style.jsx# Estilos globais
│   └── main.jsx        # Ponto de entrada da aplicação
│
├── .eslintrc.cjs       # Configuração do ESLint
├── package.json        # Dependências e scripts do projeto
├── README.md           # Documentação do projeto
└── vite.config.js      # Configuração do Vite
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Compila o aplicativo para produção.
- **`npm run lint`**: Executa o ESLint para analisar o código.
- **`npm run json`**: Inicia um servidor JSON para simular endpoints de API.

## Dependências

O projeto inclui as seguintes dependências:

- **React** (`react`, `react-dom`, `react-router-dom`, `react-hook-form`)
- **Material UI** (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`)
- **Styled Components** (`styled-components`)
- **Axios** para requisições HTTP
- **react-input-mask** para mascaramento de inputs

## Dependências de Desenvolvimento

As seguintes são dependências de desenvolvimento para qualidade de código e otimização de build:

- **ESLint** e seus plugins (`eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, etc.)
- **Vite** para builds de desenvolvimento rápidos
- **Tipos do TypeScript** para React e Node

## Autor

- **Autor:** [Glauton Osório](https://github.com/glautonOsorio)
- **Gato do Autor:** [Uni](https://github.com/glautonOsorio)
- **Amante de Batata:** [Batata](https://github.com/glautonOsorio)

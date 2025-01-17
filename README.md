# Clica Lá - Serviço de gerenciamento de links

Sass focado em trazer soluções de gerenciamento e compartilhamento de links

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/en/download/) (que inclui `npm`)
- [pnpm](https://pnpm.io/installation)

Além disso, é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

## Configuração Inicial

### Clonando o Repositório

Para obter o projeto, clone o repositório para sua máquina local:

```bash
git clone https://gitlab.com/clicala/clica-la-backend.git
cd nome_do_repositorio
```

### Configuração do Docker

Para configurar e iniciar os serviços necessários (como bancos de dados), execute:

```bash
docker-compose up -d
```

Isso iniciará as imagens necessárias em modo 'detached', permitindo que você continue trabalhando no terminal.

### Instalação de Dependências

Com o Node.js instalado, use o `npm` para instalar o `pnpm`, um gerenciador de pacotes rápido e eficiente:

```bash
npm install -g pnpm
```

Em seguida, instale as dependências do projeto com:

```bash
pnpm install
```

### Configuração do Arquivo .env

Copie o arquivo `.env.exemplo` para criar um `.env` com as configurações necessárias:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e preencha as variáveis de ambiente com os valores adequados para seu ambiente de desenvolvimento.

### Executando Migrations

Com o banco de dados rodando e o `.env` configurado, aplique as migrations para estruturar o banco de dados:

```bash
pnpm prisma migrate dev --preview-feature --schema ./prisma/schema.prisma
```

### Executando o Projeto

Finalmente, para iniciar o projeto, execute:

```bash
pnpm start
```

Ou, se estiver desenvolvendo e deseja que o servidor reinicie automaticamente ao modificar arquivos, considere usar:

```bash
pnpm run start:dev
```

## Utilização

Utilize o Postman para fazer as chamadas das requisições

## Arquitetura

![Arquitetura](docs/infra/arquitetura_backend.svg)

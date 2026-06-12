# Portifólio

Este é um projeto Next.js usando TypeScript e Tailwind CSS.

## Pré-requisitos

- Node.js 20.9.0 ou superior
- npm (geralmente instalado junto com o Node.js)

> Se você estiver no Windows, use o instalador do Node.js em https://nodejs.org/.

## Atualizando Node.js e npm

Se sua versão atual for menor que `20.9.0`, atualize o Node.js primeiro. O `npm` sozinho não resolve esse erro de versão do Node.

1. Atualize o npm (opcional, mas recomendado):

```powershell
npm install -g npm@latest
```

2. Baixe e instale o Node.js 20.x a partir de:

https://nodejs.org/pt-br/download/

3. Verifique as versões:

```powershell
node -v
npm -v
```

4. Se `node -v` mostrar uma versão menor que `20.9.0`, reinstale o Node.js com o instalador acima.

## Como executar

1. Abra um terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador em `http://localhost:3000`.

## Scripts úteis

- `npm run dev` - Inicia o servidor de desenvolvimento.
- `npm run build` - Gera a versão de produção.
- `npm start` - Inicia a aplicação já construída.
- `npm run lint` - Executa o ESLint no projeto.


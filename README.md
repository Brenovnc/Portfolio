# Portfólio de Breno Vieira

Portfólio pessoal de desenvolvedor Full Stack (C#/.NET e Angular), em português e inglês.

**Site: https://brenovnc.github.io/Portfolio/**

![Página inicial do portfólio](docs/home.png)

## Todo o conteúdo em um único arquivo

Todos os textos do site (português e inglês) vêm de um só arquivo: [components/language-provider.tsx](components/language-provider.tsx), no objeto `COPY`. Atualizar o portfólio (bio, experiências, habilidades, projetos e links) é editar textos, sem mexer nos componentes.

## Recursos

- Temas dourado e claro
- Português e inglês
- Seções: início, sobre, trajetória, projetos, habilidades e contato
- Currículo para baixar

## Stack

Next.js (exportação estática), React, TypeScript e Tailwind CSS.

## Como rodar

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Outros scripts: `npm run build` (gera o site estático em `out/`) e `npm run lint`.

## Como publicar

O deploy é feito no GitHub Pages pelo workflow [.github/workflows/pages.yml](.github/workflows/pages.yml), a cada push na branch `main`.

## Estrutura

```
app/          layout e página (Next.js App Router) e estilos globais
components/   seções do site e language-provider.tsx (todos os textos)
lib/          utilitários (inclui o basePath do GitHub Pages)
public/       currículo em PDF, ícones e imagens dos projetos
docs/         print usado neste README
```

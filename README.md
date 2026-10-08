# Lemonie & Assis Advocacia e Consultoria

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Desenvolvimento

Use Bun para manter as versões registradas no lockfile.

```sh
git clone <url-do-repositorio>
cd <nome-do-repositorio>
bun install --frozen-lockfile
bun run dev
```

## Publicação na Vercel

1. Importe o repositório na Vercel.
2. Mantenha o preset de framework como **Other**; `vercel.json` já define instalação e build.
3. Não configure Output Directory: o build Nitro gera `.vercel/output` automaticamente.
4. Cadastre as variáveis abaixo em Production, Preview e Development:

```text
VITE_SITE_URL=https://seu-dominio-final.com.br
SITE_URL=https://seu-dominio-final.com.br
```

Use a origem completa, com `https://` e sem barra no final. Enquanto essas variáveis não forem definidas, o site usa `https://lemonie-assis-web.lovable.app` como URL canônica e no sitemap.

Depois de vincular o domínio final, atualize também a linha `Sitemap:` em `public/robots.txt` para o mesmo domínio. O projeto não exige outras variáveis ou serviços externos.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

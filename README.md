Pro fungování aplikace je potřeba vytvořit si v GitHubu API token:

- [GitHub docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- v rootu adresáře vytvořit soubor `.env.local` a do něj vložit:

```bash
GITHUB_ACCESS_TOKEN=<VYTVOŘENÝ_TOKEN>
```

## Spuštění

Spuštění development serveru:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči.

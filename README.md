# foxnz.github.io

Personal website of Mingming Zhang: https://foxnz.github.io/

Built with [Astro](https://astro.build/) on the [AstroPaper](https://github.com/satnaing/astro-paper) theme, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Local preview

```sh
npm install
npm run dev     # http://localhost:4321
```

## Editing

- New blog post: add a Markdown file to `src/content/posts/` (copy the front matter from `hello-world.md`).
- Projects, focus areas and experience on the home page: the lists at the top of `src/pages/index.astro`.
- About page: `src/content/pages/about.md`.
- Theme writing examples (LaTeX, code blocks, etc.), not built: `docs/theme-examples/`.

# Ruby UTCP website

A responsive landing page and searchable documentation for the Ruby UTCP client.
The supplied logo is used unchanged; CSS handles its presentation.

## Run locally

From the repository root, with Node.js 20 or newer:

```sh
npm run dev
```

Open http://127.0.0.1:5173. No package installation is required.
Use `npm run dev -- --port 5174` to choose another port.

## Build and preview

```sh
npm run check
npm run build
npm run preview
```

The build recreates this repository's `dist/` directory with only the public
pages, browser scripts, stylesheet, assets, and downloadable examples. Deploy
its contents to a static host. Links are relative, so the site works both at
a domain root and under a path such as `/ruby-utcp-website/`.
The Node server is a local development and preview utility.

## CI/CD and GitHub Pages

The [website workflow](.github/workflows/pages.yml) checks JavaScript syntax and
builds the site with Node.js 24 on pull requests targeting `main` and on pushes
to `main`. A successful push to `main` publishes `dist/` to GitHub Pages. You can
also run **Website CI and deployment** manually from the Actions tab with `main`
selected. Pull requests and manual runs on other branches only check and build.

To enable publishing:

1. Open the repository's [Pages settings](https://github.com/universal-tool-calling-protocol/ruby-utcp-website/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push this workflow to `main`, or run it manually after it is on `main`.

After a successful deployment, the site is available at
[universal-tool-calling-protocol.github.io/ruby-utcp-website/](https://universal-tool-calling-protocol.github.io/ruby-utcp-website/).
The deployment URL also appears in the workflow's `github-pages` environment.
Publishing uses GitHub's built-in token; no additional deployment secrets or
package installation are required. See GitHub's
[custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
for details.

## Content and interaction

- `index.html`: landing page and protocol explorer.
- `docs.html`: documentation shell with shareable topic URLs.
- `styles.css`: responsive layout, Safari logo compositing, reduced motion.
- `data.js`: transport examples and documentation based on the repository.
- `app.js`: accessible tabs, clipboard controls, mobile menu, and local search.
- `assets/ruby-utcp-logo.png`: the original supplied logo.
- `examples/openrouter_code_mode.rb`: the downloadable Code Mode/OpenRouter example.

Search opens with the header button or Command/Ctrl+K. Arrow keys navigate
search results and tabs; Escape closes search or mobile navigation.
Protocol snippets describe configuration and are not executed in the browser.
The documentation includes a self-contained Ruby text-tool example.
The Code Mode guide includes an OpenRouter function-calling loop. Running that
example requires `OPENROUTER_API_KEY` and a tool-capable `OPENROUTER_MODEL`;
the website itself never requests or stores API credentials.

DM Sans and IBM Plex Mono load from Google Fonts when available, with local
system fallbacks. The rest of the site does not require external services.

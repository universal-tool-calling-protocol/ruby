# Ruby UTCP website

A responsive landing page and searchable documentation for the Ruby UTCP client.
The supplied logo is used unchanged; CSS handles its presentation.

## Run locally

From the repository root, with Node.js 20 or newer:

```sh
npm --prefix website run dev
```

Open http://127.0.0.1:5173. No package installation is required.
Use `npm --prefix website run dev -- --port 5174` to choose another port.

## Build and preview

```sh
npm --prefix website run build
npm --prefix website run preview
```

The build copies the public site to the root `dist/` directory. Deploy its
contents to the root of a static host. Paths are relative to the site root.
The Node server is a local development and preview utility.

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

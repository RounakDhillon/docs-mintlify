# Repository Guidelines

## Project Structure & Module Organization
This repository is a Mintlify-based documentation site. Most work happens in root-level MDX content directories such as `getting-started/`, `connectors/`, `deployment/`, `developers/`, `api-reference/`, `collate-ai/`, and `sdk/`. Global site configuration lives in `docs.json`, shared assets live in `public/`, and reusable MDX/JSX snippets live in `snippets/`. Root styling is mainly in `style.css` and `public/globals.css`. The `docs-om/` folder is a separate Mintlify starter/reference workspace; for normal documentation updates, edit the root site.

## Build, Test, and Development Commands
Run commands from the repository root, where `docs.json` is located.

- `mint dev`: start the local Mintlify preview at `http://localhost:3000`.
- `mint dev --port 3333`: run the preview on a custom port.
- `mint broken-links`: validate internal links before opening a PR.
- `vale .`: run prose/style checks if Vale is installed locally.

`npm test` is currently a placeholder and should not be used as a validation step.

## Coding Style & Naming Conventions
Use existing MDX patterns: YAML frontmatter first, then imports, then page content. Keep headings concise and written in sentence case. Prefer absolute imports for shared snippets, for example `import Foo from '/snippets/...';`. Follow the surrounding file’s formatting rather than reflowing unrelated content. Use descriptive kebab-case file and folder names, and keep page slugs aligned with directory paths. Store images in `public/images/`; connector icons belong in `public/images/connectors/` and typically use `.webp`.

## Testing Guidelines
There is no automated test suite for content pages. Validate changes by running `mint broken-links` and reviewing the affected page in `mint dev`. When adding a new page, register it in `docs.json`; otherwise it will not appear in navigation. Reuse content from `snippets/` instead of duplicating repeated instructions.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit subjects, often prefixed with `Docs:` (for example, `Docs: Drive Link Correction`) and sometimes followed by an issue/PR reference like `(#262)`. Keep commits focused on one doc change or content area. PRs should include: a brief summary, affected paths, linked issue/ticket when available, and screenshots only when navigation, layout, or visuals change. Mention any `docs.json` updates explicitly so reviewers can verify sidebar placement.

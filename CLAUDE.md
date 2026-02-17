# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` (or `mint dev`) - Start the Mintlify dev server at http://localhost:3000
- `npm run broken-links` (or `mint broken-links`) - Check for broken internal links
- `mint update` - Update the Mintlify CLI if the dev server isn't working

## Project Overview

Documentation site for **Collate** (a data discovery, lineage, and governance platform) built on **Mintlify**. No tests, no build step — content is MDX files deployed automatically on push to `main` via Mintlify's GitHub app.

---

## Contributing Content

This is what you need to know to add or edit documentation pages.

### MDX Frontmatter

Every page follows this structure:
```
---
title: "Page Title | Collate ..."
description: "SEO description"
slug: /path/to/page
sidebarTitle: Overview
---
```

### Registering Pages in `docs.json`

When adding a new page, you **must** add its path to the `docs.json` navigation or it won't appear in the sidebar. The navigation is organized as nested `tabs > groups > pages`. Find the right tab and group, then insert the page path (without `.mdx` extension).

### Connector Pages

Connector docs follow a strict repeating pattern per connector (e.g., `connectors/database/bigquery/`):
- `index.mdx` - Overview with `<ConnectorDetailsHeader>` component listing available/unavailable features
- `yaml.mdx` - YAML configuration guide
- `troubleshooting.mdx` - Troubleshooting guide

When adding a new connector, replicate this structure and use existing snippets (see below).

### Reusing Snippets

Shared content blocks live in `snippets/` and are imported into pages to avoid duplication:
- `snippets/connectors/` - Common connector content (test connection, ingestion config, troubleshooting)
- `snippets/deployment/` - Shared deployment steps
- `snippets/how-to-guides/` - Shared how-to content

Import with absolute paths: `import Foo from '/snippets/connectors/test-connection.mdx'`

### Static Assets

Images go in `public/images/`. Connector icons specifically go in `public/images/connectors/` as `.webp` files.

### Content Directories

| Directory | Purpose |
|-----------|---------|
| `connectors/` | Connector setup guides (database, dashboard, pipeline, messaging, etc.) |
| `how-to-guides/` | Feature guides (discovery, lineage, quality, governance, etc.) |
| `api-reference/` | API documentation for data assets, governance, system endpoints |
| `collate-ai/` | AI features (AskCollate, agents, MCP) |
| `getting-started/` | Onboarding and Day 1 setup |
| `deployment/` | Self-hosted deployment guides |
| `sdk/` | Python and Java SDK docs |

---

## Changing the Site

This is what you need to know to modify the documentation site itself — layout, navigation, components, and styling.

### Site Configuration: `docs.json`

All navigation, theming, and site structure is defined in `docs.json`. This is the single source of truth for:
- **Tab navigation**: ~20 tabs (Home, Get Started, Connectors, Products, Collate AI, How-To Guides, Admin Guide, Data Quality & Observability, Data Governance, SDKs & APIs, etc.)
- **Page hierarchy**: Nested groups/pages structure that maps directly to the sidebar
- **Theme**: Uses "aspen" template with primary color `#1570EF`

### React Components

Custom JSX components live in `snippets/components/` and are imported with absolute paths:
```
import { Foo } from '/snippets/components/Foo.jsx'
```

Key components: `ConnectorDetailsHeader`, `ConnectorGrid/Integration`, `MetadataIngestionUi`, `CodeLayout`, `CodePreview`, `LanguageSelector`

### Styling

- `style.css` - Main site styles (homepage layout, cards, guide sections, chips)
- `public/globals.css` - Global overrides
- Component-specific CSS is co-located with its component in `snippets/components/`

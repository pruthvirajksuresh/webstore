# Medicine Catalog

A standalone medicine catalog with search, manufacturer and formulation filters, verification filtering, product variants, and pagination.

The original catalog is preserved in `medicine_catalog_expanded_research_v2.html`. No dependencies are required to build it.

## Run locally

```sh
npm run build
npm run dev
```

Open http://localhost:8000.

## Hosting

The build validates the inline JavaScript and copies the catalog to `dist/client/index.html`. A small Cloudflare-compatible Worker in `dist/server/index.js` serves the static assets through the `ASSETS` binding.

The site is hosted through Sites: https://medicine-catalog-pruthviraj.mythic-beech-3142.chatgpt.site

Hosting project metadata lives in `.openai/hosting.json`. Hosting credentials are never committed. Publishing an update requires building, pushing the source to Sites, saving a version, and deploying that version; GitHub pushes alone do not publish updates.

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

The public site is hosted on GitHub Pages: https://pruthvirajksuresh.github.io/webstore/

Every push to `main` runs `.github/workflows/pages.yml`, validates the catalog's inline JavaScript, builds `dist/index.html`, and deploys the static catalog to GitHub Pages. The workflow can also be run manually from the repository's Actions tab. No additional dependencies or deployment secrets are required.

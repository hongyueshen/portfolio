# Hongyue Shen Portfolio

An open-source static portfolio website for Hongyue Shen, a Paris-based brand and visual designer.

## Features

- Responsive multi-page portfolio
- Letter-matrix hidden-word interaction
- Project covers that reveal visuals on hover
- Filterable work index
- Lightweight case-study pages generated from project data
- Scroll-in transitions
- Image lightbox
- Mobile navigation
- GitHub Pages-ready structure

## Preview Locally

Open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a GitHub repository and upload the files in this folder.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save. GitHub will publish the site URL after a short build.

## Editing Content

- Main page structure: `index.html`, `work.html`, `playground.html`, `about.html`
- Project text and gallery images: `projectData` in `script.js`
- Visual styles and responsive layout: `styles.css`
- Portfolio images: `pdf_preview/`

Some Playground entries intentionally use placeholders until additional motion and archive assets are available.

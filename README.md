# Menatalla Gomaa – Developer Portfolio

A minimal, readable portfolio site built with React and Vite. All content is driven by a single data file so you can update it quickly.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize with your LinkedIn content

1. Open your [LinkedIn profile](https://www.linkedin.com/in/menatalla-gomaa-0703mg/).
2. Edit **`src/data/portfolio.js`** and fill in:
   - **profile**: name, tagline, location, email, LinkedIn, GitHub (and optional photo).
   - **about**: headline and 1–2 short paragraphs (e.g. from your LinkedIn “About”).
   - **experience**: copy each role from LinkedIn (role, company, period, short description, and a few tech tags).
   - **projects**: add 2–4 projects (title, description, repo link, optional live link, tags).
   - **skills**: list of skills (you can mirror or shorten your LinkedIn skills).

No build step is needed for content changes; save the file and the dev server will reload.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.

## Git

- **Commits from this folder** use the name **Menatalla Gomaa** and the GitHub noreply email. To use a different email, run:  
  `git config user.email "your@email.com"` (inside this repo).
- **If you see thousands of “changes”** in Cursor/VS Code, the app is likely using a parent folder (e.g. your home or Desktop) that has its own `.git`. Open **only** the `DevPortfolio` folder as the workspace (File → Open Folder → choose `DevPortfolio`), so the Source Control view shows only this project.

## Tech

- React 18
- Vite 5
- Plain CSS (no framework)

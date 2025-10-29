# Orwah Khadrow – Portfolio (Vite + React + Tailwind)

## Quick start
1) Install Node.js (LTS).
2) In this folder, run:
   ```bash
   npm i
   npm run dev
   ```
3) Open the link from the terminal.

## Deploy (fast options)
- **Vercel**: Create a new project from this folder. Framework: Vite. Output: `dist`.
- **GitHub Pages**:
  ```bash
  npm i -D gh-pages
  # add to package.json:
  # "predeploy": "npm run build",
  # "deploy": "gh-pages -d dist"
  npm run deploy
  ```

## Image note
If you use Google Drive links, convert them to direct-view format:
Replace `https://drive.google.com/file/d/FILE_ID/view?...` with
`https://drive.google.com/uc?export=view&id=FILE_ID`
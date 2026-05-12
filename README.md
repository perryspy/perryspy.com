# perryspy.com

Static portfolio site with a Node.js build step that generates a single minified `dist/index.html`.

## Setup

```bash
npm install
```

## Build

```bash
npm run build
```

Outputs `dist/index.html`. That file is the entire site — deploy it (and your resume PDF) to any static host.

## Editing content

Open `src/content.js`. Everything is there:

- Personal info, bio, contact details, LinkedIn handle
- Sidebar stack tags (`hi: true` = amber highlight)
- All experience entries — use `roles: [...]` for multi-project jobs, `bullets: [...]` for single-role
- Education, skills, clearance
- `theme` block at the bottom — CSS variable overrides, change `amber` to retheme the whole site

## Editing styles or markup

Open `src/template.html`. CSS lives in the `<style>` block. The `{{PLACEHOLDER}}` tokens are where build.js injects content — don't remove those.

## Deploy

After `npm run build`, drop these two files onto your static host:

```
dist/index.html
dist/Perry_Spyropoulos_Resume.pdf   ← copy your PDF here before deploying
```

### Netlify (easiest)
Drag the `dist/` folder onto netlify.com/drop. Done. Point perryspy.com at it in the Netlify dashboard.

### GitHub Pages
Push the repo, go to Settings → Pages, set source to the `dist/` folder (or `gh-pages` branch).

### Vercel
`npx vercel --prod` from the project root. Set output directory to `dist` in project settings.

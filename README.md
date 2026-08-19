# Sang-Hyeon Park — Academic Portfolio

A responsive single-page academic portfolio for a computational materials science researcher. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Edit the content

- Publications: `data/publications.ts`
- Research projects: `data/projects.ts`
- Biography, experience, skills, and contact links: `app/page.tsx`
- Colors, spacing, and responsive styles: `app/globals.css`
- CV download: `public/cv-sang-hyeon-park.pdf`

Placeholder publication, affiliation, email, and social-profile details are intentionally labeled or use example destinations. Replace them before publishing.

## Local development

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open the local URL printed in the terminal. To verify a production build:

```bash
pnpm build
pnpm start
```

To verify the static GitHub Pages build:

```bash
pnpm build:pages
```

## Deployment

The project includes Sites/Cloudflare deployment configuration in `.openai/hosting.json`. It also includes a GitHub Actions workflow that publishes a static export to GitHub Pages whenever `main` is updated.

For GitHub Pages, open the repository's **Settings → Pages** and select **GitHub Actions** as the source. No environment variables or database setup are required.

Before going live, replace all remaining placeholder profile content.

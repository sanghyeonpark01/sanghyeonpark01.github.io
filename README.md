# Sang-Hyeon Park — Academic Portfolio

A responsive single-page academic portfolio for a computational materials science researcher. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Edit the content

- Publications: `data/publications.ts`
- Research projects: `data/projects.ts`
- Biography, experience, skills, and contact links: `app/page.tsx`
- Colors, spacing, and responsive styles: `app/globals.css`
- Replace `public/cv-sang-hyeon-park.pdf` with the final CV, keeping the filename unchanged.

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

## Deployment

The project includes Sites/Cloudflare deployment configuration in `.openai/hosting.json`. It can also be deployed to any platform that supports Next.js:

1. Push the repository to a Git provider.
2. Import it into your hosting provider.
3. Use `pnpm build` as the build command.
4. No environment variables or database setup are required.

Before going live, replace all placeholder content and the placeholder CV.

# Amal Sukumaran’s personal site

A static personal website and Markdown blog, built with Astro, TypeScript, and plain CSS. Hosted on GitHub Pages at **https://amalsukumaran.de**.

The homepage contains an introduction, experience, skills, education, and recent writing. Articles have their own URLs. There is no database, backend, or client-side router.

## Local development

Use Node.js 24 LTS (the version in `.nvmrc`). Node 22.19+ is also supported. The previous CRA project's Node 20 setup is too old for this version of Astro.

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open `http://localhost:4321`. Development includes drafts and future-dated posts, clearly labeled as local previews. The theme follows the system preference until you select a theme, then remembers your choice.

```sh
npm run check    # Astro and TypeScript diagnostics
npm test         # Publication rules and static-build integration checks
npm run build    # Type checks and production output in dist/
npm run preview  # Serve the production build locally
```

The production preview excludes drafts, just like the deployed site.

## Updating the homepage

Edit `src/data/profile.ts` for your biography, experience, skill groups, education, and social links. Edit `src/styles/global.css` for typography, colors, spacing, and responsive layouts. Both themes use shared CSS tokens.

## Analytics

GA4 uses measurement ID `G-NWDRM59XWV`, configured in `src/lib/analytics.ts`. No secret, backend, or paid SDK is needed. The tag loads only in production on `amalsukumaran.de`, after a visitor accepts analytics. Local development and production previews never send events. Without JavaScript, analytics stays off.

The consent notice remembers acceptance or rejection in local storage. **Privacy preferences** in the footer lets visitors change their choice. Withdrawal disables tracking, deletes the site's GA cookies, and reloads the page without the tag. Advertising consent remains denied and Google signals and advertising personalization are disabled.

In the Google Analytics web stream, enable **Enhanced measurement** for page views, scrolls, and outbound link clicks. Internal navigation is visible through page views; email links send a custom `email_click` event with `link_location` (`page` or `footer`). Email addresses are not included in that custom event. Incoming query strings and fragments are excluded from the configured page URL.

After merging and deploying, accept analytics on the live domain and check **Reports → Realtime** for your visit and email event. Ad blockers and visitors declining analytics reduce the recorded totals. Reports other than Realtime can take 24–48 hours to populate. The measurement ID is public and should not be added as a repository secret.

## Writing a post

Create a file directly inside `src/content/blog/`. Use a unique lowercase filename with hyphens, such as `building-useful-ai-agents.md`. The filename becomes the URL: `/blog/building-useful-ai-agents/`. Keep filenames stable after publishing to preserve links.

```markdown
---
title: "Building useful AI agents"
description: "Lessons from designing agent-based applications."
date: "2026-09-30"
tags: ["AI", "Engineering"]
draft: true
---

Your article starts here.

## A section heading

Write ordinary Markdown, with links, lists, images, tables, and fenced code.
```

`title`, `description`, and `date` are required. Quote the date and use a valid `YYYY-MM-DD` calendar date. `tags` defaults to an empty list; `draft` defaults to `false`. Invalid metadata and filenames fail the build.

Preview locally, then set `draft: false`, commit, and push to `main` to publish. Published posts appear newest first on the archive; the newest three appear on the homepage. RSS and the sitemap update automatically.

Future dates are evaluated at midnight UTC. A future-dated post stays out until a build runs on or after that date. There is no automatic scheduled rebuild: push a change or run the deployment workflow manually when the post is due.

The included `writing-with-markdown.md` is a **draft example** for previewing the layout. Replace or delete it when you have your own writing. It is excluded from production HTML, article routes, RSS, and the sitemap.

### Images and code

Put web-sized images in `public/images/` and reference them using root-relative URLs:

```markdown
![Describe what the image shows](/images/my-image.webp)
```

Use a language label on fenced code blocks for syntax highlighting. Article images scale with the page; wide tables and code blocks scroll within the reading column. Articles with three or more second-level headings receive a collapsible table of contents.

## Repository structure

```text
.github/workflows/deploy.yml  Checks and GitHub Pages deployment
astro.config.mjs             Canonical URL and static build settings
src/assets/                  Original portrait and editable social image source
src/components/              Shared header, footer, and post list
src/content/blog/            Markdown articles
src/content.config.ts        Validated blog collection
src/data/profile.ts          Homepage content
src/layouts/                 Page shell and article layout
src/lib/                     Post queries, publication rules, and date helpers
src/pages/                   Homepage, archive, articles, RSS, and 404
src/styles/                  Theme styles and Markdown typography
public/                      Icons, optimized images, robots.txt, and CNAME
tests/                       Publication and static-build checks
```

## GitHub Pages migration

The verified repository default branch is `main`. The primary domain is `amalsukumaran.de`. The code uses this domain in `public/CNAME`, canonical URLs, RSS, social previews, and the sitemap. No base path is needed. Configure GitHub Pages and DNS for this domain.

For the first deployment:

1. Review `feat/revamp` and its local production preview.
2. Merge the migration into `main`.
3. In **Settings → Pages → Build and deployment**, switch **Source** to **GitHub Actions** and set **Custom domain** to `amalsukumaran.de`. Configure the root domain and `www` DNS records for GitHub Pages, then enable HTTPS when available.
4. Run **Check and deploy personal site** from the Actions tab on `main` if the merge-triggered deployment ran before the Pages source changed.
5. Verify the homepage, `/blog/`, a published article opened directly, `/rss.xml`, and the custom 404 page on the live domain.

Pull requests to `main` test and build without deploying. Pushes to `main` and manual workflow runs on `main` publish only after checks pass. Manual runs on other branches do not deploy.

The workflow uses GitHub's Pages artifact deployment, replacing the old `gh-pages` npm script. No repository secrets are needed. The previous `gh-pages` branch is left intact for rollback: restoring the old Pages branch source returns to the previous deployment.

## Validation

`npm test` builds temporary published, draft, and future-dated fixtures and verifies article output, homepage/archive links, RSS, and sitemap inclusion. It also verifies that invalid calendar dates fail the build. Fixtures and temporary build output are cleaned up afterward.

The design has been checked in a browser at desktop and mobile widths, including theme persistence, article navigation, table-of-contents anchors, Markdown rendering, and page overflow.

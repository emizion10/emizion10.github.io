---
title: "Writing with Markdown"
description: "A draft example to preview the article layout and try the publishing workflow."
date: "2026-09-30"
tags: ["Markdown", "Writing"]
draft: true
---

This is a **draft example**, not a published article. Use it to explore the reading experience, then replace it with your own writing. It appears in local development and stays out of the production site.

## A place for ideas

Writing starts with a plain text file. A few lines of metadata give a post its title, date, and description; everything below becomes the article.

You can write **bold text**, add *emphasis*, and link to [the homepage](/). Each article has its own URL, so readers can bookmark it or share it directly.

> Keep the writing simple. Let the idea do the work.

## Showing code

Code blocks include syntax highlighting. Longer lines scroll within the block, keeping the page comfortable to read on a phone.

```typescript
type Note = {
  title: string;
  draft: boolean;
};

const note: Note = {
  title: 'An idea worth exploring',
  draft: true,
};
```

## Lists and tables

A writing workflow can stay small:

1. Create a Markdown file with a descriptive filename.
2. Add a title, description, and publication date.
3. Preview your draft locally.
4. Set `draft: false` when it is ready to publish.

| Field | Purpose |
| --- | --- |
| `title` | The heading readers see |
| `description` | A short summary for the archive and sharing |
| `date` | Publication date in YYYY-MM-DD format |
| `draft` | Keeps unfinished writing out of production |

## Including images

Use descriptive alternative text so images make sense to readers using assistive technology.

![Amal outdoors in a snowy landscape](/images/profile.webp)

---

That is the whole idea: a personal website that is easy to read and easy to keep up to date.

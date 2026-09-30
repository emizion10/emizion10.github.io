import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { mkdtempSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { isPublished, newestFirst, formatDate } from '../src/lib/post-utils.ts';

test('publication respects draft status and the exact publication date', () => {
  const now = new Date('2026-09-30T00:00:00Z');
  assert.equal(isPublished({ date: now, draft: false }, now), true);
  assert.equal(isPublished({ date: now, draft: true }, now), false);
  assert.equal(isPublished({ date: new Date('2026-10-01'), draft: false }, now), false);
  assert.equal(formatDate(now), 'Sep 30, 2026');
});

test('archive sorting is newest first with a stable order for equal dates', () => {
  const posts = [
    { id: 'older', data: { date: new Date('2020-01-01'), draft: false } },
    { id: 'b', data: { date: new Date('2021-01-01'), draft: false } },
    { id: 'a', data: { date: new Date('2021-01-01'), draft: false } },
  ];
  assert.deepEqual(newestFirst(posts).map((post) => post.id), ['a', 'b', 'older']);
  assert.equal(posts[0].id, 'older');
});

test('static build publishes Markdown routes and excludes drafts and scheduled posts everywhere', () => {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const output = mkdtempSync(join(tmpdir(), 'portfolio-build-'));
  const prefix = `test-${randomUUID()}`;
  const fixtures = [
    { slug: `${prefix}-published`, title: 'Published fixture', date: '2000-01-01', draft: false },
    { slug: `${prefix}-draft`, title: 'Private draft fixture', date: '2000-01-01', draft: true },
    { slug: `${prefix}-scheduled`, title: 'Scheduled fixture', date: '2999-01-01', draft: false },
  ];
  const files = fixtures.map(({ slug }) => join(root, 'src/content/blog', `${slug}.md`));
  try {
    fixtures.forEach((fixture, index) => writeFileSync(files[index], `---\ntitle: "${fixture.title}"\ndescription: "Integration test article"\ndate: "${fixture.date}"\ndraft: ${fixture.draft}\n---\n\n## A real heading\n\nRendered **Markdown** with a [home link](/).\n`));
    const build = spawnSync(process.execPath, [join(root, 'node_modules/astro/bin/astro.mjs'), 'build', '--outDir', output], { cwd: root, encoding: 'utf8' });
    assert.equal(build.status, 0, build.stdout + build.stderr);
    const surfaces = ['index.html', 'blog/index.html', 'rss.xml', 'sitemap-0.xml'].map((file) => readFileSync(join(output, file), 'utf8'));
    surfaces.forEach((surface) => {
      assert.ok(surface.includes(fixtures[0].slug), 'Published post must be discoverable');
      assert.ok(!surface.includes(fixtures[1].slug), 'Draft must not be discoverable');
      assert.ok(!surface.includes(fixtures[2].slug), 'Scheduled post must not be discoverable');
      assert.ok(!surface.includes('writing-with-markdown'), 'Example draft must not be published');
    });
    const article = readFileSync(join(output, 'blog', fixtures[0].slug, 'index.html'), 'utf8');
    assert.ok(article.includes('<strong>Markdown</strong>'));
    assert.ok(article.includes(`https://emizion10.github.io/blog/${fixtures[0].slug}/`));
    assert.ok(article.includes('id="a-real-heading"'));
    assert.ok(!existsSync(join(output, 'blog', fixtures[1].slug)));
    assert.ok(!existsSync(join(output, 'blog', fixtures[2].slug)));
  } finally {
    files.forEach((file) => rmSync(file, { force: true }));
    rmSync(output, { recursive: true, force: true });
  }
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { createAnalytics, consentKey, measurementId } from '../src/lib/analytics.ts';

function environment(saved, storageBlocked = false) {
  const storage = new Map(saved ? [[consentKey, saved]] : []);
  const scripts = [];
  const cookies = [];
  let reloads = 0;
  const win = {
    localStorage: {
      getItem: key => storage.get(key),
      setItem: (key, value) => { if (storageBlocked) throw new Error('Blocked'); storage.set(key, value); },
    },
    location: { origin: 'https://amalsukumaran.de', pathname: '/blog/', reload: () => reloads++ },
  };
  const doc = {
    createElement: () => ({}), head: { append: script => scripts.push(script) },
    get cookie() { return '_ga=123; _ga_NWDRM59XWV=456; theme=dark'; },
    set cookie(value) { cookies.push(value); },
  };
  return { win, doc, scripts, cookies, storage, reloads: () => reloads, commands: () => (win.dataLayer || []).map(args => Array.from(args)) };
}

test('no tag or events before consent; declining persists without contacting Google', () => {
  const e = environment();
  const analytics = createAnalytics(e.win, e.doc, true);
  analytics.trackEmail('page');
  assert.equal(analytics.choice, null);
  analytics.choose('denied');
  assert.equal(e.storage.get(consentKey), 'denied');
  assert.equal(e.scripts.length, 0);
  assert.deepEqual(e.commands(), []);
});

test('grant loads once, queues consent before config, and tracks email clicks', () => {
  const e = environment();
  const analytics = createAnalytics(e.win, e.doc, true);
  analytics.choose('granted');
  analytics.choose('granted');
  analytics.trackEmail('footer');
  assert.equal(e.scripts.length, 1);
  assert.match(e.scripts[0].src, new RegExp(measurementId));
  const commands = e.commands();
  assert.deepEqual(commands[0].slice(0, 2), ['consent', 'default']);
  assert.equal(commands[0][2].analytics_storage, 'denied');
  assert.equal(commands[1][2].analytics_storage, 'granted');
  assert.equal(commands[1][2].ad_storage, 'denied');
  assert.equal(commands[3][0], 'config');
  assert.equal(commands[3][2].page_location, 'https://amalsukumaran.de/blog/');
  assert.deepEqual(commands[4], ['event', 'email_click', { link_location: 'footer' }]);
});

test('local previews never load analytics, even with saved or new consent', () => {
  const e = environment('granted');
  const analytics = createAnalytics(e.win, e.doc, false);
  analytics.choose('granted');
  analytics.trackEmail('page');
  assert.equal(e.scripts.length, 0);
  assert.deepEqual(e.commands(), []);
});

test('withdrawal disables tracking, removes GA cookies, and survives unavailable storage', () => {
  const e = environment('granted', true);
  const analytics = createAnalytics(e.win, e.doc, true);
  analytics.choose('denied');
  const count = e.commands().length;
  analytics.trackEmail('page');
  assert.equal(e.commands().length, count);
  assert.equal(e.win[`ga-disable-${measurementId}`], true);
  assert.equal(e.reloads(), 1);
  assert.equal(e.cookies.length, 6);
  assert.ok(e.cookies.every(cookie => !cookie.startsWith('theme')));
  const nextPage = environment('granted', true);
  assert.equal(createAnalytics(nextPage.win, nextPage.doc, true, true).choice, 'denied');
  assert.equal(nextPage.scripts.length, 0);
});

// Set to false to disable GA4 and its consent controls across the site.
export const analyticsEnabled = true;
export const measurementId = 'G-NWDRM59XWV';
export const consentKey = 'analytics-consent-v1';
type Choice = 'granted' | 'denied';
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

// Basic consent mode: no Google script or requests until visitors opt in.
export function createAnalytics(win: AnalyticsWindow, doc: Document, enabled: boolean, withdrawn = false) {
  let choice: Choice | null = withdrawn ? 'denied' : null;
  let started = false;
  try {
    const saved = win.localStorage.getItem(consentKey);
    if (!withdrawn && (saved === 'granted' || saved === 'denied')) choice = saved;
  } catch { /* Storage may be unavailable; the current page still respects the choice. */ }

  const disabledKey = `ga-disable-${measurementId}`;
  const setDisabled = (value: boolean) => {
    (win as unknown as Record<string, unknown>)[disabledKey] = value;
  };
  const consent = (analytics: Choice) => ({
    analytics_storage: analytics,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  function start() {
    if (!enabled || started || choice !== 'granted') return;
    started = true;
    setDisabled(false);
    win.dataLayer = win.dataLayer || [];
    win.gtag = function () { win.dataLayer!.push(arguments); };
    win.gtag('consent', 'default', consent('denied'));
    win.gtag('consent', 'update', consent('granted'));
    win.gtag('js', new Date());
    win.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_domain: 'amalsukumaran.de',
      // Avoid transmitting query strings or fragments from incoming links.
      page_location: `${win.location.origin}${win.location.pathname}`,
    });
    const script = doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    doc.head.append(script);
  }

  function clearCookies() {
    for (const cookie of doc.cookie.split(';')) {
      const name = cookie.trim().split('=')[0];
      if (name !== '_ga' && !name.startsWith('_ga_')) continue;
      for (const domain of ['', '; domain=amalsukumaran.de', '; domain=.amalsukumaran.de']) {
        doc.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax`;
      }
    }
  }

  start();
  return {
    get choice() { return choice; },
    choose(next: Choice) {
      choice = next;
      try { win.localStorage.setItem(consentKey, next); } catch {}
      if (next === 'granted') start();
      else {
        setDisabled(true);
        if (started) win.gtag?.('consent', 'update', consent('denied'));
        clearCookies();
        // Reload without the tag after withdrawal, including when storage is blocked.
        if (started) {
          win.name = 'analytics-consent-withdrawn';
          win.location.reload();
        }
      }
    },
    trackEmail(linkLocation: 'footer' | 'page') {
      if (enabled && started && choice === 'granted') {
        win.gtag?.('event', 'email_click', { link_location: linkLocation });
      }
    },
  };
}

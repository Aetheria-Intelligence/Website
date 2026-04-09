import { useEffect } from 'react';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_ALT,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_TYPE,
  DEFAULT_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
  composePageTitle,
} from '../data/seo';

function upsertMeta(selector, attributes) {
  const values = Object.values(attributes);
  const hasContent = values.some((value) => value !== undefined && value !== null && value !== '');
  let element = document.head.querySelector(selector);

  if (!hasContent) {
    if (element) {
      element.remove();
    }
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      element.setAttribute(key, value);
    } else {
      element.removeAttribute(key);
    }
  });
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function syncSchema(schema) {
  document.head.querySelectorAll('script[data-aetheria-schema="true"]').forEach((node) => node.remove());

  (Array.isArray(schema) ? schema : []).forEach((entry, index) => {
    if (!entry) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.aetheriaSchema = 'true';
    script.dataset.aetheriaSchemaIndex = String(index);
    script.textContent = JSON.stringify(entry);
    document.head.appendChild(script);
  });
}

export function PageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
  keywords,
  ogImageAlt = DEFAULT_IMAGE_ALT,
  twitterImageAlt = DEFAULT_IMAGE_ALT,
  schema = [],
  author = SITE_NAME,
  applicationName = SITE_NAME,
}) {
  useEffect(() => {
    const pageTitle = composePageTitle(title);
    const canonicalUrl = new URL(path, SITE_URL).toString();
    const imageUrl = new URL(image, SITE_URL).toString();

    document.title = pageTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    upsertMeta('meta[name="author"]', { name: 'author', content: author });
    upsertMeta('meta[name="application-name"]', { name: 'application-name', content: applicationName });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#07101a' });
    upsertMeta('meta[name="color-scheme"]', { name: 'color-scheme', content: 'dark' });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: ogImageAlt });
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: String(DEFAULT_IMAGE_WIDTH) });
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: String(DEFAULT_IMAGE_HEIGHT) });
    upsertMeta('meta[property="og:image:type"]', { property: 'og:image:type', content: DEFAULT_IMAGE_TYPE });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: twitterImageAlt });
    upsertLink('canonical', canonicalUrl);
    syncSchema(schema);

    return () => {
      document.head.querySelectorAll('script[data-aetheria-schema="true"]').forEach((node) => node.remove());
    };
  }, [applicationName, author, description, image, keywords, noIndex, ogImageAlt, path, schema, title, twitterImageAlt, type]);

  return null;
}

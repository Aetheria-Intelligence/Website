import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTE_META } from '../src/data/routeMeta.js';
import {
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_ALT,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_TYPE,
  DEFAULT_IMAGE_WIDTH,
  SITE_URL,
  composePageTitle,
} from '../src/data/seo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const rootHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(rootHtmlPath)) {
  throw new Error('dist/index.html is missing. Run the Vite build first.');
}

const baseHtml = fs.readFileSync(rootHtmlPath, 'utf8');

function replaceOrInsert(html, pattern, replacement, insertBefore = '</head>') {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace(insertBefore, `${replacement}\n${insertBefore}`);
}

function metaTag(name, content) {
  return `<meta name="${name}" content="${content}" />`;
}

function propertyTag(property, content) {
  return `<meta property="${property}" content="${content}" />`;
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function serializeSchema(schema = []) {
  return schema
    .filter(Boolean)
    .map((entry) => `<script type="application/ld+json">${JSON.stringify(entry)}</script>`)
    .join('\n');
}

function applyMeta(html, route, meta) {
  const pageTitle = composePageTitle(meta.title);
  const description = meta.description || '';
  const canonicalUrl = new URL(meta.path || route, SITE_URL).toString();
  const imagePath = meta.image || DEFAULT_IMAGE;
  const imageUrl = new URL(imagePath, SITE_URL).toString();
  const robots = meta.noIndex ? 'noindex, nofollow' : 'index, follow';

  let nextHtml = html;

  nextHtml = replaceOrInsert(nextHtml, /<title>.*?<\/title>/s, `<title>${escapeHtml(pageTitle)}</title>`);
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="description"[^>]*>/s, metaTag('description', escapeHtml(description)));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="keywords"[^>]*>/s, meta.keywords ? metaTag('keywords', escapeHtml(meta.keywords)) : '');
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="robots"[^>]*>/s, metaTag('robots', robots));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="author"[^>]*>/s, metaTag('author', 'Aetheria'));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="application-name"[^>]*>/s, metaTag('application-name', 'Aetheria'));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:title"[^>]*>/s, propertyTag('og:title', escapeHtml(pageTitle)));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:description"[^>]*>/s, propertyTag('og:description', escapeHtml(description)));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:type"[^>]*>/s, propertyTag('og:type', meta.type || 'website'));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:url"[^>]*>/s, propertyTag('og:url', canonicalUrl));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:site_name"[^>]*>/s, propertyTag('og:site_name', 'Aetheria'));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:image"[^>]*>/s, propertyTag('og:image', imageUrl));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:image:alt"[^>]*>/s, propertyTag('og:image:alt', DEFAULT_IMAGE_ALT));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:image:width"[^>]*>/s, propertyTag('og:image:width', String(DEFAULT_IMAGE_WIDTH)));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:image:height"[^>]*>/s, propertyTag('og:image:height', String(DEFAULT_IMAGE_HEIGHT)));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*property="og:image:type"[^>]*>/s, propertyTag('og:image:type', DEFAULT_IMAGE_TYPE));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="twitter:card"[^>]*>/s, metaTag('twitter:card', 'summary_large_image'));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="twitter:title"[^>]*>/s, metaTag('twitter:title', escapeHtml(pageTitle)));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="twitter:description"[^>]*>/s, metaTag('twitter:description', escapeHtml(description)));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="twitter:image"[^>]*>/s, metaTag('twitter:image', imageUrl));
  nextHtml = replaceOrInsert(nextHtml, /<meta[^>]*name="twitter:image:alt"[^>]*>/s, metaTag('twitter:image:alt', DEFAULT_IMAGE_ALT));
  nextHtml = replaceOrInsert(nextHtml, /<link[^>]*rel="canonical"[^>]*>/s, `<link rel="canonical" href="${canonicalUrl}" />`);

  nextHtml = nextHtml.replace(/<script type="application\/ld\+json">.*?<\/script>\s*/gs, '');
  const schemaMarkup = serializeSchema(meta.schema);
  if (schemaMarkup) {
    nextHtml = nextHtml.replace('</head>', `${schemaMarkup}\n</head>`);
  }

  return nextHtml;
}

for (const [route, meta] of Object.entries(ROUTE_META)) {
  const outputHtml = applyMeta(baseHtml, route, meta);
  const routeDir = route === '/' ? distDir : path.join(distDir, route.replace(/^\//, ''));
  const outputPath = route === '/' ? path.join(distDir, 'index.html') : path.join(routeDir, 'index.html');

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, outputHtml);
}

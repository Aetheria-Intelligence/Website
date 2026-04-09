import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CANONICAL_SITEMAP_PATHS } from '../src/data/siteData.js';
import { ROUTE_META } from '../src/data/routeMeta.js';
import { DEFAULT_IMAGE, SITE_URL, composePageTitle } from '../src/data/seo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

function fail(message) {
  console.error(`Build validation failed: ${message}`);
  process.exit(1);
}

function readFile(relativePath) {
  const fullPath = path.join(distDir, relativePath);

  if (!fs.existsSync(fullPath)) {
    fail(`Missing dist artifact: ${relativePath}`);
  }

  return fs.readFileSync(fullPath, 'utf8');
}

function relativeHtmlPath(route) {
  return route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`;
}

if (!fs.existsSync(distDir)) {
  fail('dist directory does not exist. Run the build first.');
}

readFile('index.html');
readFile('404.html');
readFile('robots.txt');
const sitemap = readFile('sitemap.xml');

const actualPaths = Array.from(
  sitemap.matchAll(/https:\/\/www\.aetheriaintelligence\.com([^<]*)<\/loc>/g),
).map((match) => match[1] || '/');
const expectedPaths = [...CANONICAL_SITEMAP_PATHS];
const deprecatedPaths = ['/system', '/capabilities', '/evidence', '/scenarios', '/atlas', '/runtime', '/ai-governance-system', '/ai-safety-enforcement'];

if (actualPaths.length !== expectedPaths.length) {
  fail(`Expected ${expectedPaths.length} sitemap entries but found ${actualPaths.length}.`);
}

for (const expectedPath of expectedPaths) {
  if (!actualPaths.includes(expectedPath)) {
    fail(`Sitemap is missing canonical path: ${expectedPath}`);
  }
}

for (const deprecatedPath of deprecatedPaths) {
  if (actualPaths.includes(deprecatedPath)) {
    fail(`Sitemap still includes deprecated path: ${deprecatedPath}`);
  }
}

const assetsDir = path.join(distDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  fail('dist/assets directory is missing.');
}

const assetFiles = fs.readdirSync(assetsDir);
const hasJs = assetFiles.some((file) => file.endsWith('.js'));
const hasCss = assetFiles.some((file) => file.endsWith('.css'));

if (!hasJs || !hasCss) {
  fail('dist/assets is missing built JS or CSS output.');
}

const ogImagePath = path.join(distDir, DEFAULT_IMAGE.replace(/^\//, ''));
if (!fs.existsSync(ogImagePath)) {
  fail(`OG image is missing from dist: ${DEFAULT_IMAGE}`);
}

for (const [route, meta] of Object.entries(ROUTE_META)) {
  const html = readFile(relativeHtmlPath(route));
  const canonicalUrl = new URL(meta.path || route, SITE_URL).toString();
  const expectedTitle = composePageTitle(meta.title);
  const robots = meta.noIndex ? 'noindex, nofollow' : 'index, follow';

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    fail(`Route HTML is missing expected title for ${route}.`);
  }

  if (!html.includes(`href="${canonicalUrl}"`)) {
    fail(`Route HTML is missing canonical URL for ${route}.`);
  }

  if (!html.includes(`content="${robots}"`)) {
    fail(`Route HTML has incorrect robots directive for ${route}.`);
  }

  if (!html.includes(DEFAULT_IMAGE)) {
    fail(`Route HTML is missing OG image for ${route}.`);
  }
}

console.log('Build validation passed.');

export const SITE_NAME = 'Aetheria';
export const LEGAL_NAME = 'Aetheria Intelligence, Inc.';
export const SITE_URL = 'https://www.aetheriaintelligence.com';
export const DEFAULT_IMAGE = '/assets/img/aetheria-og-r9.png';
export const DEFAULT_IMAGE_ALT = 'Aetheria social preview: AI can think. It cannot act without permission.';
export const DEFAULT_IMAGE_WIDTH = 1200;
export const DEFAULT_IMAGE_HEIGHT = 630;
export const DEFAULT_IMAGE_TYPE = 'image/png';
export const DEFAULT_DESCRIPTION = 'Governed AI infrastructure for execution control, AI action authorization, and portable verification. Aetheria turns requests into structured proposals and evaluates authority before execution.';

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString();
}

export function composePageTitle(title = '') {
  if (!title) {
    return SITE_NAME;
  }

  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_IMAGE),
    description: DEFAULT_DESCRIPTION,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
  };
}

export function techArticleSchema({ headline, description, path }) {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline,
    description,
    mainEntityOfPage: url,
    url,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(DEFAULT_IMAGE),
      },
    },
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

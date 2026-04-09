import { CTAGroup } from '../components/CTAGroup';
import { LEGAL_NAME } from '../data/seo';
import { ACCESS_HREF } from '../data/siteData';

const legalContent = {
  privacy: {
    kicker: 'Privacy Policy',
    title: 'Privacy disclosures for the public website.',
    intro:
      `${LEGAL_NAME} handles information submitted through this public website for ordinary inquiry, security, and site-operation purposes. Product, customer, and deployment-specific data handling is governed separately when applicable.`,
    sections: [
      {
        heading: 'Information collected',
        paragraphs: [
          'Information you submit may include your name, company, email address, message content, and any other details you choose to provide through an inquiry or access request.',
          'Technical operation may also generate routine logs and security data such as IP address, browser characteristics, approximate timing, referring pages, and request metadata.',
        ],
      },
      {
        heading: 'Use of information',
        paragraphs: [
          'Website information may be used to respond to inquiries, evaluate access requests, protect the site, monitor reliability, and support ordinary business operations associated with the public website.',
          'Public website submissions do not create operational authority, customer rights, or product commitments on their own.',
        ],
      },
      {
        heading: 'Sharing and disclosure',
        paragraphs: [
          'Information may be shared with service providers that support hosting, communications, analytics, or security under appropriate confidentiality and operational controls.',
          'Information may also be disclosed when reasonably necessary to comply with law, protect rights or security, investigate misuse, or support a corporate transaction.',
        ],
      },
      {
        heading: 'Retention and security',
        paragraphs: [
          'Information is retained for as long as reasonably necessary for the purposes described here, including legitimate business, legal, and security needs.',
          'No internet-connected system is perfectly secure. Appropriate administrative, technical, and organizational safeguards are used based on the nature of the information handled through the website.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: ['Questions about this policy may be directed to contact@aetheriaintelligence.com.'],
      },
    ],
  },
  terms: {
    kicker: 'Terms of Use',
    title: 'Terms governing use of the public website.',
    intro:
      `${LEGAL_NAME} provides this website for informational, evaluative, and business inquiry purposes. Separate written agreements govern any product access, pilot, evaluation, or commercial relationship.`,
    sections: [
      {
        heading: 'Permitted use',
        paragraphs: [
          'You may use the website for lawful informational and business inquiry purposes only. You may not interfere with operation, attempt unauthorized access, misrepresent affiliation, harvest information improperly, or violate applicable law.',
        ],
      },
      {
        heading: 'No operational authority granted',
        paragraphs: [
          'The website does not grant rights to controlled runtime capabilities, operational authority, customer entitlements, or product access. Any such rights require separate review and explicit agreement where applicable.',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          `The website and its contents are owned by or licensed to ${LEGAL_NAME}, except where otherwise stated. No license to copy, modify, distribute, reverse engineer, or create derivative works is granted except as permitted by law or prior written consent.`,
        ],
      },
      {
        heading: 'Informational content',
        paragraphs: [
          'Website materials are provided for general informational purposes and do not constitute legal, regulatory, technical, or security advice. Public website content does not create a binding offer or commitment.',
        ],
      },
      {
        heading: 'Disclaimer and limitation',
        paragraphs: [
          `The website is provided on an “as is” and “as available” basis to the maximum extent permitted by law. ${LEGAL_NAME} disclaims warranties to the extent permitted by law and is not liable for indirect, incidental, consequential, special, or punitive damages arising from website use.`,
        ],
      },
      {
        heading: 'Changes and contact',
        paragraphs: [
          'These terms may be updated by posting a revised version on the website. Questions may be directed to contact@aetheriaintelligence.com.',
        ],
      },
    ],
  },
};

export function LegalPage({ variant = 'privacy' }) {
  const content = legalContent[variant] || legalContent.privacy;

  return (
    <section className="page-section page-shell legal-page">
      <div className="container page-stack">
        <div className="section-intro legal-intro">
          <div className="section-kicker">{content.kicker}</div>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </div>

        <div className="legal-stack">
          {content.sections.map((section) => (
            <article key={section.heading} className="card panel legal-card">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <CTAGroup
          kicker="Questions"
          title="Use the public contact path for website questions or access requests."
          body="For product, evaluation, or deployment discussions, start with the access path so the conversation begins with fit, action classes, and proof requirements."
          primaryHref={ACCESS_HREF}
          primaryLabel="Email Aetheria"
          secondaryHref="/access"
          secondaryLabel="Review access"
          tertiaryHref="/"
          tertiaryLabel="Return home"
        />
      </div>
    </section>
  );
}

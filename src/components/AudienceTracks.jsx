import { Link } from 'react-router-dom';
import { SectionIntro } from './SectionIntro';

function isExternalHref(href = '') {
  return /^(https?:\/\/|mailto:|tel:)/.test(href) || /\.(pdf|zip|docx?|pptx?|xlsx?)(?:$|[?#])/.test(href);
}

function AudienceAction({ href, label }) {
  if (isExternalHref(href)) {
    const opensNewContext = href.startsWith('http') || /\.(pdf|zip|docx?|pptx?|xlsx?)(?:$|[?#])/.test(href);

    return (
      <a
        className="button button-primary button-compact"
        href={href}
        target={opensNewContext ? '_blank' : undefined}
        rel={opensNewContext ? 'noreferrer' : undefined}
      >
        {label}
        {opensNewContext ? <span className="sr-only"> opens in a new tab</span> : null}
      </a>
    );
  }

  return (
    <Link className="button button-primary button-compact" to={href}>
      {label}
    </Link>
  );
}

export function AudienceTracks({
  kicker = 'Engage with Aetheria',
  title = 'Choose the conversation that matches your role.',
  body = 'Each path leads to a concrete next step.',
  tracks = [],
}) {
  return (
    <section className="page-stack">
      <SectionIntro kicker={kicker} title={title} body={body} />

      <div className="audience-grid">
        {tracks.map((track) => (
          <article key={track.audience} className="audience-card">
            <div className="audience-copy">
              <div className="section-kicker">{track.audience}</div>
              <p>{track.body}</p>
            </div>
            <AudienceAction href={track.href} label={track.label} />
          </article>
        ))}
      </div>
    </section>
  );
}

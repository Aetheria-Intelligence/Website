import { SectionIntro } from './SectionIntro';

export function InstitutionalTrustBand({
  kicker = 'Institutional trust',
  title = 'Built for environments where failure is not acceptable.',
  body = 'Aetheria requires explicit authority before action, denies by default when control is incomplete, and preserves proof after every decision.',
  items = [],
  domains = [],
  compact = false,
}) {
  return (
    <section className={`trust-band panel${compact ? ' trust-band-compact' : ''}`}>
      <div className="trust-band-head">
        <SectionIntro className="trust-band-copy" kicker={kicker} title={title} body={body} />
        {domains.length ? (
          <div className="trust-domain-row" role="list" aria-label="High-consequence environments">
            {domains.map((domain) => (
              <span key={domain} className="trust-domain-pill" role="listitem">
                {domain}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="trust-band-grid" role="list" aria-label="Governance posture">
        {items.map((item) => (
          <div key={item.title} className="trust-band-item" role="listitem">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

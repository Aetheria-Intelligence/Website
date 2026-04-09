import { Link } from 'react-router-dom';
import { CTAGroup } from './CTAGroup';
import { SectionIntro } from './SectionIntro';

export function KeywordExplainerPage({
  kicker,
  title,
  body,
  definitionTitle,
  definitionBody,
  sections = [],
  signals = [],
  links = [],
  cta,
}) {
  return (
    <section className="page-section page-shell seo-page">
      <div className="container page-stack">
        <SectionIntro kicker={kicker} title={title} as="h1" body={body} />

        <section className="split-shell">
          <div className="sticky-column">
            <div className="page-stack-sm">
              <div className="section-kicker">Core meaning</div>
              <h2 className="split-heading">{definitionTitle}</h2>
              <p className="split-body">{definitionBody}</p>
            </div>
          </div>

          <div className="data-list">
            {sections.map((section) => (
              <article key={section.title} className="data-item">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">What this means</div>
          <div className="signal-inline-list" role="list">
            {signals.map((signal) => (
              <div key={signal} role="listitem" className="signal-inline-item">
                {signal}
              </div>
            ))}
          </div>
        </section>

        <div className="link-grid">
          {links.map((item) => (
            <Link key={item.href} className="link-card panel" to={item.href}>
              <div className="section-kicker">{item.kicker}</div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </Link>
          ))}
        </div>

        {cta ? <CTAGroup {...cta} /> : null}
      </div>
    </section>
  );
}

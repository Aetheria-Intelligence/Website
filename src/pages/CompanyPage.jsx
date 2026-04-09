import { Link } from 'react-router-dom';
import { CTAGroup } from '../components/CTAGroup';
import { SectionIntro } from '../components/SectionIntro';
import { COMPANY_LEGITIMACY_POINTS } from '../data/r9Data';
import {
  COMPANY_AUDIENCES,
  COMPANY_NOT,
  COMPANY_SIGNALS,
  COMPANY_STANCE,
  SEO_EXPLAINERS,
} from '../data/siteData';

export function CompanyPage() {
  return (
    <section className="page-section page-shell">
      <div className="container page-stack">
        <SectionIntro
          kicker="Company"
          title="Aetheria exists because AI action needs authority."
          as="h1"
          body="Capability without control does not deploy."
        />

        <section className="statement-band statement-band-quiet">
          <div className="section-kicker">The shift</div>
          <h2>AI is moving from intent to action. Execution needs explicit authority.</h2>
          <p>That shift defines the category.</p>
        </section>

        <section className="company-legitimacy panel">
          <div className="company-legitimacy-copy">
            <div className="section-kicker">Company posture</div>
            <h2>Founder-led. Infrastructure-focused. Long-horizon.</h2>
            <p>Aetheria is being built as execution governance infrastructure, not as autonomy theater.</p>
          </div>

          <div className="company-legitimacy-grid" role="list" aria-label="Company legitimacy signals">
            {COMPANY_LEGITIMACY_POINTS.map((item) => (
              <div key={item.title} className="company-legitimacy-item" role="listitem">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Category signals"
            title="The market shift is from generated intent to governed action."
            body="The question is not whether a model can contribute. The question is whether the action path is governable."
          />

          <div className="data-list" role="list" aria-label="Category signals">
            {COMPANY_SIGNALS.map((signal) => (
              <div key={signal} className="data-item" role="listitem">
                <h2>{signal}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Aetheria stance"
            title="Control has to exist before consequence occurs."
            body="Authority, denial, and proof have to be operational instead of implied."
          />

          <div className="data-list" role="list" aria-label="Aetheria stance">
            {COMPANY_STANCE.map((item) => (
              <div key={item.title} className="data-item" role="listitem">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Category boundary"
            title="Aetheria is not a generic autonomy wrapper or a post-hoc proof layer."
            body="The category is defined by enforcement before action and proof after outcome."
          />

          <div className="data-list" role="list" aria-label="What Aetheria is not">
            {COMPANY_NOT.map((item) => (
              <div key={item} className="data-item" role="listitem">
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Who feels this first"
            title="The problem appears earliest where action carries institutional consequence."
            body="The first adopters are teams that need explicit denial, retained proof, and deployable control."
          />

          <div className="data-list" role="list" aria-label="Who feels the problem first">
            {COMPANY_AUDIENCES.map((item) => (
              <div key={item} className="data-item" role="listitem">
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="page-stack-sm">
          <SectionIntro
            kicker="Search entry points"
            title="Focused explainers for narrower search intent."
            body="Each page reinforces the same control thesis through a tighter entry point."
          />
          <div className="explainer-grid">
            {SEO_EXPLAINERS.map((item) => (
              <Link key={item.href} className="link-card panel" to={item.href}>
                <div className="section-kicker">Explainer</div>
                <h2>{item.label}</h2>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="link-grid">
          <Link className="link-card panel" to="/use-cases">
            <div className="section-kicker">Use cases</div>
            <h2>See where the category matters.</h2>
            <p>Review the environments where communications, state change, protected data, and operating windows create consequence.</p>
          </Link>
          <Link className="link-card panel" to="/access">
            <div className="section-kicker">Access</div>
            <h2>Start with fit and operating requirements.</h2>
            <p>Use the access path for a serious discussion about action classes, denial expectations, and proof needs.</p>
          </Link>
        </div>

        <CTAGroup
          kicker="Next step"
          title="Take the category into a concrete environment."
          body="Use cases connect the thesis to consequence. Access starts the conversation about fit, architecture, and proof."
          primaryHref="/access"
          primaryLabel="Request Access"
          secondaryHref="/use-cases"
          secondaryLabel="Review use cases"
          tertiaryHref="/architecture"
          tertiaryLabel="Review architecture"
        />
      </div>
    </section>
  );
}

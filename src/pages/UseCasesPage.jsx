import { Link } from 'react-router-dom';
import { CTAGroup } from '../components/CTAGroup';
import { SectionIntro } from '../components/SectionIntro';
import { Tabs } from '../components/Tabs';
import { CONSEQUENCE_PATTERNS, USE_CASE_TABS } from '../data/siteData';

export function UseCasesPage() {
  const scenarioTabs = USE_CASE_TABS.map((item) => ({
    id: item.id,
    label: item.label,
    panel: (
      <div className="page-stack-sm">
        <p className="tab-summary">{item.summary}</p>
        <div className="data-list" role="list" aria-label={`${item.label} detail`}>
          {item.cards.map((card) => (
            <div key={card.title} className="data-item" role="listitem">
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section className="page-section page-shell">
      <div className="container page-stack">
        <SectionIntro
          kicker="Deployment Contexts"
          title="Governed execution matters where machine action creates consequence."
          as="h1"
          body="The same control problem appears across communication, state change, protected data, and time-bound operations."
        />

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Deployment reality</div>
          <h2>These environments do not buy AI reasoning alone. They buy control over execution.</h2>
        </section>

        <section className="panel feature-panel">
          <div className="panel-header">
            <div>
              <div className="section-kicker">Environment views</div>
              <h2>Different sectors share the same execution boundary problem.</h2>
            </div>
          </div>
          <Tabs label="Use case scenarios" tabs={scenarioTabs} />
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Cross-cutting patterns"
            title="The action types repeat even when the sector changes."
            body="Consequence appears in communication, state change, protected data handling, and time-sensitive operations."
          />

          <div className="data-list" role="list" aria-label="Cross-cutting consequence patterns">
            {CONSEQUENCE_PATTERNS.map((pattern) => (
              <div key={pattern.title} className="data-item" role="listitem">
                <h2>{pattern.title}</h2>
                <p>{pattern.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Operational implication</div>
          <h2>Implicit machine action does not survive high-consequence deployment.</h2>
        </section>

        <div className="link-grid">
          <Link className="link-card panel" to="/proof">
            <div className="section-kicker">Verification</div>
            <h2>Inspect the record these environments require.</h2>
            <p>Review the receipts, denials, and reconstruction path that make consequential use reviewable.</p>
          </Link>
          <Link className="link-card panel" to="/access">
            <div className="section-kicker">Access</div>
            <h2>Start with fit, scope, and proof expectations.</h2>
            <p>Use the access path for a serious conversation about action classes, approvals, and evidence requirements.</p>
          </Link>
          <Link className="link-card panel" to="/ai-action-governance">
            <div className="section-kicker">Explainer</div>
            <h2>See the governance layer behind the deployment context.</h2>
            <p>Review how policy, scope, and approval become enforceable before the action can happen.</p>
          </Link>
        </div>

        <CTAGroup
          kicker="Next step"
          title="Match the deployment context to the required level of control."
          body="Review verification, inspect the system, or request access for a fit discussion."
          primaryHref="/access"
          primaryLabel="Request access"
          secondaryHref="/proof"
          secondaryLabel="Review verification"
          tertiaryHref="/platform"
          tertiaryLabel="Return to the system"
        />
      </div>
    </section>
  );
}

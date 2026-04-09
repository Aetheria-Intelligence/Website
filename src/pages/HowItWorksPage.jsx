import { Link } from 'react-router-dom';
import { CTAGroup } from '../components/CTAGroup';
import { SectionIntro } from '../components/SectionIntro';
import { StatusBadge } from '../components/StatusBadge';
import { CONTROL_REQUIREMENTS, DECISION_OUTCOMES } from '../data/siteData';
import { HOW_IT_WORKS_PHASES } from '../data/experienceData';

export function HowItWorksPage() {
  return (
    <section className="page-section page-shell">
      <div className="container page-stack">
        <SectionIntro
          kicker="Execution Model"
          title="How governed execution resolves before action."
          as="h1"
          body="Every requested action becomes a structured proposal. Policy, scope, actor, and runtime conditions resolve before any rail may execute."
        />

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Control doctrine</div>
          <h2>Model intent is not authority. Authorization creates the only path to execution.</h2>
          <p>The decisive boundary is the decision itself: no consequential rail runs until authority is bound to the request.</p>
        </section>

        <section className="split-shell">
          <div className="sticky-column">
            <div className="page-stack-sm">
              <div className="section-kicker">Lifecycle</div>
              <h2 className="split-heading">Five states. One enforced boundary.</h2>
              <p className="split-body">Proposal, decision, execution, and proof remain separate system states.</p>
            </div>
          </div>

          <div className="process-list" role="list" aria-label="Governed execution lifecycle">
            {HOW_IT_WORKS_PHASES.map((item) => (
              <div key={item.stage} className="process-row" role="listitem">
                <div className="process-stage">{item.stage}</div>
                <div className="process-copy">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Operational outcomes"
            title="Allow, deny, and block are normal system behavior."
            body="A serious control model keeps the outcome explicit at the moment of action."
          />

          <div className="data-list" role="list" aria-label="Operational outcomes">
            {DECISION_OUTCOMES.map((outcome) => (
              <div key={outcome.title} className="data-item data-item-with-badge" role="listitem">
                <div className="data-item-head">
                  <h2>{outcome.title}</h2>
                  <StatusBadge status={outcome.title} tone={outcome.tone} />
                </div>
                <p>{outcome.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Boundary rules"
            title="A few invariants hold the system together."
            body="If these break, the system drifts back toward implicit machine authority."
          />

          <div className="data-list" role="list" aria-label="Boundary rules">
            {CONTROL_REQUIREMENTS.map((rule) => (
              <div key={rule} className="data-item" role="listitem">
                <h2>{rule}</h2>
              </div>
            ))}
          </div>
        </section>

        <div className="link-grid">
          <Link className="link-card panel" to="/platform">
            <div className="section-kicker">System</div>
            <h2>Inspect the surfaces that enforce the decision.</h2>
            <p>Review proposal intake, decision service, execution gateway, bounded rails, operator review, and proof export.</p>
          </Link>
          <Link className="link-card panel" to="/proof">
            <div className="section-kicker">Verification</div>
            <h2>See what survives the decision.</h2>
            <p>Review the portable proof packet, denial record, and reconstruction path.</p>
          </Link>
        </div>

        <CTAGroup
          kicker="Next step"
          title="Move from the execution model into the system or the proof surface."
          body="Inspect the system, review verification, or request access for a serious discussion."
          primaryHref="/platform"
          primaryLabel="Inspect the system"
          secondaryHref="/proof"
          secondaryLabel="Review verification"
          tertiaryHref="/access"
          tertiaryLabel="Request access"
        />
      </div>
    </section>
  );
}

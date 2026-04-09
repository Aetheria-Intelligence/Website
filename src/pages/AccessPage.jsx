import { CTAGroup } from '../components/CTAGroup';
import { InquiryForm } from '../components/InquiryForm';
import { InstitutionalTrustBand } from '../components/InstitutionalTrustBand';
import { SectionIntro } from '../components/SectionIntro';
import {
  ACCESS_CHECKLIST,
  ACCESS_HREF,
  ACCESS_RESOURCES,
  ONE_PAGER_HREF,
} from '../data/siteData';
import { ACCESS_RESPONSE_STEPS, INSTITUTIONAL_TRUST_ITEMS } from '../data/r9Data';
import {
  ACCESS_EVALUATION_FLOW,
  ACCESS_EVALUATION_SCENARIOS,
  ACCESS_PROFILE_POSTURE,
  ACCESS_TRUST_PACKAGE,
} from '../data/runtimeDepthData';

const accessBoundaries = [
  'No open-ended self-serve execution path.',
  'No implicit grant of authority across the platform.',
  'No serious evaluation without discussing action classes, approvals, retained proof, and evaluator posture.',
];

export function AccessPage() {
  return (
    <section className="page-section page-shell">
      <div className="container page-stack">
        <SectionIntro
          kicker="Request Access"
          title="Start with the environment, the action boundary, and the proof requirement."
          as="h1"
          body="Aetheria is for serious deployments and deliberate technical review. The first note should identify what the system may do, what it must never do, and what record must remain."
        />

        <section className="split-shell access-shell">
          <div className="sticky-column">
            <div className="page-stack-sm">
              <div className="section-kicker">Inquiry path</div>
              <h2 className="split-heading">Prepared for investor, enterprise, technical, and strategic conversations.</h2>
              <p className="split-body">The access path begins with control, not generic AI interest.</p>
            </div>
          </div>

          <InquiryForm />
        </section>

        <InstitutionalTrustBand
          compact
          kicker="Governance before execution"
          title="Built for environments where execution must be explicitly governed."
          body="Aetheria requires authority before action, records decisions, and keeps denials visible."
          items={INSTITUTIONAL_TRUST_ITEMS.slice(0, 4)}
        />

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Evaluation posture</div>
          <h2>Public evaluation should feel like technical diligence, not generic lead capture.</h2>
          <div className="trust-domain-row" role="list" aria-label="Evaluation posture">
            {ACCESS_PROFILE_POSTURE.map((item) => (
              <span key={item} className="trust-domain-pill" role="listitem">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Preparation</div>
          <h2>The highest-signal inputs are about control, not generic AI interest.</h2>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Preparation checklist"
            title="Bring the action boundary into the conversation early."
            body="The better the initial control framing, the faster the evaluation becomes concrete."
          />

          <div className="data-list" role="list" aria-label="Access checklist">
            {ACCESS_CHECKLIST.map((item) => (
              <div key={item} className="data-item" role="listitem">
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Technical evaluation flow"
            title="A serious evaluator path goes from runtime posture to verified proof."
            body="The runtime story should be deliberate: validate, bring up, run a governed turn, inspect lifecycle truth, and archive the evidence set."
          />

          <div className="process-list" role="list" aria-label="Technical evaluation flow">
            {ACCESS_EVALUATION_FLOW.map((step) => (
              <div key={step.title} className="process-row" role="listitem">
                <div className="process-stage">{step.stage}</div>
                <div className="process-copy">
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Canonical evaluator scenarios</div>
          <div className="step-chip-grid" role="list" aria-label="Canonical evaluator scenarios">
            {ACCESS_EVALUATION_SCENARIOS.map((scenario) => (
              <div key={scenario.title} className="step-chip" role="listitem">
                <div className="step-chip-title">{scenario.title}</div>
                <p>{scenario.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="What happens next"
            title="Qualified inquiries move from fit to architecture."
            body="The first exchange clarifies control requirements before broader deployment enters the discussion."
          />

          <div className="data-list" role="list" aria-label="Access response steps">
            {ACCESS_RESPONSE_STEPS.map((item) => (
              <div key={item.title} className="data-item" role="listitem">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Trust package"
            title="A credible access process includes concrete technical materials."
            body="The website should invite diligence by making clear that architecture, proof, runtime posture, and evaluation evidence are part of the review package."
          />

          <div className="data-list" role="list" aria-label="Trust package contents">
            {ACCESS_TRUST_PACKAGE.map((item) => (
              <div key={item.title} className="data-item" role="listitem">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="page-stack-sm">
          <div className="section-kicker">Resources</div>
          <div className="link-grid">
            {ACCESS_RESOURCES.map((resource) => (
              <a
                key={resource.title}
                className="link-card panel"
                href={resource.href}
                target={resource.href.startsWith('http') || resource.href.endsWith('.pdf') ? '_blank' : undefined}
                rel={resource.href.startsWith('http') || resource.href.endsWith('.pdf') ? 'noreferrer' : undefined}
              >
                <div className="section-kicker">Resource</div>
                <h2>
                  {resource.title}
                  {resource.href.startsWith('http') || resource.href.endsWith('.pdf') ? (
                    <span className="sr-only"> opens in a new tab</span>
                  ) : null}
                </h2>
                <p>{resource.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Access boundaries"
            title="Access sharpens the control posture before it expands capability."
            body="Evaluation should clarify the action boundary before broader deployment enters the discussion."
          />

          <div className="data-list" role="list" aria-label="Access boundaries">
            {accessBoundaries.map((item) => (
              <div key={item} className="data-item" role="listitem">
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        </section>

        <CTAGroup
          kicker="Direct contact"
          title="Start with the environment and the action boundary."
          body="Email Aetheria directly, circulate the one-pager internally, or review the architecture before a deeper discussion."
          primaryHref={ACCESS_HREF}
          primaryLabel="Email Aetheria"
          secondaryHref={ONE_PAGER_HREF}
          secondaryLabel="Download the one-pager"
          tertiaryHref="/architecture"
          tertiaryLabel="Review architecture"
        />
      </div>
    </section>
  );
}

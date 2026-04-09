import { Link } from 'react-router-dom';
import { AudienceTracks } from '../components/AudienceTracks';
import { CategoryContrast } from '../components/CategoryContrast';
import { DoctrineSection } from '../components/DoctrineSection';
import { ExecutionLifecycleSection } from '../components/ExecutionLifecycleSection';
import { HeroLifecycleStrip } from '../components/HeroLifecycleStrip';
import { InstitutionalTrustBand } from '../components/InstitutionalTrustBand';
import { ProofVerificationSection } from '../components/ProofVerificationSection';
import { SectionIntro } from '../components/SectionIntro';
import { AUDIENCE_PATHS, HOME_PROBLEM_STRIP } from '../data/experienceData';
import {
  CATEGORY_CONTRAST_ROWS,
  INSTITUTIONAL_DOMAINS,
  INSTITUTIONAL_TRUST_ITEMS,
} from '../data/r9Data';
import { HOME_FOUNDATION_LAYERS } from '../data/runtimeDepthData';

const heroPreview = {
  kicker: 'Denied proposal trace',
  title: 'decision.trace',
  tone: 'deny',
  lines: [
    ['Proposal', 'prp_8f4e1c7a'],
    ['Requested', 'Send customer notice'],
    ['Policy', 'communications.v3'],
    ['Authority', 'outbound.customer.notice absent'],
    ['Decision', 'Denied'],
    ['Execution', 'Not performed'],
    ['Verification', 'Sealed'],
  ],
  footer: 'trace_id: trc_84bd0e72 | proof_state: complete_denied | 2026-04-08T09:42:17Z',
};

const HOME_HERO_SIGNALS = [
  {
    title: 'Proposal before side effect',
    body: 'Every consequential request becomes a structured proposal before any rail is allowed to run.',
  },
  {
    title: 'Authority before execution',
    body: 'Policy, scope, actor, and runtime conditions resolve at the checkpoint.',
  },
  {
    title: 'Proof after outcome',
    body: 'Allowed, denied, and blocked states remain portable and reviewable.',
  },
];

const HOME_HERO_CONTEXTS = ['Healthcare', 'Finance', 'Critical infrastructure', 'Enterprise systems'];

export function HomePage() {
  return (
    <>
      <section className="page-section page-hero home-hero-r10">
        <div className="hero-system-grid" aria-hidden="true">
          <span className="hero-system-node hero-system-node-1" />
          <span className="hero-system-node hero-system-node-2" />
          <span className="hero-system-node hero-system-node-3" />
          <span className="hero-system-node hero-system-node-4" />
          <span className="hero-system-link hero-system-link-1" />
          <span className="hero-system-link hero-system-link-2" />
          <span className="hero-system-link hero-system-link-3" />
        </div>

        <div className="container hero-grid hero-grid-r10">
          <div className="hero-copy hero-copy-r10">
            <div className="section-kicker">Governed execution</div>
            <h1 className="hero-title hero-title-r10">
              AI can think.
              <br />
              It cannot act without permission.
            </h1>
            <p className="hero-lead hero-lead-r10">
              Aetheria turns every consequential request into a structured proposal.
              <br />
              Authority resolves before any rail is allowed to run.
            </p>
            <p className="hero-support-r11">
              Built for organizations where AI must operate under explicit control.
            </p>

            <div className="hero-inline-note hero-inline-note-r11">
              Proposal before side effect. Authority before execution. Proof after outcome.
            </div>

            <div className="trust-domain-row hero-context-row" role="list" aria-label="High-consequence deployment contexts">
              {HOME_HERO_CONTEXTS.map((domain) => (
                <span key={domain} className="trust-domain-pill hero-context-pill" role="listitem">
                  {domain}
                </span>
              ))}
            </div>

            <div className="button-row hero-button-row">
              <Link className="button button-primary" to="/how-it-works">
                See how it works
              </Link>
              <a className="button button-secondary" href="#execution-lifecycle">
                View execution lifecycle
              </a>
            </div>

            <HeroLifecycleStrip />

            <div className="hero-signal-grid" role="list" aria-label="Homepage control signals">
              {HOME_HERO_SIGNALS.map((item) => (
                <div key={item.title} className="hero-signal-card" role="listitem">
                  <div className="hero-signal-title">{item.title}</div>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <article className="artifact-console artifact-tone-deny hero-preview-panel" aria-label={heroPreview.kicker}>
            <header className="artifact-header">
              <div className="artifact-meta">
                <div className="section-kicker">{heroPreview.kicker}</div>
                <div className="artifact-title">{heroPreview.title}</div>
              </div>
            </header>

            <dl className="artifact-body">
              {heroPreview.lines.map(([label, value]) => (
                <div key={label} className="artifact-line">
                  <dt className="artifact-key">{label}</dt>
                  <dd className="artifact-value">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="artifact-footer">{heroPreview.footer}</div>
          </article>
        </div>
      </section>

      <section className="page-section page-section-core">
        <div className="container">
          <ExecutionLifecycleSection />
        </div>
      </section>

      <DoctrineSection />

      <section className="page-section page-section-statement">
        <div className="container">
          <div className="statement-band statement-band-quiet statement-band-enforcement">
            <div className="section-kicker">Enforcement layer</div>
            <h2>This is not monitoring. It is enforcement before execution.</h2>
            <p>This is not guidance. It is control over whether a consequential action may run.</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section-proof">
        <div className="container">
          <ProofVerificationSection />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="problem-strip" role="list" aria-label="Control boundary context">
            {HOME_PROBLEM_STRIP.map((item) => (
              <div key={item.title} className="problem-cell" role="listitem">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-stack-sm">
          <SectionIntro
            kicker="System foundation"
            title="Three layers hold the boundary."
            body="Contract layer. Runtime enforcement layer. Capability layer."
          />

          <div className="card-grid card-grid-three" role="list" aria-label="Aetheria system layers">
            {HOME_FOUNDATION_LAYERS.map((layer) => (
              <div key={layer.title} className="panel card page-stack-sm foundation-card" role="listitem">
                <div className="section-kicker">{layer.kicker}</div>
                <h2>{layer.title}</h2>
                <p>{layer.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <InstitutionalTrustBand
            kicker="Control posture"
            title="The boundary fails closed."
            body="Authority is explicit. Missing scope stops the request. Decision and outcome remain reviewable."
            items={INSTITUTIONAL_TRUST_ITEMS}
            domains={INSTITUTIONAL_DOMAINS}
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <CategoryContrast
            kicker="Category boundary"
            title="Authority resolves before action."
            body="Ordinary stacks control after execution. Governed execution resolves permission before execution."
            rows={CATEGORY_CONTRAST_ROWS}
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <AudienceTracks
            tracks={AUDIENCE_PATHS}
            body="Inspect the system, request access, or open a strategic conversation."
          />
        </div>
      </section>
    </>
  );
}

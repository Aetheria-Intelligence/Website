import { Link } from 'react-router-dom';
import { CTAGroup } from '../components/CTAGroup';
import { InstitutionalTrustBand } from '../components/InstitutionalTrustBand';
import { OperationalTracePanel } from '../components/OperationalTracePanel';
import { ProofVerificationSection } from '../components/ProofVerificationSection';
import { SectionIntro } from '../components/SectionIntro';
import { OPERATIONAL_TRACES, INSTITUTIONAL_TRUST_ITEMS } from '../data/r9Data';
import { PROOF_PACKET_FIELDS, RECONSTRUCTION_STEPS, TRUST_REQUIREMENTS } from '../data/siteData';
import {
  PROOF_EXPORT_SIGNALS,
  PROOF_STATES,
  PROOF_VERIFICATION_STEPS,
} from '../data/runtimeDepthData';

const SAMPLE_PACKET_SNIPPET = `{
  "proposal_id": "prp_8f4e1c7a",
  "decision": "DENIED",
  "execution": "NOT_PERFORMED",
  "proof_state": "complete_denied"
}`;

export function ProofPage() {
  return (
    <section className="page-section page-shell">
      <div className="container page-stack">
        <SectionIntro
          kicker="Verification"
          title="Verification survives execution, denial, and failure."
          as="h1"
          body="A portable proof packet keeps proposal, decision, scope, execution state, and verification metadata linked for review outside the live runtime."
        />

        <ProofVerificationSection />

        <section className="panel proof-sample-panel">
          <div className="proof-sample-copy">
            <div className="section-kicker">Portable artifact</div>
            <h2>Download a sample proof packet.</h2>
            <p>
              A public sample makes the retained record concrete: proposal, decision, execution state,
              and verification metadata stay linked in one portable object.
            </p>
            <div className="button-row">
              <a
                className="button button-primary"
                href="/downloads/aetheria-sample-proof-packet.json"
                target="_blank"
                rel="noreferrer"
              >
                Download sample JSON <span className="sr-only">opens in a new tab</span>
              </a>
              <Link className="button button-secondary" to="/how-it-works">
                See the execution model
              </Link>
            </div>
          </div>

          <pre className="proof-sample-preview" aria-label="Sample proof packet preview">{SAMPLE_PACKET_SNIPPET}</pre>
        </section>

        <OperationalTracePanel
          kicker="Recorded evidence"
          title="Structured proof records."
          body="Aetheria records what was requested, what was evaluated, what happened, and what was refused."
          traces={OPERATIONAL_TRACES}
          defaultTraceId="denied-external-message"
        />

        <InstitutionalTrustBand
          compact
          kicker="Auditability by design"
          title="Decision traceability is built into the runtime."
          body="Proof remains visible whether work is authorized, blocked, or denied, and the runtime exports evidence for review instead of relying on hindsight."
          items={[INSTITUTIONAL_TRUST_ITEMS[1], INSTITUTIONAL_TRUST_ITEMS[2], INSTITUTIONAL_TRUST_ITEMS[3]]}
        />

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Export and verify</div>
          <h2>The proof surface moves outside the live runtime without losing integrity.</h2>
          <div className="signal-inline-list" role="list" aria-label="Proof export signals">
            {PROOF_EXPORT_SIGNALS.map((item) => (
              <div key={item} role="listitem" className="signal-inline-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Proof packet"
            title="The retained record is structured for verification."
            body="Each field exists so an operator, engineer, or reviewer can reconstruct what happened or confirm that it never happened."
          />

          <div className="data-list" role="list" aria-label="Proof packet fields">
            {PROOF_PACKET_FIELDS.map((field) => (
              <div key={field.title} className="data-item" role="listitem">
                <h2>{field.title}</h2>
                <p>{field.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Proof states"
            title="Lifecycle truth stays explicit even when execution is denied or blocked."
            body="When canonical artifacts are present, proof state is the authoritative description of the lifecycle that actually occurred."
          />

          <div className="data-list" role="list" aria-label="Proof states">
            {PROOF_STATES.map((state) => (
              <div key={state.title} className="data-item" role="listitem">
                <h2>{state.title}</h2>
                <p>{state.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Verification path"
            title="The same packet should support incident review, audit, and offline verification."
            body="A serious reviewer should be able to move from lifecycle retrieval to portable proof validation without depending on a live operator session."
          />

          <div className="process-list" role="list" aria-label="Verification path">
            {PROOF_VERIFICATION_STEPS.map((step) => (
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

        <section className="split-shell">
          <SectionIntro
            kicker="Reconstruction"
            title="Proof still has to work for later human review."
            body="Portable verification does not replace operator review. It makes the same evidence usable across audit, debugging, and incident analysis."
          />

          <div className="process-list" role="list" aria-label="Reconstruction steps">
            {RECONSTRUCTION_STEPS.map((step, index) => (
              <div key={step.title} className="process-row" role="listitem">
                <div className="process-stage">0{index + 1}</div>
                <div className="process-copy">
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Trust requirements</div>
          <div className="signal-inline-list" role="list">
            {TRUST_REQUIREMENTS.map((item) => (
              <div key={item} role="listitem" className="signal-inline-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="link-grid">
          <Link className="link-card panel" to="/architecture">
            <div className="section-kicker">Architecture</div>
            <h2>Inspect the constraints behind the evidence.</h2>
            <p>Review the boundaries, fail-closed posture, and execution mediation that make the record meaningful.</p>
          </Link>
          <Link className="link-card panel" to="/why-ai-needs-enforcement-layers">
            <div className="section-kicker">Explainer</div>
            <h2>See why enforcement layers need proof.</h2>
            <p>Review how denial, fail-closed behavior, and retained evidence reinforce one another.</p>
          </Link>
        </div>

        <CTAGroup
          kicker="Next step"
          title="Use verification to judge whether the control model is strong enough."
          body="Request access, inspect architecture, or return to the execution model."
          primaryHref="/access"
          primaryLabel="Request access"
          secondaryHref="/architecture"
          secondaryLabel="Review architecture"
          tertiaryHref="/how-it-works"
          tertiaryLabel="Return to the execution model"
        />
      </div>
    </section>
  );
}

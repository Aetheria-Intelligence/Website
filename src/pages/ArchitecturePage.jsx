import { Link } from 'react-router-dom';
import { CTAGroup } from '../components/CTAGroup';
import { InstitutionalTrustBand } from '../components/InstitutionalTrustBand';
import { SectionIntro } from '../components/SectionIntro';
import { ARCHITECTURE_GUARDS, ARCHITECTURE_LAYERS, FAILURE_POSTURE } from '../data/siteData';
import { INSTITUTIONAL_TRUST_ITEMS } from '../data/r9Data';
import {
  ARCHITECTURE_BOUNDARY_RULES,
  ARCHITECTURE_RUNTIME_PILLARS,
  ARCHITECTURE_SYSTEM_LAYERS,
} from '../data/runtimeDepthData';

export function ArchitecturePage() {
  return (
    <section className="page-section page-shell">
      <div className="container page-stack">
        <SectionIntro
          kicker="Architecture"
          title="Aetheria keeps model intent from collapsing into action."
          as="h1"
          body="The system is contract-first: the contract layer defines action meaning, the runtime enforces constraints, and capabilities remain bounded on governed rails."
        />

        <section className="page-stack-sm">
          <SectionIntro
            kicker="Three-layer system model"
            title="The public site can now say more of the system truth."
            body="Aetheria is not only an execution boundary. The runtime and system contracts describe a contract layer, an enforcement runtime, and bounded capability packs."
          />

          <div className="card-grid card-grid-three" role="list" aria-label="Three-layer system model">
            {ARCHITECTURE_SYSTEM_LAYERS.map((layer) => (
              <div key={layer.title} className="panel card page-stack-sm" role="listitem">
                <div className="section-kicker">System layer</div>
                <h2>{layer.title}</h2>
                <p>{layer.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Runtime pillars</div>
          <h2>Kernel arbitration sits inside a runtime with named enforcement surfaces.</h2>
          <div className="trust-domain-row" role="list" aria-label="Runtime pillars">
            {ARCHITECTURE_RUNTIME_PILLARS.map((pillar) => (
              <span key={pillar} className="trust-domain-pill" role="listitem">
                {pillar}
              </span>
            ))}
          </div>
        </section>

        <section className="page-stack-sm">
          <div className="section-kicker">Execution planes</div>
          <div className="layer-stack">
            {ARCHITECTURE_LAYERS.map((layer) => (
              <article key={layer.title} className="layer-card panel">
                <div className="layer-title">{layer.title}</div>
                <p>{layer.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Execution mediation</div>
          <h2>This is not guidance. It is control over execution.</h2>
          <p>The decisive boundary sits between decision and action, where authority is bound to the specific rail that may run.</p>
        </section>

        <InstitutionalTrustBand
          compact
          kicker="Governance posture"
          title="Deny by default. Record the outcome."
          body="The architecture prefers bounded non-action over uncertain action."
          items={INSTITUTIONAL_TRUST_ITEMS.slice(0, 4)}
        />

        <section className="split-shell">
          <SectionIntro
            kicker="Boundary rules"
            title="The layers are useful only when they remain hard boundaries."
            body="Capabilities are allowed to grow quickly, but not by corrupting the contract layer, bypassing the kernel, or inventing proof."
          />

          <div className="data-list" role="list" aria-label="Boundary rules">
            {ARCHITECTURE_BOUNDARY_RULES.map((rule) => (
              <div key={rule.title} className="data-item" role="listitem">
                <h2>{rule.title}</h2>
                <p>{rule.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Architectural guards"
            title="The system prefers bounded non-action over uncertain action."
            body="These guards keep the architecture from drifting into ambient authority or invisible side effects."
          />

          <div className="data-list" role="list" aria-label="Architectural guards">
            {ARCHITECTURE_GUARDS.map((guard) => (
              <div key={guard.title} className="data-item" role="listitem">
                <h2>{guard.title}</h2>
                <p>{guard.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Failure posture"
            title="When conditions are missing, the system stays under control."
            body="Missing policy, scope, or proof requirements do not create a weaker path."
          />

          <div className="data-list" role="list" aria-label="Failure posture">
            {FAILURE_POSTURE.map((item) => (
              <div key={item.title} className="data-item" role="listitem">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="link-grid">
          <Link className="link-card panel" to="/platform">
            <div className="section-kicker">System</div>
            <h2>Return to system surfaces.</h2>
            <p>See how the public surfaces map onto the decision service, gateway, rails, operator console, and evidence layer.</p>
          </Link>
          <Link className="link-card panel" to="/bounded-ai-systems">
            <div className="section-kicker">Explainer</div>
            <h2>See the bounded system thesis in plain language.</h2>
            <p>Review how scoped rails, constrained capability, and fail-closed behavior create a bounded AI system.</p>
          </Link>
        </div>

        <CTAGroup
          kicker="Next step"
          title="Move from architectural constraints to verification or access."
          body="Review verification, inspect the system, or request access for a technical discussion."
          primaryHref="/access"
          primaryLabel="Request access"
          secondaryHref="/proof"
          secondaryLabel="Review verification"
          tertiaryHref="/platform"
          tertiaryLabel="Inspect the system"
        />
      </div>
    </section>
  );
}

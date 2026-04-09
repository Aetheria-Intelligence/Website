import { Link } from 'react-router-dom';
import { CTAGroup } from '../components/CTAGroup';
import { InstitutionalTrustBand } from '../components/InstitutionalTrustBand';
import { SectionIntro } from '../components/SectionIntro';
import { StatusBadge } from '../components/StatusBadge';
import { Tabs } from '../components/Tabs';
import {
  AGGREGATION_MODES,
  EXTENSION_LIFECYCLE,
  PLATFORM_SURFACES,
} from '../data/siteData';
import { INSTITUTIONAL_TRUST_ITEMS } from '../data/r9Data';
import { PLATFORM_ACTION_REGISTRY, PLATFORM_EXISTING_GROUPS } from '../data/runtimeDepthData';

export function PlatformPage() {
  const aggregationTabs = AGGREGATION_MODES.map((mode) => ({
    id: mode.id,
    label: mode.label,
    panel: (
      <div className="page-stack-sm">
        <div className="tab-panel-intro">
          <div className="section-kicker">{mode.eyebrow}</div>
          <p>{mode.summary}</p>
        </div>
        <div className="data-list" role="list" aria-label={`${mode.label} providers`}>
          {mode.providers.map((provider) => (
            <div key={provider.name} className="data-item data-item-with-badge" role="listitem">
              <div className="data-item-head">
                <h3>{provider.name}</h3>
                <StatusBadge status={provider.state} />
              </div>
              <p>{provider.body}</p>
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
          kicker="System"
          title="The system that sits between model intent and real-world action."
          as="h1"
          body="Proposal intake, decision service, execution gateway, bounded rails, operator review, and portable proof form one governed AI infrastructure surface."
        />

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Execution control</div>
          <h2>This is not a tool menu. It is a governed AI infrastructure surface.</h2>
          <p>The model does not receive ambient power. The system exposes admitted rails, decision state, and evidence surfaces.</p>
        </section>

        <section className="split-shell">
          <div className="sticky-column">
            <div className="page-stack-sm">
              <div className="section-kicker">System surfaces</div>
              <h2 className="split-heading">A control plane, not a tool menu.</h2>
              <p className="split-body">Each surface keeps authority explicit before a request can create a real-world effect.</p>
            </div>
          </div>

          <div className="data-list" role="list" aria-label="Platform surfaces">
            {PLATFORM_SURFACES.map((surface) => (
              <div key={surface.title} className="data-item data-item-with-badge" role="listitem">
                <div className="data-item-head">
                  <h2>{surface.title}</h2>
                  <StatusBadge status={surface.status} tone={surface.tone} />
                </div>
                <p>{surface.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="page-stack-sm">
          <SectionIntro
            kicker="What exists today"
            title="The current codebase already reaches well beyond a simple execution gateway."
            body="These are shipped surfaces visible in the runtime and system contracts, not speculative platform language."
          />

          <div className="card-grid card-grid-two" role="list" aria-label="Current platform breadth">
            {PLATFORM_EXISTING_GROUPS.map((group) => (
              <div key={group.title} className="panel card page-stack-sm" role="listitem">
                <div className="section-kicker">{group.kicker}</div>
                <h2>{group.title}</h2>
                <p>{group.body}</p>
              </div>
            ))}
          </div>
        </section>

        <InstitutionalTrustBand
          compact
          kicker="Institutional trust"
          title="Governance is enforced before execution."
          body="The system keeps authority explicit, denies by default, and preserves the record."
          items={INSTITUTIONAL_TRUST_ITEMS.slice(0, 4)}
        />

        <section className="panel feature-panel">
          <div className="panel-header">
            <div>
              <div className="section-kicker">Aggregation</div>
              <h2>Model orchestration stays inside the control system.</h2>
            </div>
          </div>
          <Tabs label="Aggregation mode" tabs={aggregationTabs} />
        </section>

        <section className="split-shell">
          <SectionIntro
            kicker="Current action registry"
            title="The current runtime exposes live rails and intentionally non-live rails."
            body="The action registry is explicit about what dispatches today and what is recognized but deliberately not yet live."
          />

          <div className="data-list" role="list" aria-label="Current action registry">
            {PLATFORM_ACTION_REGISTRY.map((rail) => (
              <div key={rail.title} className="data-item data-item-with-badge" role="listitem">
                <div className="data-item-head">
                  <h2>{rail.title}</h2>
                  <StatusBadge status={rail.status} tone={rail.tone} />
                </div>
                <p>{rail.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="statement-band statement-band-compact statement-band-quiet">
          <div className="section-kicker">Extension lifecycle</div>
          <div className="step-chip-grid" role="list" aria-label="Extension lifecycle">
            {EXTENSION_LIFECYCLE.map((step) => (
              <div key={step.title} className="step-chip" role="listitem">
                <div className="step-chip-title">{step.title}</div>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="link-grid">
          <Link className="link-card panel" to="/architecture">
            <div className="section-kicker">Architecture</div>
            <h2>Move from surfaces to constraints.</h2>
            <p>Review the layer boundaries, fail-closed posture, and execution mediation behind the system.</p>
          </Link>
          <Link className="link-card panel" to="/bounded-ai-systems">
            <div className="section-kicker">Explainer</div>
            <h2>See why bounded systems matter.</h2>
            <p>Review the category language behind governed rails, scoped capability, and constrained action.</p>
          </Link>
        </div>

        <CTAGroup
          kicker="Next step"
          title="Connect the system to a real environment."
          body="Request access, review architecture, or move directly into deployment contexts."
          primaryHref="/access"
          primaryLabel="Request access"
          secondaryHref="/architecture"
          secondaryLabel="Review architecture"
          tertiaryHref="/use-cases"
          tertiaryLabel="Review deployment contexts"
        />
      </div>
    </section>
  );
}

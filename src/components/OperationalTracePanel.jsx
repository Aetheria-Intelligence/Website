import { useMemo, useState } from 'react';
import { StatusBadge } from './StatusBadge';

export function OperationalTracePanel({
  kicker = 'Recorded evidence',
  title = 'What governed execution looks like in practice.',
  body = 'A concrete proof record makes the operating model visible before deployment.',
  traces = [],
  defaultTraceId = '',
}) {
  const [activeId, setActiveId] = useState(defaultTraceId || traces[0]?.id || '');

  const activeTrace = useMemo(
    () => traces.find((trace) => trace.id === activeId) || traces[0],
    [activeId, traces],
  );

  if (!activeTrace) {
    return null;
  }

  return (
    <section className="trace-panel panel">
      <div className="trace-panel-head">
        <div className="trace-panel-copy">
          <div className="section-kicker">{kicker}</div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>

        {traces.length > 1 ? (
          <div className="trace-tab-row" role="tablist" aria-label="Proof record variants">
            {traces.map((trace) => {
              const selected = trace.id === activeTrace.id;

              return (
                <button
                  key={trace.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`trace-tab${selected ? ' is-active' : ''}`}
                  onClick={() => setActiveId(trace.id)}
                >
                  {trace.tabLabel}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="trace-runtime-header">
        <div className="trace-runtime-copy">
          <div className="section-kicker">{activeTrace.eyebrow}</div>
          <h3>{activeTrace.title}</h3>
          <p>{activeTrace.summary}</p>
        </div>
        <StatusBadge status={activeTrace.statusLabel} tone={activeTrace.tone} />
      </div>

      <div className="trace-runtime-grid">
        <ol className="trace-timeline" aria-label={activeTrace.title}>
          {activeTrace.steps.map((step, index) => (
            <li key={step.stage} className={`trace-step trace-step-${activeTrace.tone}`}>
              <div className="trace-step-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="trace-step-copy">
                <h4>{step.stage}</h4>
                <p>{step.detail}</p>
                <div className="trace-step-meta">{step.meta}</div>
              </div>
            </li>
          ))}
        </ol>

        <aside className={`trace-receipt trace-receipt-${activeTrace.tone}`} aria-label="Proof artifact">
          <div className="trace-receipt-kicker">Sealed artifact</div>
          <div className="trace-receipt-title">proof_artifact</div>
          <div className="trace-receipt-body">
            {activeTrace.receipt.map(([label, value]) => (
              <div key={label} className="trace-receipt-row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

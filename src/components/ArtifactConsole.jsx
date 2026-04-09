import { StatusBadge } from './StatusBadge';

const toneLabel = {
  allow: 'Allowed',
  deny: 'Denied',
  proof: 'Recorded',
  warn: 'Blocked',
  accent: 'Reviewed',
  neutral: 'Observed',
};

export function ArtifactConsole({ kicker, title, tone = 'neutral', lines = [], footer = '' }) {
  const status = toneLabel[tone] || 'Recorded';

  return (
    <article className={`artifact-console artifact-tone-${tone}`} aria-label={kicker || title}>
      <header className="artifact-header">
        <div className="artifact-meta">
          {kicker ? <div className="section-kicker">{kicker}</div> : null}
          <div className="artifact-title">{title}</div>
        </div>
        <StatusBadge status={status} tone={tone} />
      </header>

      <dl className="artifact-body">
        {lines.map(([label, value]) => (
          <div key={label} className="artifact-line">
            <dt className="artifact-key">{label}</dt>
            <dd className="artifact-value">{value}</dd>
          </div>
        ))}
      </dl>

      {footer ? <div className="artifact-footer">{footer}</div> : null}
    </article>
  );
}

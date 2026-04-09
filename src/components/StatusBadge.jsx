const toneMap = {
  allow: 'allow',
  approved: 'allow',
  authorized: 'allow',
  represented: 'allow',
  live: 'allow',
  executed: 'allow',
  deny: 'deny',
  denied: 'deny',
  blocked: 'deny',
  warn: 'warn',
  gated: 'warn',
  planned: 'warn',
  accent: 'accent',
  core: 'accent',
  proof: 'proof',
  recorded: 'proof',
  verified: 'proof',
  confirmed: 'proof',
  sealed: 'proof',
  review: 'accent',
  neutral: 'neutral',
  governed: 'neutral',
  control: 'neutral',
};

export function StatusBadge({ status, tone = '' }) {
  const normalized = String(tone || status || '').toLowerCase();
  const key = Object.keys(toneMap).find((item) => normalized.includes(item));
  const resolvedTone = key ? toneMap[key] : 'neutral';

  return <span className={`status-badge status-${resolvedTone}`}>{status}</span>;
}

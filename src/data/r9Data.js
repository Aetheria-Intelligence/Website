export const INSTITUTIONAL_TRUST_ITEMS = [
  {
    title: 'Explicit authority required',
    body: 'Requests do not execute because a model proposed them. Authority resolves before action.',
  },
  {
    title: 'Deny by default',
    body: 'Missing scope, policy, or runtime conditions stop the request instead of weakening the boundary.',
  },
  {
    title: 'Decision traceability',
    body: 'Proposal, evaluation, decision, execution, and proof remain linked as one reviewable sequence.',
  },
  {
    title: 'Auditable outcomes',
    body: 'Authorized runs emit proof. Blocked runs remain visible. Review does not depend on memory.',
  },
  {
    title: 'Deployment-safe posture',
    body: 'The operating model holds for healthcare, finance, infrastructure, government, and other sensitive environments.',
  },
];

export const INSTITUTIONAL_DOMAINS = [
  'Healthcare',
  'Finance',
  'Infrastructure',
  'Government',
  'Operational systems',
];

export const CATEGORY_CONTRAST_ROWS = [
  {
    label: 'Authorization',
    conventional: 'Connected models reach live tools once the path exists.',
    governed: 'Execution requires explicit authority bound to a specific rail.',
  },
  {
    label: 'Control posture',
    conventional: 'Controls react after the action.',
    governed: 'Evaluation happens before the action.',
  },
  {
    label: 'Failure mode',
    conventional: 'Missing policy creates fallback behavior, manual patchwork, or silent risk.',
    governed: 'Missing policy stops the request.',
  },
  {
    label: 'Evidence',
    conventional: 'Fragments describe aftermath.',
    governed: 'Decision and outcome remain sealed as proof.',
  },
];

export const OPERATIONAL_TRACES = [
  {
    id: 'denied-external-message',
    tabLabel: 'Blocked external action',
    eyebrow: 'Blocked proof record',
    title: 'Outbound customer notification is blocked before send',
    summary: 'A proposed external message reaches governance, fails authority evaluation, and never executes.',
    tone: 'deny',
    statusLabel: 'Blocked',
    steps: [
      {
        stage: 'Action proposed',
        detail: 'Send customer-facing outage update through outbound.customer.notice.',
        meta: 'action_id: act_4d8a7c11',
      },
      {
        stage: 'Governance evaluated',
        detail: 'Policy, scope, actor, and incident context are checked before any message leaves the system.',
        meta: 'policy_set: communications.v3',
      },
      {
        stage: 'Decision resolved',
        detail: 'Authority for external customer messaging is absent.',
        meta: 'decision: BLOCKED',
      },
      {
        stage: 'Execution denied',
        detail: 'No outbound rail is activated. No message is sent.',
        meta: 'status: DENIED',
      },
      {
        stage: 'Proof verified',
        detail: 'Action, denial reason, actor, and timestamp remain sealed for review.',
        meta: 'trace_id: trc_84bd0e72',
      },
    ],
    receipt: [
      ['action_id', 'act_4d8a7c11'],
      ['rail', 'outbound.customer.notice'],
      ['decision', 'BLOCKED'],
      ['status', 'DENIED'],
      ['trace_id', 'trc_84bd0e72'],
      ['verification', 'CONFIRMED'],
      ['timestamp', '2026-04-08T09:42:17Z'],
    ],
  },
  {
    id: 'allowed-internal-update',
    tabLabel: 'Authorized bounded action',
    eyebrow: 'Authorized proof record',
    title: 'Internal operational update executes inside approved scope',
    summary: 'A low-risk internal update is admitted, executed on a bounded rail, and recorded.',
    tone: 'allow',
    statusLabel: 'Authorized',
    steps: [
      {
        stage: 'Action proposed',
        detail: 'Publish an internal status update to the operations channel.',
        meta: 'action_id: act_20a5d47f',
      },
      {
        stage: 'Governance evaluated',
        detail: 'Authority, recipients, change window, and approved template are verified.',
        meta: 'scope: internal.ops.update',
      },
      {
        stage: 'Decision resolved',
        detail: 'The request fits the approved internal communications rail.',
        meta: 'decision: AUTHORIZED',
      },
      {
        stage: 'Execution committed',
        detail: 'The message is sent only through the admitted internal channel.',
        meta: 'status: EXECUTED',
      },
      {
        stage: 'Proof verified',
        detail: 'Action, decision, receipt, and final state remain linked.',
        meta: 'trace_id: trc_2ae914c1',
      },
    ],
    receipt: [
      ['action_id', 'act_20a5d47f'],
      ['rail', 'internal.ops.update'],
      ['decision', 'AUTHORIZED'],
      ['status', 'EXECUTED'],
      ['trace_id', 'trc_2ae914c1'],
      ['verification', 'CONFIRMED'],
      ['timestamp', '2026-04-08T09:38:04Z'],
    ],
  },
];

export const ACCESS_INQUIRY_OPTIONS = [
  { value: 'request-access', label: 'Request access' },
  { value: 'technical-evaluation', label: 'Technical evaluation' },
  { value: 'strategic-conversation', label: 'Strategic conversation' },
  { value: 'partnership', label: 'Strategic partnership' },
];

export const ACCESS_RESPONSE_STEPS = [
  {
    title: 'Fit is framed first',
    body: 'The first review starts with action classes, denial posture, and proof requirements.',
  },
  {
    title: 'Architecture follows',
    body: 'If the control model fits, the next step is boundary design, rails, and evidence surfaces.',
  },
  {
    title: 'Deployment is scoped',
    body: 'Serious discussions move into environment constraints, evaluation flow, and access expectations.',
  },
];

export const COMPANY_LEGITIMACY_POINTS = [
  {
    title: 'Founder-led',
    body: 'Aetheria is being built with direct category conviction and long-horizon ownership.',
  },
  {
    title: 'Infrastructure-first',
    body: 'The company is focused on execution control, not autonomy theater or wrapper software.',
  },
  {
    title: 'Built for serious deployment',
    body: 'The operating model is shaped around consequential environments, not novelty demos.',
  },
];

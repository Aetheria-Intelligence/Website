export const CONTACT_EMAIL = 'contact@aetheriaintelligence.com';
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=Aetheria%20Inquiry`;
export const ACCESS_HREF = `mailto:${CONTACT_EMAIL}?subject=Aetheria%20Access%20Request`;
export const ONE_PAGER_HREF = '/downloads/aetheria-one-pager.pdf';

export const PRIMARY_NAV = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'Execution Model' },
  { href: '/platform', label: 'System' },
  { href: '/use-cases', label: 'Deployment' },
  { href: '/proof', label: 'Verification' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/company', label: 'Company' },
  { href: '/access', label: 'Access' },
];

export const SEO_EXPLAINERS = [
  {
    href: '/ai-execution-control',
    label: 'AI Execution Control',
    description: 'The runtime boundary between model intent and real-world action.',
  },
  {
    href: '/ai-action-governance',
    label: 'AI Action Governance',
    description: 'How policy becomes enforceable before consequential execution.',
  },
  {
    href: '/bounded-ai-systems',
    label: 'Bounded AI Systems',
    description: 'Why governed rails matter more than open-ended tool access.',
  },
  {
    href: '/ai-decision-vs-execution',
    label: 'AI Decision vs Execution',
    description: 'Why machine recommendation and machine action must stay separate.',
  },
  {
    href: '/why-ai-needs-enforcement-layers',
    label: 'Why AI Needs Enforcement Layers',
    description: 'Why denial, fail-closed behavior, and proof need a real boundary.',
  },
];

export const CANONICAL_SITEMAP_PATHS = [
  ...PRIMARY_NAV.map((item) => item.href),
  ...SEO_EXPLAINERS.map((item) => item.href),
];

export const DECISION_OUTCOMES = [
  {
    title: 'Allowed',
    tone: 'allow',
    body: 'The request fits policy and scope. Execution proceeds through the governed rail.',
  },
  {
    title: 'Denied',
    tone: 'deny',
    body: 'The request lacks authority. Nothing runs, and the refusal remains visible.',
  },
  {
    title: 'Blocked',
    tone: 'warn',
    body: 'Required conditions are missing. The system fails closed instead of weakening control.',
  },
];

export const CONTROL_REQUIREMENTS = [
  'Proposal is not execution.',
  'Authority is explicit and scoped.',
  'Denial is a first-class outcome.',
  'Every consequential path remains reviewable.',
];

export const PLATFORM_SURFACES = [
  {
    title: 'Proposal intake',
    status: 'Core surface',
    tone: 'accent',
    body: 'Normalizes requests into explicit intent before any side effect is possible.',
  },
  {
    title: 'Decision service',
    status: 'Core surface',
    tone: 'accent',
    body: 'Resolves policy, authority, scope, and refusal before execution through explicit governance and decision state.',
  },
  {
    title: 'Execution gateway',
    status: 'Control boundary',
    tone: 'allow',
    body: 'Mediates consequential work and prevents direct model-to-system action.',
  },
  {
    title: 'Bounded rails',
    status: 'Governed surface',
    tone: 'neutral',
    body: 'Expose messaging, state change, and extensions as scoped paths, not ambient tools.',
  },
  {
    title: 'Operator console',
    status: 'Review surface',
    tone: 'neutral',
    body: 'Keeps proposal, decision, execution, and proof visible as separate states.',
  },
  {
    title: 'Evidence service',
    status: 'Proof surface',
    tone: 'allow',
    body: 'Assembles linked records for export, offline verification, and later reconstruction.',
  },
];

export const AGGREGATION_MODES = [
  {
    id: 'single-provider',
    label: 'Single-provider path',
    eyebrow: 'Deterministic posture',
    summary: 'One selected model handles the request while governance stays outside the model.',
    providers: [
      {
        name: 'Selected provider',
        state: 'Active',
        body: 'Processes the request inside the same control boundary as any other mode.',
      },
      {
        name: 'Fallback provider',
        state: 'Standby',
        body: 'Remains explicit rather than becoming an invisible failover path.',
      },
      {
        name: 'Decision service',
        state: 'External',
        body: 'Keeps policy, scope, and authorization outside the model response.',
      },
    ],
  },
  {
    id: 'multi-provider',
    label: 'Multi-provider path',
    eyebrow: 'Aggregation posture',
    summary: 'Multiple models can evaluate the request while convergence and dissent remain visible state.',
    providers: [
      {
        name: 'Provider A',
        state: 'Converged',
        body: 'Contributes inside a governed orchestration path.',
      },
      {
        name: 'Provider B',
        state: 'Converged',
        body: 'Supports the same request without changing the control model.',
      },
      {
        name: 'Provider C',
        state: 'Dissent visible',
        body: 'A different conclusion remains inspectable instead of disappearing.',
      },
    ],
  },
];

export const PLATFORM_RAILS = [
  {
    title: 'Governed messaging',
    status: 'Represented',
    tone: 'allow',
    body: 'Operational communication runs through an approved path, not open-ended sending.',
  },
  {
    title: 'Bounded state writes',
    status: 'Represented',
    tone: 'allow',
    body: 'Persistent changes occur only through scoped actions that carry decision context.',
  },
  {
    title: 'Event intake and append',
    status: 'Represented',
    tone: 'allow',
    body: 'Event handling stays structured and reviewable instead of becoming a side effect.',
  },
  {
    title: 'Extension lifecycle',
    status: 'Governed',
    tone: 'neutral',
    body: 'Capabilities can be admitted, quarantined, and retired without losing the record.',
  },
  {
    title: 'Outbound email rail',
    status: 'Gated surface',
    tone: 'warn',
    body: 'High-risk communication remains subject to tighter admission and review.',
  },
  {
    title: 'Evidence export',
    status: 'Review path',
    tone: 'accent',
    body: 'Proof packets and linked receipts can be assembled for technical or audit review.',
  },
];

export const EXTENSION_LIFECYCLE = [
  {
    title: 'Admit',
    body: 'A capability enters inventory under review instead of appearing as a free-form tool.',
  },
  {
    title: 'Scope',
    body: 'Allowed operations are bound before the capability can be invoked.',
  },
  {
    title: 'Activate',
    body: 'The capability becomes callable only after runtime and evidence conditions are satisfied.',
  },
  {
    title: 'Quarantine',
    body: 'A posture change can isolate the capability without weakening the system.',
  },
  {
    title: 'Retire',
    body: 'The capability can be removed without breaking the historical record.',
  },
];

export const USE_CASE_TABS = [
  {
    id: 'healthcare-operations',
    label: 'Healthcare operations',
    summary: 'Clinical and administrative workflows need visible authorization, refusal, and proof.',
    cards: [
      {
        title: 'Where control is needed',
        body: 'Scheduling changes, status communication, and workflow routing.',
      },
      {
        title: 'What should be denied',
        body: 'Unapproved data export, silent escalation, or action outside scope.',
      },
      {
        title: 'What proof must remain',
        body: 'Who requested the change, why it was allowed or denied, and what followed.',
      },
    ],
  },
  {
    id: 'financial-operations',
    label: 'Financial operations',
    summary: 'Payments, exposure changes, and client-facing actions need tighter authority boundaries.',
    cards: [
      {
        title: 'Where control is needed',
        body: 'Settlement workflows, approvals, exposure updates, and operational messaging.',
      },
      {
        title: 'What should be denied',
        body: 'Broad disbursement, privileged access, or communication outside policy.',
      },
      {
        title: 'What proof must remain',
        body: 'Linked decision records, timing, scope, and exact effect or non-effect.',
      },
    ],
  },
  {
    id: 'enterprise-operations',
    label: 'Enterprise operations',
    summary: 'Internal workflows still need control when they touch infrastructure, communications, or durable records.',
    cards: [
      {
        title: 'Where control is needed',
        body: 'Change windows, infrastructure operations, operator messaging, and state mutation.',
      },
      {
        title: 'What should be denied',
        body: 'Improvised tool use, scope drift, or action outside the approved window.',
      },
      {
        title: 'What proof must remain',
        body: 'Proposal context, decision timing, receipts, and any denial that prevented harm.',
      },
    ],
  },
  {
    id: 'public-administration',
    label: 'Public administration',
    summary: 'Administrative systems require visible refusal and retained evidence because trust follows accountability.',
    cards: [
      {
        title: 'Where control is needed',
        body: 'Case routing, status handling, civic communication, and service delivery actions.',
      },
      {
        title: 'What should be denied',
        body: 'Unauthorized disclosure, communication outside mandate, or automation that bypasses review.',
      },
      {
        title: 'What proof must remain',
        body: 'A reconstructable record of what was requested, what was allowed or refused, and what happened.',
      },
    ],
  },
];

export const CONSEQUENCE_PATTERNS = [
  {
    title: 'External communication',
    body: 'A message can change customer, patient, or public reality in one step.',
  },
  {
    title: 'State mutation',
    body: 'Writes to durable systems reshape future operational truth.',
  },
  {
    title: 'Protected data handling',
    body: 'Exports and disclosures are action problems with legal consequence.',
  },
  {
    title: 'Time-bound operations',
    body: 'Legitimate actions still become unsafe outside the approved window.',
  },
];

export const PROOF_PACKET_FIELDS = [
  {
    title: 'Proposal record',
    body: 'The requested action and the normalized intent that entered the system.',
  },
  {
    title: 'Decision record',
    body: 'The explicit allow, deny, or block outcome and the authority posture behind it.',
  },
  {
    title: 'Scope binding',
    body: 'The exact boundaries attached to the action path that was permitted to proceed.',
  },
  {
    title: 'Execution receipt',
    body: 'Outcome details from the bounded rail, including confirmed execution or controlled failure.',
  },
  {
    title: 'Denial record',
    body: 'A first-class record that preserves the refused action and its reason.',
  },
  {
    title: 'Verification index',
    body: 'Linked identifiers and portable references that allow the sequence to be reconstructed or verified later.',
  },
];

export const RECONSTRUCTION_STEPS = [
  {
    title: 'Identify the request',
    body: 'Start with the proposal and the operating context that introduced it.',
  },
  {
    title: 'Inspect the decision',
    body: 'Review the recorded policy posture, scope, and runtime outcome.',
  },
  {
    title: 'Verify effect or non-effect',
    body: 'Confirm whether a bounded rail executed or denial prevented any consequence.',
  },
  {
    title: 'Export the packet',
    body: 'Bundle the linked artifacts into a reviewable chain.',
  },
];

export const TRUST_REQUIREMENTS = [
  'Refusals remain visible.',
  'Receipts bind action back to decision.',
  'Reviewers can reconstruct the sequence.',
  'Failure handling preserves evidence.',
];

export const ARCHITECTURE_LAYERS = [
  {
    title: 'Request plane',
    body: 'Captures user, model, and workflow intent as structured proposals with no execution authority attached.',
  },
  {
    title: 'Decision plane',
    body: 'Applies policy and scope before the request can become action.',
  },
  {
    title: 'Authorization plane',
    body: 'Binds the decision to the specific rail that may proceed.',
  },
  {
    title: 'Execution plane',
    body: 'Runs approved work through a bounded gateway and scoped connector.',
  },
  {
    title: 'Evidence plane',
    body: 'Records receipts, denials, failures, and references for later proof.',
  },
  {
    title: 'Operator plane',
    body: 'Exposes the sequence for oversight without collapsing governance and action into one opaque surface.',
  },
];

export const ARCHITECTURE_GUARDS = [
  {
    title: 'Model intent is not execution',
    body: 'Generated content is intent, not permission to produce an external effect.',
  },
  {
    title: 'Deny by default',
    body: 'When scope or policy is missing, the system stops.',
  },
  {
    title: 'No ambient authority',
    body: 'Connectors and extensions do not expose broad privileges a model can improvise against.',
  },
  {
    title: 'Denial is operational',
    body: 'Refusal is normal system behavior and remains visible beside executed runs.',
  },
  {
    title: 'Evidence survives the run',
    body: 'The record persists after completion, refusal, or controlled failure.',
  },
  {
    title: 'Fail closed under uncertainty',
    body: 'The architecture prefers bounded non-action over uncertain action.',
  },
];

export const FAILURE_POSTURE = [
  {
    title: 'Policy missing',
    body: 'The request does not continue until the governing rule set is explicit.',
  },
  {
    title: 'Scope mismatch',
    body: 'The action is denied rather than widened to fit a nearby capability.',
  },
  {
    title: 'Rail unavailable',
    body: 'The system reports failure under control instead of rerouting through an ungoverned path.',
  },
  {
    title: 'Evidence incomplete',
    body: 'The run can be blocked when proof is part of the operating contract.',
  },
];

export const COMPANY_SIGNALS = [
  'AI systems are moving from intent to action.',
  'The deployment question is whether the action path is governable.',
  'Institutions need enforcement at the execution boundary.',
  'Reasoning, action, and proof have to remain separate responsibilities.',
];

export const COMPANY_STANCE = [
  {
    title: 'Control before capability',
    body: 'Consequential environments need authority models before they need more model confidence.',
  },
  {
    title: 'Execution before narrative',
    body: 'The decisive question is how a system behaves when it reaches a live action.',
  },
  {
    title: 'Proof after action',
    body: 'Trust survives only when the system can show what was proposed, allowed, denied, and done.',
  },
];

export const COMPANY_NOT = [
  'Not a generic copilot wrapper that leaves action authority implicit.',
  'Not an agent framework that treats tools as ambient power.',
  'Not a proof layer added after the action has already happened.',
  'Not governance language detached from runtime enforcement.',
];

export const COMPANY_AUDIENCES = [
  'Regulated organizations attaching AI to operational systems',
  'High-trust teams that need denial and proof to remain explicit',
  'Engineering groups designing bounded machine action',
  'Operators who need reviewable control instead of post-hoc explanation',
];

export const ACCESS_CHECKLIST = [
  'Which actions may the system ever be allowed to take?',
  'Which actions must always be denied?',
  'Who owns approval, intervention, and review at the moment of action?',
  'What proof must remain for incident review, audit, or reconstruction?',
];

export const ACCESS_RESOURCES = [
  {
    title: 'Email Aetheria',
    href: ACCESS_HREF,
    description: 'Start with the operating environment, the action classes, and the proof expectations.',
  },
  {
    title: 'Download the one-pager',
    href: ONE_PAGER_HREF,
    description: 'Use the concise overview for internal circulation before a deeper technical discussion.',
  },
  {
    title: 'Review the architecture',
    href: '/architecture',
    description: 'Inspect the public control model, layer boundaries, and fail-closed posture.',
  },
  {
    title: 'Review proof and verification',
    href: '/proof',
    description: 'Inspect portable proof posture, lifecycle states, and the reconstruction path.',
  },
];

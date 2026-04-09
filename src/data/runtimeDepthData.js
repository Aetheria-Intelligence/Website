export const HOME_FOUNDATION_LAYERS = [
  {
    kicker: 'Layer 1',
    title: 'Axiomatrix contract layer',
    body: 'The unified contract layer defines action meaning, envelopes, canonicalization, deterministic hashing, stable IDs, and compatibility rules.',
  },
  {
    kicker: 'Layer 2',
    title: 'Runtime enforcement layer',
    body: 'A kernel-and-pillars runtime enforces security, governance, audit, observability, billing, events, memory, decisions, plugins, and admin.',
  },
  {
    kicker: 'Layer 3',
    title: 'Capability layer',
    body: 'Feature packs can interpret intent and compose workflow, but they must use runtime APIs and cannot bypass governance or fabricate receipts.',
  },
];

export const ARCHITECTURE_SYSTEM_LAYERS = [
  {
    title: 'Layer 1 — Axiomatrix contract layer',
    body: 'ADL contracts, envelopes, canonicalization rules, deterministic hashes and stable identifiers define what an action and its evidence mean before runtime behavior begins.',
  },
  {
    title: 'Layer 2 — Runtime enforcement layer',
    body: 'The kernel arbitrates execution while runtime pillars provide security, governance, audit, observability, billing, events, memory, decisions, plugins, and admin change control.',
  },
  {
    title: 'Layer 3 — Capability layer',
    body: 'Capability packs such as approval, communication, scheduler, workflow, evidence export, policy reasoning, planning, safe tooling, connectors, persona, and knowledge synthesis build on runtime rails.',
  },
];

export const ARCHITECTURE_RUNTIME_PILLARS = [
  'Security',
  'Governance / Semantic Spine',
  'Audit',
  'Observability',
  'Billing',
  'Events',
  'Memory',
  'Decisions',
  'Plugins',
  'Admin',
];

export const ARCHITECTURE_BOUNDARY_RULES = [
  {
    title: 'Contracts constrain runtime',
    body: 'Runtime code validates against contract definitions and compatibility rules; it does not quietly rewrite the contract layer.',
  },
  {
    title: 'Capabilities must use runtime APIs',
    body: 'Layer 3 features may store memory, emit audit, settle billing, or change policy only through the governed kernel and pillar interfaces.',
  },
  {
    title: 'Proof cannot be fabricated downstream',
    body: 'Capabilities may request receipts or proof surfaces, but they must not fabricate evidence or bypass the audit and proof chain.',
  },
];

export const PLATFORM_EXISTING_GROUPS = [
  {
    kicker: 'Enforcement surfaces',
    title: 'Named enforcement surfaces already exist in the codebase.',
    body: 'Security, governance, audit, observability, billing, events, memory, decisions, plugins, and admin are all represented as runtime surfaces rather than being implied by marketing copy.',
  },
  {
    kicker: 'Operator and control surfaces',
    title: 'Operator console, gateway, aggregator, kernel, and launch tooling are real.',
    body: 'The shipped system includes the Atlas operator console, conversation runtime, gateway execution boundary, aggregator, kernel control plane, and launch tooling.',
  },
  {
    kicker: 'Data, domain, and federation',
    title: 'Storage and domain-facing packages are already present.',
    body: 'BasalDB, federation, healthcare, and ChatOps surfaces exist alongside the core runtime rather than sitting only in future roadmap language.',
  },
  {
    kicker: 'Layer 3 capability packs',
    title: 'The repo includes multiple governed feature packs today.',
    body: 'In-tree capability packs include approval, chat, communication, connector communications, connector documents, console API, evidence export, persona, planning, policy reasoning, runbook operations, safe tooling, scheduler, workflow, and knowledge synthesis.',
  },
];

export const PLATFORM_ACTION_REGISTRY = [
  {
    title: 'ChatOps Slack send',
    status: 'Live today',
    tone: 'allow',
    body: 'The action registry exposes a live governed Slack path through gateway.chatops.slack.send.',
  },
  {
    title: 'Memory write',
    status: 'Live today',
    tone: 'allow',
    body: 'Bounded persistence is live through gateway.memory.write rather than being treated as an open-ended store.',
  },
  {
    title: 'Events ingest',
    status: 'Live today',
    tone: 'allow',
    body: 'Structured event intake is live through gateway.events.ingest.',
  },
  {
    title: 'Events append',
    status: 'Live today',
    tone: 'allow',
    body: 'Governed append behavior is live through gateway.events.append.',
  },
  {
    title: 'Plugins invoke',
    status: 'Live today',
    tone: 'allow',
    body: 'Scoped plugin invocation is live through gateway.plugins.invoke, with versioned plugin routes derived from the target.',
  },
  {
    title: 'Email draft / send',
    status: 'Recognized, not live',
    tone: 'warn',
    body: 'The runtime recognizes email draft and send rails, but the current posture intentionally keeps them non-dispatchable.',
  },
  {
    title: 'Operator review required',
    status: 'Recognized, not live',
    tone: 'warn',
    body: 'A review-required operator rail is present in the action registry, but it is not dispatchable in the current posture.',
  },
];

export const PROOF_EXPORT_SIGNALS = [
  'Portable JSON and ZIP proof bundles',
  'Linked identifiers across proposal, decision, authorization, execution, audit anchor, and proof manifest',
  'Offline verification posture instead of fragment-only reconstruction',
  'Bring-up reports can be archived beside runtime evidence in serious evaluations',
];

export const PROOF_VERIFICATION_STEPS = [
  {
    stage: '01',
    title: 'Locate the governed lifecycle',
    body: 'Start from a session, turn, proposal, decision, authorization, execution, or trace identifier and retrieve the canonical proof surface.',
  },
  {
    stage: '02',
    title: 'Treat proof state as authoritative',
    body: 'Read the proof status directly rather than trying to infer truth from scattered fragments or recollection.',
  },
  {
    stage: '03',
    title: 'Export the portable bundle',
    body: 'When the lifecycle is complete enough, export the linked artifacts as a portable JSON or ZIP proof bundle.',
  },
  {
    stage: '04',
    title: 'Verify outside the live runtime',
    body: 'Portable proof is meant to be checked offline so a reviewer can validate the chain without depending on a live operator session.',
  },
];

export const PROOF_STATES = [
  {
    title: 'complete_executed',
    body: 'A full executed lifecycle is present, including the audit-backed proof chain.',
  },
  {
    title: 'complete_denied',
    body: 'The refusal is complete and evidenced even though no execution artifact exists.',
  },
  {
    title: 'complete_blocked',
    body: 'A bounded execution failure is represented truthfully and remains part of the proof chain.',
  },
  {
    title: 'incomplete',
    body: 'Required artifacts are missing, so the lifecycle cannot yet be treated as proven.',
  },
  {
    title: 'invalid',
    body: 'Artifacts exist, but cross-stage bindings are inconsistent and should not be trusted.',
  },
  {
    title: 'unsupported',
    body: 'The lifecycle does not map to a supported governed action flow.',
  },
  {
    title: 'informational_only',
    body: 'The turn is non-executable by design and should not be interpreted as a governed action path.',
  },
];

export const ACCESS_EVALUATION_FLOW = [
  {
    stage: '01',
    title: 'Validate the selected runtime posture',
    body: 'Serious evaluation starts by checking the profile and environment contract before anything claims readiness.',
  },
  {
    stage: '02',
    title: 'Bring up the canonical gateway runtime',
    body: 'The current operator-facing repository posture centers on the gateway runtime and records deterministic bring-up truth.',
  },
  {
    stage: '03',
    title: 'Submit a governed turn',
    body: 'A reviewer creates a proposal, records the identifiers, and inspects operator view before dispatch.',
  },
  {
    stage: '04',
    title: 'Dispatch only when the runtime allows it',
    body: 'Execution happens only when the operator surface shows the turn is actually dispatchable.',
  },
  {
    stage: '05',
    title: 'Inspect, export, and verify proof',
    body: 'Proof review includes lifecycle truth, exportable evidence, and portable verification outside the live session.',
  },
  {
    stage: '06',
    title: 'Archive the evaluation record',
    body: 'Bring-up reports, proof bundles, and review notes stay together as the evaluator evidence set.',
  },
];

export const ACCESS_EVALUATION_SCENARIOS = [
  {
    title: 'Denied action',
    body: 'A recognized action is proposed, governance blocks execution, and proof remains without dispatch.',
  },
  {
    title: 'Authorized + executed',
    body: 'A governed action is authorized, dispatched, executed, and retained as a complete proof chain.',
  },
  {
    title: 'Authorized + blocked',
    body: 'Execution is attempted, fails in a bounded way, and the failure stays truthful in the evidence.',
  },
  {
    title: 'Duplicate / replay handling',
    body: 'Repeat dispatch attempts are rejected, rebound, or duplicate-suppressed rather than silently running twice.',
  },
  {
    title: 'Proof inspection',
    body: 'Operators inspect artifacts, proof records, and proof export surfaces directly.',
  },
];

export const ACCESS_TRUST_PACKAGE = [
  {
    title: 'Architecture brief',
    body: 'Three-layer system model: contract layer, runtime enforcement layer, and capability layer.',
  },
  {
    title: 'Governed proof walkthrough',
    body: 'Proposal, decision, authorization, execution, and proof inspection shown as one reviewable lifecycle.',
  },
  {
    title: 'Runtime profile summary',
    body: 'Profiles define fail-closed posture, evidence requirements, retention, and attack-surface differences.',
  },
  {
    title: 'Release-grade bring-up summary',
    body: 'Technical review should include deterministic validate / start / ready / diagnose truth, not just a running process.',
  },
  {
    title: 'Sanitized evidence bundle',
    body: 'A portable proof bundle gives external reviewers something concrete to inspect and verify.',
  },
  {
    title: 'Verification posture',
    body: 'The system is built around deterministic conformance, explicit failure taxonomy, and build-blocking verification discipline.',
  },
];

export const ACCESS_PROFILE_POSTURE = [
  'Canonical gateway runtime',
  'Dev / staging / prod / high-assurance / airgap',
  'Fail-closed evidence posture',
  'Controlled evaluator access',
];

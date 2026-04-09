import { CONTACT_HREF } from './siteData';

export const HOME_PROBLEM_STRIP = [
  {
    title: 'AI systems can decide.',
    body: 'They do not govern execution.',
  },
  {
    title: 'Once connected, they can act.',
    body: 'Most stacks still lack an authority boundary.',
  },
  {
    title: 'That becomes risk where actions matter.',
    body: 'Healthcare. Finance. Critical infrastructure. Enterprise systems.',
  },
];

export const HOME_COMPRESSED_STEPS = [
  {
    title: 'A proposal enters.',
    body: 'It stays inert.',
  },
  {
    title: 'Authority is evaluated.',
    body: 'Policy, scope, and runtime conditions resolve.',
  },
  {
    title: 'Decision becomes explicit.',
    body: 'Allowed work runs in scope. Denied work stops.',
  },
  {
    title: 'Proof remains.',
    body: 'Every effect—or non-effect—stays reconstructable.',
  },
];

export const R10_LIFECYCLE_STAGES = [
  {
    id: 'propose',
    label: 'PROPOSE',
    shortLabel: 'Propose',
    micro: 'Structured proposal is recorded',
    tone: 'propose',
  },
  {
    id: 'govern',
    label: 'GOVERN',
    shortLabel: 'Govern',
    micro: 'Policy evaluates the request',
    tone: 'govern',
  },
  {
    id: 'authorize',
    label: 'AUTHORIZE',
    shortLabel: 'Authorize',
    micro: 'Authority resolves explicitly',
    tone: 'authorize',
  },
  {
    id: 'execute',
    label: 'EXECUTE',
    shortLabel: 'Execute',
    micro: 'Only the admitted rail runs',
    tone: 'execute',
  },
  {
    id: 'prove',
    label: 'PROVE',
    shortLabel: 'Prove',
    micro: 'Portable proof is retained',
    tone: 'prove',
  },
];

export const R10_DOCTRINE_LINES = [
  'Aetheria is governed execution.',
  'It sits between intent and action.',
  'Every consequential request becomes a structured proposal.',
  'Authority resolves before execution.',
  'Denial is a first-class system outcome.',
  'Execution crosses only bounded rails.',
  'Proof remains portable after outcome.',
];

export const HOW_IT_WORKS_PHASES = [
  {
    stage: '01',
    title: 'A structured proposal enters the boundary',
    body: 'Visible. Inert. Not yet authorized.',
  },
  {
    stage: '02',
    title: 'Authority is evaluated',
    body: 'Policy, scope, actor, and runtime conditions are checked.',
  },
  {
    stage: '03',
    title: 'Decision is produced',
    body: 'Allow, deny, or block becomes an explicit system state.',
  },
  {
    stage: '04',
    title: 'Only the admitted rail may execute',
    body: 'Execution is bound to the specific rail that was authorized.',
  },
  {
    stage: '05',
    title: 'A portable proof packet is emitted',
    body: 'Proposal, decision, execution state, and outcome stay linked.',
  },
];

export const GOVERNED_SEQUENCE_STEPS = [
  {
    id: 'proposal',
    stage: 'Proposal',
    label: 'Action Proposed',
    body: 'Intent enters the system without permission to run.',
    tone: 'neutral',
  },
  {
    id: 'evaluation',
    stage: 'Evaluation',
    label: 'Authority Evaluated',
    body: 'Policy, scope, and runtime conditions are resolved.',
    tone: 'accent',
  },
  {
    id: 'decision',
    stage: 'Decision',
    label: 'Decision Produced',
    body: 'The system resolves an explicit outcome.',
    tone: 'accent',
  },
];

export const GOVERNED_SEQUENCE_BRANCHES = [
  {
    id: 'allow',
    stage: 'Allowed',
    label: 'Execution Proceeds',
    body: 'The admitted rail continues.',
    tone: 'allow',
  },
  {
    id: 'deny',
    stage: 'Denied',
    label: 'Execution Blocked',
    body: 'Nothing crosses the boundary.',
    tone: 'deny',
  },
];

export const GOVERNED_SEQUENCE_PROOF = {
  id: 'proof',
  stage: 'Proof',
  label: 'Proof Emitted',
  body: 'The outcome remains reconstructable.',
  tone: 'proof',
};

export const HOME_REALITY_ARTIFACTS = [
  {
    kicker: 'Allowed action example',
    title: 'authorized_action.record',
    tone: 'allow',
    lines: [
      ['Action', 'Send internal operational update'],
      ['Authority', 'Approved scope'],
      ['Decision', 'Authorized'],
      ['Status', 'Executed within defined boundary'],
      ['Rail', 'internal.ops.update'],
    ],
    footer: 'receipt_id: rcpt_71a4c29f | 2026-04-07T18:24:16Z',
  },
  {
    kicker: 'Denied action example',
    title: 'blocked_action.record',
    tone: 'deny',
    lines: [
      ['Action', 'Send external message'],
      ['Authority', 'Not granted'],
      ['Decision', 'Blocked'],
      ['Status', 'Denied before execution'],
      ['Reason', 'Outbound rail not admitted for this request'],
    ],
    footer: 'proposal_id: prp_8f4e1c7a | 2026-04-07T18:24:19Z',
  },
  {
    kicker: 'Proof record example',
    title: 'proof_artifact.json',
    tone: 'proof',
    lines: [
      ['Proposal ID', 'prp_8f4e1c7a19d443d0b2bf8d32'],
      ['Decision', 'Blocked'],
      ['Reason', 'Insufficient authority'],
      ['Verification', 'Confirmed'],
      ['Timestamp', '2026-04-07T18:24:19Z'],
    ],
    footer: 'evidence_index: evd_4b281fce2d06',
  },
];

export const DROP_MIC_COPY = {
  opener: 'An AI system attempts to act.',
  without: 'Without Aetheria, it runs.',
  with: 'With Aetheria, it must be allowed.',
  authority: 'If authority is insufficient, nothing happens.',
  anchor: 'That is the difference.',
};

export const THE_SHIFT_LINES = [
  'AI systems are becoming capable of action.',
  'But capability without control creates risk.',
  'The next generation of systems will not rely on trust.',
  'They will enforce authority.',
  'Aetheria is built for that transition.',
];

export const HIGH_CONSEQUENCE_POINTS = [
  'Every action is evaluated.',
  'Every outcome is recorded.',
  'Nothing runs without authority.',
  'Built for regulated systems.',
  'Supports auditability and traceability requirements.',
];

export const HIGH_CONSEQUENCE_ENVIRONMENTS = [
  'Healthcare systems',
  'Financial infrastructure',
  'Operational command environments',
  'External communication systems',
];

export const AUDIENCE_PATHS = [
  {
    audience: 'Enterprise / Operators',
    body: 'Evaluate governed execution for your environment.',
    href: '/access',
    label: 'Request Access',
  },
  {
    audience: 'Technical / Builders',
    body: 'Inspect the control model, boundary, and proof system.',
    href: '/architecture',
    label: 'Review architecture',
  },
  {
    audience: 'Strategic / Investors',
    body: 'Start a serious conversation about category development and deployment.',
    href: CONTACT_HREF,
    label: 'Start a conversation',
  },
];

export const KEYWORD_PAGE_CONTENT = {
  'ai-execution-control': {
    kicker: 'AI execution control',
    title: 'AI execution control governs whether model intent may cross into a real system.',
    body: 'It keeps reasoning separate from action by enforcing authority before execution.',
    definitionTitle: 'Execution control is the runtime boundary.',
    definitionBody: 'It checks scope, policy, and conditions before anything consequential runs.',
    sections: [
      {
        title: 'Before the boundary',
        body: 'A model can propose an action. It cannot perform it just because it suggested it.',
      },
      {
        title: 'At the boundary',
        body: 'Authority is attached explicitly and limited to the rail that may execute it.',
      },
      {
        title: 'After the outcome',
        body: 'The system retains the request, the decision, and the effect or non-effect as linked proof.',
      },
    ],
    signals: [
      'Model intent is not permission.',
      'Approval is explicit.',
      'Denied actions remain visible.',
    ],
    links: [
      {
        href: '/how-it-works',
        kicker: 'How It Works',
        title: 'Trace the governed execution lifecycle.',
        body: 'Follow the path from proposal to decision, bounded execution, denial, and proof.',
      },
      {
        href: '/architecture',
        kicker: 'Architecture',
        title: 'Inspect the boundary that enforces the decision.',
        body: 'Review the layer separation and fail-closed posture behind execution control.',
      },
    ],
    cta: {
      kicker: 'Next step',
      title: 'Move from the term to the operating model.',
      body: 'How It Works shows the sequence. Access starts the conversation about a real environment.',
      primaryHref: '/access',
      primaryLabel: 'Request Access',
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how it works',
      tertiaryHref: '/proof',
      tertiaryLabel: 'Review proof',
    },
  },
  'ai-action-governance': {
    kicker: 'AI action governance',
    title: 'AI action governance binds policy to execution instead of leaving it as advice.',
    body: 'Governance becomes real only when it changes what a machine is allowed to do.',
    definitionTitle: 'Action governance is enforcement.',
    definitionBody: 'The governing system decides whether a request may proceed, how far it may proceed, and what proof remains.',
    sections: [
      {
        title: 'Policy with consequence',
        body: 'Rules matter only when they can stop, narrow, or route a request before it reaches a live system.',
      },
      {
        title: 'Scope with limits',
        body: 'Approval is bound to an action class and context instead of opening broad privilege.',
      },
      {
        title: 'Review with proof',
        body: 'Operators can inspect the proposal, decision, and resulting effect without reconstructing from fragments.',
      },
    ],
    signals: [
      'Policy must change runtime behavior.',
      'Authority must remain explicit.',
      'Proof must survive the decision.',
    ],
    links: [
      {
        href: '/platform',
        kicker: 'Platform',
        title: 'See the surfaces where governance is enforced.',
        body: 'Inspect proposal intake, decision services, bounded rails, and evidence assembly.',
      },
      {
        href: '/use-cases',
        kicker: 'Use Cases',
        title: 'See where action governance matters first.',
        body: 'Review environments where communication, state change, and protected systems create consequence.',
      },
    ],
    cta: {
      kicker: 'Next step',
      title: 'Evaluate governance where action actually happens.',
      body: 'Platform shows the control surfaces. Access starts the fit discussion for a real deployment context.',
      primaryHref: '/access',
      primaryLabel: 'Request Access',
      secondaryHref: '/platform',
      secondaryLabel: 'Explore the platform',
      tertiaryHref: '/proof',
      tertiaryLabel: 'Review proof',
    },
  },
  'bounded-ai-systems': {
    kicker: 'Bounded AI systems',
    title: 'Bounded AI systems keep capability inside defined rails instead of exposing open-ended machine authority.',
    body: 'A bounded system can reason broadly while acting only through narrow, governed paths.',
    definitionTitle: 'Bounded means scoped before runtime action.',
    definitionBody: 'Capabilities are admitted deliberately, limited to specific operations, and prevented from drifting into adjacent privilege.',
    sections: [
      {
        title: 'Admission before use',
        body: 'A rail enters the system under review instead of appearing as a free-form tool.',
      },
      {
        title: 'Execution inside rails',
        body: 'Allowed work runs through specific connectors and state transitions with the decision attached.',
      },
      {
        title: 'Proof after action',
        body: 'Receipts, denials, and references remain linked so later review can confirm what did or did not happen.',
      },
    ],
    signals: [
      'No ambient tool authority.',
      'No unbounded fallback path.',
      'No invisible side effects.',
    ],
    links: [
      {
        href: '/platform',
        kicker: 'Platform',
        title: 'Inspect the bounded rails in Aetheria.',
        body: 'See how messaging, state changes, and evidence export are represented as governed surfaces.',
      },
      {
        href: '/architecture',
        kicker: 'Architecture',
        title: 'Review the constraints that keep the system bounded.',
        body: 'Inspect the layer model, failure posture, and execution mediation design.',
      },
    ],
    cta: {
      kicker: 'Next step',
      title: 'See how bounded capability becomes deployable control.',
      body: 'Platform and architecture show the rails, the guards, and the retained record that make bounded systems credible.',
      primaryHref: '/access',
      primaryLabel: 'Request Access',
      secondaryHref: '/platform',
      secondaryLabel: 'Explore the platform',
      tertiaryHref: '/architecture',
      tertiaryLabel: 'Review architecture',
    },
  },
  'ai-decision-vs-execution': {
    kicker: 'AI decision vs execution',
    title: 'AI decision and AI execution are different events. The control model depends on keeping them separate.',
    body: 'A system can generate a recommendation without being allowed to create the real-world effect itself.',
    definitionTitle: 'The distinction is operational.',
    definitionBody: 'If a generated decision can immediately perform the action, there is no enforceable moment to authorize, deny, or prove what happened.',
    sections: [
      {
        title: 'Decision is proposal',
        body: 'A model can recommend a state change, communication, or system action without possessing the right to perform it.',
      },
      {
        title: 'Execution is consequence',
        body: 'The external effect happens only when the bounded rail receives an explicit decision to proceed.',
      },
      {
        title: 'Separation creates accountability',
        body: 'Organizations can inspect intent before effect, stop unsafe action, and retain a coherent record after the event.',
      },
    ],
    signals: [
      'Recommendation is not authority.',
      'Execution is where risk materializes.',
      'Separation makes denial possible.',
    ],
    links: [
      {
        href: '/how-it-works',
        kicker: 'How It Works',
        title: 'Follow the decision-to-execution handoff.',
        body: 'See where proposals stay inert and where bounded execution begins.',
      },
      {
        href: '/proof',
        kicker: 'Proof',
        title: 'See how the system proves the distinction later.',
        body: 'Review the receipts and denial records that show whether execution ever occurred.',
      },
    ],
    cta: {
      kicker: 'Next step',
      title: 'Inspect the distinction in practice.',
      body: 'How It Works traces the sequence. Proof shows how the record preserves the difference between intent and effect.',
      primaryHref: '/access',
      primaryLabel: 'Request Access',
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how it works',
      tertiaryHref: '/proof',
      tertiaryLabel: 'Review proof',
    },
  },
  'why-ai-needs-enforcement-layers': {
    kicker: 'Why AI needs enforcement layers',
    title: 'AI needs enforcement layers because policy alone cannot stop a consequential machine action once the path is live.',
    body: 'The enforcement layer sits between intelligence and execution so the system can deny, block, or constrain a request before it produces an external effect.',
    definitionTitle: 'An enforcement layer is where control becomes real.',
    definitionBody: 'It replaces trust in model behavior with a runtime mechanism that can fail closed, preserve denial, and keep evidence linked to the outcome.',
    sections: [
      {
        title: 'Stops unsafe action before execution',
        body: 'Unauthorized communication, system mutation, and protected data movement can be denied before they occur.',
      },
      {
        title: 'Fails closed under uncertainty',
        body: 'Missing policy, scope, or runtime conditions stop the request instead of weakening the boundary.',
      },
      {
        title: 'Preserves evidence after refusal',
        body: 'The system records that a consequential action was attempted and denied so later review remains possible.',
      },
    ],
    signals: [
      'Denial is operational.',
      'Fail-closed behavior is essential.',
      'Evidence makes enforcement credible.',
    ],
    links: [
      {
        href: '/architecture',
        kicker: 'Architecture',
        title: 'Inspect the layers that enforce the boundary.',
        body: 'Review the control planes, failure posture, and execution mediation model.',
      },
      {
        href: '/proof',
        kicker: 'Proof',
        title: 'See what enforcement leaves behind.',
        body: 'Review the denied-action records and retained evidence that make refusal reviewable.',
      },
    ],
    cta: {
      kicker: 'Next step',
      title: 'See the enforcement layer as a deployed system.',
      body: 'Architecture shows the boundary. Access starts the conversation about how that layer fits a real environment.',
      primaryHref: '/access',
      primaryLabel: 'Request Access',
      secondaryHref: '/architecture',
      secondaryLabel: 'Review architecture',
      tertiaryHref: '/company',
      tertiaryLabel: 'Review the category thesis',
    },
  },
};

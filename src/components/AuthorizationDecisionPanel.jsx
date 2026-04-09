import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const DECISION_SCENARIOS = [
  {
    id: 'internal-update',
    selector: 'Internal update',
    action: 'Publish internal operations update',
    actor: 'ops.service',
    traceId: 'trc_2ae914c1',
    actionId: 'act_20a5d47f',
    authority: 'Approved internal communications rail',
    outcome: 'allow',
  },
  {
    id: 'external-notice',
    selector: 'External notice',
    action: 'Send customer-facing outage notice',
    actor: 'ops.service',
    traceId: 'trc_84bd0e72',
    actionId: 'act_4d8a7c11',
    authority: 'Outbound customer messaging scope absent',
    outcome: 'deny',
  },
];

function resolveReadout(phase, scenario) {
  if (phase === 'authorizing') {
    return {
      decision: 'Authorizing',
      status: 'Evaluation in progress',
      verification: 'Record opening',
      tone: 'authorize',
    };
  }

  if (phase === 'resolved' && scenario.outcome === 'allow') {
    return {
      decision: 'Authorized',
      status: 'Executed',
      verification: 'Verified',
      tone: 'allow',
    };
  }

  if (phase === 'resolved' && scenario.outcome === 'deny') {
    return {
      decision: 'Blocked',
      status: 'Denied',
      verification: 'Recorded',
      tone: 'deny',
    };
  }

  return {
    decision: 'Pending',
    status: 'Awaiting evaluation',
    verification: 'No record yet',
    tone: 'neutral',
  };
}

export function AuthorizationDecisionPanel() {
  const reduceMotion = useReducedMotion();
  const [scenarioId, setScenarioId] = useState(DECISION_SCENARIOS[0].id);
  const [phase, setPhase] = useState('idle');

  const scenario = useMemo(
    () => DECISION_SCENARIOS.find((item) => item.id === scenarioId) || DECISION_SCENARIOS[0],
    [scenarioId],
  );

  useEffect(() => {
    setPhase('idle');
  }, [scenarioId]);

  useEffect(() => {
    if (phase !== 'authorizing') {
      return undefined;
    }

    const timeoutId = window.setTimeout(
      () => setPhase('resolved'),
      reduceMotion ? 0 : 720,
    );

    return () => window.clearTimeout(timeoutId);
  }, [phase, reduceMotion]);

  const readout = resolveReadout(phase, scenario);
  const allowActive = phase === 'resolved' && scenario.outcome === 'allow';
  const denyActive = phase === 'resolved' && scenario.outcome === 'deny';

  return (
    <div className="authorization-decision-panel" aria-labelledby="authorization-decision-title">
      <div className="authorization-decision-head">
        <div className="section-kicker">Authorization decision</div>
        <h3 id="authorization-decision-title">This is where the system decides.</h3>
        <p>Permission resolves before execution.</p>
      </div>

      <div className={`authorization-checkpoint authorization-checkpoint-${readout.tone}`}>
        <div className="authorization-checkpoint-spine" aria-hidden="true" />
        <div className="authorization-checkpoint-branchline authorization-checkpoint-branchline-allow" aria-hidden="true" />
        <div className="authorization-checkpoint-branchline authorization-checkpoint-branchline-deny" aria-hidden="true" />
        <div className="authorization-checkpoint-cutoff" aria-hidden="true" />

        <motion.div
          className="authorization-node authorization-node-incoming"
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.36, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="authorization-node-label">Incoming action</span>
          <strong>{scenario.action}</strong>
        </motion.div>

        <motion.div
          className={`authorization-node authorization-node-authorize${phase === 'authorizing' ? ' is-evaluating' : ''}`}
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.04, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="authorization-node-label">Authorize</span>
          <strong>{phase === 'authorizing' ? 'Resolving authority' : 'Authority checkpoint'}</strong>
        </motion.div>

        <motion.div
          className={`authorization-branch authorization-branch-allow${allowActive ? ' is-live' : ''}${denyActive ? ' is-muted' : ''}`}
          initial={reduceMotion ? undefined : { opacity: 0, x: -10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.38, delay: reduceMotion ? 0 : 0.08, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="authorization-branch-label">Allow</span>
          <strong>The system permits this.</strong>
        </motion.div>

        <motion.div
          className={`authorization-branch authorization-branch-deny${denyActive ? ' is-live' : ''}${allowActive ? ' is-muted' : ''}`}
          initial={reduceMotion ? undefined : { opacity: 0, x: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.38, delay: reduceMotion ? 0 : 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="authorization-branch-label">Deny</span>
          <strong>This is not allowed.</strong>
        </motion.div>
      </div>

      <div className="authorization-demo-surface">
        <div className="authorization-scenario-row" role="tablist" aria-label="Decision scenarios">
          {DECISION_SCENARIOS.map((item) => {
            const selected = item.id === scenario.id;

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`authorization-scenario-button${selected ? ' is-active' : ''}`}
                onClick={() => setScenarioId(item.id)}
              >
                {item.selector}
              </button>
            );
          })}
        </div>

        <div className="authorization-demo-grid">
          <article className="authorization-proposal-card" aria-label="Proposed action">
            <div className="section-kicker">Proposed action</div>
            <h4>{scenario.action}</h4>
            <div className="authorization-proposal-meta">
              <span>Actor</span>
              <strong>{scenario.actor}</strong>
            </div>
            <div className="authorization-proposal-meta">
              <span>Action ID</span>
              <strong>{scenario.actionId}</strong>
            </div>
            <div className="authorization-proposal-meta">
              <span>Trace ID</span>
              <strong>{scenario.traceId}</strong>
            </div>
          </article>

          <div className="authorization-decision-console">
            <div className="authorization-console-head">
              <div>
                <div className="section-kicker">Evaluate</div>
                <h4>Authority resolves here.</h4>
              </div>
              <button
                type="button"
                className="button button-secondary button-compact authorization-evaluate-button"
                onClick={() => setPhase('authorizing')}
              >
                Evaluate action
              </button>
            </div>

            <div className="authorization-console-rule">{scenario.authority}</div>

            <div className={`authorization-readout authorization-readout-${readout.tone}`} aria-live="polite">
              <div className="authorization-readout-row">
                <span>Decision</span>
                <strong>{readout.decision}</strong>
              </div>
              <div className="authorization-readout-row">
                <span>Status</span>
                <strong>{readout.status}</strong>
              </div>
              <div className="authorization-readout-row">
                <span>Verification</span>
                <strong>{readout.verification}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

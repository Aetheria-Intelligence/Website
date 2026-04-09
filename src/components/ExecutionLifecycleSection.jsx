import { motion, useReducedMotion } from 'framer-motion';
import { AuthorizationDecisionPanel } from './AuthorizationDecisionPanel';
import { R10_LIFECYCLE_STAGES } from '../data/experienceData';

function LifecycleStage({ label, micro, tone, id, reduceMotion }) {
  return (
    <motion.article
      className={`execution-stage execution-stage-${tone} execution-stage-${id}`}
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      tabIndex={0}
    >
      <div className="execution-stage-label-row">
        <span className="execution-stage-marker" aria-hidden="true" />
        <span className="execution-stage-label">{label}</span>
      </div>
      <p>{micro}</p>
    </motion.article>
  );
}

export function ExecutionLifecycleSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="execution-lifecycle" className="execution-lifecycle-section" aria-labelledby="execution-lifecycle-title">
      <div className="section-intro execution-lifecycle-intro">
        <div className="section-kicker">Execution lifecycle</div>
        <h2 id="execution-lifecycle-title">Execution Lifecycle</h2>
        <p>Every action follows a governed path before it is allowed to run.</p>
      </div>

      <div className="execution-lifecycle-surface panel">
        <div
          className="execution-lifecycle-flow"
          role="img"
          aria-label="Governed execution lifecycle with allow and deny outcomes"
          aria-describedby="execution-lifecycle-description"
        >
          <p id="execution-lifecycle-description" className="sr-only">
            A proposed action enters the system, governance evaluates intent, authorization pauses the path,
            allowed execution continues, denied execution stops, and proof is recorded.
          </p>

          <div className="execution-rail execution-rail-main" aria-hidden="true" />
          <div className="execution-rail execution-rail-deny" aria-hidden="true" />

          {!reduceMotion ? (
            <>
              <span className="execution-flow-dot execution-flow-dot-entry" aria-hidden="true" />
              <span className="execution-flow-dot execution-flow-dot-commit" aria-hidden="true" />
              <span className="execution-authorize-pulse" aria-hidden="true" />
            </>
          ) : null}

          {R10_LIFECYCLE_STAGES.map((stage) => (
            <LifecycleStage
              key={stage.id}
              id={stage.id}
              label={stage.label}
              micro={stage.micro}
              tone={stage.tone}
              reduceMotion={reduceMotion}
            />
          ))}

          <motion.div
            className="execution-deny-terminal"
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="execution-stage-label-row">
              <span className="execution-stage-marker" aria-hidden="true" />
              <span className="execution-stage-label">DENY</span>
            </div>
            <p>Execution is refused</p>
          </motion.div>
        </div>

        <AuthorizationDecisionPanel />

        <p className="execution-lifecycle-support">Nothing executes without passing through this path.</p>
      </div>
    </section>
  );
}

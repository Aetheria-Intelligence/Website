import { motion, useReducedMotion } from 'framer-motion';
import { R10_LIFECYCLE_STAGES } from '../data/experienceData';

export function HeroLifecycleStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-lifecycle-shell"
      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        className="hero-lifecycle-grid"
        role="img"
        aria-label="Execution lifecycle: propose, govern, authorize, execute, and prove. Authorization may allow or deny execution."
      >
        <div className="hero-lifecycle-rail" aria-hidden="true" />
        {!reduceMotion ? (
          <>
            <span className="hero-lifecycle-flow hero-lifecycle-flow-entry" aria-hidden="true" />
            <span className="hero-lifecycle-flow hero-lifecycle-flow-commit" aria-hidden="true" />
          </>
        ) : null}

        {R10_LIFECYCLE_STAGES.map((stage) => (
          <div
            key={stage.id}
            className={`hero-lifecycle-node hero-lifecycle-node-${stage.tone}`}
          >
            <span className="hero-lifecycle-node-mark" aria-hidden="true" />
            <span className="hero-lifecycle-node-label">{stage.shortLabel}</span>
          </div>
        ))}

        <div className="hero-lifecycle-branch hero-lifecycle-branch-deny" aria-hidden="true">
          <span className="hero-lifecycle-branch-line" />
          <span className="hero-lifecycle-branch-node">Deny</span>
        </div>
      </div>
    </motion.div>
  );
}

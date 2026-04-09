import { motion, useReducedMotion } from 'framer-motion';
import { R10_DOCTRINE_LINES } from '../data/experienceData';

export function DoctrineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="page-section doctrine-section" aria-labelledby="doctrine-title">
      <div className="container doctrine-shell">
        <div className="section-kicker">What this is</div>
        <h2 id="doctrine-title" className="sr-only">System doctrine</h2>

        <div className="doctrine-network" aria-hidden="true">
          <span className="doctrine-network-line doctrine-network-line-primary" />
          <span className="doctrine-network-line doctrine-network-line-secondary" />
          <span className="doctrine-network-node doctrine-network-node-one" />
          <span className="doctrine-network-node doctrine-network-node-two" />
          <span className="doctrine-network-node doctrine-network-node-three" />
        </div>

        <div className="doctrine-stack" role="list" aria-label="Aetheria system doctrine">
          {R10_DOCTRINE_LINES.map((line, index) => (
            <motion.p
              key={line}
              className="doctrine-line"
              role="listitem"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.44, delay: reduceMotion ? 0 : index * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

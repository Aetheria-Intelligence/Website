import { motion, useReducedMotion } from 'framer-motion';
import { LockKeyhole } from 'lucide-react';

const DEFAULT_ARTIFACT = {
  artifactId: 'proof_packet.evd_1d93be4f',
  proofNode: 'VERIFY',
  proofLabel: 'Portable proof packet',
  fields: [
    ['Proposal ID', 'prp_8f4e1c7a'],
    ['Decision', 'DENIED'],
    ['Reason', 'outbound.customer.notice absent'],
    ['Execution', 'NOT_PERFORMED'],
    ['Proof state', 'complete_denied'],
    ['Trace ID', 'trc_84bd0e72'],
    ['Bundle SHA', 'bndl_sha256: 7b26d8d9e4c1'],
    ['Verifier', 'offline.verify/v1'],
    ['Retention', 'SEALED'],
  ],
};

export function ProofVerificationSection({
  title = 'Verification',
  subtitle = 'Every consequential outcome produces a portable proof packet.',
  supportLine = 'Proof moves outside the live runtime without losing decision context.',
  artifact = DEFAULT_ARTIFACT,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="proof-verification-section" aria-labelledby="proof-verification-title">
      <div className="section-intro proof-verification-intro">
        <div className="section-kicker">Portable artifact</div>
        <h2 id="proof-verification-title">{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="proof-verification-system">
        <div className="proof-verification-bridge" aria-hidden="true">
          <div className="proof-bridge-node">
            <span className="proof-bridge-node-label">{artifact.proofNode}</span>
            <strong>{artifact.proofLabel}</strong>
          </div>
          <span className="proof-bridge-line" />
        </div>

        <motion.article
          className="proof-artifact"
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          aria-label="Proof artifact"
        >
          <header className="proof-artifact-header">
            <div className="proof-artifact-lockup">
              <div className="proof-artifact-kicker">Sealed artifact</div>
              <div className="proof-artifact-title">{artifact.artifactId}</div>
            </div>

            <div className="proof-artifact-seal">
              <LockKeyhole size={15} strokeWidth={1.8} aria-hidden="true" />
              <span>Verified</span>
            </div>
          </header>

          <dl className="proof-artifact-grid" aria-label="Proof artifact fields">
            {artifact.fields.map(([label, value]) => (
              <div key={label} className="proof-artifact-row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </motion.article>
      </div>

      <div className="proof-verification-support">{supportLine}</div>
    </section>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import { SectionIntro } from './SectionIntro';
import {
  GOVERNED_SEQUENCE_BRANCHES,
  GOVERNED_SEQUENCE_PROOF,
  GOVERNED_SEQUENCE_STEPS,
} from '../data/experienceData';

const legend = [
  { label: 'Proposal', tone: 'neutral' },
  { label: 'Evaluation', tone: 'accent' },
  { label: 'Allowed', tone: 'allow' },
  { label: 'Denied', tone: 'deny' },
  { label: 'Proof', tone: 'proof' },
];

const nodes = {
  proposal: { x: 44, y: 122, width: 190, height: 92 },
  evaluation: { x: 286, y: 122, width: 190, height: 92 },
  decision: { x: 528, y: 122, width: 190, height: 92 },
  allow: { x: 768, y: 60, width: 190, height: 92 },
  deny: { x: 768, y: 214, width: 190, height: 92 },
  proof: { x: 1002, y: 60, width: 190, height: 92 },
};

function getNode(id) {
  return nodes[id];
}

function RuntimeNode({ id, stage, label, tone }) {
  const { x, y, width, height } = getNode(id);
  const centerX = x + width / 2;

  return (
    <g className={`runtime-node runtime-node-${tone}`} transform={`translate(${x} ${y})`}>
      <rect width={width} height={height} rx="24" />
      <text className="runtime-node-stage" x={22} y={28}>
        {stage.toUpperCase()}
      </text>
      <text className="runtime-node-label" x={22} y={58}>
        {label}
      </text>
      <circle className="runtime-node-pin" cx={centerX - x} cy={height - 18} r="3.5" />
    </g>
  );
}

export function GovernedExecutionSequence() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="sequence-layout">
      <div className="sequence-sidebar sticky-column">
        <SectionIntro
          kicker="Signature sequence"
          title="Authority resolves before action."
          body="Proposal enters. Evaluation runs. One path continues. One path dies. Proof remains."
        />

        <div className="sequence-key" role="list" aria-label="Color meaning system">
          {legend.map((item) => (
            <div key={item.label} className={`sequence-key-item sequence-key-${item.tone}`} role="listitem">
              <span className="sequence-key-dot" aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="runtime-surface panel"
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <svg viewBox="0 0 1240 380" className="runtime-map" role="img" aria-labelledby="runtime-title runtime-description">
          <title id="runtime-title">Governed execution runtime</title>
          <desc id="runtime-description">
            A proposal enters the system, authority is evaluated, the decision branches, one path continues to execution and proof, and one path is denied.
          </desc>

          <defs>
            <filter id="runtimeGlow" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path className="runtime-path runtime-path-entry" d="M0 168 H44" />
          <path className="runtime-path runtime-path-main" d="M234 168 H286" />
          <path className="runtime-path runtime-path-main" d="M476 168 H528" />
          <path className="runtime-path runtime-path-allow" d="M718 168 C760 168 760 106 768 106 H1002" />
          <path className="runtime-path runtime-path-deny" d="M718 168 C760 168 760 260 768 260 H956" />
          <path className="runtime-path runtime-path-proof" d="M1192 106 H1240" />

          {!reduceMotion ? (
            <>
              <circle className="runtime-pulse runtime-pulse-main" r="5" filter="url(#runtimeGlow)">
                <animateMotion dur="4.8s" repeatCount="indefinite" path="M0 168 H44 H234 H286 H476 H528 H718" />
              </circle>
              <circle className="runtime-pulse runtime-pulse-allow" r="5.5" filter="url(#runtimeGlow)">
                <animateMotion dur="4.8s" begin="1.2s" repeatCount="indefinite" path="M718 168 C760 168 760 106 768 106 H1002 H1192 H1240" />
              </circle>
              <circle className="runtime-pulse runtime-pulse-deny" r="4.5" filter="url(#runtimeGlow)">
                <animateMotion dur="4.8s" begin="1.2s" repeatCount="indefinite" path="M718 168 C760 168 760 260 768 260 H956" />
              </circle>
              <circle className="runtime-scan" cx="381" cy="168" r="54">
                <animate attributeName="r" values="48;68;48" dur="2.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.18;0;0.18" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <circle className="runtime-proof-ring" cx="1097" cy="106" r="44">
                <animate attributeName="r" values="40;60;40" dur="2.8s" begin="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.24;0;0.24" dur="2.8s" begin="1.8s" repeatCount="indefinite" />
              </circle>
            </>
          ) : null}

          <RuntimeNode {...GOVERNED_SEQUENCE_STEPS[0]} />
          <RuntimeNode {...GOVERNED_SEQUENCE_STEPS[1]} />
          <RuntimeNode {...GOVERNED_SEQUENCE_STEPS[2]} />
          <RuntimeNode {...GOVERNED_SEQUENCE_BRANCHES[0]} />
          <RuntimeNode {...GOVERNED_SEQUENCE_BRANCHES[1]} />
          <RuntimeNode {...GOVERNED_SEQUENCE_PROOF} />
        </svg>
      </motion.div>
    </section>
  );
}

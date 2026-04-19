import styles from "./Process.module.css";

const steps = [
  {
    num: "01",
    phase: "Enquiry",
    title: "Enquiry & Brief",
    text: "Share your concept, tech pack, or reference samples with our development team. We conduct a thorough feasibility study and provide formal costing — so you can make informed decisions from day one.",
    highlight: "Formal costing within 48 hours",
  },
  {
    num: "02",
    phase: "Development",
    title: "Sampling & Refinement",
    text: "Our precision sampling process delivers accurate prototypes with minimal revision rounds. We iterate collaboratively with your design team until you achieve 100% satisfaction — before a single unit of production begins.",
    highlight: "Iterative refinement until 100% satisfaction",
  },
  {
    num: "03",
    phase: "Commitment",
    title: "Price & Timeline Lock",
    text: "Once approved, we lock in all commercial terms — pricing, quantities, and delivery schedules. No hidden escalations. No renegotiation. Your Zero-Surprise Policy guarantee begins here.",
    highlight: "Firm pricing, quantities & delivery schedules",
  },
  {
    num: "04",
    phase: "Production",
    title: "In-Line Production",
    text: "Production begins with continuous quality oversight. You receive real-time updates and have visibility into every stage of manufacturing. Our in-line QC team ensures every garment meets the approved standard throughout — not just at the end.",
    highlight: "Real-time updates & strict in-line QC",
  },
  {
    num: "05",
    phase: "Dispatch",
    title: "Logistics & Export",
    text: "Professional packing and comprehensive export documentation prepared for seamless global delivery. We handle the complexity of international logistics so your collection arrives exactly as planned — at your warehouse or direct to your 3PL.",
    highlight: "Full export documentation for global delivery",
  },
];

export default function Process({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="process">
      {!hideHeader && (
        <>
          <div className="section-eyebrow">How We Work</div>
          <h2 className="section-title">
            A Process Engineered<br />
            for Predictability.
          </h2>
          <p className="section-sub">
            B2B buyers need a standardized, repeatable process. Ours is designed to
            give you certainty at every stage — from first enquiry to final
            delivery.
          </p>
        </>
      )}

      <div className={styles.timeline}>
        {steps.map((step) => (
          <div key={step.num} className={styles.step}>
            <div className={styles.numWrap}>
              <div className={styles.num}>{step.num}</div>
              <span className={styles.phase}>{step.phase}</span>
            </div>
            <div className={styles.content}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className={styles.highlight}>{step.highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

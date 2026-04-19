import styles from "./WhyChoose.module.css";

const cards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 2L2 7v11h6v-5h4v5h6V7L10 2z" />
      </svg>
    ),
    title: "35+ Years of Mastery",
    text: "A proven track record across multiple fashion cycles. Our institutional knowledge in premium flat-knit manufacturing is unmatched in the industry.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l3 3" stroke="#1C1C1C" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "Zero-Surprise Policy",
    text: "Transparent communication and firm deadlines are non-negotiable. We provide formal costing within 48 hours and lock in timelines before production begins.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <path
          d="M4 4h12v12H4z M4 10h12 M10 4v12"
          stroke="#1C1C1C"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    ),
    title: "Full-Cycle Solution",
    text: "From yarn sourcing and design development through production, quality control, and export documentation — everything under one roof.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <polygon points="10,2 18,16 2,16" />
      </svg>
    ),
    title: "Technical Agility",
    text: "Advanced flat-knitting technology capable of executing even the most complex designs with industrial precision and artisanal attention to detail.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className={styles.section}>
      <div className="section-eyebrow">Our Differentiators</div>
      <h2 className="section-title">
        Built to Eliminate Supply<br />
        Chain Headaches.
      </h2>
      <p className="section-sub">
        Every process, every hire, every investment has been made with one
        objective: repeatable, premium-grade quality — on time, every time.
      </p>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

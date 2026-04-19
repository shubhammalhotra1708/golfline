import styles from "./Capabilities.module.css";

const capabilities = [
  {
    num: "01",
    title: "Design & Development",
    text: "Collaborative conceptualization from rough sketch to full tech pack. Our development team ensures every design is industrially feasible without compromising its creative soul. We work with your creative directors to bridge the gap between artistry and production reality.",
    tag: "Tech Pack Support",
  },
  {
    num: "02",
    title: "Private Label Manufacturing",
    text: "Scalable, consistent production for D2C brands that require repeatable quality across collections and seasons. Your label. Our precision. Whether you're launching a capsule collection or scaling into full seasonal production, we build the process around you.",
    tag: "Scalable Production",
  },
  {
    num: "03",
    title: "Precision Sampling",
    text: "Fast-track prototyping engineered to minimize revision rounds and significantly accelerate your time-to-market. Our sampling team understands that speed and accuracy are not trade-offs — they are the standard. First-sample accuracy is our benchmark.",
    tag: "Fast-Track Proto",
  },
  {
    num: "04",
    title: "Rigorous QA/QC",
    text: "Multi-stage in-line inspections ensure every garment meets international compliance and luxury standards before it leaves our facility. Our quality control is integrated throughout production — not an afterthought at the end of the line.",
    tag: "International Standards",
  },
];

export default function Capabilities({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="capabilities">
      {!hideHeader && (
        <>
          <div className="section-eyebrow">Core Competencies</div>
          <h2 className="section-title">
            Technical Consulting,<br />
            Not Just a Factory.
          </h2>
          <p className="section-sub">
            We approach every brief as a technical problem to be solved — with
            feasibility, scalability, and brand integrity at the centre.
          </p>
        </>
      )}

      <div className={styles.grid}>
        {capabilities.map((cap) => (
          <div key={cap.num} className={styles.card} data-num={cap.num}>
            <h3>{cap.title}</h3>
            <p>{cap.text}</p>
            <span className={styles.tag}>{cap.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

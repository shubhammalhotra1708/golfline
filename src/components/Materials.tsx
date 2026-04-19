import styles from "./Materials.module.css";

const materials = [
  {
    tier: "Noble Fiber",
    name: "Cashmere",
    desc: "100% Pure Cashmere & Cashmere Blends. The apex of luxury knitwear softness.",
  },
  {
    tier: "Noble Fiber",
    name: "Merino Wool",
    desc: "Premium fine Merino. Renowned for its temperature regulation and next-to-skin comfort.",
  },
  {
    tier: "Noble Fiber",
    name: "Lambswool",
    desc: "Soft, resilient, and durable. The quintessential British heritage knitwear fiber.",
  },
  {
    tier: "Essential",
    name: "Cotton",
    desc: "Premium Cotton & Cotton Blends. Breathable, versatile, and seasonally appropriate.",
  },
  {
    tier: "Performance",
    name: "Technical Blends",
    desc: "Acrylic and Wool/Acrylic blends engineered for durability, consistency, and value.",
  },
];

export default function Materials({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="materials" className={styles.section}>
      {!hideHeader && (
        <>
          <div className={styles.eyebrow}>
            <span className={styles.line} />
            Material Expertise
          </div>
          <h2 className={`section-title ${styles.title}`}>
            The World&apos;s Finest Fibers,<br />
            Sourced with Precision.
          </h2>
          <p className={`section-sub ${styles.sub}`}>
            We source premium materials to ensure the hand-feel matches your
            brand&apos;s positioning — from ultra-luxury noble fibers to
            high-performance blends.
          </p>
        </>
      )}

      <div className={styles.grid}>
        {materials.map((mat) => (
          <div key={mat.name} className={styles.card}>
            <div className={styles.img}>
              <div className={styles.knitPattern} />
              <span>Macro texture</span>
            </div>
            <div className={styles.tier}>{mat.tier}</div>
            <h3>{mat.name}</h3>
            <p>{mat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>Est. 1989 &nbsp;&middot;&nbsp; Ludhiana, India</div>
        <h1 className={styles.title}>
          Where Artisanal<br />
          Craftsmanship Meets<br />
          <em>Industrial Precision.</em>
        </h1>
        <p className={styles.sub}>
          With 35+ years of expertise, Golfline is your full-cycle partner for
          premium flat-knit manufacturing. We transform your stylistic vision
          into market-ready reality.
        </p>
        <div className={styles.actions}>
          <a href="/contact" className="btn-primary">
            Request a Quote
          </a>
          <a href="/process" className="btn-outline">
            View Our Process
          </a>
        </div>
      </div>

      <div className={styles.imagePanel}>
        <div className={styles.imageBlock}>
          <div className={styles.imgPlaceholder}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="50" height="50" stroke="white" strokeWidth="1" />
              <line x1="1" y1="13" x2="51" y2="13" stroke="white" strokeWidth="0.5" />
              <line x1="1" y1="25" x2="51" y2="25" stroke="white" strokeWidth="0.5" />
              <line x1="1" y1="37" x2="51" y2="37" stroke="white" strokeWidth="0.5" />
              <line x1="13" y1="1" x2="13" y2="51" stroke="white" strokeWidth="0.5" />
              <line x1="25" y1="1" x2="25" y2="51" stroke="white" strokeWidth="0.5" />
              <line x1="37" y1="1" x2="37" y2="51" stroke="white" strokeWidth="0.5" />
            </svg>
            <span>Hi-res imagery — flat-knit machinery</span>
          </div>
        </div>
        <div className={styles.badge}>
          <strong>35+</strong>
          Years of Mastery
        </div>
      </div>
    </section>
  );
}

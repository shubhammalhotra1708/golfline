import styles from "./About.module.css";

export default function About({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.image}>
        <div className={styles.imgPlaceholder}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="46" height="46" stroke="white" strokeWidth="0.8" />
            <line x1="1" y1="17" x2="47" y2="17" stroke="white" strokeWidth="0.4" />
            <line x1="1" y1="31" x2="47" y2="31" stroke="white" strokeWidth="0.4" />
            <line x1="17" y1="1" x2="17" y2="47" stroke="white" strokeWidth="0.4" />
            <line x1="31" y1="1" x2="31" y2="47" stroke="white" strokeWidth="0.4" />
          </svg>
          <span>Flat-knitting machinery</span>
        </div>
        <div className={styles.imgOverlay}>
          <p>
            Advanced Shima Seiki flat-knit technology, operated by craftspeople
            with decades of institutional knowledge.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {!hideHeader && (
          <>
            <div className="section-eyebrow">Our Story</div>
            <h2 className="section-title">
              Three Decades of<br />
              Knitwear Excellence.
            </h2>
          </>
        )}
        <p className={styles.body}>
          Founded in 1989, Golfline began as a specialist flat-knit atelier in
          Ludhiana — India&apos;s knitwear capital. Over 35 years, we have
          evolved from a regional supplier into a full-cycle global
          manufacturing partner for premium D2C brands across Europe, North
          America, and Asia.
        </p>
        <p className={styles.body}>
          Our growth has been driven not by volume, but by an unwavering
          commitment to quality, reliability, and the deep technical expertise
          that only comes from decades of focused specialisation. We bridge the
          gap between creative vision and industrial reality.
        </p>

        <div className={styles.missionVision}>
          <div className={styles.mvCard}>
            <div className={styles.mvLabel}>Our Vision</div>
            <p>
              To be the definitive manufacturing partner for global high-end D2C
              brands, setting the standard for innovation, reliability, and
              artisanal authenticity in knitwear.
            </p>
          </div>
          <div className={styles.mvCard}>
            <div className={styles.mvLabel}>Our Mission</div>
            <p>
              We bridge creative vision and industrial reality — combining
              legacy craftsmanship with cutting-edge technology so brands can
              scale without compromising quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from "./CtaStrip.module.css";

export default function CtaStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.text}>
        <h2>Ready to Eliminate the Guesswork?</h2>
        <p>Share your brief and receive a formal costing within 48 hours.</p>
      </div>
      <a href="/contact" className={styles.btn}>
        Request a Quote Today
      </a>
    </div>
  );
}

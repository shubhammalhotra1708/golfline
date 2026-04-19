import styles from "./FounderPromise.module.css";

export default function FounderPromise() {
  return (
    <section id="promise" className={styles.promise}>
      <div className={styles.inner}>
        <h2 className={styles.eyebrow}>
          <span className={styles.line} />
          The Founder&apos;s Promise
        </h2>
        <p className={styles.text}>
          &ldquo;I understand the frustrations of inconsistent quality and
          delayed timelines that plague the fashion industry. At Golfline, we
          have built a team and a process specifically designed to eliminate
          these risks at the root. We don&apos;t just execute; we partner in
          your success.&rdquo;
        </p>
        <span className={styles.attr}>&mdash; Founder, Golfline</span>
      </div>
    </section>
  );
}

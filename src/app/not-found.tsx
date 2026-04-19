import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.text}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a href="/" className="btn-primary">
          Back to Home
        </a>
      </div>
    </section>
  );
}

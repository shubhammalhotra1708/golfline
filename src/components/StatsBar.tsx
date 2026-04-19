import styles from "./StatsBar.module.css";

const stats = [
  { num: "35+", label: "Years of Expertise" },
  { num: "<48h", label: "Quote Response Time" },
  { num: "100%", label: "In-Line Quality Control" },
  { num: "5", label: "Full-Cycle Phases" },
];

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.item}>
          <span className={styles.num}>{stat.num}</span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Materials", href: "/materials" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <a href="/" className={styles.logo}>
          GOLF<span>LINE</span>
        </a>
        <div className={styles.links}>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copy}>
          &copy; {new Date().getFullYear()} Golfline Manufacturing Pvt. Ltd. All
          rights reserved.
        </span>
        <span className={styles.tagline}>
          Artisanal Craftsmanship. Industrial Precision.
        </span>
      </div>
    </footer>
  );
}

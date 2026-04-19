"use client";

import { useState } from "react";
import styles from "./Nav.module.css";

const navLinks = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Materials", href: "/materials" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        GOLF<span>LINE</span>
      </a>

      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href="/contact" className={styles.cta}>
            Request a Quote
          </a>
        </li>
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? styles.hamburgerLineOpen : undefined} />
        <span className={menuOpen ? styles.hamburgerLineOpen : undefined} />
        <span className={menuOpen ? styles.hamburgerLineOpen : undefined} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                className={styles.mobileCta}
                onClick={() => setMenuOpen(false)}
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

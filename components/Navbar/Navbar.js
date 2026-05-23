'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: "Plant Type's", href: '#trendy', hasArrow: true },
  { label: 'More', href: '#bestsellers' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>
          {/* Logo */}
          <a href="#home" className={styles.logo}>
            <div className={styles.logoIcon}>🪴</div>
            <span className={styles.logoText}>Planto<span>.</span></span>
          </a>

          {/* Nav Links */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={link.active ? styles.active : ''}
                >
                  {link.label}
                  {link.hasArrow && <span className={styles.arrow}>▾</span>}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className={styles.navActions}>
            <button className={styles.iconBtn} aria-label="Search">🔍</button>
            <button className={styles.iconBtn} aria-label="Cart">🛒</button>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}

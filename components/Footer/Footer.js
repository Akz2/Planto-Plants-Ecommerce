import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🪴</span>
            <span className={styles.logoText}>Planto<span>.</span></span>
          </div>
          <p className={styles.tagline}>
            Bringing nature closer to you. Premium plants for every space and lifestyle.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn} aria-label="Instagram">📸</a>
            <a href="#" className={styles.socialBtn} aria-label="Twitter">🐦</a>
            <a href="#" className={styles.socialBtn} aria-label="Facebook">📘</a>
            <a href="#" className={styles.socialBtn} aria-label="YouTube">▶️</a>
          </div>
        </div>

        {/* Links */}
        <div className={styles.linksGroup}>
          <h4 className={styles.groupTitle}>Plant Types</h4>
          <ul className={styles.links}>
            <li><a href="#">Indoor Plants</a></li>
            <li><a href="#">Outdoor Plants</a></li>
            <li><a href="#">Desk Plants</a></li>
            <li><a href="#">Air Purifiers</a></li>
            <li><a href="#">Succulents</a></li>
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.groupTitle}>Company</h4>
          <ul className={styles.links}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.groupTitle}>Support</h4>
          <ul className={styles.links}>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>© 2024 Planto. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

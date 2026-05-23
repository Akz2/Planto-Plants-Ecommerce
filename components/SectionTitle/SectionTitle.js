import styles from './SectionTitle.module.css';

export default function SectionTitle({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.bracket} ${styles.bracketLeft}`}>
        <span className={styles.line} />
        <span className={styles.line} />
      </div>
      <h2 className={styles.title}>{children}</h2>
      <div className={`${styles.bracket} ${styles.bracketRight}`}>
        <span className={styles.line} />
        <span className={styles.line} />
      </div>
    </div>
  );
}

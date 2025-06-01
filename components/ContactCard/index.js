import styles from './styles.module.css';
import SocialIcons from '../SocialIcons';

export default function ContactCard() {
  return (
    <section className={styles.contactCard}>
      <h3 className={styles.title}>Contact</h3>
      <p className={styles.text}>
        Get in touch or shoot me an email directly on <br/>
        <a
          href={'mailto:imarpitkaushal@gmail.com'}
          target="_blank"
          rel="noreferrer"
        >
          ✉️ imarpitkaushal@gmail.com
        </a>
      </p>
      <a href="/resume.pdf" download className={styles.button}>
        <span className={styles.buttonIcon}>⬇️</span> Download Resume
      </a>
      <SocialIcons />
    </section>
  );
} 
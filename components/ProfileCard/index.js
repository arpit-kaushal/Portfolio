import styles from './styles.module.css';

export default function ProfileCard() {
  return (
    <section className={styles.profileCard}>
      <img src="/my-pic.png" alt="Profile" className={styles.profileImg} />
      <h1 className={styles.name}>Arpit Kaushal</h1>
      <h2 className={styles.title}>Student at KIIT University</h2>
    </section>
  );
} 
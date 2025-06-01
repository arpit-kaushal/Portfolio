import styles from './styles.module.css';

const LOGO_MAPPING = {
	react: "https://cogoport-production.sgp1.digitaloceanspaces.com/60f19d21e99a8e720647ba8a6bb4646a/react.png",
	javascript:
		"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
	python: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
	html: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
	java: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
  css: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png'
};


export default function SkillsCard() {
  return (
    <section className={styles.skillsCard}>
      <h3 className={styles.title}>Skills</h3>
      <div className={styles.section}>
        <div className={styles.skillsRow}>
          <div className={styles.skill}><span className={styles.icon}><img src={LOGO_MAPPING['html']} alt="logo" /></span>HTML</div>
          <div className={styles.skill}><span className={styles.icon}><img src={LOGO_MAPPING['css']} alt="logo" /></span>CSS</div>
          <div className={styles.skill}><span className={styles.icon}><img src={LOGO_MAPPING['javascript']} alt="logo" /></span>Javascript</div>
          <div className={styles.skill}><span className={styles.icon}><img src={LOGO_MAPPING['react']} alt="logo" /></span>React</div>
          <div className={styles.skill}><span className={styles.icon}><img src={LOGO_MAPPING['python']} alt="logo" /></span>Python</div>
        </div>
      </div>
    </section>
  );
} 
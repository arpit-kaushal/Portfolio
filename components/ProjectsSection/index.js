import styles from './styles.module.css';

function ProjectCard({ title, description, icons }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectIcons}>{icons}</div>
      <h4 className={styles.projectTitle}>{title}</h4>
      <p className={styles.projectDesc}>{description}</p>
      {/* <div className={styles.projectImage}></div> */}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <ProjectCard
        title="Power Consumption Monitoring & Prediction System"
        description="Developed a Power Monitoring and Prediction System with real-time visualization. Used AI to forecast usage and detect anomalies for proactive maintenance. Integrated Blynk, ThingSpeak, and Telegram for IoT monitoring and instant alerts."
        icons={
          <>
            <span className={styles.icon}>Python</span>
            <span className={styles.icon}>HTML</span>
            <span className={styles.icon}>JS</span>
          </>
        }
      />
      <ProjectCard
        title="Web Scraper with AI Chatbot"
        description="Built a scalable web scraper using Python and HTML to automate data extraction from multiple websites. Used AI to adapt to site changes and accurately parse content. Included scheduling, custom rules, and easy analytics integration."
        icons={<span className={styles.icon}>Python</span>}
      />
    </section>
  );
} 
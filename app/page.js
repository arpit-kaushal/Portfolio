import styles from "./page.module.css";
import ProfileCard from "../components/ProfileCard";
import AboutCard from "../components/AboutCard";
import ProjectsSection from "../components/ProjectsSection";
import SkillsCard from "../components/SkillsCard";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <main className={styles.mainGrid}>
      <div className={styles.leftColumn}>
        <ProfileCard />
        <AboutCard />
      </div>
      <div className={styles.rightColumn}>
        <ProjectsSection />
        <div className={styles.bottomRight}>
          <SkillsCard />
          <ContactCard />
        </div>
      </div>
    </main>
  );
}

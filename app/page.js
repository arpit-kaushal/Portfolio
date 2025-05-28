import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.name}>Arpit Kaushal</h1>
        <p className={styles.subtitle}>From KIIT Bhubneshwar</p>
      </div>
      <img src="my-pic.png" alt="My Photo" className={styles.picture}></img>
    </div>
  );
}

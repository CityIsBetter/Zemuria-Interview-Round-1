import Image from "next/image";
import styles from "./page.module.css";
import ABTest from "@/components/ABTest";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>A/B Testing using NextJS</div>
      <ABTest />
    </main>
  );
}

import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let code = `
  export default function MyButton() {
    return <button className={styles.buttons}>I'm button</button>;
  }
  `;
  return (
    <main className={styles.main}>
      <div className={styles.center}>Hack Your Interview</div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Java <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Resuelve preguntas de Java.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            JavaScript <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Responde preguntas de JavaScript</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Python <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Responde preguntas de Python</p>
        </a>
      </div>

      <div className={styles.description}>
        <p>
          <code className={styles.code}>{code}</code>
        </p>
      </div>
    </main>
  );
}

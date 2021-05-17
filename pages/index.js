import Head from "next/head";
import styles from "../styles/Main.module.css";
import globalStyles from "../styles/Global.module.css";
import terminalStyles from "../styles/Terminal.module.css";

export default function Main() {
  return (
    <div className={globalStyles.container}>
      <Head>
        <title>0x6a6f - Johannes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={globalStyles.main}>
        <div className={styles.title}>
          <div className={styles.title_left}>Portfolio</div>
          <div className={styles.title_right}>2021</div>
        </div>
        <div className={styles.about}>
          <div className={styles.creator}>Johannes Holzhauer</div>
          <div className={styles.creator_description}>
            Web Developer
            <br />
            Student for Applied Computer Science
          </div>
        </div>

        <div className={terminalStyles.container}>
          <div className={terminalStyles.header}>holzhauer@jo:~</div>
          <div className={terminalStyles.main}>
            <div className={terminalStyles.line}>
              <div className={terminalStyles.prefix}>holzhauer@jo:~$</div>
              date
            </div>
            <div className={terminalStyles.line}>
              {new Date().toDateString()} {new Date().toLocaleTimeString()}
            </div>
            <div className={terminalStyles.line}>
              <div className={terminalStyles.prefix}>holzhauer@jo:~$</div>
              ls
            </div>
            <div className={terminalStyles.line}>lib home readme.txt usr</div>
            <div className={terminalStyles.line}>
              <div className={terminalStyles.prefix}>holzhauer@jo:~$</div>
              cd home/projects
            </div>
            <div className={terminalStyles.line}>
              <div className={terminalStyles.prefix}>holzhauer@jo:~/home/projects$</div>
              ls
            </div>
            <div className={terminalStyles.line}>
              <a
                href="https://sektor-v.stream"
                target="_blank"
                rel="noopener noreferrer"
              >
                sektor-v.stream
              </a>
            </div>
            <div className={terminalStyles.line}>
              <a
                href="https://schwarzwasser.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                schwarzwasser.ru
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className={globalStyles.footer}>
        <a
          href="https://github.com/0x6a6f68616e6e6573"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Copyright 2021, Johannes Holzhauer
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  );
}

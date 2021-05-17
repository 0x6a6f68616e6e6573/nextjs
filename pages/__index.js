import Head from "next/head";
import styles from "../styles/Home.module.css";
import globalStyles from "../styles/Global.module.css";

export default function Home() {
  return (
    <div className={globalStyles.container}>
      <Head>
        <title>Johannes - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://github.com/0x6a6f68616e6e6573"
            target="_blank"
            rel="noopener noreferrer"
          >
            0x6a6f's
          </a>{" "}
          Homepage
        </h1>

        <p className={styles.description}>
          View some of my previous examples at{" "}
          <code className={styles.code}>
            <a
              href="https://github.com/0x6a6f68616e6e6573"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://sektor-v.stream"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Sektor-V Stream &rarr;</h3>
            <p>
              Find active streamers playing on the GTA V Roleplay Server:
              <br></br>
              Sektor-V.eu
            </p>
          </a>

          <a
            href="https://schwarzwasser.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Bingo &rarr;</h3>
            <p>
              A Bingo-App about actions that take part in the Twitch stream:
              <br></br>
              Sektor-V.eu
            </p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
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

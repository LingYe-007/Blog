import { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import styles from "../styles/aboutMe.module.css";

const AboutMe: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LingYe-About Me</title>
        <meta name="description" content="灵野的开源作品"></meta>
      </Head>
      <Header/>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default AboutMe;

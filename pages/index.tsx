import type { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import IdCard from "../component/idCard";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LingYe-Code Builde World</title>
        <meta
          name="description"
          content="灵野的个人博客,用来记录成长的每一天"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <IdCard></IdCard>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

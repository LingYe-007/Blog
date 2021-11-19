import { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import IdCard from "../component/idCard";
import Res from '../pages/markdown/resume.mdx'
import styles from '../styles/resume.module.css'

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LingYe-My Experience</title>
        <meta name="description" content="灵野的简历"></meta>
      </Head>
      <Header>
      </Header>
      <div className={styles.mask}>
      <main className={styles.main}>
      <div className={styles.resume}><Res></Res></div>
        <IdCard></IdCard>
      </main>
      </div>
    </div>
  );
};

export default Resume;

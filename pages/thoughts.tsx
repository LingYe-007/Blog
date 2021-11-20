import { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import IdCard from "../component/idCard";
import Think from "../component/think";
import AboutMe from "./aboutMe";
import styles from '../styles/thoughts.module.css'

const Thoughts: NextPage = () => {
  
  const thoughts={
    img:"无语",
    userName:"灵野",
    personLable:"nothing can be me",
    content:"nothing wrong",
    time:'2021/11/20'
  }

  return (
    <div>
      <Head>
        <title>LingYe-Thoughts</title>
        <meta name='thoughts' content='灵野的随想'></meta>
      </Head>
      <Header/>
      <div className={styles.mask}>
      <main className={styles.main}>
        <div className={styles.thoughts}>
          <Think {...thoughts}></Think>
        </div>
        <IdCard></IdCard>
      </main>
      </div>
    </div>
  );
};

export default Thoughts;

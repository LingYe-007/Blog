/* eslint-disable react/no-children-prop */
import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../component/header";
import IdCard from "../component/idCard";
import styles from "../styles/aboutMe.module.css";
import MkMe from "../pages/markdown/aboutMe.mdx";
import Markdown from "../component/markdown";

const AboutMe: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LingYe-About Me</title>
        <meta name="description" content="关于灵野"></meta>
      </Head>
      <Header />
      <div className={styles.mask}>
      <main className={styles.main}>
        <div className={styles.aboutMe}>
          <MkMe></MkMe>
        </div>
        <IdCard></IdCard>
      </main>
      </div>
    </div>
  );
};

export default AboutMe;

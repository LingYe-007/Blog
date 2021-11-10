import type { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import styles from "../styles/works.module.css";
import OpenSouce from "../component/openSouce";
import AboutMe from "./aboutMe";
import IdCard from "../component/idCard";

const project = {
  image:
    "https://git.kscampus.io:10443/web-react/course/raw/master/02-css-basics/imgs/grid_terms.png",
  title: "校庆项目",
  introduce: "基于微信小程序开发的Ant-deSign",
  status: "维护中",
  github: "xxx",
  preview: "hahah",
};

const Works: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LingYe-Thoughts</title>
        <meta name="thoughts" content="灵野的随想"></meta>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.projects}>
          <OpenSouce openSource={project}></OpenSouce>
        </div>
        <IdCard />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Works;
